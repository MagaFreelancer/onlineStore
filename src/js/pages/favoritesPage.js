import favouritesCardsController from "./../favouritesCards/favouritesCardsController";

export default function (state) {
  favouritesCardsController(state);
  document.querySelector("#app").innerHTML = "";
}
