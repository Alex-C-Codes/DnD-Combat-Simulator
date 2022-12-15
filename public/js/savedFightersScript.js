fetch('http://localhost:3001/charactersList')
// fetch('/db/characters.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(characters){

        let placeholder = document.querySelector('#data-output');
        let out = '';
        for (let character of characters) {
            out += `
            <tr>
                <td>${character.name}</td>
                <td>${character.type}</td>
                <td>${character.level}</td>
                <td>${character.xp}</td>
                <td>${character.ac}</td>
                <td>${character.hp}</td>
                <td>${character.actions[0].name}</td>
                <td>${character.actions[0].damage[0].damage_dice}</td>
                <td>${character.inventory}</td>
                <td><button onclick="" id='/${character.user_id}'>DELETE</button></td>
            </tr>
        `;
    }
    placeholder.innerHTML = out;
})