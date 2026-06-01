const slides = document.querySelectorAll(".slide");
const navLinks = document.querySelectorAll(".nav-links a");

const modal = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const closeModalBtn = document.querySelector(".close-modal");
const projectCards = document.querySelectorAll(".project-card");

const observerOptions = {
  root: document.querySelector(".scroll-container"),
  threshold: 0.6,
};

const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentId = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

slides.forEach((slide) => {
  slideObserver.observe(slide);
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSlide = document.querySelector(targetId);

    targetSlide.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const cardImgDiv = card.querySelector(".card-img");
    const computedStyle = window.getComputedStyle(cardImgDiv);
    const bgImage = computedStyle.backgroundImage;

    const cleanUrl = bgImage.replace(/^url\(['"](.+)['"]\)$/, "$1");

    const projectTitle = card.querySelector("h3").innerText;

    modalImg.src = cleanUrl;
    modalCaption.innerText = projectTitle;

    modal.classList.add("show");
    modal.style.display = "block";
    setTimeout(() => (modal.style.opacity = "1"), 10);
  });
});

const closeModal = () => {
  modal.style.opacity = "0";
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 400);
};

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

const translations = {
  en: {
    nav_home: "Home",
    nav_philosophy: "Philosophy",
    nav_projects: "Projects",
    nav_materials: "Materials",
    nav_contact: "Contact",

    hero_title: "Shaping The <br>Future Architecture",
    hero_desc: "Innovative design meets structural perfection.",
    scroll_down: "Scroll Down ↓",

    philo_title: "Our Philosophy",
    philo_desc:
      "We believe that architecture is more than just building structures; it's about creating spaces that inspire, endure, and harmonize with their environment. Every line we draw balances raw aesthetics with functional precision.",

    proj_main_title: "Featured Projects",
    proj_title_1: "The Nexus Tower",
    proj_desc_1: "Commercial / 2026",
    proj_title_2: "Vortex Pavilion",
    proj_desc_2: "Cultural / 2025",
    proj_title_3: "Minimalist Oasis",
    proj_desc_3: "Residential / 2026",

    mat_title: "Materials & Precision",
    mat_desc: "Raw Concrete. Structural Steel. Pure Glass.",

    contact_title: "Let's Build Something Iconic",
    contact_desc: "Get in touch with our expert team for consultations.",
    contact_btn: "Start a Project",
  },
  ka: {
    nav_home: "მთავარი",
    nav_philosophy: "ფილოსოფია",
    nav_projects: "პროექტები",
    nav_materials: "მასალები",
    nav_contact: "კონტაქტი",

    hero_title: "მომავლის <br>არქიტექტურის ფორმირება",
    hero_desc: "ინოვაციური დიზაინი ერწყმის სტრუქტურულ სრულყოფილებას.",
    scroll_down: "ჩამოსქროლეთ ↓",

    philo_title: "ჩვენი ფილოსოფია",
    philo_desc:
      "ჩვენ გვჯერა, რომ არქიტექტურა იმაზე მეტია, ვიდრე უბრალოდ შენობების აგება; ეს არის სივრცეების შექმნა, რომლებიც შთააგონებენ, უძლებენ დროს და ჰარმონიაში არიან გარემოსთან. თითოეული ხაზი, რომელსაც ვავლებთ, აბალანსებს  ესთეტიკასა და ფუნქციონალურ სიზუსტეს.",

    proj_main_title: "რჩეული პროექტები",
    proj_title_1: "ნექსუს თაუერი",
    proj_desc_1: "კომერციული / 2026",
    proj_title_2: "ვორტექს პავილიონი",
    proj_desc_2: "კულტურული / 2025",
    proj_title_3: "მინიმალისტური ოაზისი",
    proj_desc_3: "საცხოვრებელი / 2026",

    mat_title: "მასალები და სიზუსტე",
    mat_desc: "უხეში ბეტონი. სტრუქტურული ფოლადი. სუფთა შუშა.",

    contact_title: "შევქმნათ რაიმე იკონური",
    contact_desc: "დაუკავშირდით ჩვენს ექსპერტთა გუნდს კონსულტაციისთვის.",
    contact_btn: "პროექტის დაწყება",
  },
};

const langButtons = document.querySelectorAll(".lang-btn");

const changeLanguage = (lang) => {
  const elementsToTranslate = document.querySelectorAll("[data-i18n]");

  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
};

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active-lang").classList.remove("active-lang");
    btn.classList.add("active-lang");

    const selectedLang = btn.getAttribute("data-lang");
    changeLanguage(selectedLang);
  });
});



const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-links a.active').forEach(activeLink => {
            activeLink.classList.remove('active');
        });
        item.classList.add('active');
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
    });
});