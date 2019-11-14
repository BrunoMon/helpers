import {
    deepValue
} from "."

it("Propiedad", () => {
    expect(deepValue("Persona", "Direccion", "Calle")({
        Persona: {
            Direccion: {
                Calle: "San Martin"
            }
        }
    })).toBe("San Martin");
})

it("Propiedad en array", () => {
    expect(deepValue("Persona", "Direccion", 1, "Calle")({
        Persona: {
            Direccion: [{
                Calle: "San Martin"
            }, {
                Calle: "San Martin bis"
            }, {
                Calle: "San Martin triple"
            }]
        }
    })).toBe("San Martin bis");
})

it("Objeto", () => {
    expect(deepValue("Persona", "Direccion", 0)({
        Persona: {
            Direccion: [{
                Calle: "San Martin"
            }]
        }
    })).toEqual({
        Calle: "San Martin"
    });
})

it("Array", () => {
    expect(deepValue("Persona", "Direccion")({
        Persona: {
            Direccion: [{
                Calle: "San Martin"
            }, {
                Calle: "San Martin 2"
            }]
        }
    })).toEqual([{
        Calle: "San Martin"
    }, {
        Calle: "San Martin 2"
    }]);
})

it("Concatenado", () => {
    expect(deepValue("Calle")(deepValue("Persona", "Direccion", 0)({
        Persona: {
            Direccion: [{
                Calle: "San Martin"
            }]
        }
    }))).toBe("San Martin");
})

it("path erroneo", () => {
    expect(deepValue("Persona", "Direc", 0, "Calle")({
        Persona: {
            Direccion: [{
                Calle: "San Martin"
            }]
        }
    })).toBe(null);
})