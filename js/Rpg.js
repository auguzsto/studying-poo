let basedb = {
    "Items": [
        {
           "":""
        },
        {
            "id": "1", "name": "Sword of King", "type": "Sword", "level": "18", "description": "King Arthas's First Sword", "rarity": "Common", "attr": "+2 Agility", "durability": "100", "duration": "None", "itemType": "Weapon"
        }, 
        {
            "id": "2", "name": "Holt Frut", "type": "Food", "level": "34", "description": "Made by Vandora's portal guardians, regenerates 60% health and gives +20 strength", "rarity": "Rare", "attr": "+21 Stronger", "durability": "100", "duration": "30min", "itemType": "Food"
        },
        {
            "id": "3", "name": "Banana Food", "type": "Food", "level": "1", "description": "You need to reinvigorate forces. Regenerates 15% health", "rarity": "Common", "attr": "", "durability": "100", "duration": "", "itemType": "Food"
        },
        
    ],

    "Classes": [
        {
            "":""
        },
        {
            "id": "1", "name": "Paladin", "races": "Humans"
        },
        {
            "id": "2", "name": "Warrior", "races": "Humans, Gnomes, Elfs, Worgens, Globins, Undead"
        }
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
        this.itemType = itemType;
    }
}

class Classes {
    constructor(name, races) {
        this.name = name;
        this.races = races;
    }
}

class Paladin extends Classes {
    constructor(name, races, spells, requeriments){
        super(name, races)
        this.spells = spells;
        this.requeriments = requeriments;
    }
        spells() {
            //
        }
}

function getItems(n) { //Search item from console.
    const data = basedb.Items[n];
    const dataItems = new Items(data.name, data.type, data.level, data.description, data.rarity, data.attr, data.durability, data.duration, data.itemType);
    return dataItems;
}