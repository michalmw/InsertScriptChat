let chatContainer = `
<div class="container-sur-chat" id="elementMoving">
<div class="first-bar-sur-chat">
  <button class="up-btn-sur-chat">up</button>
</div>
<div class="chat-area-sur-chat"></div>
<div class="input-bar-sur-chat">
    <input type="file" placeholder="Plik" style="right:1" class="file-manager input-sur-chat"></input>
    <textarea placeholder="wpisz tu i naciśnij enter" class="send-input-sur-chat textarea-sur-chat"></textarea>
</div>
</div>
`
const setFunctionsToChat = () => {
    this.typing = ''
    this.sendInput = document.querySelector('.send-input-sur-chat')
    this.fileManager = document.querySelector('.file-manager');

    console.log(this.sendInput)
    this.sendInput.addEventListener('keypress', (key) => {
        this.typing = this.sendInput.value;
        if (key.charCode == 13) {
            con.send(this.typing)
        }
    }, false)


    this.fileManager.addEventListener('change', (event) => {
        console.log(this.fileManager.value, 'even');
    }, false)
}

function addMessages(message) {
    const parent = document.querySelector('.chat-area-sur-chat');
    const span = document.createElement('span');
    span.innerHTML = message.message;
    span.classList = 'message-sur-chat';
    parent.appendChild(span);
    parent.scrollTop = parent.scrollHeight

}


