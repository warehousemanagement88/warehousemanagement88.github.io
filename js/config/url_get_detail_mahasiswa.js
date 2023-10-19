const urlParams = new URLSearchParams(window.location.search);
const mahasiswaId = urlParams.get("mahasiswaId");


export let urlFetch =
"https://alnovianti.herokuapp.com/mahasiswa/" + mahasiswaId;

