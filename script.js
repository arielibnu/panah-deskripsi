const questions = [
    {
        text: "Bacalah kutipan berikut: 'Hamparan sawah membentang luas seperti permadani hijau. Bulir-bulir padi menunduk, siap menyapa para petani yang datang.' Kesan yang ditimbulkan dari teks deskripsi tersebut adalah...",
        options: ["Menyedihkan", "Menakutkan", "Damai dan asri", "Ramai dan hiruk-pikuk"],
        answer: 2,
        feedback: "Tepat! Kata 'permadani hijau' dan 'menunduk siap menyapa' menciptakan suasana yang damai dan asri."
    },
    {
        text: "Perhatikan kalimat berikut: 'Ombak bergulung-gulung saling berkejaran menuju tepi pantai, menghempas pasir putih dengan suara gemuruh.' Kalimat tersebut dominan membangkitkan citraan (pengindraan)...",
        options: ["Penglihatan dan perabaan", "Penglihatan dan pendengaran", "Pendengaran dan penciuman", "Perabaan dan penciuman"],
        answer: 1,
        feedback: "Benar! 'Bergulung-gulung' adalah penglihatan, dan 'suara gemuruh' adalah pendengaran."
    },
    {
        text: "Seorang siswa ingin menulis teks deskripsi tentang 'Kucing Persia'. Manakah rincian bagian yang TIDAK relevan untuk dimasukkan ke dalam teks tersebut?",
        options: ["Warna dan ketebalan bulunya", "Bentuk hidung dan wajahnya", "Sejarah penemuan benua Asia", "Tingkah laku dan kebiasaannya"],
        answer: 2,
        feedback: "Tepat! Sejarah benua Asia tidak relevan dengan deskripsi fisik atau sifat kucing Persia."
    },
    {
        text: "Kalimat manakah yang menunjukkan deskripsi subjektif (mengandung pendapat/perasaan penulis)?",
        options: ["Meja itu terbuat dari kayu jati dengan ukuran 2x1 meter.", "Ruangan ini dicat dengan warna putih bersih.", "Pemandangan dari atas bukit ini sungguh menakjubkan dan menenangkan jiwa.", "Terdapat lima buah kursi di dalam ruangan tersebut."],
        answer: 2,
        feedback: "Benar! Kata 'menakjubkan' dan 'menenangkan jiwa' adalah opini atau perasaan penulis."
    },
    {
        text: "Bacalah teks berikut: (1) Halaman sekolah kami sangat luas. (2) Di tengahnya terdapat lapangan basket. (3) Banyak siswa yang suka bermain bola di sana saat istirahat. (4) Di pinggir lapangan tumbuh pohon beringin yang rindang. Kalimat yang merupakan deskripsi spasial (ruang/tempat) adalah nomor...",
        options: ["(1) dan (3)", "(2) dan (4)", "(1) dan (4)", "(2) dan (3)"],
        answer: 1,
        feedback: "Tepat! Kalimat (2) dan (4) menunjukkan letak ruang ('Di tengahnya' dan 'Di pinggir lapangan')."
    },
    {
        text: "Jika kamu diminta menulis bagian 'Identifikasi' tentang Gunung Bromo, kalimat pembuka yang paling tepat adalah...",
        options: ["Di puncak Bromo, suhu udara sangat dingin hingga menusuk tulang.", "Gunung Bromo adalah salah satu gunung berapi aktif yang terletak di Jawa Timur, Indonesia.", "Asap belerang sering kali keluar dari kawahnya yang besar.", "Penduduk sekitar sering mengadakan upacara Kasada setiap tahunnya."],
        answer: 1,
        feedback: "Benar! Identifikasi berisi pengenalan umum objek (apa dan di mana)."
    },
    {
        text: "Perhatikan rincian berikut: 1) Berbulu lebat. 2) Suaranya nyaring. 3) Memiliki ekor panjang. 4) Suka makan biji-bijian. Objek yang paling tepat berdasarkan rincian tersebut adalah...",
        options: ["Kucing", "Anjing", "Burung Kakatua", "Kelinci"],
        answer: 2,
        feedback: "Tepat! Ciri suka makan biji-bijian dan bersuara nyaring cocok untuk burung kakatua."
    },
    {
        text: "Manakah penggunaan majas personifikasi yang tepat untuk memperindah teks deskripsi tentang 'Angin Malam'?",
        options: ["Angin malam berhembus sangat kencang seperti badai.", "Angin malam bernyanyi lirih menyapu dedaunan kering di halaman.", "Udara malam ini terasa sangat dingin membekukan kulit.", "Angin malam berhembus dari arah utara menuju selatan."],
        answer: 1,
        feedback: "Benar! 'Bernyanyi lirih' adalah sifat manusia yang dikenakan pada angin (personifikasi)."
    },
    {
        text: "Dalam teks deskripsi, sering digunakan kata sifat bersinonim untuk memvariasikan kalimat. Sinonim dari kata 'indah' yang paling tepat untuk mendeskripsikan sebuah tarian adalah...",
        options: ["Tampan", "Gemulai", "Memukau", "Cantik"],
        answer: 2,
        feedback: "Tepat! Tarian lebih cocok dideskripsikan dengan 'memukau' atau 'menawan', sedangkan tampan/cantik untuk rupa fisik."
    },
    {
        text: "Cermati teks berikut: 'Ayahku adalah sosok yang pekerja keras. Kulitnya gelap karena sering terpapar sinar matahari. Tangan dan jarinya kasar, menandakan beratnya beban yang ia pikul setiap hari.' Tujuan penulis teks tersebut adalah...",
        options: ["Mengeluhkan kondisi ayahnya yang harus bekerja keras.", "Memberikan gambaran fisik dan sifat sang ayah secara mendalam.", "Menjelaskan cara ayahnya bekerja setiap hari.", "Menceritakan pengalaman ayah saat bekerja di luar ruangan."],
        answer: 1,
        feedback: "Benar! Penulis ingin menggambarkan ciri fisik dan karakter (pekerja keras) ayahnya."
    },
    {
        text: "Bacalah paragraf berikut: 'Pantai Parangtritis memiliki pesona yang luar biasa. Di sebelah kiri, terlihat tebing yang sangat tinggi. Di sebelah kanan, kita bisa melihat batu karang besar. [...].' Kalimat yang tepat untuk melengkapi deskripsi tersebut adalah...",
        options: ["Banyak wisatawan yang membeli suvenir di sana.", "Ombaknya yang besar terus-menerus menghantam karang tersebut.", "Perjalanan ke sana memakan waktu dua jam dari kota.", "Pemerintah daerah perlu memperbaiki jalan menuju pantai."],
        answer: 1,
        feedback: "Tepat! Kalimat tersebut melanjutkan deskripsi tentang keadaan fisik pantai, sesuai dengan kalimat sebelumnya."
    },
    {
        text: "Analisis kalimat berikut: 'Buku itu tebal dan berwarna merah.' Bagaimana cara mengubah kalimat ini menjadi deskripsi yang lebih rinci dan memikat?",
        options: ["Buku itu sangat tebal sekali dan warnanya sangat merah.", "Buku bersampul merah tua itu setebal bantal tidur, dengan ratusan halaman yang menguning.", "Buku itu berwarna merah dan memiliki banyak halaman.", "Saya suka buku merah yang tebal itu."],
        answer: 1,
        feedback: "Benar! Opsi ini memberikan gambaran konkret yang bisa dibayangkan pembaca (merah tua, setebal bantal, halaman menguning)."
    },
    {
        text: "Apa fungsi dari bagian 'Penutup / Kesan' dalam struktur teks deskripsi?",
        options: ["Untuk menyajikan rincian bagian objek secara spesifik.", "Untuk memperkenalkan latar belakang sejarah objek.", "Untuk menyampaikan simpulan atau perasaan akhir penulis terhadap objek.", "Untuk menyebutkan sumber informasi dari objek yang dideskripsikan."],
        answer: 2,
        feedback: "Tepat! Penutup berisi kesan pribadi atau simpulan penulis terhadap objek."
    },
    {
        text: "Jika sebuah teks mendeskripsikan 'Proses Terjadinya Hujan' langkah demi langkah, apakah teks tersebut termasuk teks deskripsi?",
        options: ["Ya, karena menggambarkan hujan.", "Tidak, karena teks tersebut lebih mementingkan urutan waktu/langkah (teks eksplanasi).", "Ya, karena pembaca bisa membayangkan hujan.", "Tidak, karena teks deskripsi hanya untuk benda mati."],
        answer: 1,
        feedback: "Benar! Teks yang fokus pada proses dan sebab-akibat adalah teks eksplanasi, bukan deskripsi yang fokus pada gambaran ruang/objek."
    },
    {
        text: "Kata hubung (konjungsi) yang sering muncul dalam teks deskripsi spasial untuk menunjukkan letak adalah...",
        options: ["Namun, sebaliknya, walaupun", "Di sebelah kanan, di tengah, di belakang", "Pertama, kedua, selanjutnya", "Oleh karena itu, sehingga, akibatnya"],
        answer: 1,
        feedback: "Tepat! Deskripsi spasial menggambarkan ruang/tempat, sehingga menggunakan penunjuk posisi."
    },
    {
        text: "Pilihlah kalimat yang mengandung kata berimbuhan dengan tepat dalam konteks teks deskripsi!",
        options: ["Pemandangan itu sangat mempesona hatiku.", "Pemandangan itu sangat memesona hatiku.", "Pemandangan itu sangat pesona hatiku.", "Pemandangan itu sangat dipesona hatiku."],
        answer: 1,
        feedback: "Benar! Kata dasar 'pesona' jika diberi awalan me- akan luluh menjadi 'memesona'."
    },
    {
        text: "Manakah dari judul berikut yang paling tepat untuk teks deskripsi objektif?",
        options: ["Buku Harian Rahasiaku", "Pesona Candi Borobudur yang Tak Terlupakan", "Laporan Hasil Observasi: Anatomi Bunga Sepatu", "Kucing Hitam yang Membawa Sial"],
        answer: 2,
        feedback: "Tepat! Anatomi Bunga Sepatu bersifat ilmiah dan objektif tanpa melibatkan perasaan penulis."
    },
    {
        text: "Kutipan: 'Aroma kopi yang baru diseduh menguar, bercampur dengan manisnya wangi roti bakar.' Indra yang paling dominan diaktifkan oleh kalimat ini adalah...",
        options: ["Penglihatan", "Pendengaran", "Penciuman", "Pengecapan"],
        answer: 2,
        feedback: "Benar! Kata 'aroma' dan 'wangi' merangsang indra penciuman pembaca."
    },
    {
        text: "Bandingkan dua kalimat berikut. (A) 'Gadis itu cantik.' (B) 'Gadis itu memiliki mata bulat bersinar, senyum berlesung pipit, dan rambut ikal yang tergerai.' Mengapa kalimat B lebih baik?",
        options: ["Karena kalimat B lebih panjang dari kalimat A.", "Karena kalimat B menceritakan tindakan gadis tersebut.", "Karena memuat rincian konkret yang mengonkretkan kata 'cantik'.", "Karena kalimat B menggunakan gaya bahasa yang rumit."],
        answer: 2,
        feedback: "Tepat! Kalimat B menjelaskan secara rinci seperti apa 'cantik' itu sehingga pembaca bisa membayangkannya."
    },
    {
        text: "Dalam teks deskripsi, kita sering menggunakan kata ganti penunjuk. Manakah kalimat yang menggunakan kata ganti penunjuk yang tepat?",
        options: ["Di sana terletak sebuah rumah tua.", "Dia adalah buku yang sangat bagus.", "Ini hari kita akan pergi ke taman.", "Mereka pemandangan yang indah."],
        answer: 0,
        feedback: "Benar! 'Di sana' menunjukkan lokasi/tempat yang sesuai untuk mendeskripsikan objek jarak jauh."
    },
    {
        text: "Manakah kalimat yang merupakan contoh deskripsi bagian dari objek 'Sekolah'?",
        options: ["Sekolahku adalah SMP Negeri 1 Harapan Bangsa.", "Sekolahku memiliki 15 ruang kelas, sebuah perpustakaan di sudut kiri, dan laboratorium di lantai dua.", "Aku sangat bangga bisa bersekolah di sini.", "Pemerintah membangun sekolah ini pada tahun 1980."],
        answer: 1,
        feedback: "Tepat! Kalimat tersebut merinci bagian-bagian spesifik dari lingkungan sekolah."
    },
    {
        text: "Teks yang menggambarkan objek berdasarkan apa yang dilihat, didengar, dan dirasakan penulis, tanpa ada niat untuk mengubah atau menambah fakta, disebut deskripsi...",
        options: ["Subjektif", "Saran", "Objektif", "Imajinatif"],
        answer: 2,
        feedback: "Benar! Deskripsi yang sesuai fakta tanpa opini pribadi disebut deskripsi objektif."
    },
    {
        text: "Cermati teks ini: 'Kelinciku bernama Boni. Bulunya seputih salju. Ia selalu melompat kegirangan saat diberi wortel.' Berdasarkan isinya, teks ini termasuk jenis deskripsi...",
        options: ["Spasial", "Waktu", "Orang", "Hewan"],
        answer: 3,
        feedback: "Tepat! Objek yang dideskripsikan adalah hewan peliharaan (kelinci)."
    },
    {
        text: "Apa kesalahan utama pada kalimat deskripsi berikut: 'Bunganya sangat besar sekali dan sangat harum banget.'?",
        options: ["Kalimatnya terlalu pendek.", "Pemborosan kata (pleonasme) karena menggunakan 'sangat', 'sekali', dan 'banget' bersamaan.", "Tidak menggunakan majas.", "Tidak menjelaskan warna bunga."],
        answer: 1,
        feedback: "Benar! Kata 'sangat', 'sekali', dan 'banget' bermakna sama, sehingga penggunaannya secara bersamaan tidak efektif."
    },
    {
        text: "Mengapa kemampuan merangkai kata (diksi) yang baik sangat penting dalam menulis teks deskripsi?",
        options: ["Agar teks terlihat panjang dan tebal.", "Agar pembaca kesulitan memahami teks.", "Agar penulis bisa menunjukkan kecerdasannya.", "Agar pembaca dapat merasakan seolah-olah melihat dan mengalami sendiri objek yang diceritakan."],
        answer: 3,
        feedback: "Tepat! Diksi yang tepat membantu menciptakan citraan (imaji) yang kuat di benak pembaca."
    }
];

let current = 0, score = 0, answered = false, timer = null, timeLeft = 20;
let benar = 0, salah = 0;

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    const navBtn = document.getElementById('nav-' + page);
    if (navBtn) navBtn.classList.add('active');
    window.scrollTo(0, 0);
}

function startQuiz() {
    current = 0; score = 0; benar = 0; salah = 0;
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-play').style.display = 'block';
    showPage('kuis');
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
    document.getElementById('feedback-box').className = 'feedback-box';
    document.getElementById('feedback-box').textContent = '';
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
        if (timeLeft <= 0) { clearInterval(timer); if (!answered) timeUp(); }
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
        fb.textContent = '✅ ' + q.feedback;
        fb.className = 'feedback-box show correct-fb';
    } else {
        salah++;
        fb.textContent = '❌ Kurang tepat. ' + q.feedback;
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
    fb.textContent = '⏰ Waktu habis! Jawaban benar: ' + q.options[q.answer];
    fb.className = 'feedback-box show wrong-fb';
    document.getElementById('next-btn').className = 'next-btn show';
}

function nextQuestion() {
    current++;
    if (current >= questions.length) showResult();
    else loadQuestion();
}

function showResult() {
    document.getElementById('quiz-play').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    document.getElementById('result-score-ring').innerHTML = score + '<br><span style="font-size:0.7rem;">poin</span>';
    document.getElementById('res-benar').textContent = benar;
    document.getElementById('res-salah').textContent = salah;
    document.getElementById('res-skor').textContent = score;

    let title, sub, predikat;
    if (score === 100) { title = 'Luar Biasa! 🏆'; sub = 'Panahmu tepat ke tengah sasaran!'; predikat = 'Istimewa ⭐'; }
    else if (score >= 80) { title = 'Hebat! 🎯'; sub = 'Hampir semua sasaran kena!'; predikat = 'Sangat Baik'; }
    else if (score >= 60) { title = 'Bagus! 👍'; sub = 'Terus berlatih untuk hasil lebih baik!'; predikat = 'Baik'; }
    else if (score >= 40) { title = 'Cukup! 💪'; sub = 'Baca lagi materinya ya!'; predikat = 'Cukup'; }
    else { title = 'Semangat! 📚'; sub = 'Pelajari materi dulu, lalu coba lagi!'; predikat = 'Perlu Belajar Lagi'; }

    document.getElementById('result-title').textContent = title;
    document.getElementById('result-sub').textContent = sub;
    document.getElementById('res-predikat').textContent = predikat;
    window.scrollTo(0, 0);
}

function resetQuiz() {
    document.getElementById('quiz-play').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-start').style.display = 'block';
}
