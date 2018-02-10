

export function communication(address, gateId) {

    let nextMessage = () => { }
    let initMessages = () => { }

    let ws = { send: () => { } }
    function send(message) {
        ws.send(message)
        nextMessage({
            type: 'fromClient',
            message: message,
        })
    }
    fetch(`http://${address}/initCookie`, {
        credentials: 'include'
    }).then(x => x.text())
        .then(() => {
            ws = new WebSocket(`ws://${address}?gateId=${gateId}`)
            ws.onmessage = (message) => {
                console.log('raw message', message)
                const obj = JSON.parse(message.data)
                if (obj.type = 'init') {
                    initMessages(obj.messages)
                } else if (obj.type === 'fromServer') {
                    nextMessage(obj)
                } else {
                    throw new Error('unknown type')
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
        }
    }
}
