function loginAdmin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // var target_url = ;

  var data = {
    username: username,
    password: password,
  };

  var raw = JSON.stringify(data);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://alnovianti.herokuapp.com/loginadmin", requestOptions)
    .then((response) => {
      if (response.ok) {
        return response
          .json()
          .then((result) => (window.location.href = "../index.html"));
      } else {
        return response
          .json()
          .then((result) => alert("Username/Password salah"));
      }
    })
    .catch((error) => console.log("Error:", error));
}
document.getElementById("submit").addEventListener("click", loginAdmin);

// response.json())
// .then((result) => {
//   alert(result.message);
//   console.log(result.status);
//   if (result.status === 200) {
//     window.location.href = "index.html";
//   }
// })
