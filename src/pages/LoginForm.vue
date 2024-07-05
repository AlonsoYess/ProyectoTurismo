<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6"></div>
      <div
        class="col-lg-6 d-flex align-items-center justify-content-center right-side"
      >
        <div class="form-2-wrapper">
          <div class="logo text-center"></div>
          <h2 class="text-center mb-4">Iniciar sesión en su cuenta</h2>
          <q-form @submit="onSubmit">
            <div class="mb-3 form-box">
              <input
                v-model="userName"
                type="text"
                class="form-control"
                id="userName"
                name="userName"
                placeholder="Ingresa tu Usuario"
                required
              />
            </div>
            <div class="mb-3">
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="rememberMe"
                  v-model="rememberMe"
                />
                <label class="form-check-label" for="rememberMe"
                  >Recuérdame</label
                >
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-outline-secondary login-btn w-100 mb-3"
            >
              Ingresar
            </button>
          </q-form>
          <div v-if="errorMessage" class="alert alert-danger mt-3">
            {{ errorMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import { mapActions } from "vuex";
import { API_BASE_URL } from "../config";

export default {
  data() {
    return {
      userName: "74637140",
      password: "Mandril80$$",
      rememberMe: false,
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["setUser", "setToken"]),
    async onSubmit() {
      try {
        const response = await axios.post(
          `${API_BASE_URL}api/Usuario/login`,
          {
            Usuario: this.userName,
            Password: this.password,
            TipoUsuario: 1,
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
        localStorage.setItem("user", JSON.stringify(usuario));

        // Guarda usuario y token en el estado de la aplicación (Vuex)
        this.setUser(usuario); // Llama a la acción setUser para guardar el usuario en Vuex
        this.setToken(usuario.Token);

        // Redirige a la página principal o a donde desees
        this.$router.push("/admin");
      } catch (error) {
        console.error("Error al iniciar sesión:", error);

        // Verifica si es un error de autenticación
        if (error.response && error.response.status === 401) {
          this.errorMessage =
            "Credenciales incorrectas. Por favor, inténtalo de nuevo.";
        } else {
          this.errorMessage =
            "Error al iniciar sesión. Por favor, inténtalo más tarde.";
        }
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../../src/assets/imagenes/img2.jfif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  font-family: "Roboto", sans-serif;
}

.form-2-wrapper {
  background: #f8f9fa;
  padding: 50px;
  border-radius: 8px;
}
input.form-control {
  padding: 11px;
  border: none;
  border: 2px solid #405c7cb8;
  border-radius: 30px;
  background-color: transparent;
  font-family: Arial, Helvetica, sans-serif;
}
input.form-control:focus {
  box-shadow: none !important;
  outline: 0px !important;
  background-color: transparent;
}
button.login-btn {
  background: #b400ff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 30px;
}
.register-test a {
  color: #000;
}
.social-login button {
  border-radius: 30px;
}
</style>
