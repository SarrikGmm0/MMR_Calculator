function calculateMmr() {
    let result = document.getElementById("result").value;
    let kd = parseFloat(document.getElementById("kd").value);
    let mmr = 0;

    if (result === "win") {
        if (kd >= 2) mmr = Math.floor(Math.random() * (99 - 80 + 1)) + 80;
        else if (kd >= 1) mmr = Math.floor(Math.random() * (79 - 60 + 1)) + 60;
        else mmr = Math.floor(Math.random() * (59 - 40 + 1)) + 40;
    } else {
        if (kd >= 2) mmr = Math.floor(Math.random() * (51 - 70 + 1)) + 70;
        else if (kd >= 1) mmr = Math.floor(Math.random() * (31 - 50 + 1)) + 50;
        else mmr = Math.floor(Math.random() * (11 - 30 + 1)) + 30;
    }

    document.getElementById("mmr").innerText = "Ваш ММР: " + mmr;
}
