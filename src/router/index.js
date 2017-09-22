import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/test'
import Todo from '@/components/Todo'
import Goods from '@/components/goods/goods'
import Seller from '@/components/seller/seller'
import Comment from '@/components/comment/comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'TEST',
      component: Test
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
