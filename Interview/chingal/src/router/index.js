import { createRouter, createWebHistory } from 'vue-router'
 import Users from '../views/dashboard/users-view.vue'
 import EditUser from '../views/dashboard/edit-user/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard/users',
      component: Users,
      name: 'لیست کاربران',
      children: [
        {
          path: 'edit',
          name: 'ویرایش کاربر',
          component: EditUser,
        },
      ],
    },
  ]
})

export default router
