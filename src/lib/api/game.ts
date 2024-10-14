import {server} from "$lib/env"

export type ActionHandler = (data: any) => void
export type EventHandlerID = (e: MessageEvent<string>) => void

export type Server = {
  conn?:      WebSocket,
  connect:    () => Promise<void>,
  sendAction: (actionName: string, data?: any) => void,
  on:         (actionName: string, handler: ActionHandler) => EventHandlerID,
}

export type Message = {
  action: string,
  data?: any[],
}

const api: Server = {
  conn: undefined,
  async connect() {
    const protocol = 'ws' + (server.ssh ? 's' : '')

    return new Promise((resolve, reject) => {
      if (this.conn) {
        resolve()
      }

      this.conn = new WebSocket(protocol + '://' + server.host + ':' + server.port)

      this.conn.onopen = () => resolve()
      this.conn.close = reject

      this.conn.onmessage = function (e) {
        console.log(e.data)
      }
    })
  },
  sendAction(actionName: string, data: any[] = []) {
    if (!this.conn) {
      console.error('Failed to send message. Connection closed')
      return
    }

    const msg: Message = {
      action: actionName,
      data
    }

    this.conn.send(JSON.stringify(msg))
  },
  on(actionName, handler): EventHandlerID {
    const cb: EventHandlerID = function (e) {
      const msg: Message = JSON.parse(e.data)

      if (msg.action === actionName) {
        handler(msg.data)
      }
    }

    this.conn?.addEventListener('message', cb)

    return cb
  }
}

export default api