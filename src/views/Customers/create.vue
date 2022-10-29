<template>
    <Layout>
        <!-- ModalWindow -->
        <div>
            <ModalWindow :show="showModal" @close="showModal = false">
                <template #header>
                    <h3 class="text-semibold text-lg text-black">Add your shop</h3>
                </template>
                <template #body>
                    <div>
                        <div class="space-y-4">
                            <InputComponent class="w-72" name="Shop Name" v-model="store.name" />
                            <InputComponent class="w-72" name="Phone" v-model.number="store.phone" />
                        </div>
                        <button
                            @click="createRow()"
                            class="font-semibold text-sm text-white active:opacity-75 rounded-md bg-orange-400 px-4 py-3 mt-4 w-full flex justify-center"
                        >Save</button>
                    </div>
                </template>
            </ModalWindow>
        </div>

        <!-- Customer Info -->
        <div class="bg-white shadow py-10 px-7 flex items-center justify-evenly mb-10">
            <!-- Image -->
            <div class="rounded mr-10">
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/919/5/177/selective-focus-photo-of-orange-fruit-wallpaper-preview.jpg"
                    class="w-56 h-56 rounded"
                />
            </div>

            <!-- Info -->
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
                        v-model.number="customers.organization_id"
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
        </div>

        <!--Enter the  Shop info -->
        <div class="bg-white py-7 px-4 shadow overflow-y-scroll mb-10">
            <table class="w-full">
                <thead class="bg-gray-100">
                    <tr>
                        <th
                            class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                        >Name</th>
                        <th
                            class="w-32 text-zinc-400 p-3 text-sm font-semibold tracking-wide text-left"
                        >Phone</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                    <tr v-for="(row, index) in customers.stores" :key="index" class="bg-white">
                        <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ row.name }}</td>
                        <td class="p-3 text-sm text-gray-700 whitespce-nowrap">{{ row.phone }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Buttons -->
        <div class="flex justify-between">
            <button
                class="bg-blue-800 text-white active:bg-blue-400 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                id="show-modal"
                @click="showModal = true"
            >Add Shop</button>
            <button
                class="bg-orange-400 text-white active:bg-blue-400 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                id="show-modal"
                @click="postData()"
            >Save All</button>
        </div>
    </Layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import InputComponent from "../../components/InputComponent.vue";
import ModalWindow from "../../components/ModalWindow.vue";
import { http } from "../../utils/http";
export default {
    components: {
        Layout,
        ModalWindow,
        InputComponent
    },
    data() {
        return {
            showModal: false,
            customers: {
                uuid: "",
                name: "",
                phone: "",
                global_client_id: "",
                organization_id: "",
                agent_id: "",
                stores: [],
            },
            store: {
                name: "",
                phone: "",
            },
            agents: []
        }
    },
    methods:
    {
        getData() {
            http.get('/custom-user/get')
                .then((response => {
                    this.agents = response.data
                }))
        },
        postData() {
            http.post('/client/create/',
                {
                    uuid: this.customers.uuid,
                    organization_id: this.customers.organization_id,
                    name: this.customers.name,
                    phone: this.customers.phone,
                    global_client_id: this.customers.global_client_id,
                    agent_id: this.customers.agent_id,
                    stores: this.customers.stores
                }
            )
                .then((res) => {
                    // alert("yangi element qo`shidi")
                    // this.$router.push('/customers')
                    // console.log(res.data)
                    console.log('*/*8*8*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/');
                    console.log(res.data);
                })
                .catch(() => {
                    console.log(typeof this.customers.organization_id);
                    console.log(this.customers);
                })
        },
        createRow() {
            const { name, phone } = this.store;
            this.customers.stores.push({ name, phone });

            this.store.name = '';
            this.store.phone = '';

            this.showModal = false;
        }
    },
    mounted() {
        this.getData()
    }
}
</script>