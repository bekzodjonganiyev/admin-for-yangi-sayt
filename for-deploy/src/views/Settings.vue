<template>
  <Layout>
    <div class="z-0">
      <!-- Setting block -->
      <div class="bg-white rounded px-6 py-6 shadow relative mt-10">
        <h1 class="text-2xl font-semibold">Setting Page</h1>
        <p class="text-sm text-slate-600 pb-4">Manage the notifications</p>
        <hr class="border border-gray-300 mb-10" />
        <div class="flex space-x-10">
          <!-- Notifications -->
          <div class="flex flex-col">
            <p class="text-lg font-semibold">Notifications</p>
            <SettingsCheckbox label="Email" type="checkbox" />
            <SettingsCheckbox label="Push Notifications" type="checkbox" />
            <SettingsCheckbox label="Text Messages" type="checkbox" />
            <SettingsCheckbox label="Phone calls" type="checkbox" />
          </div>

          <!-- Messsges -->
          <div class="flex flex-col">
            <p class="text-lg font-semibold">Messegaes</p>
            <SettingsCheckbox label="Email2" type="checkbox" />
            <SettingsCheckbox label="Push Notifications2" type="checkbox" />
            <SettingsCheckbox label="Phone calls2" type="checkbox" />
          </div>
        </div>
        <hr class="border border-gray-300 mb-16" />
        <button
          class="bg-indigo-600 text-white text-lg font-semibold px-4 py-1 rounded-md absolute right-5 bottom-7"
        >
          Save
        </button>
      </div>

      <!-- Password block -->
      <div class="bg-white rounded px-6 py-6 shadow relative mt-10">
        <h1 class="text-2xl font-semibold">Password</h1>
        <p class="text-sm text-slate-600 pb-4">Update password</p>
        <hr class="border border-gray-300 mb-8" />
        <div class="flex flex-col space-y-4">
          <input
            type="password"
            placeholder="Password"
            class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full"
          />
        </div>
        <hr class="border border-gray-300 mb-16 mt-8" />
        <button
          class="bg-indigo-600 text-white text-lg font-semibold px-4 py-1 rounded-md absolute right-5 bottom-7"
        >
          Save
        </button>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from "../components/Layout.vue";
import SettingsCheckbox from "../components/SettingsCheckbox.vue";
// export default {
//     components: {
//         Layout,
//         SettingsCheckbox,
//     },
// }
</script>
