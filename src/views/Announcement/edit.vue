<template>
    <Layout>
        <form @submit.prevent="userUpdate">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="flex justify-evenly">
                    <div class="space-y-6">
                        <InputComponent
                            class="w-full"
                            name="Organization"
                            :type="number"
                            v-model.number="editUsers.organization"
                        />
                        <InputComponent
                            class="w-full"
                            name="Phone"
                            :type="number"
                            v-model="editUsers.phone"
                        />
                        <InputComponent
                            class="w-full"
                            name="Password"
                            :type="text"
                            v-model="editUsers.password1"
                        />
                        <InputComponent
                            class="w-full"
                            name="Confirm Password"
                            :type="text"
                            v-model="editUsers.password2"
                        />
                    </div>
                    <div class="space-y-6">
                        <InputComponent
                            class="w-full"
                            name="Username"
                            :type="text"
                            v-model="editUsers.user_name"
                        />
                        <InputComponent
                            class="w-full"
                            name="Is organization admin"
                            :type="checkbox"
                            v-model="editUsers.is_org_admin"
                        /> 
                         <InputComponent
                            class="w-full"
                            name="Is manager"
                            :type="checkbox"
                            v-model="editUsers.is_manager"
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
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { http } from "../../utils/http";
export default {
    components: {
        Layout,
        InputComponent
    },
    // data: () => ({
    //     editUsers: {
    //         organization: "",
    //         phone: "",
    //         user_name: "",
    //         password1: "",
    //         password2: "",
    //         is_org_admin: "",
    //         is_manager: "",
    //     }
    // }),
    // mothods: {
    //     getData() {
    //         http.get(`/custom-user/${route.params.id}/`).then((response) => {
    //             this.editUser = response.data;
    //             console.log('ma`lumotlar olindi=>', editUsers)
    //         }).catch((response) => {
    //             console.log('ma`lumotlar olinmadi=>', response);
    //         })
    //     },

    //     editData() {
    //         http.put(`/custom-user/${route.params.id}/update/`,
    //             {
    //                 organization: this.editusers.organization,
    //                 phone: this.editusers.phone,
    //                 user_name: this.editusers.user_name,
    //                 password1: this.editusers.password1,
    //                 password2: this.editusers.password2,
    //                 is_org_admin: this.editusers.is_org_admin,
    //                 is_manager: this.editusers.is_manager
    //             }
    //         ).then(() => {
    //             router.push('/users')
    //             alert("edit bo`ldi")
    //         })
    //     }
    // },
    // created: function () {
    //     this.getData()
    // }


    setup() {
        const editUsers = ref({
            organization: "",
            phone: "",
            user_name: "",
            password1: "",
            password2: "",
            is_org_admin: "",
            is_manager: "",
        });
        const router = useRouter();
        const route = useRoute();
        onMounted(() => {
            http.get(`/custom-user/${route.params.id}/`).then((response) => {
                editUsers.value = response.data;
                console.log('ma`lumotlar olindi=>', editUsers)
            }).catch((response) => {
                console.log('ma`lumotlar olinmadi=>', response);
            })
        })

        function userUpdate() {
            http.put(`/custom-user/${route.params.id}/update/`,
                {
                    organization: editUsers.value.organization,
                    phone: editUsers.value.phone,
                    user_name: editUsers.value.user_name,
                    password1: editUsers.value.password1,
                    password2: editUsers.value.password2,
                    is_org_admin: editUsers.value.is_org_admin,
                    is_manager: editUsers.value.is_manager
                }
            ).then(() => {
                router.push('/users')
                alert("edit bo`ldi")
            })
        }
        return {
            editUsers,
            userUpdate
        }

    },
}
</script>