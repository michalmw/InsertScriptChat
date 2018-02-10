

export function communication(address, gateId) {

    let nextMessage = () => { }
    let initMessages = () => { }

    ws.onmessage = (message) => {
        const obj = JSON.parse(message)
        if (obj.type = 'init') {
            initMessages(obj.messages)
        } else if (obj.type === 'fromUser') {
            nextMessage(obj)
        } else {
            throw new Error('unknown type')
        }
    }

    function send(message) {
        ws.send(message)
        nextMessage({
            type: 'fromClient',
            message: message,
        })
    }

    return fetch(`http://${address}/initCookie`, {
        credentials: 'include'
    }).then(x => x.text())
        .then(() => {
            const ws = new WebSocket(`ws://${address}?gateId=${gateId}`)
            ws.onmessage = (message) => {
                const obj = JSON.parse(message)
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
