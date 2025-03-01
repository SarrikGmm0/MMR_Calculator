function calculateMmr() {
    let result = document.getElementById("result").value;
    let kills = parseInt(document.getElementById("kills").value) || 0;
    let deaths = parseInt(document.getElementById("deaths").value) || 0;
    let kd = deaths === 0 ? kills : kills / deaths;
    let mmr = 0;

    if (kills === 0 && deaths === 0) {
        document.getElementById("mmr").innerText = "Вы не ввели данные!";
        document.getElementById("kdValue").innerText = "";
        return;
    }

    if (result === "win") {
        if (kd >= 2) mmr = Math.floor(Math.random() * (99 - 80 + 1)) + 80;
        else if (kd >= 1) mmr = Math.floor(Math.random() * (79 - 60 + 1)) + 60;
        else mmr = Math.floor(Math.random() * (59 - 40 + 1)) + 40;
    } else {
        if (kd >= 2) mmr = Math.floor(Math.random() * (51 - 70 + 1)) + 70;
        else if (kd >= 1) mmr = Math.floor(Math.random() * (31 - 50 + 1)) + 50;
        else mmr = Math.floor(Math.random() * (11 - 30 + 1)) + 30;
    }

    document.getElementById("kdValue").innerText = "Ваш K/D: " + kd.toFixed(2);
    document.getElementById("mmr").innerText = "Ваш ММР: " + mmr;
}
