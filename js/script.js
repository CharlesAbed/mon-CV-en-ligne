(function () {
    const EMAILJS_PUBLIC_KEY = 'GN3JGMK9pn0p0qFbB';
    const EMAILJS_SERVICE_ID = 'service_t9lmvkj';
    const EMAILJS_TEMPLATE_ID = 'template_gqd3spm';

    const englishCopy = {
        navigationLabel: 'Main navigation',
        languageGroup: 'Language selection',
        switchToEnglish: 'Switch to English',
        switchToFrench: 'Switch to French',
        navProfile: 'Profile',
        navEducation: 'Education',
        navExperience: 'Experience',
        navProjects: 'Projects',
        navContact: 'Contact',
        pageTitle: 'Charles ABED | Resume',
        metaDescription: 'Online resume of Charles ABED, pharmacy graduate transitioning into digital health.',
        heroEyebrow: 'RESUME · 2026',
        heroSubtitle: 'From Pharmacy to Digital Health',
        heroDescription: 'After four years of pharmacy studies, I am now pursuing a pre-MSc in Computer Science at Epitech Nantes, with the goal of contributing to innovation in digital health.',
        heroObjective: 'I am seeking a work-study placement from January to August 2027, where I can bring my combined healthcare and digital background to projects in management, data analysis and digital transformation.',
        ctaContact: 'Contact me',
        ctaExplore: 'Explore my experience ↓',
        sectionProfile: 'Profile',
        profileParagraphOne: 'My background brings together two fields that interest me: healthcare and computer science.',
        profileParagraphTwo: 'After several years studying pharmacy, I am now training in software development at Epitech Nantes, with the aim of bringing these two fields together.',
        sectionSkills: 'Skills',
        skillsTools: 'Technical skills',
        skillsDigital: 'Digital',
        skillsOffice: 'Office software',
        skillsPharmacy: 'Pharmacy practice',
        pharmacySkillOne: 'Patient reception and advice',
        pharmacySkillTwo: 'Patient record follow-up',
        pharmacySkillThree: 'Stock management',
        pharmacySkillFour: 'Order management',
        skillsInterpersonal: 'Interpersonal skills',
        softSkillOne: 'Communication skills',
        softSkillTwo: 'Teamwork',
        softSkillThree: 'Adaptability',
        softSkillFour: 'Initiative',
        softSkillFive: 'Stress management',
        skillsOther: 'Other skills',
        otherSkillOne: 'Scientific rigor',
        otherSkillTwo: 'Analysis and problem-solving',
        otherSkillThree: 'Autonomy',
        sectionLanguages: 'Languages',
        languageSpanish: 'Spanish: B1 level',
        languageEnglish: 'English: C2 level',
        sectionDetails: 'Contact details',
        labelLocation: 'Location',
        labelEmail: 'Email',
        labelPhone: 'Phone',
        labelLinkedIn: 'LinkedIn',
        linkLinkedIn: 'My LinkedIn profile',
        labelGitHub: 'GitHub',
        linkGitHub: 'My GitHub profile',
        sectionInterests: 'Interests',
        interestTechTitle: 'Computer science',
        interestTechDescription: 'Software development, programming and new technologies.',
        interestMusicTitle: 'Music',
        interestMusicDescription: 'Piano player. I have taught beginner-to-intermediate piano to children and adults.',
        interestGamingTitle: 'Video games',
        interestGamingDescription: 'Strategy, problem-solving and video game worlds.',
        interestLearningTitle: 'Learning',
        interestLearningDescription: 'Discovering new knowledge and personal development.',
        sectionEducation: 'Education',
        datePresent: '2026 – present',
        statusCurrent: 'Current training',
        degreeCurrent: 'Pre-MSc in Computer Science',
        educationDescriptionCurrent: 'Training in computer science fundamentals and software development.',
        datePrevious: 'Previous studies',
        degreePrevious: 'Pharmacy studies',
        educationDescriptionPrevious: 'University studies in pharmaceutical sciences.',
        sectionExperience: 'Professional experience',
        employmentPermanent: 'Permanent contract · Nantes',
        experienceSummary: 'Community pharmacy experience in an environment requiring accuracy, organization and the ability to manage many requests at once.',
        experienceOneTaskOne: 'Welcomed, advised and supported patients',
        experienceOneTaskTwo: 'Managed patient records and checked prescriptions',
        experienceOneTaskThree: 'Managed stock, orders and cash registers',
        experienceOneTaskFour: 'Contributed to vaccination, prevention and screening activities',
        skillAccuracy: 'Accuracy',
        skillOrganization: 'Organization',
        skillPriorities: 'Prioritization',
        skillUserRelations: 'User relations',
        employmentInternship: 'Third-year internship · fixed-term contract · Nantes',
        experienceTwoTaskOne: 'Welcomed and advised patients',
        experienceTwoTaskTwo: 'Followed up patient records',
        experienceTwoTaskThree: 'Managed stock, orders and cash registers',
        experienceTwoTaskFour: 'Used and managed the prescription preparation robot',
        skillProcedures: 'Procedures',
        skillAutomation: 'Automated tools',
        experienceThreeTaskOne: 'Welcomed and advised patients',
        experienceThreeTaskTwo: 'Dispensed medication',
        experienceThreeTaskThree: 'Followed up patient records',
        experienceThreeTaskFour: 'Managed stock and orders',
        skillPatientRelations: 'Patient relations',
        employmentHospital: 'Fixed-term contract – Pharmacy technician · Hospital pharmacy · Nantes',
        experienceFourTaskOne: 'Prepared medication for the clinic departments',
        experienceFourTaskTwo: 'Restocked medicines and medical devices in department dispensaries',
        skillProcedureCompliance: 'Compliance with procedures',
        moreExperienceSummary: 'View additional experience',
        moreExperienceDescription: 'Other professional experience outside pharmacy includes roles in retail (Intermarché, in-store and online order fulfilment), leaflet distribution for Andegave Société, and restaurant service at Dubrown Restaurant.',
        sectionProjects: 'Software projects',
        projectOneTitle: 'Hangman — building a game from scratch',
        projectOneType: 'Python project · Epitech',
        projectOneIntro: 'A project that accompanied my first steps in programming, gradually growing from a terminal game into a graphical application.',
        projectOneDescription: 'I started by building the game logic and input handling, then added an external word list, command-line arguments, customization options and error handling. The project later grew to include a high-score system and a graphical interface built with Pygame.',
        projectTwoTitle: 'Online CV — learning by building',
        projectTwoType: 'Personal project',
        projectTwoIntro: 'This CV has become a hands-on project where I can directly apply what I am learning in computer science.',
        projectTwoDescription: 'I am progressively developing the web interface, responsive design, animations and content structure. The site evolves alongside my studies and reflects my path from pharmaceutical sciences to digital technology.',
        sectionContact: 'Contact me',
        contactDescription: 'Would you like to get in touch? Send me a message.',
        formName: 'Name',
        formEmail: 'Email address',
        formSubject: 'Subject',
        formMessage: 'Message',
        formSubmit: 'Send message',
        formSending: 'Sending...',
        footerText: 'Charles ABED · Digital Health · Nantes',
        backToTop: 'Back to top ↑'
    };

    const frenchInterface = {
        navigationLabel: 'Navigation principale',
        languageGroup: 'Choix de la langue',
        switchToEnglish: 'Passer le site en anglais',
        switchToFrench: 'Passer le site en français',
        pageTitle: 'Charles ABED | CV',
        metaDescription: 'CV en ligne de Charles ABED, étudiant en informatique.',
        formSending: 'Envoi en cours...',
        formSubmit: 'Envoyer le message'
    };

    const frenchText = new Map(
        [...document.querySelectorAll('[data-i18n]')].map((element) => [element, element.textContent])
    );
    const languageButtons = document.querySelectorAll('[data-language]');
    const formMessages = {
        fr: {
            success: 'Votre message a bien été envoyé.',
            errorPrefix: 'Erreur EmailJS :',
            errorFallback: 'Vérifie la clé publique, le service et le template EmailJS.'
        },
        en: {
            success: 'Your message has been sent successfully.',
            errorPrefix: 'EmailJS error:',
            errorFallback: 'Check the public key, service ID and template ID.'
        }
    };

    function applyLanguage(language, persist = true) {
        const selectedLanguage = language === 'en' ? 'en' : 'fr';
        const translations = selectedLanguage === 'en' ? englishCopy : frenchInterface;

        document.documentElement.lang = selectedLanguage;
        document.title = translations.pageTitle;

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.dataset.i18n;
            element.textContent = selectedLanguage === 'en'
                ? englishCopy[key] ?? frenchText.get(element)
                : frenchText.get(element);
        });

        document.querySelectorAll('[data-i18n-content]').forEach((element) => {
            const key = element.dataset.i18nContent;
            element.setAttribute('content', translations[key]);
        });

        document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
            const key = element.dataset.i18nAria;
            element.setAttribute('aria-label', translations[key]);
        });

        languageButtons.forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.language === selectedLanguage));
        });

        if (persist) {
            try {
                localStorage.setItem('cv-language', selectedLanguage);
            } catch {}
        }
    }

    let initialLanguage = 'fr';
    try {
        initialLanguage = localStorage.getItem('cv-language') === 'en' ? 'en' : 'fr';
    } catch {}

    applyLanguage(initialLanguage, false);
    languageButtons.forEach((button) => {
        button.addEventListener('click', () => applyLanguage(button.dataset.language));
    });


    
    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY,
    });

    const form = document.getElementById('contact-form');

    if (!form) {
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        const submitButtonLabel = submitButton.querySelector('[data-i18n="formSubmit"]');

        submitButton.disabled = true;
        submitButtonLabel.dataset.i18n = 'formSending';
        applyLanguage(document.documentElement.lang, false);

        const templateParams = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
            time: new Date().toLocaleString(document.documentElement.lang === 'en' ? 'en-GB' : 'fr-FR'),
            reply_to: form.email.value,
            from_name: form.name.value,
            sender_email: form.email.value,
            sender_name: form.name.value,
            contact_email: form.email.value,
            contact_name: form.name.value
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
            publicKey: EMAILJS_PUBLIC_KEY,
        })
            .then(function () {
                alert(formMessages[document.documentElement.lang].success);
                form.reset();
            })
            .catch(function (error) {
                console.error('Erreur EmailJS :', error);
                const messages = formMessages[document.documentElement.lang];
                const message = error?.text || messages.errorFallback;
                alert(`${messages.errorPrefix} ${message}`);
            })
            .finally(function () {
                submitButton.disabled = false;
                submitButtonLabel.dataset.i18n = 'formSubmit';
                applyLanguage(document.documentElement.lang, false);
            });
    });
})();
