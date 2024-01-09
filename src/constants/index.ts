export const DEFAULT_NAME = 'Umi Max';

export const routes = [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '服务项目',
      path: '/service',
      component: './Service',
    },
    {
      name: '品牌案例',
      path: '/brandCases',
      component: './BrandCases',
    },
    {
      name: '资讯动态',
      path: '/news',
      component: './News',
    },
    {
      name: '关于CM',
      path: '/aboutus',
      component: './Aboutus',
    },
    {
      name: '联系我们',
      path: '/contactUs',
      component: './ContactUs',
    },
  ]