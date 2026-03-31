const revealItems = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = [...document.querySelectorAll("main section[id]")];
const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox?.querySelector(".lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxMeta = document.getElementById("lightbox-meta");
const lightboxClose = lightbox?.querySelector(".lightbox-close");
const portfolioCards = document.querySelectorAll(".portfolio-card");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const currentId = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === currentId);
        });
      });
    },
    {
      threshold: 0.5,
      rootMargin: "-20% 0px -35% 0px"
    }
  );

  sections.forEach((section) => navObserver.observe(section));
} else {
  revealItems.forEach((item) => item.classList.add("revealed"));
}

const openLightbox = (card) => {
  if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxMeta) {
    return;
  }

  lightboxImage.src = card.dataset.image || "";
  lightboxImage.alt = card.querySelector("img")?.alt || "";
  lightboxTitle.textContent = card.dataset.title || "";
  lightboxMeta.textContent = `${card.dataset.location || ""} / ${card.dataset.category || ""}`;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.classList.remove("no-scroll");
};

portfolioCards.forEach((card) => {
  card.addEventListener("click", () => openLightbox(card));
});

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.classList.contains("is-open")) {
    closeLightbox();
  }
});
