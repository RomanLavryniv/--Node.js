const EventEmitter = require('events')

// const emitter = new EventEmitter()
//
// emitter.on( event = 'anything', listener = data => {
//     console.log('ON: anything', data)
// })
//
// emitter.emit( event = 'anything', args = {a: 1})
// emitter.emit( event = 'anything', args = {b: 2})
//
// setTimeout( handler: () => {
//     emitter.emit( event = 'anything', args = {c: 3})
// }, timeout: 1500)

class Dispatcher extends  EventEmitter {
    subscribe(eventName, cb) {
        console.log('[Subscribe...]')
        this.on(eventName, cb)
    }

    dispatch(eventName, data) {
        console.log('[Dispatching...]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe(eventName = 'aa', cb = data => {
    console.log('ON: aa', data)
})

dis.dispatch(eventName = 'aa', data = {aa: 22})