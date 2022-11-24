
<template>
  <Layout>
    <div class="container">
      <h1 class="font-bold text-2xl">Add Product</h1>
      <form @submit.prevent="postData()">
        <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 h-full bg-white">
          <div class="flex justify-evenly">
            <div class="space-y-6">
              <InputComponent v-model="product.global_item_id" class="full" name="Global_item_id" />
              <InputComponent v-model="product.name" class="full" name="Name" />
              <InputComponent v-model="product.cost" class="full" name="Cost" />
              <InputComponent v-model="product.price" class="full" name="Price" />
            </div>
            <div class="space-y-6">
              <InputComponent
                v-model="product.wholesale_price"
                class="full"
                name="Wholesale_Price"
              />
              <InputComponent v-model="product.shelf_life" class="full" name="Shelf_Life" />
              <InputComponent v-model="product.qty" class="full" name="QTY" />
              <InputComponent v-model="product.code" class="full" name="Code" />
              <input type="checkbox" id="checkbox" v-model="checked" />
              <label for="checkbox">{{ checked }}</label>
            </div>
          </div>
          <router-link to="/items">
            <button
              type="submit"
              class="absolute mt-40 bottom-2 right-5 bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500"
              v-on:click="onAdd()"
            >Save</button>
          </router-link>
        </div>
      </form>
      <div class="h-full w-full">
        <div class="overflow-auto p-5 bg-white rounded-lg shadow hidden md:block">
          <table class="w-full">
            <thead class="bg-gray-100">
              <tr>
                <th
                  v-for="(column, index) in columns"
                  v-bind:key="index"
                  class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                  @click="sortRecords(index)"
                >{{ column }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="(row, index) in rows" v-bind:key="index" class="bg-white">
                <td v-text="row.global_item_id"></td>
                <td v-text="row.name"></td>
                <td v-text="row.cost"></td>
                <td v-text="row.price"></td>
                <td v-text="row.wholesale_price"></td>
                <td v-text="row.shelf_life"></td>
                <td v-text="row.qty"></td>
                <td v-text="row.item_barcode[0].code"></td>
                <td v-text="row.is_primary"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
</template> 

<script>

import Layout from '../components/Layout.vue';
import InputComponent from '../components/InputComponent.vue';
import axios from "axios";
import { http } from '../utils/http';


export default {
  components: {
    Layout,
    axios,
    InputComponent,
  },
  name: 'Table,small-modal',
  data() {
    return {
      checked: true,
      product: {
        global_item_id: '',
        name: '',
        cost: '',
        price: '',
        wholesale_price: '',
        shelf_life: '',
        qty: '',
        code: '',
        is_primary: '',
      },
      rawRows: [],
      rows: [],
      columns: [
        'Global_Item_ID',
        'Name',
        'Cost',
        'Price',
        'Wholesale_Price',
        'Shelf_Life',
        'QTY',
        'Code',
        'Is_Primary'
      ],
    }
  },
  methods: {
    postData() {
      http.get('/item/create/',
        {
          global_item_id: this.global_item_id,
          name: this.name,
          cost: this.cost,
          price: this.price,
          wholesale_price: this.wholesale_price,
          shelf_life: this.shelf_life,
          qty: this.qty,
          code: this.code,
          is_primary: this.is_primary,
        }
      ).then((response) => {
        console.log(response.data.results);
      })
    },
    onAdd() {
      this.rawRows.push(this.product)
      product = {
        global_item_id: '',
        name: '',
        cost: '',
        price: '',
        wholesale_price: '',
        shelf_life: '',
        qty: '',
        code: '',
        is_primary: '',
      }
    }
  },
  mounted() {
    this.rows = this.rawRows;
    this.postData();
  }
}
</script> 



