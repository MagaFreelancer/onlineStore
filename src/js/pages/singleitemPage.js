import singleItemController from "../singleItem/singleItemController"
export default function (state) {
   
    document.querySelector('#app').innerHTML = "";
    singleItemController(state)
}