export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('middleware/auth')
  console.log('to', to)
  console.log('from', from)
})