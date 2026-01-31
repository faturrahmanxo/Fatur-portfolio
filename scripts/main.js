// Toggle and navigasi responsif
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle-burger");
});

// navbar aktif + auto close
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    nav.classList.remove("nav-active");
    burger.classList.remove("toggle-burger");
  });
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// contact

const openBtn = document.getElementById("openContact");
const closeBtn = document.getElementById("closeContact");
const modal = document.getElementById("contactModal");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("active");
});

function closeModal() {
  modal.classList.remove("active");
}

closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  const name = form.querySelector('input[name="name"]').value.trim();
  const subject = form.querySelector('input[name="subject"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  if (!name || !subject || !message) {
    e.preventDefault();
    alert("Please fill name and message");
    return;
  }

  if (message.length < 10) {
    e.preventDefault();
    alert("Pesan minimal 10 karakter!");
    return;
  }

  // sukses → auto clear & tutup modal
  setTimeout(() => {
    form.reset();
    modal.classList.remove("active");
  }, 300);
});
