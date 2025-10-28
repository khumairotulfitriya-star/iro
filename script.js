
 // Efek mengetik teks otomatis
const text = "Perkenalkan, saya khumai";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}
window.onload = typeEffect;

// Tombol menampilkan fakta unik
const btnMore = document.getElementById("btnMore");
const funFact = document.getElementById("funFact");

btnMore.addEventListener("click", () => {
  funFact.classList.toggle("hidden");
  btnMore.innerText = funFact.classList.contains("hidden")
    ? "OPEN"
    : "CLOSE";
});


function createSticker(x, y) {
  const sticker = document.createElement("div");
  sticker.classList.add("sticker");

  // Pilih emoji acak
  sticker.textContent = stickers[Math.floor(Math.random() * stickers.length)];

  // Posisi awal
  sticker.style.left = `${x}px`;
  sticker.style.top = `${y}px`;

  // Arah acak
  const angle = Math.random() * 2 * Math.PI;
  const distance = 80 + Math.random() * 120;
  const offsetX = Math.cos(angle) * distance + "px";
  const offsetY = Math.sin(angle) * distance + "px";

  // Rotasi acak biar lebih hidup
  const rotate = Math.random() * 720 - 360 + "deg";

  // Set variabel CSS untuk animasi
  sticker.style.setProperty("--x", offsetX);
  sticker.style.setProperty("--y", offsetY);
  sticker.style.setProperty("--r", rotate);

  document.body.appendChild(sticker);

  // Hapus setelah animasi selesai
  setTimeout(() => sticker.remove(), 1000);
}

 document.getElementById("Btnyo").addEventListener("click", function() {
  window.location.href = "index2.html"; // menuju halaman selanjutnya
});

 // Kalau mau efek muncul halus waktu halaman dibuka
window.addEventListener("load", () => {
  const kotak = document.querySelector(".kotak-atas");
  kotak.style.opacity = "0";
  kotak.style.transition = "opacity 1s ease";
  setTimeout(() => {
    kotak.style.opacity = "1";
  }, 200);
});

 window.addEventListener("load", () => {
  const sensor = document.getElementById("sensor");
  const konten = document.getElementById("container");

  // Setelah 3 detik, sensor menghilang
  setTimeout(() => {
    sensor.classList.add("hidden");

    // Setelah animasi hilang selesai, tampilkan konten utama
    setTimeout(() => {
      sensor.style.display = "none";
      konten.style.display = "block";
    }, 500); // waktu animasi fade-out
  }, 1000); // 3000 = 3 detik
});

const tombolAwal = document.getElementById('btnMore');
const tempat = document.getElementById('Btnyo');

let sudahAda = false; // penanda agar tombol baru tidak dibuat lagi

tombolAwal.addEventListener('click', function() {
  if (!sudahAda) {
    const tombolBaru = document.createElement('button');
    tombolBaru.textContent = 'Next ->';
    tombolBaru.addEventListener('click', function() {
      alert('Yakin Kehalaman Selanjutnya? ');
    });
    tempat.appendChild(tombolBaru);
    sudahAda = true; // ubah status agar tidak bisa buat lagi
  }
});
