const urlParams = new URLSearchParams(window.location.search);
const perwalianId = urlParams.get("perwalianId");

export let urlPUT = "https://alnovianti.herokuapp.com/update/" + perwalianId;

export function AmbilResponse(result) {
  console.log(result); //menampilkan respond API pada console
  alert(result.message); //menampilkan respond API pada alert
  window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}
