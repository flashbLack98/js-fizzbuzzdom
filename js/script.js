let scacchiera = document.getElementById("container_scacchiera");


let row = document.createElement("div");
row.classList.add("row");
scacchiera.append(row);


let col = document.createElement("div");
col.classList.add("col");
row.append(col);

let cella = document.createElement("div");
cella.classList.add("ratio", "ratio-1x1", "bg-danger");
col.append(cella);
