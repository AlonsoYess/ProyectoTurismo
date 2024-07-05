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
              <a href="index.html" class="nav-item nav-link active">Home</a>
              <a href="about.html" class="nav-item nav-link">About</a>
              <a href="service.html" class="nav-item nav-link">Services</a>
              <a href="package.html" class="nav-item nav-link">Tour Packages</a>
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  >Pages</a
                >
                <div class="dropdown-menu border-0 rounded-0 m-0">
                  <a href="blog.html" class="dropdown-item">Blog Grid</a>
                  <a href="single.html" class="dropdown-item">Blog Detail</a>
                  <a href="destination.html" class="dropdown-item"
                    >Destination</a
                  >
                  <a href="guide.html" class="dropdown-item">Travel Guides</a>
                  <a href="testimonial.html" class="dropdown-item"
                    >Testimonial</a
                  >
                </div>
              </div>
              <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Navbar End -->

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
    <div class="container-fluid booking mt-5 pb-5">
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
    </div>
    <!-- Booking End -->

    <!-- About Start -->
    <div class="container-fluid py-5">
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

    <!-- Packages Start -->
    <div class="container-fluid py-5">
      <div class="container pt-5 pb-3">
        <div class="text-center mb-3 pb-3">
          <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
            Paquetes
          </h6>
          <h1>Paquetes turisticos perfectos</h1>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="package-item bg-white mb-2">
              <img
                class="img-fluid"
                src="../assets/imagenes/package-1.jpg"
                alt=""
              />
              <div class="p-4">
                <div class="d-flex justify-content-between mb-3">
                  <small class="m-0"
                    ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                    >Thailand</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                    días</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-user text-primary mr-2"></i>2
                    Personas</small
                  >
                </div>
                <a class="h5 text-decoration-none" href=""
                  >Descubra con nosotros lugares increíbles del mundo</a
                >
                <div class="border-top mt-4 pt-4">
                  <div class="d-flex justify-content-between">
                    <h6 class="m-0">
                      <i class="fa fa-star text-primary mr-2"></i>4.5
                      <small>(250)</small>
                    </h6>
                    <h5 class="m-0">$350</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="package-item bg-white mb-2">
              <img
                class="img-fluid"
                src="../assets/imagenes/package-2.jpg"
                alt=""
              />
              <div class="p-4">
                <div class="d-flex justify-content-between mb-3">
                  <small class="m-0"
                    ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                    >Thailand</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                    días</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-user text-primary mr-2"></i>2
                    Personas</small
                  >
                </div>
                <a class="h5 text-decoration-none" href=""
                  >Descubra con nosotros lugares increíbles del mundo</a
                >
                <div class="border-top mt-4 pt-4">
                  <div class="d-flex justify-content-between">
                    <h6 class="m-0">
                      <i class="fa fa-star text-primary mr-2"></i>4.5
                      <small>(250)</small>
                    </h6>
                    <h5 class="m-0">$350</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="package-item bg-white mb-2">
              <img
                class="img-fluid"
                src="../assets/imagenes/package-3.jpg"
                alt=""
              />
              <div class="p-4">
                <div class="d-flex justify-content-between mb-3">
                  <small class="m-0"
                    ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                    >Thailand</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                    días</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-user text-primary mr-2"></i>2
                    Personas</small
                  >
                </div>
                <a class="h5 text-decoration-none" href=""
                  >Descubra con nosotros lugares increíbles del mundo</a
                >
                <div class="border-top mt-4 pt-4">
                  <div class="d-flex justify-content-between">
                    <h6 class="m-0">
                      <i class="fa fa-star text-primary mr-2"></i>4.5
                      <small>(250)</small>
                    </h6>
                    <h5 class="m-0">$350</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="package-item bg-white mb-2">
              <img
                class="img-fluid"
                src="../assets/imagenes/package-4.jpg"
                alt=""
              />
              <div class="p-4">
                <div class="d-flex justify-content-between mb-3">
                  <small class="m-0"
                    ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                    >Thailand</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                    días</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-user text-primary mr-2"></i>2
                    Personas</small
                  >
                </div>
                <a class="h5 text-decoration-none" href=""
                  >Descubra con nosotros lugares increíbles del mundo</a
                >
                <div class="border-top mt-4 pt-4">
                  <div class="d-flex justify-content-between">
                    <h6 class="m-0">
                      <i class="fa fa-star text-primary mr-2"></i>4.5
                      <small>(250)</small>
                    </h6>
                    <h5 class="m-0">$350</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="package-item bg-white mb-2">
              <img
                class="img-fluid"
                src="../assets/imagenes/package-5.jpg"
                alt=""
              />
              <div class="p-4">
                <div class="d-flex justify-content-between mb-3">
                  <small class="m-0"
                    ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                    >Thailand</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                    días</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-user text-primary mr-2"></i>2
                    Personas</small
                  >
                </div>
                <a class="h5 text-decoration-none" href=""
                  >Descubra con nosotros lugares increíbles del mundo</a
                >
                <div class="border-top mt-4 pt-4">
                  <div class="d-flex justify-content-between">
                    <h6 class="m-0">
                      <i class="fa fa-star text-primary mr-2"></i>4.5
                      <small>(250)</small>
                    </h6>
                    <h5 class="m-0">$350</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="package-item bg-white mb-2">
              <img
                class="img-fluid"
                src="../assets/imagenes/package-6.jpg"
                alt=""
              />
              <div class="p-4">
                <div class="d-flex justify-content-between mb-3">
                  <small class="m-0"
                    ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                    >Thailand</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                    días</small
                  >
                  <small class="m-0"
                    ><i class="fa fa-user text-primary mr-2"></i>2
                    Personas</small
                  >
                </div>
                <a class="h5 text-decoration-none" href=""
                  >Descubra con nosotros lugares increíbles del mundo</a
                >
                <div class="border-top mt-4 pt-4">
                  <div class="d-flex justify-content-between">
                    <h6 class="m-0">
                      <i class="fa fa-star text-primary mr-2"></i>4.5
                      <small>(250)</small>
                    </h6>
                    <h5 class="m-0">$350</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Packages End -->

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
export default {
  data() {
    return {
      registerForm: {
        name: "",
        email: "",
        password: "",
      },
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      // Lógica para registrar usuario
      console.log("Registrando usuario:", this.registerForm);
    },
    login() {
      // Lógica para iniciar sesión
      console.log("Iniciando sesión con:", this.loginForm);
    },
  },
};
</script>

<style></style>
