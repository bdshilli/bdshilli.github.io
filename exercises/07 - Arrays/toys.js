const toys = ["drum", "ball", "rope", "balloon", "tire"];
const toyPrices = [];
toyPrices["barbie"] = 7.54;
toyPrices["doll house"] = 86.23;
toyPrices["slide"] = 34.23;
toyPrices["ken"] = 2.3;
toyPrices["bike"] = 56;

/*
const showToys = () => {
    const display = document.getElementById("toy-display");

    toys.forEach((toy)=>{
        let p = document.createElement('p');
        p.innerHTML = toy;
        display.append(p);
    });
}

showToys();
*/
//Showing toy table
const showToyTable = () => {
    
}

showToyTable();

(() => {
    const toyTable = document.getElementById("toy-table");

    for(let toy in toyPrices) {
        const row = document.createElement("tr");
        toyTable.append(row);


        //toy column
        const col1 = document.createElement("td");
        col1.innerHTML = toy;
        row.append(col1);

        //price column
        const col2 = document.createElement("td");
        col2.innerHTML = toyPrices[toy];
        row.append(col2);

        //add click o row
        row.onclick = () => {
            document.getElementById("display").innerHTML = `${toy} costs: $${toyPrices[toy]}`
        }
    }
})();