import "./assets/style.css"
import { createElem } from "./helpers"

class Forms {
    constructor() {
        this.items = []
    }

    append(container) {
        this.items.forEach(i => container.appendChild(i))
    }

}

class Item {
    constructor(type, placeholder=null, forms) {
        this.type = type;
        this.placeholder = placeholder
        this.forms = forms
        this.autocorrect = "off"

        this.item = createElem("input", "form")
        this.item.placeholder = this.placeholder

        this.check()

        return this.item
    }

    check() {
        if (this.forms.items.includes(this.item)) {
            return;
        }
        this.forms.items.push(this.item)
    }
}


export const Order = (() => {
    const createOrder = () => {
        const order = createElem("div", "order");
        const title = _title()
        const form  = _form()
        const button = createElem("button", "btn")

        button.setAttribute("id", "submit-btn")

        button.textContent = "Submit"

        order.appendChild(title)
        order.appendChild(form)
        order.appendChild(button)

        return order
    }

    const _title = () => {
        const container = createElem("div", "jumbo")
        const title = createElem("h1", "jumbo-title")
        title.textContent = "Sign Up!"

        const subtitle = createElem("h3", "jumbo-info")
        subtitle.setAttribute("id", "order-info")
        subtitle.textContent = "It's totally free!"
        
        container.appendChild(title)
        container.appendChild(subtitle)

        return container
    }

    const _form = () => {
        let forms = new Forms();

        const formContainer = createElem("div", "form-container");

        const firstName = new Item("text", "First Name", forms)
        const lastName = new Item("text", "Last Name", forms)
        const email = new Item("email", "Email", forms)
        const addressOne = new Item("text", "Address 1", forms)
        const addressTwo = new Item("text", "Address 2", forms)
        const city = new Item("text", "City", forms)
        const zip = new Item("text", "ZIP Code", forms)

        forms.append(formContainer)

        return formContainer
    }

    return { createOrder }
})();