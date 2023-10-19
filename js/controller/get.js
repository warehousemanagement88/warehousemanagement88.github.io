import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor } from "https://bukulapak.github.io/image/process.js";
import {
  isiTabel,
  isiTabelMahasiswa,
  isiTabelDosen,
  isiTabelLocation,
  isiTabelWaktu,
  isiTabelRuangan,
} from "../temp/table.js";
// export function isiTablePresensi(results) {
//   results.forEach(isiRow);
// }
// export function isiTable_Mahasiswa(results) {
//   results.forEach(isiRowMahasiswa);
// }
// export function isiTabel_Dosen(results) {
//   results.forEach(isiRowDosen);
// }
export function isiTabel_Location(results) {
  results.forEach(isiRowLocation);
}
export function isiTabel_Waktu(results) {
  results.forEach(isiRowWaktu);
}
// export function isiTabel_Ruangan(results) {
//   results.forEach(isiRowRuangan);
// }

//Perwalian
var MyvarPerwalian = {};
export function isiTablePresensi(results) {
  results.reverse();
  MyvarPerwalian.length = results.length;
  results.forEach(isiRow);
  console.log(results);
}

function isiRow(value) {
  document.getElementById("jmlperwalian").innerHTML =
    "" + MyvarPerwalian.length + " Data";
  let content = isiTabel
    .replace("#NAMA#", value.biodata.nama)
    .replace("#NOHP#", value.biodata.phone_number)
    .replace("#JURUSAN#", value.biodata.jurusan)
    .replace("#NAMAWALDOS#", value.walidosen.nama)
    .replace("#JABATAN#", value.walidosen.jabatan)
    .replace("#TANGGAL#", value.time.tanggal)
    .replace("#HARI#", value.time.hari)
    .replace("#JAM#", value.time.jam)
    .replace("#LOKASIRUANGAN#", value.ruangan.lokasi_ruangan)
    .replace("#IDDETAIL#", value._id)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor());
  addInner("iniTabel", content);
}

//Mahasiswa
var MyvarMahasiswa = {};
export function isiTable_Mahasiswa(results) {
  results.reverse();
  MyvarMahasiswa.length = results.length;
  results.forEach(isiRowMahasiswa);
  console.log(results);
}

function isiRowMahasiswa(value) {
  document.getElementById("jmlmahasiswa").innerHTML =
    "" + MyvarMahasiswa.length + " Data";
  let content = isiTabelMahasiswa
    .replace("#NAMA#", value.nama)
    .replace("#NOHP#", value.phone_number)
    .replace("#JURUSAN#", value.jurusan)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor());
  addInner("iniTabelMahasiswa", content);
}

//Dosen
var MyvarDosen = {};
export function isiTabel_Dosen(results) {
  results.reverse();
  MyvarDosen.length = results.length;
  results.forEach(isiRowDosen);
  console.log(results);
}

function isiRowDosen(value) {
  document.getElementById("jmldosen").innerHTML =
    "" + MyvarDosen.length + " Data";
  let content = isiTabelDosen
    .replace("#NAMA#", value.nama)
    .replace("#JABATAN#", value.jabatan)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor());
  addInner("iniTabelDosen", content);
}

//Ruangan
var MyvarRuangan = {};
export function isiTabel_Ruangan(results) {
  results.reverse();
  MyvarRuangan.length = results.length;
  results.forEach(isiRowRuangan);
  console.log(results);
}

function isiRowRuangan(value) {
  document.getElementById("jmlruangan").innerHTML =
    "" + MyvarRuangan.length + " Data";
  let content = isiTabelRuangan
    .replace("#LOKASIRUANGAN#", value.lokasi_ruangan)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor());
  addInner("iniTabelRuangan", content);
}

function isiRowLocation(value) {
  let content = isiTabelLocation
    .replace("#NAMALOKASI#", value.nama_lokasi)
    .replace("#ALAMAT#", value.alamat)
    .replace("#WARNA#", getRandomColor());
  addInner("iniTabelLocation", content);
}
function isiRowWaktu(value) {
  let content = isiTabelWaktu
    .replace("#JAM#", value.jam)
    .replace("#HARI#", value.hari)
    .replace("#TANGGAL#", value.tanggal)
    .replace("#WARNA#", getRandomColor());
  addInner("iniTabelWaktu", content);
}
