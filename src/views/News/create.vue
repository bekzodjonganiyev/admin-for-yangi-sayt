<template>

    <Layout>
        <form @submit.prevent="postData">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="w-full px-10 space-y-6 flex flex-col">
                    <h1 class="news-info">Yangilik o'zbek tilida qo'shish</h1>
                    <hr />
                    <InputComponent required class="w-full" name="Yangilik nomi uz" v-model="yangilik.title_uz" />
                    <TextAreaComponents required class="w-full" v-model="yangilik.body_uz" name="Yangilik matni uz" />

                    <h1 class="news-info">Yangilik rus tilida qo'shish</h1>
                    <hr />
                    <InputComponent required class="w-full" name="Yangilik nomi ru" v-model="yangilik.title_ru" />
                    <TextAreaComponents required class="w-full" v-model="yangilik.body_ru" name="Yangilik matni ru" />

                    <h1 class="news-info">Yangilik ingliz tilida qo'shish</h1>
                    <hr />
                    <InputComponent required class="w-full" name="Yangilik nomi en" v-model="yangilik.title_eng" />
                    <TextAreaComponents required class="w-full" v-model="yangilik.body_eng" name="Yangilik matni en" />
                    <InputComponent required class="w-full" name="yangilik kiritilgan vaqti" type="date"
                        v-model="yangilik.date" />
                    <label class="mb-4 border border-slate-300 py-2 pl-2 pr-3 rounded text-center shadow-sm">
                        <span class="text-indigo-600 font-semibold cursor-pointer">Rasmlarni qo'shish</span>
                        <input @change="selectFile" class="hidden" multiple type="file" />
                    </label>
                </div>
                <div class="flex justify-between px-10">
                    <button type="submit"
                        class="   bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500">Yuklash
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
            selectedFiles: undefined,
            yangilik: {
                title_uz: "",
                title_ru: "",
                title_eng: "",
                body_uz: "",
                body_ru: "",
                body_eng: "",
                date: "",
            },
        }
    },
    methods: {
        selectFile(event) {
            this.selectedFiles = event.target.files
        },


        postData() {
            const formData = new FormData()

            formData.append("title_uz", this.yangilik.title_uz)
            formData.append("title_ru", this.yangilik.title_ru)
            formData.append("title_en", this.yangilik.title_eng)
            formData.append("body_uz", this.yangilik.body_uz)
            formData.append("body_ru", this.yangilik.body_ru)
            formData.append("body_en", this.yangilik.body_eng)
            formData.append("date", this.yangilik.date)
            for (let i = 0; i < this.selectedFiles.length; i++) {
                formData.append("photo", this.selectedFiles[i])
            }
            http.post('/news/add', formData
            ).then((res) => {
                this.xabar()
            }).catch((err) => {
                console.log(err)
            })
        },
        xabar() {
            alert("yangilik qo'hildi")
            this.$router.push('/news')
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