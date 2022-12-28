import "./assets/style.css"
import { createElem, lorem } from "./helpers"
import Public from "./assets/public.jpg"

export const About = (() => {

    const createAbout = () => {
        const about = createElem("div", "about");

        about.appendChild(_title())
        about.appendChild(_infoSection())

        return about
    }

    const _title = () => {
        const title = createElem("h1", "jumbo-title")
        title.setAttribute("id", "about-title")
        title.textContent = "About Us"
        return title
    }

    const _infoSection = () => {
        const infoContainer = createElem("div", "about-info")
        const image = _image();

        const contentContainer = createElem("div", "content-container")
        const infoTitle = createElem("h2", "info-title")
        const info = createElem("p", "info")
        const contact = createElem("button", "btn")
        contact.setAttribute("id", "contact")

        infoTitle.textContent = "What we do?"
        // info.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae qui, nostrum magnam libero culpa blanditiis corporis perspiciatis earum porro dolorum quo molestias! Laborum eum quo, eaque pariatur maxime incidunt tenetur!"
        info.textContent = "Since 1988 we have aspired to be the best and most authentic Italian restraunt on the west coast, we offer our employees benifits that include the best healthcare, 401k, pension, and leading industry wages. It is our philosophy that if we take care of our employees they will take care of you. We have some of the most fresh and delicious meals in the LA area and we pride ourselves on quality. Contact us for any inquires."
        contact.textContent = "Contact"

        contentContainer.appendChild(infoTitle)
        contentContainer.appendChild(info)
        contentContainer.appendChild(contact)

        infoContainer.appendChild(image)
        infoContainer.appendChild(contentContainer)

        return infoContainer
    }

    const _image = () => {
        const myImage = new Image();
        myImage.src = Public;

        return myImage;
    }

    return {createAbout}
})();