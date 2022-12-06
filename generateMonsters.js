const fetch = require('node-fetch');

var dndApiURL = 'https://www.dnd5eapi.co/api/monsters/adult-red-dragon/';

function getdndMonter() {

    console.log(`\n${dndApiURL}\n`);
    fetch(dndApiURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(`Monster Name: ${data.name}`);
            console.log(`AC: ${data.armor_class}`);
            console.log(`HP: ${data.hit_points}`);
        });
    
}

module.exports = getdndMonter;