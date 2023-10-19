const urlParams = new URLSearchParams(window.location.search);
const ruanganId = urlParams.get("ruanganId");

export let urlFetch =
"https://alnovianti.herokuapp.com/ruangan/" + ruanganId;
