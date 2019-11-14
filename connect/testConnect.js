import {
    connect
} from "./index"

export class connectConsumer {
    constructor() {
        console.log('Mock SoundPlayer: constructor was called');
        const store = {
            fn: null,
            getSate: () => {},
            subscribe: (fn) => {
                this.fn = fn
            }
        }
        this.connect = new connect(store, "A", "B", "C")(HTMLElement);
    }
}