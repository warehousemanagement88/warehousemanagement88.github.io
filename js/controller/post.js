import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

// Function to show SweetAlert error message
function showErrorAlert(message) {
  Swal.fire("Error", message, "error");
}

async function getDataMahasiswa(mahasiswaId) {
  // Fetch major data based on the ID (replace with your API endpoint)
  const response = await fetch(
    `https://alnovianti.herokuapp.com/mahasiswa/${mahasiswaId}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch major data.");
  }
}

async function getDataDosen(dosenId) {
  // Fetch major data based on the ID (replace with your API endpoint)
  const response = await fetch(
    `https://alnovianti.herokuapp.com/dosen/${dosenId}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch major data.");
  }
}

async function getDataRuangan(ruanganId) {
  // Fetch major data based on the ID (replace with your API endpoint)
  const response = await fetch(
    `https://alnovianti.herokuapp.com/ruangan/${ruanganId}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch major data.");
  }
}

function pushData() {
  // Get input values
  let mahasiswaId = getValue("nama");
  let dosenId = getValue("namadosen");
  let ruanganId = getValue("lokasi_ruangan");
  let tanggal = getValue("tanggal");

  // Validate input values
  if (
    !mahasiswaId ||
    mahasiswaId == "Pilih Nama Mahasiswa" ||
    !dosenId ||
    dosenId == "Pilih Nama Wali Dosen" ||
    !ruanganId ||
    ruanganId == "Pilih Ruangan"
  ) {
    showErrorAlert("Input fields cannot be empty.");
    return;
  }

  // Convert tanggal to tanggal-bulan-tahun format
  let formattedTanggal = formatDate(tanggal);

  Promise.all([
    getDataMahasiswa(mahasiswaId),
    getDataDosen(dosenId),
    getDataRuangan(ruanganId),
  ]).then(([mahasiswaData, dosenData, ruanganData]) => {
    let data = {
      time: {
        jam: getValue("jam"),
        hari: getValue("hari"),
        tanggal: formattedTanggal, // Use the formatted tanggal
      },
      walidosen: {
        _id: dosenId,
        nama: dosenData.nama,
        jabatan: dosenData.jabatan,
      },
      biodata: {
        _id: mahasiswaId,
        nama: mahasiswaData.nama,
        phone_number: mahasiswaData.phone_number,
        jurusan: mahasiswaData.jurusan,
      },
      ruangan: {
        _id: ruanganId,
        lokasi_ruangan: ruanganData.lokasi_ruangan,
      },
    };
    postData(urlPOST, data, AmbilResponse);
  });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

onClick("button", pushData);
