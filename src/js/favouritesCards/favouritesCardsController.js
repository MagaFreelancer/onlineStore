import * as view from "./favoritesCardsView";
import favouritesCards from "./favouritesCardsModel";

export default async function (state) {
  const favsList = state.favourites.favs;
  const favoritesCards = new favouritesCards(favsList);

  await favoritesCards.getFavs();

  view.renderPage(favoritesCards.cards);

  addToFavsListener();
  function addToFavsListener() {
    Array.from(document.getElementsByClassName("card__like")).forEach(
      (item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          const currentId = e.target.closest(".card").dataset.id;
          state.favourites.toggleFav(currentId);

          view.toggleFavouriteIcon(
            e.target.closest(".card__like"),
            state.favourites.isFav(currentId)
          );
        });
      }
    );
  }
}
