// import { postWithToken } from "https://jscroot.github.io/api/croot.js";
// import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import PostSignUp from "./postfunction.js";
window.PostSignUp = PostSignUp;
document.getElementById("button").addEventListener("click", PostSignUp);
