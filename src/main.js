import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
import OrderListPage from './pages/orderList'
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component: IndexPage
		},
		{
			path:'/orderlist',
			component:OrderListPage
		},
		{
			path:'/detail',
			component:DetailPage,
			redirect:'/detail/count',
			children:[
				{
					path:'analysis',
					component:DetailAnaPage
				},
				{
					path:'forecast',
					component:DetailForPage
				},
				{
					path:'count',
					component:DetailCouPage
				},
				{
					path:'publish',
					component:DetailPubPage
				}
			]
		}
	]
})
new Vue({
  el: '#app',
  router, 
  template: '<Layout/>',
  components: { Layout }
})
