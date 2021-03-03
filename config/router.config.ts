export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    // Routes: ['src/pages/Authorized'],
    // authority: ['admin', 'user'],
    routes: [
      {
        path: '/',
        component: './Welcome',
      },
      {
        path: '/class',
        component: './Demo/Class',
      },
      {
        path: '/demo',
        routes: [
          // {
          //   path: '/demo/class',
          //   component: './Demo/Class',
          // },
          {
            path: '/demo/standard-list',
            hide: true,
            component: './Demo/StandardList',
          },
          {
            path: '/demo/form',
            // hide: true,
            component: './Demo/Form',
          },
          {
            path: '/demo/amap',
            hide: true,
            component: './Demo/AMap',
          },
          {
            path: '/demo/avatar',
            hide: true,
            component: './Demo/Avatar',
          },
        ]
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
