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
        if (kd >= 2) mmr = Math.floor(Math.random() * (80 - 60 + 1)) + 60;
        else if (kd >= 1.5) mmr = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
        else if (kd >= 1) mmr = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
        else mmr = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    } else {
        if (kd >= 2) mmr = -(Math.floor(Math.random() * (20 - 1 + 1)) + 1);
        else if (kd >= 1.5) mmr = -(Math.floor(Math.random() * (40 - 20 + 1)) + 20);
        else if (kd >= 1) mmr = -(Math.floor(Math.random() * (60 - 40 + 1)) + 40);
        else mmr = -(Math.floor(Math.random() * (80 - 60 + 1)) + 60);
    }

    document.getElementById("mmr").innerText = "Ваш ММР: " + mmr;
	document.getElementById("kdValue").innerText = "Ваш K/D: " + kd.toFixed(2);
}
