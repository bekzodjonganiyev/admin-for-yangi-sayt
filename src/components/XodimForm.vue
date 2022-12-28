<template>
  <form @submit.prevent="postData">
    <div class="form-content">
      <div class="uz">
        <h1 class="text-xl">Malumotlarni o'zbek tilida qo'shing</h1>
        <InputComponent
          v-model="job_uz"
          class="w-full mb-4 text-ml"
          name="Xodim lavozimi"
          type="text"
        />
        <InputComponent
          v-model="name_uz"
          class="w-full mb-4 text-ml"
          name="Xodim Ismi"
          type="text"
        />
      </div>

      <div class="ru">
        <h1 class="text-xl">Malumotlarni rus tilida qo'shing</h1>
        <InputComponent
          v-model="job_ru"
          class="w-full mb-4 text-ml"
          name="Xodim lavozimi"
          type="text"
        />
        <InputComponent
          v-model="name_ru"
          class="w-full mb-4 text-ml"
          name="Xodim Ismi"
          type="text"
        />
      </div>

      <div class="en">
        <h1 class="text-xl">Malumotlarni ingliz tilida qo'shing</h1>
        <InputComponent
          v-model="job_en"
          class="w-full mb-4 text-ml"
          name="Xodim lavozimi"
          type="text"
        />
        <InputComponent
          v-model="name_en"
          class="w-full mb-4 text-ml"
          name="Xodim Ismi"
          type="text"
        />
      </div>
    </div>
    <InputComponent
      v-model="tel"
      class="w-full mb-4 text-ml"
      name="Xodim telefon raqami"
      type="tel"
    />
    <InputComponent
      v-model="email"
      class="w-full mb-4 text-ml"
      name="Xodim email pochtasi"
      type="email"
    />

    <label
      class="mb-4 border border-slate-300 py-2 pl-2 pr-3 rounded text-center shadow-sm"
    >
      <span class="text-indigo-600 font-semibold cursor-pointer"
        >Xodim rasmini qo'shing</span
      >
      <input @change="onFileUpload" class="hidden" type="file" />
    </label>

    <select
      v-if="isFakultet"
      v-model="id"
      class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full select"
    >
      <option w-full value="">Qaysi fakultetga qo'shmoqchisiz</option>
      <option v-for="f in fakultet" :value="f._id">{{ f.title_uz }}</option>
    </select>

    <select
      v-if="isKafedra"
      v-model="id"
      class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full select"
    >
      <option w-full value="">Qaysi kafedraga qo'shmoqchisiz</option>
      <option v-for="k in kafedra" :value="k._id">{{ k.title_uz }}</option>
    </select>

    <select
      v-if="isBolim"
      v-model="id"
      class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full select"
    >
      <option w-full value="">Qaysi bo'limga qo'shmoqchisiz</option>
      <option v-for="b in bolim" :value="b._id">{{ b.title_uz }}</option>
    </select>

    <button
      class="w-full font-semibold text-sm text-white active:opacity-75 rounded-md bg-indigo-600 px-4 py-3 mt-4 w-full flex justify-center"
      type="submit"
    >
      Qo'shish
    </button>
  </form>
</template>

<script>
import { http } from "../utils/http";
import InputComponent from "./InputComponent.vue";
import Layout from "./Layout.vue";

export default {
  components: {
    Layout,
    InputComponent,
  },
  props: {
    isFakultet: {
      type: Boolean,
      default: false,
    },
    isKafedra: {
      type: Boolean,
      default: false,
    },
    isBolim: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: "",
    },
    pushTo: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      job_uz: "",
      job_ru: "",
      job_en: "",
      name_uz: "",
      name_ru: "",
      name_en: "",
      tel: "",
      email: "",
      id: "",
      date: "",
      photo: null,

      fakultetId: "",
      fakultet: [],
      kafedraId: "",
      kafedra: [],
      bolimId: "",
      bolim: [],
    };
  },
  methods: {
    getSelectOptions() {
      http
        .get("Fak_data/all")
        .then((res) => {
          console.log(res.data.data);
          this.fakultet = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });

      http
        .get("kafedra_data/all")
        .then((res) => {
          console.log(res.data.data);
          this.kafedra = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });

      http
        .get("bm_data/all")
        .then((res) => {
          console.log(res.data.data);
          this.bolim = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onFileUpload(event) {
      this.photo = event.target.files[0];
    },

    postData() {
      const formData = new FormData();

      formData.append("job_uz", this.job_uz);
      formData.append("job_ru", this.job_ru);
      formData.append("job_en", this.job_en);
      formData.append("name_uz", this.name_uz);
      formData.append("name_ru", this.name_ru);
      formData.append("name_en", this.name_en);
      formData.append("tell", this.tel);
      formData.append("email", this.email);
      formData.append(
        `${
          this.isFakultet
            ? "fakultet_id"
            : this.isKafedra
            ? "kafedra_id"
            : this.isBolim
            ? "bolim_id"
            : ""
        }`,
        this.id
      );
      formData.append("photo", this.photo);

      http
        .post(`${this.url}`, formData)
        .then((res) => {
          console.log(res.data.data);
          this.$router.push(`${this.pushTo}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getSelectOptions();
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.form-content {
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.uz,
.ru,
.en {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.uz {
  padding-right: 5px;
}

.ru {
  padding: 0px 5px;
}

.en {
  padding-left: 5px;
}

h1 {
  margin-bottom: 30px;
}
</style>
