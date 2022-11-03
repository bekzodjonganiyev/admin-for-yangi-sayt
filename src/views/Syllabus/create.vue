<template>
    <Layout>
        <form @submit.prevent="postData">
            <div class="my-8 mx-40 rounded-xl drop-shadow-md pt-20 pb-20 bg-white">
                <div class="flex justify-evenly w-full">
                    <div class="space-y-6 news">
                        <h1 class="news-info">Nimadir uz</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />
                        <InputComponent required class="w-full" name="Yangilik nomi uz"  />

                        <h1 class="news-info">Nimadir ru</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />
                        <InputComponent required class="w-full" name="Yangilik nomi ru"  />

                        <h1 class="news-info">Nimadir eng</h1>
                        <hr />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />
                        <InputComponent required class="w-full" name="Yangilik nomi eng"  />

                    </div>
                </div>
            </div>
        </form>
    </Layout>
</template>

<script>
import Layout from '../../components/Layout.vue';
import InputComponent from '../../components/InputComponent.vue';
export default {
    components: {
        Layout,
        InputComponent
    },
}
</script>