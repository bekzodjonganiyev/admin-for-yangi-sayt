<template>
    <Layout>
            <div class="">
                 <div class="flex justify-evenly">
                                    <label class="relative block my-5">
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
                        class="placeholder:text-slate-400 block bg-white w-96 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search Store"
                        type="text"
                        name="search store"
                    />
                </label>
                                <label class="relative block my-5">
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
                        class="placeholder:text-slate-400 block bg-white w-96 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search Item"
                        type="text"
                        name="search item"
                    />
                </label>
                 </div>
                <div class="bg-white py-7 px-4 rounded-lg shadow overflow-y-scroll">
                    <table id="" class="w-full">
                        <thead class="bg-gray-100">
                            <tr>
                                <th
                                    class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                >ID</th>
                                <th
                                    class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                >Store name</th>
                                <th
                                    class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                >Item name</th>
                                <th
                                    class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                >Item price</th>
                                 <th
                                    class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                >qty</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr v-for="item in storeItems" :key="item.id">
                                <td
                                    class="p-3 text-sm text-gray-700 whitespce-nowrap"
                                >{{ item.item_barcode[0].id }}</td>
                                <td
                                    class="p-3 text-sm text-gray-700 whitespce-nowrap"
                                >{{ item.item_barcode[0].store_name }}</td>
                                <td
                                    class="p-3 text-sm text-gray-700 whitespce-nowrap"
                                >{{ item.item_barcode[0].item_name }}</td>
                                <td
                                    class="p-3 text-sm text-gray-700 whitespce-nowrap"
                                >{{ item.item_barcode[0].item_price }}</td>
                                <td
                                    class="p-3 text-sm text-gray-700 whitespce-nowrap"
                                >{{ item.item_barcode[0].qty }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </Layout>
</template>

<script >
import Layout from "../components/Layout.vue";
import { http } from "../utils/http";
export default {
    components: {
        Layout,
    },
    data() {
        return {
            storeItems: [],
        }
    },
    methods: {
        getPost() {
            http.get(`/item/get/`).then((res) => {
                
                this.storeItems = res.data.results;
            })
        },
         getPost2() {
            http.get(`/store-item/get/`).then((res) => {
                this.storeItems = res.data;
            })
        },
    },
    mounted() {
        this.getPost();
        this.getPost2();
    }
}
</script>

