// 1. Efek Typing Text
const text = "Setelah sekian lama, aku sadar kalau cerita kita sebenarnya belum selesai. Kalau kamu berkenan, mungkinkah kita mulai lagi dari awal?";
let index = 0;
const typingElement = document.getElementById("typing-text");

function typeWriter() {
  if (typingElement && index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

// Elemen-elemen DOM
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const btnGroup = document.getElementById("btn-group");

const videoModal = document.getElementById("videoModal");
const memoryVideo = document.getElementById("memoryVideo");

const yesBtn2 = document.getElementById("yesBtn2");
const noBtn2 = document.getElementById("noBtn2");

const successMessage = document.getElementById("successMessage");

// Fungsi untuk membuka & memutar video
function startVideo() {
  btnGroup.classList.add("hidden"); // Sembunyikan tombol pilihan pertama
  videoModal.classList.remove("hidden"); // Tampilkan area video
  memoryVideo.play(); // Otomatis putar video beserta suaranya
}

// Aksi 1: Mau tombol "Mau Banget" atau "Enggak Dulu" diklik, SAMA-SAMA tampilkan video dulu
yesBtn.addEventListener("click", startVideo);
noBtn.addEventListener("click", startVideo);

// Aksi 2: Tombol "Tetep Enggak" di Babak Kedua -> Melarikan diri / Kabur
noBtn2.addEventListener("mouseover", () => {
  noBtn2.style.position = "absolute";
  
  // Posisi acak melompat-lompat
  const randomX = Math.floor(Math.random() * 240) - 120;
  const randomY = Math.floor(Math.random() * 140) - 70;
  
  noBtn2.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Aksi 3: Klik "Yaudah, Mauuu!" di bawah video -> Tampilkan pesan sukses & tombol WA
yesBtn2.addEventListener("click", () => {
  memoryVideo.pause(); // Hentikan pemutaran video
  videoModal.classList.add("hidden");
  
  // Sembunyikan elemen judul/pesan awal
  typingElement.classList.add("hidden");
  document.getElementById("title").classList.add("hidden");
  document.querySelector(".heart-icon").classList.add("hidden");
  
  // Tampilkan pesan sukses akhir
  successMessage.classList.remove("hidden");
});

window.onload = typeWriter;