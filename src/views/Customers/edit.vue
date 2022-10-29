<template>
    <Layout>
        <form @submit.prevent="userUpdate">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="flex justify-evenly">
                    <div class="space-y-6">
                        <InputComponent
                            class="w-full"
                            name="org id"
                            :type="number"
                            v-model.number="editCustomers.org_id"
                        />
                        <InputComponent
                            class="w-full"
                            name="Name"
                            :type="number"
                            v-model.number="editCustomers.name"
                        />
                        <InputComponent
                            class="w-full"
                            name="Phone"
                            :type="number"
                            v-model="editCustomers.phone"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    class="absolute mt-40 bottom-2 right-5 bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500"
                >Save</button>
            </div>
        </form>
    </Layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import InputComponent from "../../components/InputComponent.vue";
import { useRoute, useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import { http } from "../../utils/http";
export default {
    components: {
        Layout,
        InputComponent
    },
    // data: (() => ({

    // }))


    setup() {
        const editCustomers = ref({
            phone: "",
            name: "",
            org_id: ""
        });
        const router = useRouter();
        const route = useRoute();
        onMounted(() => {
            http.get(`/client/${route.params.id}/`).then((response) => {
                editCustomers.value = response.data;
                console.log('ma`lumotlar olindi=>', editCustomers)
            }).catch((response) => {
                console.log('ma`lumotlar olinmadi=>', response);
            })
        })

        function userUpdate() {
            http.put(`/client/${route.params.id}/update/`,
                {
                    phone: editCustomers.value.phone,
                    name: editCustomers.value.name,
                    organization_id: editCustomers.value.org_id
                }
            ).then(() => {
                router.push('/customers')
                alert("edit bo`ldi")
            })
        }
        return {
            editCustomers,
            userUpdate
        }

    },

}
</script>