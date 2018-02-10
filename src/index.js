import './styles.css'

// function component() {
//   var element = document.createElement('div');

//  // Lodash, currently included via a script, is required for this line to work
//  // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

let chatContainer = `
<div class="container-sur-chat" id="elementMoving">
<div class="first-bar-sur-chat">
  <button class="up-btn-sur-chat">up</button>
</div>
<div class="chat-area-sur-chat"></div>
<div class="input-bar-sur-chat">
    <input type="file" placeholder="Plik" style="right:1" class="file-manager"></input>
    <input type="text" placeholder="wpisz tu i naciśnij enter" class="send-input">
</div>
</div>

`

let formContainer =
    `
    <div class="container-sur-chat" id="elementMoving">
      <div class="first-bar-sur-chat">
        <button class="">up</button>
      </div>
      <div class="chat-area-sur-chat">
        <p class="left-message-text">
          Wypełnij proszę poniższe pola, a my skontaktujemy się z Tobą tak szybko jak będzie to możliwe..
        </p>
        <input type="text" placeholder="nazwa" class="input-area__name">
        <small id="input-validator-name" style="color: red"> To pole jest wymagane i  3 znaki  </small>
        <input type="text" placeholder="adres" class="input-area__address">
        <small id="input-validator-address" style="color: red"> Proszę podać poprawny email </small>
        <input type="text" placeholder="wiadomość" class="input-area__message-sur-chat">
        <small id="input-validator-message" style="color: red"> proszę podać wiadomosć </small>
        <div style="text-align: center; display: block;">
        <button placeholder="Wyślij" class="send-login-information-sur-chat">Wyślij</button>
        </div>
      </div> 
      <div class="input-bar-sur-chat">
      </div>
    </div>
  </div>
`
document.body.innerHTML = chatContainer


console.log('a')

const setComponent = () => { }

const setValidate = (element, validatioFun, smallVallidation) => {
    element.addEventListener('input', (event) => {
        if (validatioFun(element)) {
            smallVallidation.style.display = 'none';
        } else {
            smallVallidation.style.display = 'block';
        }
    }, false)
    element.addEventListener('focusin', (event) => {
        smallVallidation.style.display = 'block';
    }, false)
}

const setFunctionsToForm = () => {
    this.nameVal = document.querySelector('#input-validator-name');
    this.addressVal = document.querySelector('#input-validator-address');
    this.messageVal = document.querySelector('#input-validator-message');

    this.nameVal.style.display = 'none';
    this.addressVal.style.display = 'none';
    this.messageVal.style.display = 'none';

    this.chatArea = document.querySelector('.chat-area-sur-chat');
    this.name = document.querySelector('.input-area__name');
    this.address = document.querySelector('.input-area__address');
    this.message = document.querySelector('.input-area__message-sur-chat');

    this.firstVal = false;
    this.nextVal = false;
    this.thirdVal = false;
    
    this.sendLoginInformation = document.querySelector('.send-login-information-sur-chat');

    setValidate(this.name, (element) => {
        if (element.value !== undefined && element.value.length > 3) {
            this.firstVal = true;
            return true;
        }
        this.firstVal = false;
        return false;
    }, this.nameVal);

    setValidate(this.address, (element) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(element.value).toLowerCase())) {
            return true;
            this.nextVal = true;
        } else {
            this.nextVal = false;
            return false;
        }
    }, this.addressVal);

    setValidate(this.message, (element) => {
        if (element.value !== undefined && element.value.length > 3) {
            this.thirdVal = true;
            return true;
        } else {
            this.thirdVal = false;
        }
        return false;
    }, this.messageVal);

    this.sendLoginInformation.addEventListener('click', () => {
        console.log(this.firstVal, this.nextVal, this.thirdVal)
        if (this.firstVal && this.nextVal && this.thirdVal) {
            console.log('Can Send')
        } else {
            console.log('uzupelnij poprawnie')
        }
    }, false)

}

// setFunctionsToForm();

const setFunctionsToChat = () => {
    this.typing = ''
    this.sendInput = document.querySelector('.send-input')
    this.fileManager = document.querySelector('.file-manager');
    
    console.log(this.sendInput)
    this.sendInput.addEventListener('keypress', (key) => {
        this.typing = this.sendInput.value;
        if (key.charCode == 13) {
            addMessages()
            this.sendInput.value = '';
        }
    }, false)


    this.fileManager.addEventListener('change', (event) => {
        console.log(this.fileManager.value, 'even');
    }, false)



    this.chatArea = document.querySelector('.chat-area-sur-chat');

    const addMessages = () => {
        let message = document.createElement('span');
        message.innerHTML = this.typing;
        message.classList = 'message-sur-chat';
        this.chatArea.appendChild(message);
        this.chatArea.scrollTop = this.chatArea.scrollHeight

    }
}

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

