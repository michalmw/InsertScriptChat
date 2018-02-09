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
        <div class="first-bar"></div>
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
        console.log('send ing', typing)
    }
}, false)
var chatArea = document.querySelector('.chat-area');
 console.log(chatArea)

const addMessages =  () => {
    let message = document.createElement('span');
    console.log(message)
    message.innerHTML = typing; 
    message.classList = 'message';
    chatArea.appendChild(message);
 }




