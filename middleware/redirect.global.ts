import { navigateTo } from "nuxt/app"

export default defineNuxtRouteMiddleware((to, from) => {
  if(to.path === '/'){
    return navigateTo('/profile')
  }
})