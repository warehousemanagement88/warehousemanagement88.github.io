import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignIn() {
  let target_url =
    "https://asia-southeast2-nyoba-402410.cloudfunctions.net/warehouselogin";
  let tokenkey = "token";
  let tokenvalue =
    "5c633cfc6243cec8c9b5dae4a8aae7b366126ad04ee4e5a90c7596e7f8b9a9d8";
  let datainjson = {
    email: getValue("email"),
    password: getValue("password"),
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}

function responseData(result) {
  if (result.status === true) {
    Swal.fire({
      icon: "success",
      title: "SignIn Successful",
      text: "You have successfully signed in.",
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        window.location.href =
          "https://warehousemanagement88.github.io/warehousesystem/template/dashboard.html";
      }
    });
  } else {
    // Tampilkan SweetAlert ketika signup gagal
    Swal.fire({
      icon: "error",
      title: "SignIn Failed",
      text: result.message || "An error occurred during sign in.",
    });
  }
}
