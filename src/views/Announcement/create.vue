<template>
    <Layout>
        <form @submit.prevent="postData">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="flex justify-evenly w-full">
                    <div class="space-y-6 announcement">
                        <h1 class="Announcement-info">e'lon o'zbek tilida qo'shish</h1><hr/>
                        <InputComponent required class="w-full" name="Yangilik nomi uz" v-model="AnnouncementName_uz" />
                        <TextAreaComponents required class="w-full"  v-model="AnnouncementText_uz"  name="Yangilik matni uz" />

                        <h1 class="Announcement-info">e'lon rus tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Yangilik nomi ru" v-model="AnnouncementName_ru" />
                        <TextAreaComponents required class="w-full" v-model="AnnouncementText_ru" name="Yangilik matni ru" />

                        <h1 class="Announcement-info">e'lon ingliz tilida qo'shish</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Yangilik nomi eng" v-model="AnnouncementName_eng" />
                        <TextAreaComponents  requiredclass="w-full" v-model="AnnouncementText_eng" name="Yangilik matni eng" />
                        <div class="Announcement-date ">

                            <InputComponent required class="w-full" name="e'lon kiritilgan vaqti" type="date"  v-model="date" />
                            
                            <InputComponent required class="w-full" type="file" name="e'lon rasmi" v-model="AnnouncementImg" />
                       
                        </div>
                    </div>
                 
                </div>
                <div class="Announcement-btn">

               
                <button
                    type="submit"
                    class="   bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500"
                >yuklash </button>
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
            AnnouncementName_uz: "",
            AnnouncementName_ru: "",
            AnnouncementName_eng: "",
            AnnouncementText_uz: "",
            AnnouncementText_ru: "",
            AnnouncementText_eng: "",
            AnnouncementImg:"", 
        }
    },
    methods: {
        postData() {
            http.post('/custom-user/create/',
                {
                    AnnouncementName_uz: this.organizatiosdssn,
                    AnnouncementName_ru: this.phone,
                    AnnouncementName_eng: this.password1,
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
<style>
.announcement{
    width:80vw;
    margin: 0 50px;
}
.Announcement-date{
    display: flex;
    gap: 10px;
}
.Announcement-info{
    display: flex;
    font-size: 25px;
    color: rgb(30, 65, 118);
    font-weight: 700;
    justify-content: center;

}
.Announcement-btn{
    display: flex;
    margin: 20px 50px;
    justify-content: end;
    gap: 15px;

}
</style>