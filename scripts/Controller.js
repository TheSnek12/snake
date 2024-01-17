model = new Colors();
view = new ModelViewer(model);
save = new StorageSaver("colors", model);


function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}
function createNewColor() {
        let rand = Math.round(Math.random() * 255);
        let rand2 = Math.round(Math.random() * 255);
        let rand3 = Math.round(Math.random() * 255);

        let newColor = "rgb(" + rand + ", " + rand2 + ", " + rand3 + ")";

        return newColor;


}

function checkColor(newColor) {
        return !model.hashList[newColor];
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function findRgbValues(str) {
    let iter = str.matchAll(/[0-9]{1,3}/g);
    let vals = [];
    let done = false;
    while (!done) {
        let val = iter.next();
        if (val.value)
            vals.push(val.value[0]);
        done = val.done;
    }
    return { r: parseInt(vals[0]), g: parseInt(vals[1]), b: parseInt(vals[2]) };
}