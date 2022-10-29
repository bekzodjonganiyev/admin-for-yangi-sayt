
<template>
  <Layout>
    <div class="container">
      <h1 class="font-bold text-2xl">Add Order</h1>
      <div class="my-5">
        <div class="flex justify-center my-5">
          <form @submit.prevent="postData()">
            <div class="my-8 mx-40 justify-center rounded-xl drop-shadow-md pt-10 pb-20 px-20 bg-white flex space-x-4" >
              <div class="space-y-6">
                <label
                  class="sm:text-sm bg-white top-9 left-2 relative p-1 text-sky-600"
                  for="input"
                >Shop</label>
                <input
                v-model="item_name"
                  type="text"
                  placeholder
                  class="w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />

                <label
                  class="sm:text-sm text-sky-600 relative p-1 top-9 left-2 bg-white"
                  for="date"
                >Delivery date *</label>
                <input
                  type="date"
                  v-model="ordered_date"
                  class="w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
              </div>

              <div class="space-y-6">
                <label
                  class="text-sky-600 sm:text-sm p-1 bg-white top-9 left-2 relative"
                  for="date"
                >Ordered date</label>
                <input
                  type="date"
                  v-model="expected_date"
                  class="w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
                <label
                  class="sm:text-sm bg-white left-2 top-9 p-1 text-sky-600 relative"
                  for="input"
                >State</label>
                <input
                  v-model="state"
                  type="text"
                  placeholder
                  class="w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
              </div>

              <button
                type="submit"
                class="absolute mt-40 bottom-2 right-5 bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500"
              >Save</button>
            </div>
          </form>
        </div>
        <label class="relative block my-5 border-stone-400">
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
        </label>
        <input
          class="placeholder:text-slate-400 block bg-white w-96 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 border border-stone-200 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search ItemName"
          type="text"
          name="search"
          @input="onSearch"
        />
      </div>
      <div class="h-full w-full">
        <div class="overflow-auto p-5 overflow-y-scroll bg-white rounded-lg shadow hidden md:block">
          <table class="w-full">
            <thead class="bg-gray-100">
              <tr>
                <th
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                >Store_id</th>
                <th
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                >Name</th>
                <th
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                >QTY</th>
                 <!-- <th
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                >Notes</th>
                 <th
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                >Organization_id</th>
                 <th
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                >Currency name</th>
                 <th
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                >QTY</th>
                 <th
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                >Cost</th>
                 <th
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                >Item_id</th>
                 <th
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                >Currency id</th> -->
                <th
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                >Options</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="(order, index) in orders" :key="index" class="bg-white">
                <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.store_id }}</td>
                <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.store_name }}</td>
                <td class="border-orange-900 text-center  p-3 text-sm text-gray-700 whitespce-nowrap">
                  <input v-model="qty" class="overflow-y-scroll-none border border-black w-full p-1 rounded-sm" type="" />
                </td>
                <!-- <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.notes }}</td>
                <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.organization_id }}</td>
                <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.currency_name }}</td>
                <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.qty }}</td>
                <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.cost }}</td>
                <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.item_id }}</td>
                <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.currency_id }}</td> -->
                <td>
                  <button
                    @click="deleteData(order.id)"
                    type="button"
                    class="bg-red-400 py-1 px-2 rounded"
                  >Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <router-link to="/orders/view">
            <button
              type="submit"
              class="bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500"
            >Save</button>
          </router-link>
        </div>
      </div>
    </div>
  </Layout>
</template> 

<script>
import InputComponent from '../../components/InputComponent.vue'
import Layout from '../../components/Layout.vue';
import { http } from '../../utils/http';
import axios from "axios";



const performSearch = (rows, term) => {
  const results = rows.filter(
    row => row.join(" ").toLowerCase().includes(term.toLowerCase())
  )

  return results;
}

function stringToDate(str) {
  const [y, m, d] = str.split('-')
  return new Date(+y, m - 1, +d)
}

function dateToString(date) {
  return (
    date.getFullYear() +
    '-' +
    pad(date.getMonth() + 1) +
    '-' +
    pad(date.getDate())
  )
}

function pad(n, s = String(n)) {
  return s.length < 2 ? `0${s}` : s
}

export default {
  components: {
    Layout,
    InputComponent,
    http
  },
  data() {
    return {
      orders: [],
      rawRows: [],
      store_name: "",
      notes: "",
      ordered_date: "",
      expected_date: "",
      state: "",
      organization_id: "",
      store_id: "",
      orders: [
        {
          item_name: "Coca Cola",
          currency_name: "So'm",
          qty: 41,
          cost: 123123,
          item_id: 2,
          currency_id: 1
        }
      ]
    }
  },
  methods: {
    postData() {
      http.post('/order/create/',
        {
          store_name: this.store_name,
          notes: this.notes,
          ordered_date: this.ordered_date,
          expected_date: this.expected_date,
          state: this.state,
          organization_id: this.organization_id,
          store_id: this.store_id,
          item_name: this.item_name,
          currency_name: this.currency_name,
          qty: this.qty,
          cost: this.cost,
          item_id: this.item_id,
          currency_id: this.currency_id,
        }
      ).then(() => {
      }).catch(() => {
      })
    },
     getData() {
      http.get('/order/get/').then((response) => {
        this.orders = response.data;
      })
    },

    // postData() {
    //   http.post('/order-item/create/',
    //     {
    //       order_id: this.order_id,
    //       name: this.name,
    //       number: this.number,
    //     }
    //   ).then(() => {
    //   }).catch(() => {
    //   })
    // },
    deleteData(id) {
      http.delete(`/order/${id}/delete/`).then(() => {
        this.getData()
      })
    }
  },
  mounted() {
    this.getData();
    this.rows = this.rawRows;
  }
}
</script> 


