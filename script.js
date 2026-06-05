const questions = [
    { text: "Bacalah kutipan berikut: 'Hamparan sawah membentang luas seperti permadani hijau. Bulir-bulir padi menunduk, siap menyapa para petani yang datang.' Kesan yang ditimbulkan dari teks deskripsi tersebut adalah...",
        options: ["Menyedihkan", "Menakutkan", "Damai dan asri", "Ramai dan hiruk-pikuk"],
        answer: 2,
        feedback: "Tepat! Kata 'permadani hijau' dan 'menunduk siap menyapa' menciptakan suasana yang damai dan asri." },
    { text: "Perhatikan kalimat berikut: 'Ombak bergulung-gulung saling berkejaran menuju tepi pantai, menghempas pasir putih dengan suara gemuruh.' Kalimat tersebut dominan membangkitkan citraan (pengindraan)...",
        options: ["Penglihatan dan perabaan", "Penglihatan dan pendengaran", "Pendengaran dan penciuman", "Perabaan dan penciuman"], 
        answer: 1, 
        feedback: "Benar! 'Bergulung-gulung' adalah penglihatan, dan 'suara gemuruh' adalah pendengaran." },
    { text: "Seorang siswa ingin menulis teks deskripsi tentang 'Kucing Persia'. Manakah rincian bagian yang TIDAK relevan untuk dimasukkan ke dalam teks tersebut?", 
        options: ["Warna dan ketebalan bulunya", "Bentuk hidung dan wajahnya", "Sejarah penemuan benua Asia", "Tingkah laku dan kebiasaannya"], 
        answer: 2, 
        feedback: "Tepat! Sejarah benua Asia tidak relevan dengan deskripsi fisik atau sifat kucing Persia." },
    { text: "Kalimat manakah yang menunjukkan deskripsi subjektif (mengandung pendapat/perasaan penulis)?", 
        options: ["Meja itu terbuat dari kayu jati dengan ukuran 2x1 meter.", "Ruangan ini dicat dengan warna putih bersih.", "Pemandangan dari atas bukit ini sungguh menakjubkan dan menenangkan jiwa.", "Terdapat lima buah kursi di dalam ruangan tersebut."], 
        answer: 2, 
        feedback: "Benar! Kata 'menakjubkan' dan 'menenangkan jiwa' adalah opini atau perasaan penulis." },
    { text: "Bacalah teks berikut: (1) Halaman sekolah kami sangat luas. (2) Di tengahnya terdapat lapangan basket. (3) Banyak siswa yang suka bermain bola di sana saat istirahat. (4) Di pinggir lapangan tumbuh pohon beringin yang rindang. Kalimat yang merupakan deskripsi spasial (ruang/tempat) adalah nomor...", 
        options: ["(1) dan (3)", "(2) dan (4)", "(1) dan (4)", "(2) dan (3)"], 
        answer: 1, 
        feedback: "Tepat! Kalimat (2) dan (4) menunjukkan letak ruang ('Di tengahnya' dan 'Di pinggir lapangan')." },
    { text: "Jika kamu diminta menulis bagian 'Identifikasi' tentang Gunung Bromo, kalimat pembuka yang paling tepat adalah...", 
        options: ["Di puncak Bromo, suhu udara sangat dingin hingga menusuk tulang.", "Gunung Bromo adalah salah satu gunung berapi aktif yang terletak di Jawa Timur, Indonesia.", "Asap belerang sering kali keluar dari kawahnya yang besar.", "Penduduk sekitar sering mengadakan upacara Kasada setiap tahunnya."], 
        answer: 1, 
        feedback: "Benar! Identifikasi berisi pengenalan umum objek (apa dan di mana)." },
    { text: "Perhatikan rincian berikut: 1) Berbulu lebat. 2) Suaranya nyaring. 3) Memiliki ekor panjang. 4) Suka makan biji-bijian. Objek yang paling tepat berdasarkan rincian tersebut adalah...", 
        options: ["Kucing", "Anjing", "Burung Kakatua", "Kelinci"], 
        answer: 2, 
        feedback: "Tepat! Ciri suka makan biji-bijian dan bersuara nyaring cocok untuk burung kakatua." },
    { text: "Manakah penggunaan majas personifikasi yang tepat untuk memperindah teks deskripsi tentang 'Angin Malam'?",
        options: ["Angin malam berhembus sangat kencang seperti badai.", "Angin malam bernyanyi lirih menyapu dedaunan kering di halaman.", "Udara malam ini terasa sangat dingin membekukan kulit.", "Angin malam berhembus dari arah utara menuju selatan."],
        answer: 1,
        feedback: "Benar! 'Bernyanyi lirih' adalah sifat manusia yang dikenakan pada angin (personifikasi)." },
    { text: "Dalam teks deskripsi, sering digunakan kata sifat bersinonim untuk memvariasikan kalimat. Sinonim dari kata 'indah' yang paling tepat untuk mendeskripsikan sebuah tarian adalah...",
        options: ["Tampan", "Gemulai", "Memukau", "Cantik"],
        answer: 2,
        feedback: "Tepat! Tarian lebih cocok dideskripsikan dengan 'memukau' atau 'menawan', sedangkan tampan/cantik untuk rupa fisik." },
    { text: "Cermati teks berikut: 'Ayahku adalah sosok yang pekerja keras. Kulitnya gelap karena sering terpapar sinar matahari. Tangan dan jarinya kasar, menandakan beratnya beban yang ia pikul setiap hari.' Tujuan penulis teks tersebut adalah...",
        options: ["Mengeluhkan kondisi ayahnya yang harus bekerja keras.", "Memberikan gambaran fisik dan sifat sang ayah secara mendalam.", "Menjelaskan cara ayahnya bekerja setiap hari.", "Menceritakan pengalaman ayah saat bekerja di luar ruangan."],
        answer: 1,
        feedback: "Benar! Penulis ingin menggambarkan ciri fisik dan karakter (pekerja keras) ayahnya." },
    { text: "Bacalah paragraf berikut: 'Pantai Parangtritis memiliki pesona yang luar biasa. Di sebelah kiri, terlihat tebing yang sangat tinggi. Di sebelah kanan, kita bisa melihat batu karang besar. [...].' Kalimat yang tepat untuk melengkapi deskripsi tersebut adalah...",
        options: ["Banyak wisatawan yang membeli suvenir di sana.", "Ombaknya yang besar terus-menerus menghantam karang tersebut.", "Perjalanan ke sana memakan waktu dua jam dari kota.", "Pemerintah daerah perlu memperbaiki jalan menuju pantai."],
        answer: 1,
        feedback: "Tepat! Kalimat tersebut melanjutkan deskripsi tentang keadaan fisik pantai, sesuai dengan kalimat sebelumnya." },
    { text: "Analisis kalimat berikut: 'Buku itu tebal dan berwarna merah.' Bagaimana cara mengubah kalimat ini menjadi deskripsi yang lebih rinci dan memikat?",
        options: ["Buku itu sangat tebal sekali dan warnanya sangat merah.", "Buku bersampul merah tua itu setebal bantal tidur, dengan ratusan halaman yang menguning.", "Buku itu berwarna merah dan memiliki banyak halaman.", "Saya suka buku merah yang tebal itu."],
        answer: 1,
        feedback: "Benar! Opsi ini memberikan gambaran konkret yang bisa dibayangkan pembaca (merah tua, setebal bantal, halaman menguning)." },
    { text: "Apa fungsi dari bagian 'Penutup / Kesan' dalam struktur teks deskripsi?",
        options: ["Untuk menyajikan rincian bagian objek secara spesifik.", "Untuk memperkenalkan latar belakang sejarah objek.", "Untuk menyampaikan simpulan atau perasaan akhir penulis terhadap objek.", "Untuk menyebutkan sumber informasi dari objek yang dideskripsikan."],
        answer: 2,
        feedback: "Tepat! Penutup berisi kesan pribadi atau simpulan penulis terhadap objek." },
    { text: "Jika sebuah teks mendeskripsikan 'Proses Terjadinya Hujan' langkah demi langkah, apakah teks tersebut termasuk teks deskripsi?",
        options: ["Ya, karena menggambarkan hujan.", "Tidak, karena teks tersebut lebih mementingkan urutan waktu/langkah (teks eksplanasi).", "Ya, karena pembaca bisa membayangkan hujan.", "Tidak, karena teks deskripsi hanya untuk benda mati."],
        answer: 1,
        feedback: "Benar! Teks yang fokus pada proses dan sebab-akibat adalah teks eksplanasi, bukan deskripsi yang fokus pada gambaran ruang/objek." },
    { text: "Kata hubung (konjungsi) yang sering muncul dalam teks deskripsi spasial untuk menunjukkan letak adalah...",
        options: ["Namun, sebaliknya, walaupun", "Di sebelah kanan, di tengah, di belakang", "Pertama, kedua, selanjutnya", "Oleh karena itu, sehingga, akibatnya"],
        answer: 1,
        feedback: "Tepat! Deskripsi spasial menggambarkan ruang/tempat, sehingga menggunakan penunjuk posisi." },
    { text: "Pilihlah kalimat yang mengandung kata berimbuhan dengan tepat dalam konteks teks deskripsi!",
        options: ["Pemandangan itu sangat mempesona hatiku.", "Pemandangan itu sangat memesona hatiku.", "Pemandangan itu sangat pesona hatiku.", "Pemandangan itu sangat dipesona hatiku."],
        answer: 1,
        feedback: "Benar! Kata dasar 'pesona' jika diberi awalan me- akan luluh menjadi 'memesona'." },
    { text: "Manakah dari judul berikut yang paling tepat untuk teks deskripsi objektif?",
        options: ["Buku Harian Rahasiaku", "Pesona Candi Borobudur yang Tak Terlupakan", "Laporan Hasil Observasi: Anatomi Bunga Sepatu", "Kucing Hitam yang Membawa Sial"],
        answer: 2,
        feedback: "Tepat! Anatomi Bunga Sepatu bersifat ilmiah dan objektif tanpa melibatkan perasaan penulis." },
    { text: "Kutipan: 'Aroma kopi yang baru diseduh menguar, bercampur dengan manisnya wangi roti bakar.' Indra yang paling dominan diaktifkan oleh kalimat ini adalah...",
        options: ["Penglihatan", "Pendengaran", "Penciuman", "Pengecapan"],
        answer: 2,
        feedback: "Benar! Kata 'aroma' dan 'wangi' merangsang indra penciuman pembaca." },
    { text: "Bandingkan dua kalimat berikut. (A) 'Gadis itu cantik.' (B) 'Gadis itu memiliki mata bulat bersinar, senyum berlesung pipit, dan rambut ikal yang tergerai.' Mengapa kalimat B lebih baik?",
        options: ["Karena kalimat B lebih panjang dari kalimat A.", "Karena kalimat B menceritakan tindakan gadis tersebut.", "Karena memuat rincian konkret yang mengonkretkan kata 'cantik'.", "Karena kalimat B menggunakan gaya bahasa yang rumit."],
        answer: 2,
        feedback: "Tepat! Kalimat B menjelaskan secara rinci seperti apa 'cantik' itu sehingga pembaca bisa membayangkannya." },
    { text: "Dalam teks deskripsi, kita sering menggunakan kata ganti penunjuk. Manakah kalimat yang menggunakan kata ganti penunjuk yang tepat?",
        options: ["Di sana terletak sebuah rumah tua.", "Dia adalah buku yang sangat bagus.", "Ini hari kita akan pergi ke taman.", "Mereka pemandangan yang indah."],
        answer: 0,
        feedback: "Benar! 'Di sana' menunjukkan lokasi/tempat yang sesuai untuk mendeskripsikan objek jarak jauh." },
    { text: "Manakah kalimat yang merupakan contoh deskripsi bagian dari objek 'Sekolah'?",
        options: ["Sekolahku adalah SMP Negeri 1 Harapan Bangsa.", "Sekolahku memiliki 15 ruang kelas, sebuah perpustakaan di sudut kiri, dan laboratorium di lantai dua.", "Aku sangat bangga bisa bersekolah di sini.", "Pemerintah membangun sekolah ini pada tahun 1980."],
        answer: 1,
        feedback: "Tepat! Kalimat tersebut merinci bagian-bagian spesifik dari lingkungan sekolah." },
    { text: "Teks yang menggambarkan objek berdasarkan apa yang dilihat, didengar, dan dirasakan penulis, tanpa ada niat untuk mengubah atau menambah fakta, disebut deskripsi...",
        options: ["Subjektif", "Saran", "Objektif", "Imajinatif"],
        answer: 2,
        feedback: "Benar! Deskripsi yang sesuai fakta tanpa opini pribadi disebut deskripsi objektif." },
    { text: "Cermati teks ini: 'Kelinciku bernama Boni. Bulunya seputih salju. Ia selalu melompat kegirangan saat diberi wortel.' Berdasarkan isinya, teks ini termasuk jenis deskripsi...",
        options: ["Spasial", "Waktu", "Orang", "Hewan"],
        answer: 3,
        feedback: "Tepat! Objek yang dideskripsikan adalah hewan peliharaan (kelinci)." },
    { text: "Apa kesalahan utama pada kalimat deskripsi berikut: 'Bunganya sangat besar sekali dan sangat harum banget.'?",
        options: ["Kalimatnya terlalu pendek.", "Pemborosan kata (pleonasme) karena menggunakan 'sangat', 'sekali', dan 'banget' bersamaan.", "Tidak menggunakan majas.", "Tidak menjelaskan warna bunga."],
        answer: 1,
        feedback: "Benar! Kata 'sangat', 'sekali', dan 'banget' bermakna sama, sehingga penggunaannya secara bersamaan tidak efektif." },
    { text: "Mengapa kemampuan merangkai kata (diksi) yang baik sangat penting dalam menulis teks deskripsi?",
        options: ["Agar teks terlihat panjang dan tebal.", "Agar pembaca kesulitan memahami teks.", "Agar penulis bisa menunjukkan kecerdasannya.", "Agar pembaca dapat merasakan seolah-olah melihat dan mengalami sendiri objek yang diceritakan."],
        answer: 3,
        feedback: "Tepat! Diksi yang tepat membantu menciptakan citraan (imaji) yang kuat di benak pembaca." }
];

let current = 0, score = 0, answered = false, timer = null, timeLeft = 20;
let benar = 0, salah = 0;

function startQuiz() {
    current = 0; score = 0; benar = 0; salah = 0;
    
    // Toggle displays
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-play').style.display = 'block';
    
    window.scrollTo(0, 0);
    
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    timeLeft = 20;
    const q = questions[current];
    
    document.getElementById('q-counter').textContent = (current + 1) + ' / 25';
    document.getElementById('prog-fill').style.width = ((current + 1) * 4) + '%';
    document.getElementById('q-tag').textContent = 'Soal ' + (current + 1);
    document.getElementById('q-text').textContent = q.text;
    document.getElementById('score-display').textContent = score;
    document.getElementById('timer-display').textContent = timeLeft;
    document.getElementById('timer-ring').classList.remove('timer-urgent');
    
    const fb = document.getElementById('feedback-box');
    fb.className = 'feedback-box';
    fb.textContent = '';
    
    document.getElementById('next-btn').className = 'next-btn';

    const ol = document.getElementById('options-list');
    ol.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = '<span class="option-letter">' + letters[i] + '</span>' + opt;
        btn.onclick = () => selectAnswer(i, btn);
        ol.appendChild(btn);
    });

    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').textContent = timeLeft;
        if (timeLeft <= 5) document.getElementById('timer-ring').classList.add('timer-urgent');
        if (timeLeft <= 0) { 
            clearInterval(timer); 
            if (!answered) timeUp(); 
        }
    }, 1000);
}

function selectAnswer(i) {
    if (answered) return;
    answered = true;
    clearInterval(timer);
    
    const q = questions[current];
    const btns = document.querySelectorAll('.option-btn');
    
    btns.forEach((b, idx) => {
        b.disabled = true;
        if (idx === q.answer) b.classList.add('correct');
        else if (idx === i && i !== q.answer) b.classList.add('wrong');
        else b.classList.add('dimmed');
    });
    
    const fb = document.getElementById('feedback-box');
    if (i === q.answer) {
        score += 4; benar++;
        fb.innerHTML = '<strong>✅ Tepat sekali!</strong><br>' + q.feedback;
        fb.className = 'feedback-box show correct-fb';
        if (typeof awardXP === 'function') awardXP(4);
    } else {
        salah++;
        fb.innerHTML = '<strong>❌ Kurang tepat.</strong><br>' + q.feedback;
        fb.className = 'feedback-box show wrong-fb';
    }
    
    document.getElementById('score-display').textContent = score;
    document.getElementById('next-btn').className = 'next-btn show';
}

function timeUp() {
    answered = true;
    const q = questions[current];
    const btns = document.querySelectorAll('.option-btn');
    
    btns.forEach((b, idx) => {
        b.disabled = true;
        if (idx === q.answer) b.classList.add('correct');
        else b.classList.add('dimmed');
    });
    
    salah++;
    const fb = document.getElementById('feedback-box');
    fb.innerHTML = '<strong>⏰ Waktu habis!</strong><br>Jawaban yang benar adalah: ' + q.options[q.answer];
    fb.className = 'feedback-box show wrong-fb';
    
    document.getElementById('next-btn').className = 'next-btn show';
}

function nextQuestion() {
    current++;
    if (current >= questions.length) {
        showResult();
    } else {
        loadQuestion();
    }
}

function showResult() {
    document.getElementById('quiz-play').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    
    document.getElementById('result-score-ring').innerHTML = score + '<br><span style="font-size:1rem; color: var(--text-muted); font-family: \'Inter\', sans-serif; font-weight: 500;">poin</span>';
    
    document.getElementById('res-benar').textContent = benar;
    document.getElementById('res-salah').textContent = salah;
    document.getElementById('res-skor').textContent = score;

    let title, sub, predikat;
    if (score === 100) { 
        if (typeof unlockBadge === 'function') unlockBadge('quiz_perfect');
        title = 'Luar Biasa! 🏆'; 
        sub = 'Panahmu tepat ke tengah sasaran!'; 
        predikat = 'Istimewa ⭐'; 
    } else if (score >= 80) { 
        title = 'Hebat! 🎯'; 
        sub = 'Hampir semua sasaran kena!'; 
        predikat = 'Sangat Baik'; 
    } else if (score >= 60) { 
        title = 'Bagus! 👍'; 
        sub = 'Terus berlatih untuk hasil lebih baik!'; 
        predikat = 'Baik'; 
    } else if (score >= 40) { 
        title = 'Cukup! 💪'; 
        sub = 'Baca lagi materinya ya!'; 
        predikat = 'Cukup'; 
    } else { 
        title = 'Semangat! 📚'; 
        sub = 'Pelajari materi dulu, lalu coba lagi!'; 
        predikat = 'Perlu Belajar Lagi'; 
    }

    document.getElementById('result-title').textContent = title;
    document.getElementById('result-sub').textContent = sub;
    document.getElementById('res-predikat').textContent = predikat;
    
    window.scrollTo(0, 0);
}

function resetQuiz() {
    document.getElementById('quiz-play').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-start').style.display = 'block';
    window.scrollTo(0, 0);
}


/* =====================================================
   XP & BADGE SYSTEM
   ===================================================== */

const LEVELS = [
    { name: 'Pemula',   emoji: '\ud83c\udf31', min: 0,   max: 50   },
    { name: 'Pelajar',  emoji: '\ud83d\udcda', min: 50,  max: 150  },
    { name: 'Cendekia', emoji: '\ud83c\udf93', min: 150, max: 300  },
    { name: 'Maestro',  emoji: '\ud83c\udf1f', min: 300, max: Infinity },
];

const BADGE_DEFS = [
    { id: 'first_scramble', icon: '\ud83d\udd24', name: 'Pemecah Kata',    desc: 'Menebak kata pertama di Word Scramble' },
    { id: 'all_scramble',   icon: '\ud83d\udd20', name: 'Ahli Bahasa',     desc: 'Selesaikan semua 10 kata tanpa skip/salah' },
    { id: 'memory_done',    icon: '\ud83c\udccf', name: 'Memory Master',   desc: 'Menyelesaikan permainan Memory Match' },
    { id: 'memory_fast',    icon: '\u26a1',        name: 'Lightning Brain', desc: 'Selesaikan Memory Match dalam \u226460 detik' },
    { id: 'drag_done',      icon: '\ud83c\udfaf', name: 'Ahli Struktur',   desc: 'Menyusun struktur teks deskripsi dengan benar' },
    { id: 'quiz_perfect',   icon: '\ud83c\udfc6', name: 'Panah Emas',      desc: 'Meraih skor sempurna 100 di kuis' },
    { id: 'xp_150',         icon: '\ud83c\udf93', name: 'Cendekia',        desc: 'Mencapai 150 XP total' },
    { id: 'xp_300',         icon: '\ud83c\udf1f', name: 'Maestro',         desc: 'Mencapai 300 XP total' },
];

function getXpData() {
    return {
        xp: parseInt(localStorage.getItem('pd_xp') || '0'),
        badges: JSON.parse(localStorage.getItem('pd_badges') || '[]'),
    };
}

function saveXpData(data) {
    localStorage.setItem('pd_xp', String(data.xp));
    localStorage.setItem('pd_badges', JSON.stringify(data.badges));
}

function getCurrentLevel(xp) {
    let idx = 0;
    for (let i = LEVELS.length - 1; i >= 0; i--) {
        if (xp >= LEVELS[i].min) { idx = i; break; }
    }
    return { ...LEVELS[idx], index: idx };
}

function awardXP(amount) {
    const data = getXpData();
    data.xp += amount;
    checkXpBadges(data);
    saveXpData(data);
    showXpToast('+' + amount + ' XP');
    updateXpUI();
}

function checkXpBadges(data) {
    if (data.xp >= 150 && !data.badges.includes('xp_150')) {
        data.badges.push('xp_150');
        setTimeout(() => showXpToast('\ud83c\udf93 Badge: Cendekia!'), 1200);
    }
    if (data.xp >= 300 && !data.badges.includes('xp_300')) {
        data.badges.push('xp_300');
        setTimeout(() => showXpToast('\ud83c\udf1f Badge: Maestro!'), 2000);
    }
}

function unlockBadge(id) {
    const data = getXpData();
    if (!data.badges.includes(id)) {
        data.badges.push(id);
        saveXpData(data);
        const badge = BADGE_DEFS.find(b => b.id === id);
        if (badge) setTimeout(() => showXpToast('\ud83c\udfc5 ' + badge.name + ' diraih!'), 800);
        updateXpUI();
    }
}

function showXpToast(msg) {
    const t = document.getElementById('xp-toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._hideTimer);
    t._hideTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

function updateXpUI() {
    const data = getXpData();
    const level = getCurrentLevel(data.xp);
    const nextLevel = LEVELS[level.index + 1];
    const progress = nextLevel
        ? Math.min(100, ((data.xp - level.min) / (level.max - level.min)) * 100)
        : 100;

    const setEl  = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
    const setW   = (id, w)   => { const e = document.getElementById(id); if (e) e.style.width = w; };

    // Fixed widget
    setEl('xp-widget-emoji', level.emoji);
    setEl('xp-widget-level', level.name);
    setEl('xp-widget-pts',   data.xp + ' XP');
    setW ('xp-widget-fill',  progress + '%');

    // Profile card in games section
    setEl('xp-emoji-main',   level.emoji);
    setEl('xp-level-main',   level.emoji + ' ' + level.name);
    setEl('xp-total-main',   data.xp);
    setW ('xp-track-fill',   progress + '%');
    setEl('xp-track-label',  nextLevel
        ? (data.xp - level.min) + ' / ' + (level.max - level.min) + ' XP ke level berikutnya'
        : 'Level Tertinggi tercapai! \ud83c\udf1f');

    // Mini badges strip
    const mini = document.getElementById('xp-badges-mini');
    if (mini) {
        mini.innerHTML = data.badges.map(id => {
            const b = BADGE_DEFS.find(b => b.id === id);
            return b ? '<span class="xp-badge-mini" title="' + b.name + '">' + b.icon + '</span>' : '';
        }).join('');
    }

    // Badge count on game card
    setEl('badge-earned-count', data.badges.length);

    // Badge modal header
    setEl('bdg-emoji', level.emoji);
    setEl('bdg-level', level.emoji + ' ' + level.name);
    setEl('bdg-xp',    data.xp);
}

function openGame(gameId) {
    const modal = document.getElementById('modal-' + gameId);
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (gameId === 'scramble') initScramble();
    if (gameId === 'memory')   initMemory();
    if (gameId === 'drag')     initDrag();
    if (gameId === 'badges')   renderBadges();
}

function closeGame(gameId) {
    const modal = document.getElementById('modal-' + gameId);
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
    if (gameId === 'scramble') clearInterval(scInterval);
    if (gameId === 'memory')   clearInterval(memInterval);
}


/* =====================================================
   WORD SCRAMBLE GAME
   ===================================================== */

const SC_WORDS = [
    { word: 'DESKRIPSI',       hint: 'Jenis teks yang menggambarkan suatu objek secara rinci' },
    { word: 'IDENTIFIKASI',    hint: 'Bagian pertama teks yang mengenalkan objek secara umum' },
    { word: 'PANCAINDRA',      hint: 'Lima alat perasa yang digunakan dalam mendeskripsikan objek' },
    { word: 'PERSONIFIKASI',   hint: 'Majas yang memberi sifat manusia pada benda mati' },
    { word: 'OBJEKTIF',        hint: 'Deskripsi berdasarkan fakta tanpa pendapat pribadi' },
    { word: 'SUBJEKTIF',       hint: 'Deskripsi berdasarkan kesan atau pendapat penulis' },
    { word: 'CITRAAN',         hint: 'Kesan indrawi yang ditimbulkan dari sebuah tulisan' },
    { word: 'DIKSI',           hint: 'Pilihan kata yang tepat dan sesuai dalam tulisan' },
    { word: 'MAJAS',           hint: 'Gaya bahasa yang digunakan untuk memperindah tulisan' },
    { word: 'SPASIAL',         hint: 'Deskripsi yang menggambarkan berdasarkan letak atau ruang' },
];

let scInterval = null, scTimeLeft = 30, scWordIdx = 0, scXpEarned = 0;
let scCurrentWord = '', scScrambled = [], scAnswer = [], scUsed = [];
let scAllCorrect = true, scWordList = [];

function shuffleArr(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function scrambleLetters(word) {
    const letters = word.split('');
    let result;
    let attempts = 0;
    do { result = shuffleArr(letters); attempts++; }
    while (result.join('') === word && attempts < 50);
    return result;
}

function initScramble() {
    scWordIdx = 0; scXpEarned = 0; scAllCorrect = true;
    scWordList = shuffleArr([...SC_WORDS]);
    document.getElementById('sc-game-body').style.display = '';
    document.getElementById('sc-result-body').style.display = 'none';
    loadScrambleWord();
}

function loadScrambleWord() {
    if (scWordIdx >= SC_WORDS.length) { clearInterval(scInterval); showScrambleResult(); return; }
    clearInterval(scInterval);
    scTimeLeft = 30;
    const wObj = scWordList[scWordIdx];
    scCurrentWord  = wObj.word;
    scScrambled    = scrambleLetters(scCurrentWord);
    scAnswer       = new Array(scCurrentWord.length).fill('');
    scUsed         = new Array(scScrambled.length).fill(false);

    const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
    set('sc-word-num', scWordIdx + 1);
    set('sc-xp-num',   scXpEarned);
    set('sc-timer',    scTimeLeft);
    set('sc-hint-text', wObj.hint);

    const clock = document.getElementById('sc-clock');
    if (clock) clock.className = 'sc-clock';
    setScFeedback('', null);
    renderScrambleTiles();

    scInterval = setInterval(() => {
        scTimeLeft--;
        set('sc-timer', scTimeLeft);
        if (scTimeLeft <= 5) { const cl = document.getElementById('sc-clock'); if (cl) cl.className = 'sc-clock urgent'; }
        if (scTimeLeft <= 0) {
            clearInterval(scInterval);
            scAllCorrect = false;
            setScFeedback('\u23f0 Waktu habis! Jawabannya: ' + scCurrentWord, false);
            setTimeout(() => { scWordIdx++; loadScrambleWord(); }, 1800);
        }
    }, 1000);
}

function renderScrambleTiles() {
    const sa = document.getElementById('sc-scrambled-area');
    if (!sa) return;
    sa.innerHTML = '';
    scScrambled.forEach((letter, i) => {
        const tile = document.createElement('div');
        tile.className = 'sc-tile' + (scUsed[i] ? ' used' : '');
        tile.textContent = letter;
        if (!scUsed[i]) tile.onclick = () => scPickLetter(i);
        sa.appendChild(tile);
    });
    const aa = document.getElementById('sc-answer-area');
    if (!aa) return;
    aa.innerHTML = '';
    scAnswer.forEach((letter, i) => {
        const slot = document.createElement('div');
        slot.className = 'sc-slot' + (letter ? ' filled' : '');
        slot.textContent = letter;
        if (letter) slot.onclick = () => scReturnLetter(i);
        aa.appendChild(slot);
    });
}

function scPickLetter(tileIdx) {
    if (scUsed[tileIdx]) return;
    const emptySlot = scAnswer.indexOf('');
    if (emptySlot === -1) return;
    scAnswer[emptySlot] = scScrambled[tileIdx];
    scUsed[tileIdx] = true;
    renderScrambleTiles();
}

function scReturnLetter(slotIdx) {
    const letter = scAnswer[slotIdx];
    if (!letter) return;
    const tileIdx = scScrambled.findIndex((l, i) => scUsed[i] && l === letter);
    if (tileIdx !== -1) scUsed[tileIdx] = false;
    scAnswer.splice(slotIdx, 1);
    scAnswer.push('');
    renderScrambleTiles();
}

function scClear() {
    scUsed   = new Array(scScrambled.length).fill(false);
    scAnswer = new Array(scCurrentWord.length).fill('');
    renderScrambleTiles();
    setScFeedback('', null);
}

function scSkip() {
    clearInterval(scInterval);
    scAllCorrect = false;
    setScFeedback('\u23ed Dilewati. Jawaban: ' + scCurrentWord, false);
    setTimeout(() => { scWordIdx++; loadScrambleWord(); }, 1500);
}

function scCheck() {
    const ans = scAnswer.join('');
    if (ans.includes('')) { setScFeedback('\u26a0\ufe0f Susun semua huruf dulu ya!', null); return; }
    clearInterval(scInterval);
    if (ans === scCurrentWord) {
        scXpEarned += 10;
        setScFeedback('\u2705 Benar! +10 XP', true);
        awardXP(10);
        if (scWordIdx === 0) unlockBadge('first_scramble');
        setTimeout(() => { scWordIdx++; loadScrambleWord(); }, 1100);
    } else {
        scAllCorrect = false;
        setScFeedback('\u274c Kurang tepat! Jawaban: ' + scCurrentWord, false);
        setTimeout(() => { scWordIdx++; loadScrambleWord(); }, 1800);
    }
}

function setScFeedback(msg, correct) {
    const fb = document.getElementById('sc-feedback');
    if (!fb) return;
    fb.textContent = msg;
    fb.className = 'sc-feedback ' + (correct === true ? 'sc-correct' : correct === false ? 'sc-wrong' : 'sc-neutral');
}

function showScrambleResult() {
    if (scAllCorrect && scXpEarned === 100) unlockBadge('all_scramble');
    updateXpUI();
    document.getElementById('sc-game-body').style.display = 'none';
    const rb = document.getElementById('sc-result-body');
    rb.style.display = '';
    const icon = scXpEarned >= 80 ? '🏆' : scXpEarned >= 50 ? '🎯' : '📚';
    const msg  = scXpEarned === 100 ? 'Sempurna! Kamu master kata kunci!'
               : scXpEarned >= 60  ? 'Bagus sekali! Terus berlatih!'
               : 'Pelajari lagi materinya ya!';
    rb.innerHTML = '<div class="sc-result"><div class="sc-result-icon">' + icon + '</div>' +
        '<div class="sc-result-title">Selesai!</div>' +
        '<div class="sc-result-xp">' + scXpEarned + ' / 100 XP</div>' +
        '<div class="sc-result-sub">' + msg + '</div>' +
        '<button class="btn-primary" onclick="initScramble()" style="margin:0 auto;">🔄 Main Lagi</button></div>';
}


/* =====================================================
   MEMORY MATCH GAME
   ===================================================== */

const MEM_PAIRS = [
    { term: 'Identifikasi',     def: 'Bagian awal yang mengenalkan objek secara umum kepada pembaca' },
    { term: 'Deskripsi Bagian', def: 'Rincian ciri-ciri dan karakteristik objek secara mendetail' },
    { term: 'Majas',            def: 'Gaya bahasa yang digunakan untuk memperindah teks deskripsi' },
    { term: 'Diksi',            def: 'Pilihan kata yang tepat dan indah dalam menulis deskripsi' },
    { term: 'Citraan',          def: 'Kesan indrawi yang ditimbulkan oleh tulisan deskripsi' },
    { term: 'Personifikasi',    def: 'Majas yang memberikan sifat manusia kepada benda atau makhluk lain' },
    { term: 'Objektif',         def: 'Deskripsi berdasarkan fakta, tanpa pendapat atau opini penulis' },
    { term: 'Penutup',          def: 'Bagian akhir berisi kesan pribadi atau simpulan penulis' },
];

let memInterval = null, memSeconds = 0, memMatchedCount = 0, memWrongCount = 0;
let memSelTerm = null, memSelDef = null, memLocked = false;

function initMemory() {
    clearInterval(memInterval);
    memSeconds = 0; memMatchedCount = 0; memWrongCount = 0;
    memSelTerm = null; memSelDef = null; memLocked = false;
    const oldResult = document.getElementById('mem-result-area');
    if (oldResult) oldResult.remove();
    const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
    set('mem-matched', '0'); set('mem-wrong', '0'); set('mem-time', '0');
    renderMemoryBoard();
    memInterval = setInterval(() => {
        memSeconds++;
        const e = document.getElementById('mem-time');
        if (e) e.textContent = memSeconds;
    }, 1000);
}

function renderMemoryBoard() {
    const board = document.getElementById('memory-board');
    if (!board) return;
    const shuffTerms = shuffleArr([...MEM_PAIRS]);
    const shuffDefs  = shuffleArr([...MEM_PAIRS]);
    board.innerHTML =
        '<div class="mem-col">' +
            '<div class="mem-col-header">\ud83d\udccc Istilah</div>' +
            shuffTerms.map(p =>
                '<div class="mem-card term" data-id="' + p.term + '" onclick="memPickTerm(this,\'' + p.term.replace(/'/g,"\\'")
                + '\')">\u200b' + p.term + '</div>').join('') +
        '</div>' +
        '<div class="mem-col">' +
            '<div class="mem-col-header">\ud83d\udcd6 Definisi</div>' +
            shuffDefs.map(p =>
                '<div class="mem-card def" data-id="' + p.term + '" onclick="memPickDef(this,\'' + p.term.replace(/'/g,"\\'")
                + '\')">\u200b' + p.def + '</div>').join('') +
        '</div>';
}

function memPickTerm(el, termId) {
    if (memLocked || el.classList.contains('matched')) return;
    document.querySelectorAll('.mem-card.term.selected').forEach(c => c.classList.remove('selected'));
    memSelTerm = termId;
    el.classList.add('selected');
    if (memSelDef !== null) checkMemMatch();
}

function memPickDef(el, termId) {
    if (memLocked || el.classList.contains('matched')) return;
    document.querySelectorAll('.mem-card.def.selected').forEach(c => c.classList.remove('selected'));
    memSelDef = termId;
    el.classList.add('selected');
    if (memSelTerm !== null) checkMemMatch();
}

function checkMemMatch() {
    if (!memSelTerm || !memSelDef) return;
    memLocked = true;
    if (memSelTerm === memSelDef) {
        document.querySelectorAll('.mem-card.selected').forEach(c => { c.classList.remove('selected'); c.classList.add('matched'); });
        memMatchedCount++;
        const e = document.getElementById('mem-matched'); if (e) e.textContent = memMatchedCount;
        memSelTerm = null; memSelDef = null; memLocked = false;
        if (memMatchedCount === 8) {
            clearInterval(memInterval);
            unlockBadge('memory_done');
            if (memSeconds <= 60) unlockBadge('memory_fast');
            const bonus = memSeconds <= 30 ? 50 : memSeconds <= 60 ? 35 : 20;
            awardXP(bonus);
            setTimeout(showMemoryResult, 600);
        }
    } else {
        memWrongCount++;
        const e = document.getElementById('mem-wrong'); if (e) e.textContent = memWrongCount;
        setTimeout(() => {
            document.querySelectorAll('.mem-card.selected').forEach(c => {
                c.classList.add('wrong-flash');
                setTimeout(() => c.classList.remove('selected', 'wrong-flash'), 600);
            });
            memSelTerm = null; memSelDef = null; memLocked = false;
        }, 300);
    }
}

function showMemoryResult() {
    updateXpUI();
    const board = document.getElementById('memory-board');
    if (!board) return;
    const accuracy = Math.round((8 / (8 + memWrongCount)) * 100);
    const icon = memSeconds <= 30 ? '⚡' : memSeconds <= 60 ? '🏆' : '🎯';
    const bonusXP = memSeconds <= 30 ? 50 : memSeconds <= 60 ? 35 : 20;
    board.insertAdjacentHTML('afterend',
        '<div class="mem-result-area" id="mem-result-area">' +
        '<div style="font-size:3rem;margin-bottom:0.5rem;">' + icon + '</div>' +
        '<div style="font-size:1.5rem;font-weight:800;font-family:\"Outfit\",sans-serif;color:var(--text-main);margin-bottom:1rem;">Selesai! 🎉</div>' +
        '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;max-width:360px;margin:0 auto 1.5rem;">' +
            '<div style="background:white;border-radius:12px;padding:14px;border:1px solid #E2E8F0;"><div style="font-size:1.5rem;font-weight:800;color:#4F46E5;">' + memSeconds + 's</div><div style="font-size:0.7rem;color:#64748B;font-weight:600;text-transform:uppercase;">Waktu</div></div>' +
            '<div style="background:white;border-radius:12px;padding:14px;border:1px solid #E2E8F0;"><div style="font-size:1.5rem;font-weight:800;color:#4F46E5;">' + accuracy + '%</div><div style="font-size:0.7rem;color:#64748B;font-weight:600;text-transform:uppercase;">Akurasi</div></div>' +
            '<div style="background:white;border-radius:12px;padding:14px;border:1px solid #E2E8F0;"><div style="font-size:1.5rem;font-weight:800;color:#4F46E5;">+' + bonusXP + '</div><div style="font-size:0.7rem;color:#64748B;font-weight:600;text-transform:uppercase;">XP Bonus</div></div>' +
        '</div>' +
        '<button class="btn-primary" onclick="initMemory()" style="margin:0 auto;">\ud83d\udd04 Main Lagi</button></div>');
}


/* =====================================================
   DRAG & DROP STRUKTUR GAME
   ===================================================== */

const DRAG_CHALLENGES = [
    {
        title: 'Struktur Teks Deskripsi',
        instruction: 'Urutkan 3 bagian struktur teks deskripsi dari awal hingga akhir!',
        items: [
            { id: 'a', title: 'Identifikasi',     desc: 'Pengenalan umum tentang objek yang akan dideskripsikan', order: 0 },
            { id: 'b', title: 'Deskripsi Bagian', desc: 'Rincian ciri-ciri dan karakteristik objek secara detail', order: 1 },
            { id: 'c', title: 'Penutup / Kesan',  desc: 'Simpulan atau kesan penulis terhadap objek', order: 2 },
        ]
    },
    {
        title: 'Langkah Menulis Teks Deskripsi',
        instruction: 'Urutkan 3 langkah awal menulis teks deskripsi dengan benar!',
        items: [
            { id: 'd', title: 'Tentukan Objek',       desc: 'Pilih objek yang akan kamu deskripsikan dengan tepat', order: 0 },
            { id: 'e', title: 'Amati dengan Seksama', desc: 'Perhatikan objek menggunakan pancaindra secara teliti', order: 1 },
            { id: 'f', title: 'Susun Kerangka',       desc: 'Buat kerangka tulisan berdasarkan ciri-ciri yang ditemukan', order: 2 },
        ]
    },
];

let dragChalIdx = 0, dragSelected = null, dragSlots = [null, null, null];
let dragSourceItems = [];

function initDrag() {
    dragChalIdx = 0;
    loadDragChallenge();
}

function loadDragChallenge() {
    dragSelected = null;
    dragSlots = [null, null, null];
    const ch = DRAG_CHALLENGES[dragChalIdx % DRAG_CHALLENGES.length];
    dragSourceItems = shuffleArr([...ch.items]);
    const setEl = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
    setEl('drag-challenge-title', ch.title);
    setEl('drag-instruction',     ch.instruction);
    setDragFeedback('', null);
    renderDragGame();
}

function renderDragGame() {
    const src = document.getElementById('drag-source');
    const tgt = document.getElementById('drag-target');
    if (!src || !tgt) return;

    // Source column
    src.innerHTML = '';
    const unplaced = dragSourceItems.filter(item => !dragSlots.includes(item));
    if (unplaced.length === 0) {
        src.innerHTML = '<div style="color:var(--text-muted);font-size:0.85rem;padding:1rem;text-align:center;">\ud83c\udfc6 Semua blok sudah ditempatkan!</div>';
    } else {
        unplaced.forEach(item => {
            const div = document.createElement('div');
            div.className = 'drag-item' + (dragSelected === item ? ' selected' : '');
            div.innerHTML = '<div class="drag-item-title">' + item.title + '</div><div class="drag-item-desc">' + item.desc + '</div>';
            div.onclick = () => { dragSelected = dragSelected === item ? null : item; renderDragGame(); };
            src.appendChild(div);
        });
    }

    // Target slots
    tgt.innerHTML = '';
    dragSlots.forEach((item, i) => {
        const slot = document.createElement('div');
        if (item) {
            slot.className = 'drop-slot occupied';
            slot.innerHTML = '<div class="drop-placed" onclick="returnDragItem(' + i + ')">' +
                '<div class="drop-placed-title">' + item.title + '</div>' +
                '<div class="drop-placed-desc">' + item.desc + '</div>' +
                '<div class="drop-placed-hint">\u21a9 Klik untuk kembalikan</div></div>';
        } else {
            slot.className = 'drop-slot' + (dragSelected ? ' active-target' : '');
            slot.innerHTML = '<div class="drop-slot-label">Posisi ' + (i + 1) + '</div>' +
                '<div style="font-size:0.8rem;margin-top:4px;">' + (dragSelected ? '\u2190 Klik untuk tempatkan' : 'Pilih blok dahulu') + '</div>';
            if (dragSelected) slot.onclick = () => placeDragItem(i);
        }
        tgt.appendChild(slot);
    });
}

function placeDragItem(slotIdx) {
    if (!dragSelected) return;
    dragSlots[slotIdx] = dragSelected;
    dragSelected = null;
    setDragFeedback('', null);
    renderDragGame();
}

function returnDragItem(slotIdx) {
    dragSlots[slotIdx] = null;
    setDragFeedback('', null);
    renderDragGame();
}

function resetDragGame() {
    dragSelected = null;
    dragSlots = [null, null, null];
    setDragFeedback('', null);
    renderDragGame();
}

function checkDragGame() {
    if (dragSlots.some(s => s === null)) {
        setDragFeedback('\u26a0\ufe0f Tempatkan semua 3 blok dulu ya!', null);
        return;
    }
    const correct = dragSlots.every((item, i) => item.order === i);
    if (correct) {
        setDragFeedback('\u2705 Urutan benar! Hebat! +30 XP', true);
        awardXP(30);
        unlockBadge('drag_done');
        dragChalIdx++;
        setTimeout(() => {
            if (dragChalIdx < DRAG_CHALLENGES.length) {
                loadDragChallenge();
            } else {
                setDragFeedback('\ud83c\udf89 Semua tantangan selesai! Kamu luar biasa!', true);
                dragChalIdx = 0; // Reset for replay
            }
        }, 2000);
    } else {
        setDragFeedback('\u274c Urutan belum tepat. Coba lagi!', false);
        const ch = DRAG_CHALLENGES[dragChalIdx % DRAG_CHALLENGES.length];
        const correctOrder = [...ch.items].sort((a, b) => a.order - b.order).map(i => i.title).join(' \u2192 ');
        setTimeout(() => setDragFeedback('Urutan yang benar: ' + correctOrder, false), 1500);
    }
}

function setDragFeedback(msg, correct) {
    const fb = document.getElementById('drag-feedback');
    if (!fb) return;
    fb.textContent = msg;
    fb.className = 'drag-feedback ' + (correct === true ? 'drag-correct' : correct === false ? 'drag-wrong' : '');
}


/* =====================================================
   BADGE COLLECTION
   ===================================================== */

function renderBadges() {
    updateXpUI();
    const data = getXpData();
    const grid = document.getElementById('badge-grid');
    if (!grid) return;
    grid.innerHTML = BADGE_DEFS.map(b => {
        const unlocked = data.badges.includes(b.id);
        return '<div class="badge-item ' + (unlocked ? 'unlocked' : 'locked') + '">' +
            (unlocked ? '<div class="badge-unlocked-chip">\u2713 Diraih</div>' : '') +
            '<span class="badge-item-icon">' + b.icon + '</span>' +
            '<div class="badge-item-name">' + b.name + '</div>' +
            '<div class="badge-item-desc">' + b.desc + '</div>' +
            '</div>';
    }).join('');
}

function confirmReset() {
    if (confirm('Yakin reset semua XP dan badge? Ini tidak bisa dibatalkan!')) {
        localStorage.removeItem('pd_xp');
        localStorage.removeItem('pd_badges');
        updateXpUI();
        renderBadges();
        showXpToast('\ud83d\uddd1\ufe0f Progress direset');
    }
}


/* =====================================================
   INIT ON LOAD
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    updateXpUI();
});
