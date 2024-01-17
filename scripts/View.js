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




    }


    createCard(color) {
        let card = document.createElement("div");
        card.className = "colorItem";


        let heading = document.createElement("h2");
        heading.textContent = color.rgb.substring(4, color.rgb.length - 1);

        let colorBlock = document.createElement("div");
        colorBlock.className = "colorBlock";
        colorBlock.style.backgroundColor = color.rgb;
        card.append(heading);
        card.append(colorBlock);
        if (color.name){
            let nameText = document.createElement("div");
            nameText.className = "text";
            nameText.textContent = color.name;
            card.append(nameText);
            list.append(card);
        }
        else{
            let input = document.createElement("input");
            input.addEventListener("keydown", function(e) {
                if (e.code === "Enter" && input.value) {
                    let c = new Color(input.value, color.rgb);
                    model.addColor(c);

                    var isNew = false;
                    var newColor = "";
                    while(!isNew){
                        newColor = createNewColor();
                        isNew = checkColor(newColor); 
                    }
                    
                    model.addColor(new inputColor(newColor));
                    
                    model.removeColor(color);
                }
            });      
            card.append(input);
            list.append(card);
            input.focus();
            
            
        }



        

    }
}