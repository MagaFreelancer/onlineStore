import SingleItem from "./singleItemModel";
import * as view from "./singleItemView";

export default async function (state) {
  state.singleItem = new SingleItem(state.routeParams);
  await state.singleItem.getItem();

  view.render(state.singleItem.result);

  document.querySelector(".button-order").addEventListener("click", () => {
    view.showModal();
  });
  document.querySelector(".modal__close").addEventListener("click", () => {
    view.hideModal();
  });
  document.querySelector(".modal-wrapper").addEventListener("click", (e) => {
    if (e.target.closest(".modal")) {
      return null;
    }
    view.hideModal();
  });

  document
    .querySelector(".modal__form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = view.getInput();
      await state.singleItem.submitForm(formData);
      const response = state.singleItem.response;
      if (response.message === "Bid Created") {
        console.log("Заявка успешно получена!");
        view.hideModal();
        view.clearInput();
      } else if (response.message === "Bid Not Created") {
        response.errors.forEach((item) => {
          console.log(item);
        });
      }
      console.log(formData);
    });
}
