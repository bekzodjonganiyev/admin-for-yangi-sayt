<template>
    <form>
        <div class="form-content">
            <div class="uz">
                <h1>Xodim haqidagi malumotlarni o'zbek tilida qo'shing</h1>
                <InputComponent class="w-full mb-4 text-ml" name="Xodim lavozimi" type="text" />
                <InputComponent class="w-full mb-4 text-ml" name="Xodim Ismi" type="text" />
                <InputComponent class="w-full mb-4 text-ml" name="Xodim telefon raqami" type="tel" />
                <InputComponent class="w-full mb-4 text-ml" name="Xodim email pochtasi" type="email" />
                <InputComponent class="w-full mb-4 text-ml" name="Xodim rasmi" type="file" />
            </div>

            <div class="ru">
                <h1>Xodim haqidagi malumotlarni rus tilida qo'shing</h1>
                <InputComponent class="w-full mb-4 text-ml" name="Xodim lavozimi" type="text" />
                <InputComponent class="w-full mb-4 text-ml" name="Xodim Ismi" type="text" />
                <InputComponent class="w-full mb-4 text-ml" name="Xodim telefon raqami" type="tel" />
                <InputComponent class="w-full mb-4 text-ml" name="Xodim email pochtasi" type="email" />
                <InputComponent class="w-full mb-4 text-ml" name="Xodim rasmi" type="file" />
            </div>

            <div class="en">
                <h1>Xodim haqidagi malumotlarni ingliz tilida qo'shing</h1>
                <InputComponent class="w-full mb-4 text-ml" name="Xodim lavozimi" type="text" />
                <InputComponent class="w-full mb-4 text-ml" name="Xodim Ismi" type="text" />
                <InputComponent class="w-full mb-4 text-ml" name="Xodim telefon raqami" type="tel" />
                <InputComponent class="w-full mb-4 text-ml" name="Xodim email pochtasi" type="email" />
                <InputComponent class="w-full mb-4 text-ml" name="Xodim rasmi" type="file" />
            </div>
        </div>

        <select
            class="bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full select"
        >
            <option w-full value="">Qaysi fakultetga qo'shmoqchisiz</option>
        </select>

        <button class="w-full font-semibold text-sm text-white active:opacity-75 rounded-md bg-green-600 px-4 py-3 mt-4 w-full flex justify-center" type="submit">Qo'shish</button>
    </form>
</template>

<script>
import InputComponent from './InputComponent.vue';
import Layout from './Layout.vue';

export default {
    components: {
        Layout,
        InputComponent,
    },
    props: {
        xodimData: Object
    }
}

</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
}

.form-content {
    display: flex;
    align-content: center;
    justify-content: space-evenly;
}

.uz, .ru, .en{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
 .uz{
    padding-right: 5px;
 }

 .ru{
    padding: 0px 5px;
 }

 .en{
    padding-left: 5px;
 }

h1{
    margin-bottom: 30px;
}
</style>

