import './styles.css'

// function component() {
//   var element = document.createElement('div');

//  // Lodash, currently included via a script, is required for this line to work
//  // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }
document.body.innerHTML = `
<body>
    <div class="container">
        <div class="first-bar">
          <button class="up-btn">up</button>
        </div>
        <div class="chat-area"></div>
        <div class="input-bar">
            <input type="text" placeholder="wpisz tu i naciśnij enter" class="send-input">
        </div>
    </div>
    <div class="container2 animate-up">
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

  <div id="myModal" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <input id="messageColor" type="color"> Kolor wiadomosci</input>
    <input id="barColor"type="color"> Kolor pasków</input>
    <p>Some text in the Modal..</p> 
  </div>

</body>
`
var typing = ''
var sendInput = document.querySelector('.send-input')
sendInput.addEventListener('keypress', (key) => {
    typing = sendInput.value;
    if (key.charCode == 13) {
        addMessages()
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
// var messageColor = document.querySelector('#messageColor');

// const addListeners = (el) =>  el.addEventListener(type, fun, false);

// addEventListener( barColor, )


let style = getComputedStyle(document.body);
const setColorVariables = (variable, value) => { document.documentElement.style.setProperty(variable, value); }


// --bars-color: purple;
// --chat-area-bg-color: blue;
// --chat-area-message-bg-color: green;
// --chat-area-font-color: grey;

setColorVariables('--bars-colors', 'red');
setColorVariables('--chat-area-bg-color', 'green');
setColorVariables('--chat-area-message-bg-color', 'green');
setColorVariables('--chat-area-font-color', 'green');
// console.log(style.getPropertyValue('--bars-color'));
// console.log(style.getPropertyValue('--chat-area'));

