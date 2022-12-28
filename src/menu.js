import "../src/assets/style.css";
import { createElem, lorem } from "./helpers";
import MenuImage from "./assets/menu.jpg"

export const Menu = (() => {

    const createMenu = () => {
        const article = createElem("div", "menu");

        const image = new Image()
        image.src = MenuImage

        article.appendChild(image)
        return article
    }

    return {createMenu}
})();