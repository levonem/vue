import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/user',
			name: 'user',
			component: User
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			children: [
				{
					path: '/:id',
					name: 'userInfo'
				}
			]
		}
	]
})
