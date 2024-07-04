const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "GestionEmpresa",
        component: () => import("pages/GestionEmpresa.vue"),
      },
      {
        path: "GestionActividad",
        component: () => import("pages/GestionActividad.vue"),
      },
      {
        path: "GestionItinerario",
        component: () => import("pages/GestionItinerario.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("pages/LoginForm.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
