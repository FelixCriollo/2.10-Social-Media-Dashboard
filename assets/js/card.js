// capturing containers
const cardContainer = document.querySelector('.card-container')
const overviewContainer = document.querySelector('.overview-container')

let data = []
fetch("data.json")
                .then(response => response.json())
                .then(c => data = c);

const component = (elemt, elemClass) => {
    let component = document.createElement(elemt)
    component.className = elemClass
    return component
}

const specificComp = (elemt, elemClass, value) => {
    let specific = component(elemt, elemClass)
    specific.innerHTML = value
    return specific
}

const imgComponent = (cName, imgTile) => {
    let img = document.createElement("img")
    img.src = `images/icon-${imgTile}.svg`
    img.className = cName
    img.title = imgTile
    img.alt = ''
    return img
}

const growCheck = (decrease, increase) => increase == 0 ? decrease:increase; 
const growCheckClass = (increase) => increase == 0 ? "decrease":"increase"; 
const growCheckIcon = (increase) => increase === 0 ? "down":"up"; 

function createCard(item) {
    // individual card container
    let card = component("div", `card card--${item.social}`)

    // card top
    let cardTop = component("div", `card-top`)
    cardTop.appendChild(imgComponent("card__social", item.social))
    cardTop.appendChild(specificComp("p", "card__acount", item.acount))
    
    // Card middle
    let cardMid = component("div", `card-mid`)
    cardMid.appendChild(specificComp("p", `card__total`, item.followers))
    cardMid.appendChild(specificComp("p", `card__followers`, "followers"))
    
    // Card bottom
    let cardBottom = component("div", `card-bottom`)
    cardBottom.appendChild(imgComponent("card__increace-icon", growCheckIcon(item.grow.increase)))
    cardBottom.appendChild(specificComp("p", `card__${growCheckClass(item.grow.increase)}`, growCheck(item.grow.decrease, item.grow.increase) + " Today"))

    card.appendChild(cardTop)
    card.appendChild(cardMid)
    card.appendChild(cardBottom)

    cardContainer.appendChild(card)
}

function createOverview(item) {
    // individual overview container
    let overview1 = component("div", "overview")
    let overview2 = component("div", "overview")

    // ////////////////////////////////////////////////////////////////////////////////////////
    // overview top
    let overviewTop = component("div", "overview-top")
    overviewTop.appendChild(specificComp("h4", "overview__title", item.overview1.title))
    overviewTop.appendChild(imgComponent("overview__social", item.social))

    let overviewBottom = component("div", "overview-bottom")
    overviewBottom.appendChild(specificComp("p", "overview__num", item.overview1.number))

    let overviewGrow = component("div", "overview-grow")
    overviewGrow.appendChild(imgComponent("overview__icon", growCheckIcon(item.overview1.grow.increase)))
    overviewGrow.appendChild(specificComp("p", `overview__${growCheckClass(item.overview1.grow.increase)}`, growCheck(item.overview1.grow.decrease, item.overview1.grow.increase) + "%"))

    overview1.appendChild(overviewTop)
    overviewBottom.appendChild(overviewGrow)
    overview1.appendChild(overviewBottom)

    // ////////////////////////////////////////////////////////////////////////////////////////
    // overview top
    let overviewTop2 = component("div", "overview-top")
    overviewTop2.appendChild(specificComp("h4", "overview__title", item.overview2.title))
    overviewTop2.appendChild(imgComponent("overview__social", item.social))

    let overviewBottom2 = component("div", "overview-bottom")
    overviewBottom2.appendChild(specificComp("p", "overview__num", item.overview2.number))

    let overviewGrow2 = component("div", "overview-grow")
    overviewGrow2.appendChild(imgComponent("overview__icon", growCheckIcon(item.overview2.grow.increase)))
    overviewGrow2.appendChild(specificComp("p", `overview__${growCheckClass(item.overview2.grow.increase)}`, growCheck(item.overview2.grow.decrease, item.overview2.grow.increase) + "%"))

    overview2.appendChild(overviewTop2)
    overviewBottom2.appendChild(overviewGrow2)
    overview2.appendChild(overviewBottom2)

    
    overviewContainer.appendChild(overview1)
    overviewContainer.appendChild(overview2)
}

setTimeout(() => {
    createCard(data[0])
    createCard(data[2])
    createCard(data[1])
    createCard(data[3])
    data.forEach(c => createOverview(c));
}, 500);