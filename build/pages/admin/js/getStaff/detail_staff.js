// detail_staff.js

// Function to fetch staff details and populate the details section
export function fetchAndPopulateStaffDetails(staffId) {
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_staff?id=" +
    staffId;

  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => populateDetails(result))
    .catch((error) => {
      console.error("Error fetching staff details:", error);
    });
}

// Function to populate the details section with staff details
function populateDetails(details) {
  // Update the DOM elements within the card
  const detailNamaLengkap = document.getElementById("detailNamaLengkap");
  const detailJabatan = document.getElementById("detailJabatan");
  const detailJenisKelamin = document.getElementById("detailJenisKelamin");

  detailNamaLengkap.textContent = details.namalengkap || "";
  detailJabatan.textContent = details.jabatan || "";
  detailJenisKelamin.textContent = details.jeniskelamin || "";
  // Update more details as needed
}
