<template>
    <Layout>
        <form @submit.prevent="postData">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="flex justify-evenly w-full">
                    <div class="space-y-6 announcement">
                        <h1 class="Announcement-info">E'lon o'zbek tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="E'lon nomi uz" v-model="elon.title_uz" />
                        <TextAreaComponents required class="w-full" v-model="elon.body_uz" name="E'lon matni uz" />

                        <h1 class="Announcement-info">E'lon rus tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="E'lon nomi ru" v-model="elon.title_ru" />
                        <TextAreaComponents required class="w-full" v-model="elon.body_ru" name="E'lon matni ru" />

                        <h1 class="Announcement-info">E'lon ingliz tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="E'lon nomi eng" v-model="elon.title_eng" />
                        <TextAreaComponents required class="w-full" v-model="elon.body_eng" name="E'lon matni eng" />

                        <div class="Announcement-date ">
                            <InputComponent required class="w-full" name="e'lon kiritilgan vaqti" type="date"
                                v-model="elon.date" />
                        </div>
                        <label class="mb-4 border border-slate-300 py-2 pl-2 pr-3 rounded text-center shadow-sm">
                            <span class="text-indigo-600 font-semibold cursor-pointer">Rasmlarni qo'shish</span>
                            <input @change="selectFile" class="hidden" multiple type="file" />
                        </label>
                        <!-- <UploadFiles :string-data="elon" upload-url="/elon/add" get-url="/elon/all"/> -->
                    </div>
                </div>
                <div class="Announcement-btn">
                    <button type="submit"
                        class="   bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500">Yuklash
                    </button>
                    <RouterLink to="/users">
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
import UploadFiles from "../../components/UploadFiles.vue"
import { http } from "../../utils/http";
export default {
    components: {
        Layout,
        InputComponent,
        TextAreaComponents,
        UploadFiles
    },
    data() {
        return {
            selectedFiles: undefined,
            elon: {
                title_uz: "",
                title_ru: "",
                title_eng: "",
                body_uz: "",
                body_ru: "",
                body_eng: "",
                date: "",
            }
        }
    },
    methods: {
        selectFile(event) {
            this.selectedFiles = event.target.files;
            console.log(this.selectedFiles)
        },

        postData() {
            const formData = new FormData()
            formData.append("title_uz", this.elon.title_uz)
            formData.append("title_ru", this.elon.title_ru)
            formData.append("title_en", this.elon.title_eng)
            formData.append("body_uz", this.elon.body_uz)
            formData.append("body_ru", this.elon.body_ru)
            formData.append("body_en", this.elon.body_eng)
            formData.append("date", this.elon.date)
            for (let i = 0; i < this.selectedFiles.length; i++) {
                formData.append("photo", this.selectedFiles[i])
                console.log(this.selectedFiles[i])
            }

            for (var value of formData.values()) {
                console.log(value);
            }

            http.post('/elon/add', formData
            ).then((res) => {
                this.xabar()
                console.log(res)
            }).catch((err) => {
                console.log(err)
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
<style scoped>
.announcement {
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: 0 50px;
}

.Announcement-date {
    display: flex;
    gap: 10px;
}

.Announcement-info {
    display: flex;
    font-size: 25px;
    color: rgb(30, 65, 118);
    font-weight: 700;
    justify-content: center;

}

.Announcement-btn {
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin: 20px 50px;
    gap: 15px;

}
</style>