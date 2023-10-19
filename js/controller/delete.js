function deleteData(IDHAPUS) {
  var perwalianId = IDHAPUS;
  var target_url = "https://alnovianti.herokuapp.com/del/" + perwalianId;

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
