import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
// import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

export default function postSignUp() {
  firstname = getValue("isifirstname");
  lastname = getValue("isilastname");
  email = getValue("isiemail");
  password = getValue("isipassword");
  confirmpass = getValue("isiconfirmpass");

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
  if (result) {
    // Tampilkan SweetAlert berhasil signUp
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
    Swal.fire({
      icon: "error",
      title: "Signup Failed",
      text: result.message,
    });
  }
}
