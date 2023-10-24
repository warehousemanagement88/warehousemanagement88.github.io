import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
  let target_url =
    "https://asia-southeast2-awangga.cloudfunctions.net/petapedia-post";
  let tokenkey = "token";
  let tokenvalue = "8e87pod9d9a8fh9sfd87f9dhsf98dsf98sdf9ssd98f";
  let datainjson = {
    username: getValue("username"),
    password: getValue("password"),
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}

function responseData(result) {
  setInner("pesan", result.message);
  setCookieWithExpireHour("token", result.token, 2);
  window.location.href = "dashboard.html";
}
