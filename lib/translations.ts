export const translations = {
  ru: {
    // Hero
    heroTitle: "ЛАНДШАФТНЫЙ\nКОД",
    heroSubtitle: "Профессиональное сообщество для тех, кто создаёт пространства будущего.",
    heroCta: "Подать заявку",
    heroScroll: "Листайте вниз",

    // About
    aboutTitle: "Образование нового формата",
    aboutP1:
      "Мы создали уникальную программу обучения ландшафтному дизайну, которая объединяет классические принципы садово-паркового искусства с современными технологиями и экологическим подходом.",
    aboutP2:
      "Наша школа работает по системе приглашений, что позволяет формировать сообщество единомышленников и обеспечивать индивидуальный подход к каждому студенту.",
    aboutP3: "Преподаватели — практикующие ландшафтные архитекторы с международным опытом и реализованными проектами.",

    // Features
    featuresTitle: "Почему выбирают нас",
    feature1Title: "Практический подход",
    feature1Desc:
      "Работа над реальными проектами с первого месяца обучения. Создание портфолио под руководством наставников.",
    feature2Title: "Малые группы",
    feature2Desc: "До 12 человек в группе для максимального внимания каждому студенту и эффективного обмена опытом.",
    feature3Title: "Современные методы",
    feature3Desc: "Изучение 3D-моделирования, работа с профессиональным ПО, основы устойчивого дизайна и экологии.",
    feature4Title: "Нетворкинг",
    feature4Desc: "Доступ к сообществу профессионалов, мастер-классы приглашённых экспертов, совместные проекты.",

    // Registration Form
    formTitle: "Подать заявку на обучение",
    formSubtitle: "Заполните форму, и мы свяжемся с вами для обсуждения возможности присоединения к следующему набору",
    formFullName: "Полное имя",
    formEmail: "Email",
    formPhone: "Телефон",
    formMessage: "Расскажите о себе и своих целях",
    formMessagePlaceholder: "Опишите ваш опыт, интересы и что вы хотите получить от обучения...",
    formSubmit: "Отправить заявку",
    formSubmitting: "Отправка...",
    formSuccess: "Заявка отправлена!",
    formSuccessMessage: "Спасибо! Мы свяжемся с вами в ближайшее время.",
    formPrivacy: "Отправляя форму, вы соглашаетесь на обработку персональных данных",

    // Login
    loginButton: "Вход",
    loginTitle: "Вход в систему",
    loginEmail: "Email",
    loginPassword: "Пароль",
    loginSubmit: "Войти",
    loginForgot: "Забыли пароль?",
    loginClose: "Закрыть",
    loginError: "Пользователь не найден",

    // Footer
    footerContacts: "Контакты",
    footerPhone: "Телефон",
    footerAddress: "Адрес",
    footerAddressText: "улица Карасай батыра, 120б, Алматы",
    footerCopyright: "© 2025 Ландшафтный Код. Все права защищены.",
  },
  en: {
    // Hero
    heroTitle: "LANDSCAPE\nCODE",
    heroSubtitle: "Professional community for those who create the spaces of the future.",
    heroCta: "Apply Now",
    heroScroll: "Scroll down",

    // About
    aboutTitle: "Education Reimagined",
    aboutP1:
      "We have created a unique landscape design education program that combines classical principles of garden and park art with modern technologies and an ecological approach.",
    aboutP2:
      "Our school operates on an invitation-only basis, allowing us to form a community of like-minded individuals and provide an individual approach to each student.",
    aboutP3:
      "Our instructors are practicing landscape architects with international experience and completed projects.",

    // Features
    featuresTitle: "Why Choose Us",
    feature1Title: "Practical Approach",
    feature1Desc:
      "Work on real projects from the first month of study. Build your portfolio under the guidance of mentors.",
    feature2Title: "Small Groups",
    feature2Desc: "Up to 12 people per group for maximum attention to each student and effective knowledge exchange.",
    feature3Title: "Modern Methods",
    feature3Desc:
      "Study 3D modeling, work with professional software, learn the basics of sustainable design and ecology.",
    feature4Title: "Networking",
    feature4Desc: "Access to a community of professionals, masterclasses with invited experts, collaborative projects.",

    // Registration Form
    formTitle: "Apply for Admission",
    formSubtitle: "Fill out the form and we will contact you to discuss the possibility of joining the next cohort",
    formFullName: "Full Name",
    formEmail: "Email",
    formPhone: "Phone",
    formMessage: "Tell us about yourself and your goals",
    formMessagePlaceholder: "Describe your experience, interests, and what you want to gain from the program...",
    formSubmit: "Submit Application",
    formSubmitting: "Submitting...",
    formSuccess: "Application Submitted!",
    formSuccessMessage: "Thank you! We will contact you shortly.",
    formPrivacy: "By submitting this form, you agree to the processing of personal data",

    // Login
    loginButton: "Login",
    loginTitle: "Sign In",
    loginEmail: "Email",
    loginPassword: "Password",
    loginSubmit: "Sign In",
    loginForgot: "Forgot password?",
    loginClose: "Close",
    loginError: "User not found",

    // Footer
    footerContacts: "Contacts",
    footerPhone: "Phone",
    footerAddress: "Address",
    footerAddressText: "Karasai Batyr Street, 120b, Almaty",
    footerCopyright: "© 2025 Landscape Code. All rights reserved.",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.ru
