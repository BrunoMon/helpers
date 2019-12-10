import {
    deepValue
} from "../deepValue"

export const connect = (store, ...paths) => (baseElement) => class extends baseElement {
    constructor() {
        super();
        this.__currentStates = []
        this.__deepValues = []
    }
    connectedCallback() {
        for (let i = 0; i < paths.length; i++) {
            const path = paths[i].split(".")
            this.__currentStates.push(null)
            let deepVal = path.length > 0 ? deepValue(...path) : null;
            this.__deepValues.push(deepVal)
            this.__storeUnsubscribe = store.subscribe(() => this.__stateChanged(i, store.getState()));
            this.__stateChanged(i, store.getState());
        }
        if (super.connectedCallback) {
            super.connectedCallback();
        }
    }
    getCurrent() {
        return [...this.__currentStates]
    }
    disconnectedCallback() {
        this.__storeUnsubscribe();
        if (super.disconnectedCallback) {
            super.disconnectedCallback();
        }
    }

    __stateChanged(i, state) {
        if (this.stateChanged) {
            let change = true
            if (this.__deepValues[i]) {
                let previousState = this.__currentStates[i]
                this.__currentStates[i] = this.__deepValues[i](state)
                change = previousState != this.__currentStates[i]
            }
            if (change) {
                this.stateChanged(state, paths[i])
            }
        }
    }
};