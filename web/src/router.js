import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Clientes from './components/Clientes'
import ClientesNew from './components/ClientesNew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/clientes',
      name: 'Lista de Clientes',
      component: Clientes
    },
    {
      path: '/clientes/new',
      name: 'Novo Cliente',
      component: ClientesNew
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
