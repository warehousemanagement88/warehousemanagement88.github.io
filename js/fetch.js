import { get } from "https://bukulapak.github.io/api/process.js";
import {
  isiTablePresensi,
  isiTable_Mahasiswa,
  isiTabel_Dosen,
  isiTabel_Location,
  isiTabel_Waktu,
  isiTabel_Ruangan,
} from "./controller/get.js";
import {
  urlAPI,
  urlAPImahasiswa,
  urlAPIdosen,
  urlAPIlocation,
  urlAPIwaktu,
  urlAPIruangan,
} from "./config/url.js";
get(urlAPI, isiTablePresensi);
get(urlAPImahasiswa, isiTable_Mahasiswa);
get(urlAPIdosen, isiTabel_Dosen);
get(urlAPIlocation, isiTabel_Location);
get(urlAPIwaktu, isiTabel_Waktu);
get(urlAPIruangan, isiTabel_Ruangan);
