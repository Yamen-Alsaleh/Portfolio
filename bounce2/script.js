const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

const translations = {
  en: {
    "page-title": "Yamen - Software Engineer",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-hobbies": "Hobbies",
    "nav-contact": "Contact",
    "theme-toggle": "Toggle Theme",
    "lang-toggle": "عربي",
    "hero-title": "Hi, I'm Yamen",
    "hero-desc": "I am a software engineering, student at 42Irbid. I build high-performance systems and full-stack applications, transitioning seamlessly from C memory management to Python architectures and custom developer tooling.",
    "skills-title": "Technical Skills",
    "projects-title": "Project Showcase",
    "proj1-desc": "A Python maze generator and MiniLibX pixel visualizer with custom configuration parsing.",
    "proj2-desc": "Retrieval-Augmented Generation system using AST parsing, vLLM, and Qwen models.",
    "proj3-title": "Web Piscine",
    "proj3-desc": "Responsive layouts, Flexbox mechanics, CSS geometry, and event-driven JS applications.",
    "hobbies-title": "Hobbies",
    "hobbies-desc": "When I have some time to spare I enjoy playing various video games and watch some series or movies even anime.Also, I enjoy reading pretty much as I have read many novels.",
    "contact-title": "Contact Me",
    "form-submit": "Send Message",
    "footer-text": "© 2026 Yamen. Built from scratch."
  },
  ar: {
    "page-title": "يامن - مهندس برمجيات",
    "nav-about": "نبذة عني",
    "nav-skills": "المهارات",
    "nav-projects": "المشاريع",
    "nav-hobbies": "الهوايات",
    "nav-contact": "تواصل معي",
    "theme-toggle": "تغيير المظهر",
    "lang-toggle": "English",
    "hero-title": "مرحباً، أنا يامن",
    "hero-desc": "أنا طالب هندسة برمجيات في 42 إربد. أقوم ببناء أنظمة عالية الأداء وتطبيقات متكاملة، وأنتقل بسلاسة من إدارة الذاكرة في C إلى هياكل Python وأدوات التطوير المخصصة.",
    "skills-title": "المهارات التقنية",
    "projects-title": "معرض المشاريع",
    "proj1-desc": "مولد متاهات بلغة بايثون وعارض رسوميات باستخدام MiniLibX.",
    "proj2-desc": "نظام توليد معزز بالاسترجاع باستخدام تحليل AST ونماذج Qwen.",
    "proj3-title": "مسبح الويب",
    "proj3-desc": "تخطيطات متجاوبة، ميكانيكا Flexbox، وهندسة CSS، وتطبيقات تفاعلية.",
    "hobbies-title": "الهوايات",
    "hobbies-desc": "عندما يكون لدي بعض وقت الفراغ، أستمتع بلعب ألعاب فيديو متنوعة ومشاهدة بعض المسلسلات أو الأفلام وحتى الأنمي. كما أنني أستمتع بالقراءة كثيراً حيث قرأت العديد من الروايات.",
    "contact-title": "تواصل معي",
    "form-submit": "إرسال الرسالة",
    "footer-text": "© 2026 يامن. تم البناء من الصفر."
  }
};

const htmlRoot = document.getElementById("html-root");
const langToggleBtn = document.getElementById("lang-toggle");
let currentLang = "en";

langToggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";

  htmlRoot.setAttribute("lang", currentLang);
  htmlRoot.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");

  for (const [id, text] of Object.entries(translations[currentLang])) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = text;
    }
  }

  const nameInput = document.getElementById("form-name");
  const emailInput = document.getElementById("form-email");
  const msgInput = document.getElementById("form-msg");

  nameInput.placeholder = currentLang === "en" ? "Name" : "الاسم";
  emailInput.placeholder = currentLang === "en" ? "Email" : "البريد الإلكتروني";
  msgInput.placeholder = currentLang === "en" ? "Message" : "الرسالة";
});
