<template>
    <div>
        <div v-if="progressInfos">
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

        <label class="btn btn-default">
            <input type="file" multiple @change="selectFile" />
        </label>

        <button ref="forDisabled" class="btn btn-success" :disabled="!selectedFiles" @click="uploadFiles">
            Upload
        </button>
        <div class="card">
            <div class="card-header">List of Files</div>
            <img flex v-for="(file, index) in fileInfos" :key="index"
                :src="'http://backend.tkti.uz' + '/' + file.photo.split('public/')[1]" width="200" height="auto" />
        </div>
    </div>
</template>
  
<script>
import UploadService from "../utils/UploadFileServise";

export default {
    name: "upload-files",
    props:{
        stringData: Object,
        uploadUrl: String
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

            UploadService.upload(file, (event) => {
                this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
            }, this.stringData, this.uploadUrl)
                .then((response) => {
                    let prevMessage = this.message ? this.message + "\n" : "";
                    this.message = prevMessage + response.data.message;

                    return UploadService.getFiles();
                })
                .then((files) => {
                    console.log("files chiqdi", files)
                    UploadService.getFiles().then((response) => {
                        console.log("respomse chiqdi", response)
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