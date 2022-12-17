<template>
   <div v-if="isAuth">
      <RouterView />
   </div>
   <div v-else>
      <div class="bg-neutral-900 min-h-screen">
         <div>
            <nav class="container px-3 py-3 mx-auto md:flex">
               <div class="flex items-center justify-between">
                  <router-link to="/" class="space-y-4 md:flex md:space-y-0 md:space-x-10 md:mt-0 lg:py-5 lg:px-10">
                     <img class src="./assets/logo.png" alt="logo" width="80" height="80" />
                  </router-link>
               </div>
               <h1 class="text-white mt-14 text-xl">TKTI Admin</h1>
            </nav>
         </div>
         <div class="bg-neutral-900 flex justify-evenly md:flex-none md:col-span-12">
            <div class>
               <img class="min-w-full w-96 my-10" src="./assets/Illustration.png" alt="illistration" />
            </div>
            <form v-if="!token" @submit.prevent="addUser"
               class="bg-white flex justify-center my-20 w-1/3 rounded-md pb-10">
               <div class="px-5">
                  <h1 class="font-bold py-3 mt-10 text-3xl text-center">Register</h1>
                  <hr />
                  <input type="text" v-model="name" placeholder="Name"
                     class="border w-full border-gray-400 px-2 py-2 mb-3 mt-8 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-md shadow outline-none focus:outline-none focus:shadow-outline" />
                  <input size="13" maxlength="13" type="tel" v-model="phone" placeholder="+998997894561"
                     class="border w-full border-gray-400 px-2 py-2 my-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-md shadow outline-none focus:outline-none focus:shadow-outline" />
                  <input type="password" v-model="password" placeholder="Password"
                     class="border w-full border-gray-400 px-2 py-2 my-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-md shadow outline-none focus:outline-none focus:shadow-outline" />
                  <button type="submit" class="rounded w-full py-3 mt-2 mb-10 bg-blue-900 text-white">Register</button>
               </div>
            </form>
            <form v-if="token" @submit.prevent="loginUser"
               class="bg-white flex justify-center my-20 w-1/3 rounded-md pb-10">
               <div class="px-5">
                  <h1 class="font-bold py-3 mt-10 text-3xl text-center">Login</h1>
                  <hr />
                  <input type="tel" v-model="phone" placeholder="Phone"
                     class="border w-full border-gray-400 px-2 py-2 my-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-md shadow outline-none focus:outline-none focus:shadow-outline" />
                  <input type="password" v-model="password" placeholder="Password"
                     class="border w-full border-gray-400 px-2 py-2 my-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-md shadow outline-none focus:outline-none focus:shadow-outline" />
                  <button type="submit" class="rounded w-full py-3 mt-2 mb-10 bg-blue-900 text-white">Log in</button>
                  <span class="cursor-pointer ml-16 hover:text-indigo-600" @click="claerLocalStorage">Bo'lim boshlig'i orqali ro'yxatdan o'tish</span>
               </div>
            </form>

         </div>
      </div>
   </div>
</template>

<script>
import { http } from './utils/http'

export default {
   data() {
      return {
         isAuth: document.cookie,
         name: "",
         phone: '',
         password: '',
         token: window.localStorage.getItem("token"),
      }
   },

   methods: {
      addUser() {
         if (!this.name || !this.password || !this.phone || this.phone !== "+998998242779") {
            alert(" Faqatgina bo`lim boshligi yangi admin qo`sha oladi")
            this.name = ""
            this.phone = ""
            this.password = ""
         }
         else {
            http.post(
               '/auth/add',
               {
                  name: this.name,
                  phone: this.phone,
                  password: this.password,
               }).then((res) => {
                  window.localStorage.setItem("token", res.data.data.token)
                  window.location.reload(false)
               }).catch(err => {
                  alert(err)
               })
         }

      },

      loginUser() {
         if (!this.password || !this.phone) {
            alert(" Barcha maydonlarlar to`ldirilishi shart")
            this.phone = ""
            this.password = ""
         }
         else {
            http.post(
               '/auth/login',
               {
                  phone: this.phone,
                  password: this.password,
               }).then((res) => {
                  if (res.data === null) {
                     alert("Login yoki parol xato")
                     this.phone = ""
                     this.password = ""
                  }
                  else {
                     document.cookie = `isAuth = ${true}; max-age = 86400; SameSite=Strict; Secure`
                     window.location.reload(false)
                  }
                  console.log(res)
               }).catch(err => {
                  alert(err)
               })
         }

         console.log(document.cookie)

      },

      claerLocalStorage() {
         window.localStorage.removeItem("token")
         window.location.reload(false)
      },
   },

   created() {
   }
}
</script>


