import homePage from "./pages/homePage";
import singleItem from "./pages/singleItemPage";
import favoritesPage from "./pages/favoritesPage";
import bidsPage from "./pages/bidsPage";
import errorPage from "./pages/errorPage";

const routes = [
  { path: "/", component: homePage },
  { path: "item", component: singleItem },
  { path: "favorites", component: favoritesPage },
  { path: "bids", component: bidsPage },
  
];

function findConponentPath(path, routes) {
  return routes.find(function (route) {
    return route.path === path;
  });
}

function router() {
  const pathArray = location.hash.split("/");

  let currentPath = pathArray[0] === "" ? "/" : pathArray[1];
  currentPath = currentPath === "" ? "/" : currentPath;

  const { component = errorPage } =
    findConponentPath(currentPath, routes) || {};
  console.log(currentPath);
  component();
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
