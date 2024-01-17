import bidsCotroller from "../bids/bidsCotroller";
export default function (state) {
  document.querySelector("#app").innerHTML = "";
  bidsCotroller(state);
}
