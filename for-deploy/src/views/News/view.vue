<template>
  <Layout>
    <form @submit.prevent="postData">
      <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
        <div class="flex justify-evenly w-full">
          <div class="space-y-6 news">
            <h1 class="news-info">yangilik o'zbek tilida ko'rish</h1>
            <hr />
            <InputComponent
              required
              class="w-full"
              name="Yangilik nomi uz"
              v-model="yangilik.title_uz"
            />
            <TextAreaComponents
              required
              class="w-full"
              v-model="yangilik.body_uz"
              name="Yangilik matni uz"
            />

            <h1 class="news-info">yangilik rus tilida ko'rish</h1>
            <hr />
            <InputComponent
              required
              class="w-full"
              name="Yangilik nomi ru"
              v-model="yangilik.title_ru"
            />
            <TextAreaComponents
              required
              class="w-full"
              v-model="yangilik.body_ru"
              name="Yangilik matni ru"
            />

            <h1 class="news-info">yangilik ingliz tilida ko'rish</h1>
            <hr />
            <InputComponent
              required
              class="w-full"
              name="Yangilik nomi eng"
              v-model="yangilik.title_eng"
            />
            <TextAreaComponents
              required
              class="w-full"
              v-model="yangilik.body_eng"
              name="Yangilik matni eng"
            />
            <div class="news-date">
              <InputComponent
                required
                class="w-full"
                name="yangilik kiritilgan vaqti"
                type="date"
                v-model="date"
              />

              <InputComponent
                required
                class="w-full"
                type="file"
                name="yangilik rasmi"
                v-model="newsImg"
              />
            </div>
          </div>
        </div>
        <div class="news-btn">
          <button
            type="submit"
            class="bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500"
          >
            yuklash
          </button>
          <RouterLink to="/news">
            <button
              type="submit"
              class="bg-red-500 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-red-400"
            >
              Ortga
            </button>
          </RouterLink>
        </div>
      </div>
    </form>
  </Layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import InputComponent from "../../components/InputComponent.vue";
import TextAreaComponents from "../../components/TextAreaComponents.vue";
import { http } from "../../utils/http";
export default {
  components: {
    Layout,
    InputComponent,
    TextAreaComponents,
  },
  data() {
    return {
      yangilik: {
        title_uz: "",
        title_ru: "",
        title_eng: "",
        body_uz: "",
        body_ru: "",
        body_eng: "",
        newsImg: "",
      },
    };
  },
  methods: {
    postData() {
      http
        .post("/news/add", {
          title_uz: this.yangilik.title_uz,
          title_ru: this.yangilik.title_ru,
          title_en: this.yangilik.title_eng,
          body_uz: this.yangilik.body_uz,
          body_ru: this.yangilik.body_ru,
          body_en: this.yangilik.body_eng,
          photo: this.newsImg,
        })
        .then((res) => {
          this.xabar();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    xabar() {
      alert("yangilik qo'hildi");
      this.$router.push("/news");
    },
  },
  mounted: function () {},
};
</script>

<style>
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
