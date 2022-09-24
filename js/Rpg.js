let baseItems = {
    "Items": [
        {
           "": ""
        },
        {
            "id": "1", "name": "Sword of King", "type": "Sword", "level": "18", "description": "King Arthas's First Sword", "rarity": "Common", "attr": "+2 Agility", "durability": "100", "duration": "None", "itemType": "Weapon"
        }, 
        {
            "id": "2", "name": "Holt Frut", "type": "Food", "level": "34", "description": "Made by Vandora's portal guardians, regenerates 10% health and gives +20 strength", "rarity": "Rare", "attr": "+21 Stronger", "durability": "100", "duration": "30min", "itemType": "Food"
        },
    ]
}

class Items {
    constructor(name, type, level, description, rarity, attr, durability, duration, itemType){
        this.name = name;
        this.type = type;
        this.level = level;
        this.description = description;
        this.rarity = rarity;
        this.attr = attr;
        this.durability = durability;
        this.duration = duration;
        this.itemType = itemType
    }
}

class Food extends Items {
    constructor(name, type, level, description, rarity, attr, duration, itemType) {
        super(name, type, level, description, rarity, attr, duration, itemType)
    }
    
    Info() {
        console.log("Name: "+this.name+ " - Type: "+this.type+ " - Level: "+this.level+ " - Description: "+this.description+ " - Rarity: "+this.rarity+ " - Attributes: "+this.attr+" - Duration: "+this.durability);
    }
}

class Weapons extends Items {
    constructor(name, type, level, description, rarity, attr, durability, itemType) {
      super(name, type, level, description, rarity, attr, durability, itemType)
    }

    Info() {
        console.log("Name: "+this.name+ " - Type: "+this.type+ " - Level: "+this.level+ " - Description: "+this.description+ " - Rarity: "+this.rarity+ " - Attributes: "+this.attr+" - Durability: "+this.durability);
    }

    Repair() {
        if(this.durability == 0){
            console.log(this.name+  " quebrou! Faça o reparo para poder utilizar.");
        } else if(this.durability < 45) {
            console.log(this.name+ " precisa ser reparada.");
        } else {
            console.log("A durabilidade da "+this.name+" está em " +this.durability+ ". Não é necessário reparo, por enquanto...");
        }
    }
}

function getItems(n) { //Search item from console.
    const data = baseItems.Items[n];
    const dataItems = new Items(data.name, data.type, data.level, data.description, data.rarity, data.attr, data.durability, data.duration, data.itemType);
    return dataItems;
}