const articles = {
  "Apa-perbedaan-TailwindCss-dengan-Bootstrap?": {
    title: "Apa perbedaan Tailwind css dengan Bootstrap?",
    author: "Fatur",
    date: "Dec 30, 2025 · ✨ 4 min read",
    image: "../imgs/konten1.webp",
    contentFile: "../articles/Tailwind-vs-Bootstrap.html",
  },
};

// ambil slug dari URL
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

// ambil artikel
const article = articles[slug];

if (!article) {
  document.getElementById("title").innerText = "Artikel tidak ditemukan";
} else {
  // isi metadata
  document.getElementById("title").innerText = article.title;
  document.getElementById("author").innerText = article.author;
  document.getElementById("meta").innerText = article.date;
  document.getElementById("cover").src = article.image;

  // fetch isi artikel
  fetch(article.contentFile)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("content").innerHTML =
        "<p>Gagal memuat artikel.</p>";
    });
}

// copy link
document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyLinkBtn");
  const toast = document.getElementById("copyToast");

  if (!copyBtn || !toast) return;

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1600);
    } catch {
      alert("Gagal menyalin link");
    }
  });
});

// prorgress bar
const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});
