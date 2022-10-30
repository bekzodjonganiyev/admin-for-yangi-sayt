<template>
    <div>
        <!-- Input field -->
        <div class="relative">
            <label for="input" class="text-area absolute mx-2 top-0 left-2 bg-white outline-white text-sm text-blue-900 px-1">{{
                    name
            }}</label>
            <textarea :value="modelValue" @textarea="$emit('update:modelValue', $event.target.value)" :type="type" id="textarea"
                class="h-40 bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full" />
        </div>
    </div>
</template>
<script>

// defineProps({
//     name: String
// })
export default {
    // props:{
    //     name:String
    // },
    // props: ['modelValue', 'name', 'type'],
    props: {
        modelValue: String,
        name: String,
        type: String,
    },
    emits: ['update:modelValue'],
    // created()
    // {
    // console.log(this.name)
    // }
}
</script>
<style>
.text-area{
    margin-top:-10px ;
}
</style>