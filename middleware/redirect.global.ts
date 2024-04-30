import { navigateTo } from "nuxt/app"

export default defineNuxtRouteMiddleware((to, from) => {
  
  if(to.path !== '/profile' && to.path !== '/research' && to.path !== "/works"){
    return navigateTo('/profile')
  }
})