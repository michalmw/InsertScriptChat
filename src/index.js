import './styles.css'
import { communication } from "./socket"

let checkIsUserInChat = false;
const con = communication('zniesmaczonyzbyszek.herokuapp.com', '5a7df73dca482d00046486d9')
con.initMessages = initMessages => {
    for (const m of initMessages) {
        addMessages(m)
    }
}
con.nextMessage = message => {
    addMessages(message)
}

con.changeComponent = online => {
    if (online) {
        if (chat.style.display == 'none') {
            form.style.display = 'none';
            chat.style.display = 'block';
        }
    } else {
        if (form.style.display == 'none') {
            form.style.display = 'block';
            chat.style.display = 'none';
        }
    }

}

setTimeout(() => {
    form.style.display = 'block';
}, 500)

import { addMessages, setFunctionsToChat, chatContainer } from './chatComponent'
import { setFunctionsToForm, formContainer, setValidate } from './formComponent'

var chat = document.createElement('div');
chat.innerHTML = chatContainer;
chat.style.display = 'none'
var form = document.createElement('div');
form.style.display = 'none'
form.innerHTML = formContainer;
document.body.appendChild(chat)
document.body.appendChild(form)

setFunctionsToForm()
setFunctionsToChat(con)

const formButt = form.querySelector('#formToogle')
const chatButt = chat.querySelector('#chatToogle')

formButt.addEventListener('click', () => {
    var formContainer = form.querySelector('.container-sur-chat')
    if (formContainer.classList.contains('animate-up-sur-chat')) {
        formContainer.classList.remove('animate-up-sur-chat')
    } else {
        formContainer.classList.add('animate-up-sur-chat')
    }
})

chatButt.addEventListener('click', () => {
    var chatContainer = chat.querySelector('.container-sur-chat')
    if (chatContainer.classList.contains('animate-up-sur-chat')) {
        chatContainer.classList.remove('animate-up-sur-chat')
    } else {
        chatContainer.classList.add('animate-up-sur-chat')
    }
})

let style = getComputedStyle(document.body);
const setColorVariables = (variable, value) => { document.documentElement.style.setProperty(variable, value); }

setColorVariables('--bars-colors-sur--chat', '#4CAF50we');
setColorVariables('--chat-area-bg-color-sur--chat', 'black');
setColorVariables('--chat-area-message-bg-color-sur--chat', 'red');
setColorVariables('--chat-area-font-color-sur--chat', '#8BC34A');
setColorVariables('--font-size-message-sur-chat', '20px');


var speed = 10; // the box will move by 10 pixels on every step
var direction = 1; // 1 = move right; -1 = move left
var mouseX, mouseY = 0;
const movingElement = document.querySelector('#elementMoving');

// addEventListener(movingElement, 'onmousedown', fu)
// document.addEventListener('mousemove', function (event) {
//     var cX = event.clientX;
//     var sX = event.screenX;
//     var cY = event.clientY;
//     var sY = event.screenY;
//     mouseX = cX;
//     mouseY = cY;
//     var coords1 = "client - X: " + cX + ", Y coords: " + c
//     var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
//     console.log(mouseX, mouseY)

//     console.log(event);

//     var boxLeftPos = movingElement.offsetLeft,
//         boxRightPos = boxLeftPos + movingElement.offsetWidth;
//     // When right side of the box goes too far - change direction:
//     if (boxRightPos > document.body.offsetWidth) {
//         direction = -1;
//     }
//     // When left side of the box goes too far - change direction:
//     if (boxLeftPos < 0) {
//         direction = 1;
//     }
//     // Recalculate position:
//     movingElement.style.left = mouseX;
//     movingElement.style.topwebpack = mouseY;
// }, false)


// movingElement.addEventListener('mousemove', function (event) {

// }, false)


// console.log(style.getPropertyValue('--bars-color'));
// console.log(style.getPropertyValue('--chat-area'));