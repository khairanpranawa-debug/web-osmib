// -- scrooling start -- //
const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});
// -- scrooling end -- //
// -- animasi start -- //
document.addEventListener("DOMContentLoaded", () => {
  // Menambahkan class 'reveal' secara otomatis ke section utama
  const sections = document.querySelectorAll(
    ".osmib, .program, .spob, .osmib-literasi, .divisi",
  );
  sections.forEach((sec) => sec.classList.add("reveal"));

  const observerOptions = {
    threshold: 0.15, // Elemen muncul saat 15% bagian terlihat
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Optional: stop observing once revealed
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
// -- animasi end -- //
// -- rensponsive start -- //
// -- navigasi start -- //
const menubar = document.querySelector(".menu-bar");
const homebar = document.querySelector(".menu");

menubar.addEventListener("click", () => {
  // Kita pakai class 'active' agar sesuai dengan logika CSS slide-in
  homebar.classList.toggle("active");

  // Opsional: Animasi icon burger berubah jadi 'X' saat diklik
  menuBar.classList.toggle("fa-xmark");
});

// Tutup menu otomatis kalau link diklik (biar tidak menutupi layar)
const navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuNav.classList.remove("active");
    menuBar.classList.remove("fa-xmark");
  });
});

window.addEventListener("scroll", () => {
  const navBar = document.querySelector(".navbar");
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);

  // Tutup menu kalau user scroll ke bawah
  menuNav.classList.remove("active");
  menuBar.classList.remove("fa-xmark");
});
// -- navigasi end -- //
//-- responsive end -- //
// -- patch note start -- //
function closePatch() {
  document.getElementById("patchModal").style.display = "none";
}
// -- patch note end -- //
// -- untuk home fakot -- //
function goToHome() {
  // Scroll ke atas dengan halus
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Menghapus #home dari URL tanpa reload halaman
  window.history.pushState("", document.title, window.location.pathname);
}
// -- untuk home fakot end -- //
