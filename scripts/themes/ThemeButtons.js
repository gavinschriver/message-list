
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".themes")

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id.startsWith("btnTheme--")) {

        const [prefix, chosenColor] = clickEvent.target.id.split("--")

        const colorChosenEvent = new CustomEvent("colorChosen", {
            detail: {
                color: chosenColor
            }
        })

        eventHub.dispatchEvent(colorChosenEvent)
    }
})

export const ThemeButtons = () => {
    contentTarget.innerHTML = `
        <button class="btnTheme" id="btnTheme--red">Red</button>
        <button class="btnTheme" id="btnTheme--purple">Purple</button>
        <button class="btnTheme" id="btnTheme--blue">Blue</button>
        <button class="btnTheme" id="btnTheme--green">Green</button>
    `
}
