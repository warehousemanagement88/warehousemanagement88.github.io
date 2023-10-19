const urlParams = new URLSearchParams(window.location.search);
const mahasiswaId = urlParams.get("mahasiswaId");

export let urlPUTMahasiswa =
  "https://alnovianti.herokuapp.com/updmahasiswa/" + mahasiswaId;


export function AmbilResponseUpdateMahasiswa(result) {
  console.log(result); //menampilkan respond API pada console
  alert(result.message); //menampilkan respond API pada alert
  window.location.href = "mahasiswa.html"; //reload halaman setelah klik ok pada alert
}
