const players=[
{name:"ياسين بونو",number:37,pos:"حراسة",role:"حارس مرمى",img:"https://contentfulproxy.stadion.io/eyc25wndlima/4GwmVFVEsFa492rwJVl1e1/98b80761841ad382ae659b79f5ae2efa/Yassine_Bounou.png?f=top&fit=fill&fm=webp&h=900&w=600"},
{name:"محمد الربيعي",number:17,pos:"حراسة",role:"حارس مرمى",img:"https://alhilal.com"},
{name:"محمد العويس",number:33,pos:"حراسة",role:"حارس مرمى",img:"https://alhilal.com"},
{name:"كاليدو كوليبالي",number:3,pos:"دفاع",role:"قلب دفاع",img:"https://contentfulproxy.stadion.io/eyc25wndlima/ScAjHfBp0OAeTGtYmaxSY/35053b8bce27db723c6db4c4c93a217a/_Kalidou_Koulibaly.png?f=top&fit=fill&fm=webp&h=900&w=600"},
{name:"يوسف أكتشيشيك",number:4,pos:"دفاع",role:"مدافع",img:"https://alhilal.com"},
{name:"ثيو هيرنانديز",number:19,pos:"دفاع",role:"ظهير أيسر",img:"https://alhilal.com"},
{name:"متعب الحربي",number:24,pos:"دفاع",role:"ظهير",img:"https://alhilal.com"},
{name:"حسان تمبكتي",number:87,pos:"دفاع",role:"قلب دفاع",img:"https://alhilal.com"},
{name:"روبن نيفيز",number:8,pos:"وسط",role:"وسط",img:"https://contentfulproxy.stadion.io/eyc25wndlima/46OW5QMumRwaU0ODCsoS2z/c6a15ff60f9f78a62d49ecb6213f1d6e/439aa2d3-4e31-4f12-a0d2-81e1287627e6.png?f=top&fit=fill&fm=webp&h=900&w=600"},
{name:"سيرجي سافيتش",number:22,pos:"وسط",role:"وسط",img:"https://contentfulproxy.stadion.io/eyc25wndlima/7xlT1AModQqR47WKnsB6RA/7930ebb7df346c113c7890f33c46a986/_Murad_Al-Hawsawi.png?f=top&fit=fill&fm=webp&h=900&w=600"},
{name:"محمد كنو",number:28,pos:"وسط",role:"وسط",img:"https://alhilal.com"},
{name:"ناصر الدوسري",number:6,pos:"وسط",role:"وسط",img:"https://alhilal.com"},
{name:"مراد الهوساوي",number:18,pos:"وسط",role:"وسط",img:"https://contentfulproxy.stadion.io/eyc25wndlima/7xlT1AModQqR47WKnsB6RA/7930ebb7df346c113c7890f33c46a986/_Murad_Al-Hawsawi.png?f=top&fit=fill&fm=webp&h=900&w=600"},
{name:"غابرييل مارتينيلي",number:7,pos:"هجوم",role:"جناح",img:"https://contentfulproxy.stadion.io/eyc25wndlima/29XqhDDeCM0bz1tVDyYUia/ca39f1b799a373b290a67f2f48ac170a/AlHilal_Players_s2026_Martinelli.png?f=top&fit=fill&fm=webp&h=900&w=600"},
{name:"أولي واتكينز",number:11,pos:"هجوم",role:"مهاجم",img:"https://contentfulproxy.stadion.io/eyc25wndlima/2B8W2VayiTDRDD21mwoI0t/505f9009b69f875b7b1c3a100a34b71b/AlHilal_Players_s2026.png?f=top&fit=fill&fm=webp&h=900&w=600"},
{name:"سالم الدوسري",number:29,pos:"هجوم",role:"جناح وقائد",img:"https://contentfulproxy.stadion.io/eyc25wndlima/5vnkdADwRaBoloY06H2tn6/302259719a80a21bfb2aa947e607b258/Salem_Al-Dawsari.png?f=top&fit=fill&fm=webp&h=900&w=600"},
{name:"كريسينسيو سومرفيل",number:38,pos:"هجوم",role:"جناح",img:"https://contentfulproxy.stadion.io/eyc25wndlima/6fh2USFPm8x9TBwVR6u61i/69869bac1b93b75ed4075f033da7a23b/_Sumerfiel.png?f=top&fit=fill&fm=webp&h=900&w=600"},
{name:"محمد ميتي",number:75,pos:"هجوم",role:"مهاجم",img:"https://alhilal.com"}
];
const fallbackAvatar="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 350'%3E%3Crect width='300' height='350' fill='%230d3159'/%3E%3Ccircle cx='150' cy='105' r='55' fill='%235aaeff' opacity='.65'/%3E%3Cpath d='M55 330q8-140 95-140t95 140' fill='%235aaeff' opacity='.65'/%3E%3Ctext x='150' y='315' font-size='18' fill='white' text-anchor='middle' font-family='Arial'>AL HILAL</text%3E%3C/svg%3E";
function renderPlayers(filter="all",query=""){const grid=document.getElementById("playersGrid");const list=players.filter(p=>(filter==="all"||p.pos===filter)&&p.name.includes(query.trim()));grid.innerHTML=list.map(p=>`<article class="player-card"><span class="player-number">${String(p.number).padStart(2,"0")}</span><div class="player-photo"><img loading="lazy" src="${p.img}" alt="${p.name}" onerror="this.src='${fallbackAvatar}'"></div><div class="player-info"><h3>${p.name}</h3><span>${p.role} · ${p.pos}</span><p>الفريق الأول · موسم 2026/27</p></div></article>`).join("")||"<p>ما لقينا لاعب بهذا الاسم.</p>";}
let currentFilter="all";renderPlayers();document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>{document.querySelector(".tab.active").classList.remove("active");b.classList.add("active");currentFilter=b.dataset.filter;renderPlayers(currentFilter,document.getElementById("playerSearch").value)}));document.getElementById("playerSearch").addEventListener("input",e=>renderPlayers(currentFilter,e.target.value));
const fixtures=[
["07","نوفمبر 2026","الاتفاق","دوري","17:30","خارج الأرض"],
["20","نوفمبر 2026","الدرعية","دوري","20:00","مباراة دوري روشن"],
["23","نوفمبر 2026","نيفتشي الأوزبكي","آسيا","16:45","دوري أبطال آسيا للنخبة"],
["26","نوفمبر 2026","الخلود","دوري","20:00","دوري روشن"],
["30","نوفمبر 2026","الحزم","دوري","20:00","كأس الملك · دور 16"],
["03","ديسمبر 2026","أبها","دوري","20:00","دوري روشن"],
["07","ديسمبر 2026","العين الإماراتي","آسيا","21:15","دوري أبطال آسيا للنخبة"],
["10","ديسمبر 2026","النصر","دوري","20:00","دوري روشن"],
["14","ديسمبر 2026","الفيصلي","دوري","20:00","دوري روشن"],
["19","ديسمبر 2026","الرياض","دوري","17:45","دوري روشن"],
["09","فبراير 2027","الوصل الإماراتي","آسيا","19:00","دوري أبطال آسيا للنخبة"],
["15","فبراير 2027","باختاكور","آسيا","21:15","دوري أبطال آسيا للنخبة"]
];
function renderFixtures(comp="all"){document.getElementById("fixturesList").innerHTML=fixtures.filter(f=>comp==="all"||f[3]===comp).map(f=>`<article class="fixture-row"><div class="fixture-date"><strong>${f[0]}</strong><small>${f[1]}</small></div><div class="fixture-teams"><span>الهلال</span><span class="vs">VS</span><span class="opponent">${f[2]}</span></div><div class="fixture-comp">${f[5]}<small>${f[3]==="آسيا"?"AFC CHAMPIONS LEAGUE ELITE":"ROSHN SAUDI LEAGUE"}</small></div><div class="fixture-time">${f[4]} <small>بتوقيت السعودية</small></div></article>`).join("");}
renderFixtures();document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelector(".filter.active").classList.remove("active");b.classList.add("active");renderFixtures(b.dataset.comp)}));
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
const questions=[
["في أي عام تأسس نادي الهلال؟",["1957","1958","1960","1954"],0],
["ما الاسم السابق الذي عُرف به النادي عند تأسيسه؟",["الأولمبي","الرياض","الشباب","اليمامة"],0],
["كم مرة حقق الهلال دوري أبطال آسيا؟",["3","4","5","6"],1],
["في أي عام حقق الهلال أول لقب آسيوي للأندية؟",["1988","1991","1996","2000"],1],
["من هو الهداف السعودي الملقب بالقناص؟",["سامي الجابر","نواف التمياط","ياسر القحطاني","يوسف الثنيان"],2],
["من هو قائد الهلال الحالي في قائمة 2026/27؟",["سالم الدوسري","روبن نيفيز","محمد كنو","بونو"],0],
["ما الملعب الذي يستضيف مباريات الهلال البيتية حالياً؟",["الأول بارك","المملكة أرينا","الجوهرة","استاد الملك فهد"],1],
["كم لقب دوري سعودي يملكه الهلال وفق سجل النادي؟",["18","19","20","21"],3],
["من حارس الهلال المغربي في الموسم الحالي؟",["محمد العويس","ياسين بونو","محمد الربيعي","عبدالله المعيوف"],1],
["من المدرب الذي يقود الهلال في موسم 2026/27؟",["جورجي جيسوس","سيموني إنزاغي","رامون دياز","لوران بلان"],1],
["في أي عام فاز الهلال بلقب آسيا الثاني؟",["1996","2000","2002","2019"],1],
["من اللاعب الذي اشتهر بلقب الفتى الذهبي؟",["نواف التمياط","سامي الجابر","ياسر القحطاني","محمد الشلهوب"],0],
["ما جنسية روبن نيفيز؟",["فرنسي","برتغالي","صربي","إسباني"],1],
["ما مركز كاليدو كوليبالي؟",["حارس","مهاجم","مدافع","جناح"],2],
["أي بطولة فاز بها الهلال في 2021؟",["دوري أبطال آسيا","كأس العالم للأندية","كأس الخليج","كأس العرب"],0],
["كم مرة حقق الهلال كأس ولي العهد؟",["9","10","12","13"],3],
["من اللاعب الهلالي الذي سجل هدفاً تاريخياً أمام الأرجنتين في كأس العالم 2022؟",["سالم الدوسري","محمد كنو","صالح الشهري","سلمان الفرج"],0],
["ما لقب نادي الهلال الشهير؟",["العميد","الزعيم","العالمي","الراقي"],1],
["أي لاعب من التالي يلعب في مركز الوسط؟",["سيرجي سافيتش","ياسين بونو","أولي واتكينز","ثيو هيرنانديز"],0],
["كم كأس سوبر سعودي حقق الهلال وفق سجله الرسمي؟",["3","4","5","6"],2],
["من أساطير الهلال الملقب بالذئب؟",["سامي الجابر","يوسف الثنيان","نواف التمياط","ياسر القحطاني"],0],
["في أي عام تأسس الهلال؟",["1947","1957","1967","1977"],1],
["من اللاعب الذي يحمل الرقم 8 في قائمة الموسم الحالي؟",["محمد كنو","روبن نيفيز","سالم الدوسري","سافيتش"],1],
["ما اسم البطولة القارية التي ينافس فيها الهلال حالياً؟",["كأس الاتحاد الآسيوي","دوري أبطال آسيا للنخبة","كأس الخليج","كأس العرب"],1],
["كم لقب كأس ملك يذكر سجل الهلال الرسمي؟",["8","9","10","11"],2],
["من اللاعب البرازيلي في خط هجوم الهلال الحالي؟",["غابرييل مارتينيلي","أولي واتكينز","سومرفيل","محمد ميتي"],0],
["أي من هؤلاء حارس مرمى سابق للهلال؟",["محمد الدعيع","ماجد عبدالله","فهد الهريفي","سعيد العويران"],0],
["ما اسم ملعب الهلال الحالي؟",["ملعب الإنماء","المملكة أرينا","استاد الأمير محمد بن فهد","مدينة الملك عبدالله"],1],
["في أي عام توج الهلال بدوري أبطال آسيا للمرة الرابعة؟",["2017","2019","2020","2021"],3],
["ما العبارة التي تلخص روح جمهور الهلال؟",["الأزرق أسلوب حياة","لا شيء مستحيل","الكرة للجميع","نلعب للمتعة"],0]
];
let qIndex=0,score=0,chosen=false;
const qText=document.getElementById("questionText"),answers=document.getElementById("answers"),next=document.getElementById("nextQuestion");
function showQuestion(){chosen=false;const q=questions[qIndex];document.getElementById("quizCounter").textContent=`السؤال ${qIndex+1} من ${questions.length}`;document.getElementById("liveScore").textContent=score;document.getElementById("progressBar").style.width=((qIndex)/questions.length*100)+"%";qText.textContent=q[0];answers.innerHTML=q[1].map((a,i)=>`<button class="answer" data-index="${i}"><span>${["A","B","C","D"][i]}</span>　${a}</button>`).join("");document.getElementById("answerFeedback").textContent="";next.disabled=true;answers.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>selectAnswer(+b.dataset.index)));}
function selectAnswer(i){if(chosen)return;chosen=true;const correct=questions[qIndex][2];answers.querySelectorAll("button").forEach((b,j)=>{b.disabled=true;if(j===correct)b.classList.add("correct");else if(j===i)b.classList.add("wrong");});if(i===correct){score++;document.getElementById("answerFeedback").textContent="إجابة صحيحة! 💙";}else document.getElementById("answerFeedback").textContent="مو مشكلة، الجواب الصحيح باللون الأخضر.";document.getElementById("liveScore").textContent=score;next.disabled=false;next.textContent=qIndex===questions.length-1?"اعرف نتيجتك":"السؤال التالي ←";}
function finishQuiz(){document.getElementById("quizStage").hidden=true;document.getElementById("quizResult").hidden=false;document.getElementById("progressBar").style.width="100%";document.getElementById("finalScore").textContent=score+"/30";let title,msg;if(score>=27){title="هلالي أسطوري! 👑";msg="مستوى يليق بكبير آسيا.. معلوماتك زرقاء من الطراز الأول."}else if(score>=21){title="هلالي أصيل! 💙";msg="ما شاء الله عليك، تعرف تاريخ الزعيم وتفاصيله."}else if(score>=14){title="هلالي واعد!";msg="عندك أساس ممتاز.. راجع البطولات والنجوم وارجع للتحدي."}else{title="بداية المشوار!";msg="كل هلالي يبدأ من الشغف.. خذ جولة في الموقع وجرب مرة ثانية."}document.getElementById("resultTitle").textContent=title;document.getElementById("resultMessage").textContent=msg;}
next.addEventListener("click",()=>{if(qIndex<questions.length-1){qIndex++;showQuestion()}else finishQuiz()});document.getElementById("restartQuiz").addEventListener("click",()=>{qIndex=0;score=0;document.getElementById("quizStage").hidden=false;document.getElementById("quizResult").hidden=true;next.textContent="السؤال التالي ←";showQuestion()});showQuestion();

// Interactive additions: museum timeline, match-night mood, fan card and prediction room.
const museumStops={
  "1957":{tag:"THE BEGINNING",title:"ولادة زعيم",text:"بدأت الحكاية في الرياض عام 1957، ومن البدايات تشكّلت هوية نادٍ صار اسمه حاضرًا في ذاكرة الكرة السعودية والآسيوية."},
  "1991":{tag:"FIRST ASIAN CROWN",title:"أول عرش آسيوي",text:"تُوّج الهلال بلقبه الآسيوي الأول عام 1991، وبدأت رحلة الزعامة القارية التي صنعت مكانته بين كبار القارة."},
  "2000":{tag:"THE CONTINENTAL RETURN",title:"عودة إلى القمة",text:"عاد الهلال إلى منصة آسيا عام 2000، مؤكّدًا أن حضوره القاري ليس لحظة عابرة بل تاريخ يتجدد."},
  "2019":{tag:"A NIGHT TO REMEMBER",title:"ليلة المجد في 2019",text:"حصد الهلال لقب دوري أبطال آسيا 2019 بعد مشوار قوي، وعاد إلى واجهة الكرة الآسيوية."},
  "2021":{tag:"FOURTH STAR",title:"النجمة الآسيوية الرابعة",text:"في 2021 أضاف الهلال لقبًا آسيويًا جديدًا إلى خزائنه، وواصل كتابة فصول المجد الأزرق."}
};
document.querySelectorAll('.museum-year').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.museum-year').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
  const stop=museumStops[btn.dataset.year];document.getElementById('museumEra').textContent=stop.tag;document.getElementById('museumYear').textContent=btn.dataset.year;document.getElementById('museumTitle').textContent=stop.title;document.getElementById('museumDescription').textContent=stop.text;
}));
const chants=['يا هلال.. يا زعيم آسيا 💙','أزرق.. أزرق.. عالي عالي!','من الرياض لآسيا.. الهلال حكاية 💙'];let chantIndex=0;
document.getElementById('chantButton')?.addEventListener('click',()=>{document.getElementById('chantLine').textContent=chants[chantIndex%chants.length];chantIndex++;});
document.getElementById('makeFanCard')?.addEventListener('click',()=>{
  const name=document.getElementById('fanName').value.trim()||'مشجع الهلال';const title=document.getElementById('fanTitle').value;const result=document.getElementById('fanCardResult');
  result.innerHTML=`<small>BLUEVERSE FAN CARD · 1957</small><b>${name.replace(/[<>]/g,'')}</b><span>${title}</span><small>AL HILAL · FOREVER BLUE</small>`;result.hidden=false;
});
document.querySelectorAll('.captain-option').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.captain-option').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');document.getElementById('selectedCaptain').textContent=btn.dataset.captain;}));
document.getElementById('savePrediction')?.addEventListener('click',()=>{
  const home=Math.max(0,Math.min(20,Number(document.getElementById('homeGoals').value)||0));const away=Math.max(0,Math.min(20,Number(document.getElementById('awayGoals').value)||0));
  document.getElementById('predictionFeedback').textContent=`تم تثبيت توقعك: الهلال ${home} - ${away} الخصم. الأزرق قدّها! 💙`;
});
const memories=[
  {tag:'ASIA 1991',title:'أول المجد القاري',text:'الهلال يفتح صفحة ذهبية في تاريخه الآسيوي ويتوج بلقبه القاري الأول.'},
  {tag:'ASIA 2000',title:'الزعيم يعود للعرش',text:'لقب آسيوي ثانٍ يرسّخ حضور الهلال في أكبر منافسات القارة.'},
  {tag:'ASIA 2019',title:'ليلة الذهب الأزرق',text:'الهلال يحسم النهائي ويعود ببطولة دوري أبطال آسيا إلى الرياض.'},
  {tag:'ASIA 2021',title:'الرابعة.. زعامة متجددة',text:'إنجاز قاري جديد يضيف فصلًا آخر إلى سجل الهلال الكبير.'}
];let memoryIndex=0;
function showMemory(){const m=memories[memoryIndex];document.getElementById('memoryTag').textContent=m.tag;document.getElementById('memoryHeadline').textContent=m.title;document.getElementById('memoryText').textContent=m.text;document.getElementById('memoryCount').textContent=`0${memoryIndex+1} / 04`;}
document.getElementById('memoryPrev')?.addEventListener('click',()=>{memoryIndex=(memoryIndex+memories.length-1)%memories.length;showMemory();});
document.getElementById('memoryNext')?.addEventListener('click',()=>{memoryIndex=(memoryIndex+1)%memories.length;showMemory();});

// Optional, locally generated UI sound effects (no external audio or autoplay).
(()=>{let enabled=false,ctx=null;const toggle=document.getElementById('soundToggle'),status=document.getElementById('soundStatus');function chirp(){if(!enabled)return;try{ctx=ctx||new(window.AudioContext||window.webkitAudioContext)();const o=ctx.createOscillator(),g=ctx.createGain();o.type='sine';o.frequency.setValueAtTime(660,ctx.currentTime);o.frequency.exponentialRampToValueAtTime(990,ctx.currentTime+.09);g.gain.setValueAtTime(.035,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.16);o.connect(g);g.connect(ctx.destination);o.start();o.stop(ctx.currentTime+.17)}catch(e){}}if(toggle){toggle.addEventListener('click',()=>{enabled=!enabled;toggle.setAttribute('aria-pressed',String(enabled));toggle.textContent=enabled?'إيقاف مؤثرات الموقع ♫':'تشغيل مؤثرات الموقع ♫';status.textContent=enabled?'المؤثرات مفعّلة':'الصوت متوقف';if(enabled)chirp()});document.addEventListener('click',e=>{if(enabled&&e.target.closest('button'))chirp()})}})();
