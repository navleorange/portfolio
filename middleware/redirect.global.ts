import { navigateTo } from "nuxt/app"

export default defineNuxtRouteMiddleware((to, from) => {
  const allowPath: Array<string> = ['/profile','/research', '/works' , '/job', '/internship']

  for(let i=0; i<allowPath.length; i++){
    if(to.path == allowPath[i]){
      return;
    }
  }

  return navigateTo('/profile')
})