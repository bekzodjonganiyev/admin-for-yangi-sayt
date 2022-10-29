<script setup>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import MainContent from "./MainContent.vue";
</script>

<template>
   <div class="flex">
      <Sidebar />
      <div class="w-full  ">
         <Header />
         <MainContent>
            <slot />
         </MainContent>
      </div>
   </div>
</template>

<style>
@import "@/assets/base.css";
</style>
