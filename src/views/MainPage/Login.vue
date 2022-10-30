

<template>
  <div class="bg-neutral-900 min-h-screen">
    <div>
      <nav class="container px-3 py-3 mx-auto md:flex">
        <div class="flex items-center justify-between">
          <router-link to="/" class="space-y-4 md:flex md:space-y-0 md:space-x-10 md:mt-0 lg:py-5 lg:px-10">
            <img class src="../../assets/logo_aphasoft.svg" alt />
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class="text-white hover:text-gray-50 focus:outline-none focus:text-gray-400">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>

        <ul :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
          <li class="text-md font-bold text-white hover:text-blue-400">Product</li>
          <li class="text-md font-bold text-white hover:text-blue-400">Features</li>
          <li class="text-md font-bold text-white hover:text-blue-400">Marketplace</li>
          <li class="text-md font-bold text-white hover:text-blue-400">Company</li>
        </ul>
      </nav>
    </div>
    <div class="bg-neutral-900 flex justify-evenly md:flex-none md:col-span-12">
      <div class>
        <img class="min-w-full w-96 my-10" src="../../assets/Illustration.png" alt="illistration" />
      </div>
      <form @submit.prevent="loginUser" class="bg-white flex justify-center my-20 w-1/3 rounded-md pb-10">
        <div class="px-5">
          <h1 class="font-bold py-3 mt-10 text-3xl text-center">Login</h1>
          <hr />
          <input type="number" v-model="phone" placeholder="Phone Number"
            class="border w-full border-gray-400 px-2 py-2 mb-3 mt-8 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-md shadow outline-none focus:outline-none focus:shadow-outline" />
          <input type="password" v-model="password" placeholder="Password"
            class="border w-full border-gray-400 px-2 py-2 my-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-md shadow outline-none focus:outline-none focus:shadow-outline" />
          <button type="submit" class="rounded w-full py-3 mt-2 mb-10 bg-blue-900 text-white">Log in</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios"


export default {
  data() {
    return {
      showMenu: false,
      phone: '',
      password: '',
    }
  },
  methods: {
    loginUser() {
      axios.post(
        'http://yolbelgilaribot.pythonanywhere.com/api/token/',
        {
          phone: this.phone,
          password: this.password,
        }).then((res) => {
          this.$router.push('/dashboard')
          console.log(res.data);
        }).catch(err => {
          alert(err.response.data.detail)
        })


    }
  },
  mounted() {
  }
}

</script>

