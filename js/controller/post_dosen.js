import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOSTDosen, AmbilResponseDosen } from "../config/url_post.js";

// Function to show SweetAlert error message
function showErrorAlert(message) {
  Swal.fire("Error", message, "error");
}

function pushData() {
  let nama = getValue("namadosen");
  let jabatan = getValue("jabatan");

  // Validate input values
  if (!nama || !jabatan) {
    showErrorAlert("Input fields cannot be empty.");
    return;
  }

  let data = {
    nama: nama,
    jabatan: jabatan,
  };
  postData(urlPOSTDosen, data, AmbilResponseDosen);
}

onClick("button", pushData);
