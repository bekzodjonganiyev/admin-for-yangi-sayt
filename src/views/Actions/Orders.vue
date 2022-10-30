<template>
  <Layout>
    <h1 class="font-semibold text-xl">Faoliyat</h1>
    <div class="my-5">
      <div class="flex justify-between">
        <label class="relative block">
          <!-- <span class="sr-only">Search</span> -->
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
            placeholder="Search order" type="text" name="search" />
        </label>
        <router-link to="/actions/create">
          <button
            class="bg-blue-800 text-white active:bg-blue-400 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button">Add Orders</button>
        </router-link>
      </div>
      <div class="h-full w-full mt-4">
        <div class="overflow-auto p-5 bg-white rounded-lg shadow hidden md:block">
          <table class="w-full">
            <thead class="bg-gray-100">
              <tr>
                <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Store_name</th>
                <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Ordered_date</th>
                <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Expected_date</th>
                <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">State</th>
                <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Options</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="(order, index) in orders" :key="index" class="bg-white">
                <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.store_name }}</td>
                <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.ordered_date }}</td>
                <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.expected_date }}</td>
                <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.state }}</td>
                <td class="flex">
                  <button type="button" class="mr-2 bg-orange-400 py-1 px-2 rounded">
                    <router-link :to="{ name: 'orders.edit', params: { id: order.id } }">Edit</router-link>
                  </button>
                  <button type="button" class="mr-2 bg-blue-400 py-1 px-2 rounded">
                    <router-link :to="{ name: 'orders.view', params: { id: order.id } }">View</router-link>
                  </button>

                  <button @click="deleteData(order.id)" type="button"
                    class="bg-red-400 py-1 px-2 rounded">Delete</button>
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
import InputComponent from '../../components/InputComponent.vue'
import { http } from '../../utils/http';
export default {
  components: {
    Layout,
    InputComponent
  },
  data() {
    return {
      orders: [],
      store_name: "",
      notes: "",
      ordered_date: "",
      expected_date: "",
      state: "",
      organization_id: "",
      store_id: "",
    }
  },
  methods: {
    getData() {
      http.get('/order/get/').then((response) => {
        this.orders = response.data;
      })
    },
    deleteData(id) {
      if (confirm('This order delete')) {
        http.delete(`/order/${id}/delete/`).then(() => {
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
