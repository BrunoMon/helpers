export const addTapListener = (elements) => {
    elements.forEach(elm => {
        const tapHandler = (e) => {
            let fire = true
            if (e.type == "keydown") {
                fire = e.keyCode == 13 || e.keyCode == 32
            }
            if (fire) {
                e.preventDefault();
                e.stopPropagation();
                const event = new Event('tap');
                event.detail = e
                e.currentTarget.dispatchEvent(event);
            }
        }
        elm.addEventListener("click", tapHandler)
        elm.addEventListener("keydown", tapHandler)
        elm.addEventListener("touchend", tapHandler)
    })
}