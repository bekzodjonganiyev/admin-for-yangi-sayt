<template>

    <Layout>
        <ModalWindow class="xodim-modal" :show="showModal" @close="showModal = false">
            <template #body>
                <XodimForm :is-fakultet="false" :is-kafedra="false" :is-bolim="true" url="bm_hodim/add" push-to="/departments" />
            </template>
        </ModalWindow>
        <form @submit.prevent="postData">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="flex justify-evenly w-full">
                    <div class="space-y-6 news">
                        <h1 class="news-info">Bo`lim o'zbek tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Bo`lim nomi" v-model="bolim.title_uz" />
                        <TextAreaComponents required class="w-full" v-model="bolim.haqida_uz" name="Bo`lim haqida" />
                        <TextAreaComponents required class="w-full" v-model="bolim.maqsad_uz" name="Bo`lim maqsadi" />

                        <h1 class="news-info">Bo`lim rus tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Bo`lim nomi" v-model="bolim.title_ru" />
                        <TextAreaComponents required class="w-full" v-model="bolim.haqida_ru" name="Bo`lim haqida" />
                        <TextAreaComponents required class="w-full" v-model="bolim.maqsad_ru" name="Bo`lim maqsadi" />

                        <h1 class="news-info">Bo`lim ingliz tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Bo`lim nomi" v-model="bolim.title_en" />
                        <TextAreaComponents required class="w-full" v-model="bolim.haqida_en" name="Bo`lim haqida" />
                        <TextAreaComponents required class="w-full" v-model="bolim.maqsad_en" name="Bo`lim maqsadi" />

                    </div>

                </div>
                <div class="flex justify-between px-16">
                    <button type="submit"
                        class="bg-blue-800 text-white active:bg-blue-400 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">yuklash
                    </button>
                    <button type="button" @click="showModal = true"
                        class="bg-blue-800 text-white active:bg-blue-400 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Xodim Qo'shish
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
import XodimForm from "../../components/XodimForm.vue";

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
            bolim: {
                title_uz: "",
                title_ru: "",
                title_en: "",
                haqida_uz: "",
                haqida_ru: "",
                haqida_en: "",
                maqsad_uz: "",
                maqsad_en: "",
                maqsad_ru: "",
            }
        }
    },
    methods: {
        postData() {
            http.post("bm_data/add",
                {
                    title_uz: this.bolim.title_uz,
                    title_ru: this.bolim.title_ru,
                    title_en: this.bolim.title_en,

                    haqida_uz: this.bolim.haqida_uz.split("\n"),
                    haqida_ru: this.bolim.haqida_ru.split("\n"),
                    haqida_en: this.bolim.haqida_en.split("\n"),

                    maqsad_uz: this.bolim.maqsad_uz.split("\n"),
                    maqsad_ru: this.bolim.maqsad_ru.split("\n"),
                    maqsad_en: this.bolim.maqsad_en.split("\n"),
                })
                .then(res => {
                    console.log(res.data)
                    alert("Malumotlar qo`shildi")
                    this.$router.push('/departments')
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
    margin: 20px 50px;
    gap: 15px;

}
</style>