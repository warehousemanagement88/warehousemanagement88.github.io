import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import {
  urlPOSTMahasiswa,
  AmbilResponseMahasiswa,
} from "../config/url_post.js";

// Function to show SweetAlert error message
function showErrorAlert(message) {
  Swal.fire("Error", message, "error");
}

function pushData() {
  let nama = getValue("nama");
  let phone_number = getValue("phone_number");
  let jurusan = getValue("jurusan");

  // Validate input values
  if (!nama || !phone_number || !jurusan) {
    showErrorAlert("Input fields cannot be empty.");
    return;
  }

  let data = {
    nama: nama,
    phone_number: phone_number,
    jurusan: jurusan,
  };
  postData(urlPOSTMahasiswa, data, AmbilResponseMahasiswa);
}

onClick("button", pushData);
