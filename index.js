var pokNames;
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(data => pokNames = data)


setTimeout(() => {

    (pokNames.results.forEach(element => {
        var tableR = document.createElement("tr");
        
        var data1 = document.createElement("td");
        data1.innerText=element.name;

        tableR.append(data1);

        document.getElementById('tableP').append(tableR)
    }));
}, 3000);



