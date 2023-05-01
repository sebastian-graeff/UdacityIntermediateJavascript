// Create Dino Constructor
dino_constructor = function Dino(species,weight,height,diet,where,when) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact
    }

// Create Dino Objects
//Load Dino from dino.json "./dino.json"
const getDinoDataJson = async () => {
    const jsonData = await fetch("./dino.json");
    const data = await jsonData.json();
    const dinos = data.Dinos.map(value => {
        return new dino_contructor(value.species, value.weight, value.height, value.diet, value.where, value.when, value.fact);
    })
    generateAndDisplayTitle(dinos);
};
// Create Human Object
const Human = new Object()

// Use IIFE to get human data from form
human_data = (function name(params) {
        let get_name = document.getElementById("name").value;
        let get_height = document.getElementById("height").value;
        let get_weight = document.getElementById("weight").value;
        let get_diet = document.getElementById("diet").value;

        return {
            species: get_name,
            weight: get_weight,
            height: get_height,
            diet: get_diet
        }
    })()

    // Create Dino Compare Method 1
    function compare1(human_data,dino_data) {
        console.log("The ${human_data}")
    }
    
    // Create Dino Compare Method 2

    
    // Create Dino Compare Method 3


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen
function run() {
    
}

// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click",run)
