    
<template>
  <Layout>
    <div class="container">
      <h1 class="font-bold text-2xl my-5">View Order</h1>
      <div class="overflow-auto p-5 overflow-y-scroll bg-white rounded-lg shadow hidden md:block">
        <table class="w-full">
          <thead class="bg-gray-100">
            <tr>
              <th
                class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
              >Order_id</th>
              <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Name</th>
              <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Number</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="(order, index) in orders" :key="index" class="bg-white">
              <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.order_id }}</td>
              <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.name }}</td>
              <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ order.qty }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>  
  </Layout>
</template> 

<script>
import InputComponent from '../../components/InputComponent.vue'
import Layout from '../../components/Layout.vue';
import { http } from '../../utils/http';

export default {
  components: {
    Layout,
    InputComponent,
    http
  },
  name: 'Table',
  data() {
    return {
        item_name: "",
        currency_name: "",
        qty: "",
        cost: "",
        order_id: "",
        item_id: "",
        currency_id: "",
    
      rawRows: [],
      rows: [],
      sortIndex: null,
      sortDirection: null
    }
  },
  methods: {
      getData(){
            http.get('/order/get/').then((response) => {
                this.users = response.data;
            })
        },
  },
  mounted() {
    this.getData();
  }
}
</script> 


