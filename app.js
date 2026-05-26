const START_DATE = new Date('2026-05-26T00:00:00+08:00');
const typeLabels={recovery:'Recovery',easy:'Easy',aerobic:'Aerobic',speed:'Speed',lsd:'LSD',rest:'Rest'};
const plan = [
  {
    "phase": "Base Building",
    "goal": "重新建立跑步習慣。重點是控制，不追配速。",
    "recovery": [
      "恢復跑。",
      "20–25 分鐘，超輕鬆，跑走都可以。",
      "7:30–8:30/km ｜ RPE 2–3",
      "跑完腿更鬆。"
    ],
    "easy": [
      "輕鬆跑。",
      "4–5K，能聊天。",
      "6:50–7:40/km ｜ RPE 3–4",
      "跑完還有餘裕。"
    ],
    "aerobic": [
      "有氧耐力。",
      "30 分鐘 Zone 2。",
      "6:40–7:30/km ｜ RPE 4",
      "心率穩。"
    ],
    "speed": [
      "輕快跑。",
      "6×20 秒 strides，組間走回。",
      "輕快但不衝刺",
      "動作順。"
    ],
    "lsd": [
      "長距離慢跑。",
      "6–8K。",
      "6:50–7:50/km",
      "後半不爆。"
    ],
    "rest": [
      "休息。",
      "1–2 天完整休息。",
      "不跑",
      "隔天更好。"
    ]
  },
  {
    "phase": "Base Building",
    "goal": "穩定頻率，確認足底與小腿能適應。",
    "recovery": [
      "25–30 分鐘恢復。",
      "必要時跑走。",
      "7:30–8:30/km ｜ RPE 2–3",
      "跑完舒服。"
    ],
    "easy": [
      "5K easy。",
      "刻意慢，不暴衝。",
      "6:50–7:40/km",
      "能聊天。"
    ],
    "aerobic": [
      "35–40 分鐘有氧。",
      "Zone 2 為主。",
      "6:40–7:25/km",
      "心率不飄。"
    ],
    "speed": [
      "6×1 分鐘。",
      "組間 1 分鐘慢跑/走。",
      "5:30–5:55/km",
      "完成且不爆。"
    ],
    "lsd": [
      "8–10K。",
      "練穩定移動。",
      "6:55–7:50/km",
      "隔天 OK。"
    ],
    "rest": [
      "休息。",
      "1–2 天。",
      "不跑",
      "疲勞下降。"
    ]
  },
  {
    "phase": "Base Building",
    "goal": "開始建立有氧底，保持保守。",
    "recovery": [
      "30 分鐘。",
      "恢復循環。",
      "7:30–8:30/km",
      "腿變鬆。"
    ],
    "easy": [
      "5–6K。",
      "能聊天。",
      "6:50–7:40/km",
      "跑完輕鬆。"
    ],
    "aerobic": [
      "40 分鐘。",
      "穩定 Zone 2。",
      "6:40–7:20/km",
      "全程可控。"
    ],
    "speed": [
      "8×1 分鐘 5K effort。",
      "組間 1 分鐘恢復。",
      "5:25–5:50/km",
      "最後一組姿勢不崩。"
    ],
    "lsd": [
      "10–12K。",
      "慢慢跑，練時間在腳上。",
      "6:55–7:50/km",
      "後段不亂。"
    ],
    "rest": [
      "休息。",
      "至少 1 天。",
      "不跑",
      "足底無痛。"
    ]
  },
  {
    "phase": "Base Building",
    "goal": "恢復週。讓前幾週刺激被身體吸收。",
    "recovery": [
      "20–30 分鐘。",
      "超慢。",
      "7:40–8:40/km",
      "跑完舒服。"
    ],
    "easy": [
      "4–5K。",
      "短而輕鬆。",
      "7:00–7:50/km",
      "不累。"
    ],
    "aerobic": [
      "30–35 分鐘。",
      "低心率。",
      "6:50–7:40/km",
      "不要變 tempo。"
    ],
    "speed": [
      "可跳過。",
      "最多 4×20 秒 strides。",
      "輕快即可",
      "完全不喘爆。"
    ],
    "lsd": [
      "8–10K。",
      "恢復週不要貪。",
      "7:00–8:00/km",
      "隔天輕鬆。"
    ],
    "rest": [
      "休息。",
      "1–2 天。",
      "不跑",
      "睡眠補足。"
    ]
  },
  {
    "phase": "Base Building",
    "goal": "重新增加跑量，但依舊以 easy 為主。",
    "recovery": [
      "30 分鐘。",
      "低強度循環。",
      "7:30–8:30/km",
      "恢復。"
    ],
    "easy": [
      "6K。",
      "舒服跑。",
      "6:50–7:40/km",
      "能聊天。"
    ],
    "aerobic": [
      "40–45 分鐘。",
      "穩定巡航。",
      "6:40–7:20/km",
      "心率平。"
    ],
    "speed": [
      "6×2 分鐘。",
      "組間 2 分鐘慢跑/走。",
      "5:30–6:00/km",
      "最後仍能控制。"
    ],
    "lsd": [
      "12–14K。",
      "補水練起來。",
      "6:55–7:50/km",
      "後半穩。"
    ],
    "rest": [
      "休息。",
      "至少 1 天。",
      "不跑",
      "疲勞清掉。"
    ]
  },
  {
    "phase": "Base Building",
    "goal": "練控制，尤其不要前半跑太爽。",
    "recovery": [
      "30 分鐘。",
      "RPE 2–3。",
      "7:30–8:30/km",
      "腿鬆。"
    ],
    "easy": [
      "6–7K。",
      "刻意慢。",
      "6:50–7:40/km",
      "全程可聊天。"
    ],
    "aerobic": [
      "45 分鐘。",
      "Zone 2。",
      "6:40–7:20/km",
      "不要加速。"
    ],
    "speed": [
      "8×1 分鐘。",
      "5K effort，不 all out。",
      "5:20–5:50/km",
      "小腿沒有硬掉。"
    ],
    "lsd": [
      "14–16K。",
      "慢慢跑。",
      "6:55–7:50/km",
      "隔天足底 OK。"
    ],
    "rest": [
      "休息。",
      "1–2 天。",
      "不跑",
      "恢復優先。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 16 週第 1 週：正式進入初馬週期，先穩定進場。",
    "recovery": [
      "25–30 分鐘恢復跑。",
      "速度越慢越好。",
      "7:30–8:30/km",
      "跑完更鬆。"
    ],
    "easy": [
      "5–6K easy。",
      "建立節奏。",
      "6:50–7:40/km",
      "能聊天。"
    ],
    "aerobic": [
      "40 分鐘有氧。",
      "低中強度。",
      "6:40–7:25/km",
      "心率穩。"
    ],
    "speed": [
      "6×1 分鐘輕快。",
      "只是喚醒。",
      "5:30–5:55/km",
      "不爆。"
    ],
    "lsd": [
      "10–12K。",
      "COROS 週期第一個 long run。",
      "6:55–7:50/km",
      "後段穩。"
    ],
    "rest": [
      "1–2 天休息。",
      "剛進主課表不要急。",
      "不跑",
      "疲勞下降。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 2 週：增加有氧時間。",
    "recovery": [
      "30 分鐘。",
      "恢復跑。",
      "7:30–8:30/km",
      "跑完舒服。"
    ],
    "easy": [
      "6K easy。",
      "保持慢。",
      "6:50–7:40/km",
      "呼吸輕鬆。"
    ],
    "aerobic": [
      "45 分鐘有氧。",
      "Zone 2。",
      "6:40–7:20/km",
      "可短句說話。"
    ],
    "speed": [
      "8×1 分鐘。",
      "組間 1 分鐘恢復。",
      "5:25–5:50/km",
      "動作不崩。"
    ],
    "lsd": [
      "12–14K。",
      "練補水。",
      "6:55–7:45/km",
      "後半不掉。"
    ],
    "rest": [
      "1 天以上。",
      "睡眠優先。",
      "不跑",
      "隔天新鮮。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 3 週：長跑往 16K 靠近。",
    "recovery": [
      "30 分鐘恢復。",
      "低強度。",
      "7:30–8:30/km",
      "腿鬆。"
    ],
    "easy": [
      "6–7K easy。",
      "不要 steady。",
      "6:50–7:35/km",
      "能聊天。"
    ],
    "aerobic": [
      "45–50 分鐘有氧。",
      "穩定巡航。",
      "6:40–7:20/km",
      "心率不飄。"
    ],
    "speed": [
      "6×2 分鐘。",
      "組間 2 分恢復。",
      "5:30–6:00/km",
      "最後一組還穩。"
    ],
    "lsd": [
      "14–16K。",
      "慢跑，時間在腳上。",
      "6:55–7:45/km",
      "隔天 OK。"
    ],
    "rest": [
      "1–2 天休息。",
      "有痛就休。",
      "不跑",
      "痛感不延續。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 4 週：恢復週。",
    "recovery": [
      "20–30 分鐘。",
      "超慢。",
      "7:40–8:40/km",
      "恢復。"
    ],
    "easy": [
      "5K easy。",
      "短而輕鬆。",
      "7:00–7:50/km",
      "不累。"
    ],
    "aerobic": [
      "35–40 分鐘。",
      "低心率。",
      "6:50–7:40/km",
      "輕鬆完成。"
    ],
    "speed": [
      "跳過正式 speed。",
      "最多 4×20 秒 strides。",
      "輕快即可",
      "不累積疲勞。"
    ],
    "lsd": [
      "10–12K。",
      "降量 long run。",
      "7:00–8:00/km",
      "跑完不累爆。"
    ],
    "rest": [
      "1–2 天。",
      "恢復週真的恢復。",
      "不跑",
      "身體充電。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 5 週：進入 18K 長跑區。",
    "recovery": [
      "30 分鐘。",
      "恢復循環。",
      "7:30–8:30/km",
      "跑完鬆。"
    ],
    "easy": [
      "7K easy。",
      "能聊天。",
      "6:50–7:35/km",
      "不暴衝。"
    ],
    "aerobic": [
      "50 分鐘有氧。",
      "Zone 2。",
      "6:40–7:20/km",
      "穩定輸出。"
    ],
    "speed": [
      "15 分鐘 controlled tempo。",
      "不是全力。",
      "約 6:00–6:30/km 或 RPE 6",
      "跑完不炸。"
    ],
    "lsd": [
      "16–18K。",
      "補水與防磨開始練。",
      "6:55–7:45/km",
      "後半穩。"
    ],
    "rest": [
      "1 天。",
      "長跑後觀察足底。",
      "不跑",
      "恢復。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 6 週：20K 前後耐受。",
    "recovery": [
      "30 分鐘。",
      "很慢。",
      "7:30–8:30/km",
      "腿更鬆。"
    ],
    "easy": [
      "7K easy。",
      "不要被鞋推快。",
      "6:50–7:35/km",
      "能聊天。"
    ],
    "aerobic": [
      "50–55 分鐘有氧。",
      "有氧堆積。",
      "6:40–7:15/km",
      "心率平。"
    ],
    "speed": [
      "5×3 分鐘。",
      "組間 2 分慢跑/走。",
      "5:40–6:10/km",
      "可控。"
    ],
    "lsd": [
      "18–20K。",
      "練補給節奏。",
      "6:55–7:45/km",
      "隔天能正常走。"
    ],
    "rest": [
      "1–2 天。",
      "累就多休。",
      "不跑",
      "恢復完成。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 7 週：週跑量穩定增加。",
    "recovery": [
      "30 分鐘。",
      "恢復。",
      "7:30–8:30/km",
      "舒服。"
    ],
    "easy": [
      "7–8K easy。",
      "穩。",
      "6:50–7:35/km",
      "不進 tempo。"
    ],
    "aerobic": [
      "55–60 分鐘有氧。",
      "長一點的 Zone 2。",
      "6:40–7:15/km",
      "後半不飄。"
    ],
    "speed": [
      "2×10 分鐘馬拉松努力度。",
      "中間 5 分恢復。",
      "約 6:30–7:00/km 或 RPE 5–6",
      "節奏可控。"
    ],
    "lsd": [
      "20–22K。",
      "固定補水補給。",
      "6:55–7:45/km",
      "最後 5K 不崩。"
    ],
    "rest": [
      "1 天。",
      "恢復優先。",
      "不跑",
      "足底 OK。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 8 週：恢復週。",
    "recovery": [
      "25–30 分鐘。",
      "超輕鬆。",
      "7:40–8:40/km",
      "恢復。"
    ],
    "easy": [
      "6K easy。",
      "短。",
      "7:00–7:50/km",
      "不累。"
    ],
    "aerobic": [
      "40–45 分鐘。",
      "低強度。",
      "6:50–7:35/km",
      "心率穩。"
    ],
    "speed": [
      "不做正式 speed。",
      "只做 4–6 趟 20 秒 strides。",
      "輕快即可",
      "不影響隔天。"
    ],
    "lsd": [
      "14–16K。",
      "恢復週長跑。",
      "7:00–7:50/km",
      "跑完清爽。"
    ],
    "rest": [
      "1–2 天。",
      "多睡。",
      "不跑",
      "疲勞下降。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 9 週：馬拉松專項期開始。",
    "recovery": [
      "30 分鐘。",
      "恢復跑。",
      "7:30–8:30/km",
      "腿鬆。"
    ],
    "easy": [
      "8K easy。",
      "保持慢。",
      "6:50–7:35/km",
      "能聊天。"
    ],
    "aerobic": [
      "60 分鐘有氧。",
      "穩定巡航。",
      "6:40–7:15/km",
      "心率穩。"
    ],
    "speed": [
      "3×8 分鐘馬拉松努力度。",
      "組間 4 分恢復。",
      "約 6:30–7:00/km",
      "練控制。"
    ],
    "lsd": [
      "22–24K。",
      "補給演練。",
      "6:55–7:45/km",
      "後段不爆。"
    ],
    "rest": [
      "1 天。",
      "恢復。",
      "不跑",
      "隔天 OK。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 10 週：延長耐受。",
    "recovery": [
      "30 分鐘。",
      "低強度。",
      "7:30–8:30/km",
      "恢復。"
    ],
    "easy": [
      "8K easy。",
      "不要 steady。",
      "6:50–7:35/km",
      "呼吸穩。"
    ],
    "aerobic": [
      "60 分鐘有氧。",
      "Zone 2。",
      "6:40–7:15/km",
      "穩定。"
    ],
    "speed": [
      "20 分鐘 controlled tempo。",
      "比馬拉松努力度快一點，但不爆。",
      "約 6:00–6:30/km",
      "隔天不鐵腿。"
    ],
    "lsd": [
      "24–26K。",
      "練補給與防磨。",
      "6:55–7:45/km",
      "後半穩。"
    ],
    "rest": [
      "1–2 天。",
      "長跑後可多休。",
      "不跑",
      "足底無怪感。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 11 週：接近高峰前的長距離。",
    "recovery": [
      "30 分鐘。",
      "恢復。",
      "7:30–8:30/km",
      "腿鬆。"
    ],
    "easy": [
      "8–9K easy。",
      "舒服。",
      "6:50–7:35/km",
      "不暴衝。"
    ],
    "aerobic": [
      "60–65 分鐘有氧。",
      "長有氧。",
      "6:40–7:15/km",
      "心率不飄。"
    ],
    "speed": [
      "4×6 分鐘馬拉松努力度。",
      "組間 3 分恢復。",
      "約 6:30–7:00/km",
      "穩定輸出。"
    ],
    "lsd": [
      "26–28K。",
      "保守，補給固定。",
      "6:55–7:45/km",
      "最後仍能跑。"
    ],
    "rest": [
      "1–2 天。",
      "恢復優先。",
      "不跑",
      "疲勞下降。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 12 週：恢復週。",
    "recovery": [
      "25–30 分鐘。",
      "超慢。",
      "7:40–8:40/km",
      "恢復。"
    ],
    "easy": [
      "6–7K easy。",
      "短。",
      "7:00–7:50/km",
      "輕鬆。"
    ],
    "aerobic": [
      "45 分鐘有氧。",
      "低心率。",
      "6:50–7:35/km",
      "不累。"
    ],
    "speed": [
      "跳過正式 speed。",
      "最多 strides。",
      "輕快即可",
      "保持腳感。"
    ],
    "lsd": [
      "18–20K。",
      "降量長跑。",
      "7:00–7:50/km",
      "恢復週不要貪。"
    ],
    "rest": [
      "1–2 天。",
      "睡眠補足。",
      "不跑",
      "身體充電。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 13 週：高峰前準備。",
    "recovery": [
      "30 分鐘。",
      "恢復跑。",
      "7:30–8:30/km",
      "腿鬆。"
    ],
    "easy": [
      "8K easy。",
      "慢。",
      "6:50–7:35/km",
      "能聊天。"
    ],
    "aerobic": [
      "60 分鐘有氧。",
      "穩定有氧。",
      "6:40–7:15/km",
      "心率穩。"
    ],
    "speed": [
      "3×10 分鐘馬拉松努力度。",
      "組間 5 分恢復。",
      "約 6:30–7:00/km",
      "練節奏。"
    ],
    "lsd": [
      "28–30K。",
      "完整演練補給。",
      "6:55–7:45/km",
      "後半不崩。"
    ],
    "rest": [
      "1–2 天。",
      "長跑前後都要顧恢復。",
      "不跑",
      "足底 OK。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 14 週：最大長跑週。",
    "recovery": [
      "30 分鐘。",
      "恢復。",
      "7:30–8:30/km",
      "跑完舒服。"
    ],
    "easy": [
      "7–8K easy。",
      "減少額外疲勞。",
      "6:55–7:40/km",
      "不快。"
    ],
    "aerobic": [
      "50–55 分鐘有氧。",
      "維持即可。",
      "6:45–7:25/km",
      "不累積疲勞。"
    ],
    "speed": [
      "8×1 分鐘輕快。",
      "保守，不 all out。",
      "5:30–6:00/km",
      "只是保持速度感。"
    ],
    "lsd": [
      "30–32K。",
      "最大長跑，補給照比賽。",
      "7:00–7:50/km",
      "完成且不受傷。"
    ],
    "rest": [
      "1–2 天。",
      "最大長跑後優先恢復。",
      "不跑",
      "疲勞下降。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 15 週：Taper 開始。",
    "recovery": [
      "25–30 分鐘。",
      "恢復。",
      "7:40–8:40/km",
      "腿鬆。"
    ],
    "easy": [
      "6–7K easy。",
      "輕鬆。",
      "7:00–7:45/km",
      "不累。"
    ],
    "aerobic": [
      "40–45 分鐘有氧。",
      "保持習慣。",
      "6:50–7:30/km",
      "心率穩。"
    ],
    "speed": [
      "2×8 分鐘馬拉松努力度。",
      "不是硬課。",
      "約 6:30–7:00/km",
      "跑完清爽。"
    ],
    "lsd": [
      "20–22K。",
      "明顯降量。",
      "7:00–7:50/km",
      "保留信心。"
    ],
    "rest": [
      "1–2 天。",
      "多睡。",
      "不跑",
      "腿回彈。"
    ]
  },
  {
    "phase": "COROS Marathon Block",
    "goal": "COROS 第 16 週：Race Week。",
    "recovery": [
      "15–20 分鐘。",
      "鬆腿。",
      "7:40–8:40/km",
      "跑完更想跑。"
    ],
    "easy": [
      "3–5K easy。",
      "非常輕鬆。",
      "7:00–7:50/km",
      "完全不累。"
    ],
    "aerobic": [
      "20–30 分鐘有氧。",
      "可做可不做。",
      "7:00–7:50/km",
      "保持活動。"
    ],
    "speed": [
      "3–4×20 秒 strides。",
      "喚醒，不累。",
      "輕快即可",
      "小腿不緊。"
    ],
    "lsd": [
      "42.195K 長榮馬。",
      "前半保守，補給固定，30K 後穩住。",
      "Sub5 約 7:06/km；前半可抓 7:10–7:25/km",
      "健康完賽。"
    ],
    "rest": [
      "多休息。",
      "睡眠、補水、整理裝備。",
      "不跑",
      "站上起跑線時是新的。"
    ]
  }
];

const weekTitle=document.getElementById("weekTitle");
const weekRange=document.getElementById("weekRange");
const weekGoal=document.getElementById("weekGoal");
const phaseLabel=document.getElementById("phaseLabel");
const cards=document.getElementById("cards");
const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");
const resetBtn=document.getElementById("resetBtn");
const note=document.getElementById("note");
const rpe=document.getElementById("rpe");
const calf=document.getElementById("calf");
const foot=document.getElementById("foot");
const overpace=document.getElementById("overpace");
const saveNote=document.getElementById("saveNote");
const saveMsg=document.getElementById("saveMsg");

let current=Number(localStorage.getItem("currentWeek")||0);
current=Math.min(Math.max(current,0),plan.length-1);

function addDays(d,days){const x=new Date(d);x.setDate(x.getDate()+days);return x}
function fmt(d){return `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,"0")}/${String(d.getDate()).padStart(2,"0")}`}
function noteKey(){return `note-week-${current}`}
function doneKey(type){return `done-week-${current}-${type}`}
function titleFor(type){return {recovery:"恢復跑",easy:"輕鬆跑",aerobic:"有氧耐力跑",speed:"速度 / 間歇",lsd:"LSD 長距離慢跑",rest:"休息"}[type]}

function render(){
 const week=plan[current];
 const start=addDays(START_DATE,current*7);
 const end=addDays(start,6);
 phaseLabel.textContent=week.phase;
 weekTitle.textContent=`Week ${current+1}`;
 weekRange.textContent=`${fmt(start)} - ${fmt(end)}`;
 weekGoal.textContent=week.goal;
 cards.innerHTML="";
 Object.keys(typeLabels).forEach(type=>{
   const [coros,mine,pace,finish]=week[type];
   const isDone=localStorage.getItem(doneKey(type))==="1";
   const card=document.createElement("article");
   card.className=`training-card ${type}`;
   card.innerHTML=`
    <span class="badge">${typeLabels[type]}</span>
    <h3>${titleFor(type)}</h3>
    <div class="block"><div class="block-title">COROS 方向</div><p>${coros}</p></div>
    <div class="block"><div class="block-title">我的建議</div><p>${mine}</p></div>
    <div class="block"><div class="block-title">建議配速 / 體感</div><p class="pace-box">${pace}</p></div>
    <div class="block"><div class="block-title">完成條件</div><p>${finish}</p></div>
    <button class="complete ${isDone ? "done" : ""}" data-type="${type}">${isDone ? "已完成" : "標記完成"}</button>
   `;
   cards.appendChild(card);
 });
 const saved=JSON.parse(localStorage.getItem(noteKey())||"{}");
 note.value=saved.note||"";
 rpe.value=saved.rpe||"";
 calf.value=saved.calf||"";
 foot.value=saved.foot||"";
 overpace.checked=Boolean(saved.overpace);
 localStorage.setItem("currentWeek",current);
}

cards.addEventListener("click",e=>{
 if(!e.target.classList.contains("complete"))return;
 const type=e.target.dataset.type;
 const key=doneKey(type);
 localStorage.setItem(key,localStorage.getItem(key)==="1"?"0":"1");
 render();
});
prevBtn.addEventListener("click",()=>{current=Math.max(0,current-1);render()});
nextBtn.addEventListener("click",()=>{current=Math.min(plan.length-1,current+1);render()});
saveNote.addEventListener("click",()=>{
 localStorage.setItem(noteKey(),JSON.stringify({note:note.value,rpe:rpe.value,calf:calf.value,foot:foot.value,overpace:overpace.checked}));
 saveMsg.textContent="已儲存。";
 setTimeout(()=>saveMsg.textContent="",1600);
});
resetBtn.addEventListener("click",()=>{
 if(confirm("確定清除所有紀錄？")){
   localStorage.clear();
   current=0;
   render();
 }
});
render();
