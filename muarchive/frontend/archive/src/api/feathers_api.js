import feathers from 'feathers/client'
import hooks from 'feathers-hooks'
import auth from 'feathers-authentication-client'
import socketio from 'feathers-socketio'
import io from 'socket.io-client'

const socket = io('http://localhost:3030', {transports: ['websocket']})

const feathersClient = feathers()
      .configure(hooks())
      .configure(socketio(socket))
      .configure(auth({storage: window.localstorage}))

export default feathersClient
