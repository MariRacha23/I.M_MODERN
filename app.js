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
    nav_philosophy: "Our Approach",
    nav_about: "My Story", 
    nav_projects: "Projects",
    nav_materials: "Tools & Quality",
    nav_contact: "Contact",

    hero_title: "Turnkey <br>Renovation Solutions",
    hero_desc: "From raw concrete to your dream move-in-ready home. We handle everything, including full furniture coordination.",
    scroll_down: "Scroll Down ↓",

    philo_title: "Our Philosophy",
    philo_desc:
      "We take your space from a rough concrete shell (black frame) and transform it into a fully finished, ready-to-live home. Armed with professional, high-end tools and years of expertise, we manage every step of the renovation process. No stress, no shortcuts—just absolute precision. Upon agreement, we also fully coordinate the delivery and arrangement of your furniture, leaving the space completely ready for you.",

    about_title: "My Story & UK Standards",
    about_desc: "My journey in professional renovation began in London, United Kingdom. Working in one of the world's most demanding construction markets, I mastered precision and international quality standards, backed by the official Youview Company LTD Training Certificate. Every high-end, professional tool I use was brought directly from the UK to ensure flawless execution here in Georgia.",

    proj_main_title: "Our Works",
    proj_title_1: "Modern Apartment",
    proj_desc_1: "Full Renovation / 2026",
    proj_title_2: "Cozy Living Space",
    proj_desc_2: "Turnkey Project / 2025",
    proj_title_3: "Minimalist Flat",
    proj_desc_3: "Premium Finish / 2026",

    mat_title: "Tools & Materials",
    mat_desc: "Professional UK Equipment. Premium Materials. Flawless Execution.",

    contact_hero: "LET'S BUILD YOUR DREAM SPACE",
    contact_title: "Contact Us",
    direct_title: "Direct Connect",
    direct_desc: "Scan the QR code or reach out on your preferred platform:",
    qr_btn_text: "View Digital Portfolio QR",
    qr_scan_text: "Scan to visit our digital portfolio anytime",
    booking_title: "Book a Renovation",
    booking_desc: "Fill out the form and we will contact you shortly:",
    
    placeholder_name: "Your Name",
    placeholder_email: "Email Address",
    placeholder_message: "Tell us about your project...",
    contact_btn: "Send Message"
  },
  ka: {
    nav_home: "მთავარი",
    nav_philosophy: "ჩვენი მიდგომა",
    nav_about: "ჩემი ისტორია", 
    nav_projects: "პროექტები",
    nav_materials: "ხელსაწყოები",
    nav_contact: "კონტაქტი",

    hero_title: "სრული რემონტი <br>შავი კარკასიდან",
    hero_desc: "პროფესიონალური რემონტი ავეჯის შეტანამდე. მომსახურება მოიცავს ავეჯის სრულ ორგანიზებას (კლიენტთან შეთანხმებით).",
    scroll_down: "ჩამოსქროლეთ ↓",

    philo_title: "ჩვენი მიდგომა",
    philo_desc:
      "ჩვენ ჩავიბარებთ თქვენს ბინას შავი კარკასის მდგომარეობაში და მივიყვანთ სრულ, საცხოვრებელ კონდიციამდე. ჩვენი საკუთარი, თანამედროვე ხელსაწყოებითა და მრავალწლიანი გამოცდილებით, უზრუნველყოფთ რემონტის ყველა ეტაპის უნაკლო შესრულებას. თქვენ არ მოგიწევთ ნერვიულობა – კლიენტთან შეთანხმებით, ჩვენ თავად უზრუნველყოფთ ავეჯის ტრანსპორტირებასა და მოწყობას, რათა ჩაიბაროთ საცხოვრებლად სრულიად მზა სახლი.",

    about_title: "ჩემი ისტორია და ბრიტანული სტანდარტი",
    about_desc: "ჩემი პროფესიული გზა სარემონტო სფეროში დიდი ბრიტანეთიდან, კერძოდ ლონდონიდან დაიწყო. იქ მუშაობისას მივიღე ოფიციალური Youview Company LTD-ის სერტიფიკატი და ავითვისე ხარისხის უმაღลესი საერთაშორისო სტანდარტები. საქართველოში დაბრუნებისას, ყველა პროფესიონალური და მაღალტექნოლოგიური ხელსაწყო სწორედ ინგლისიდან ჩამოვიტანე, რაც გვაძლევს საშუალებას, ნებისმიერი სამუშაო უნაკლო სიზუსტით შევასრულოთ.",

    proj_main_title: "შესრულებული სამუშაოები",
    proj_title_1: "თანამედროვე ბინა",
    proj_desc_1: "სრული რემონტი / 2026",
    proj_title_2: "მყუდრო სახლი",
    proj_desc_2: "გასაღების ჩაბარებით / 2025",
    proj_title_3: "მინიმალისტური დიზაინი",
    proj_desc_3: "პრემიუმ ხარისხი / 2026",

    mat_title: "ტექნიკა და ხარისხი",
    mat_desc: "ბრიტანული პროფესიონალური ხელსაწყოები. საიმედო მასალები. იდეალური შედეგი.",

    contact_hero: "შექმნათ კომფორტი თქვენს სახლში",
    contact_title: "დაგვიკავშირდით",
    direct_title: "პირდაპირი კავშირი",
    direct_desc: "დაასკანერეთ QR კოდი ან მოგვწერეთ თქვენთვის სასურველ პლატფორმაზე:",
    qr_btn_text: "პორტფოლიოს QR კოდი",
    qr_scan_text: "დაასკანერეთ ციფრული პორტფოლიოს სანახავად",
    booking_title: "დატოვე განაცხადი რემონტისთვის",
    booking_desc: "შეავსეთ ფორმა და ჩვენ მალე დაგიკავშირდებით დეტალების დასაზუსტებლად:",
    
    placeholder_name: "თქვენი სახელი",
    placeholder_email: "ელ-ფოსტა",
    placeholder_message: "მოგვიყევით თქვენი პროექტის შესახებ...",
    contact_btn: "მესიჯის გაგზავნა"
  },
  ru: {
    nav_home: "Главная",
    nav_philosophy: "Наш подход",
    nav_about: "Моя история",
    nav_projects: "Проекты",
    nav_materials: "Инструменты",
    nav_contact: "Контакты",

    hero_title: "Ремонт под ключ <br>от черного каркаса",
    hero_desc: "Профессиональный ремонт до завоза мебели. Услуга включает полную организацию мебели (по согласованию с клиентом).",
    scroll_down: "Прокрутите вниз ↓",

    philo_title: "Наш подход",
    philo_desc:
      "Мы принимаем вашу квартиру в состоянии черного каркаса и доводим её до полностью готового к проживанию состояния. Используя собственные современные инструменты и многолетний опыт, мы обеспечиваем безупречное выполнение каждого этапа ремонта. Вам не о чем беспокоиться — по согласованию с клиентом мы берем на себя транспортировку и расстановку мебели, чтобы вы получили полностью готовый для жизни дом.",

    about_title: "Моя история и британский стандарт",
    about_desc: "Мой профессиональный путь в сфере ремонта начался в Великобритании, а именно в Лондоне. Работая там, я получил официальный сертификат Youview Company LTD и освоил высочайшие международные стандарты качества. По возвращении в Грузию все профессиональные и высокотехнологичные инструменты я привез именно из Англии, что позволяет нам выполнять любые работы с безупречной точностью.",

    proj_main_title: "Наши работы",
    proj_title_1: "Современная квартира",
    proj_desc_1: "Полный ремонт / 2026",
    proj_title_2: "Уютный дом",
    proj_desc_2: "Проект под ключ / 2025",
    proj_title_3: "Минималистичный дизайн",
    proj_desc_3: "Премиум качество / 2026",

    mat_title: "Техника и качество",
    mat_desc: "Британские профессиональные инструменты. Надежные материалы. Идеальный результат.",

    contact_hero: "Создадим комфорт в вашем доме",
    contact_title: "Контакты",
    direct_title: "Прямая связь",
    direct_desc: "Отсканируйте QR-код или напишите нам на удобной для вас платформе:",
    qr_btn_text: "Посмотреть QR портфолио",
    qr_scan_text: "Отсканируйте для просмотра цифрового портфолио",
    booking_title: "Заказать ремонт",
    booking_desc: "Заполни форму, и мы скоро свяжемся с вами для уточнения деталей:",
    
    placeholder_name: "Ваше Имя",
    placeholder_email: "Эл. Почта",
    placeholder_message: "Рассказажите о вашем проекте...",
    contact_btn: "Отправить сообщение"
  }
};

const langButtons = document.querySelectorAll(".lang-btn");

const changeLanguage = (lang) => {
  const elementsToTranslate = document.querySelectorAll("[data-i18n]");

  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.setAttribute("placeholder", translations[lang][key]);
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });

  langButtons.forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active-lang");
    } else {
      btn.classList.remove("active-lang");
    }
  });
};

let currentLang = localStorage.getItem("selectedLanguage") || "ka";
changeLanguage(currentLang);

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedLang = btn.getAttribute("data-lang");
    localStorage.setItem("selectedLanguage", selectedLang);
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
  submitBtn.innerText = currentLang === "ka" ? "იგზავნება..." : currentLang === "ru" ? "Отправка..." : "Sending...";
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
        alert(currentLang === "ka" ? "გმადლობთ! შეტყობინება წარმატებით გაიგზავნა." : currentLang === "ru" ? "Спасибо! Сообщение успешно отправлено." : "Thank you! Message sent successfully.");
        form.reset();
      } else {
        console.log(jsonResponse);
        alert(currentLang === "ka" ? "დაფიქсირდა შეცდომა. გთხოვთ, სცადოთ მოგვიანებით." : "An error occurred. Please try again later.");
      }
    })
    .catch((error) => {
      console.log(error);
      alert(currentLang === "ka" ? "ინტერნეტის ხარვეზი! შეტყობინება ვერ გაიგზავნა." : "Network error! Message could not be sent.");
    })
    .then(function () {
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
    });
});

const openQrBtn = document.getElementById('open-qr-btn');
const closeQrBtn = document.getElementById('close-qr-btn');
const qrModal = document.getElementById('qr-modal');

if (openQrBtn && qrModal) {
  openQrBtn.addEventListener('click', () => {
    qrModal.classList.add('active');
  });
}

if (closeQrBtn && qrModal) {
  closeQrBtn.addEventListener('click', () => {
    qrModal.classList.remove('active');
  });
}

if (qrModal) {
  qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) {
      qrModal.classList.remove('active');
    }
  });
}


const certCard = document.querySelector(".certificate-clickable");

if (certCard) {
  certCard.addEventListener("click", () => {
    const computedStyle = window.getComputedStyle(certCard);
    const bgImage = computedStyle.backgroundImage;
    const cleanUrl = bgImage.replace(/^url\(['"](.+)['"]\)$/, "$1");

    modalImg.src = cleanUrl;
    modalCaption.innerText = currentLang === "ka" ? "სერტიფიკატი / Youview Company LTD" : "Certificate / Youview Company LTD";

    modal.classList.add("show");
    modal.style.display = "block";
    setTimeout(() => (modal.style.opacity = "1"), 10);
  });
}

const modalImageElement = document.getElementById("modal-img");

if (modalImageElement) {
  modalImageElement.addEventListener("click", function() {
    this.classList.toggle("zoomed");
    if (this.classList.contains("zoomed")) {
      this.style.transform = "scale(1.5)";
      this.style.cursor = "zoom-out";
    } else {
      this.style.transform = "scale(1)";
      this.style.cursor = "zoom-in";
    }
  });
}

const originalCloseModal = closeModal;
closeModal = function() {
  if (modalImageElement) {
    modalImageElement.style.transform = "scale(1)";
    modalImageElement.classList.remove("zoomed");
  }
  originalCloseModal();
};
