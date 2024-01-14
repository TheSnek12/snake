class Observable {
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
class Colors extends Observable {
    constructor() {
        super();
        this.list = [];
        this.hashList = {};

    }
    addColor(color) {
        this.list.push(color);
        this.hashList[color.rgb] = true;

        this.publish(this, "newColor");
    }
    removeColor(color) {
        this.list = this.list.filter(function(item) {
            if (item !== color) {
                return item;
            }
        });
        this.hashList[color.rgb] = true;
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