<template>
    <Layout>
        <form @submit.prevent="postData">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="space-y-6 news">
                    <h1 class="news-info">Syllabusni Kiriting</h1>
                    <hr class="" />
                    <!-- Year -->
                    <InputComponent class="w-full" name="Syllabusni nomini kiriting" type="text"
                        v-model="education.title" />
                    <select required
                        class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full select"
                        v-model="education.year">
                        <option value="">Talim yilini tanlang</option>
                        <option class="text-black" v-for="(year, index) in years" :value="year.id" :key="index">
                            {{ year.text }}
                        </option>
                    </select>

                    <!-- Type -->
                    <select required
                        class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full select"
                        v-model="education.type">
                        <option value="">Talim turini tanlang</option>
                        <option class="text-black" v-for="(type, index) in types" :value="type" :key="index">
                            {{ type }}
                        </option>
                    </select>

                    <!-- Degree -->
                    <select required
                        class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full select"
                        v-model="education.degree">
                        <option value="">Talim darajasini tanlang</option>
                        <option class="text-black" v-for="(degree, index) in degrees" :value="degree" :key="index">
                            {{ degree }}
                        </option>
                    </select>

                    <!-- Faculty -->
                    <select required
                        class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full select"
                        v-model="education.faculty">
                        <option value="">Fakultetni tanlang</option>
                        <option class="text-black" v-for="(faculty, index) in faculties" :value="faculty.title_uz"
                            :key="index">
                            {{ faculty.title_uz }}
                        </option>
                    </select>

                    <!-- Kafedra -->
                    <select @change="getDirections()" ref="select" required
                        class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full select"
                        v-model="education.kafedra">
                        <option value="">Kafedrani tanlang</option>
                        <option class="text-black" v-for="(kafedra, index) in kaferdas" :value="kafedra.title_uz"
                            :key="kafedra._id">
                            {{ kafedra.title_uz }}
                        </option>
                    </select>

                    <!-- Direction -->
                    <select required
                        class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full select"
                        v-model="education.direction">
                        <option value="">Talim yo'nalishini tanlang</option>
                        <option class="text-black" v-for="(direction, index) in directions" :value="direction.yonalish_uz"
                            :key="index">
                            {{ direction.yonalish_uz.join("") }}
                        </option>
                    </select>
                    <InputComponent required class="w-full" name="Syllabusni yuklang" type="file"
                        @change="onFileUpload" />
                    <button type="submit"
                        class="bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500">Yuklash</button>
                </div>
            </div>
        </form>
    </Layout>
</template>

<script>
import { http } from '../../utils/http';

import Layout from '../../components/Layout.vue';
import InputComponent from '../../components/InputComponent.vue';
export default {
    components: {
        Layout,
        InputComponent
    },

    data() {
        return {
            education: {
                title: "",
                year: "",
                type: "",
                degree: "",
                faculty: "",
                kafedra: "",
                direction: "",
                file: null
            },
            faculties: [],
            kaferdas: [],
            years: [
                { id: 2019, text: "2019-2020" },
                { id: 2020, text: "2020-2021" },
                { id: 2021, text: "2021-2022" },
                { id: 2022, text: "2022-2023" },
            ],
            types: [
                "Kunduzgi",
                "Kechki",
                "Sirtqi"
            ],
            degrees: [
                "Bakalavr",
                "Magistr",
                "Doktarantura"
            ],
            directions: []
        }
    },

    methods: {
        onFileUpload(event) {
            this.education.file = event.target.files[0]
        },

        getFaculties() {
            http.get("/Fak_data/all")
                .then(res => {
                    this.faculties = res.data.data
                    console.log(res.data.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        getKafedras() {
            http.get(`/kafedra_data/all`)
                .then(res => {
                    this.kaferdas = res.data.data
                    console.log(res.data.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        getDirections() {
            let kafId = this.$refs.select.value

            console.log(kafId)
            http.get(`kafedra_data/all`)
                .then(res => {
                    console.log(res.data.data.filter(i => i.title_uz === kafId))

                    this.directions = res.data.data.filter(i => i.title_uz === kafId)
                })
        },

        postData() {
            const formData = new FormData()

            formData.append("title", this.education.title)
            formData.append("yili", this.education.year)
            formData.append("Fakultet", this.education.faculty)
            formData.append("Kafedra", this.education.kafedra)
            formData.append("talim_turi", this.education.type)
            formData.append("talim_yonalishi", this.education.direction)
            formData.append("talim_darajasi", this.education.degree)
            formData.append("photo", this.education.file)
            http.post("daraja/add", formData)
                .then(res => {
                    console.log(res.data)
                    this.$router.push("/syllabus")
                })
                .catch(err => {
                    console.log(err)
                })
            console.log(this.education)
        }
    },

    created: function () {
        this.getFaculties()
        this.getKafedras()
    }
}
</script>
<style scoped>
.select-label {
    margin-top: 20px !important;
}

.select {
    margin-top: 30px !important
}
</style>