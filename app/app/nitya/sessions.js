const events = require('events');
const util = require('util');

function MyEmitter() {
    events.call(this);
}

util.inherits(MyEmitter, events);

MyEmitter.prototype.customEventWithGreeting = function(event) {
    this.emit(String(event));
    console.log('Aapka event chal gya hai Mr. Bhandari ji');
}

const customInstance = new MyEmitter();

customInstance.on('hello_world', () => {
    console.log('Hello world');
});

customInstance.customEventWithGreeting('hello_world');
