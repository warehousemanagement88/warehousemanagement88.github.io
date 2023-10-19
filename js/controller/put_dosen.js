import { putData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPUTDosen, AmbilResponseUpdateDosen } from "../config/url_put _dosen.js";

function pushData() {
  let data = {
    nama: getValue("namadosen"),
    jabatan: getValue("jabatan"),
  };
  putData(urlPUTDosen, data, AmbilResponseUpdateDosen);
}

onClick("button", pushData);
