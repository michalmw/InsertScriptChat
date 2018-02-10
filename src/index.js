import './styles.css'
import { communication } from "./socket"
import './chatComponent'
import './formComponent'

const con = communication('zniesmaczonyzbyszek.herokuapp.com', '5a7df73dca482d00046486d9')
con.initMessages = initMessages => {
    for(const m of initMessages){
        addMessages(m)    
    }
    console.log('init', initMessages)
}
con.nextMessage = message => {
    addMessages(message)
    console.log('message', message)
}

var content = document.createElement('div');
content.innerHTML = chatContainer;
document.body.appendChild(content);

console.log('a')
setFunctionsToChat();

const upButton = document.querySelector('.up-btn-sur-chat')
upButton.addEventListener('click', () => {
    const container = document.querySelector('.container-sur-chat')
    if (container.classList.contains('animate-up-sur-chat')) {
        container.classList.remove('animate-up-sur-chat')
    } else {
        container.classList.add('animate-up-sur-chat')
    }
})

let style = getComputedStyle(document.body);
const setColorVariables = (variable, value) => { document.documentElement.style.setProperty(variable, value); }

setColorVariables('--bars-colors-sur--chat', '4CAF50we');
setColorVariables('--chat-area-bg-color-sur--chat', 'white');
setColorVariables('--chat-area-message-bg-color-sur--chat', 'CDDC39');
setColorVariables('--chat-area-font-color-sur--chat', '8BC34A');


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
//     var coords1 = "client - X: " + cX + ", Y coords: " + cY;
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
