function insertPersons (persons) {
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHtml(persons);
}

function getPersonsHtml (persons) {
    var htmlElemenst = persons.map(function(person) {
        return getPersonHtml(person);
    });
    return htmlElemenst.join("");
}

function getPersonHtml (person) {
    const gitHub = person.gitHub; 
    return ` <tr>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td><a target="_blank" href="https://github.com/${person.gitHub}">gitHub</a></td>
    </tr>`
}

fetch('teams.json')
    .then(res => res.json())
    .then(data => { 
        insertPersons(data);
    });