/* ================================================================
   EDIT DI SINI — semua data yang perlu kamu ganti ada di file ini.
   Tidak perlu menyentuh index.html untuk mengganti isi.
   ================================================================ */

// 1) Tautan Instagram resmi sekolah, OSIS, dan panitia MPLS.
//    Ganti URL di bawah dengan akun Instagram yang sebenarnya.
const SOCIAL = {
  sekolah:  { label: "Instagram Sekolah", handle: "@smkn2purbalingga", url: "https://instagram.com/smkn2purbalingga" },
  osis:     { label: "Instagram OSIS",    handle: "@osissmakdaofficial",  url: "https://instagram.com/osissmakdaofficial" },
  panitia:  { label: "???", handle: "???",  url: "we" },
};

// 2) Warna untuk setiap divisi (dipakai pada label divisi di tiap kartu).
//    Kalau kamu mengganti nama divisi, tambahkan juga warnanya di sini,
//    kalau tidak ditemukan akan memakai warna abu-abu default.
const DIVISI_COLORS = {
  "XI APHP":               "var(--gold)",
  "XI PPLG":            "var(--teal)",
  "XI TO":                  "var(--coral)",
  "XI AP":           "var(--steel)",
  "XI AT":    "var(--plum)",
  "Keamanan & Ketertiban":  "var(--forest)",
  "K":   "var(--burnt)",
};
const DIVISI_FALLBACK_COLOR = "#9AA0AC";

// 3) Data 21 panitia. Field "id" otomatis dipakai sebagai nomor ID badge.
//    *** Ini adalah DATA CONTOH. Ganti nama, kelas, jabatan, dan
//    instagram dengan biodata panitia yang sebenarnya. ***
//    Foto: secara default tiap kartu menampilkan inisial nama (avatar
//    otomatis, tanpa file gambar). Kalau kamu punya foto asli, lihat
//    petunjuk "MENAMBAHKAN FOTO ASLI" di bagian bawah file ini.
const PANITIA = [
  { id: 1,  nama: "Riki Maulana Saputra",        foto: "foto/panitia/riki-maulana-saputra.jpg", Quote: "Orang yang kuat bukan yang tidak pernah jatuh, tapi yang tetap bangkit meski dunia tidak berpihak padanya.",                   divisi: "XI AT",              kelas: "XI AT", instagram: "ahmad.fauzan_" },
  { id: 2,  nama: "Yuandhitira Fatahilah",     foto: "foto/panitia/dan.jpg",Quote: "Wakil Ketua Panitia",             divisi: "XI PPLG",              kelas: "XI PPLG", instagram: "bintang.pratama" },
  { id: 3,  nama: "Aeni Eka Ramadhani",       foto: "",Quote: "if you want it, you pay for it",                    divisi: "XI PPLG",           kelas: "XI PPLG", instagram: "citra.lestari" },
  { id: 4,  nama: "Lucky Nur Amalia ", foto: "foto/panitia/dan.jpg",Quote: "Jangan menunggu kesempatan itu datang. Jadilah alasan untuk kesempatan itu muncul",    divisi: "XI PPLG",   kelas: "XI PPLG", instagram: "eka.putri" },
  { id: 5,  nama: "Rio Maulidan", foto: "foto/panitia/dan.jpg",Quote: "-----",                     divisi: "XI TO",           kelas: "XI TO", instagram: "eka.putri" },
  { id: 6,  nama: "Abdul Ghufron Mustofa",      foto: "foto/panitia/abdul-ghufron-mustofa.jpg", Quote: "Tanpa cinta, kecerdasan itu berbahaya. Dan tanpa kecerdasan, cinta itu tidak cukup",                    divisi: "XI AP",           kelas: "XI AP",  instagram: "fajar.nugraha" },
  { id: 7,  nama: "Sinta Pratiwi",   foto: "foto/panitia/sinta-pratiwi.jpg", Quote: "tetaplah hidup walaupun dunia terlalu banyak misteri",        divisi: "XI PPLG",                 kelas: "XI PPLG", instagram: "gita.permatasari" },
  { id: 8,  nama: "Safa Nur Fauziah",        foto: "foto/panitia/safa-nur-fauziah.jpg", Quote: "Orang hebat bukanlah mereka yang tidak pernah merasa takut, melainkan mereka yang tetap melangkah meski ketakutan berjalan di sampingnya.",            divisi: "XI PPLG",                 kelas: "XI PPLG",  instagram: "hadi.wijaya" },
  { id: 9,  nama: "Intan Vira Afriani",      foto: "foto/panitia/intan-vira-afriani.jpg",Quote: "Mekar bukan tentang siapa yang paling cepat, melainkan siapa yang tetap bertahan dalam prosesnya.",            divisi: "XI AP",                 kelas: "XI AP",  instagram: "intan.maharani" },
  { id: 10, nama: "Penti Ayuningtyas",      foto: "foto/panitia/penti.jpg",  Quote: "Jangan terlalu dikejar, Tuhanmu lebih tau apa yang ada di hatimu", divisi: "XI AT",          kelas: "XI AT", instagram: "joko.santoso" },
  { id: 11, nama: "A'syaturofia'h",     foto: "foto/panitia/asyaturofiah.jpg",   Quote: "ada saatnya kita tak punya pilihan dan hanya memilih untuk terdiam dan menerima keadaan.",     divisi: "XI APHP",          kelas: "XI APHP",  instagram: "kartika.sari" },
  { id: 12, nama: "Latifah Irsyadiah",      foto: "foto/panitia/latifah-irsyaa.jpg",   Quote: "Anggota Divisi Perlengkapan",     divisi: "XI APHP",          kelas: "XI APHP", instagram: "lutfi.hakim" },
  { id: 13, nama: "Dona Lidia Mukti",       foto: "foto/panitia/dona-lidia-mukti.jpg",  Quote: "Tidak ada usaha yang sia-sia selama kamu terus berusaha.", divisi: "XI APHP",   kelas: "XI APHP",  instagram: "mega.anjani" },
  { id: 14, nama: "Nesya Putriansyah",     foto: "foto/panitia/nesya-putriansyah.jpg",   Quote: "Kesalahan adalah bagian dari pengalaman, dan pengalaman adalah bagian dari keberhasilan.",     divisi: "XI APHP",   kelas: "XI APHP", instagram: "naufal.akbar" },
  { id: 15, nama: "Riski Dwi Saputri",  foto: "foto/panitia/riski-dwi-saputri.jpg", Quote: "Jatuh boleh, tapi jangan lupa bangkit untuk berusaha lagi",     divisi: "XI TO",   kelas: "XI TO",  instagram: "putri.ayu" },
  { id: 16, nama: "Shavira Vitri Ramadhani",   foto: "foto/panitia/vivi.jpg",   Quote: "Tetaplah menjadi baik meski dunia tidak selalu memperlakukanmu dengan baik", divisi: "XI PPLG", kelas: "XI PPLG", instagram: "rangga.pradana" },
  { id: 17, nama: "Okfa Cahya Pratama",    foto: "foto/panitia/dan.jpg",  Quote: "Buktikan dengan tindakan, bukan hanya omongan",   divisi: "XI TO", kelas: "XI TO",  instagram: "sari.wulandari" },
  { id: 18, nama: "Nafis Raditya Fauzan",      foto: "foto/panitia/nafis-raditya-fauzan.jpg",   Quote: "Anggota Keamanan & Ketertiban",   divisi: "XI TO", kelas: "XI TO", instagram: "umar.syahid" },
  { id: 19, nama: "Muhammad WildanRizky", foto: "foto/panitia/dannn.jpg",        Quote: "coba segala cara, untuk mendapatkan yang kamu inginkan",divisi: "XI PPLG",  kelas: "XI PPLG",  instagram: "dannkesurupanpython" },
  { id: 20, nama: "Evan Nugroho",    foto: "foto/panitia/dan.jpg",   Quote: "Keluarlah dari zona nyaman jika ingin terus berkembang",    divisi: "XI PPLG",  kelas: "XI PPLG", instagram: "wahyu.nugroho" },
  { id: 21, nama: "malik",    foto: "foto/panitia/malik.jpg", Quote: "Anggota Konsumsi & Kesehatan",    divisi: "XI AT",  kelas: "XI AT",  instagram: "yulia.rahmawati" },
];

/* ================================================================
   4) Data Guru & Karyawan pendamping MPLS. Sama seperti PANITIA,
   field "keterangan" diisi mata pelajaran (untuk guru) atau jabatan
   (untuk karyawan) — sesuaikan isinya, dan tambah/hapus baris kalau
   jumlahnya tidak 10 orang seperti contoh ini.
   *** Ini juga DATA CONTOH, ganti dengan data asli. ***
   ================================================================ */
const GURU_KARYAWAN = [
  { id: 1,  nama: "Bambang Hartono, S.Pd., M.M.", foto:"foto/panitia/dann.jpg",kategori: "Guru",     keterangan: "Kepala Sekolah" },
  { id: 2,  nama: "Sri Wahyuni, S.Pd.",            kategori: "Guru",     keterangan: "Wakil Kepala Sekolah Bidang Kurikulum" },
  { id: 3,  nama: "Agus Setiawan, S.Pd.",          kategori: "Guru",     keterangan: "Wakil Kepala Sekolah Bidang Kesiswaan" },
  { id: 4,  nama: "Dewi Kurniasari, S.Pd.",        kategori: "Guru",     keterangan: "Matematika" },
  { id: 5,  nama: "Yudi Pranowo, S.Pd.",           kategori: "Guru",     keterangan: "Bahasa Indonesia" },
  { id: 6,  nama: "Ratna Suminar, S.Pd.",          kategori: "Guru",     keterangan: "Pendidikan Pancasila dan Kewarganegaraan" },
  { id: 7,  nama: "Hendra Gunawan, S.Pd., M.Pd.",  kategori: "Guru",     keterangan: "Bimbingan Konseling (BK)" },
  { id: 8,  nama: "Lina Marlina, A.Md.",           kategori: "Karyawan", keterangan: "Kepala Tata Usaha" },
  { id: 9,  nama: "Asep Kurniawan",                kategori: "Karyawan", keterangan: "Staf Tata Usaha" },
  { id: 10, nama: "Sumarno",                       kategori: "Karyawan", keterangan: "Petugas Keamanan (Satpam)" },
];

const KATEGORI_COLORS = {
  "Guru":     "var(--teal)",
  "Karyawan": "var(--burnt)",
};
const KATEGORI_FALLBACK_COLOR = "#9AA0AC";

/* ================================================================
   MENAMBAHKAN FOTO ASLI (opsional)
   Tidak perlu mengubah kode apa pun. Cukup:
   1. Buat folder "foto" di samping index.html, isi dengan file foto
      (mis. foto/01.jpg, foto/02.jpg, dst — boleh subfolder seperti
      foto/panitia/ dan foto/guru/ kalau mau lebih rapi).
   2. Tambahkan field "foto: 'foto/01.jpg'" pada objek orang yang
      sesuai di PANITIA atau GURU_KARYAWAN.
   3. Simpan, refresh browser — foto otomatis muncul menggantikan
      ilustrasi. Orang yang belum diisi field "foto" tetap memakai
      ilustrasi otomatis, jadi bisa diisi bertahap.
   ================================================================ */

const IG_ICON_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>`;

function initials(name){
  return name.trim().split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
}

/* ----------------------------------------------------------------
   AVATAR ILUSTRASI (potret kartun, dibuat otomatis dari nama)
   Bukan foto asli — ini adalah ilustrasi vektor sederhana yang
   digambar dengan SVG, beda kombinasi gaya rambut/warna per nama.
   Tidak butuh file gambar/koneksi internet apa pun.
   Untuk memakai foto asli, lihat "MENAMBAHKAN FOTO ASLI" di atas.
---------------------------------------------------------------- */
function hashString(str){
  let hash = 0;
  for (const ch of str) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return hash;
}
function pick(arr, seed){ return arr[hashString(seed) % arr.length]; }

const SKIN_TONES   = ["#F4D2B3", "#E8B68C", "#C68642", "#8D5524", "#5C3A21"];
const HAIR_COLORS  = ["#1C1C1E", "#2B2118", "#3B2F2F", "#6B4226", "#8B5E3C"];
const SHIRT_COLORS = ["#16213E", "#2E8B8B", "#5C6B8A", "#8E5572", "#4F6F52", "#D98324", "#9B2C2C"];
const HAIR_STYLES  = ["buzz", "side", "long", "bun"];

function hairBack(style, hair){
  if (style !== "long") return "";
  return `<rect x="22" y="40" width="9" height="40" rx="4.5" fill="${hair}"/><rect x="69" y="40" width="9" height="40" rx="4.5" fill="${hair}"/>`;
}
function hairFront(style, hair){
  const cap = `<path d="M28,42 Q50,16 72,42 L72,32 Q50,10 28,32 Z" fill="${hair}"/>`;
  if (style === "side")  return cap + `<ellipse cx="29" cy="35" rx="7" ry="11" fill="${hair}"/>`;
  if (style === "bun")   return cap + `<circle cx="50" cy="13" r="7" fill="${hair}"/>`;
  return cap; // buzz / long pakai cap yang sama
}
function avatarSVG(name){
  const skin  = pick(SKIN_TONES, name + "skin");
  const hair  = pick(HAIR_COLORS, name + "hair");
  const shirt = pick(SHIRT_COLORS, name + "shirt");
  const style = pick(HAIR_STYLES, name + "style");
  const glasses = hashString(name + "glasses") % 5 === 0;

  const glassesSvg = glasses
    ? `<g stroke="#2B2118" stroke-width="2" fill="none">
         <rect x="33" y="45" width="15" height="11" rx="3"/>
         <rect x="52" y="45" width="15" height="11" rx="3"/>
         <line x1="48" y1="50" x2="52" y2="50"/>
       </g>`
    : "";

  return `<svg viewBox="0 0 100 100" width="100%" height="100%" role="img" aria-hidden="true">
    ${hairBack(style, hair)}
    <path d="M14,102 Q50,72 86,102 Z" fill="${shirt}"/>
    <circle cx="50" cy="48" r="22" fill="${skin}"/>
    ${hairFront(style, hair)}
    <circle cx="42" cy="49" r="2.1" fill="#2B2118"/>
    <circle cx="58" cy="49" r="2.1" fill="#2B2118"/>
    <path d="M42,57 Q50,61 58,57" stroke="#2B2118" stroke-width="2" fill="none" stroke-linecap="round"/>
    ${glassesSvg}
  </svg>`;
}

function buildIgRow(){
  const row = document.getElementById("igRow");
  Object.values(SOCIAL).forEach(item => {
    const a = document.createElement("a");
    a.className = "ig-pill";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer"; // mencegah tab-nabbing ke situs yang ditautkan
    a.setAttribute("aria-label", `${item.label} — ${item.handle}`);

    const icon = document.createElement("span");
    icon.className = "ig-icon";
    icon.innerHTML = IG_ICON_SVG; // SVG statis tetap (bukan teks pengguna), aman dari XSS
    a.appendChild(icon);

    const textWrap = document.createElement("span");
    const label = document.createElement("span");
    label.className = "label";
    label.textContent = item.label;
    const handle = document.createElement("span");
    handle.className = "handle";
    handle.textContent = item.handle;
    textWrap.appendChild(label);
    textWrap.appendChild(handle);
    a.appendChild(textWrap);

    row.appendChild(a);
  });
}

function buildChips(){
  const chipRow = document.getElementById("chipRow");
  const divisiList = ["Semua", ...new Set(PANITIA.map(p => p.divisi))];
  divisiList.forEach((divisi, i) => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.type = "button";
    btn.textContent = divisi;
    btn.dataset.divisi = divisi;
    btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      activeDivisi = divisi;
      renderGrid();
    });
    chipRow.appendChild(btn);
  });
}

function renderCard(p){
  const card = document.createElement("article");
  card.className = "card";

  const badgeId = document.createElement("span");
  badgeId.className = "badge-id mono";
  badgeId.textContent = `ID-MPLS-26-${String(p.id).padStart(2, "0")}`;
  card.appendChild(badgeId);

  const hole = document.createElement("div");
  hole.className = "hole";
  card.appendChild(hole);

  // --- FOTO ASLI (otomatis) ---
  // Kalau objek panitia punya field "foto" (mis. foto: "foto/01.jpg"),
  // foto asli itu yang ditampilkan. Kalau field "foto" tidak diisi,
  // otomatis memakai ilustrasi potret seperti sekarang. Jadi kamu bisa
  // mengisi foto sedikit demi sedikit tanpa mengubah kode ini sama sekali.
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  if (p.foto){
    const img = document.createElement("img");
    img.src = p.foto;
    img.alt = p.nama;
    img.loading = "lazy";
    img.onerror = () => { avatar.innerHTML = avatarSVG(p.nama); }; // file tidak ketemu -> tetap aman, pakai ilustrasi
    avatar.appendChild(img);
  } else {
    avatar.innerHTML = avatarSVG(p.nama); // SVG dibuat dari kode, bukan teks pengguna -> aman
  }
  card.appendChild(avatar);
  // --- AKHIR BAGIAN FOTO ---

  const nama = document.createElement("h3");
  nama.className = "nama";
  nama.textContent = p.nama;
  card.appendChild(nama);

  const Quote = document.createElement("p");
  Quote.className = "quote";
  Quote.textContent = p.Quote;
  card.appendChild(Quote);

  const metaRow = document.createElement("div");
  metaRow.className = "meta-row";

  const divisiTag = document.createElement("span");
  divisiTag.className = "divisi-tag";
  divisiTag.style.background = DIVISI_COLORS[p.divisi] || DIVISI_FALLBACK_COLOR;
  divisiTag.textContent = p.divisi;
  metaRow.appendChild(divisiTag);

  const kelasTag = document.createElement("span");
  kelasTag.className = "kelas-tag";
  kelasTag.textContent = p.kelas;
  metaRow.appendChild(kelasTag);

  card.appendChild(metaRow);
  card.appendChild(document.createElement("hr"));

  const igLink = document.createElement("a");
  igLink.className = "ig-link";
  igLink.href = `https://instagram.com/${p.instagram}`;
  igLink.target = "_blank";
  igLink.rel = "noopener noreferrer";
  igLink.setAttribute("aria-label", `Instagram ${p.nama}`);
  igLink.innerHTML = IG_ICON_SVG; // SVG statis, aman
  const handleSpan = document.createElement("span");
  handleSpan.textContent = `@${p.instagram}`;
  igLink.appendChild(handleSpan);
  card.appendChild(igLink);

  return card;
}

let activeDivisi = "Semua";

function renderGrid(){
  const grid = document.getElementById("grid");
  const query = document.getElementById("searchInput").value.trim().toLowerCase();

  const filtered = PANITIA.filter(p => {
    const matchesDivisi = activeDivisi === "Semua" || p.divisi === activeDivisi;
    const matchesQuery = !query ||
      p.nama.toLowerCase().includes(query) ||
      p.kelas.toLowerCase().includes(query) ||
      p.jabatan.toLowerCase().includes(query);
    return matchesDivisi && matchesQuery;
  });

  grid.innerHTML = ""; // aman: hanya menghapus, tidak menyisipkan teks pengguna
  if (filtered.length === 0){
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Tidak ada panitia yang cocok dengan pencarian ini.";
    grid.appendChild(empty);
    return;
  }
  filtered.forEach(p => grid.appendChild(renderCard(p)));
}

function renderStaffCard(s){
  const card = document.createElement("article");
  card.className = "card staff-card";

  const badgeId = document.createElement("span");
  badgeId.className = "badge-id mono";
  badgeId.textContent = `ID-GK-26-${String(s.id).padStart(2, "0")}`;
  card.appendChild(badgeId);

  const hole = document.createElement("div");
  hole.className = "hole";
  card.appendChild(hole);

  // --- FOTO ASLI (otomatis) ---
  // Sama seperti kartu panitia: isi field "foto" pada data di GURU_KARYAWAN
  // (mis. foto: "foto/guru-01.jpg") untuk pakai foto asli. Kalau kosong,
  // otomatis memakai ilustrasi potret.
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  if (s.foto){
    const img = document.createElement("img");
    img.src = s.foto;
    img.alt = s.nama;
    img.loading = "lazy";
    img.onerror = () => { avatar.innerHTML = avatarSVG(s.nama + "-staff"); };
    avatar.appendChild(img);
  } else {
    avatar.innerHTML = avatarSVG(s.nama + "-staff");
  }
  card.appendChild(avatar);
  // --- AKHIR BAGIAN FOTO ---

  const nama = document.createElement("h3");
  nama.className = "nama";
  nama.textContent = s.nama;
  card.appendChild(nama);

  const keterangan = document.createElement("p");
  keterangan.className = "Quote";
  keterangan.textContent = s.keterangan;
  card.appendChild(keterangan);

  const tagWrap = document.createElement("div");
  tagWrap.className = "meta-row";
  const tag = document.createElement("span");
  tag.className = "kategori-tag";
  tag.style.background = KATEGORI_COLORS[s.kategori] || KATEGORI_FALLBACK_COLOR;
  tag.textContent = s.kategori;
  tagWrap.appendChild(tag);
  card.appendChild(tagWrap);

  return card;
}

function renderStaffGrid(){
  const grid = document.getElementById("staffGrid");
  grid.innerHTML = "";
  GURU_KARYAWAN.forEach(s => grid.appendChild(renderStaffCard(s)));
}

buildIgRow();
buildChips();
renderGrid();
renderStaffGrid();
document.getElementById("searchInput").addEventListener("input", renderGrid);
