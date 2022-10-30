<template>
    <Layout>
        <form @submit.prevent="postData">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="flex justify-evenly">
                    <div class="space-y-6">
                        <InputComponent class="w-full" name="Organization" v-model="organization" />
                        <InputComponent class="w-full" name="Phone" v-model="phone" />
                        <InputComponent class="w-full" name="Password" v-model="password1" />
                        <InputComponent class="w-full" name="Confirm Password" v-model="password2" />
                    </div>
                    <div class="space-y-6">
                        <InputComponent class="w-full" name="Username" v-model="user_name" />
                        <InputComponent
                            class="w-full"
                            :type="checkbox"
                            name="Is organization admin"
                            v-model="is_org_admin"
                        />
                        <InputComponent
                            class="w-full"
                            :type="checkbox"
                            name="Is manager"
                            v-model="is_manager"
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
import { http } from "../../utils/http";
export default {
    components: {
        Layout,
        InputComponent
    },
    data() {
        return {
            organization: 1,
            phone: "",
            password1: "",
            password2: "",
            user_name: "",
            is_org_admin: "",
            is_manager: ""
        }
    },
    methods: {
        postData() {
            http.post('/custom-user/create/',
                {
                    organization: this.organization,
                    phone: this.phone,
                    password1: this.password1,
                    password2: this.password2,
                    user_name: this.user_name,
                    is_org_admin: this.is_org_admin,
                    is_manager: this.is_manager,
                }
            ).then(() => {
                this.xabar()
            }).catch(() => {
            })
        },
        xabar() {
            alert("yangi element qo`shidi")
            this.$router.push('/users')
        }
    },
    mounted: function () {
    }
}
</script>