/**
 * i18n Translation Engine for SamadhanSetu
 */

const translations = {
    en: {
        welcome: "Report. Track. Resolve.",
        subtitle: "Your transparent local platform for reporting, tracking, and resolving community civic issues.",
        home: "Home",
        trackIssue: "Track Issue",
        submitIssue: "Submit Issue",
        dashboard: "Dashboard",
        adminDashboard: "Admin Dashboard",
        findWorkers: "Find Workers",
        reviews: "Reviews",
        login: "Admin Login",
        logout: "Logout",
        totalIssues: "Total Issues",
        open: "Open",
        resolved: "Resolved"
    },
    hi: {
        welcome: "रिपोर्ट करें। ट्रैक करें। समाधान पाएं।",
        subtitle: "सामुदायिक नागरिक समस्याओं की रिपोर्टिंग, ट्रैकिंग और समाधान के लिए आपका पारदर्शी स्थानीय मंच।",
        home: "होम",
        trackIssue: "समस्या ट्रैक करें",
        submitIssue: "સમસ્યા દર્જ કરો",
        dashboard: "ડેશબોર્ડ",
        adminDashboard: "एडमिन डैशबोर्ड",
        findWorkers: "निजी कर्मचारी खोजें",
        reviews: "समीक्षाएं",
        login: "एडमिन लॉगिन",
        logout: "लॉगआउट",
        totalIssues: "कुल शिकायतें",
        open: "लंबित",
        resolved: "समाधानित"
    },
    te: {
        welcome: "నివేదించండి. ట్రాక్ చేయండి. పరిష్కరించండి.",
        subtitle: "పౌర సమస్యలను నివేదించడానికి, ట్రాక్ చేయడానికి మరియు పరిష్కరించడానికి మీ పారదర్శక స్థానిక ప్లాట్‌ఫారమ్.",
        home: "హోమ్",
        trackIssue: "సమస్యను ట్రాక్ చేయండి",
        submitIssue: "సమస్యను సమర్పించండి",
        dashboard: "డాష్‌బోర్డ్",
        adminDashboard: "అడ్మిన్ డాష్‌బోర్డ్",
        findWorkers: "వర్కర్లను కనుగొనండి",
        reviews: "సమీక్షలు",
        login: "అడ్મિన్ లాగిన్",
        logout: "లాగౌట్",
        totalIssues: "మొత్తం ఫిర్యాదులు",
        open: "ఓపెన్",
        resolved: "పరిష్కరించబడింది"
    },
    gu: {
        welcome: "રિપોર્ટ કરો. ટ્રેક કરો. ઉકેલ મેળવો.",
        subtitle: "નાગરિક સમસ્યાઓની નોંધણી, ટ્રેકિંગ અને ઉકેલ માટે તમારું પારદર્શક સ્થાનિક મંચ.",
        home: "હોમ",
        trackIssue: "સમસ્યા ટ્રેક કરો",
        submitIssue: "સમસ્યા નોંધાવો",
        dashboard: "ડેશબોર્ડ",
        adminDashboard: "એડમિન ડેશબોર્ડ",
        findWorkers: "કામદારો શોધો",
        reviews: "સમીક્ષાઓ",
        login: "એડમિન લોગિન",
        logout: "લોગઆઉટ",
        totalIssues: "કુલ ફરિયાદો",
        open: "પેન્ડિંગ",
        resolved: "ઉકેલાયેલ"
    },
    mr: {
        welcome: "तक्रार करा. ट्रॅक करा. निवारण मिळवा.",
        subtitle: "नागरी समस्यांची नोंद नोंदवण्यासाठी, मागोवा घेण्यासाठी आणि निराकरण करण्यासाठी आपले पारदर्शक स्थानिक व्यासपीठ.",
        home: "होम",
        trackIssue: "तक्रार ट्रॅक करा",
        submitIssue: "तक्रार नोंदवा",
        dashboard: "डॅशबोर्ड",
        adminDashboard: "ॲडमिन डॅशबोर्ड",
        findWorkers: "कामगार शोधा",
        reviews: "समीक्षा",
        login: "ॲडमिन लॉगिन",
        logout: "लॉगआउट",
        totalIssues: "एकूण तक्रारी",
        open: "प्रलंबित",
        resolved: "निराकरण झाले"
    }
};

let currentLang = 'en';

export function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

export function getCurrentLanguage() {
    return currentLang;
}
