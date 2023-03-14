import {setSlider} from "./app_js/slider.js";
import {setBuying} from "./app_js/buying-item.js"

// slider event
const eventSlider = new setSlider();
eventSlider.changeImage();
const eventBuying = new setBuying();
eventBuying.changeColorItem();
let newCards = eventBuying.addCart();
console.log(newCards);