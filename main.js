const inputElement = document.querySelector("#input-element");
const buttonSearchUser = document.querySelector("#search-user");

//Cards variables content.
const cardName = document.querySelector(".name");
const cardImage = document.querySelector(".image");
const cardUser = document.querySelector(".user");

const cardStar = document.querySelector(".followers");
const cardFork = document.querySelector(".following");
const imgURL = document.querySelector(".image");
const cardContributor = document.querySelector(".public_repos");

const test = { teste: "test" };

var userLocated = inputElement.value;

function showName() {
  userLocated = inputElement.value;
  axios
    .get("https://api.github.com/users/" + userLocated)
    .then(function(response) {
      console.log(response.data);
      cardName.innerHTML = response.data.name;
      cardUser.innerHTML = response.data.login;
      imgURL.innerHTML =
        '<img class="git-image" src="' + response.data.avatar_url + '" />';
      cardStar.innerHTML = response.data.followers;
      cardFork.innerHTML = response.data.following;
      cardContributor.innerHTML = response.data.public_repos;
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
