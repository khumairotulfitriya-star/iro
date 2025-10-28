function ledakan(x, y) {
  for (let i = 0; i < 30; i++) {
    const partikel = document.createElement("div");
    partikel.classList.add("partikel");

    // posisi awal
    partikel.style.left = `${x}px`;
    partikel.style.top = `${y}px`;

    // warna acak
    partikel.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;

    // arah acak
    const dx = (Math.random() - 0.5) * 300;
    const dy = (Math.random() - 0.5) * 300;
    partikel.style.setProperty("--x", `${dx}px`);
    partikel.style.setProperty("--y", `${dy}px`);

    document.body.appendChild(partikel);

    // hapus partikel setelah animasi selesai
    setTimeout(() => partikel.remove(), 1000);
  }
}

// bikin ledakan otomatis tiap 0.5 detik di posisi acak
setInterval(() => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  ledakan(x, y);
}, 10);
