<div class="mmr-container">
  <div class="mmr-bar">
    <div class="mmr-fill" id="mmrFill" style="width: 0%;"></div>
    <span class="mmr-text" id="mmrText">0 ММР</span>
    <span class="mmr-rank" id="mmrRank">Бронза 1</span>
  </div>
</div>

<script>
const ranks = [
  { name: "Бронза 1", mmr: 0 },
  { name: "Бронза 2", mmr: 250 },
  { name: "Бронза 3", mmr: 500 },
  { name: "Серебро 1", mmr: 750 },
  { name: "Серебро 2", mmr: 1000 },
  { name: "Серебро 3", mmr: 1250 },
  { name: "Золото 1", mmr: 1500 },
  { name: "Золото 2", mmr: 1750 },
  { name: "Золото 3", mmr: 2000 },
  { name: "Алмаз 1", mmr: 2250 },
  { name: "Алмаз 2", mmr: 2500 },
  { name: "Алмаз 3", mmr: 2750 },
  { name: "Легенда 1", mmr: 3000 },
  { name: "Легенда 2", mmr: 3500 },
  { name: "Легенда 3", mmr: 4000 },
  { name: "Мастер", mmr: 5000 }
];

let currentMMR = 0;

function updateProgress(mmr) {
  currentMMR += mmr;
  let currentRank = ranks[0];
  for (let i = 0; i < ranks.length; i++) {
    if (currentMMR >= ranks[i].mmr) {
      currentRank = ranks[i];
    }
  }

  const nextRank = ranks.find(r => r.mmr > currentRank.mmr) || currentRank;
  const progress = nextRank.mmr > currentRank.mmr ? ((currentMMR - currentRank.mmr) / (nextRank.mmr - currentRank.mmr)) * 100 : 100;

  document.getElementById("mmrFill").style.width = `${progress}%`;
  document.getElementById("mmrText").textContent = `${currentMMR} ММР`;
  document.getElementById("mmrRank").textContent = currentRank.name;
}
</script>

<style>
  .mmr-container {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 300px;
    height: 40px;
    background: #ccc;
    border-radius: 10px;
    overflow: hidden;
  }

  .mmr-bar {
    width: 100%;
    height: 100%;
    position: relative;
    background: #eee;
    border: 2px solid #000;
  }

  .mmr-fill {
    height: 100%;
    background: blue;
    transition: width 0.5s ease;
  }

  .mmr-text, .mmr-rank {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
    color: #000;
  }

  .mmr-text {
    left: 10px;
  }

  .mmr-rank {
    right: 10px;
  }
</style>
