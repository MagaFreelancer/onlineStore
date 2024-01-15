import SingleItem from "./singleItemModel";
import * as view from "./singleItemView";

export default async function (state) {
  state.singleItem = new SingleItem(state.routeParams);
  await state.singleItem.getItem();

  view.render(state.singleItem.result);
}
