const urlParams = new URLSearchParams(window.location.search);
const perwalianId = urlParams.get("perwalianId");

export let urlFetch =
  "https://alnovianti.herokuapp.com/perwalian/" + perwalianId;

