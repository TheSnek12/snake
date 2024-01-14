class StorageSaver {
    constructor(name, obj) {
        this.model = obj;
        this.name = name;
        this.model.subscribe(this.save.bind(this));


        let restore = JSON.parse(localStorage.getItem(this.name));
        if (restore != null && restore.length > 0) {
            for (let color of restore) {
                this.model.addColor(color);
            }
        } else {
            this.model.publish(this.model, "start");
        }

    }
    save(obj, msg) {
        let modelString = JSON.stringify(obj.list);
        localStorage.setItem(this.name, modelString);

    }
}