function deleteData(IDHAPUS) {
  var mahasiswaId = IDHAPUS;
  var ruanganId = IDHAPUS;
  var target_url =
    "https://alnovianti.herokuapp.com/delmahasiswa/" + mahasiswaId;
  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      alert(result.message);
      location.reload();
    })
    .catch((error) => console.log("Error:", error));
}
