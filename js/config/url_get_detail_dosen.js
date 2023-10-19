const urlParams = new URLSearchParams(window.location.search);
const dosenId = urlParams.get("dosenId");


export let urlFetch =
"https://alnovianti.herokuapp.com/dosen/" + dosenId;
