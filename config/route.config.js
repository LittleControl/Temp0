export default [
  {
    path: '/',
    redirect: '/index',
    // component: '@/layouts/BasicLayout'
  },
  {
    path: '/index',
    component: '@/pages/Home/index',
  },
  {
    path: '/products',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/products',
        redirect: '/products/60',
      },
      {
        path: '/products/60',
        component: './Products/V60',
      },
      {
        path: '/products/70',
        component: './Products/V70',
      },
    ],
  },
];
