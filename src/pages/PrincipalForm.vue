<template>
  <q-layout view="hHh lpR fFf">
    <!-- Topbar Start -->
    <div class="container-fluid bg-light pt-3 d-none d-lg-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center">
              <p><i class="fa fa-envelope mr-2"></i>info@turismogo.com</p>
              <p class="text-body px-3">|</p>
              <p><i class="fa fa-phone-alt mr-2"></i>+51 977 584 358</p>
            </div>
          </div>
          <div class="col-lg-6 text-center text-lg-right">
            <div class="d-inline-flex align-items-center">
              <a class="text-primary px-3">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="text-primary px-3">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="text-primary px-3">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="text-primary px-3">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="text-primary pl-3">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <div class="container-fluid position-relative nav-bar p-0">
      <div
        class="container-lg position-relative p-0 px-lg-3"
        style="z-index: 9"
      >
        <nav
          class="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5"
        >
          <a href="" class="navbar-brand">
            <h1 class="m-0 text-primary">
              <span class="text-dark">TURISMO</span>GO
            </h1>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between px-3"
            id="navbarCollapse"
          >
            <div class="navbar-nav ml-auto py-0">
              <a href="" class="nav-item nav-link active">Inicio</a>
              <a href="" class="nav-item nav-link">Nosotros</a>
              <a href="" class="nav-item nav-link">Excursiones</a>
              <a
                v-if="usuarioLogueado"
                class="nav-item nav-link"
                @click="misReservasModal()"
                >Mis Reservas</a
              >
              <div v-if="usuarioLogueado" class="">
                <a class="nav-item nav-link" @click="logout">
                  Hola! {{ usuario.nombre }}
                </a>
              </div>
              <a
                v-else
                @click="showLoginDialog = true"
                class="nav-item nav-link"
                style="cursor: pointer"
              >
                <i class="fas fa-user"></i> Login
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Navbar End -->

    <!-- Login Dialog -->
    <q-dialog v-model="showLoginDialog" no-scroll>
      <q-card class="my-login">
        <q-card-section class="my-login-section-cabecera">
          <div class="text-h6 text-primary text-center">Iniciar Sesión</div>
        </q-card-section>

        <q-card-section class="my-login-section">
          <q-input v-model="username" label="Usuario" />
          <q-input v-model="password" label="Contraseña" type="password" />
        </q-card-section>

        <q-btn
          flat
          label="Ingresar"
          color="primary"
          class="btn btn-outline-secondary login-btn w-100 mb-3"
          @click="login"
        />
      </q-card>
    </q-dialog>

    <!-- Carousel Start -->
    <div class="container-fluid p-0">
      <div id="header-carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="w-100"
              src="../assets/imagenes/carousel-2.jpg"
              alt="Image"
            />
            <div
              class="carousel-caption d-flex flex-column align-items-center justify-content-center"
            >
              <div class="p-3" style="max-width: 900px">
                <h4 class="text-white text-uppercase mb-md-3">
                  Viajes y excursiones
                </h4>
                <h1 class="display-3 text-white mb-md-4">
                  Descubre lugares asombrosos con nosotros
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Carousel End -->

    <!-- Booking Start -->
    <!--<div class="container-fluid booking mt-5 pb-5">
      <div class="container pb-5">
        <div class="bg-light shadow" style="padding: 30px">
          <div class="row align-items-center" style="min-height: 60px">
            <div class="col-md-10">
              <div class="row">
                <div class="col-md-3">
                  <div class="mb-3 mb-md-0">
                    <select class="custom-select px-4" style="height: 47px">
                      <option selected>Destination</option>
                      <option value="1">Destination 1</option>
                      <option value="2">Destination 1</option>
                      <option value="3">Destination 1</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3 mb-md-0">
                    <div class="date" id="date1" data-target-input="nearest">
                      <input
                        type="text"
                        class="form-control p-4 datetimepicker-input"
                        placeholder="Depart Date"
                        data-target="#date1"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3 mb-md-0">
                    <div class="date" id="date2" data-target-input="nearest">
                      <input
                        type="text"
                        class="form-control p-4 datetimepicker-input"
                        placeholder="Return Date"
                        data-target="#date2"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3 mb-md-0">
                    <select class="custom-select px-4" style="height: 47px">
                      <option selected>Duration</option>
                      <option value="1">Duration 1</option>
                      <option value="2">Duration 1</option>
                      <option value="3">Duration 1</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <button
                class="btn btn-primary btn-block"
                type="submit"
                style="height: 47px; margin-top: -2px"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!-- Booking End -->

    <!-- About Start -->
    <div id="nosotros" class="container-fluid py-5">
      <div class="container pt-5">
        <div class="row">
          <div class="col-lg-6" style="min-height: 500px">
            <div class="position-relative h-100">
              <img
                class="position-absolute w-100 h-100"
                src="../assets/imagenes/about.jpg"
                style="object-fit: cover"
              />
            </div>
          </div>
          <div class="col-lg-6 pt-5 pb-lg-5">
            <div class="about-text bg-white p-4 p-lg-5 my-lg-5">
              <h6
                class="text-primary text-uppercase"
                style="letter-spacing: 5px"
              >
                Sobre Nosotros
              </h6>
              <h1 class="mb-3">
                Ofrecemos los mejores paquetes turísticos según su presupuesto
              </h1>
              <p>
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
              </p>
              <div class="row mb-4">
                <div class="col-6">
                  <img
                    class="img-fluid"
                    src="../assets/imagenes/about-1.jpg"
                    alt=""
                  />
                </div>
                <div class="col-6">
                  <img
                    class="img-fluid"
                    src="../assets/imagenes/about-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <!-- Packages Start -->
    <div class="container-fluid py-5">
      <div class="container pt-5 pb-3">
        <div class="text-center mb-3 pb-3">
          <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
            Excursiones
          </h6>
          <h1>Excursiones perfectos</h1>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-6 mb-4"
            v-for="act in actividades"
            :key="act.id"
          >
            <div class="package-item bg-white mb-2" @click="showModal(act)">
              <img
                class="img-fluid"
                :src="`https://localhost:7012/imagenes/${act.imagen}`"
                alt=""
              />
              <div class="p-4">
                <div class="d-flex justify-content-between mb-3">
                  <small class="m-0"
                    ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                    >{{ act.destino }}</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-calendar-alt text-primary mr-2"></i>4
                    días</small
                  >
                </div>
                <a class="h5 text-decoration-none" href=""> {{ act.titulo }}</a>
                <div class="border-top mt-4 pt-4">
                  <div class="d-flex justify-content-between">
                    <h6 class="m-0">
                      <i class="fa fa-star text-primary mr-2"></i
                      >{{ act.promedioCalificacion }}
                      <small>({{ act.totalCalificaciones }})</small>
                    </h6>
                    <h5 class="m-0">S./ {{ act.precio }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Agregar/Editar -->
    <div
      class="modal fade"
      id="actividadDetalleModal"
      tabindex="-1"
      aria-labelledby="actividadDetalleModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="actividadModalLabel">
              {{ actividadForm.titulo }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <img
                  class="img-fluid"
                  :src="`https://localhost:7012/imagenes/${actividadForm.imagen}`"
                  alt="Imagen de la Actividad"
                />
              </div>
              <div class="col-md-6">
                <p>
                  <strong>Descripción:</strong> {{ actividadForm.descripcion }}
                </p>
                <p><strong>Destino:</strong> {{ actividadForm.destino }}</p>
                <p>
                  <strong>Fecha de Inicio:</strong>
                  {{ new Date(actividadForm.fechaInicio).toLocaleDateString() }}
                </p>
                <p>
                  <strong>Fecha de Fin:</strong>
                  {{ new Date(actividadForm.fechaFin).toLocaleDateString() }}
                </p>
                <p><strong>Precio:</strong> S./ {{ actividadForm.precio }}</p>
                <p><strong>Capacidad:</strong> {{ actividadForm.capacidad }}</p>
                <p><strong>Empresa:</strong> {{ actividadForm.empresaId }}</p>
              </div>
            </div>

            <div class="row">
              <div>
                <h5>Itinerario:</h5>
                <ul>
                  <li
                    v-for="itinerario in actividadForm.itinerarios"
                    :key="itinerario.id"
                  >
                    <strong>Día {{ itinerario.dia }}:</strong>
                    {{ itinerario.descripcion }}
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="usuarioLogueado">
              <div class="d-flex justify-content-center mt-4" v-if="verReserva">
                <button class="btn btn-danger btn-lg" @click="Reservar">
                  Reservar
                </button>
              </div>
              <div class="d-flex justify-content-center mt-4" v-else>
                <div class="alert alert-warning mt-3">
                  Ya tienes una reserva de este tour
                </div>
              </div>
            </div>

            <!-- Sección de Reseñas -->
            <div class="container mt-4">
              <h5>Reseñas:</h5>
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="list-group-item"
                    v-for="r in actividadForm.resenia"
                    :key="r.date"
                    ref="reseñas"
                  >
                    <div class="row">
                      <div class="col-1">
                        <q-rating
                          v-model="r.calificacion"
                          max="5"
                          size="1em"
                          color="green"
                          icon="star_border"
                          icon-selected="star"
                          icon-half="star_half"
                          no-dimming
                          readonly
                        />
                      </div>
                      <div class="col-11">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            <strong>{{ r.usuario }}</strong>
                          </h5>
                          <strong
                            ><span class="text-muted">{{
                              r.fechaReseña
                            }}</span></strong
                          >
                        </div>
                        <p class="mb-1">
                          {{ r.comentario }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-2"></div>
              </div>
            </div>

            <!-- Añadir Reseña -->
            <div class="container mt-4" v-if="usuarioLogueado">
              <div class="row">
                <div class="col-md-12">
                  <h5>Añadir Reseña:</h5>

                  <q-rating
                    v-model="calificacionResenia"
                    max="5"
                    size="1.5em"
                    color="green"
                    icon="star_border"
                    icon-selected="star"
                    icon-half="star_half"
                    no-dimming
                  />

                  <div class="form-group mt-2">
                    <textarea
                      id="nuevaResenia"
                      v-model="nuevaResenia"
                      class="form-control"
                      rows="3"
                    ></textarea>
                  </div>
                  <button class="btn btn-primary mt-2" @click="guardarResenia">
                    Añadir Reseña
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL MIS RESERVAS-->
    <div
      class="modal fade"
      id="misReservasModal"
      tabindex="-1"
      aria-labelledby="misReservasModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="actividadModalLabel">Mis Reservas</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row" v-for="a in filtrarMisReservas" :key="a.usuario">
              <div class="col-md-6">
                <img
                  class="img-fluid"
                  :src="`https://localhost:7012/imagenes/${a.imagen}`"
                  alt="Imagen de la Actividad"
                />
              </div>
              <div class="col-md-6">
                <p><strong>Título:</strong> {{ a.titulo }}</p>
                <p><strong>Descripción:</strong> {{ a.descripcion }}</p>
                <p><strong>Destino:</strong> {{ a.destino }}</p>
                <p>
                  <strong>Fecha de Inicio:</strong>
                  {{ new Date(a.fechaInicio).toLocaleDateString() }}
                </p>
                <p>
                  <strong>Fecha de Fin:</strong>
                  {{ new Date(a.fechaFin).toLocaleDateString() }}
                </p>
                <p><strong>Precio:</strong> S./ {{ a.precio }}</p>

                <p><strong>Empresa:</strong> {{ a.empresaId }}</p>
              </div>
              <hr class="thick-divider" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Packages End -->

    <!-- Destination Start -->
    <div class="container-fluid py-5">
      <div class="container pt-5 pb-3">
        <div class="text-center mb-3 pb-3">
          <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
            Destinos
          </h6>
          <h1>Explora los mejores destinos</h1>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div
              class="destination-item position-relative overflow-hidden mb-2"
            >
              <img
                class="img-fluid"
                src="../assets/imagenes/destination-1.jpg"
                alt=""
              />
              <a
                class="destination-overlay text-white text-decoration-none"
                href=""
              >
                <h5 class="text-white">Estados Unidos</h5>
                <span>100 ciudaddes</span>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div
              class="destination-item position-relative overflow-hidden mb-2"
            >
              <img
                class="img-fluid"
                src="../assets/imagenes/destination-2.jpg"
                alt=""
              />
              <a
                class="destination-overlay text-white text-decoration-none"
                href=""
              >
                <h5 class="text-white">Reino Unido</h5>
                <span>100 ciudaddes</span>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div
              class="destination-item position-relative overflow-hidden mb-2"
            >
              <img
                class="img-fluid"
                src="../assets/imagenes/destination-3.jpg"
                alt=""
              />
              <a
                class="destination-overlay text-white text-decoration-none"
                href=""
              >
                <h5 class="text-white">Australia</h5>
                <span>100 ciudaddes</span>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div
              class="destination-item position-relative overflow-hidden mb-2"
            >
              <img
                class="img-fluid"
                src="../assets/imagenes/destination-4.jpg"
                alt=""
              />
              <a
                class="destination-overlay text-white text-decoration-none"
                href=""
              >
                <h5 class="text-white">India</h5>
                <span>100 ciudaddes</span>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div
              class="destination-item position-relative overflow-hidden mb-2"
            >
              <img
                class="img-fluid"
                src="../assets/imagenes/destination-5.jpg"
                alt=""
              />
              <a
                class="destination-overlay text-white text-decoration-none"
                href=""
              >
                <h5 class="text-white">Sudafrica</h5>
                <span>100 ciudaddes</span>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div
              class="destination-item position-relative overflow-hidden mb-2"
            >
              <img
                class="img-fluid"
                src="../assets/imagenes/destination-6.jpg"
                alt=""
              />
              <a
                class="destination-overlay text-white text-decoration-none"
                href=""
              >
                <h5 class="text-white">Indonesia</h5>
                <span>100 ciudaddes</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Destination Start -->

    <!-- Footer -->

    <div
      class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
      style="border-color: rgba(256, 256, 256, 0.1) !important"
    >
      <div class="row">
        <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
          <p class="m-0 text-white-50">
            Copyright &copy;<a> Todos los derechos reservados</a>
          </p>
        </div>
        <div class="col-lg-6 text-center text-md-right">
          <p class="m-0 text-white-50">Diseñado por Alonso</p>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import { mapActions } from "vuex";
import { API_BASE_URL } from "../config";
import { Notify, Dialog } from "quasar";
import { Modal } from "bootstrap";

export default {
  data() {
    return {
      usuarioLogueado: false,
      showLoginDialog: false,
      username: "",
      password: "",
      errorMessage: "",
      calificacionResenia: 0,
      actividades: [],
      reservaXusuario: [],
      filtrarMisReservas: [],
      nuevaResenia: "",
      idActividadSeleccionada: 0,
      usuario: null,
      verReserva: true,
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
    };
  },
  methods: {
    ...mapActions(["setUser", "setToken"]),
    async guardarResenia() {
      const user = JSON.parse(localStorage.getItem("userWeb"));

      const response = await axios.post(
        `${API_BASE_URL}api/Resenia/CrearResenia`,
        {
          usuarioId: user.id,
          actividadId: this.idActividadSeleccionada,
          calificacion: this.calificacionResenia,
          comentario: this.nuevaResenia,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      await this.obtenerReseniasPorActividadId(this.idActividadSeleccionada);
      await this.obtenerActividades();
      this.calificacionResenia = 0;
      this.nuevaResenia = "";

      Notify.create({
        type: "positive",
        message: "Resenia Creada",
        position: "center",
        timeout: 1500,
      });
    },

    async Reservar() {
      try {
        const user = JSON.parse(localStorage.getItem("userWeb"));

        const response = await axios.post(
          `${API_BASE_URL}api/Reserva/CrearReserva`,
          {
            usuarioId: user.id,
            actividadId: this.idActividadSeleccionada,
            cantidad: 1,
            estado: "Pendiente",
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        Notify.create({
          type: "positive",
          message:
            "Reserva Generada, un asesor se comunicara en breve con usted",
          position: "top",
          timeout: 1500,
        });
      } catch (error) {
        Notify.create({
          type: "negative",
          message: "Error : Ocurrieron algunos problemas, intentalo mas tarde ",
          position: "top",
          timeout: 1500,
        });
      }
    },
    async login() {
      try {
        const response = await axios.post(
          `${API_BASE_URL}api/Usuario/login`,
          {
            Usuario: this.username,
            Password: this.password,
            TipoUsuario: 2,
          },
          {
            withCredentials: true,
          }
        );

        const usuario = response.data;

        // Guarda tokens en cookies
        Cookies.set("access_token", usuario.Token, {
          secure: true,
          sameSite: "Strict",
        });
        Cookies.set("refresh_token", usuario.RefreshToken, {
          secure: true,
          sameSite: "Strict",
        });

        // Guarda usuario en localStorage
        localStorage.setItem("userWeb", JSON.stringify(usuario));

        // Guarda usuario y token en el estado de la aplicación (Vuex)
        this.setUser(usuario); // Llama a la acción setUser para guardar el usuario en Vuex
        this.setToken(usuario.Token);
        //this.usuarioLogueado = true;
        this.verificarUsuarioLogueado();

        Notify.create({
          type: "positive",
          message: "Bienvenido " + usuario.nombre,
          position: "center",
          timeout: 1500,
        });

        // Redirige a la página principal o a donde desees
      } catch (error) {
        console.error("Error al iniciar sesión:", error);

        // Verifica si es un error de autenticación
        if (error.response && error.response.status === 401) {
          Notify.create({
            type: "negative",
            message: "Error : Credenciales incorrectas ",
            position: "top",
            timeout: 1500,
          });
        } else {
          this.errorMessage =
            "Error al iniciar sesión. Por favor, inténtalo más tarde.";
        }
      }

      this.showLoginDialog = false;
    },
    async obtenerActividades() {
      try {
        const response = await axios.get(
          `${API_BASE_URL}api/Actividad/ObtenerTodasLasActividades`
        );
        this.actividades = response.data;
      } catch (error) {
        Notify.create({
          type: "negative",
          message: "Error al recuperar actividades: " + error.message,
        });
      }
    },
    async obtenerReservasxUsuario() {
      try {
        const user = JSON.parse(localStorage.getItem("userWeb"));

        const response = await axios.get(
          `${API_BASE_URL}api/Reserva/ObtenerReservasPorUsuarioId/${user.id}`
        );
        this.reservaXusuario = response.data;
        console.log(this.reservaXusuario);
      } catch (error) {
        Notify.create({
          type: "negative",
          message: "Error al recuperar reservas: " + error.message,
        });
      }
    },
    async obtenerReseniasPorActividadId(actividadId) {
      try {
        const response = await axios.get(
          `${API_BASE_URL}api/Resenia/ObtenerReseniasPorActividadId/${actividadId}`
        );

        if (response.status === 200) {
          console.log("Datos de resenias:", response.data);
          this.actividadForm.resenia = response.data;
        } else {
          Notify.create({
            type: "negative",
            message: "Error al obtener resenias:" + response.statusText,
          });
        }
      } catch (error) {
        // Capturamos cualquier error de la solicitud
        console.error("Error en la solicitud:", error.message);
      }
    },

    misReservasModal() {
      const usuario = JSON.parse(localStorage.getItem("userWeb"));

      if (usuario) {
        this.filtrarMisReservas = this.reservaXusuario.map((reserva) =>
          this.actividades.find(
            (actividad) => actividad.id === reserva.actividadId
          )
        );
      }

      console.log(this.filtrarMisReservas, "this.filtrarMisReservas");

      new Modal(document.getElementById("misReservasModal")).show();
    },
    showModal(act) {
      act.fechaInicio = new Date(act.fechaInicio).toISOString().split("T")[0];
      act.fechaFin = new Date(act.fechaFin).toISOString().split("T")[0];
      this.idActividadSeleccionada = act.id;
      this.actividadForm = { ...act };

      const usuario = JSON.parse(localStorage.getItem("userWeb"));

      if (usuario) {
        console.log(usuario.id);
        console.log(act.reservas);
        var existe = act.reservas.find((x) => x.usuarioId == usuario.id);
        if (existe) {
          this.verReserva = false;
        } else {
          this.verReserva = true;
        }
      }
      console.log(existe, "existe");
      new Modal(document.getElementById("actividadDetalleModal")).show();
    },
    verificarUsuarioLogueado() {
      const usuario = JSON.parse(localStorage.getItem("userWeb"));
      this.usuarioLogueado = !!usuario;
      this.usuario = usuario;

      if (usuario) {
        this.obtenerReservasxUsuario();
      }
    },
    logout() {
      // Elimina tokens de cookies
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");

      // Elimina usuario de localStorage
      localStorage.removeItem("userWeb");

      // Resetea el estado del usuario en Vuex y en el componente
      this.setUser(null);
      this.setToken(null);
      this.usuarioLogueado = false;

      Notify.create({
        type: "positive",
        message: "Has cerrado sesión correctamente",
        position: "center",
        timeout: 1500,
      });
    },
  },
  mounted() {
    const rating = document.querySelectorAll(".q-rating");
    console.log(rating, "rating");
    if (rating) {
      rating.forEach((elemento) => {
        elemento.classList.remove("row");
      });
    }
    this.obtenerActividades();
    this.verificarUsuarioLogueado();
  },
};
</script>

<style>
.my-login {
  max-width: 400px;
  margin: auto;
  background: #f8f9fa;
  border-radius: 8px;
}

.my-login-section {
  padding: 20px;
  margin-left: 20px;
}

.my-login-section-cabecera {
  padding: 20px;
}

.my-login-actions {
  padding: 10px 20px;
}

.text-primary {
  color: #007bff;
}

.nav-item .fa-user {
  margin-right: 5px;
}

.q-dialog__inner {
  overflow: hidden;
}

/* Asegurar que los iconos dentro de q-rating se alineen correctamente */
.q-rating__icon-container {
  margin-right: 5px;
  display: inline-block !important;
}

/* Color de las estrellas */
.text-yellow {
  color: yellow;
}
.thick-divider {
  border: none;
  height: 5px; /* Grosor de la línea */
  background-color: black; /* Color de la línea */
  margin: 20px 0; /* Espaciado arriba y abajo */
}
</style>
