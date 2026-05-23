const questions = [
    {
        text: "Teks yang menggambarkan suatu objek secara rinci sehingga pembaca seolah-olah dapat melihat, mendengar, atau merasakan objek tersebut disebut...",
        options: ["Teks Narasi", "Teks Deskripsi", "Teks Prosedur", "Teks Eksposisi"],
        answer: 1,
        feedback: "Tepat! Teks deskripsi bertujuan menggambarkan objek secara rinci agar pembaca seakan merasakan langsung."
    },
    {
        text: "Manakah yang termasuk ciri-ciri teks deskripsi?",
        options: ["Berisi langkah-langkah melakukan sesuatu", "Banyak menggunakan kata sifat dan kata panca indera", "Menceritakan kejadian yang berurutan", "Berisi pendapat dan argumen penulis"],
        answer: 1,
        feedback: "Benar! Ciri khas teks deskripsi adalah penggunaan kata sifat dan kata panca indera."
    },
    {
        text: "Struktur teks deskripsi yang benar adalah...",
        options: ["Orientasi – Komplikasi – Resolusi", "Pernyataan umum – Deskripsi – Penutup", "Identifikasi – Deskripsi Bagian – Penutup/Kesan", "Abstrak – Orientasi – Krisis – Reaksi"],
        answer: 2,
        feedback: "Tepat! Teks deskripsi terdiri dari: Identifikasi → Deskripsi Bagian → Penutup/Kesan."
    },
    {
        text: "Pada bagian 'Identifikasi' dalam teks deskripsi, penulis biasanya...",
        options: ["Menulis kesimpulan tentang objek", "Menjelaskan bagian-bagian objek secara rinci", "Memperkenalkan objek yang akan dideskripsikan", "Memberi pendapat pribadi tentang objek"],
        answer: 2,
        feedback: "Benar! Identifikasi adalah bagian pengenalan objek yang akan dideskripsikan."
    },
    {
        text: "Perhatikan kalimat berikut: 'Bunga mawar itu berwarna merah menyala dan harum semerbak.' Kalimat tersebut menggunakan...",
        options: ["Kata kerja aktif", "Kata benda dan kata kerja", "Kata sifat dan kata panca indera", "Kata keterangan waktu"],
        answer: 2,
        feedback: "Benar! 'Merah menyala' adalah kata sifat dan 'harum semerbak' berkaitan dengan indera penciuman."
    },
    {
        text: "Kalimat manakah yang paling cocok untuk membuka teks deskripsi tentang 'Pantai Kuta'?",
        options: ["Pertama, pergilah ke Pantai Kuta dengan membawa perlengkapan.", "Pantai Kuta adalah salah satu pantai terindah di Bali.", "Saya sangat senang pergi ke pantai.", "Pantai Kuta dibangun pada tahun 1970-an."],
        answer: 1,
        feedback: "Tepat! Kalimat pembuka deskripsi harus memperkenalkan objek secara jelas."
    },
    {
        text: "Teks deskripsi dapat menggambarkan objek berupa...",
        options: ["Hanya benda mati saja", "Hanya tempat dan orang saja", "Orang, tempat, benda, dan hewan", "Hanya peristiwa dan kejadian"],
        answer: 2,
        feedback: "Benar! Teks deskripsi bisa menggambarkan orang, tempat, benda, maupun hewan."
    },
    {
        text: "Perhatikan paragraf ini: 'Kucing itu berbulu putih bersih dan lembut. Matanya berwarna biru jernih bagai langit. Suaranya merdu saat mengeong.' Paragraf ini termasuk bagian...",
        options: ["Identifikasi", "Deskripsi Bagian", "Penutup/Kesan", "Kesimpulan"],
        answer: 1,
        feedback: "Tepat! Penjelasan rinci tentang bagian-bagian objek (bulu, mata, suara) termasuk Deskripsi Bagian."
    },
    {
        text: "Kata manakah yang termasuk kata panca indera yang sering dipakai dalam teks deskripsi?",
        options: ["Berlari, melompat, bermain", "Terasa, terlihat, tercium, terdengar", "Kemarin, sekarang, besok", "Karena, sehingga, maka"],
        answer: 1,
        feedback: "Benar! Kata panca indera seperti terasa, terlihat, tercium, terdengar membuat teks deskripsi lebih hidup."
    },
    {
        text: "Bagian 'Penutup/Kesan' dalam teks deskripsi biasanya berisi...",
        options: ["Langkah-langkah melakukan sesuatu", "Perkenalan nama objek yang dideskripsikan", "Kesimpulan atau kesan penulis terhadap objek", "Fakta dan data tentang objek"],
        answer: 2,
        feedback: "Tepat! Bagian penutup/kesan berisi kesimpulan umum atau kesan penulis terhadap objek yang telah dideskripsikan."
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
    document.getElementById('q-counter').textContent = (current + 1) + ' / 10';
    document.getElementById('prog-fill').style.width = ((current + 1) * 10) + '%';
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
        score += 10; benar++;
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
