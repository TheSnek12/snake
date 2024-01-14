class Obeservable {
    constructor() {
        this.handlers = [];
    }
    subscribe(fn) {
        this.handlers.push(fn);
    }
    unsubscribe(fn) {
        this.handlers = this.handlers.filter(function(item) {
            if (item !== fn) {
                return item;
            }
        });
    }
    publish(obj, msg) {
        for (let fn of this.handlers) {
            fn(obj, msg);
        }
    }
}
class Colors extends Obeservable {
    constructor() {
        super();
        this.list = [];
        let possibleColorCount = 256 * 256 * 256;
        this.big = new Array(possibleColorCount);
        for (let i = 0; i < possibleColorCount; i++) {
            this.big[i] = i.toString(16);
        }

    }
    addColor(color, index) {
        this.list.push(color);
        this.big.splice()

        this.publish(this, "newColor");
    }
    removeColor(color) {
        this.list = this.list.filter(function(item) {
            if (item !== color) {
                return item;
            }
        });
        this.publish(this, "removeColor");
    }
    changeColor(oldColor, newColor) {
        oldColor.name = newColor.name;
        oldColor.rgb = newColor.rgb;
        this.publish(this, "changeColor");

    }
}
class Color {
    constructor(name, rgb) {
        this.name = name;
        this.rgb = rgb;
    }
}