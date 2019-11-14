import {
    addTapListener
} from "."

const boton = document.createElement("button")
addTapListener([boton])
boton.addEventListener("tap", (e) => {
    e.currentTarget.tapEjecutado = true
})
const clickEvent = new MouseEvent('click', {});
const keyEvent32 = new KeyboardEvent('keydown', {
    'keyCode': 32
});
const keyEvent13 = new KeyboardEvent('keydown', {
    'keyCode': 13
});
const keyEvent = new KeyboardEvent('keydown', {
    'keyCode': 47
});
const touchEvent = new TouchEvent('touchend', {});
it('on click', () => {
    expect((() => {
        boton.tapEjecutado = false
        boton.dispatchEvent(clickEvent)
        return boton.tapEjecutado
    })()).toBe(true)
});

it('on keydown Space', () => {
    expect((() => {
        boton.tapEjecutado = false
        boton.dispatchEvent(keyEvent32)
        return boton.tapEjecutado
    })()).toBe(true)
});
it('on keydown Enter', () => {
    expect((() => {
        boton.tapEjecutado = false
        boton.dispatchEvent(keyEvent13)
        return boton.tapEjecutado
    })()).toBe(true)
});
it('on keydown other', () => {
    expect((() => {
        boton.tapEjecutado = false
        boton.dispatchEvent(keyEvent)
        return boton.tapEjecutado
    })()).toBe(false)
});
it('on touch', () => {
    expect((() => {
        boton.tapEjecutado = false
        boton.dispatchEvent(touchEvent)
        return boton.tapEjecutado
    })()).toBe(true)
});