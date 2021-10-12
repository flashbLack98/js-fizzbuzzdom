let scacchiera = document.getElementById("container_scacchiera");

for (let x = 1; x <= 10; x++) {


    let row = document.createElement("div");
    row.classList.add("row", "m-3");
    scacchiera.append(row);

    for (let i = 1; i <= 7; i++) {

        let col = document.createElement("div");
        col.classList.add("col");
        row.append(col);



        let cella = document.createElement("div");
        cella.classList.add("ratio", "ratio-1x1", "bg-primary");
        col.append(cella);
        cella.textContent = i;

    }
}
