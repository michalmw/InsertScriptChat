export let formContainer =
    `
<div class="container-sur-chat" id="formComponent">
  <div class="first-bar-sur-chat">
    <button class="up-btn-sur-chat" id="formToogle">up</button>
  </div>
  <div class="chat-area-sur-chat">
    <p class="left-message-text-sur-chat">
      Wypełnij proszę poniższe pola, a my skontaktujemy się z Tobą tak szybko jak będzie to możliwe..
    </p>
    <input type="text" placeholder="nazwa" class="input-area__name input-sur-chat">
    <small id="input-validator-name" style="color: red"> To pole jest wymagane i  3 znaki  </small>
    <input type="text" placeholder="adres" class="input-area__address input-sur-chat">
    <small id="input-validator-address" style="color: red"> Proszę podać poprawny email </small>
    <input type="text" placeholder="wiadomość" class="input-area__message-sur-chat input-sur-chat">
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
export const setValidate = (element, validatioFun, smallVallidation) => {
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

export const setFunctionsToForm = () => {
    const nameVal = document.querySelector('#input-validator-name');
    const addressVal = document.querySelector('#input-validator-address');
    const messageVal = document.querySelector('#input-validator-message');

    nameVal.style.display = 'none';
    addressVal.style.display = 'none';
    messageVal.style.display = 'none';

    const chatArea = document.querySelector('.chat-area-sur-chat');
    const name = document.querySelector('.input-area__name');
    const address = document.querySelector('.input-area__address');
    const message = document.querySelector('.input-area__message-sur-chat');

    let firstVal = false;
    let nextVal = false;
    let thirdVal = false;

    const sendLoginInformation = document.querySelector('.send-login-information-sur-chat');

    setValidate(name, (element) => {
        if (element.value !== undefined && element.value.length > 3) {
            firstVal = true;
            return true;
        }
        firstVal = false;
        return false;
    }, nameVal);

    setValidate(address, (element) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(element.value).toLowerCase()));
        if (re.test(String(element.value).toLowerCase())) {
            nextVal = true;
            return true;
        } else {
            nextVal = false;
            return false;
        }
    }, addressVal);

    setValidate(message, (element) => {
        if (element.value !== undefined && element.value.length > 3) {
            thirdVal = true;
            return true;
        } else {
            thirdVal = false;
        }
        return false;
    }, messageVal);

    sendLoginInformation.addEventListener('click', () => {
        console.log(name.value, address.value, message.value)
        const obj = {
            id: '5a7df73dca482d00046486d9',
            name: name.value,
            email: address.value,
            text: message.value
        }
        if (firstVal && nextVal && thirdVal) {
            fetch("http://zniesmaczonyzbyszek.herokuapp.com/api/user/email",
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                }).then(message => {
                    console.log(message);
                })
            console.log('Can Send')
        } else {
            console.log('uzupelnij poprawnie')
        }
    }, false)

}
