<template>
    <Layout>
        <h1 class="font-bold text-2xl">Add Product</h1>
        <form @submit.prevent="postData">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="flex justify-evenly">
                    <div class="space-y-6">
                        <InputComponent
                            class="w-full"
                            name="Organization"
                            v-model="organization_id"
                        />
                        <InputComponent
                            class="w-full"
                            name="Global_Item_ID"
                            v-model="global_item_id"
                        />
                        <InputComponent class="w-full" name="Name" v-model="name" />
                        <InputComponent class="w-full" name="Cost" v-model="cost" />
                        <InputComponent class="w-full" name="Price" v-model="price" />
                    </div>
                    <div class="space-y-6">
                        <InputComponent
                            class="w-full"
                            name="Wholesale_Price"
                            v-model="wholesale_price"
                        />
                        <InputComponent class="w-full" name="Shelf_Life" v-model="shelf_life" />
                        <InputComponent class="w-full" name="QTY" v-model="qty" />
                        <InputComponent class="w-full" name="Code" v-model="code" />
                        <input type="checkbox" id="checkbox" v-model="is_primary" />
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
            rawRows: [],
            items: [],
            organization_id: "",
            global_item_id: "",
            name: "",
            cost: "",
            price: "",
            wholesale_price: "",
            shelf_life: "",
            qty: "",
            code: "",
            is_primary: "",

        }
    },


    methods: {

        postData() {


                http.get('/item/2/').then((response) => {
                this.organization_id = response.data;
            })
            
            http.post('/item/create/',
                {
                    organization_id: this.organization_id,
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
            )
                .then(() => {

                })
                .catch(error => {
                    console.log('ERROR', error);
                })
        },
        xabar() {
            alert("yangi element qo`shidi")
            this.$router.push('/items')
        }
    },
    mounted: function () {
    }
}
</script>