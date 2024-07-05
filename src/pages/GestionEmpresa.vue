<template>
  <q-page class="container">
    <h1 class="text-center">Lista de Empresas</h1>
    <button class="btn btn-primary mb-3" @click="showAddModal">
      Agregar Empresa
    </button>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>RUC</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empresa in empresas" :key="empresa.id">
          <td>{{ empresa.nombre }}</td>
          <td>{{ empresa.ruc }}</td>
          <td>{{ empresa.email }}</td>
          <td>
            <button class="btn btn-warning" @click="showEditModal(empresa)">
              Editar
            </button>
            <!--<button class="btn btn-danger" @click="deleteEmpresa(empresa.id)">
              Eliminar
            </button>-->
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Agregar/Editar -->
    <div
      class="modal fade"
      id="empresaModal"
      tabindex="-1"
      aria-labelledby="empresaModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="empresaModalLabel">
              {{ isEdit ? "Editar Empresa" : "Agregar Empresa" }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="guardarEmpresa">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  v-model="empresaForm.nombre"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="ruc" class="form-label">RUC</label>
                <input
                  type="text"
                  class="form-control"
                  id="ruc"
                  v-model="empresaForm.ruc"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="empresaForm.email"
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
import { API_BASE_URL } from "../config";
import { Notify } from "quasar";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      empresas: [],
      empresaForm: {
        Nombre: "",
        Ruc: "",
        Email: "",
      },
      isEdit: false,
      currentEmpresaId: null,
    };
  },
  computed: {
    ...mapGetters(["getUser"]), // Importar el getter 'getUser' desde Vuex
  },
  methods: {
    ...mapActions(["setUser"]),
    async obtenerEmpresas() {
      try {
        const token = this.getUser.token; // Obtener el token directamente desde Vuex

        const response = await axios.get(
          `${API_BASE_URL}api/Empresa/ObtenerTodasLasEmpresasAsync`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response.data);
        this.empresas = response.data;
      } catch (error) {
        console.error("Error al obtener empresas:", error);
        Notify.create({
          type: "negative",
          message: "Error al obtener empresas: " + error.message,
        });
      }
    },
    showAddModal() {
      this.isEdit = false;
      this.empresaForm = { Nombre: "", Ruc: "", Email: "" };
      new Modal(document.getElementById("empresaModal")).show();
    },
    showEditModal(empresa) {
      this.isEdit = true;
      this.currentEmpresaId = empresa.ruc;
      this.empresaForm = { ...empresa };
      new Modal(document.getElementById("empresaModal")).show();
    },
    guardarEmpresa() {
      if (this.isEdit) {
        axios
          .put(
            `${API_BASE_URL}api/Empresa/ActualizarEmpresaAsync`,
            this.empresaForm,
            { headers: { Authorization: `Bearer ${this.getUser.token}` } }
          )
          .then(() => {
            this.obtenerEmpresas();
            Modal.getInstance(document.getElementById("empresaModal")).hide();
            Notify.create({
              type: "positive",
              message: "Empresa editada correctamente",
              timeout: 3000,
              position: "top",
            });
          })
          .catch((error) => {
            console.error("Error al actualizar empresa:", error);
            Notify.create({
              type: "negative",
              message: "Error al actualizar empresa: " + error.message,
            });
          });
      } else {
        axios
          .post(
            `${API_BASE_URL}api/Empresa/CrearEmpresaAsync`,
            this.empresaForm,
            { headers: { Authorization: `Bearer ${this.getUser.token}` } }
          )
          .then(() => {
            this.obtenerEmpresas();
            Modal.getInstance(document.getElementById("empresaModal")).hide();
            Notify.create({
              type: "positive",
              message: "Empresa creada correctamente",
              timeout: 3000,
              position: "top",
            });
          })
          .catch((error) => {
            console.error("Error al crear empresa:", error);
            Notify.create({
              type: "negative",
              message: "Error al crear empresa: " + error.message,
            });
          });
      }
    },
    deleteEmpresa(ruc) {
      axios
        .delete(`${API_BASE_URL}api/Empresa/${ruc}`, {
          headers: { Authorization: `Bearer ${this.getUser.token}` },
        })
        .then(() => {
          this.obtenerEmpresas();
          Notify.create({
            type: "positive",
            message: "Empresa eliminada correctamente",
            timeout: 3000,
            position: "top",
          });
        })
        .catch((error) => {
          console.error("Error al eliminar empresa:", error);
          Notify.create({
            type: "negative",
            message: "Error al eliminar empresa: " + error.message,
          });
        });
    },
  },
  mounted() {
    this.obtenerEmpresas();
  },
};
</script>
