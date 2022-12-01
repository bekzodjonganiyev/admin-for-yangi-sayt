<template>
    <Layout>
        <div class="container">
            <h1 class="font-semibold text-xl">Bo'limlar</h1>
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
                        <input id="myInput"
                            class="placeholder:text-slate-400 block bg-white w-96 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Qidiring" type="text" name="search" />
                    </label>
                    <router-link to="/departments/create">
                        <button
                            class="bg-blue-800 text-white active:bg-blue-400 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            Bo'lim Qo'shish</button>
                    </router-link>

                </div>
                <div class="h-full w-full mt-4">
                    <div class="overflow-auto p-5 overflow-y-scroll bg-white rounded-lg shadow hidden md:block">
                        <table class="w-full">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">
                                        Nomi</th>
                                    <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">
                                        Maqsadi</th>
                                    <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">
                                        Amallar</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr v-for="(user, index) in users" :key="index" class="bg-white">
                                    <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ user.title_uz }}</td>
                                    <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ user.maqsad_uz }}</td>
                                    <td>
                                        <!-- <button type="button" class="mr-2 bg-orange-400 py-1 px-2 rounded">
                                            <router-link :to="{ name: 'departments.edit', params: { id: user._id } }">
                                                Tahrirlash
                                            </router-link>
                                        </button>

                                        <button type="button" class="mr-2 bg-blue-400 py-1 px-2 rounded">
                                            <router-link :to="{ name: 'departments.view', params: { id: user._id } }">
                                                Ko'rish
                                            </router-link>
                                        </button> -->


                                        <button @click="deleteData(user.id)" type="button"
                                            class="bg-red-400 py-1 px-2 rounded">O'chirish
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="flex justify-between items-center mt-16">
                    <h1 class="text-xl font-semibold">Bo'lim Xodimlari</h1>
                    <select class="w-96 p-2" ref="fakultet" @change="filterByFakultet">
                        <option value="all">Bo'limni  tanlang</option>
                        <option v-for="name in users" :value="name._id">{{ name.title_uz }}</option>
                    </select>
                </div>

                <div class="h-full w-full mt-4">
                    <div class="overflow-auto p-5 overflow-y-scroll bg-white rounded-lg shadow hidden md:block">
                        <table class="w-full">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Rasmi</th>
                                    <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Ismi</th>
                                    <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Javozimi</th>
                                    <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Telefon</th>
                                    <th class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left">Amallar</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr v-for="(user, index) in users" :key="index" class="bg-white">
                                    <td class="p-3 text-sm text-gray-700 whitespce-nowrap"><img :src="defaultUrl+'/'+xodim.photo" alt="xodim rasmi" width="100" height="auto"></td>
                                    <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{xodim.name_uz}}</td>
                                    <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{xodim.job_uz}}</td>
                                    <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{xodim.tell}}</td>
                                    <td class=" whitespce-nowrap">
                                        <!-- <button type="button" class="mr-2 bg-orange-400 py-1 px-2 rounded">Tahrirlash
                                        </button>
                                        <button type="button" class="mr-2 bg-blue-400 py-1 px-2 rounded">Ko'rish
                                        </button> -->
                                        <button type="button" @click="deleteFakXodim(xodim._id)" class="bg-red-400 py-1 px-2 rounded">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '../../components/Layout.vue';
import InputComponent from '../../components/InputComponent.vue';
import { http } from '../../utils/http';
export default {
    components: {
        Layout,
        InputComponent
    },
    data() {
        return {
            employes: [],
            filteredArray: [],
            users: [],
            url: "http://localhost:5000"
        }
    },
    methods: {
        getData() {
            http.get('/bm_data/all').then((response) => {
                this.users = response.data.data;
                console.log(this.users)
            })
        },
        deleteBolim(id) {
            if (confirm('This element will be delete!!! ⚠⚠⚠')) {
                http.delete(`bm_data/${id}`).then(() => {
                    this.getData()
                })
            }
        },
        deleteBmXodim(id) {
            if (confirm('This element will be delete!!! ⚠⚠⚠')) {
                http.delete(`bm_hodim/${id}`).then(() => {
                    this.getData()
                })
            }
        },
        filterByBolim() {
            const id = this.$refs.fakultet.value
            if (id === "all") {
                return this.filteredArray = this.employes
            } else {
                return this.filteredArray = this.employes.filter(item => item.fakultet_id === id)
            }
        },
    },
    created: function () {
        this.getData()
    }
}
</script> 
