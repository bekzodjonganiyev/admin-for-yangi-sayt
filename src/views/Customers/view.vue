<template>
    <Layout>
        <!-- Customer info -->
        <div class="bg-white shadow py-10 px-7 flex items-center justify-evenly mb-10">
            <!-- Image -->
            <div class="rounded mr-10">
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/919/5/177/selective-focus-photo-of-orange-fruit-wallpaper-preview.jpg"
                    class="w-56 h-56 rounded"
                />
            </div>

            <div class="flex">
                <div>
                    <InputComponent
                        class="w-72"
                        name="Customer Name"
                        :type="text"
                        v-model="customers.name"
                    />
                    <InputComponent
                        class="w-72"
                        name="Customer Phone"
                        :type="text"
                        v-model="customers.phone"
                    />
                    <InputComponent
                        class="w-72"
                        name="Global Cleint ID"
                        :type="text"
                        v-model="customers.global_client_id"
                    />
                </div>
                <div>
                    <InputComponent
                        class="w-72"
                        name="Organization ID"
                        :type="text"
                        v-model="customers.organization_id"
                    />
                    <InputComponent
                        class="w-72"
                        name="User ID"
                        :type="number"
                        v-model.number="customers.uuid"
                    />
                    <select
                        class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full"
                        v-model="customers.agent_id"
                    >
                        <option
                            v-for="(agent, index) in agents"
                            :value="agent.id"
                            :key="index"
                        >{{ agent.user_name }}</option>
                    </select>
                </div>
            </div>

            <!-- Info -->
            <!-- <div class="bg-white py-7 px-4 shadow overflow-y-scroll mb-10">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th
                                class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                            >Shop Name</th>
                            <th
                                class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                            >Shop Phone</th>
                            <th
                                class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                            >Shop Name</th>
                            <th
                                class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                            >Shop Phone</th>
                            <th
                                class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                            >Shop Name</th>
                            <th
                                class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                            >Shop Phone</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        <tr v-for="(customer, index) in customers" :key="index" class="bg-white">
                            <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ customer.name }}</td>
                            <td
                                class="p-3 text-sm text-gray-700 whitespce-nowrap"
                            >{{ customer.phone }}</td>
                            <td
                                class="p-3 text-sm text-gray-700 whitespce-nowrap"
                            >{{ customer.global_client_id }}</td>
                            <td
                                class="p-3 text-sm text-gray-700 whitespce-nowrap"
                            >{{ customer.organization_id }}</td>
                            <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ customer.uuid }}</td>
                            <td
                                class="p-3 text-sm text-gray-700 whitespce-nowrap"
                            >{{ customer.agent_id }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>-->
        </div>

        <!-- Store info -->
        <!-- <div class="bg-white py-7 px-4 shadow overflow-y-scroll mb-10">
            <table class="w-full">
                <thead class="bg-gray-100">
                    <tr>
                        <th
                            class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                        >Shop Name</th>
                        <th
                            class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                        >Shop Phone</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                    <tr v-for="(row, index) in customer" :key="index" class="bg-white">
                        <td class="p-3 text-sm text-gray-700 whitespce-nowrap">
                            {{
                                customer.store.name
                            }}
                        </td>
                        <td
                            class="p-3 text-sm text-gray-700 whitespce-nowrap"
                        >{{ customer.store.phone }}</td>
                    </tr>
                </tbody>
            </table>
        </div>-->
    </Layout>
</template>

<script>
import InputComponent from "../../components/InputComponent.vue"
import Layout from "../../components/Layout.vue"
import { http } from "../../utils/http"
export default {
    components: {
        Layout,
        InputComponent
    },
    data() {
        return {
            customers: [],
            agents: []
        }
    },
    methods: {
        getAgentName() {
            http.get('/custom-user/get/')
                .then((res) => {
                    this.agents = res.data
                })
        },

        getData() {
            http.get('/client/get/')
                .then((res) => {
                    this.customers = res.data
                    console.log(res.data);
                })
        }
    },
    created: function () {
        this.getData(),
        this.getAgentName()
    }
}
</script>