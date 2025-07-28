/*
 * BSmart website interactions
 */

// Translation dictionary
const translations = {
  nav_home: {
    ro: 'Acasă',
    ru: 'Главная',
    en: 'Home'
  },
  nav_about: { ro: 'Despre', ru: 'О компании', en: 'About' },
  nav_services: { ro: 'Servicii', ru: 'Услуги', en: 'Services' },
  nav_crm: { ro: 'Integrare CRM', ru: 'CRM интеграция', en: 'CRM Integration' },
  nav_chatbots: { ro: 'Landing & Chatbots', ru: 'Лендинги и Чат-боты', en: 'Landing & Chatbots' },
  nav_contact: { ro: 'Contact', ru: 'Контакты', en: 'Contact' },
  hero_title: {
    ro: 'BSmart – Soluții inteligente de automatizare',
    ru: 'BSmart – умные решения автоматизации',
    en: 'BSmart – Smart automation solutions'
  },
  hero_subtitle: {
    ro: 'Suntem partenerul tău pentru digitalizare și integrare CRM.',
    ru: 'Мы ваш партнер по цифровизации и интеграции CRM.',
    en: 'We are your partner for digitization and CRM integration.'
  },
  btn_contact: { ro: 'Contactează-ne', ru: 'Связаться', en: 'Contact us' },
  about_title: { ro: 'Despre BSmart', ru: 'О компании BSmart', en: 'About BSmart' },
  about_text: {
    ro: 'BSmart oferă servicii de consultanță IT, dezvoltare software personalizată, integrare CRM și automatizare a proceselor. Ne concentrăm pe transformarea digitală a companiilor prin implementarea de soluții moderne și traininguri profesionale.',
    ru: 'BSmart предоставляет услуги IT‑консалтинга, разработку программного обеспечения на заказ, интеграцию CRM и автоматизацию процессов. Мы сосредоточены на цифровой трансформации компаний, реализуя современные решения и профессиональные тренинги.',
    en: 'BSmart provides IT consulting, custom software development, CRM integration and process automation services. We focus on the digital transformation of companies by implementing modern solutions and professional training.'
  },
  services_title: { ro: 'Serviciile noastre', ru: 'Наши услуги', en: 'Our Services' },
  service_consulting_title: { ro: 'Consultanță IT', ru: 'IT‑консалтинг', en: 'IT Consulting' },
  service_consulting_desc: {
    ro: 'Planificăm și proiectăm sisteme informatice integrate și instruim utilizatorii.',
    ru: 'Планируем и проектируем интегрированные IT‑системы и обучаем пользователей.',
    en: 'We plan and design integrated IT systems and train users.'
  },
  service_software_title: { ro: 'Software la comandă', ru: 'ПО на заказ', en: 'Custom Software' },
  service_software_desc: {
    ro: 'Scriem, modificăm și testăm software personalizat pentru afacerea ta.',
    ru: 'Разрабатываем, модифицируем и тестируем программное обеспечение под ваши задачи.',
    en: 'We write, modify and test bespoke software for your business.'
  },
  service_editing_title: { ro: 'Editare software', ru: 'Редактирование ПО', en: 'Software Editing' },
  service_editing_desc: {
    ro: 'Adaptăm și localizăm produse software pentru diverse piețe.',
    ru: 'Адаптируем и локализуем программные продукты для разных рынков.',
    en: 'We adapt and localize software products for specific markets.'
  },
  service_it_title: { ro: 'Servicii IT', ru: 'IT‑сервис', en: 'IT Services' },
  service_it_desc: {
    ro: 'Instalăm calculatoare, software și recuperăm date post-dezastru.',
    ru: 'Устанавливаем компьютеры, программное обеспечение и восстанавливаем данные после катастроф.',
    en: 'We install computers, software and recover data after disasters.'
  },
  service_data_title: { ro: 'Date & Web', ru: 'Данные и веб', en: 'Data & Web' },
  service_data_desc: {
    ro: 'Găzduim pagini web, procesăm date și oferim streaming.',
    ru: 'Хостинг сайтов, обработка данных и стриминг.',
    en: 'We host websites, process data and provide streaming.'
  },
  service_pr_title: { ro: 'PR & Comunicare', ru: 'PR и коммуникации', en: 'PR & Communication' },
  service_pr_desc: {
    ro: 'Consultanță în relații publice, comunicare corporativă și lobby.',
    ru: 'Консультации в области связей с общественностью, корпоративной коммуникации и лоббизма.',
    en: 'Consultancy in public relations, corporate communication and lobbying.'
  },
  service_management_title: { ro: 'Consultanță Business', ru: 'Бизнес‑консалтинг', en: 'Business Consulting' },
  service_management_desc: {
    ro: 'Strategii de management, reducerea costurilor și politici de marketing.',
    ru: 'Стратегии управления, снижение затрат и маркетинговая политика.',
    en: 'Management strategies, cost reduction and marketing policies.'
  },
  service_ad_title: { ro: 'Publicitate', ru: 'Реклама', en: 'Advertising' },
  service_ad_desc: {
    ro: 'Concepem campanii publicitare și producem materiale promoționale.',
    ru: 'Разрабатываем рекламные кампании и производим рекламные материалы.',
    en: 'We design advertising campaigns and produce promotional materials.'
  },
  service_media_title: { ro: 'Reprezentare Media', ru: 'Медиа представительство', en: 'Media Representation' },
  service_media_desc: {
    ro: 'Vânzăm timp și spațiu publicitar în media tradițională și digitală.',
    ru: 'Продажа рекламного времени и площадей в традиционных и цифровых медиа.',
    en: 'Selling advertising time and space in traditional and digital media.'
  },
  service_research_title: { ro: 'Studii de piață', ru: 'Маркетинговые исследования', en: 'Market Research' },
  service_research_desc: {
    ro: 'Realizăm analize de piață și sondaje de opinie.',
    ru: 'Проводим анализ рынка и опросы общественного мнения.',
    en: 'We conduct market analysis and opinion polls.'
  },
  service_training_title: { ro: 'Training IT', ru: 'IT‑обучение', en: 'IT Training' },
  service_training_desc: {
    ro: 'Organizăm cursuri IT, traininguri și verificăm cunoștințele profesionale.',
    ru: 'Организуем курсы и тренинги по IT и проверяем профессиональные знания.',
    en: 'We organise IT courses and training and verify professional knowledge.'
  },
  crm_title: { ro: 'Integrare Bitrix24 CRM', ru: 'Интеграция Bitrix24 CRM', en: 'Bitrix24 CRM Integration' },
  crm_desc: {
    ro: 'Profită de puterea Bitrix24 pentru a automatiza procesele și a centraliza comunicarea. Soluțiile noastre conectează CRM-ul cu rețelele sociale și sistemele PBX pentru o experiență integrată.',
    ru: 'Используйте силу Bitrix24 для автоматизации процессов и централизованной коммуникации. Наши решения соединяют CRM с социальными сетями и PBX для интегрированного опыта.',
    en: 'Harness the power of Bitrix24 to automate processes and centralize communication. Our solutions connect your CRM with social networks and PBX systems for an integrated experience.'
  },
  crm_feature1: {
    ro: 'Conectare telefonie PBX la CRM prin SIP sau REST API',
    ru: 'Подключение телефонии PBX к CRM через SIP или REST API',
    en: 'Connect your PBX telephony to the CRM via SIP or REST API'
  },
  crm_feature2: {
    ro: 'Integrare cu Meta/Facebook și alte rețele sociale',
    ru: 'Интеграция с Meta/Facebook и другими соцсетями',
    en: 'Integrate with Meta/Facebook and other social networks'
  },
  crm_feature3: {
    ro: 'Automatizare lead-uri, vânzări și marketing',
    ru: 'Автоматизация лидов, продаж и маркетинга',
    en: 'Automate leads, sales and marketing'
  },
  crm_feature4: {
    ro: 'Soluții personalizate de rapoarte și analitică',
    ru: 'Индивидуальные отчеты и аналитика',
    en: 'Custom reporting and analytics solutions'
  },
  chatbots_title: { ro: 'Landing Pages & Chatbots', ru: 'Лендинги и чат‑боты', en: 'Landing Pages & Chatbots' },
  chatbots_desc: {
    ro: 'Construim pagini de aterizare atractive și chatbot-uri inteligente care preiau conversații, răspund clienților și automatizează suportul.',
    ru: 'Мы создаем привлекательные посадочные страницы и умные чат‑боты, которые ведут диалог, отвечают клиентам и автоматизируют поддержку.',
    en: 'We build engaging landing pages and smart chatbots that handle conversations, respond to clients and automate support.'
  },
  chatbots_extra_lp_title: { ro: 'Landing Pages', ru: 'Лендинги', en: 'Landing Pages' },
  chatbots_extra_lp_desc: {
    ro: 'Creăm landing pages optimizate pentru conversii și experiențe digitale de top.',
    ru: 'Создаем лендинг‑страницы, оптимизированные для конверсий и отличного цифрового опыта.',
    en: 'We create landing pages optimized for conversions and top digital experiences.'
  },
  chatbots_extra_bot_title: { ro: 'Chatbots', ru: 'Чат‑боты', en: 'Chatbots' },
  chatbots_extra_bot_desc: {
    ro: 'Dezvoltăm roboți de chat pentru site-uri și aplicații de mesagerie.',
    ru: 'Разрабатываем чат‑ботов для сайтов и мессенджеров.',
    en: 'We develop chatbots for websites and messaging apps.'
  },
  chatbots_extra_voice_title: { ro: 'Convorbiri automate', ru: 'Авторазговоры', en: 'Automated Calls' },
  chatbots_extra_voice_desc: {
    ro: 'Implementăm sisteme de convorbiri automate pentru apeluri și servicii vocale.',
    ru: 'Внедряем системы автоматических звонков и голосовых сервисов.',
    en: 'We implement systems for automated calls and voice services.'
  },
  contact_title: { ro: 'Contactează-ne', ru: 'Связаться с нами', en: 'Get in touch' },
  contact_desc: {
    ro: 'Completează formularul pentru a primi o ofertă personalizată sau scrie-ne la adresa morari.nicolae1998@gmail.com.',
    ru: 'Заполните форму, чтобы получить персональное предложение, или напишите нам по адресу morari.nicolae1998@gmail.com.',
    en: 'Fill out the form to get a personalized offer or write to us at morari.nicolae1998@gmail.com.'
  },
  contact_send: { ro: 'Trimite', ru: 'Отправить', en: 'Send' }
};

// Current language (default Romanian)
let currentLang = 'ro';

// Function to update the content based on current language
function updateLanguage(lang) {
  currentLang = lang;
  // Update html lang attribute
  document.documentElement.setAttribute('lang', lang);
  // Update all elements with data-key
  document.querySelectorAll('[data-key]').forEach((el) => {
    const key = el.getAttribute('data-key');
    if (translations[key]) {
      el.textContent = translations[key][lang];
    }
  });
  // Update placeholders for form fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const companyInput = document.getElementById('company');
  const messageInput = document.getElementById('message');
  if (lang === 'ro') {
    nameInput.placeholder = 'Nume';
    emailInput.placeholder = 'Email';
    phoneInput.placeholder = 'Telefon';
    companyInput.placeholder = 'Companie';
    messageInput.placeholder = 'Mesaj';
  } else if (lang === 'ru') {
    nameInput.placeholder = 'Имя';
    emailInput.placeholder = 'Электронная почта';
    phoneInput.placeholder = 'Телефон';
    companyInput.placeholder = 'Компания';
    messageInput.placeholder = 'Сообщение';
  } else {
    nameInput.placeholder = 'Name';
    emailInput.placeholder = 'Email';
    phoneInput.placeholder = 'Phone';
    companyInput.placeholder = 'Company';
    messageInput.placeholder = 'Message';
  }
  // Update nav visibility for small screens? not needed
}

// Language switcher buttons
document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const selectedLang = btn.getAttribute('data-lang');
    // Remove active class from all
    document.querySelectorAll('.lang-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    updateLanguage(selectedLang);
  });
});

// Initial translation on page load
updateLanguage(currentLang);

// Hide header on scroll down and show on scroll up
let lastScrollY = window.scrollY;
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  const headerHeight = header.offsetHeight;
  if (currentY > lastScrollY && currentY > headerHeight) {
    // scrolling down
    header.style.transform = 'translateY(-100%)';
  } else {
    // scrolling up
    header.style.transform = 'translateY(0)';
  }
  lastScrollY = currentY;
});

// IntersectionObserver for fade-in elements
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll('.fade-in').forEach((el) => {
  observer.observe(el);
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const company = document.getElementById('company').value;
  const message = document.getElementById('message').value;
  // Construct mailto link
  const subject = encodeURIComponent('Contact BSmart Website');
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nMessage: ${message}`
  );
  const mailtoLink = `mailto:morari.nicolae1998@gmail.com?subject=${subject}&body=${body}`;
  // Open default email client
  window.location.href = mailtoLink;
});

// Example: function to send form data to Bitrix24 CRM using fetch
// To use in production, replace URL and parameters with actual Bitrix24 webhook
/*
function sendToBitrix24(data) {
  fetch('https://your-bitrix24-domain/rest/1/your-webhook/lead.add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: data })
  })
    .then((response) => response.json())
    .then((result) => console.log('Bitrix24 result:', result))
    .catch((error) => console.error('Bitrix24 error:', error));
}
*/