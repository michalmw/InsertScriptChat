import './styles.css'

// function component() {
//   var element = document.createElement('div');

//  // Lodash, currently included via a script, is required for this line to work
//  // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }


let chatContainer = `
<div class="container" id="elementMoving">
<div class="first-bar">
  <button class="up-btn">up</button>
</div>
<div class="chat-area"></div>
<div class="input-bar">
    <input type="text" placeholder="wpisz tu i naciśnij enter" class="send-input">
</div>
</div>

`


let formContainer = 
`
    <div class="container" id="elementMoving">
      <div class="first-bar">
        <button class="up-btn">up</button>
      </div>
      <div class="chat-area">
        <p class="left-message-text">
          Wypełnij proszę poniższe pola, a my skontaktujemy się z Tobą tak szybko jak będzie to możliwe..
        </p>
        <input type="text" placeholder="nazwa" class="input-area__name">
        <input type="text" placeholder="adres" class="input-area__address">
        <input type="text" placeholder="wiadomość" class="input-area__message">
      </div> 
      <div class="input-bar">
        <input type="text" placeholder="wpisz tu i naciśnij enter" class="send-input">
      </div>
    </div>
  </div>
`

document.body.innerHTML = formContainer







// `
// <body>
//     <div class="container" id="elementMoving">
//         <div class="first-bar">
//           <button class="up-btn">up</button>
//         </div>
//         <div class="chat-area"></div>
//         <div class="input-bar">
//             <input type="text" placeholder="wpisz tu i naciśnij enter" class="send-input">
//         </div>
//     </div>
//     <div class="container2 animate-up">
//       <div class="first-bar">
//         <button class="up-btn">up</button>
//       </div>
//       <div class="chat-area">
//         <p class="left-message-text">
//           Wypełnij proszę poniższe pola, a my skontaktujemy się z Tobą tak szybko jak będzie to możliwe..
//         </p>
//         <input type="text" placeholder="nazwa" class="input-area__name">
//         <input type="text" placeholder="adres" class="input-area__address">
//         <input type="text" placeholder="wiadomość" class="input-area__message">
//       </div> 
//       <div class="input-bar">
//         <input type="text" placeholder="wpisz tu i naciśnij enter" class="send-input">
//       </div>
//     </div>
//   </div>

//   <div id="myModal" class="modal">
//   <!-- Modal content -->
//   <div class="modal-content">
//     <span class="close">&times;</span>
//     <input id="messageColor" type="color"> Kolor wiadomosci</input>
//     <input id="barColor"type="color"> Kolor pasków</input>
//     <p>Some text in the Modal..</p> 
//   </div>

// </body>
// `

var typing = ''
var sendInput = document.querySelector('.send-input')
sendInput.addEventListener('keypress', (key) => {
    typing = sendInput.value;
    if (key.charCode == 13) {
        addMessages()
        sendInput.value = '';
    }
}, false)

var chatArea = document.querySelector('.chat-area');

const addMessages = () => {
    let message = document.createElement('span');
    message.innerHTML = typing;
    console.log('push force')
    message.classList = 'message';
    chatArea.appendChild(message);
    chatArea.scrollTop = chatArea.scrollHeight

}




const upButton = document.querySelector('.up-btn')
upButton.addEventListener('click', () => {
    const container = document.querySelector('.container')
    if (container.classList.contains('animate-up')) {
        container.classList.remove('animate-up')
    } else {
        container.classList.add('animate-up')
    }
})




// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// var barColor = document.querySelector('#barsColor');
// var messageColor = document.qgit pulluerySelector('#messageColor');

// const addListeners = (el) =>  el.addEventListener(type, fun, false);


let style = getComputedStyle(document.body);
const setColorVariables = (variable, value) => { document.documentElement.style.setProperty(variable, value); }


// --bars-color: purple;
// --chat-area-bg-color: blue;
// --chat-area-message-bg-color: green;
// --chat-area-font-color: grey;

setColorVariables('--bars-colors', '4CAF50we');
setColorVariables('--chat-area-bg-color', 'white');
setColorVariables('--chat-area-message-bg-color', 'CDDC39');
setColorVariables('--chat-area-font-color', '8BC34A');


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

