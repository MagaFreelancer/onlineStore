import Filter from "./filterModel";
import * as view from "./filterView";
export default async function (state) {
  if (!state.filter) {
    state.filter = new Filter();
  }
  await state.filter.getParams();
  view.render(state.filter.params);

  await state.filter.getResults();
  view.changeButtonText(state.filter.result.length);

  const form = document.querySelector("#filter-form");

  form.addEventListener("change", async (e) => {
    e.preventDefault();
    state.filter.query = view.getInput();
    await state.filter.getResults();
    state.results = state.filter.result;
    view.changeButtonText(state.filter.result.length);
  });

  form.addEventListener("reset", async () => {
    state.filter.query = "";
    await state.filter.getResults();
    view.changeButtonText(state.filter.result.length);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    state.emitter.emit('event:render-listing', {})
  });
}

//собираем данные с формы -- следующая часть
