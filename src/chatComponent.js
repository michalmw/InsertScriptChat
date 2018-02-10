export let chatContainer = `
<div class="container-sur-chat"  id="chatComponent">
<div class="first-bar-sur-chat">
  <button class="up-btn-sur-chat" id="chatToogle">up</button>
</div>
<div class="chat-area-sur-chat"></div>
<div class="input-bar-sur-chat">
    <input id="files" type="file" placeholder="Plik" style="right:1" class="file-manager input-sur-chat"></input>
    <textarea placeholder="wpisz tu i naciśnij enter" class="send-input-sur-chat textarea-sur-chat"></textarea>
</div>
</div>
`
export const setFunctionsToChat = (con) => {
    let typing = ''
    const sendInput = document.querySelector('.send-input-sur-chat')
    const fileManager = document.querySelector('.file-manager');

    sendInput.addEventListener('keypress', (key) => {
        typing = sendInput.value;
        if (key.charCode == 13) {
            con.send(typing)
        }
    }, false)
}

export function addMessages(message) {
    const parent = document.querySelector('.chat-area-sur-chat');
    const sendInput = document.querySelector('.send-input-sur-chat')
    console.log(message)
    if (message.type === 'image') {
        const img = document.createElement('img')
        img.src = message.url
        img.classList = "message-img"
        parent.appendChild(img)
        parent.scrollTop = parent.scrollHeight
    } else {
        const span = document.createElement('span');
        sendInput.value = ''
        span.innerHTML = message.message;
        span.classList = 'message-sur-chat';
        parent.appendChild(span);
        parent.scrollTop = parent.scrollHeight
    }
}

