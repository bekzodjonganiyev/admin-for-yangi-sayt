<template>
    <Layout>
      <h1 class="font-semibold text-xl">Syllabus</h1>
      <div class="my-5">
        <div class="flex justify-between">
          <label class="relative block">
            <span class="absolute left-1 top-2 flex items-center pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            <input
              class="placeholder:text-slate-400 block bg-white w-96 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Qidiring" type="text" name="search" />
          </label>
          <router-link to="/syllabus/create">
            <button
              class="bg-blue-800 text-white active:bg-blue-400 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">Malumot Qo'shish</button>
          </router-link>
        </div>
        <div class="h-full w-full mt-4">
          <div class="overflow-auto p-5 bg-white rounded-lg shadow hidden md:block">
            <table class="w-full">
              <thead class="bg-gray-100">
                <tr>
                  <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Sarlavha</th>
                  <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Talim Darajasi</th>
                  <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">O'qish Turi</th>
                  <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Yili</th>
                  <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Amallar</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-for="(degree, index) in syllabus" :key="index" class="bg-white">
                  <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ degree.title }}</td>
                  <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ degree.daraja }}</td>
                  <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ degree.oqishTuri }}</td>
                  <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ degree.yili }}</td>
                  <td class="flex items-end">
                    <button class="mr-2 bg-blue-400 py-1 px-2 rounded">Edit</button>
                    <button class="mr-2 bg-red-400 py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  </template> 
  <script>
  import Layout from '../../components/Layout.vue';
  import { http } from '../../utils/http';
  export default {
    components: {
      Layout,
    },
    data() {
      return {
        syllabus: [],
      }
    },
    methods: {
      getData() {
        http.get('/daraja/all').then((response) => {
          this.syllabus = response.data.data;
          console.log(this.syllabus);
        }).catch(error => {
          console.log(error);
        })
      },
      deleteData(id) {
        if (confirm('This element will be delete!!! ⚠⚠⚠')) {
          http.delete(`/client/${id}/delete/`).then(() => {
            this.getData()
          })
        }
      },
    },
    created: function () {
      this.getData()
    }
  }
  
  </script> 
  