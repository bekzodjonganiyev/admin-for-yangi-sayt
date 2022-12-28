import { http } from "./http";

class UploadFilesService {
  async upload(file, onUploadProgress, stringData, uploadUrl) {
    var obj = { ...stringData };
    let formData = new FormData();

    formData.append("title_uz", obj.title_uz);
    formData.append("title_ru", obj.title_ru);
    formData.append("title_en", obj.title_en);
    formData.append("body_uz", obj.body_uz);
    formData.append("body_ru", obj.body_ru);
    formData.append("body_en", obj.body_en);
    formData.append("photo", file);

    return await http.post(`${uploadUrl}`, formData, {
      onUploadProgress,
    });
  }

  async getFiles(getUrl) {
    return await http.get(`${getUrl}`);
  }
}

export default new UploadFilesService();
