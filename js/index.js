var dataToDisplay = []

window.addEventListener('DOMContentLoaded', (e) => {
    var url = 'https://restcountries.eu/rest/v2/all';

    fetch(url)
    .then(res => res.json())
    .then(data => {
        dataToDisplay = data.splice(0, 50)
    })
})

function displayTable(arr = []) {
    
}