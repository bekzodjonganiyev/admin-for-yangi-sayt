
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
          <span class="d-flex block">Analitika</span>
        </RouterLink>

        <RouterLink to="/customers" class="font-semibold flex mb-7">
          <span>Fakultetlar</span>
        </RouterLink>

        <RouterLink to="/items" class="font-semibold flex mb-7">
          <span>Kafedralar</span>
        </RouterLink>

        <RouterLink to="/orders" class="font-semibold flex mb-7">
          <span>Faoliyat</span>
        </RouterLink>

        <RouterLink to="/departments" class="font-semibold flex mb-7">
          <span>Bo'limlar</span>
        </RouterLink>

        <RouterLink to="/syllabus" class="font-semibold flex mb-7">
          <span>Sillabus</span>
        </RouterLink>

        <RouterLink to="/users" class="font-semibold flex mb-7">
          <span>E'lon</span>
        </RouterLink>

        <RouterLink to="/news" class="font-semibold flex mb-7">
          <span>Yangiliklar</span>
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
</script>