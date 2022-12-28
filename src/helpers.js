export const createElem = (element, className) => {
    const elem = document.createElement(element)
    elem.classList.add(className)
    return elem
}

export const lorem = (() => {
    const makeLorem = (qty) => {
        const contain = createElem("div", "loremContainer")
        for (let i = 0; i < qty; i++) {
            const p = createElem("p", "lorem");
            p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempore eius cumque consectetur autem quas repellendus placeat cum quaerat, voluptate fugiat, illo ad in asperiores aspernatur corrupti enim earum officia!"
            contain.appendChild(p)
        }
        return contain
    }

    return {makeLorem}
})();