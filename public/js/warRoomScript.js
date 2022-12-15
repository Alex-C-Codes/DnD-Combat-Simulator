fetch('http://localhost:3001/monsters')
    .then(function(response) {
        return response.json();
    })
    .then(function(monsters){
        let placeholder = document.querySelector('#data-output');
        let out = '';
        for (let monster of monsters) {
            out += `
            <tr>
                <td>${monster.name}</td>
                <td>${monster.cr}</td>
                <td>${monster.xp}</td>
                <td>${monster.ac}</td>
                <td>${monster.hp}</td>
            </tr>
        `;
    }
    placeholder.innerHTML = out;
})