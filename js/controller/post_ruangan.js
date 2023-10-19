import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOSTRuangan, AmbilResponseRuangan } from "../config/url_post.js";

// Function to show SweetAlert error message
function showErrorAlert(message) {
  Swal.fire("Error", message, "error");
}

function pushData() {
  let lokasi_ruangan = getValue("lokasi_ruangan");

  // Validate input value
  if (!lokasi_ruangan) {
    showErrorAlert("Input field cannot be empty.");
    return;
  }

  let data = {
    lokasi_ruangan: lokasi_ruangan,
  };
  postData(urlPOSTRuangan, data, AmbilResponseRuangan);
}

onClick("button", pushData);
