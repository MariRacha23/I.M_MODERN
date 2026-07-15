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

    hero_title: "Turnkey <br>Renovation Solutions",
    hero_desc: "From raw concrete to your dream move-in-ready home.",
    scroll_down: "Scroll Down ↓",

    philo_title: "Our Philosophy",
    philo_desc:
      "We take your space from a rough concrete shell (black frame) and transform it into a fully finished, ready-to-live home. Armed with professional, high-end tools and years of expertise, we manage every step of the renovation process. No stress, no shortcuts—just absolute precision and clean work before you bring in the furniture.",

    proj_main_title: "Our Works",
    proj_title_1: "Modern Apartment",
    proj_desc_1: "Full Renovation / 2026",
    proj_title_2: "Cozy Living Space",
    proj_desc_2: "Turnkey Project / 2025",
    proj_title_3: "Minimalist Flat",
    proj_desc_3: "Premium Finish / 2026",

    mat_title: "Tools & Materials",
    mat_desc: "Professional Equipment. Premium Materials. Flawless Execution.",

    contact_hero: "LET'S BUILD YOUR DREAM SPACE",
    contact_title: "Contact Us",
    direct_title: "Direct Connect",
    direct_desc: "Message or call us on your preferred platform:",
    booking_title: "Book a Renovation",
    booking_desc: "Fill out the form and we will contact you shortly:",
  },
  ka: {
    nav_home: "მთავარი",
    nav_philosophy: "ჩვენი მიდგომა",
    nav_projects: "პროექტები",
    nav_materials: "ხელსაწყოები",
    nav_contact: "კონტაქტი",

    hero_title: "სრული რემონტი <br>შავი კარკასიდან",
    hero_desc: "პროფესიონალური რემონტი და მშენებლობა ავეჯის შეტანამდე.",
    scroll_down: "ჩამოსქროლეთ ↓",

    philo_title: "ჩვენი მიდგომა",
    philo_desc:
      "ჩვენ ჩავიბარებთ თქვენს ბინას შავი კარკასის მდგომარეობაში და მივიყვანთ სრულ, საცხოვრებელ კონდიციამდე. ჩვენი საკუთარი, თანამედროვე ხელსაწყოებითა და მრავალწლიანი გამოცდილებით, უზრუნველყოფთ რემონტის ყველა ეტაპის უნაკლო შესრულებას. თქვენ არ მოგიწევთ ნერვიულობა – ჩვენ ვასრულებთ ყველა უხეშ და ფაქიზ სამუშაოს იდეალური სიზუსტით, ავეჯის შეტანამდე.",

    proj_main_title: "შესრულებული სამუშაოები",
    proj_title_1: "თანამედროვე ბინა",
    proj_desc_1: "სრული რემონტი / 2026",
    proj_title_2: "მყუდრო სახლი",
    proj_desc_2: "გასაღების ჩაბარებით / 2025",
    proj_title_3: "მინიმალისტური დიზაინი",
    proj_desc_3: "პრემიუმ ხარისხი / 2026",

    mat_title: "ტექნიკა და ხარისხი",
    mat_desc: "პროფესიონალური ხელსაწყოები. საიმედო მასალები. იდეალური შედეგი.",

    contact_hero: "შევუქმნათ კომფორტი თქვენს სახლს",
    contact_title: "დაგვიკავშირდით",
    direct_title: "პირდაპირი კავშირი",
    direct_desc: "მოგვწერეთ ან დაგვირეკეთ თქვენთვის სასურველ პლატფორმაზე:",
    booking_title: "შეაფასეთ რემონტი",
    booking_desc:
      "შეავსეთ ფორმა და ჩვენ მალე დაგიკავშირდებით დეტალების დასაზუსტებლად:",
  },
  ru: {
    nav_home: "Главная",
    nav_philosophy: "Наш подход",
    nav_projects: "Проекты",
    nav_materials: "Инструменты",
    nav_contact: "Контакты",

    hero_title: "Ремонт под <br>ключ с черного каркаса",
    hero_desc: "Профессиональный ремонт от бетона до заноса мебели.",
    scroll_down: "Прокрутите вниз ↓",

    philo_title: "Наш подход",
    philo_desc:
      "Мы берем ваше пространство в состоянии черного каркаса и доводим его до идеального жилого вида. Используя собственные профессиональные инструменты премиум-класса и многолетний опыт, мы контролируем каждый этап ремонта. Никаких забот для вас — мы выполняем всю работу с абсолютной точностью, подготавливая дом к заносу мебели.",

    proj_main_title: "Наши работы",
    proj_title_1: "Модерн Квартира",
    proj_desc_1: "Полный ремонт / 2026",
    proj_title_2: "Уютный Дом",
    proj_desc_2: "Под ключ / 2025",
    proj_title_3: "Минималистичный дизайн",
    proj_desc_3: "Премиум отделка / 2026",

    mat_title: "Техника и Качество",
    mat_desc:
      "Профессиональное оборудование. Надежные материалы. Безупречный результат.",

    contact_hero: "Давайте Создадим Пространство Вашей Мечты",
    contact_title: "Свяжитесь с Нами",
    direct_title: "Прямое Соединение",
    direct_desc: "Напишите нам или позвоните на предпочитаемой платформе:",
    booking_title: "Заявка на Ремонт",
    booking_desc:
      "Заполните форму, и мы свяжемся с вами в ближайшее время для оценки:",
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

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-links a.active").forEach((activeLink) => {
      activeLink.classList.remove("active");
    });
    item.classList.add("active");
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
  });
});

const form = document.getElementById("booking-form");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const originalText = submitBtn.innerText;
  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true;

  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let jsonResponse = await response.json();
      if (response.status == 200) {
        alert("გმადლობთ! შეტყობინება წარმატებით გაიგზავნა.");
        form.reset();
      } else {
        console.log(jsonResponse);
        alert("დაფიქსირდა შეცდომა. გთხოვთ, სცადოთ მოგვიანებით.");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("ინტერნეტის ხარვეზი! შეტყობინება ვერ გაიგზავნა.");
    })
    .then(function () {
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
    });
});
