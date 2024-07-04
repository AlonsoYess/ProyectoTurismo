// /src/boot/auth.js (o donde sea que estés utilizando este archivo)

import store from "../store"; // Importa el store de manera correcta

export default ({ router }) => {
  // Restaurar el estado de autenticación desde localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    store.dispatch("setUser", user);
  }

  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isAuthenticated = store.getters.isAuthenticated;

    if (requiresAuth && !isAuthenticated) {
      next("/login");
    } else {
      next();
    }
  });
};
