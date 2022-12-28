<script setup>
import { RouterLink, RouterView } from "vue-router";
import Dropdown from "../components/Dropdown.vue";
</script>

<template>
  <!-- Header -->
  <div
    class="bg-white shadow px-7 py-4 w-full sticky top-0 flex justify-between z-40"
  >
    <!-- Search here -->
    <label class="relative block">
      <!-- <span class="sr-only">Search</span> -->
      <span class="absolute left-1 top-2 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-slate-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <input
        class="placeholder:text-slate-400 block bg-slate-100 w-96 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search"
        type="text"
        name="search"
      />
    </label>

    <!-- The right elements -->
    <div class="flex space-x-3">
      <!-- Product -->
      <button
        @click="logOut"
        class="bg-slate-100 text-slate-500 rounded-lg p-2"
      >
        Log Out
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    logOut() {
      // document.cookie =
      window.location.reload(false);
    },
  },
};
</script>
