<template>
  <button @click="toggleVisiblity" class="relative flex items-center">
    <img
      class="h-10 w-10 object-cover rounded mr-2"
      src="../assets/Dostonbek.png"
      alt="Current profile photo"
    />
    <p class="text-black text-lg font-semibold">Doston Po'latov</p>
    <div
      v-if="isVisible"
      class="absolute mt-2 w-36 left-4 top-8 bg-white rounded-md shadow-xl z-50 text-center"
    >
      <button
        @click="logOut"
        class="block px-4 py-2 text-sm text-center capitalize hover:bg-rose-200"
      >
        Log out
      </button>
    </div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    logOut() {
      document.cookie = `isAuth = ${false}`;
      window.location.reload(false);
    },
    toggleVisiblity() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
