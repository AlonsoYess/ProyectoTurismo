<template>
  <q-page class="container">
    <h1 class="text-center">Lista de Itinerarios</h1>
    <button class="btn btn-primary mb-3" @click="showAddModal">
      Agregar Itinerario
    </button>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Actividad</th>
          <th>Día</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="itinerario in itinerarios" :key="itinerario.id">
          <td>{{ itinerario.actividad }}</td>
          <td>{{ itinerario.dia }}</td>
          <td>{{ itinerario.descripcion }}</td>
          <td>
            <button class="btn btn-warning" @click="showEditModal(itinerario)">
              Editar
            </button>
            <!--<button class="btn btn-danger" @click="deleteItinerario(itinerario.id)">
              Eliminar
            </button>-->
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Agregar/Editar -->
    <div
      class="modal fade"
      id="itinerarioModal"
      tabindex="-1"
      aria-labelledby="itinerarioModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="itinerarioModalLabel">
              {{ isEdit ? "Editar Itinerario" : "Agregar Itinerario" }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="guardarItinerario">
              <div class="mb-3">
                <label for="actividadId" class="form-label">Actividad</label>
                <select
                  class="form-control"
                  id="actividadId"
                  v-model="itinerarioForm.actividadId"
                  required
                >
                  <option
                    v-for="actividad in actividades"
                    :key="actividad.id"
                    :value="actividad.id"
                  >
                    {{ actividad.titulo }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="dia" class="form-label">Día</label>
                <input
                  type="number"
                  class="form-control"
                  id="dia"
                  v-model="itinerarioForm.dia"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="descripcion" class="form-label">Descripción</label>
                <input
                  type="text"
                  class="form-control"
                  id="descripcion"
                  v-model="itinerarioForm.descripcion"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">
                {{ isEdit ? "Guardar Cambios" : "Agregar" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
import { Modal } from "bootstrap";
import { API_BASE_URL } from "../config"; // Importar la constante
import { Notify } from "quasar";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      itinerarios: [],
      actividades: [],
      itinerarioForm: {
        actividadId: null,
        dia: null,
        descripcion: "",
      },
      isEdit: false,
      currentItinerarioId: null,
    };
  },
  computed: {
    ...mapGetters(["getUser"]), // Importar el getter 'getUser' desde Vuex
  },
  methods: {
    async obtenerItinerarios() {
      try {
        const token = this.getUser.token; // Obtener el token directamente desde Vuex

        const response = await axios.get(
          `${API_BASE_URL}api/Itinerario/ObtenerItinerarios`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        this.itinerarios = response.data;
      } catch (error) {
        Notify.create({
          type: "negative",
          message: "Error al recuperar itinerarios: " + error.message,
        });
      }
    },
    async obtenerActividades() {
      try {
        const token = this.getUser.token; // Obtener el token directamente desde Vuex

        const response = await axios.get(
          `${API_BASE_URL}api/Actividad/ObtenerTodasLasActividades`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        this.actividades = response.data;
      } catch (error) {
        Notify.create({
          type: "negative",
          message: "Error al recuperar actividades: " + error.message,
        });
      }
    },
    showAddModal() {
      this.isEdit = false;
      this.itinerarioForm = { actividadId: null, dia: null, descripcion: "" };
      new Modal(document.getElementById("itinerarioModal")).show();
    },
    showEditModal(itinerario) {
      this.isEdit = true;
      this.currentItinerarioId = itinerario.id;
      this.itinerarioForm = { ...itinerario };
      new Modal(document.getElementById("itinerarioModal")).show();
    },
    guardarItinerario() {
      if (this.isEdit) {
        axios
          .put(
            `${API_BASE_URL}api/Itinerario/ActualizarItinerario`,
            this.itinerarioForm,
            { headers: { Authorization: `Bearer ${this.getUser.token}` } }
          )
          .then(() => {
            this.obtenerItinerarios();
            Modal.getInstance(
              document.getElementById("itinerarioModal")
            ).hide();
            Notify.create({
              type: "positive",
              message: "Itinerario editado correctamente",
              timeout: 3000,
              position: "top",
            });
          })
          .catch((error) => {
            console.error("Error al actualizar itinerario:", error);
            Notify.create({
              type: "negative",
              message: "Error al actualizar itinerario: " + error.message,
            });
          });
      } else {
        axios
          .post(
            `${API_BASE_URL}api/Itinerario/CrearItinerario`,
            this.itinerarioForm,
            { headers: { Authorization: `Bearer ${this.getUser.token}` } }
          )
          .then(() => {
            this.obtenerItinerarios();
            Modal.getInstance(
              document.getElementById("itinerarioModal")
            ).hide();
            Notify.create({
              type: "positive",
              message: "Itinerario creado correctamente",
              timeout: 3000,
              position: "top",
            });
          })
          .catch((error) => {
            console.error("Error al crear itinerario:", error);
            Notify.create({
              type: "negative",
              message: "Error al crear itinerario: " + error.message,
            });
          });
      }
    },
    deleteItinerario(id) {
      axios
        .delete(`${API_BASE_URL}api/Itinerario/${id}`, {
          headers: { Authorization: `Bearer ${this.getUser.token}` },
        })
        .then(() => {
          this.obtenerItinerarios();
          Notify.create({
            type: "positive",
            message: "Itinerario eliminado correctamente",
            timeout: 3000,
            position: "top",
          });
        })
        .catch((error) => {
          console.error("Error al eliminar itinerario:", error);
          Notify.create({
            type: "negative",
            message: "Error al eliminar itinerario: " + error.message,
          });
        });
    },
  },
  mounted() {
    this.obtenerItinerarios();
    this.obtenerActividades();
  },
};
</script>
