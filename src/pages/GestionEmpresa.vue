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
import { API_BASE_URL } from "../config"; // Importar la constante
import { Notify } from "quasar";

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
  methods: {
    async obtenerEmpresas() {
      try {
        const response = await axios.get(
          `${API_BASE_URL}api/Empresa/ObtenerTodasLasEmpresasAsync`
        );
        console.log(response.data);
        this.empresas = response.data;
      } catch (error) {
        Notify.create({
          type: "negative",
          message: "Error al recuperar datos: " + error.message,
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
      console.log(empresa);
      new Modal(document.getElementById("empresaModal")).show();
    },
    guardarEmpresa() {
      if (this.isEdit) {
        axios
          .put(
            `${API_BASE_URL}api/Empresa/ActualizarEmpresaAsync`,
            this.empresaForm
          )
          .then(() => {
            this.obtenerEmpresas();
            Modal.getInstance(document.getElementById("empresaModal")).hide();

            Notify.create({
              type: "positive",
              message: "Empresa editada correctamente",
              timeout: 3000, // Duración de la notificación en milisegundos
              position: "top", // Posición de la notificación
            });
          });
      } else {
        axios
          .post(
            `${API_BASE_URL}api/Empresa/CrearEmpresaAsync`,
            this.empresaForm
          )
          .then(() => {
            this.obtenerEmpresas();
            Modal.getInstance(document.getElementById("empresaModal")).hide();

            Notify.create({
              type: "positive",
              message: "Empresa creada correctamente",
              timeout: 3000, // Duración de la notificación en milisegundos
              position: "top", // Posición de la notificación
            });
          });
      }
    },
    deleteEmpresa(ruc) {
      axios.delete(`${API_BASE_URL}api/Empresa/${ruc}`).then(() => {
        this.obtenerEmpresas();
      });
    },
  },
  mounted() {
    this.obtenerEmpresas();
  },
};
</script>
