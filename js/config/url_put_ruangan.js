const urlParams = new URLSearchParams(window.location.search);
const ruanganId = urlParams.get("ruanganId");


export let urlPUTRuangan =
  "https://alnovianti.herokuapp.com/updruangan/" + ruanganId;

export function AmbilResponseRuangan(result) {
  console.log(result); //menampilkan respond API pada console
  alert(result.message); //menampilkan respond API pada alert
  window.location.href = "ruangan.html"; //reload halaman setelah klik ok pada alert
}
