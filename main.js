const inputElement = document.querySelector("#input-element");
const buttonSearchUser = document.querySelector("#search-user");

var userLocated = inputElement.value;

function showName() {
  userLocated = inputElement.value;
  axios
    .get("https://api.github.com/users/" + userLocated)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.warn(error);
    });
}

buttonSearchUser.addEventListener("click", showName);

// function showName() {
//   userLocated = inputElement.value;
//   githubRequest(userLocated);
// }

// buttonSearchUser.addEventListener("click", showName);

// function githubRequest(user) {
//   var xhr = new XMLHttpRequest();
//   let userName = "https://api.github.com/users/" + user;
//   xhr.open("GET", userName);
//   xhr.send(null);

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.responseText));
//     }
//   };
// }
