
let formContainer =
`
<div class="container-sur-chat" id="elementMoving">
  <div class="first-bar-sur-chat">
    <button class="">up</button>
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
