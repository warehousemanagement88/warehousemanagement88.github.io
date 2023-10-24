import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";

export default function PostSignUp() {
  let firstname = getValue("isifirstname");
  let lastname = getValue("isilastname");
  let email = getValue("isiemail");
  let password = getValue("isipassword");
  let confirmpass = getValue("isiconfirmpass");

  // Validasi isian tidak boleh kosong
  if (!firstname || !lastname || !email || !password || !confirmpass) {
    Swal.fire({
      icon: "error",
      title: "Signup Failed",
      text: "Please fill in all fields.",
    });
    return;
  }

  let target_url =
    "https://asia-southeast2-nyoba-402410.cloudfunctions.net/warehousesignup";
  let datainjson = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    confirmpass: confirmpass,
  };

  fetch(target_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datainjson),
  })
    .then((response) => response.json())
    .then((result) => {
      responseData(result);
    })
    .catch((error) => {
      // Handle errors (e.g., network issues)
      console.error("Error:", error);
    })
    .finally(() => {});
}

function responseData(result) {
  if (result.status === true) {
    Swal.fire({
      icon: "success",
      title: "SignUp Successful",
      text: "You have successfully signed up.",
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        window.location.href =
          "https://warehousemanagement88.github.io/warehousesystem/login/index.html";
      }
    });
  } else {
    // Tampilkan SweetAlert ketika signup gagal
    Swal.fire({
      icon: "error",
      title: "Signup Failed",
      text: result.message || "An error occurred during signup.",
    });
  }
}
