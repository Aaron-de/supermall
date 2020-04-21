import Vue from 'vue';
import Router from 'vue-router';

// 路由懒加载，等用到路由的时候再加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Detail = () => import('views/detail/Detail')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

// 安装插件
Vue.use(Router);

// 将创建对象中的routes数组抽出
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/detail',
    component: Detail,
    meta: {
      title: '详情页'
    }
  }
]
// 创建路由对象
const router = new Router({
  routes,
  // 美化url
  mode: 'history'
}) 


// 组件内守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
})


// 导出对象
export default router;