<template>
  <Layout>
    <h1 class="font-bold text-2xl">Edit Product</h1>
    <form @submit.prevent="itemUpdate">
      <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
        <div class="flex justify-evenly">
          <div class="space-y-6">
            <InputCompone
              class="w-full"
              name="Organization"
              v-model="editItems.organization_id"
            />
            <InputComponent
              class="w-full"
              name="Global_Item_ID"
              v-model="editItems.global_item_id"
            />
            <InputComponent
              class="w-full"
              name="Name"
              v-model="editItems.name"
            />
            <InputComponent
              class="w-full"
              name="Cost"
              v-model="editItems.cost"
            />
            <InputComponent
              class="w-full"
              name="Price"
              v-model="editItems.price"
            />
          </div>
          <div class="space-y-6">
            <InputCompone
              class="w-full"
              name="Wholesale_Price"
              v-model="editItems.wholesale_price"
            />
            <InputComponent
              class="w-full"
              name="Shelf_Life"
              v-model="editItems.shelf_life"
            />
            <InputComponent class="w-full" name="QTY" v-model="editItems.qty" />
            <InputComponent
              class="w-full"
              name="Code"
              v-model="editItems.code"
            />
            <input
              type="checkbox"
              id="checkbox"
              v-model="editItems.is_primary"
            />
            <label for="checkbox">{{ is_primary }}</label>
          </div>
        </div>
        <button
          type="submit"
          class="absolute mt-40 bottom-2 right-5 bg-blue-800 text-white font-bold px-7 py-4 rounded-md cursor-pointer active:bg-blue-500"
        >
          Save
        </button>
      </div>
    </form>
  </Layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import InputComponent from "../../components/InputComponent.vue";
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { http } from "../../utils/http";
export default {
  components: {
    Layout,
    InputComponent,
  },

  setup() {
    const editItems = ref({
      global_item_id: "",
      name: "",
      cost: "",
      price: "",
      wholesale_price: "",
      shelf_life: "",
      qty: "",
      code: "",
      is_primary: "",
    });
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      http
        .get(`/item/${route.params.id}/`)
        .then((res) => {
          editItems.value = res.data;
          console.log("ma`lumotlar olindi=>", editItems);
        })
        .catch((error) => {
          console.log("ma`lumotlar olinmadi=>", error);
        });
    });

    function itemUpdate() {
      http
        .put(`/item/${route.params.id}/update/`, {
          global_item_id: editItems.value.global_item_id,
          name: editItems.value.name,
          cost: editItems.value.cost,
          price: editItems.value.price,
          wholesale_price: editItems.value.wholesale_price,
          shelf_life: editItems.value.shelf_life,
          qty: editItems.value.qty,
          code: editItems.value.code,
          is_primary: editItems.value.is_primary,
        })
        .then(() => {
          router.push("/items");
          alert("edit bo`ldi");
        })
        .catch((error) => {
          console.log("ma`lumotlar put bo`lmadi =>", error);
        });
    }
    return {
      editItems,
      itemUpdate,
    };
  },
};
</script>
