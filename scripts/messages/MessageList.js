import { useMessages } from "./MessageProvider.js"
import { Message } from "./Message.js"

const contentTarget = document.querySelector(".messages")

/*
    COMPONENT FUNCTION
*/
export const MessageList = () => {
    const allMessages = useMessages()
    render(allMessages)
}

/*
    RENDERING FUNCTION
*/
const render = messageArray => {
    const convertedMessages = messageArray.map(messageObject => {
        const messageHTML = Message(messageObject)
        return messageHTML
    })
    const combinedSections = convertedMessages.join("")
    contentTarget.innerHTML = combinedSections 
}

document.querySelector(".themes").addEventListener("click", e => {
    const idOfClickedElement = e.target.id

    if (idOfClickedElement.startsWith("themeButton--")) {
        const [prefix, color] = idOfClickedElement.split("--")
        contentTarget.classList = []
        contentTarget.classList.add(color)
    }
})

//the event handler for the theme buttons is tied to a contentTarget area assigned to .messages; we have 'color', coming from a theme button, being added to the classList of the div where "mesages" go
//this means that, if the themeButton--whateverColor class gets renamed, the startsWith condition in that block above won't be true, and thus won't assign a color