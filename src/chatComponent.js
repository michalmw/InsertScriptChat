export let chatContainer = `
<div class="container-sur-chat"  id="chatComponent">
<div class="first-bar-sur-chat">
  <button class="up-btn-sur-chat" id="chatToogle">up</button>
</div>
<div class="chat-area-sur-chat"></div>
<div class="input-bar-sur-chat">
    <div class="spinner"></div>
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

    fileManager.addEventListener('change', (event) => {
        console.log(fileManager.value, 'even');
    }, false)
}

export function addMessages(message) {
    const parent = document.querySelector('.chat-area-sur-chat');
    const sendInput = document.querySelector('.send-input-sur-chat')
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
setTimeout(() => {
    addMessages({
        type: 'image',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png',
    })
}, 100);


