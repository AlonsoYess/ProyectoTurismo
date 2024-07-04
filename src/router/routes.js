const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
