<template>

    <Layout>
        <ModalWindow class="xodim-modal" :show="showModal" @close="showModal = false">
            <template #body>
                <XodimForm/>
            </template>
        </ModalWindow>
        <form @submit.prevent="postData">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="flex justify-evenly w-full">
                    <div class="space-y-6 news">
                        <h1 class="news-info">Fakultet o'zbek tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Fakultet nomi" v-model="fakultet.title_uz" />
                        <TextAreaComponents required class="w-full" v-model="fakultet.haqida_uz"
                            name="Fakultet haqida" />
                        <TextAreaComponents required class="w-full" v-model="fakultet.maqsad_uz"
                            name="Fakultet maqsadi" />
                        <TextAreaComponents required class="w-full" v-model="fakultet.kafedras_uz"
                            name="Fakultet kafedralari" />

                        <h1 class="news-info">Fakultet rus tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Fakultet nomi" v-model="fakultet.title_ru" />
                        <TextAreaComponents required class="w-full" v-model="fakultet.haqida_ru"
                            name="Fakultet haqida" />
                        <TextAreaComponents required class="w-full" v-model="fakultet.maqsad_ru"
                            name="Fakultet maqsadi" />
                        <TextAreaComponents required class="w-full" v-model="fakultet.kafedras_ru"
                            name="Fakultet kafedralari" />

                        <h1 class="news-info">Fakultet ingliz tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Fakultet nomi" v-model="fakultet.title_en" />
                        <TextAreaComponents required class="w-full" v-model="fakultet.haqida_en"
                            name="Fakultet haqida" />
                        <TextAreaComponents required class="w-full" v-model="fakultet.maqsad_en"
                            name="Fakultet maqsadi" />
                        <TextAreaComponents required class="w-full" v-model="fakultet.kafedras_en"
                            name="Fakultet kafedralari" />
                    </div>
                </div>
                <div class="news-btn">
                    <button type="submit"
                        class="bg-blue-800 text-white active:bg-blue-400 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Malumotlarni Qo'shish
                    </button>
                    <button
                        class="bg-blue-800 text-white active:bg-blue-400 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button" id="show-modal" @click="showModal = true">
                        Xodim qo'shish
                    </button>
                </div>
            </div>
        </form>
    </Layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import InputComponent from "../../components/InputComponent.vue";
import TextAreaComponents from "../../components/TextAreaComponents.vue"
import ModalWindow from "../../components/ModalWindow.vue";
import XodimForm from "../../components/XodimForm.vue"
import { http } from "../../utils/http";
export default {
    components: {
        Layout,
        InputComponent,
        TextAreaComponents,
        ModalWindow,
        XodimForm
    },
    data() {
        return {
            showModal: false,
            fakultet: {
                title_uz: "",
                title_ru: "",
                title_en: "",
                haqida_uz: "",
                haqida_ru: "",
                haqida_en: "",
                maqsad_uz: "",
                maqsad_en: "",
                maqsad_ru: "",
                kafedras_uz: "",
                kafedras_ru: "",
                kafedras_en: "",
            }
        }
    },
    methods: {
        postData() {
            http.post("Fak_data/add",
                {
                    title_uz: this.fakultet.title_uz,
                    title_ru: this.fakultet.title_ru,
                    title_en: this.fakultet.title_en,

                    haqida_uz: this.fakultet.haqida_uz.split("\n"),
                    haqida_ru: this.fakultet.haqida_ru.split("\n"),
                    haqida_en: this.fakultet.haqida_en.split("\n"),

                    kafedras_uz: this.fakultet.kafedras_uz.split("\n"),
                    kafedras_ru: this.fakultet.kafedras_ru.split("\n"),
                    kafedras_en: this.fakultet.kafedras_en.split("\n"),

                    maqsad_uz: this.fakultet.maqsad_uz.split("\n"),
                    maqsad_ru: this.fakultet.maqsad_ru.split("\n"),
                    maqsad_en: this.fakultet.maqsad_en.split("\n"),
                })
                .then(res => {
                    console.log(res.data)
                    alert("Malumotlar qo`shildi")
                    this.$router.push('/customers')
                })
                .catch(err => {
                    console.log(err)
                })
        }

    },
    mounted: function () {
    }
}
</script>

<style scoped>
.news {
    width: 50vw;
    margin: 0 50px;
}

.news-date {
    display: flex;
    gap: 10px;
}

.news-info {
    display: flex;
    font-size: 25px;
    color: rgb(30, 65, 118);
    font-weight: 700;
    justify-content: center;

}

.news-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 50px;
    gap: 15px;

}


</style>