<template>
    <div class="flex flex-col">
        <label class="mb-4 border border-slate-300 py-2 pl-2 pr-3 rounded text-center shadow-sm">
            <span class="text-indigo-600 font-semibold cursor-pointer">Rasmlarni qo'shish</span>
            <input @change="selectFile" class="hidden" multiple type="file" />
        </label>

        <div v-if="progressInfos" class="mb-2">
            <div class="mb-2" v-for="(progressInfo, index) in progressInfos" :key="index">
                <span>{{ progressInfo.fileName }}</span>
                <div class="progress">
                    <div class="progress-bar progress-bar-info" role="progressbar"
                        :aria-valuenow="progressInfo.percentage" aria-valuemin="0" aria-valuemax="100"
                        :style="{ width: progressInfo.percentage + '%' }">
                        {{ progressInfo.percentage }}%
                    </div>
                </div>
            </div>
        </div>

        <div class="flex m-2 pl-14 flex-wrap">
            <a v-for="(file, index) in fileInfos" target="_blank" :href="'http://backend.tkti.uz' + '/' + file.photo" :key="index">
                <img 
                  class="m-2 w-20 h-20 rounded-full "
                  :src="'http://backend.tkti.uz' + '/' + file.photo" width="200" height="auto"
                />
            </a>
        </div>

        <button ref="forDisabled" class="bg-blue-800 text-white active:bg-blue-400 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" :disabled="!selectedFiles" @click="uploadFiles">
            Upload
        </button>
    </div>
</template>
  
<script>
import UploadService from "../utils/UploadFileServise";

export default {
    name: "upload-files",
    props:{
        stringData: Object,
        uploadUrl: String,
        getUrl: String
    },
    data() {
        return {
            selectedFiles: undefined,
            progressInfos: [],
            message: "",
            fileInfos: [],
        };
    },
    methods: {
        selectFile(event) {
            this.progressInfos = [];
            this.selectedFiles = event.target.files;
        },

        upload(idx, file) {
            this.progressInfos[idx] = { percentage: 0, fileName: file.name };
            console.log("nimadir chiqadi", file)
            UploadService.upload(file, (event) => {
                this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
            }, this.stringData, this.uploadUrl)
                .then((response) => {
                    let prevMessage = this.message ? this.message + "\n" : "";
                    this.message = prevMessage + response.data.message;

                    return UploadService.getFiles(this.getUrl);
                })
                .then((files) => {
                    UploadService.getFiles(this.getUrl).then((response) => {
                        this.fileInfos = response.data.data.filter(a => a.title_uz === this.stringData.title_uz);
                    });
                })
                .catch(() => {
                    this.progressInfos[idx].percentage = 0;
                    this.message = "Could not upload the file:" + file.name;
                });
        },

        uploadFiles() {
            this.message = "";
            for (let i = 0; i < this.selectedFiles.length; i++) {
                this.upload(i, this.selectedFiles[i]);
            }
            this.$refs.forDisabled.disabled = true
        }
    },
    mounted() {

    }
};
</script>