<template>
    <Layout>
        <form @submit.prevent="userUpdate">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="flex justify-evenly w-full">
                    <div class="space-y-6 announcement">
                        <h1 class="Announcement-info">e'lon o'zbek tilida ko'rish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="E'lon nomi uz" v-model="elon.title_uz" />
                        <TextAreaComponents required class="w-full" v-model="elon.body_uz" name="E'lon matni uz" />

                        <h1 class="Announcement-info">e'lon rus tilida ko'rish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="E'lon nomi ru" v-model="elon.title_ru" />
                        <TextAreaComponents required class="w-full" v-model="elon.body_ru" name="E'lon matni ru" />

                        <h1 class="Announcement-info">e'lon ingliz tilida ko'rish</h1>
                        <hr />

                        <InputComponent required class="w-full" name="E'lon nomi eng" v-model="elon.title_eng" />
                        <TextAreaComponents required class="w-full" v-model="elon.body_eng" name="E'lon matni eng" />

                        <div class="Announcement-date ">

                            <InputComponent required class="w-full" name="e'lon kiritilgan vaqti" type="date"
                                v-model="date" />

                            <InputComponent required class="w-full" type="file" name="e'lon rasmi" v-model="elon.announcementImg" />

                        </div>

                    </div>

                </div>

                <div class="Announcement-btn">


                    <button type="submit"
                        class="   bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500">yuklash
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
import { http } from "../../utils/http";
export default {
    components: {
        Layout,
        InputComponent,
        TextAreaComponents,
    },
    data() {
        return {
            elon: {
                title_uz: "",
                title_ru: "",
                title_eng: "",
                body_uz: "",
                body_ru: "",
                body_eng: "",
                announcementImg:"",
            }
        }
    },

    methods: {
        postData() {
            http.post('/elon/add',
                {
                    title_uz: this.elon.title_uz,
                    title_ru: this.elon.title_ru,
                    title_en: this.elon.title_eng,
                    body_uz: this.elon.body_uz,
                    body_ru: this.elon.body_ru,
                    body_en: this.elon.body_eng,
                    photo: this.elon.announcementImg
                }
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
<style>
.announcement {
    width: 60vw;
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
    margin: 20px 50px;

    gap: 15px;

}
</style>