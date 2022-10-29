
<template>
    <Layout>
        <div class="pt-7">
            <h2 class="text-2xl font-semibold pb-4">Profil</h2>
            <hr class="border border-gray-300" />
            <div class="flex mt-10 justify-between items-center">
                <!-- View Card -->
                <div
                    class="bg-white rounded shadow py-4 px-16 space-y-6 text-center flex-col flex items-center"
                >
                    <img src="https://picsum.photos/id/1/200/300" class="rounded-full w-20 h-20" />
                    <p class="text-xl font-bold">Adrian Stefan</p>
                    <p class="text-sm text-gray-400">
                        Los Angeles USA
                        <br />GTM-7
                    </p>
                    <label>
                        <span class="text-indigo-600 font-semibold cursor-pointer">Upload picture</span>
                        <input class="hidden" type="file" />
                    </label>
                </div>
                <!-- Input Card -->
                <div class="bg-white rounded shadow py-10 px-8">
                    <h2 class="text-left font-bold pb-4 text-lg">Card Header</h2>
                    <hr class="border border-gray-300" />
                    <!-- Input fields -->
                    <div class="mt-10 flex space-x-4">
                        <div class="space-y-6">
                            <InputComponent class="w-72" name="Firs Name*" v-model="show" />
                            <InputComponent class="w-72" name="Email Adress*" />
                            <InputComponent class="w-72" name="Country*" />
                            <div>{{ show }}</div>
                        </div>
                        <div class="space-y-6">
                            <InputComponent class="w-72" name="Last Name*" />
                            <InputComponent class="w-72" name="Phone Number*" />
                            <select
                                class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-72"
                            >
                                <option disabled default>Please select one</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                            </select>
                        </div>
                    </div>
                    <button
                        class="font-semibold text-sm text-white active:opacity-75 rounded-md bg-indigo-600 px-4 py-3 mt-10 flex justify-items-end text-right"
                    >Save Details</button>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script >

import Layout from '../components/Layout.vue';
import InputComponent from '../components/InputComponent.vue';

export default {
    components: {
        Layout,
        InputComponent,
    },
    data() {
        return {
            show: ""
        }
    }
}
</script>