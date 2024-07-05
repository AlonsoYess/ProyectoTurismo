<template>
  <q-page class="container">
    <h1 class="text-center">Lista de Actividades</h1>
    <button class="btn btn-primary mb-3" @click="showAddModal">
      Agregar Actividad
    </button>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Título</th>
          <th>Descripción</th>
          <th>Destino</th>
          <th>Fecha de Inicio</th>
          <th>Fecha de Fin</th>
          <th>Empresa</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="actividad in actividades" :key="actividad.id">
          <td>{{ actividad.titulo }}</td>
          <td>{{ actividad.descripcion }}</td>
          <td>{{ actividad.destino }}</td>
          <td>{{ new Date(actividad.fechaInicio).toLocaleDateString() }}</td>
          <td>{{ new Date(actividad.fechaFin).toLocaleDateString() }}</td>
          <td>{{ actividad.empresa }}</td>
          <td>
            <img
              :src="`https://localhost:7012/imagenes/${actividad.imagen}`"
              class="img-thumbnail"
              style="max-width: 100px; max-height: 100px"
            />
          </td>
          <td>
            <button class="btn btn-warning" @click="showEditModal(actividad)">
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Agregar/Editar -->
    <div
      class="modal fade"
      id="actividadModal"
      tabindex="-1"
      aria-labelledby="actividadModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="actividadModalLabel">
              {{ isEdit ? "Editar Actividad" : "Agregar Actividad" }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="guardarActividad">
              <div class="mb-3">
                <label for="titulo" class="form-label">Título</label>
                <input
                  type="text"
                  class="form-control"
                  id="titulo"
                  v-model="actividadForm.titulo"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="descripcion" class="form-label">Descripción</label>
                <input
                  type="text"
                  class="form-control"
                  id="descripcion"
                  v-model="actividadForm.descripcion"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="destino" class="form-label">Destino</label>
                <input
                  type="text"
                  class="form-control"
                  id="destino"
                  v-model="actividadForm.destino"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="fechaInicio" class="form-label"
                  >Fecha de Inicio</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="fechaInicio"
                  v-model="actividadForm.fechaInicio"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="fechaFin" class="form-label">Fecha de Fin</label>
                <input
                  type="date"
                  class="form-control"
                  id="fechaFin"
                  v-model="actividadForm.fechaFin"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="precio" class="form-label">Precio</label>
                <input
                  type="number"
                  class="form-control"
                  id="precio"
                  v-model="actividadForm.precio"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="capacidad" class="form-label">Capacidad</label>
                <input
                  type="number"
                  class="form-control"
                  id="capacidad"
                  v-model="actividadForm.capacidad"
                  qrequired
                />
              </div>

              <div class="mb-3">
                <label for="empresaId" class="form-label">Empresa</label>
                <select
                  class="form-select"
                  id="empresaId"
                  v-model="actividadForm.empresaId"
                  required
                >
                  <option
                    v-for="empresa in empresas"
                    :key="empresa.id"
                    :value="empresa.id"
                  >
                    {{ empresa.nombre }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="imagen" class="form-label">Imagen</label>
                <input
                  type="file"
                  class="form-control"
                  id="imagen"
                  @change="handleImageUpload($event)"
                  accept="image/*"
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
import { Notify, Dialog } from "quasar";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      actividades: [],
      empresas: [],
      actividadForm: {
        titulo: "",
        descripcion: "",
        destino: "",
        fechaInicio: "",
        fechaFin: "",
        precio: 0,
        capacidad: 0,
        empresaId: null,
        imagen: "",
      },
      isEdit: false,
      currentActividadId: null,
      selectedImage: null,
    };
  },
  computed: {
    ...mapGetters(["getUser"]), // Importar el getter 'getUser' desde Vuex
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedImage = file;
        this.actividadForm.imagen = file.name; // Guardar el nombre del archivo en actividadForm
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
    async obtenerEmpresas() {
      try {
        const token = this.getUser.token; // Obtener el token directamente desde Vuex

        const response = await axios.get(
          `${API_BASE_URL}api/Empresa/ObtenerTodasLasEmpresasAsync`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        this.empresas = response.data;
      } catch (error) {
        Notify.create({
          type: "negative",
          message: "Error al recuperar empresas: " + error.message,
        });
      }
    },
    showAddModal() {
      this.isEdit = false;
      this.actividadForm = {
        titulo: "",
        descripcion: "",
        destino: "",
        fechaInicio: "",
        fechaFin: "",
        precio: 0,
        capacidad: 0,
        empresaId: null,
        imagen: "",
      };
      new Modal(document.getElementById("actividadModal")).show();
    },
    showEditModal(actividad) {
      actividad.fechaInicio = new Date(actividad.fechaInicio)
        .toISOString()
        .split("T")[0];

      actividad.fechaFin = new Date(actividad.fechaFin)
        .toISOString()
        .split("T")[0];

      this.isEdit = true;
      this.currentActividadId = actividad.id;

      this.actividadForm = { ...actividad };

      new Modal(document.getElementById("actividadModal")).show();
    },
    async guardarActividad() {
      const token = this.getUser.token; // Obtener el token directamente desde Vuex

      const formData = new FormData();
      formData.append("id", this.actividadForm.id);
      formData.append("titulo", this.actividadForm.titulo);
      formData.append("descripcion", this.actividadForm.descripcion);
      formData.append("destino", this.actividadForm.destino);
      formData.append("fechaInicio", this.actividadForm.fechaInicio);
      formData.append("fechaFin", this.actividadForm.fechaFin);
      formData.append("precio", this.actividadForm.precio);
      formData.append("capacidad", this.actividadForm.capacidad);
      formData.append("empresaId", this.actividadForm.empresaId);
      if (this.selectedImage) {
        formData.append("imagen", this.selectedImage);
      } else {
        formData.append("ImagenAnterior", this.actividadForm.imagen);
      }

      const url = this.isEdit
        ? `${API_BASE_URL}api/Actividad/ActualizarActividad`
        : `${API_BASE_URL}api/Actividad/CrearActividad`;

      axios
        .post(url, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          this.obtenerActividades();
          Modal.getInstance(document.getElementById("actividadModal")).hide();

          Notify.create({
            type: "positive",
            message: this.isEdit
              ? "Actividad editada correctamente"
              : "Actividad creada correctamente",
            timeout: 3000,
            position: "top",
          });
        })
        .catch((error) => {
          Notify.create({
            type: "negative",
            message: this.isEdit
              ? "Error al editar la actividad: " + error.message
              : "Error al crear la actividad: " + error.message,
            timeout: 3000,
            position: "top",
          });
        });
    },
    deleteActividad(id) {
      const token = this.getUser.token; // Obtener el token directamente desde Vuex

      axios
        .delete(`${API_BASE_URL}api/Actividad/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          this.obtenerActividades();
          Notify.create({
            type: "positive",
            message: "Actividad eliminada correctamente",
            timeout: 3000,
            position: "top",
          });
        })
        .catch((error) => {
          Notify.create({
            type: "negative",
            message: "Error al eliminar la actividad: " + error.message,
            timeout: 3000,
            position: "top",
          });
        });
    },
  },
  mounted() {
    this.obtenerActividades();
    this.obtenerEmpresas();
  },
};
</script>
