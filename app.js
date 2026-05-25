const START_DATE = new Date("2026-05-26T00:00:00+08:00");

const colors = {
  recovery: "Recovery",
  easy: "Easy",
  aerobic: "Aerobic",
  speed: "Speed",
  lsd: "LSD",
  rest: "Rest"
};

const plan = [
  {
    goal:"重新建立跑步節奏。重點是讓身體習慣規律訓練，不追配速。",
    recovery:["20–30 分鐘低強度恢復跑。","跑走都可以，跑完要比跑前更鬆。","呼吸輕鬆，小腿/足底沒有變更緊。"],
    easy:["4–5K 輕鬆跑。","Zone 2，能聊天，慢到覺得有點無聊。","跑完覺得還能再跑。"],
    aerobic:["30 分鐘有氧耐力。","心率穩，不看配速。","全程沒有爆喘。"],
    speed:["本週可不做；想做就 6×20 秒輕快跑。","不是衝刺，只是喚醒步頻。","動作輕鬆，不硬蹬。"],
    lsd:["6–8K 長距離慢跑。","練穩定移動，不練速度。","後半沒有亂掉。"],
    rest:["至少 1–2 天休息。","足底/小腿有感就多休。","隔天醒來身體更好。"]
  },
  {
    goal:"穩定頻率，確認足底與小腿能適應。",
    recovery:["25–30 分鐘。","超慢，必要時跑走。","跑完更舒服。"],
    easy:["5K easy。","能聊天，不暴衝。","配速穩。"],
    aerobic:["35–40 分鐘。","Zone 2 為主。","心率不要一路飄高。"],
    speed:["6×1 分鐘輕快跑。","快段有速度感但不 all out。","8 成力內完成。"],
    lsd:["8–10K。","慢慢跑，練補水習慣。","隔天可正常生活。"],
    rest:["1–2 天。","休息也是訓練。","疲勞下降。"]
  },
  {
    goal:"開始建立有氧底，保持保守。",
    recovery:["30 分鐘。","跑走都可以。","RPE 2–3。"],
    easy:["5–6K。","舒服，別讓 Zoom Fly 帶你衝。","能講完整句子。"],
    aerobic:["40 分鐘。","穩定 Zone 2。","不追平均配速。"],
    speed:["8×1 分鐘 5K effort。","快段約 5:30–5:50/km 起跳，依狀況調整。","完成全部組數且動作不崩。"],
    lsd:["10–12K。","非常慢，練時間在腳上。","後段不爆。"],
    rest:["至少 1 天。","若足底緊，直接休。","疼痛不累積。"]
  },
  {
    goal:"恢復週。讓前幾週刺激被身體吸收。",
    recovery:["20–30 分鐘。","非常輕鬆。","跑完腿更鬆。"],
    easy:["4–5K。","短而輕鬆。","沒有壓力。"],
    aerobic:["30–35 分鐘。","低心率。","不要變成 tempo。"],
    speed:["不建議正式速度課。","最多 4×20 秒 strides。","完全不喘爆。"],
    lsd:["8–10K。","比上週短，恢復為主。","隔天沒痠痛。"],
    rest:["1–2 天。","真的休。","睡眠補足。"]
  },
  {
    goal:"重新增加跑量，但依舊以 easy 為主。",
    recovery:["30 分鐘。","低強度循環。","身體放鬆。"],
    easy:["6K。","能聊天。","跑完有餘裕。"],
    aerobic:["40–45 分鐘。","穩定巡航。","心率平。"],
    speed:["6×2 分鐘輕快。","不要衝刺，組間慢跑/走 2 分。","最後一組還能維持姿勢。"],
    lsd:["12–14K。","LSD，不追速度。","後半不掉姿勢。"],
    rest:["至少 1 天。","累就多休。","疲勞清掉。"]
  },
  {
    goal:"練控制，尤其不要前半跑太爽。",
    recovery:["30 分鐘。","RPE 2–3。","跑後更舒服。"],
    easy:["6–7K。","刻意慢。","全程可聊天。"],
    aerobic:["45 分鐘。","Zone 2。","不要看鞋太爽就加速。"],
    speed:["8×1 分鐘 5K effort。","快段穩，不 all out。","小腿沒有硬掉。"],
    lsd:["14–16K。","慢慢跑，補水練起來。","隔天足底 OK。"],
    rest:["1 天以上。","有痛就休。","恢復優先。"]
  },
  {
    goal:"恢復週，避免足底/小腿累積。",
    recovery:["25–30 分鐘。","超慢。","跑完舒服。"],
    easy:["5–6K。","輕鬆。","不要硬湊跑量。"],
    aerobic:["35–40 分鐘。","低強度。","心率穩。"],
    speed:["可跳過。","若做，只做 strides。","完全輕鬆。"],
    lsd:["10–12K。","短一點。","恢復週不要貪。"],
    rest:["1–2 天。","拉伸與睡眠。","身體充電。"]
  },
  {
    goal:"進入馬拉松基礎期，long run 開始重要。",
    recovery:["30 分鐘。","低強度。","恢復為主。"],
    easy:["6–7K。","舒服跑。","呼吸穩。"],
    aerobic:["45–50 分鐘。","Zone 2。","有氧堆積。"],
    speed:["10 分鐘 steady 或 6×1 分鐘。","保持控制，不做爆。","跑姿不亂。"],
    lsd:["16–18K。","練補給、練慢。","後半不崩。"],
    rest:["1 天。","若累可 2 天。","不累積痛感。"]
  },
  {
    goal:"第一次較長距離區間，注意補給與摩擦。",
    recovery:["30 分鐘。","很慢。","讓腿恢復。"],
    easy:["7K。","Zone 2。","不暴衝。"],
    aerobic:["50 分鐘。","穩定巡航。","心率不要爆。"],
    speed:["6×2 分鐘。","快段只是刺激，不是比賽。","最後仍能控制。"],
    lsd:["18–20K。","慢，補水補給要練。","跑完還能正常走。"],
    rest:["1–2 天。","長跑後可多休。","恢復品質優先。"]
  },
  {
    goal:"恢復週，防止過度使用。",
    recovery:["25–30 分鐘。","跑走可。","越跑越鬆。"],
    easy:["5–6K。","輕鬆短跑。","不追配速。"],
    aerobic:["40 分鐘。","低心率。","不硬撐。"],
    speed:["跳過正式 speed。","最多 strides。","腳感輕鬆即可。"],
    lsd:["14–16K。","降量。","後段仍穩。"],
    rest:["1–2 天。","足底有感就休。","睡眠優先。"]
  },
  {
    goal:"建立 20K 後耐受。",
    recovery:["30 分鐘。","恢復循環。","RPE 2–3。"],
    easy:["7K。","能聊天。","控住鞋感。"],
    aerobic:["50–55 分鐘。","Zone 2。","穩定輸出。"],
    speed:["15–20 分鐘 controlled tempo。","不是全力，呼吸可控。","跑完不炸。"],
    lsd:["20–22K。","補給固定，慢。","後半不亂掉。"],
    rest:["1 天。","長跑後多觀察。","痛感不延續。"]
  },
  {
    goal:"穩定週跑量，不急著變快。",
    recovery:["30 分鐘。","很輕鬆。","腿變鬆。"],
    easy:["7–8K。","Zone 2。","不加速。"],
    aerobic:["55–60 分鐘。","穩定低強度。","跑完還有餘裕。"],
    speed:["5×3 分鐘。","快段有控制，組間 2 分恢復。","動作不崩。"],
    lsd:["22–24K。","慢，練補給與防磨。","隔天沒有明顯痛。"],
    rest:["1 天以上。","看足底/小腿調整。","恢復完成。"]
  },
  {
    goal:"恢復週，讓身體吸收長距離。",
    recovery:["25–30 分鐘。","跑走可。","恢復。"],
    easy:["6K。","非常輕鬆。","不湊距離。"],
    aerobic:["40–45 分鐘。","低強度。","心率穩。"],
    speed:["跳過。","最多 strides。","保持輕快。"],
    lsd:["16–18K。","恢復週長跑。","跑完不累爆。"],
    rest:["1–2 天。","真的休息。","疲勞下降。"]
  },
  {
    goal:"馬拉松專項期：學會馬拉松努力度。",
    recovery:["30 分鐘。","輕鬆。","恢復循環。"],
    easy:["8K。","慢。","能聊天。"],
    aerobic:["60 分鐘。","Zone 2。","穩定巡航。"],
    speed:["2×10 分鐘馬拉松努力度。","不是 tempo，是可長時間維持的節奏。","結束仍有餘裕。"],
    lsd:["24–26K。","補給演練，配速保守。","後段不崩。"],
    rest:["1 天。","長跑後觀察足底。","不硬撐。"]
  },
  {
    goal:"延長耐受，避免前半過快。",
    recovery:["30 分鐘。","慢。","腿更鬆。"],
    easy:["8K。","Zone 2。","不要被鞋推走。"],
    aerobic:["60 分鐘。","穩定有氧。","心率平穩。"],
    speed:["20 分鐘 controlled tempo。","舒服偏快，不爆。","隔天不鐵腿。"],
    lsd:["26–28K。","重點是補給與節奏。","最後 5K 不崩。"],
    rest:["1–2 天。","累就休。","恢復優先。"]
  },
  {
    goal:"恢復週。減量比加量更重要。",
    recovery:["25–30 分鐘。","低強度。","恢復。"],
    easy:["6–7K。","輕鬆。","不追配速。"],
    aerobic:["45 分鐘。","Zone 2。","舒適。"],
    speed:["不做正式 speed。","最多 strides。","腳感輕快。"],
    lsd:["18–20K。","降量。","保持耐力但不累積疲勞。"],
    rest:["1–2 天。","修復。","睡眠補足。"]
  },
  {
    goal:"高峰前準備，最重要是穩。",
    recovery:["30 分鐘。","超慢。","讓腿恢復。"],
    easy:["8K。","能聊天。","不要進 steady。"],
    aerobic:["60 分鐘。","有氧巡航。","心率穩。"],
    speed:["3×10 分鐘馬拉松努力度。","練控制。","不能爆。"],
    lsd:["28–30K。","慢，補給完整演練。","跑完沒有受傷感。"],
    rest:["1 天以上。","長跑後恢復。","足底 OK。"]
  },
  {
    goal:"最大長跑週。這週不是拼速度，是建立信心。",
    recovery:["30 分鐘。","很輕鬆。","跑完更鬆。"],
    easy:["8K。","刻意慢。","保留體力。"],
    aerobic:["50–60 分鐘。","Zone 2。","不暴衝。"],
    speed:["8×1 分鐘輕快。","保守，不 all out。","保持步頻。"],
    lsd:["30–32K。","全程保守，補給照比賽。","完成且沒有爆掉。"],
    rest:["1–2 天。","長跑前後都要休。","恢復優先。"]
  },
  {
    goal:"開始 taper，降低疲勞但保留節奏。",
    recovery:["25–30 分鐘。","恢復跑。","輕鬆。"],
    easy:["7K。","Zone 2。","不加速。"],
    aerobic:["45 分鐘。","有氧維持。","不要跑太久。"],
    speed:["2×8 分鐘馬拉松努力度。","保持感覺，不做累。","跑完清爽。"],
    lsd:["22–24K。","比高峰短。","保留信心。"],
    rest:["1–2 天。","多睡。","疲勞下降。"]
  },
  {
    goal:"Taper 週，讓腿回彈。",
    recovery:["20–30 分鐘。","很慢。","鬆腿。"],
    easy:["6K。","輕鬆。","跑完不累。"],
    aerobic:["35–40 分鐘。","低強度。","保持習慣。"],
    speed:["6×20 秒 strides。","輕快，不衝刺。","動作順。"],
    lsd:["14–16K。","短長跑。","不要貪。"],
    rest:["1–2 天。","休息。","睡眠補滿。"]
  },
  {
    goal:"比賽前一週。少跑，多睡，整理裝備。",
    recovery:["20 分鐘。","輕鬆鬆腿。","跑完舒服。"],
    easy:["4–5K。","非常輕鬆。","不累。"],
    aerobic:["30 分鐘以內。","保持活動。","不要累積疲勞。"],
    speed:["4×1 分鐘輕快。","只是喚醒，不爆。","小腿不緊。"],
    lsd:["不做真正 LSD。","最多 20 分鐘 shakeout。","保持新鮮。"],
    rest:["多休息。","補水、睡眠、裝備檢查。","身體想跑。"]
  },
  {
    goal:"Race Week：長榮馬。前半保守，後半專注。",
    recovery:["15–20 分鐘。","只為了讓腿鬆。","沒有疲勞。"],
    easy:["3–4K。","非常輕鬆。","保持節奏感。"],
    aerobic:["不需要額外有氧。","把力氣留給比賽。","身體新鮮。"],
    speed:["不做正式 speed。","最多 3–4 趟 20 秒輕快跑。","完全不累。"],
    lsd:["42.195K 比賽。","前半忍住，補給固定，30K 後穩住。","健康完賽。"],
    rest:["比賽前多休。","睡眠、補水、不要亂吃。","站上起跑線時身體是新的。"]
  }
];

const weekTitle = document.getElementById("weekTitle");
const weekRange = document.getElementById("weekRange");
const weekGoal = document.getElementById("weekGoal");
const cards = document.getElementById("cards");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const note = document.getElementById("note");
const rpe = document.getElementById("rpe");
const calf = document.getElementById("calf");
const foot = document.getElementById("foot");
const overpace = document.getElementById("overpace");
const saveNote = document.getElementById("saveNote");
const saveMsg = document.getElementById("saveMsg");

let current = Number(localStorage.getItem("currentWeek") || 0);
current = Math.min(Math.max(current,0), plan.length - 1);

function addDays(d, days){
  const x = new Date(d);
  x.setDate(x.getDate() + days);
  return x;
}
function fmt(d){
  return `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,"0")}/${String(d.getDate()).padStart(2,"0")}`;
}
function noteKey(){
  return `note-week-${current}`;
}
function doneKey(type){
  return `done-week-${current}-${type}`;
}
function render(){
  const week = plan[current];
  const start = addDays(START_DATE, current * 7);
  const end = addDays(start, 6);

  weekTitle.textContent = `Week ${current + 1}`;
  weekRange.textContent = `${fmt(start)} - ${fmt(end)}`;
  weekGoal.textContent = week.goal;

  cards.innerHTML = "";
  Object.keys(colors).forEach(type => {
    const [coros, mine, finish] = week[type];
    const isDone = localStorage.getItem(doneKey(type)) === "1";
    const card = document.createElement("article");
    card.className = `training-card ${type}`;
    card.innerHTML = `
      <span class="badge">${colors[type]}</span>
      <h3>${titleFor(type)}</h3>
      <div class="block">
        <div class="block-title">COROS 方向</div>
        <p>${coros}</p>
      </div>
      <div class="block">
        <div class="block-title">我的建議</div>
        <p>${mine}</p>
      </div>
      <div class="block">
  <div class="block-title">建議配速 / Effort</div>
  <p>${paceFor(type)}</p>
</div>
      <div class="block">
        <div class="block-title">完成條件</div>
        <p>${finish}</p>
      </div>
      <button class="complete ${isDone ? "done" : ""}" data-type="${type}">
        ${isDone ? "已完成" : "標記完成"}
      </button>
    `;
    cards.appendChild(card);
  });

  const saved = JSON.parse(localStorage.getItem(noteKey()) || "{}");
  note.value = saved.note || "";
  rpe.value = saved.rpe || "";
  calf.value = saved.calf || "";
  foot.value = saved.foot || "";
  overpace.checked = Boolean(saved.overpace);

  localStorage.setItem("currentWeek", current);
}
function titleFor(type){
  return {
    recovery:"恢復跑",
    easy:"輕鬆跑",
    aerobic:"有氧耐力跑",
    speed:"速度 / 間歇",
    lsd:"LSD 長距離慢跑",
    rest:"休息"
  }[type];
}

cards.addEventListener("click", e => {
  if(!e.target.classList.contains("complete")) return;
  const type = e.target.dataset.type;
  const key = doneKey(type);
  const next = localStorage.getItem(key) === "1" ? "0" : "1";
  localStorage.setItem(key, next);
  render();
});
prevBtn.addEventListener("click", () => {
  current = Math.max(0, current - 1);
  render();
});
nextBtn.addEventListener("click", () => {
  current = Math.min(plan.length - 1, current + 1);
  render();
});
saveNote.addEventListener("click", () => {
  localStorage.setItem(noteKey(), JSON.stringify({
    note: note.value,
    rpe: rpe.value,
    calf: calf.value,
    foot: foot.value,
    overpace: overpace.checked
  }));
  saveMsg.textContent = "已儲存。";
  setTimeout(() => saveMsg.textContent = "", 1600);
});
resetBtn.addEventListener("click", () => {
  if(confirm("確定清除所有紀錄？")){
    localStorage.clear();
    current = 0;
    render();
  }
});
render();
function paceFor(type){
  return {
    recovery: "7:30–8:30/km ｜ RPE 2–3 ｜ 能鼻吸",
    easy: "6:50–7:40/km ｜ 能聊天 ｜ 不暴衝",
    aerobic: "6:40–7:20/km ｜ Zone 2 ｜ 穩定巡航",
    speed: "5:20–5:50/km ｜ 5K effort ｜ 不 all out",
    lsd: "6:50–7:40/km ｜ 長時間舒服巡航",
    rest: "今天不要跑 😂"
  }[type];
}