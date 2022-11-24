import { http } from "./http";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("title_uz", "hnmsjsj");
    formData.append("title_ru", "hnmsjsj");
    formData.append("title_en", "hnmsjsj");
    formData.append("body_uz", "hnmsjsj");
    formData.append("body_ru", "hnmsjsj");
    formData.append("body_en", "hnmsjsj");
    formData.append("photo", file);

    return http.post("/elon/add", formData, {
      onUploadProgress
    });
  }

  getFiles() {
    return http.get("/elon/all");
  }
}

export default new UploadFilesService();
