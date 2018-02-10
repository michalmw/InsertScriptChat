

export function communication(address, gateId) {

    let nextMessage = () => { }
    let initMessages = () => { }
    let changeComponent = () => { }

    let ws = { send: () => { } }
    function send(message) {
        ws.send(message)
        nextMessage({
            type: 'fromClient',
            message: message,
        })
    }
    fetch(`https://${address}/initCookie`, {
        credentials: 'include'
    }).then(x => x.text())
        .then(() => {
            ws = new WebSocket(`ws://${address}?gateId=${gateId}`)
            console.log(ws)
            ws.onmessage = (message) => {
                console.log(message)
                const obj = JSON.parse(message.data)
                if (obj.type === 'init') {
                    initMessages(obj.messages)
                } else if (obj.type === 'fromUser') {
                    nextMessage(obj)
                } else if (obj.online !== undefined) {
                    changeComponent(obj.online);
                    console.log(obj)
                }
            }
        })

    return {
        send: send,
        set nextMessage(next) {
            nextMessage = next
        },
        set initMessages(init) {
            initMessages = init
        },

        set changeComponent(change) {
            changeComponent = change
        }
    }
}





