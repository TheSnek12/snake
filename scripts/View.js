class ModelViewer {
    constructor(model) {
        this.model = model;
        model.subscribe(this.update.bind(this));
    }
    update(obj, msg) {
        list.innerHTML = "";
        for (let color of obj.list) {
            this.createCard(color);

        }


        var isNew = false;
        var newColor = "";

        let index = Math.round(Math.random() * obj.big.length);
        newColor = obj.big[index];
        //console.log(newColor, obj.big, index);
        for (let i = newColor.length; i < 6; i++) {
            newColor = "0" + newColor;
        }
        newColor = "#" + newColor;
        let rgb = hexToRgb(newColor);
        newColor = "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";


        this.createInputCard(newColor, index);
    }
    createInputCard(newColor, index) {


        let card = document.createElement("div");
        card.className = "colorItem";


        let heading = document.createElement("h2");
        heading.textContent = newColor.substring(4, newColor.length - 1);

        let colorBlock = document.createElement("div");
        colorBlock.className = "colorBlock";
        colorBlock.style.backgroundColor = newColor;

        let input = document.createElement("input");
        input.addEventListener("keydown", function(e) {
            if (e.code === "Enter" && input.value) {

                let color = new Color(input.value, newColor);
                next(color, index);



            }

        });


        card.append(heading);
        card.append(colorBlock);
        card.append(input);

        list.append(card);
        input.focus();
        input.select();

    }
    createNewColor() {
        let rand = Math.round(Math.random() * 255);
        let rand2 = Math.round(Math.random() * 255);
        let rand3 = Math.round(Math.random() * 255);

        let newColor = "rgb(" + rand + ", " + rand2 + ", " + rand3 + ")";

        return newColor;


    }
    checkColor(newColor) {
        return !this.model.hashList[newColor];
    }
    createCard(color) {
        let card = document.createElement("div");
        card.className = "colorItem";


        let heading = document.createElement("h2");
        heading.textContent = color.rgb.substring(4, color.rgb.length - 1);

        let colorBlock = document.createElement("div");
        colorBlock.className = "colorBlock";
        colorBlock.style.backgroundColor = color.rgb;

        let nameText = document.createElement("div");
        nameText.className = "text";
        nameText.textContent = color.name;

        card.append(heading);
        card.append(colorBlock);
        card.append(nameText);

        list.append(card);

    }
}