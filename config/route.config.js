export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/index',
      },
      {
        path: '/index',
        component: './Index/Index',
      },
      {
        path: '/nothing',
        component: './Nothing/Nothing',
      },
    ],
  },
];
