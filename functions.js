function insertPersons (persons) {
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHtml(persons);
}

function getPersonsHtml (persons) {
    return getPersonHtml(persons[0]) + getPersonHtml(persons[1]);
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