
<template>
  <!-- Sidebar -->
  <div class="min-h-screen bg-gray-900 w-72">
    <div class="flex flex-col fixed">
      <!-- TCTI Logo -->
      <div class="m-4 mt-6">
        <a class="flex items-center" href="#" target="_blank ">
          <img class="mr-2 w-16" src="../assets/logo.png" alt="aplhasoft_logo" />
          <h1 class="text-white text-2xl font-semibold">TCTI Admin</h1>
        </a>
      </div>

      <!-- RuterLinks -->
      <div class="flex flex-col text-slate-300 m-4 ml-10 w-36 sm:">
        <RouterLink to="/dashboard" class="font-semibold flex mb-7">
          <DashboardIcon/>
          <span class="d-flex block">Analitika</span>
        </RouterLink>

        <RouterLink to="/faculties" class="font-semibold flex mb-7">
          <FakultetIcon/>
          <span>Fakultetlar</span>
        </RouterLink>

        <RouterLink to="/items" class="font-semibold flex mb-7">
          <KafedralarIcon/>
          <span>Kafedralar</span>
        </RouterLink>

        <RouterLink to="/orders" class="font-semibold flex mb-7">
          <FaoliyatIcon/>
          <span>Faoliyat</span>
        </RouterLink>

        <RouterLink to="/monitor" class="font-semibold flex mb-7">
          <BolimlarIcon/>
          <span>Bo'limlar</span>
        </RouterLink>

        <RouterLink to="/users" class="font-semibold flex mb-7">
          <ElonlarIcon/>
          <span>E'lon</span>
        </RouterLink>

        <RouterLink to="/news" class="font-semibold flex mb-7">
          <ElonlarIcon/>
          <span>Yangiliklar</span>
        </RouterLink>

        <RouterLink to="/settings" class="font-semibold flex mb-7">
          <YangiliklarIcon/>
          <span>Sozlamalar</span>
        </RouterLink>

        <RouterLink to="/paper" class="font-semibold flex mb-7">
          <YangiliklarIcon />
          <span>Tanlovlar</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
a.router-link-exact-active {
  color: #42b983;
}
</style>


<script setup>
import { RouterLink } from "vue-router";

import DashboardIcon from "../assets/Icons/DashboardIcon.vue";
import FakultetIcon from "../assets/Icons/FakultetIcon.vue"
import KafedralarIcon from "../assets/Icons/KafedralarIcon.vue"
import FaoliyatIcon from "../assets/Icons/FaoliyatIcon.vue"
import BolimlarIcon from "../assets/Icons/BolimlarIcon.vue"
import ElonlarIcon from "../assets/Icons/ElonlarIcon.vue"
import YangiliklarIcon from "../assets/Icons/Yangiliklar.vue"

</script>