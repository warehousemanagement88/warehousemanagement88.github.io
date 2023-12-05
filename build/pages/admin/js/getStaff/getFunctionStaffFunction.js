// Import necessary functions and URLs from getfunctionStaff.js
import {
  URLGetStaff,
  URLGetStaffStaff,
  responseData,
} from "./getfunctionStaff.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

// Your get function
const get = (target_url, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json()) // Assuming the response is JSON
    .then((result) => responseFunction(result))
    .catch((error) => {
      console.log("error", error);
    });
};

// Call the get function with the correct parameters
get(URLGetStaff, responseData);

// You can also use URLGetStaffStaff if needed
get(URLGetStaffStaff, someOtherResponseFunction);
