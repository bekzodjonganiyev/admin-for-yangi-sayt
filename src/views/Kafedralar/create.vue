<template>

    <Layout>
        <form @submit.prevent="postData">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="flex justify-evenly w-full">
                    <div class="space-y-6 news">
                        <h1 class="news-info">Kafedra o'zbek tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Kafedra nomi" v-model="kafedra.title_uz" />
                        <TextAreaComponents required class="w-full" v-model="kafedra.haqida_uz"
                            name="Kafedra haqida" />
                        <TextAreaComponents required class="w-full" v-model="kafedra.maqsad_uz"
                            name="Kafedra maqsadi" />
                        <TextAreaComponents required class="w-full" v-model="kafedra.yonalish_uz"
                            name="Kafedra yo'nalishlari" />

                        <h1 class="news-info">Kafedra rus tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Kafedra nomi" v-model="kafedra.title_ru" />
                        <TextAreaComponents required class="w-full" v-model="kafedra.haqida_ru"
                            name="Kafedra haqida" />
                        <TextAreaComponents required class="w-full" v-model="kafedra.maqsad_ru"
                            name="Kafedra maqsadi" />
                        <TextAreaComponents required class="w-full" v-model="kafedra.yonalish_ru"
                            name="Kafedra yo'nalishlari" />

                        <h1 class="news-info">Kafedra ingliz tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Kafedra nomi" v-model="kafedra.title_en" />
                        <TextAreaComponents required class="w-full" v-model="kafedra.haqida_en"
                            name="Kafedra haqida" />
                        <TextAreaComponents required class="w-full" v-model="kafedra.maqsad_en"
                            name="Kafedra maqsadi" />
                        <TextAreaComponents required class="w-full" v-model="kafedra.yonalish_en"
                            name="Kafedra yo'nalishlari" />

                        <h1 class="news-info">Fakultetni tanlang</h1>
                        <select
                            required
                            class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full select"
                            v-model="kafedra.fakultet_id">
                            <option value="">Fakultetni tanlang</option>
                            <option :value="kafedra.fakultet_id" v-for="faculty in faculties">{{ faculty.title_uz }}
                            </option>
                        </select>

                    </div>

                </div>
                <div class="news-btn">
                    <button type="submit"
                        class="   bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500">yuklash
                    </button>
                    <RouterLink to="/news">
                        <button type="submit"
                            class="  bg-red-500 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-red-400">Ortga</button>
                    </RouterLink>
                </div>
            </div>
        </form>
    </Layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import InputComponent from "../../components/InputComponent.vue";
import TextAreaComponents from "../../components/TextAreaComponents.vue"
import { http } from "../../utils/http";
export default {
    components: {
        Layout,
        InputComponent,
        TextAreaComponents,
    },
    data() {
        return {
            kafedra: {
                title_uz: "",
                title_ru: "",
                title_en: "",
                haqida_uz: "",
                haqida_ru: "",
                haqida_en: "",
                maqsad_uz: "",
                maqsad_en: "",
                maqsad_ru: "",
                yonalish_uz: "",
                yonalish_ru: "",
                yonalish_en: "",
                fakultet_id: ""
            },
            faculties: []
        }
    },
    methods: {
        postData() {
            http.post("kafedra_data/add",
                {
                    title_uz: this.kafedra.title_uz,
                    title_ru: this.kafedra.title_ru,
                    title_en: this.kafedra.title_en,

                    haqida_uz: this.kafedra.haqida_uz.split("\n"),
                    haqida_ru: this.kafedra.haqida_ru.split("\n"),
                    haqida_en: this.kafedra.haqida_en.split("\n"),

                    yonalish_uz: this.kafedra.yonalish_uz.split("\n"),
                    yonalish_ru: this.kafedra.yonalish_ru.split("\n"),
                    yonalish_en: this.kafedra.yonalish_en.split("\n"),

                    maqsad_uz: this.kafedra.maqsad_uz.split("\n"),
                    maqsad_ru: this.kafedra.maqsad_ru.split("\n"),
                    maqsad_en: this.kafedra.maqsad_en.split("\n"),

                    fakultet_id: this.kafedra.fakultet_id
                })
                .then(res => {
                    console.log(res.data)
                    alert("Malumotlar qo`shildi")
                    this.$router.push('/items')
                })
                .catch(err => {
                    console.log(err)
                })
        },

        getFaculty() {
            http.get("Fak_data/all")
                .then(res => {
                    console.log(res.data.data)
                    this.faculties = res.data.data
                })
        }
    },
    mounted: function () {
        this.getFaculty()
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