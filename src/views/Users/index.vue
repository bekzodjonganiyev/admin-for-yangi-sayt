<template>
    <Layout>
        <div class="container">
            <h1 class="font-semibold text-xl">Users</h1>
            <div class="my-5">
                <div class="flex">
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
                    id="myInput"
                    class="placeholder:text-slate-400 block bg-white w-96 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search order"
                    type="text"
                    name="search"
               />
          </label>
                    <div class="inline-flex ml-80">
                        <div class="flex mr-5">
                            <img
                                class="w-7 h-7 fill-blue-900 mt-2 rotate-180"
                                src="../../assets/export.svg"
                                alt
                            />
                            <button class="text-indigo-600">Import</button>
                        </div>
                        <div class="flex mr-5">
                            <img
                                class="fill-blue-900 w-7 h-7 mt-2 text-blue-900"
                                src="../../assets/export.svg"
                                alt
                            />
                            <button class="text-indigo-600">Export</button>
                        </div>
                        <div>
                            <router-link to="/user/create">
                                <button
                                    class="bg-blue-800 text-white active:bg-blue-400 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                >Add User</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="h-full w-full">
                    <h1 class="text-xl my-6">Recent Users</h1>
                    <div
                        class="overflow-auto p-5 overflow-y-scroll bg-white rounded-lg shadow hidden md:block"
                    >
                        <table class="w-full">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th
                                        class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                    >Organization</th>
                                    <th
                                        class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                    >Phone</th>
                                    <th
                                        class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                    >Password</th>
                                    <th
                                        class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                    >UserName</th>
                                    <th
                                        class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                    >Is_org_admin</th>
                                    <th
                                        class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                    >Is_mng</th>
                                    <th
                                        class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                                    >Options</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr v-for="(user, index) in users" :key="index" class="bg-white">
                                    <td
                                        class="p-3 text-sm text-gray-700 whitespce-nowrap"
                                    >{{ user.organization.id }}</td>
                                    <td
                                        class="p-3 text-sm text-gray-700 whitespce-nowrap"
                                    >{{ user.phone }}</td>
                                    <td
                                        class="p-3 text-sm text-gray-700 whitespce-nowrap"
                                    >{{ user.phone }}</td>
                                    <td
                                        class="p-3 text-sm text-gray-700 whitespce-nowrap"
                                    >{{ user.user_name }}</td>
                                    <td
                                        class="p-3 text-sm text-gray-700 whitespce-nowrap"
                                    >{{ user.is_org_admin }}</td>
                                    <td
                                        class="p-3 text-sm text-gray-700 whitespce-nowrap"
                                    >{{ user.is_manager }}</td>
                                    <td>
                                        <button
                                            type="button"
                                            class="mr-2 bg-orange-400 py-1 px-2 rounded"
                                        >
                                            <router-link
                                                :to="{ name: 'users.edit', params: { id: user.id } }"
                                            >Edit</router-link>
                                        </button>

                                        <button
                                            @click="deleteData(user.id)"
                                            type="button"
                                            class="bg-red-400 py-1 px-2 rounded"
                                        >Delete</button>
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
            users: [],
        }
    },
    methods: {
        getData() {
            http.get('/custom-user/get/').then((response) => {
                this.users = response.data;
            })
        },
        deleteData(id) {
            if (confirm('This element will be delete!!! ⚠⚠⚠')) {
                http.delete(`/custom-user/${id}/delete/`).then(() => {
                    this.getData()
                })
            }

        }
    },
    created: function () {
        this.getData()
    }
}
</script> 
