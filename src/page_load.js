/* CHANGE LINE 79 TO "home" when done */

import "../src/assets/style.css";

import { createElem } from "./helpers";
import { Home } from "./home";
import { Menu } from "./menu";
import { Order } from "./order";
import { About } from "./about";

import Git from "./assets/github.svg"



/* HEADER */
const Header = (() => {

    const loadHeader = () => {
        const header = createElem("div", "header")
        const title = _createBanner()
        const nav = _createNav()

        header.appendChild(title)
        header.appendChild(nav)

        return header
    }

    const _createBanner = () => {
        const title = createElem("h3", "head-title")

        title.innerHTML = "Giuseppina's"
        return title
    }

    const _createNav = () => {
        const tab = createElem("div", "tab")

        const text = ["Home", "Menu", "Order", "About"]

        text.forEach((i, index) => {
            const links = createElem("a", "navLinks")
            // ADDING ACTIVE HOME
            if (index === 0) links.className += " active"
            links.setAttribute("data-index", String(index))
            links.textContent = i
            tab.appendChild(links)
        })

        return tab

    }

    return { loadHeader };

})();


const Main = (() => {
    const loadMain = () => {
        const mainContainer = createElem("div", "main");
        return mainContainer
    }

    return { loadMain }
})();

const Footer = (() => {
    const loadFooter = () => {
        const date = new Date().getFullYear();
        const footer = createElem("footer", "foot");

        const username = createElem("p", "username")
        username.innerHTML = `<a style='text-decoration: none; color: white;' href='https://github.com/kalivm90'>Kalivm90 &#169; ${date}</a>`

        const image = new Image();
        image.setAttribute("id", "footer-img");
        image.src = Git;

        footer.appendChild(username)
        footer.appendChild(image)

        return footer;
    }

    return { loadFooter };
})();


/* MAIN FUNCTION THAT GETS CALLED INTO INDEX.JS */
export const PageLoad = (() => {
    // List of elements to create on pageload
    const elements = [Header.loadHeader(), Main.loadMain(), Footer.loadFooter()];
    elements.forEach(i => document.body.appendChild(i));

    // const contentContainer = document.querySelector(".contentContainer")
    const main = document.querySelector(".main")
    const nav = document.querySelectorAll(".navLinks")
    const git = document.querySelector("#footer-img")

    git.addEventListener("click", () => {
        const url = "https://github.com/kalivm90";
        window.open(url);
    })


    const listen = () => {
        /* CHANGE THIS TO HOME WHEN YOU ARE DONE WITH DEV */
        let currentPage = "home";
        _loadTab(currentPage)

        // for every tab clicked on it will load the module associated with its name
        nav.forEach(i => {
            i.addEventListener("click", () => {
                let current = document.getElementsByClassName("active")[0]
                current.classList.remove("active")

                if (currentPage != i.textContent.toLowerCase()) {
                    currentPage = i.textContent.toLowerCase()
                    _loadTab(currentPage)
                }

                // this will cause a error if same button is pressed > 2
                i.classList.add("active")
            })
        })

    }

    // switch statement for loading tabs, clears main container before loading page module
    const _loadTab = (currentPage) => {
        switch (currentPage) {
            case "home":
                _loadModule(Home.createHome())
                break;
            case "menu":
                _loadModule(Menu.createMenu())
                break;
            case "order":
                _loadModule(Order.createOrder())
                break;
            case "about":
                _loadModule(About.createAbout())
                break;
        }
    }

    const _loadModule = (module) => {
        main.innerHTML = ""
        main.appendChild(module)
    }


    return { listen }
})();
