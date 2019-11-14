import {
    connect
} from "./index"
const store = {
    fn: null,
    getState: () => {},
    subscribe: (fn) => {
        this.fn = fn
    }
}

class connectConsumer extends connect(store, "A", "B")(Object) {
    constructor() {
        this.connectedElement = new connectTest()
        this.state = ""
    }
    testConnectedCallback() {
        this.connectedElement.connectedCallback()
        this.state = this.connectedElement.getCurrent()
    }
}

jest.mock("./index.js");

beforeEach(() => {
    connectTest.mockClear();
});

it('Test de constructor', () => {
    const cc = new connectConsumer();
    expect(connectTest).toHaveBeenCalledTimes(1);
});

it('Test testConnectedCallback', () => {
    expect(connectTest).not.toHaveBeenCalled();
    const cc = new connectConsumer();
    expect(connectTest).toHaveBeenCalledTimes(1);
    cc.testConnectedCallback()
    const mockInstance = connectTest.mock.instances[0];

    const mockChange = mockInstance.connectedCallback;
    const mockGetCurrent = mockInstance.getCurrent;

    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockGetCurrent).toHaveBeenCalledTimes(1);

});