// Fetch data mahasiswa from the API for Pilih Nama Mahasiswa
fetch("https://alnovianti.herokuapp.com/allmahasiswa")
  .then((response) => response.json())
  .then((data) => {
    const mahasiswaDropdown = document.getElementById("nama");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id;
      option.text = item.nama;
      mahasiswaDropdown.appendChild(option);
    });
  })
  .catch((error) => console.log(error));

// Fetch data dosen from the API for Pilih Nama Wali Dosen
fetch("https://alnovianti.herokuapp.com/alldosen")
  .then((response) => response.json())
  .then((data) => {
    const dosenDropdown = document.getElementById("namadosen");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id;
      option.text = item.nama;
      dosenDropdown.appendChild(option);
    });
  })
  .catch((error) => console.log(error));

// Fetch data ruangan from the API for Pilih Ruangan
fetch("https://alnovianti.herokuapp.com/allruangan")
  .then((response) => response.json())
  .then((data) => {
    const ruanganDropdown = document.getElementById("lokasi_ruangan");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id;
      option.text = item.lokasi_ruangan;
      ruanganDropdown.appendChild(option);
    });
  })
  .catch((error) => console.log(error));
