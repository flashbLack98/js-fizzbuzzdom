/* let scacchiera = document.getElementById("container_scacchiera");
for (let x = 1; x <= 7; x++) {


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
    }
} */


let scacchiera = document.getElementById("container_scacchiera");

let row = document.createElement("div");
row.classList.toggle("row_cols_7");
scacchiera.append(row);
for (i = 1; i <= 100; i++) {

    let col = document.createElement("div");
    row.append(col);
    col.classList.add("my_col", "ratio", "ratio-1x1");

    let cella = document.createElement("div");
    col.append(cella);
    cella.classList.toggle("my_cella");
    cella.innerHTML = `<p>${i}</p>`;

    let fizz = `<p>fizz</p>`;
    let buzz = `<p>buzz</p>`;


    let multipliTre = i % 3 === 0;
    if (multipliTre) {
        cella.classList.toggle("bg-success");
        cella.innerHTML = fizz;
    }

    let multipliCinque = i % 5 === 0;
    if (multipliCinque) {
        cella.classList.toggle("bg-warning");
        cella.innerHTML = buzz;
    }

    if (multipliTre && multipliCinque) {

        cella.classList.toggle("bg-danger");
        cella.innerHTML = fizz + buzz;

    }
}


