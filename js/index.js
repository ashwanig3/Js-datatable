var tableBody = document.querySelector('.t-body');
var searchInp = document.getElementById('searchInp');
var sortOption = document.getElementById('sort_by_population');

var dataToDisplay = []

// Get all the data to display
window.addEventListener('DOMContentLoaded', (e) => {
    var url = 'https://restcountries.eu/rest/v2/all';

    fetch(url)
    .then(res => res.json())
    .then(data => {
        dataToDisplay = data.splice(0, 50);
        displayTable(dataToDisplay);
    })
})

// function to display table
function displayTable(arr = []) {
    tableBody.innerHTML = '';
    if(arr.length > 0) {
        arr.forEach((item,id) => {
            var { name, population, region, nativeName, capital } = item;
            tableBody.innerHTML +=  `<tr>
                                        <td>${name}</td>
                                        <td>${capital}</td>
                                        <td>${nativeName}</td>
                                        <td>${population}</td>
                                        <td>${region}</td>
                                    </tr>`
        })
    } 
}


// function to search

function searchTable(e) {
    var query = e.target.value;

    if(dataToDisplay.length > 0) {
        var filteredData = dataToDisplay.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
        if(filteredData.length > 0) {
            displayTable(filteredData);
        } else {
            tableBody.innerHTML = `No result found for ${query}`;
        }
    }
}

// Sort by population
function sortByPopulation(e) {
    if(dataToDisplay.length > 0) {
        var val = e.target.value;
          var sortedArr = val && val === 'Low to high' ?  dataToDisplay.sort((a,b) => a.population - b.population) : dataToDisplay.sort((a,b) => a.population - b.population).reverse();
    
          if(sortedArr.length > 0) {
              displayTable(sortedArr)
          }
    }
}

searchInp.addEventListener('input', searchTable);
sortOption.addEventListener('change', sortByPopulation);