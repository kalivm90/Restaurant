import "../src/assets/style.css";

import Carbonara from "./assets/carb.jpg"
import Marsala from "./assets/marsala.jpg"
import Tort from "./assets/tort.jpg"
import Risotto from "./assets/risotto.jpg"

import { createElem, lorem } from "./helpers";

export const Home = (() => {
    const createHome = () => {
        const article = createElem("div", "home");
        const jumbo = _jumbo()
        const feat = _createCards()

        article.appendChild(jumbo)
        article.appendChild(feat)

        return article
    }

    const _jumbo = () => {
        const div = createElem("div", "jumbo")
        const h1 = createElem("h1", "jumbo-title")
        const info = createElem("p", "jumbo-info") 

        h1.innerHTML = "Featured Items"
        info.innerHTML = "We offer a wide variety of authentic Italian dishes for delivery right from our website! We have travelled all over Italy with our best chefs to craft a menu that is both delicious and true to the culture of Italians."

        div.appendChild(h1)
        div.appendChild(info)

        return div
    }

    const _createCards = () => {
        const myImages = [Carbonara, Marsala, Tort, Risotto]
        const myTitles = ["Cajun Chicken Carbonarra", "Chicken Marsala", "Sausage Tortellini", "Creamy Parmesan Risotto"]
        const container = createElem("div", "cards")

        for (let i = 0; i < myImages.length; i++) {
            const items = createElem("div", "items")
            const itemTitle = createElem("h1", "item-title")
            // this is an element as well
            const imgElem = new Image()
            const button = createElem("button", "btn")

            imgElem.src = myImages[i]
            itemTitle.textContent = myTitles[i]
            button.textContent = "Order"

            items.appendChild(imgElem)
            items.appendChild(itemTitle)
            items.appendChild(button)

            container.appendChild(items)

        }

        return container

    }

    return {createHome}

})();