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
      <div class="chat-area"></div>
      <div class="input-bar">
          <input type="text" placeholder="wpisz tu i naciśnij enter" class="send-input">
      </div>
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
 
const addMessages =  () => {
    let message = document.createElement('span');
    message.innerHTML = typing; 
    console.log('push force')
    message.classList = 'message';
    chatArea.appendChild(message);
    chatArea.scrollTop = chatArea.scrollHeight
 }

const upButton = document.querySelector('.up-btn')
upButton.addEventListener('click', ()=> {
  const container = document.querySelector('.container')
  if (container.classList.contains('animate-up')) {
    container.classList.remove('animate-up')
  } else {
    container.classList.add('animate-up')
  }
})




