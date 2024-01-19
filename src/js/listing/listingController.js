import * as view from "./listingView";
export default function (state) {
  view.render();

  state.results.forEach((item) => {
    view.renderCard(item, state.favourites.isFav(item.id));
  });
  state.emitter.subscribe("event:render-listing", () => {
    view.clearListingContainer();
    state.results.forEach((item) => {
      view.renderCard(item, state.favourites.isFav(item.id));
    });
    addToFavsListener();
  });
  addToFavsListener();
  function addToFavsListener() {
    Array.from(document.getElementsByClassName("card__like")).forEach(
      (item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("click fav");
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
