class Items {
    constructor(name, type, level, description, rarity, attr, durability, duration){
        this.name = name;
        this.type = type;
        this.level = level;
        this.description = description;
        this.rarity = rarity;
        this.attr = attr;
        this.durability = durability;
        this.duration = duration;
    }
}

class Food extends Items {
    constructor(name, type, level, description, rarity, attr, duration) {
        super(name, type, level, description, rarity, attr, duration)
    }
    
    Info() {
        console.log("Name: "+this.name+ " - Type: "+this.type+ " - Level: "+this.level+ " - Description: "+this.description+ " - Rarity: "+this.rarity+ " - Attributes: "+this.attr+" - Duration: "+this.durability);
    }
}

class Weapons extends Items {
    constructor(name, type, level, description, rarity, attr, durability) {
      super(name, type, level, description, rarity, attr, durability)
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

const sword = new Weapons("Sword of King", "Sword", "18", "King Arthas's First Sword","Common", "+2 Agility", "80");

const food = new Food("Holt Fruit", "Food", "34", "Made by Vandora's portal guardians, regenerates 10% health and gives +20 strength", "Rare", "+21 Strong", "20")


sword.Info()
sword.Repair()
food.Info()