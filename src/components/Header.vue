<script setup>
import { RouterLink, RouterView } from "vue-router";
import Dropdown from "../components/Dropdown.vue";
</script>

<template>
     <!-- Header -->
     <div class="bg-white shadow px-7 py-4 w-full sticky top-0 flex justify-between z-40">
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
               <button class="bg-slate-100 text-slate-500 rounded-lg">
                    <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-5 w-5"
                         viewBox="0 0 20 20"
                         fill="currentColor"
                    >
                         <path
                              fill-rule="evenodd"
                              d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                              clip-rule="evenodd"
                         />
                         <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                    </svg>
               </button>

               <!-- Notifications -->
               <button class="bg-slate-100 text-slate-500 rounded-lg p-2">
                    <svg
                         xmlns="http://www.w3.org/2000/svg"
                         class="h-5 w-5"
                         viewBox="0 0 20 20"
                         fill="currentColor"
                    >
                         <path
                              d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                         />
                    </svg>
               </button>

               <!-- Profil -->
               <Dropdown />
          </div>
     </div>
</template>