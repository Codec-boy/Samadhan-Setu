// ===== Language/Internationalization System =====
const i18n = {
    currentLanguage: localStorage.getItem('SamadhanSetuLanguage') || 'en',
    translations: {
        en: {
            // Navigation
            home: 'Home',
            trackIssue: 'Track Issue',
            submitIssue: 'Submit Issue',
            reviews: 'Reviews',
            dashboard: 'Dashboard',
            logout: 'Logout',
            // Home
            welcome: 'Welcome to SamadhanSetu',
            subtitle: 'Your local platform for reporting and tracking civic issues',
            totalIssues: 'Total Issues',
            open: 'Open',
            resolved: 'Resolved',
            achievements: 'Our Achievements',
            solvedIssues: 'Solved Issues',
            recentIssues: 'Recent Issues',
            // Forms
            title: 'Title',
            description: 'Description',
            category: 'Category',
            address: 'Address',
            uploadIssue: 'Upload Issue',
            submit: 'Submit',
            required: '*',
            // Categories
            infrastructure: 'Infrastructure',
            safety: 'Safety',
            environment: 'Environment',
            transportation: 'Transportation',
            utilities: 'Utilities',
            other: 'Other',
            // Status
            submitted: 'Submitted',
            dispatched: 'Dispatched',
            inProgress: 'In Progress',
            resolved: 'Resolved',
            open: 'Open',
            // Track
            enterIssueId: 'Enter Issue ID',
            track: 'Track',
            // Track page
            searchLocation: 'Search Location on Map (Optional)',
            // Voice
            voiceReport: 'Voice Report',
            startRecording: 'Start Recording',
            stopRecording: 'Stop Recording',
            listening: 'Listening...',
            // Priority
            priority: 'Priority',
            critical: 'Critical',
            moderate: 'Moderate',
            minor: 'Minor',
            // Representative
            assignedTo: 'Assigned To',
            phoneNumber: 'Phone Number',
            expectedResolution: 'Expected Resolution',
            // Common
            comments: 'Comments',
            upvote: 'Upvote',
            addComment: 'Add Comment',
            close: 'Close',
            save: 'Save',
            cancel: 'Cancel',
            // Language
            changeLanguage: 'Change Language',
            english: 'English',
            hindi: 'Hindi',
            telugu: 'Telugu',
            tamil: 'Tamil',
            spanish: 'Spanish',
            // Community
            leaderboard: 'Leaderboard',
            polls: 'Polls',
            activeCitizens: 'Active Citizens',
            // Reviews
            submitReview: 'Submit a Review',
            rating: 'Rating',
            yourReview: 'Your Review',
            shareExperience: 'Share your experience with SamadhanSetu...',
            // Auth
            login: 'Login',
            register: 'Register',
            emailOrPhone: 'Email or Phone Number',
            email: 'Email',
            password: 'Password',
            confirmPassword: 'Confirm Password',
            fullName: 'Full Name',
            dontHaveAccount: "Don't have an account?",
            alreadyHaveAccount: 'Already have an account?',
            // Workers
            findWorkers: 'Find Workers',
            registerAsWorker: 'Register as Worker',
            jobRole: 'Job Role',
            experience: 'Years of Experience',
            electrician: 'Electrician',
            plumber: 'Plumber',
            carpenter: 'Carpenter',
            painter: 'Painter',
            mechanic: 'Mechanic',
            cleaner: 'Cleaner',
            gardener: 'Gardener',
            applianceRepair: 'Appliance Repair',
            filterByJobRole: 'Filter by Job Role',
            highestRating: 'Highest Rating',
            mostCompleted: 'Most Completed Jobs',
            mostExperienced: 'Most Experienced',
            // Private/Public Issues
            publicIssue: 'Public Issue',
            privateIssue: 'Private Issue (Household)',
            selectWorker: 'Select Preferred Worker (Optional)',
            browseWorkers: 'Browse Workers',
            estimatedBudget: 'Estimated Budget (₹)',
            electricalWork: 'Electrical Work',
            plumbing: 'Plumbing',
            carpentry: 'Carpentry',
            painting: 'Painting',
            cleaning: 'Cleaning',
            gardening: 'Gardening',
            // Agent
            agentDashboard: 'Agent Dashboard',
            enterWorkId: 'Enter Work ID / Issue ID',
            search: 'Search',
            howToUse: 'How to Use This App',
            helpStep1: 'Enter the Work ID or Issue ID to view complaint details',
            helpStep2: 'View all information about the complaint including address, status, and assigned representative',
            helpStep3: 'Contact customer care if you need assistance resolving the issue',
            helpStep4: 'Update issue status as needed',
            issueSubmitted: 'Issue Successfully Submitted',
            issueSubmittedDesc: 'Your issue has been submitted. You can track its status using the Issue ID:'
        },
        hi: {
            home: 'होम',
            trackIssue: 'समस्या ट्रैक करें',
            submitIssue: 'समस्या दर्ज करें',
            reviews: 'समीक्षाएं',
            dashboard: 'डैशबोर्ड',
            logout: 'लॉगआउट',
            welcome: 'SamadhanSetu में आपका स्वागत है',
            subtitle: 'नागरिक समस्याओं की रिपोर्ट और ट्रैकिंग के लिए आपका स्थानीय प्लेटफॉर्म',
            totalIssues: 'कुल समस्याएं',
            open: 'खुली',
            resolved: 'हल',
            achievements: 'हमारी उपलब्धियां',
            solvedIssues: 'हल की गई समस्याएं',
            recentIssues: 'हाल की समस्याएं',
            title: 'शीर्षक',
            description: 'विवरण',
            category: 'श्रेणी',
            address: 'पता',
            uploadIssue: 'समस्या अपलोड करें',
            submit: 'सबमिट करें',
            required: '*',
            infrastructure: 'अवसंरचना',
            safety: 'सुरक्षा',
            environment: 'पर्यावरण',
            transportation: 'परिवहन',
            utilities: 'उपयोगिताएं',
            other: 'अन्य',
            submitted: 'दर्ज',
            dispatched: 'भेजा गया',
            inProgress: 'प्रगति में',
            resolved: 'हल',
            open: 'खुला',
            enterIssueId: 'समस्या ID दर्ज करें',
            track: 'ट्रैक',
            voiceReport: 'आवाज रिपोर्ट',
            startRecording: 'रिकॉर्डिंग शुरू करें',
            stopRecording: 'रिकॉर्डिंग रोकें',
            listening: 'सुन रहे हैं...',
            priority: 'प्राथमिकता',
            critical: 'गंभीर',
            moderate: 'मध्यम',
            minor: 'मामूली',
            assignedTo: 'असाइन किया गया',
            phoneNumber: 'फोन नंबर',
            expectedResolution: 'अपेक्षित समाधान',
            comments: 'टिप्पणियां',
            upvote: 'अपवोट',
            addComment: 'टिप्पणी जोड़ें',
            close: 'बंद करें',
            save: 'सहेजें',
            cancel: 'रद्द करें',
            changeLanguage: 'भाषा बदलें',
            english: 'अंग्रेजी',
            hindi: 'हिंदी',
            telugu: 'तेलुगू',
            tamil: 'तमिल',
            spanish: 'स्पेनिश',
            leaderboard: 'लीडरबोर्ड',
            polls: 'मतदान',
            activeCitizens: 'सक्रिय नागरिक',
            submitReview: 'समीक्षा सबमिट करें',
            rating: 'रेटिंग',
            yourReview: 'आपकी समीक्षा',
            shareExperience: 'SamadhanSetu के साथ अपने अनुभव को साझा करें...',
            issueId: 'समस्या ID',
            callCustomerCare: 'ग्राहक सेवा को कॉल करें',
            customerCareNumber: 'ग्राहक सेवा नंबर',
            houseNumber: 'मकान नंबर',
            streetName: 'गली का नाम',
            villageName: 'गाँव का नाम',
            mandal: 'मंडल',
            district: 'जिला',
            pincode: 'पिन कोड',
            addressDetails: 'पता विवरण',
            issueDetails: 'समस्या विवरण',
            uploadedImage: 'अपलोड की गई छवि',
            completeAddress: 'पूरा पता',
            searchLocation: 'मानचित्र पर स्थान खोजें (वैकल्पिक)'
        },
        te: {
            home: 'హోమ్',
            trackIssue: 'సమస్యను ట్రాక్ చేయండి',
            submitIssue: 'సమస్యను సమర్పించండి',
            reviews: 'సమీక్షలు',
            dashboard: 'డాష్‌బోర్డ్',
            logout: 'లాగ్ అవుట్',
            welcome: 'SamadhanSetuకు స్వాగతం',
            subtitle: 'పౌర సమస్యలను నివేదించడం మరియు ట్రాక్ చేయడానికి మీ స్థానిక ప్లాట్‌ఫారమ్',
            totalIssues: 'మొత్తం సమస్యలు',
            open: 'తెరిచిన',
            resolved: 'పరిష్కరించబడింది',
            achievements: 'మా విజయాలు',
            solvedIssues: 'పరిష్కరించబడిన సమస్యలు',
            recentIssues: 'ఇటీవలి సమస్యలు',
            title: 'శీర్షిక',
            description: 'వివరణ',
            category: 'వర్గం',
            address: 'చిరునామా',
            uploadIssue: 'సమస్యను అప్‌లోడ్ చేయండి',
            submit: 'సమర్పించండి',
            required: '*',
            infrastructure: 'మౌలిక సదుపాయాలు',
            safety: 'భద్రత',
            environment: 'పర్యావరణం',
            transportation: 'రవాణా',
            utilities: 'యుటిలిటీలు',
            other: 'ఇతర',
            submitted: 'సమర్పించబడింది',
            dispatched: 'పంపబడింది',
            inProgress: 'ప్రగతిలో ఉంది',
            resolved: 'పరిష్కరించబడింది',
            open: 'తెరిచిన',
            enterIssueId: 'సమస్య ID నమోదు చేయండి',
            track: 'ట్రాక్',
            voiceReport: 'వాయిస్ రిపోర్ట్',
            startRecording: 'రికార్డింగ్ ప్రారంభించండి',
            stopRecording: 'రికార్డింగ్ ఆపండి',
            listening: 'వింటున్నారు...',
            priority: 'ప్రాధాన్యత',
            critical: 'క్లిష్టమైన',
            moderate: 'మధ్యస్థ',
            minor: 'చిన్న',
            assignedTo: 'కేటాయించబడింది',
            phoneNumber: 'ఫోన్ నంబర్',
            expectedResolution: 'అనుకున్న పరిష్కారం',
            comments: 'వ్యాఖ్యలు',
            upvote: 'అప్‌వోట్',
            addComment: 'వ్యాఖ్య జోడించండి',
            close: 'మూసివేయండి',
            save: 'సేవ్ చేయండి',
            cancel: 'రద్దు చేయండి',
            changeLanguage: 'భాష మార్చండి',
            english: 'ఆంగ్లం',
            hindi: 'హిందీ',
            telugu: 'తెలుగు',
            tamil: 'తమిళం',
            kannada: 'కన్నడ',
            spanish: 'స్పానిష్',
            leaderboard: 'లీడర్‌బోర్డ్',
            polls: 'ఓటింగ్',
            activeCitizens: 'క్రియాశీల పౌరులు',
            submitReview: 'సమీక్షను సమర్పించండి',
            rating: 'రేటింగ్',
            yourReview: 'మీ సమీక్ష',
            shareExperience: 'SamadhanSetuతో మీ అనుభవాన్ని భాగస్వామ్యం చేయండి...',
            issueId: 'సమస్య ID',
            callCustomerCare: 'కస్టమర్ కేర్ కి కాల్ చేయండి',
            customerCareNumber: 'కస్టమర్ కేర్ నంబర్',
            houseNumber: 'ఇంటి నంబర్',
            streetName: 'వీధి పేరు',
            villageName: 'గ్రామం పేరు',
            mandal: 'మండలం',
            district: 'జిల్లా',
            pincode: 'పిన్ కోడ్',
            addressDetails: 'చిరునామా వివరాలు',
            issueDetails: 'సమస్య వివరాలు',
            uploadedImage: 'అప్‌లోడ్ చేసిన చిత్రం',
            completeAddress: 'పూర్తి చిరునామా',
            searchLocation: 'మ్యాప్‌లో స్థానాన్ని శోధించండి (ఐచ్ఛికం)'
        },
        ta: {
            home: 'முகப்பு',
            trackIssue: 'பிரச்சினையை கண்காணி',
            submitIssue: 'பிரச்சினையை சமர்ப்பிக்கவும்',
            reviews: 'விமர்சனங்கள்',
            dashboard: 'டாஷ்போர்டு',
            logout: 'வெளியேற',
            welcome: 'SamadhanSetuக்கு வரவேற்கிறோம்',
            subtitle: 'சிவில் பிரச்சினைகளை அறிவித்தல் மற்றும் கண்காணிப்பதற்கான உங்கள் உள்ளூர் தளம்',
            totalIssues: 'மொத்த பிரச்சினைகள்',
            open: 'திறந்த',
            resolved: 'தீர்ந்தது',
            achievements: 'எங்கள் சாதனைகள்',
            solvedIssues: 'தீர்த்த பிரச்சினைகள்',
            recentIssues: 'சமீபத்திய பிரச்சினைகள்',
            title: 'தலைப்பு',
            description: 'விளக்கம்',
            category: 'வகை',
            address: 'முகவரி',
            uploadIssue: 'பிரச்சினையை பதிவேற்றவும்',
            submit: 'சமர்ப்பிக்கவும்',
            required: '*',
            infrastructure: 'உள்கட்டமைப்பு',
            safety: 'பாதுகாப்பு',
            environment: 'சுற்றுச்சூழல்',
            transportation: 'போக்குவரத்து',
            utilities: 'பயன்பாடுகள்',
            other: 'மற்ற',
            submitted: 'சமர்ப்பிக்கப்பட்டது',
            dispatched: 'அனுப்பப்பட்டது',
            inProgress: 'நடைபெறுகிறது',
            resolved: 'தீர்ந்தது',
            open: 'திறந்த',
            enterIssueId: 'பிரச்சினை ID ஐ உள்ளிடவும்',
            track: 'கண்காணி',
            voiceReport: 'குரல் அறிக்கை',
            startRecording: 'பதிவு தொடங்க',
            stopRecording: 'பதிவு நிறுத்த',
            listening: 'கேட்டுக் கொண்டிருக்கிறது...',
            priority: 'முன்னுரிமை',
            critical: 'முக்கியமான',
            moderate: 'மிதமான',
            minor: 'சிறிய',
            assignedTo: 'ஒதுக்கப்பட்டது',
            phoneNumber: 'தொலைபேசி எண்',
            expectedResolution: 'எதிர்பார்க்கப்படும் தீர்வு',
            comments: 'கருத்துகள்',
            upvote: 'வாக்களி',
            addComment: 'கருத்து சேர்',
            close: 'மூடு',
            save: 'சேமி',
            cancel: 'ரத்துசெய்',
            changeLanguage: 'மொழி மாற்ற',
            english: 'ஆங்கிலம்',
            hindi: 'இந்தி',
            telugu: 'தெலுங்கு',
            tamil: 'தமிழ்',
            kannada: 'கன்னடம்',
            spanish: 'ஸ்பானிஷ்',
            leaderboard: 'முன்னணி',
            polls: 'வாக்கெடுப்புகள்',
            activeCitizens: 'செயலில் உள்ள குடிமக்கள்',
            submitReview: 'விமர்சனத்தை சமர்ப்பிக்கவும்',
            rating: 'மதிப்பீடு',
            yourReview: 'உங்கள் விமர்சனம்',
            shareExperience: 'SamadhanSetu உடன் உங்கள் அனுபவத்தை பகிர்ந்து கொள்ளுங்கள்...',
            issueId: 'பிரச்சினை ID',
            callCustomerCare: 'வாடிக்கையாளர் சேவைக்கு அழைக்கவும்',
            customerCareNumber: 'வாடிக்கையாளர் சேவை எண்',
            houseNumber: 'வீட்டு எண்',
            streetName: 'தெரு பெயர்',
            villageName: 'கிராமம் பெயர்',
            mandal: 'மண்டலம்',
            district: 'மாவட்டம்',
            pincode: 'அஞ்சல் குறியீடு',
            addressDetails: 'முகவரி விவரங்கள்',
            issueDetails: 'பிரச்சினை விவரங்கள்',
            uploadedImage: 'பதிவேற்றப்பட்ட படம்',
            completeAddress: 'முழு முகவரி',
            searchLocation: 'வரைபடத்தில் இடத்தைத் தேடு (விருப்பமானது)'
        },
        mr: {
    home: 'मुख्यपृष्ठ',
    trackIssue: 'समस्या ट्रॅक करा',
    submitIssue: 'समस्या नोंदवा',
    reviews: 'पुनरावलोकने',
    dashboard: 'डॅशबोर्ड',
    logout: 'लॉगआउट',
    welcome: 'SamadhanSetu मध्ये आपले स्वागत आहे',
    subtitle: 'नागरिक समस्या नोंदवण्यासाठी आणि ट्रॅक करण्यासाठी तुमचे स्थानिक व्यासपीठ',
    totalIssues: 'एकूण समस्या',
    open: 'उघडी',
    resolved: 'निकाली काढलेल्या',
    achievements: 'आमची कामगिरी',
    solvedIssues: 'निकाली काढलेल्या समस्या',
    recentIssues: 'अलीकडील समस्या',
    title: 'शीर्षक',
    description: 'वर्णन',
    category: 'श्रेणी',
    address: 'पत्ता',
    uploadIssue: 'समस्या अपलोड करा',
    submit: 'सबमिट करा',
    required: '*',
    infrastructure: 'पायाभूत सुविधा',
    safety: 'सुरक्षा',
    environment: 'पर्यावरण',
    transportation: 'वाहतूक',
    utilities: 'सुविधा',
    other: 'इतर',
    submitted: 'सबमिट केले',
    dispatched: 'पाठवले',
    inProgress: 'प्रगतीत',
    resolved: 'निकाली काढले',
    open: 'उघडे',
    enterIssueId: 'समस्या आयडी प्रविष्ट करा',
    track: 'ट्रॅक करा',
    voiceReport: 'आवाजाद्वारे अहवाल',
    startRecording: 'रेकॉर्डिंग सुरू करा',
    stopRecording: 'रेकॉर्डिंग थांबवा',
    listening: 'ऐकत आहे...',
    priority: 'प्राधान्य',
    critical: 'गंभीर',
    moderate: 'मध्यम',
    minor: 'लहान',
    assignedTo: 'नियुक्त केले',
    phoneNumber: 'फोन नंबर',
    expectedResolution: 'अपेक्षित निराकरण',
    comments: 'टिप्पण्या',
    upvote: 'अपव्होट',
    addComment: 'टिप्पणी जोडा',
    close: 'बंद करा',
    save: 'जतन करा',
    cancel: 'रद्द करा',
    changeLanguage: 'भाषा बदला',
    english: 'इंग्रजी',
    hindi: 'हिंदी',
    telugu: 'तेलुगू',
    tamil: 'तमिळ',
    marathi: 'मराठी',
    spanish: 'स्पॅनिश',
    leaderboard: 'लीडरबोर्ड',
    polls: 'मतदान',
    activeCitizens: 'सक्रिय नागरिक',
    submitReview: 'पुनरावलोकन सबमिट करा',
    rating: 'रेटिंग',
    yourReview: 'तुमचे पुनरावलोकन',
    shareExperience: 'SamadhanSetu सोबतचा तुमचा अनुभव शेअर करा...',
    issueId: 'समस्या आयडी',
    callCustomerCare: 'ग्राहक सेवेला कॉल करा',
    customerCareNumber: 'ग्राहक सेवा क्रमांक',
    houseNumber: 'घर क्रमांक',
    streetName: 'रस्त्याचे नाव',
    villageName: 'गावाचे नाव',
    mandal: 'मंडळ',
    district: 'जिल्हा',
    pincode: 'पिन कोड',
    addressDetails: 'पत्ता तपशील',
    issueDetails: 'समस्या तपशील',
    uploadedImage: 'अपलोड केलेले चित्र',
    completeAddress: 'पूर्ण पत्ता',
    searchLocation: 'नकाशावर स्थान शोधा (पर्यायी)'
}
    },
    t(key) {
        return this.translations[this.currentLanguage]?.[key] || this.translations.en[key] || key;
    },
    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('SamadhanSetuLanguage', lang);
        this.updatePageLanguage();
    },
    updatePageLanguage() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = i18n.t(key);
            } else {
                el.textContent = i18n.t(key);
            }
        });
    }
};

// ===== Data Management =====
class IssueManager {
    constructor() {
        this.storageKey = 'SamadhanSetuIssues';
        this.issues = [];
        this.currentUser = this.getCurrentUser();
        // Load issues from server as source of truth
        this.fetchServerIssues();
    }
    
    async fetchServerIssues() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/issues/all/');
            if(res.ok) {
                this.issues = await res.json();
                this.saveIssues(); // Store for backup/offline usage
                // Trigger UI reload since we got fresh data
                if (app && app.currentPage === 'home' && typeof loadHomePage === 'function') loadHomePage();
                else if (app && app.currentPage === 'dashboard' && typeof loadDashboard === 'function') loadDashboard();
            } else {
                throw new Error("Server responded with status: " + res.status);
            }
        } catch (e) {
            console.error("Failed to fetch server issues, loading from local cache:", e);
            this.issues = this.loadIssues();
        }
    }

    loadIssues() {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
            return JSON.parse(stored);
        }
        return [];
    }

    saveIssues() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.issues));
    }

    getCurrentUser() {
        let userId = localStorage.getItem('SamadhanSetuUserId');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('SamadhanSetuUserId', userId);
        }
        return userId;
    }

    addIssue(issueFromServer) {
        // Appends the server-created issue to local UI state
        // Representative logic is done here for local display assignment
        if (!issueFromServer.assignedTo && issueFromServer.type !== 'private') {
            issueFromServer.assignedTo = this.assignRepresentative(issueFromServer.category);
        }
        if (!issueFromServer.expectedResolution) {
            issueFromServer.expectedResolution = this.calculateExpectedResolution(issueFromServer.priority);
        }
        
        this.issues.unshift(issueFromServer);
        this.saveIssues();
        return issueFromServer;
    }
    
    // AI-based categorization
    categorizeIssue(text) {
        if (!text) return 'other';
        const lowerText = text.toLowerCase();
        
        const keywords = {
            infrastructure: ['pothole', 'road', 'bridge', 'building', 'construction', 'crack', 'damage', 'repair'],
            safety: ['light', 'streetlight', 'lamp', 'dark', 'unsafe', 'danger', 'crime', 'security', 'emergency'],
            environment: ['garbage', 'waste', 'trash', 'dump', 'pollution', 'air', 'water', 'tree', 'park', 'green'],
            transportation: ['traffic', 'signal', 'bus', 'vehicle', 'parking', 'road', 'highway', 'junction'],
            utilities: ['water', 'electricity', 'power', 'drainage', 'sewer', 'pipe', 'leak', 'connection']
        };
        
        let maxScore = 0;
        let bestCategory = 'other';
        
        for (const [category, words] of Object.entries(keywords)) {
            let score = 0;
            for (const word of words) {
                if (lowerText.includes(word)) {
                    score++;
                }
            }
            if (score > maxScore) {
                maxScore = score;
                bestCategory = category;
            }
        }
        
        return bestCategory;
    }
    
    // Auto-priority calculation
    calculatePriority(category, description, upvotes) {
        let score = 0;
        const lowerDesc = (description || '').toLowerCase();
        
        // Category-based scoring
        const categoryScores = {
            safety: 30,
            infrastructure: 25,
            utilities: 20,
            environment: 15,
            transportation: 15,
            other: 10
        };
        score += categoryScores[category] || 10;
        
        // Severity keywords
        const criticalKeywords = ['emergency', 'urgent', 'danger', 'dangerous', 'critical', 'severe', 'immediate', 'accident', 'fire', 'flood'];
        const moderateKeywords = ['broken', 'damaged', 'not working', 'issue', 'problem', 'need'];
        
        for (const word of criticalKeywords) {
            if (lowerDesc.includes(word)) {
                score += 40;
                break;
            }
        }
        
        if (score < 50) {
            for (const word of moderateKeywords) {
                if (lowerDesc.includes(word)) {
                    score += 20;
                    break;
                }
            }
        }
        
        // Upvotes boost
        score += Math.min(upvotes * 2, 30);
        
        // Determine priority
        if (score >= 70) return 'critical';
        if (score >= 40) return 'moderate';
        return 'minor';
    }
    
    // Assign representative based on category
    assignRepresentative(category) {
        const representatives = this.getRepresentatives();
        const categoryReps = representatives.filter(rep => rep.categories.includes(category));
        
        if (categoryReps.length === 0) {
            return representatives[0] || this.createDefaultRepresentative();
        }
        
        // Assign to representative with least workload and best rating
        const sorted = categoryReps.sort((a, b) => {
            const workloadA = this.getRepresentativeWorkload(a.id);
            const workloadB = this.getRepresentativeWorkload(b.id);
            if (workloadA !== workloadB) {
                return workloadA - workloadB;
            }
            return b.rating - a.rating;
        });
        
        return sorted[0];
    }
    
    getRepresentativeWorkload(repId) {
        return this.issues.filter(issue => 
            issue.assignedTo && issue.assignedTo.id === repId && 
            issue.status !== 'resolved'
        ).length;
    }
    
    calculateExpectedResolution(priority) {
        const now = new Date();
        const hours = {
            critical: 24,
            moderate: 72,
            minor: 168 // 7 days
        };
        const hoursToAdd = hours[priority] || hours.minor;
        const expectedDate = new Date(now.getTime() + hoursToAdd * 60 * 60 * 1000);
        return expectedDate.toISOString();
    }
    
    updateIssuePriority(issueId) {
        const issue = this.getIssue(issueId);
        if (!issue) return;
        const newPriority = this.calculatePriority(issue.category, issue.description, issue.upvotes);
        if (issue.priority !== newPriority) {
            issue.priority = newPriority;
            issue.expectedResolution = this.calculateExpectedResolution(newPriority);
            this.saveIssues();
        }
    }
    
    getRepresentatives() {
        const stored = localStorage.getItem('SamadhanSetuRepresentatives');
        if (stored) {
            return JSON.parse(stored);
        }
        // Default representatives
        const defaults = [
            {
                id: 'rep1',
                name: 'Rajesh Kumar',
                phone: '+91-9876543210',
                email: 'rajesh.kumar@SamadhanSetu.gov',
                categories: ['infrastructure', 'transportation'],
                rating: 4.5,
                salary: 50000,
                resolvedCount: 150,
                pendingCount: 5
            },
            {
                id: 'rep2',
                name: 'Priya Sharma',
                phone: '+91-9876543211',
                email: 'priya.sharma@SamadhanSetu.gov',
                categories: ['safety', 'environment'],
                rating: 4.8,
                salary: 52000,
                resolvedCount: 180,
                pendingCount: 3
            },
            {
                id: 'rep3',
                name: 'Amit Patel',
                phone: '+91-9876543212',
                email: 'amit.patel@SamadhanSetu.gov',
                categories: ['utilities', 'other'],
                rating: 4.2,
                salary: 48000,
                resolvedCount: 120,
                pendingCount: 7
            }
        ];
        localStorage.setItem('SamadhanSetuRepresentatives', JSON.stringify(defaults));
        return defaults;
    }
    
    createDefaultRepresentative() {
        return {
            id: 'rep_default',
            name: 'Default Representative',
            phone: '+91-0000000000',
            email: 'default@SamadhanSetu.gov',
            categories: ['other'],
            rating: 4.0,
            salary: 45000,
            resolvedCount: 0,
            pendingCount: 0
        };
    }
    
    updateRepresentativeRating(repId, resolved) {
        const reps = this.getRepresentatives();
        const rep = reps.find(r => r.id === repId);
        if (!rep) return;
        
        if (resolved) {
            rep.resolvedCount++;
            rep.pendingCount = Math.max(0, rep.pendingCount - 1);
            // Increase rating slightly
            rep.rating = Math.min(5.0, rep.rating + 0.01);
        } else {
            // Decrease rating and salary if issue escalated
            rep.rating = Math.max(1.0, rep.rating - 0.1);
            rep.salary = Math.max(30000, rep.salary - 500);
            rep.pendingCount++;
        }
        
        localStorage.setItem('SamadhanSetuRepresentatives', JSON.stringify(reps));
    }
    
    escalateIssue(issueId, reason) {
        const issue = this.getIssue(issueId);
        if (!issue) return null;
        
        issue.escalationHistory.push({
            date: new Date().toISOString(),
            reason: reason,
            escalatedBy: 'Higher Official'
        });
        
        // Update representative rating (negative impact)
        if (issue.assignedTo) {
            this.updateRepresentativeRating(issue.assignedTo.id, false);
        }
        
        // Assign to higher official for review
        issue.assignedTo = {
            id: 'higher_official',
            name: 'Higher Official',
            phone: '+91-9999999999',
            email: 'official@SamadhanSetu.gov'
        };
        
        issue.status = 'escalated';
        issue.updatedAt = new Date().toISOString();
        this.saveIssues();
        return issue;
    }

    getIssue(id) {
        return this.issues.find(issue => issue.id === id);
    }

    getAllIssues() {
        return [...this.issues];
    }

    updateIssueStatus(id, status) {
        const issue = this.getIssue(id);
        if (issue) {
            issue.status = status;
            issue.updatedAt = new Date().toISOString();
            if (status === 'resolved') {
                issue.resolvedAt = new Date().toISOString();
                // Update representative rating positively
                if (issue.assignedTo) {
                    this.updateRepresentativeRating(issue.assignedTo.id, true);
                }
                
                // For private issues, if payment is pending and worker exists, update worker stats
                if (issue.type === 'private' && issue.assignedTo && issue.paymentStatus !== 'paid') {
                    const workers = app.authManager.getWorkers();
                    const worker = workers.find(w => w.id === issue.assignedTo.id);
                    if (worker) {
                        worker.completedJobs = (worker.completedJobs || 0) + 1;
                        app.authManager.saveWorkers(workers);
                    }
                }
            }
            this.saveIssues();
            return issue;
        }
        return null;
    }
    
    processPrivateWorkerPayment(issueId) {
        const issue = this.getIssue(issueId);
        if (!issue || issue.type !== 'private') return null;
        
        // Update payment status
        issue.paymentStatus = 'paid';
        issue.updatedAt = new Date().toISOString();
        
        // Update worker earnings
        if (issue.assignedTo && issue.estimatedBudget) {
            const workers = app.authManager.getWorkers();
            const worker = workers.find(w => w.id === issue.assignedTo.id);
            if (worker) {
                worker.earnings = (worker.earnings || 0) + issue.estimatedBudget;
                app.authManager.saveWorkers(workers);
            }
        }
        
        this.saveIssues();
        return issue;
    }
    
    // Check if issues are overdue and need escalation
    checkOverdueIssues() {
        const now = new Date();
        this.issues.forEach(issue => {
            if (issue.status !== 'resolved' && issue.expectedResolution) {
                const expected = new Date(issue.expectedResolution);
                if (now > expected && issue.status !== 'escalated') {
                    // Auto-escalate overdue issues
                    this.escalateIssue(issue.id, 'Issue not resolved within expected time frame');
                }
            }
        });
    }

    upvoteIssue(id) {
        const issue = this.getIssue(id);
        if (issue) {
            const userId = this.currentUser;
            const index = issue.upvotedBy.indexOf(userId);
            if (index > -1) {
                issue.upvotedBy.splice(index, 1);
                issue.upvotes--;
            } else {
                issue.upvotedBy.push(userId);
                issue.upvotes++;
            }
            // Recalculate priority based on new upvote count
            this.updateIssuePriority(id);
            this.saveIssues();
            return issue;
        }
        return null;
    }

    hasUserUpvoted(id) {
        const issue = this.getIssue(id);
        if (issue) {
            return issue.upvotedBy.includes(this.currentUser);
        }
        return false;
    }

    addComment(id, commentText) {
        const issue = this.getIssue(id);
        if (issue) {
            const comment = {
                id: 'comment_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                text: commentText,
                date: new Date().toISOString()
            };
            issue.comments.push(comment);
            issue.updatedAt = new Date().toISOString();
            this.saveIssues();
            return comment;
        }
        return null;
    }

    filterIssues(category, status) {
        let filtered = [...this.issues];
        if (category) {
            filtered = filtered.filter(issue => issue.category === category);
        }
        if (status) {
            filtered = filtered.filter(issue => issue.status === status);
        }
        return filtered;
    }

    sortIssues(issues, sortBy) {
        const sorted = [...issues];
        switch (sortBy) {
            case 'newest':
                return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            case 'oldest':
                return sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            case 'upvotes':
                return sorted.sort((a, b) => b.upvotes - a.upvotes);
            default:
                return sorted;
        }
    }

    getStats() {
        return {
            total: this.issues.length,
            open: this.issues.filter(i => i.status === 'submitted' || i.status === 'open').length,
            inProgress: this.issues.filter(i => i.status === 'dispatched' || i.status === 'in-progress').length,
            resolved: this.issues.filter(i => i.status === 'resolved').length
        };
    }

    getReviews() {
        const stored = localStorage.getItem('SamadhanSetuReviews');
        if (stored) {
            return JSON.parse(stored);
        }
        // Sample reviews
        return [
            {
                id: 'review_1',
                author: 'John Doe',
                rating: 5,
                text: 'Great platform! My issue was resolved quickly. Very satisfied with the service.',
                date: new Date(Date.now() - 86400000).toISOString()
            },
            {
                id: 'review_2',
                author: 'Jane Smith',
                rating: 4,
                text: 'Easy to use and track issues. The response time could be better, but overall good experience.',
                date: new Date(Date.now() - 172800000).toISOString()
            }
        ];
    }

    saveReviews(reviews) {
        localStorage.setItem('SamadhanSetuReviews', JSON.stringify(reviews));
    }

    addReview(reviewData) {
        const reviews = this.getReviews();
        const newReview = {
            id: 'review_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            author: 'User',
            rating: parseInt(reviewData.rating),
            text: reviewData.text,
            date: new Date().toISOString()
        };
        reviews.unshift(newReview);
        this.saveReviews(reviews);
        return newReview;
    }

    generateOTP(issueId) {
        const issue = this.getIssue(issueId);
        if (issue) {
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            issue.otp = otp;
            this.saveIssues();
            return otp;
        }
        return null;
    }

    verifyOTP(issueId, otp) {
        const issue = this.getIssue(issueId);
        if (issue && issue.otp === otp) {
            issue.otpVerified = true;
            issue.status = 'otp-verification';
            this.saveIssues();
            return true;
        }
        return false;
    }
}

// ===== Authentication System =====
class AuthManager {
    constructor() {
        this.storageKey = 'SamadhanSetuUsers';
        this.workerStorageKey = 'SamadhanSetuWorkers';
        this.currentUserKey = 'SamadhanSetuCurrentUser';
    }
    
    getUsers() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : [];
    }
    
    saveUsers(users) {
        localStorage.setItem(this.storageKey, JSON.stringify(users));
    }
    
    register(userData) {
        const users = this.getUsers();
        // Check if email or phone already exists
        if (userData.email && users.find(u => u.email === userData.email)) {
            return { success: false, message: 'Email already registered' };
        }
        if (userData.phone && users.find(u => u.phone === userData.phone)) {
            return { success: false, message: 'Phone number already registered' };
        }
        
        const newUser = {
            id: 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            name: userData.name,
            email: userData.email || null,
            phone: userData.phone || null,
            password: userData.password, // In production, hash this
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        this.saveUsers(users);
        return { success: true, user: newUser };
    }
    
    login(identifier, password) {
        const users = this.getUsers();
        const user = users.find(u => 
            (u.email === identifier || u.phone === identifier) && u.password === password
        );
        
        if (user) {
            localStorage.setItem(this.currentUserKey, JSON.stringify(user));
            return { success: true, user };
        }
        return { success: false, message: 'Invalid credentials' };
    }
    
    logout() {
        localStorage.removeItem(this.currentUserKey);
    }
    
    getCurrentUser() {
        const stored = localStorage.getItem(this.currentUserKey);
        return stored ? JSON.parse(stored) : null;
    }
    
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    }
    
    // Worker Management
    getWorkers() {
        const stored = localStorage.getItem(this.workerStorageKey);
        return stored ? JSON.parse(stored) : [];
    }
    
    saveWorkers(workers) {
        localStorage.setItem(this.workerStorageKey, JSON.stringify(workers));
    }
    
    registerWorker(workerData) {
        const workers = this.getWorkers();
        // Check if phone already exists
        if (workers.find(w => w.phone === workerData.phone)) {
            return { success: false, message: 'Phone number already registered as worker' };
        }
        
        const newWorker = {
            id: 'worker_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            name: workerData.name,
            phone: workerData.phone,
            email: workerData.email || null,
            jobRole: workerData.jobRole,
            experience: workerData.experience || 0,
            address: workerData.address || '',
            password: workerData.password,
            rating: 5.0,
            totalJobs: 0,
            completedJobs: 0,
            earnings: 0,
            createdAt: new Date().toISOString()
        };
        
        workers.push(newWorker);
        this.saveWorkers(workers);
        return { success: true, worker: newWorker };
    }
    
    updateWorkerRating(workerId, rating) {
        const workers = this.getWorkers();
        const worker = workers.find(w => w.id === workerId);
        if (worker) {
            // Calculate new rating (average)
            const totalRatings = worker.totalJobs || 0;
            const currentRating = worker.rating || 5.0;
            worker.rating = ((currentRating * totalRatings) + rating) / (totalRatings + 1);
            worker.totalJobs = (worker.totalJobs || 0) + 1;
            worker.completedJobs = (worker.completedJobs || 0) + 1;
            this.saveWorkers(workers);
            return worker;
        }
        return null;
    }
}

// ===== Application State =====
const app = {
    issueManager: new IssueManager(),
    authManager: new AuthManager(),
    currentPage: 'home',
    map: null,
    marker: null,
    autocomplete: null,
    selectedLocation: null,
    currentUser: null
};

// ===== DOM Elements =====
const elements = {
    navLinks: document.querySelectorAll('.nav-link'),
    dropdownLinks: document.querySelectorAll('.dropdown-link'),
    pages: document.querySelectorAll('.page'),
    issueForm: document.getElementById('issue-form'),
    issueTitle: document.getElementById('issue-title'),
    issueDescription: document.getElementById('issue-description'),
    issueCategory: document.getElementById('issue-category'),
    issueLocation: document.getElementById('issue-location'),
    issueLat: document.getElementById('issue-lat'),
    issueLng: document.getElementById('issue-lng'),
    issueImage: document.getElementById('issue-image'),
    imagePreview: document.getElementById('image-preview'),
    mapContainer: document.getElementById('map'),
    issuesList: document.getElementById('issues-list'),
    recentIssuesList: document.getElementById('recent-issues-list'),
    solvedIssuesList: document.getElementById('solved-issues-list'),
    filterCategory: document.getElementById('filter-category'),
    filterStatus: document.getElementById('filter-status'),
    sortIssues: document.getElementById('sort-issues'),
    issueModal: document.getElementById('issue-modal'),
    modalBody: document.getElementById('modal-body'),
    commentModal: document.getElementById('comment-modal'),
    commentForm: document.getElementById('comment-form'),
    commentText: document.getElementById('comment-text'),
    commentIssueId: document.getElementById('comment-issue-id'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message'),
    totalIssues: document.getElementById('total-issues'),
    openIssues: document.getElementById('open-issues'),
    resolvedIssues: document.getElementById('resolved-issues'),
    navToggle: document.querySelector('.nav-toggle'),
    navMenu: document.querySelector('.nav-menu'),
    menuToggle: document.getElementById('menu-toggle'),
    dropdownMenu: document.getElementById('dropdown-menu'),
    submitSuccess: document.getElementById('submit-success'),
    submittedIssueId: document.getElementById('submitted-issue-id'),
    trackSubmittedIssue: document.getElementById('track-submitted-issue'),
    trackIssueId: document.getElementById('track-issue-id'),
    trackIssueBtn: document.getElementById('track-issue-btn'),
    trackIssueResult: document.getElementById('track-issue-result'),
    reviewsList: document.getElementById('reviews-list'),
    reviewForm: document.getElementById('review-form'),
    reviewRating: document.getElementById('review-rating'),
    reviewText: document.getElementById('review-text'),
    logoutLink: document.getElementById('logout-link'),
    // Auth elements
    loginBtn: document.getElementById('login-btn'),
    registerBtn: document.getElementById('register-btn'),
    loginModal: document.getElementById('login-modal'),
    registerModal: document.getElementById('register-modal'),
    workerRegisterModal: document.getElementById('worker-register-modal'),
    loginForm: document.getElementById('login-form'),
    registerForm: document.getElementById('register-form'),
    workerRegisterForm: document.getElementById('worker-register-form'),
    showRegister: document.getElementById('show-register'),
    showLogin: document.getElementById('show-login'),
    registerWorkerLink: document.getElementById('register-worker-link'),
    userProfileBtn: document.getElementById('user-profile-btn'),
    authButtons: document.getElementById('auth-buttons'),
    // Private/Public issue forms
    issueTypeBtns: document.querySelectorAll('.issue-type-btn'),
    privateIssueForm: document.getElementById('private-issue-form'),
    browseWorkersBtn: document.getElementById('browse-workers-btn'),
    preferredWorkerSelect: document.getElementById('preferred-worker'),
    // Workers page
    workersList: document.getElementById('workers-list'),
    filterJobRole: document.getElementById('filter-job-role'),
    sortWorkers: document.getElementById('sort-workers'),
    // Agent dashboard
    agentWorkId: document.getElementById('agent-work-id'),
    agentSearchBtn: document.getElementById('agent-search-btn'),
    agentResult: document.getElementById('agent-result'),
    // Chatbot elements (queried later on init)
    chatbotToggle: null,
    chatWindow: null,
    chatForm: null,
    chatInput: null,
    chatBody: null,
    chatClose: null
};

// ===== Authentication Functions =====
function initAuth() {
    // Check if user is logged in
    app.currentUser = app.authManager.getCurrentUser();
    updateAuthUI();
    
    // Login button
    if (elements.loginBtn) {
        elements.loginBtn.addEventListener('click', () => {
            openAuthModal('login');
        });
    }
    
    // Register button
    if (elements.registerBtn) {
        elements.registerBtn.addEventListener('click', () => {
            openAuthModal('register');
        });
    }
    
    // Login form
    if (elements.loginForm) {
        elements.loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(elements.loginForm);
            const identifier = formData.get('email');
            const password = formData.get('password');
            
            const result = app.authManager.login(identifier, password);
            if (result.success) {
                app.currentUser = result.user;
                updateAuthUI();
                closeAuthModal();
                showToast('Login successful!', 'success');
            } else {
                showToast(result.message || 'Invalid credentials', 'error');
            }
        });
    }
    
    // Register form
    if (elements.registerForm) {
        elements.registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(elements.registerForm);
            
            if (formData.get('password') !== formData.get('confirmPassword')) {
                showToast('Passwords do not match', 'error');
                return;
            }
            
            const userData = {
                name: formData.get('name'),
                email: formData.get('email') || null,
                phone: formData.get('phone') || null,
                password: formData.get('password')
            };
            
            // At least email or phone required
            if (!userData.email && !userData.phone) {
                showToast('Please provide either email or phone number', 'error');
                return;
            }
            
            const result = app.authManager.register(userData);
            if (result.success) {
                app.currentUser = result.user;
                updateAuthUI();
                closeAuthModal();
                showToast('Registration successful!', 'success');
            } else {
                showToast(result.message || 'Registration failed', 'error');
            }
        });
    }
    
    // Worker registration form
    if (elements.workerRegisterForm) {
        elements.workerRegisterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(elements.workerRegisterForm);
            
            const workerData = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email') || null,
                jobRole: formData.get('jobRole'),
                experience: parseInt(formData.get('experience')) || 0,
                address: formData.get('address') || '',
                password: formData.get('password')
            };
            
            const result = app.authManager.registerWorker(workerData);
            if (result.success) {
                closeAuthModal();
                showToast('Worker registration successful!', 'success');
                if (app.currentPage === 'workers') {
                    loadWorkers();
                }
            } else {
                showToast(result.message || 'Registration failed', 'error');
            }
        });
    }
    
    // Show register from login
    if (elements.showRegister) {
        elements.showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            closeAuthModal();
            openAuthModal('register');
        });
    }
    
    // Show login from register
    if (elements.showLogin) {
        elements.showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            closeAuthModal();
            openAuthModal('login');
        });
    }
    
    // Register as worker link
    if (elements.registerWorkerLink) {
        elements.registerWorkerLink.addEventListener('click', (e) => {
            e.preventDefault();
            openAuthModal('worker');
        });
    }
    
    // Logout
    if (elements.logoutLink) {
        elements.logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            app.authManager.logout();
            app.currentUser = null;
            updateAuthUI();
            showToast('Logged out successfully', 'success');
            navigateToPage('home');
        });
    }
    
    // Close modals on close button
    document.querySelectorAll('.auth-modal .modal-close').forEach(btn => {
        btn.addEventListener('click', closeAuthModal);
    });
    
    // Close modals on outside click
    document.querySelectorAll('.auth-modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAuthModal();
            }
        });
    });
}

function openAuthModal(type) {
    closeAllAuthModals();
    if (type === 'login' && elements.loginModal) {
        elements.loginModal.classList.add('active');
        elements.loginModal.setAttribute('aria-hidden', 'false');
    } else if (type === 'register' && elements.registerModal) {
        elements.registerModal.classList.add('active');
        elements.registerModal.setAttribute('aria-hidden', 'false');
    } else if (type === 'worker' && elements.workerRegisterModal) {
        elements.workerRegisterModal.classList.add('active');
        elements.workerRegisterModal.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    closeAllAuthModals();
    document.body.style.overflow = '';
}

function closeAllAuthModals() {
    if (elements.loginModal) {
        elements.loginModal.classList.remove('active');
        elements.loginModal.setAttribute('aria-hidden', 'true');
    }
    if (elements.registerModal) {
        elements.registerModal.classList.remove('active');
        elements.registerModal.setAttribute('aria-hidden', 'true');
    }
    if (elements.workerRegisterModal) {
        elements.workerRegisterModal.classList.remove('active');
        elements.workerRegisterModal.setAttribute('aria-hidden', 'true');
    }
}

function updateAuthUI() {
    if (app.currentUser) {
        // User is logged in
        if (elements.authButtons) elements.authButtons.style.display = 'none';
        if (elements.userProfileBtn) elements.userProfileBtn.style.display = 'block';
        if (elements.logoutLink) elements.logoutLink.style.display = 'block';
    } else {
        // User is not logged in
        if (elements.authButtons) elements.authButtons.style.display = 'flex';
        if (elements.userProfileBtn) elements.userProfileBtn.style.display = 'none';
        if (elements.logoutLink) elements.logoutLink.style.display = 'none';
    }
}

// ===== Navigation =====
function initNavigation() {
    // Regular nav links
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            navigateToPage(page);
        });
    });

    // Dropdown menu links
    elements.dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            if (page) {
                navigateToPage(page);
            }
            if (elements.dropdownMenu) {
                elements.dropdownMenu.classList.remove('active');
            }
        });
    });

    // Dropdown menu toggle
    if (elements.menuToggle) {
        elements.menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (elements.dropdownMenu) {
                elements.dropdownMenu.classList.toggle('active');
                const isExpanded = elements.dropdownMenu.classList.contains('active');
                elements.menuToggle.setAttribute('aria-expanded', isExpanded);
                
                // Position dropdown to align with right end of navbar
                if (elements.dropdownMenu.classList.contains('active')) {
                    setTimeout(() => {
                        const navbar = document.querySelector('.navbar');
                        const menuDropdown = elements.menuToggle.closest('.menu-dropdown');
                        if (navbar && menuDropdown) {
                            const navbarRect = navbar.getBoundingClientRect();
                            const menuDropdownRect = menuDropdown.getBoundingClientRect();
                            const rightOffset = navbarRect.right - menuDropdownRect.right;
                            elements.dropdownMenu.style.right = `${-rightOffset}px`;
                        }
                    }, 0);
                }
            }
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-dropdown')) {
            if (elements.dropdownMenu) {
                elements.dropdownMenu.classList.remove('active');
                if (elements.menuToggle) {
                    elements.menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        }
    });

    // Mobile menu toggle
    if (elements.navToggle) {
        elements.navToggle.addEventListener('click', () => {
            elements.navMenu.classList.toggle('active');
            const isExpanded = elements.navMenu.classList.contains('active');
            elements.navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            elements.navMenu.classList.remove('active');
            elements.navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Logout is handled in initAuth
}

function navigateToPage(page) {
    // Update active nav link
    elements.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });

    // Update active dropdown link
    elements.dropdownLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });

    // Update active page
    elements.pages.forEach(p => {
        p.classList.remove('active');
        if (p.id === page) {
            p.classList.add('active');
            app.currentPage = page;
        }
    });

    // Close mobile menu
    elements.navMenu.classList.remove('active');
    elements.navToggle.setAttribute('aria-expanded', 'false');

    // Load page-specific content
    if (page === 'home') {
        loadHomePage();
    } else if (page === 'dashboard') {
        loadDashboard();
    } else if (page === 'submit') {
        initMap();
        if (elements.submitSuccess) {
            elements.submitSuccess.style.display = 'none';
        }
    } else if (page === 'track') {
        if (elements.trackIssueResult) {
            elements.trackIssueResult.style.display = 'none';
        }
    } else if (page === 'reviews') {
        loadReviews();
    }

    // close chat if user navigates away from home
    if (page !== 'home' && elements.chatWindow && elements.chatWindow.classList.contains('active')) {
        toggleChat(false);
    }
}

// ===== Google Maps Integration =====
function initMap() {
    if (!app.map && elements.mapContainer) {
        const defaultLocation = { lat: 40.7128, lng: -74.0060 }; // Default to NYC
        
        app.map = new google.maps.Map(elements.mapContainer, {
            center: defaultLocation,
            zoom: 13,
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true
        });

        // Initialize marker
        app.marker = new google.maps.Marker({
            map: app.map,
            draggable: true,
            animation: google.maps.Animation.DROP
        });

        // Click on map to set location
        app.map.addListener('click', (e) => {
            setLocation(e.latLng.lat(), e.latLng.lng());
        });

        // Marker drag end
        app.marker.addListener('dragend', (e) => {
            setLocation(e.latLng.lat(), e.latLng.lng());
        });

        // Initialize autocomplete
        if (elements.issueLocation && google.maps.places) {
            app.autocomplete = new google.maps.places.Autocomplete(elements.issueLocation, {
                types: ['geocode']
            });

            app.autocomplete.addListener('place_changed', () => {
                const place = app.autocomplete.getPlace();
                if (place.geometry) {
                    setLocation(place.geometry.location.lat(), place.geometry.location.lng());
                    app.map.setCenter(place.geometry.location);
                    app.map.setZoom(15);
                }
            });
        }

        // Try to get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    app.map.setCenter(userLocation);
                    app.map.setZoom(15);
                },
                () => {
                    // User denied geolocation or error occurred
                    console.log('Geolocation not available');
                }
            );
        }
    }
}

function setLocation(lat, lng) {
    app.selectedLocation = { lat, lng };
    app.marker.setPosition({ lat, lng });
    app.map.setCenter({ lat, lng });
    
    // Reverse geocode to get address
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === 'OK' && results[0]) {
            elements.issueLocation.value = results[0].formatted_address;
        }
    });

    elements.issueLat.value = lat;
    elements.issueLng.value = lng;
}

// ===== Image Preview =====
function initImagePreview() {
    if (elements.issueImage && elements.imagePreview) {
        elements.issueImage.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    elements.imagePreview.src = event.target.result;
                    elements.imagePreview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            } else {
                elements.imagePreview.style.display = 'none';
            }
        });
    }
}

// ===== Issue Form Submission =====
function initIssueForm() {
    if (elements.issueForm) {
        elements.issueForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(elements.issueForm);
            
            // Validate required address fields
            const villageName = formData.get('villageName');
            const mandal = formData.get('mandal');
            const district = formData.get('district');
            const pincode = formData.get('pincode');
            const streetName = formData.get('streetName');
            
            if (!villageName || !mandal || !district || !pincode || !streetName) {
                showToast('Please fill in all required address fields (Street Name, Village Name, Mandal, District, Pincode)', 'error');
                return;
            }
            
            // Validate pincode format
            if (pincode.length !== 6 || !/^\d+$/.test(pincode)) {
                showToast('Please enter a valid 6-digit pincode', 'error');
                return;
            }

            let imageData = null;

            // Handle image
            const imageFile = elements.issueImage.files[0];
            if (imageFile) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    imageData = event.target.result;
                    submitIssue(formData, imageData);
                };
                reader.readAsDataURL(imageFile);
            } else {
                submitIssue(formData, null);
            }
        });
    }
}

function submitIssue(formData, imageData) {
    // Build complete address from address fields
    const houseNumber = formData.get('houseNumber') || '';
    const streetName = formData.get('streetName') || '';
    const villageName = formData.get('villageName') || '';
    const mandal = formData.get('mandal') || '';
    const district = formData.get('district') || '';
    const pincode = formData.get('pincode') || '';
    
    // Construct full address
    const addressParts = [];
    if (houseNumber) addressParts.push(houseNumber);
    if (streetName) addressParts.push(streetName);
    if (villageName) addressParts.push(villageName);
    if (mandal) addressParts.push(mandal);
    if (district) addressParts.push(district);
    if (pincode) addressParts.push(pincode);
    
    const fullAddress = addressParts.join(', ');
    const mapLocation = formData.get('location') || fullAddress;
    
    let issueCategory = formData.get('category');
    if (!issueCategory || issueCategory === 'other') {
        issueCategory = app.issueManager.categorizeIssue(formData.get('description') || formData.get('title'));
    }
    const issuePriority = app.issueManager.calculatePriority(issueCategory, formData.get('description') || formData.get('title'), 0);

    const issueData = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: issueCategory,
        location: mapLocation || fullAddress,
        lat: parseFloat(formData.get('lat')) || null,
        lng: parseFloat(formData.get('lng')) || null,
        image: imageData,
        priority: issuePriority,
        addressDetails: {
            houseNumber: houseNumber,
            streetName: streetName,
            villageName: villageName,
            mandal: mandal,
            district: district,
            pincode: pincode
        },
        type: 'public',
        userId: app.currentUser ? app.currentUser.id : null
    };

    fetch('http://127.0.0.1:8000/api/issues/submit/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(issueData)
    })
    .then(res => res.json())
    .then(data => {
        if(data.issue) {
            // Restore local properties not maintained by server but needed by UI
            data.issue.addressDetails = issueData.addressDetails;
            data.issue.type = issueData.type;
            data.issue.userId = issueData.userId;
            data.issue.customerCareNumber = '+91-1800-123-4567';

            const newIssue = app.issueManager.addIssue(data.issue);
            
            // Show success message with issue ID
            if (elements.submitSuccess && elements.submittedIssueId) {
                elements.submittedIssueId.textContent = newIssue.id;
                elements.issueForm.style.display = 'none';
                elements.submitSuccess.style.display = 'block';
                
                // Track submitted issue button
                if (elements.trackSubmittedIssue) {
                    elements.trackSubmittedIssue.addEventListener('click', () => {
                        navigateToPage('track');
                        if (elements.trackIssueId) {
                            elements.trackIssueId.value = newIssue.id;
                            // Assumes trackIssue() exists
                            if (typeof trackIssue === 'function') trackIssue(newIssue.id);
                        }
                    });
                }
            } else {
                showToast('Issue submitted successfully! Your Issue ID: ' + newIssue.id, 'success');
            }
            
            // Reset form
            elements.issueForm.reset();
            elements.imagePreview.style.display = 'none';
            app.selectedLocation = null;
            if (app.marker) {
                app.marker.setMap(null);
                app.marker = new google.maps.Marker({
                    map: app.map,
                    draggable: true,
                    animation: google.maps.Animation.DROP
                });
            }
        } else {
            showToast('Error: ' + data.error, 'error');
        }
    })
    .catch(error => {
        showToast('Submission failed: ' + error.message, 'error');
    });
}

// ===== Issue Display =====
function renderIssueCard(issue) {
    const hasUpvoted = app.issueManager.hasUserUpvoted(issue.id);
    const statusClass = `status-${issue.status.replace('-', '-')}`;
    let statusText = issue.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    const statusDisplay = {
        'submitted': 'Submitted',
        'dispatched': 'Dispatched',
        'otp-verification': 'OTP Verification',
        'resolved': 'Resolved',
        'open': 'Open',
        'in-progress': 'In Progress',
        'escalated': 'Escalated'
    };
    
    statusText = statusDisplay[issue.status] || statusText;
    
    const categoryLabels = {
        infrastructure: i18n.t('infrastructure'),
        safety: i18n.t('safety'),
        environment: i18n.t('environment'),
        transportation: i18n.t('transportation'),
        utilities: i18n.t('utilities'),
        other: i18n.t('other')
    };
    
    const priorityLabels = {
        critical: i18n.t('critical'),
        moderate: i18n.t('moderate'),
        minor: i18n.t('minor')
    };
    
    const priorityClass = issue.priority ? `priority-${issue.priority}` : '';
    const priorityText = issue.priority ? priorityLabels[issue.priority] : '';

    const card = document.createElement('div');
    card.className = 'issue-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View issue: ${issue.title}`);
    
    card.innerHTML = `
        ${issue.image ? `<img src="${issue.image}" alt="${issue.title}" class="issue-image">` : ''}
        <div class="issue-content">
            <div class="issue-header">
                <h3 class="issue-title">${escapeHtml(issue.title)}</h3>
                <div class="issue-badges">
                    ${issue.priority ? `<span class="priority-badge ${priorityClass}">${priorityText}</span>` : ''}
                    <span class="issue-status ${statusClass}">${statusText}</span>
                </div>
            </div>
            <p class="issue-description">${escapeHtml(issue.description)}</p>
            <div class="issue-meta">
                <span class="issue-category">${categoryLabels[issue.category] || issue.category}</span>
                <span>📍 ${escapeHtml(issue.location)}</span>
                <span>📅 ${formatDate(issue.createdAt)}</span>
            </div>
            ${issue.assignedTo ? `
                <div class="issue-assigned">
                    <span>👤 ${i18n.t('assignedTo')}: ${escapeHtml(issue.assignedTo.name)}</span>
                    ${issue.expectedResolution ? `<span>⏰ ${i18n.t('expectedResolution')}: ${formatDate(issue.expectedResolution)}</span>` : ''}
                </div>
            ` : ''}
            <div class="issue-actions">
                <button class="upvote-btn ${hasUpvoted ? 'active' : ''}" 
                        data-issue-id="${issue.id}" 
                        aria-label="${hasUpvoted ? 'Remove upvote' : 'Upvote'}">
                    👍 <span>${issue.upvotes}</span>
                </button>
                <button class="comment-btn" data-issue-id="${issue.id}" aria-label="Add comment">
                    💬 ${issue.comments.length} ${issue.comments.length === 1 ? i18n.t('comments').slice(0, -1) : i18n.t('comments')}
                </button>
                <button class="delete-btn" data-issue-id="${issue.id}" aria-label="Delete issue" title="Delete Issue" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; opacity: 0.7; transition: 0.3s;">
                    🗑️
                </button>
            </div>
        </div>
    `;

    // Add click handler to open modal
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.upvote-btn') && !e.target.closest('.comment-btn')) {
            openIssueModal(issue.id);
        }
    });

    // Add keyboard support
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openIssueModal(issue.id);
        }
    });

    // Upvote button
    const upvoteBtn = card.querySelector('.upvote-btn');
    upvoteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        upvoteIssue(issue.id);
    });

    // Comment button
    const commentBtn = card.querySelector('.comment-btn');
    if (commentBtn) {
        commentBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openCommentModal(issue.id);
        });
    }

    // Delete button
    const deleteBtn = card.querySelector('.delete-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteIssuePrompt(issue.id);
        });
    }
    commentBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openCommentModal(issue.id);
    });

    return card;
}

function renderIssues(issues, container) {
    if (!container) return;
    
    container.innerHTML = '';
    
    if (issues.length === 0) {
        const noIssues = document.getElementById('no-issues');
        if (noIssues) {
            noIssues.style.display = 'block';
        }
        return;
    }

    const noIssues = document.getElementById('no-issues');
    if (noIssues) {
        noIssues.style.display = 'none';
    }

    issues.forEach(issue => {
        const card = renderIssueCard(issue);
        container.appendChild(card);
    });
}

// ===== Dashboard =====
function loadDashboard() {
    const category = elements.filterCategory ? elements.filterCategory.value : '';
    const status = elements.filterStatus ? elements.filterStatus.value : '';
    const sortBy = elements.sortIssues ? elements.sortIssues.value : 'newest';

    fetch('http://127.0.0.1:8000/api/issues/my-issues/', {
        credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
        if (data.issues && data.issues.length > 0) {
            renderIssues(data.issues, elements.issuesList);
        } else {
            let filtered = app.issueManager.filterIssues(category, status);
            filtered = app.issueManager.sortIssues(filtered, sortBy);
            renderIssues(filtered, elements.issuesList);
        }
    })
    .catch(() => {
        let filtered = app.issueManager.filterIssues(category, status);
        filtered = app.issueManager.sortIssues(filtered, sortBy);
        renderIssues(filtered, elements.issuesList);
    });
}

function initFilters() {
    if (elements.filterCategory) {
        elements.filterCategory.addEventListener('change', loadDashboard);
    }
    if (elements.filterStatus) {
        elements.filterStatus.addEventListener('change', loadDashboard);
    }
    if (elements.sortIssues) {
        elements.sortIssues.addEventListener('change', loadDashboard);
    }
}

// ===== Home Page =====
function loadHomePage() {
    const stats = app.issueManager.getStats();
    
    if (elements.totalIssues) {
        elements.totalIssues.textContent = stats.total;
    }
    if (elements.openIssues) {
        elements.openIssues.textContent = stats.open;
    }
    if (elements.resolvedIssues) {
        elements.resolvedIssues.textContent = stats.resolved;
    }

    // Show solved issues (resolved issues with images)
    const solvedIssues = app.issueManager.getAllIssues()
        .filter(issue => issue.status === 'resolved' && issue.image)
        .slice(0, 6);
    
    renderIssues(solvedIssues, elements.solvedIssuesList);

    // Show recent issues (latest 6)
    const recentIssues = app.issueManager.sortIssues(
        app.issueManager.getAllIssues(),
        'newest'
    ).slice(0, 6);
    
    renderIssues(recentIssues, elements.recentIssuesList);
}

// ===== Issue Modal =====
function openIssueModal(issueId) {
    const issue = app.issueManager.getIssue(issueId);
    if (!issue) return;

    const statusSteps = [
        { key: 'submitted', label: 'Submitted' },
        { key: 'dispatched', label: 'Dispatched' },
        { key: 'otp-verification', label: 'OTP Verification' },
        { key: 'resolved', label: 'Resolved' }
    ];

    const statusMap = {
        'submitted': 0,
        'dispatched': 1,
        'otp-verification': 2,
        'resolved': 3,
        'open': 0,
        'in-progress': 1
    };

    const currentStepIndex = statusMap[issue.status] !== undefined ? statusMap[issue.status] : 0;
    
    const statusDisplay = {
        'submitted': 'Submitted',
        'dispatched': 'Dispatched',
        'otp-verification': 'OTP Verification',
        'resolved': 'Resolved',
        'open': 'Open',
        'in-progress': 'In Progress',
        'escalated': 'Escalated'
    };
    
    const statusText = statusDisplay[issue.status] || issue.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    let statusProgressHtml = '<div class="status-progress">';
    statusSteps.forEach((step, index) => {
        let stepClass = '';
        if (index < currentStepIndex) {
            stepClass = 'completed';
        } else if (index === currentStepIndex) {
            stepClass = 'active';
        }
        statusProgressHtml += `<div class="status-step ${stepClass}">${index + 1}</div>`;
    });
    statusProgressHtml += '</div>';
    statusProgressHtml += '<div class="status-labels">';
    statusSteps.forEach(step => {
        statusProgressHtml += `<span>${step.label}</span>`;
    });
    statusProgressHtml += '</div>';

    const categoryLabels = {
        infrastructure: i18n.t('infrastructure'),
        safety: i18n.t('safety'),
        environment: i18n.t('environment'),
        transportation: i18n.t('transportation'),
        utilities: i18n.t('utilities'),
        other: i18n.t('other')
    };
    
    const priorityLabels = {
        critical: i18n.t('critical'),
        moderate: i18n.t('moderate'),
        minor: i18n.t('minor')
    };
    
    const priorityClass = issue.priority ? `priority-${issue.priority}` : '';
    const priorityText = issue.priority ? priorityLabels[issue.priority] : '';

    const commentsHtml = issue.comments.length > 0
        ? issue.comments.map(comment => `
            <div class="comment-item">
                <p class="comment-text">${escapeHtml(comment.text)}</p>
                <span class="comment-date">${formatDate(comment.date)}</span>
            </div>
        `).join('')
        : '<p style="color: var(--text-secondary);">No comments yet. Be the first to comment!</p>';
    
    const representativeHtml = issue.assignedTo ? `
        <div class="representative-info">
            <h4>${i18n.t('assignedTo')}</h4>
            <p><strong>${escapeHtml(issue.assignedTo.name)}</strong></p>
            <p>${i18n.t('phoneNumber')}: <a href="tel:${issue.assignedTo.phone}">${escapeHtml(issue.assignedTo.phone)}</a></p>
            ${issue.expectedResolution ? `<p>${i18n.t('expectedResolution')}: ${formatDate(issue.expectedResolution)}</p>` : ''}
            ${issue.assignedTo.rating ? `<p>Rating: ${issue.assignedTo.rating.toFixed(1)} ⭐</p>` : ''}
        </div>
    ` : '';
    
    const escalationHtml = issue.escalationHistory && issue.escalationHistory.length > 0 ? `
        <div class="escalation-history">
            <h4>Escalation History</h4>
            ${issue.escalationHistory.map(esc => `
                <div class="escalation-item">
                    <p><strong>${escapeHtml(esc.reason)}</strong></p>
                    <p>${escapeHtml(esc.escalatedBy)} - ${formatDate(esc.date)}</p>
                </div>
            `).join('')}
        </div>
    ` : '';

    elements.modalBody.innerHTML = `
        ${issue.image ? `<img src="${issue.image}" alt="${issue.title}" class="modal-issue-image">` : ''}
        <h2 class="modal-issue-title">${escapeHtml(issue.title)}</h2>
        <div class="modal-issue-meta">
            ${issue.priority ? `<span class="priority-badge ${priorityClass}">${priorityText}</span>` : ''}
            <span class="issue-status status-${issue.status.replace('-', '-')}">
                ${statusText}
            </span>
            <span class="issue-category">${categoryLabels[issue.category] || issue.category}</span>
            <span>📍 ${escapeHtml(issue.location)}</span>
            <span>📅 ${formatDate(issue.createdAt)}</span>
        </div>
        <p class="modal-issue-description">${escapeHtml(issue.description)}</p>
        ${statusProgressHtml}
        ${representativeHtml}
        ${escalationHtml}
        ${issue.status !== 'resolved' && issue.expectedResolution ? `
            <div class="escalate-section">
                <button class="btn btn-warning" onclick="escalateIssuePrompt('${issue.id}')">
                    Escalate to Higher Official
                </button>
            </div>
        ` : ''}
        <div class="comments-section">
            <div class="comments-header">
                <h3>${i18n.t('comments')} (${issue.comments.length})</h3>
                <button class="btn btn-primary btn-sm" onclick="openCommentModal('${issue.id}')">${i18n.t('addComment')}</button>
            </div>
            <div class="comments-list">
                ${commentsHtml}
            </div>
        </div>
    `;

    elements.issueModal.classList.add('active');
    elements.issueModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeIssueModal() {
    elements.issueModal.classList.remove('active');
    elements.issueModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// ===== Comment Modal =====
function openCommentModal(issueId) {
    elements.commentIssueId.value = issueId;
    elements.commentModal.classList.add('active');
    elements.commentModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    elements.commentText.focus();
}

function closeCommentModal() {
    elements.commentModal.classList.remove('active');
    elements.commentModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (elements.commentForm) elements.commentForm.reset();
}

function initCommentForm() {
    if (elements.commentForm) {
        elements.commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const issueId = elements.commentIssueId.value;
            const commentText = elements.commentText.value.trim();

            if (!commentText) {
                showToast('Please enter a comment', 'error');
                return;
            }

            app.issueManager.addComment(issueId, commentText);
            showToast('Comment added successfully!', 'success');
            closeCommentModal();
            
            // Refresh views
            if (app.currentPage === 'dashboard') {
                loadDashboard();
            } else if (app.currentPage === 'home') {
                loadHomePage();
            }
            
            // If modal is open, refresh it
            if (elements.issueModal.classList.contains('active')) {
                openIssueModal(issueId);
            }
        });
    }
}

// ===== Upvote =====
function upvoteIssue(issueId) {
    app.issueManager.upvoteIssue(issueId);
    
    // Refresh views
    if (app.currentPage === 'dashboard') {
        loadDashboard();
    } else if (app.currentPage === 'home') {
        loadHomePage();
    }
}

// ===== Modal Management =====
function initModals() {
    // Close modals on close button click
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            closeIssueModal();
            closeCommentModal();
        });
    });

    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                if (modal.id === 'issue-modal') {
                    closeIssueModal();
                } else if (modal.id === 'comment-modal') {
                    closeCommentModal();
                }
            }
        });
    });

    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeIssueModal();
            closeCommentModal();
        }
    });
}

// ===== Toast Notifications =====
function showToast(message, type = 'success') {
    if (!elements.toast || !elements.toastMessage) return;

    elements.toastMessage.textContent = message;
    elements.toast.className = `toast ${type} show`;
    elements.toast.setAttribute('role', 'alert');

    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

// ===== Utility Functions =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
        return 'Today';
    } else if (days === 1) {
        return 'Yesterday';
    } else if (days < 7) {
        return `${days} days ago`;
    } else {
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }
}

// Make openCommentModal available globally for onclick handlers
window.openCommentModal = openCommentModal;

// ===== Track Issue =====
function trackIssue(issueId) {
    if (!issueId) {
        issueId = elements.trackIssueId?.value?.trim();
    }
    
    if (!issueId) {
        showToast('Please enter an Issue ID', 'error');
        return;
    }

    const issue = app.issueManager.getIssue(issueId);
    
    if (!issue) {
        if (elements.trackIssueResult) {
            elements.trackIssueResult.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <p style="color: var(--danger-color); font-size: 1.125rem; margin-bottom: 1rem;">
                        Issue not found. Please check your Issue ID.
                    </p>
                    <p style="color: var(--text-secondary);">
                        If you need assistance, please contact Customer Care:
                    </p>
                    <a href="tel:+91-1800-123-4567" class="btn btn-primary" style="margin-top: 1rem; display: inline-block;">
                        📞 Call Customer Care: +91-1800-123-4567
                    </a>
                </div>
            `;
            elements.trackIssueResult.style.display = 'block';
        }
        return;
    }

    const statusSteps = [
        { key: 'submitted', label: 'Issue Submitted' },
        { key: 'dispatched', label: 'Dispatched' },
        { key: 'otp-verification', label: 'OTP Verification' },
        { key: 'resolved', label: 'Resolved' }
    ];

    const statusMap = {
        'submitted': 0,
        'dispatched': 1,
        'otp-verification': 2,
        'resolved': 3,
        'open': 0,
        'in-progress': 1,
        'escalated': 1
    };

    const currentStepIndex = statusMap[issue.status] !== undefined ? statusMap[issue.status] : 0;
    
    const categoryLabels = {
        infrastructure: i18n.t('infrastructure'),
        safety: i18n.t('safety'),
        environment: i18n.t('environment'),
        transportation: i18n.t('transportation'),
        utilities: i18n.t('utilities'),
        other: i18n.t('other')
    };
    
    const statusDisplay = {
        'submitted': 'Submitted',
        'dispatched': 'Dispatched',
        'otp-verification': 'OTP Verification',
        'resolved': 'Resolved',
        'open': 'Open',
        'in-progress': 'In Progress',
        'escalated': 'Escalated'
    };
    
    const statusText = statusDisplay[issue.status] || issue.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    let progressHtml = '<div class="track-progress">';
    progressHtml += '<h3>' + escapeHtml(issue.title) + '</h3>';
    progressHtml += '<div class="track-progress-bar">';
    
    statusSteps.forEach((step, index) => {
        let stepClass = '';
        if (index < currentStepIndex) {
            stepClass = 'completed';
        } else if (index === currentStepIndex) {
            stepClass = 'active';
        }
        progressHtml += `<div class="track-step ${stepClass}">${index + 1}</div>`;
    });
    
    progressHtml += '</div>';
    progressHtml += '<div class="track-step-labels">';
    statusSteps.forEach(step => {
        progressHtml += `<span>${step.label}</span>`;
    });
    progressHtml += '</div>';

    // OTP Verification section
    if (issue.status === 'otp-verification' || issue.status === 'resolved') {
        if (!issue.otpVerified && issue.status === 'otp-verification') {
            const otp = app.issueManager.generateOTP(issueId);
            progressHtml += `
                <div style="margin-top: 2rem; padding: 1.5rem; background: var(--bg-secondary); border-radius: var(--radius-md);">
                    <h4>OTP Verification</h4>
                    <p>Your OTP: <strong style="font-size: 1.5rem; color: var(--primary-color);">${otp}</strong></p>
                    <p style="font-size: 0.875rem; color: var(--text-secondary);">Please verify this OTP to mark the issue as resolved.</p>
                    <button class="btn btn-primary" onclick="verifyOTPAndResolve('${issueId}')">Verify OTP & Resolve</button>
                </div>
            `;
        }
    }

    // Done button for resolved issues
    if (issue.status === 'resolved') {
        progressHtml += `
            <div class="done-btn-container">
                <button class="btn btn-primary" onclick="markIssueDone('${issueId}')">Done</button>
            </div>
        `;
    }

    progressHtml += '</div>';
    
    // Add Issue ID prominently
    progressHtml += `
        <div class="track-issue-id" style="background: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-md); margin: 1.5rem 0; text-align: center;">
            <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.5rem;">${i18n.t('issueId')}</p>
            <p style="font-size: 1.5rem; font-weight: 700; color: var(--primary-color); letter-spacing: 2px;">${escapeHtml(issue.id)}</p>
        </div>
    `;
    
    // Add image if available
    if (issue.image) {
        progressHtml += `
            <div class="track-image" style="margin: 1.5rem 0;">
                <h4>Uploaded Image</h4>
                <img src="${issue.image}" alt="Issue Image" style="max-width: 100%; border-radius: var(--radius-md); border: 2px solid var(--border-color); margin-top: 1rem;">
            </div>
        `;
    }
    
    // Add complete address details
    if (issue.addressDetails) {
        const addr = issue.addressDetails;
        progressHtml += `
            <div class="track-address" style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0;">
                <h4>Complete Address Details</h4>
                <div style="margin-top: 1rem; line-height: 1.8;">
                    ${addr.houseNumber ? `<p><strong>House Number:</strong> ${escapeHtml(addr.houseNumber)}</p>` : ''}
                    ${addr.streetName ? `<p><strong>Street Name:</strong> ${escapeHtml(addr.streetName)}</p>` : ''}
                    ${addr.villageName ? `<p><strong>Village Name:</strong> ${escapeHtml(addr.villageName)}</p>` : ''}
                    ${addr.mandal ? `<p><strong>Mandal:</strong> ${escapeHtml(addr.mandal)}</p>` : ''}
                    ${addr.district ? `<p><strong>District:</strong> ${escapeHtml(addr.district)}</p>` : ''}
                    ${addr.pincode ? `<p><strong>Pincode:</strong> ${escapeHtml(addr.pincode)}</p>` : ''}
                </div>
            </div>
        `;
    }
    
    // Add payment information for private issues
    if (issue.type === 'private' && issue.estimatedBudget) {
        progressHtml += `
            <div class="track-payment" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0; color: white;">
                <h4 style="color: white; margin-bottom: 1rem;">💳 Payment Information</h4>
                <p style="margin: 0.5rem 0; color: white;"><strong>Estimated Budget:</strong> ₹${issue.estimatedBudget}</p>
                <p style="margin: 0.5rem 0; color: white;"><strong>Payment Status:</strong> ${issue.paymentStatus === 'paid' ? '✅ Paid' : issue.paymentStatus === 'pending' ? '⏳ Pending' : '❌ Not Paid'}</p>
                ${issue.status === 'resolved' && issue.paymentStatus !== 'paid' ? `
                    <button class="btn btn-primary" onclick="processPayment('${issueId}')" style="margin-top: 1rem; background: white; color: #10b981; border: none; font-weight: 600;">
                        💳 Pay Now (₹${issue.estimatedBudget})
                    </button>
                ` : ''}
            </div>
        `;
    }
    
    // Add issue details
    progressHtml += `
        <div class="track-details" style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0;">
            <h4>Issue Details</h4>
            <div style="margin-top: 1rem; line-height: 1.8;">
                <p><strong>Title:</strong> ${escapeHtml(issue.title)}</p>
                <p><strong>Description:</strong> ${escapeHtml(issue.description)}</p>
                <p><strong>Category:</strong> ${categoryLabels[issue.category] || issue.category}</p>
                <p><strong>Status:</strong> <span class="issue-status status-${issue.status}">${statusText}</span></p>
                <p><strong>Created At:</strong> ${formatDate(issue.createdAt)}</p>
            </div>
        </div>
    `;
    
    // Add priority information
    if (issue.priority) {
        const priorityLabels = {
            critical: i18n.t('critical'),
            moderate: i18n.t('moderate'),
            minor: i18n.t('minor')
        };
        progressHtml += `
            <div class="track-priority" style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0;">
                <h4>${i18n.t('priority')}</h4>
                <p class="priority-badge priority-${issue.priority}" style="display: inline-block; margin-top: 0.5rem;">${priorityLabels[issue.priority]}</p>
            </div>
        `;
    }
    
    // Add representative information
    if (issue.assignedTo) {
        progressHtml += `
            <div class="track-representative" style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0;">
                <h4>${i18n.t('assignedTo')}</h4>
                <div style="margin-top: 1rem; line-height: 1.8;">
                    <p><strong>${escapeHtml(issue.assignedTo.name)}</strong></p>
                    <p>${i18n.t('phoneNumber')}: <a href="tel:${issue.assignedTo.phone}" style="color: var(--primary-color); text-decoration: none;">${escapeHtml(issue.assignedTo.phone)}</a></p>
                    ${issue.expectedResolution ? `<p>${i18n.t('expectedResolution')}: ${formatDate(issue.expectedResolution)}</p>` : ''}
                    ${issue.assignedTo.rating ? `<p>Rating: ${issue.assignedTo.rating.toFixed(1)} ⭐</p>` : ''}
                </div>
            </div>
        `;
    }
    
    // Add Customer Care Call Button
    const customerCareNumber = issue.customerCareNumber || '+91-1800-123-4567';
    progressHtml += `
        <div class="track-customer-care" style="background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0; text-align: center; color: white;">
            <h4 style="color: white; margin-bottom: 1rem;">${i18n.t('callCustomerCare')}</h4>
            <p style="margin-bottom: 1rem; opacity: 0.9;">${i18n.t('customerCareNumber')}</p>
            <a href="tel:${customerCareNumber}" class="btn btn-primary" style="background: white; color: var(--primary-color); padding: 0.75rem 2rem; font-size: 1.125rem; font-weight: 600; display: inline-block; text-decoration: none; border-radius: var(--radius-md); margin-top: 0.5rem;">
                📞 ${customerCareNumber}
            </a>
            <p style="margin-top: 1rem; font-size: 0.875rem; opacity: 0.8;">Call our customer care team for assistance with your issue</p>
        </div>
    `;

    if (elements.trackIssueResult) {
        elements.trackIssueResult.innerHTML = progressHtml;
        elements.trackIssueResult.style.display = 'block';
    }
}

function verifyOTPAndResolve(issueId) {
    const issue = app.issueManager.getIssue(issueId);
    if (issue && issue.otp) {
        app.issueManager.verifyOTP(issueId, issue.otp);
        app.issueManager.updateIssueStatus(issueId, 'resolved');
        showToast('Issue resolved successfully!', 'success');
        trackIssue(issueId);
    }
}

function markIssueDone(issueId) {
    if (confirm('Are you satisfied with the resolution? This will navigate you to the reviews page.')) {
        navigateToPage('reviews');
        showToast('Thank you for using SamadhanSetu!', 'success');
    }
}

window.verifyOTPAndResolve = verifyOTPAndResolve;
window.markIssueDone = markIssueDone;

function escalateIssuePrompt(issueId) {
    const reason = prompt('Please provide a reason for escalation:');
    if (reason && reason.trim()) {
        app.issueManager.escalateIssue(issueId, reason.trim());
        showToast('Issue escalated successfully. Representative rating and salary have been affected.', 'success');
        openIssueModal(issueId); // Refresh modal
    }
}
window.escalateIssuePrompt = escalateIssuePrompt;

// ===== Delete Issue Handler =====
async function deleteIssuePrompt(issueId) {
    if (confirm('Are you strictly sure you want to permanently delete this issue? This action cannot be undone.')) {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/issues/${issueId}/delete/`, {
                method: 'DELETE'
            });
            if (response.ok) {
                app.issueManager.issues = app.issueManager.issues.filter(issue => issue.id !== issueId);
                app.issueManager.saveIssues();
                showToast('Issue permanently deleted', 'success');
                if (app.currentPage === 'dashboard') loadDashboard();
                if (app.currentPage === 'home') loadHomePage();
            } else {
                throw new Error('Failed to delete issue from server');
            }
        } catch (e) {
            showToast('Failed to delete issue', 'error');
            console.error(e);
        }
    }
}
window.deleteIssuePrompt = deleteIssuePrompt;

// ===== Payment Processing =====
function processPayment(issueId) {
    const issue = app.issueManager.getIssue(issueId);
    if (!issue) return;
    
    if (confirm(`Process payment of ₹${issue.estimatedBudget} to ${issue.assignedTo?.name || 'worker'}?`)) {
        const updatedIssue = app.issueManager.processPrivateWorkerPayment(issueId);
        if (updatedIssue) {
            showToast('Payment processed successfully!', 'success');
            
            // Refresh tracking page
            if (app.currentPage === 'track') {
                trackIssue(issueId);
            }
        } else {
            showToast('Payment processing failed', 'error');
        }
    }
}
window.processPayment = processPayment;

// ===== Reviews =====
function loadReviews() {
    if (!elements.reviewsList) return;
    
    const reviews = app.issueManager.getReviews();
    
    if (reviews.length === 0) {
        elements.reviewsList.innerHTML = '<p style="color: var(--text-secondary);">No reviews yet. Be the first to review!</p>';
        return;
    }

    const reviewsHtml = reviews.map(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        return `
            <div class="review-item">
                <div class="review-header">
                    <div>
                        <div class="review-author">${escapeHtml(review.author)}</div>
                        <div class="review-date">${formatDate(review.date)}</div>
                    </div>
                    <div class="review-rating">${stars}</div>
                </div>
                <div class="review-text">${escapeHtml(review.text)}</div>
            </div>
        `;
    }).join('');

    elements.reviewsList.innerHTML = reviewsHtml;
}

function initReviewForm() {
    if (elements.reviewForm) {
        elements.reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const reviewData = {
                rating: elements.reviewRating.value,
                text: elements.reviewText.value.trim()
            };

            if (!reviewData.rating || !reviewData.text) {
                showToast('Please fill in all fields', 'error');
                return;
            }

            app.issueManager.addReview(reviewData);
            showToast('Review submitted successfully!', 'success');
            elements.reviewForm.reset();
            loadReviews();
        });
    }
}

// ===== Track Issue Button =====
function initTrackIssue() {
    if (elements.trackIssueBtn) {
        elements.trackIssueBtn.addEventListener('click', () => {
            trackIssue();
        });
    }
}

// ===== Logo Image Handler =====
function initLogo() {
    const logoImage = document.querySelector('.logo-image');
    const logoText = document.querySelector('.logo-text');
    
    if (logoImage && logoText) {
        // Check if image loads successfully
        logoImage.addEventListener('load', () => {
            logoText.style.display = 'none';
        });
        
        logoImage.addEventListener('error', () => {
            logoImage.style.display = 'none';
            logoText.style.display = 'block';
        });
        
        // Initial check - if image has src and is already loaded
        if (logoImage.src && logoImage.complete && logoImage.naturalHeight !== 0) {
            logoText.style.display = 'none';
        } else if (!logoImage.src || logoImage.src === window.location.href) {
            logoImage.style.display = 'none';
            logoText.style.display = 'block';
        }
    }
}

// ===== Chatbot functionality added =====
function initChatbot() {
    // Query chatbot elements inside hero
    elements.chatbotToggle = document.getElementById('chatbot-toggle');
    elements.chatWindow = document.getElementById('chat-window');
    elements.chatForm = document.getElementById('chat-form');
    elements.chatInput = document.getElementById('chat-input');
    elements.chatBody = document.getElementById('chat-body');
    elements.chatClose = document.getElementById('chat-close');

    if (!elements.chatbotToggle || !elements.chatWindow) return;

    // Toggle chatbot
    elements.chatbotToggle.addEventListener('click', (e) => {
        const open = !elements.chatWindow.classList.contains('active');
        toggleChat(open);
    });

    elements.chatClose.addEventListener('click', () => toggleChat(false));

    // Submit message (also supports Enter)
    elements.chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = elements.chatInput.value.trim();
        if (!text) return;
        appendUserMessage(text);
        elements.chatInput.value = '';
        // Simulate bot reply (replace with real backend later)
        setTimeout(() => {
            appendBotMessage(getAutoReply(text));
        }, 600);
    });

    // keyboard accessibility: open with Enter on FAB
    elements.chatbotToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            elements.chatbotToggle.click();
        }
    });
}

function toggleChat(open) {
    if (!elements.chatWindow) return;
    if (open) {
        elements.chatWindow.classList.add('active');
        elements.chatWindow.setAttribute('aria-hidden', 'false');
        elements.chatbotToggle.setAttribute('aria-expanded', 'true');
        elements.chatInput.focus();
    } else {
        elements.chatWindow.classList.remove('active');
        elements.chatWindow.setAttribute('aria-hidden', 'true');
        elements.chatbotToggle.setAttribute('aria-expanded', 'false');
        elements.chatbotToggle.focus();
    }
}

function appendBotMessage(text) {
    if (!elements.chatBody) return;
    const div = document.createElement('div');
    div.className = 'bot-msg';
    div.innerHTML = escapeHtml(text);
    elements.chatBody.appendChild(div);
    scrollChatToBottom();
}

function appendUserMessage(text) {
    if (!elements.chatBody) return;
    const div = document.createElement('div');
    div.className = 'user-msg';
    div.innerHTML = escapeHtml(text);
    elements.chatBody.appendChild(div);
    scrollChatToBottom();
}

function scrollChatToBottom() {
    if (!elements.chatBody) return;
    elements.chatBody.scrollTop = elements.chatBody.scrollHeight;
}

function getAutoReply(userText) {
    const lower = userText.toLowerCase();
    if (lower.includes('track') || lower.includes('id') || lower.includes('status')) {
        return 'To track an issue, click the "Track Issue" link in the menu and enter your Issue ID. Would you like me to take you there?';
    }
    if (lower.includes('submit') || lower.includes('report')) {
        return 'To submit an issue, go to "Submit Issue" from the menu and fill the form. I can guide you through it if needed.';
    }
    if (lower.includes('hello') || lower.includes('hi')) {
        return 'Hello! How can I help you today? You can ask me to submit, track, or find information about issues.';
    }
    // default reply
    return "Thanks — I've received your message. For submitting or tracking issues please use the menu above or type 'track' or 'submit'.";
}

// ===== Voice-based Issue Reporting =====
class VoiceRecognition {
    constructor() {
        this.recognition = null;
        this.isListening = false;
        this.transcript = '';
        this.initSpeechRecognition();
    }
    
    initSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.transcript = transcript;
                this.onTranscript(transcript);
            };
            
            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                showToast('Speech recognition error: ' + event.error, 'error');
                this.isListening = false;
            };
            
            this.recognition.onend = () => {
                this.isListening = false;
                if (document.getElementById('voice-status')) {
                    document.getElementById('voice-status').textContent = '';
                }
                if (document.getElementById('voice-record-btn')) {
                    document.getElementById('voice-record-btn').textContent = i18n.t('startRecording');
                }
            };
        }
    }
    
    startListening() {
        if (!this.recognition) {
            showToast('Speech recognition not supported in your browser', 'error');
            return;
        }
        
        if (this.isListening) {
            this.stopListening();
            return;
        }
        
        this.isListening = true;
        this.transcript = '';
        this.recognition.start();
        
        if (document.getElementById('voice-status')) {
            document.getElementById('voice-status').textContent = i18n.t('listening');
        }
        if (document.getElementById('voice-record-btn')) {
            document.getElementById('voice-record-btn').textContent = i18n.t('stopRecording');
        }
    }
    
    stopListening() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
            this.isListening = false;
        }
    }
    
    onTranscript(transcript) {
        // Auto-fill form fields
        const titleField = document.getElementById('issue-title');
        const descField = document.getElementById('issue-description');
        
        if (titleField && !titleField.value) {
            // Extract title (first sentence or first 50 chars)
            const title = transcript.split('.')[0].substring(0, 50).trim();
            titleField.value = title;
        }
        
        if (descField) {
            descField.value = transcript;
        }
        
        // Try to get location from geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (app.map) {
                    setLocation(position.coords.latitude, position.coords.longitude);
                }
            });
        }
        
        showToast('Voice input received!', 'success');
    }
}

// ===== Community Features =====
class CommunityManager {
    constructor() {
        this.storageKey = 'SamadhanSetuCommunity';
    }
    
    getLeaderboard() {
        const stored = localStorage.getItem('SamadhanSetuLeaderboard');
        if (stored) {
            return JSON.parse(stored);
        }
        // Initialize with default data
        const defaults = [
            { userId: 'user1', name: 'Active Citizen 1', issuesReported: 25, upvotes: 120, rank: 1 },
            { userId: 'user2', name: 'Active Citizen 2', issuesReported: 20, upvotes: 95, rank: 2 },
            { userId: 'user3', name: 'Active Citizen 3', issuesReported: 18, upvotes: 85, rank: 3 }
        ];
        localStorage.setItem('SamadhanSetuLeaderboard', JSON.stringify(defaults));
        return defaults;
    }
    
    getPolls() {
        const stored = localStorage.getItem('SamadhanSetuPolls');
        if (stored) {
            return JSON.parse(stored);
        }
        return [];
    }
    
    createPoll(question, options) {
        const polls = this.getPolls();
        const newPoll = {
            id: 'poll_' + Date.now(),
            question: question,
            options: options.map(opt => ({ text: opt, votes: 0 })),
            createdAt: new Date().toISOString(),
            votedBy: []
        };
        polls.push(newPoll);
        localStorage.setItem('SamadhanSetuPolls', JSON.stringify(polls));
        return newPoll;
    }
    
    votePoll(pollId, optionIndex) {
        const polls = this.getPolls();
        const poll = polls.find(p => p.id === pollId);
        if (!poll) return null;
        
        const userId = app.issueManager.currentUser;
        if (poll.votedBy.includes(userId)) {
            return null; // Already voted
        }
        
        poll.options[optionIndex].votes++;
        poll.votedBy.push(userId);
        localStorage.setItem('SamadhanSetuPolls', JSON.stringify(polls));
        return poll;
    }
}

// ===== Initialize Application =====
const voiceRecognition = new VoiceRecognition();
const communityManager = new CommunityManager();

// ===== Language Changer Initialization =====
function initLanguageChanger() {
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = i18n.currentLanguage;
        langSelect.addEventListener('change', (e) => {
            i18n.setLanguage(e.target.value);
            // Reload current page to update all text
            if (app.currentPage === 'home') {
                loadHomePage();
            } else if (app.currentPage === 'dashboard') {
                loadDashboard();
            } else if (app.currentPage === 'reviews') {
                loadReviews();
            }
        });
    }
    // Initial language update
    i18n.updatePageLanguage();
}

// ===== Voice Recording Initialization =====
function initVoiceRecording() {
    const voiceBtn = document.getElementById('voice-record-btn');
    if (voiceBtn) {
        voiceBtn.addEventListener('click', () => {
            voiceRecognition.startListening();
        });
    }
}

// ===== Check Overdue Issues =====
function initOverdueChecker() {
    // Check for overdue issues every 5 minutes
    setInterval(() => {
        app.issueManager.checkOverdueIssues();
    }, 5 * 60 * 1000);
    // Initial check
    app.issueManager.checkOverdueIssues();
}

// ===== Private/Public Issue Form Switching =====
function initIssueTypeSelector() {
    if (elements.issueTypeBtns && elements.issueTypeBtns.length > 0) {
        elements.issueTypeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.getAttribute('data-type');
                
                // Update button states
                elements.issueTypeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Show/hide forms
                if (type === 'public') {
                    if (elements.issueForm) elements.issueForm.style.display = 'block';
                    if (elements.privateIssueForm) elements.privateIssueForm.style.display = 'none';
                } else {
                    if (elements.issueForm) elements.issueForm.style.display = 'none';
                    if (elements.privateIssueForm) elements.privateIssueForm.style.display = 'block';
                }
            });
        });
    }
}

// ===== Private Issue Form Submission =====
function initPrivateIssueForm() {
    const privateForm = elements.privateIssueForm;
    if (!privateForm) return;
    
    privateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!app.currentUser) {
            showToast('Please login to submit a private issue', 'error');
            openAuthModal('login');
            return;
        }
        
        const formData = new FormData(privateForm);
        
        // Validate required fields
        const villageName = formData.get('villageName');
        const mandal = formData.get('mandal');
        const district = formData.get('district');
        const pincode = formData.get('pincode');
        const streetName = formData.get('streetName');
        
        if (!villageName || !mandal || !district || !pincode || !streetName) {
            showToast('Please fill in all required address fields', 'error');
            return;
        }
        
        if (pincode.length !== 6 || !/^\d+$/.test(pincode)) {
            showToast('Please enter a valid 6-digit pincode', 'error');
            return;
        }
        
        // Handle image
        let imageData = null;
        const imageFile = document.getElementById('private-issue-image')?.files[0];
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imageData = event.target.result;
                submitPrivateIssue(formData, imageData);
            };
            reader.readAsDataURL(imageFile);
        } else {
            submitPrivateIssue(formData, null);
        }
    });
    
    // Image preview for private form
    const privateImageInput = document.getElementById('private-issue-image');
    const privateImagePreview = document.getElementById('private-image-preview');
    if (privateImageInput && privateImagePreview) {
        privateImageInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    privateImagePreview.src = event.target.result;
                    privateImagePreview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

function submitPrivateIssue(formData, imageData) {
    const houseNumber = formData.get('houseNumber') || '';
    const streetName = formData.get('streetName') || '';
    const villageName = formData.get('villageName') || '';
    const mandal = formData.get('mandal') || '';
    const district = formData.get('district') || '';
    const pincode = formData.get('pincode') || '';
    
    const addressParts = [];
    if (houseNumber) addressParts.push(houseNumber);
    if (streetName) addressParts.push(streetName);
    if (villageName) addressParts.push(villageName);
    if (mandal) addressParts.push(mandal);
    if (district) addressParts.push(district);
    if (pincode) addressParts.push(pincode);
    const fullAddress = addressParts.join(', ');
    
    const preferredWorkerId = formData.get('preferredWorker') || null;
    const estimatedBudget = parseFloat(formData.get('estimatedBudget')) || null;
    
    const issueData = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        location: fullAddress,
        lat: null,
        lng: null,
        image: imageData,
        addressDetails: {
            houseNumber,
            streetName,
            villageName,
            mandal,
            district,
            pincode
        },
        type: 'private',
        preferredWorkerId: preferredWorkerId,
        estimatedBudget: estimatedBudget,
        userId: app.currentUser.id,
        paymentStatus: 'pending'
    };
    
    const newIssue = app.issueManager.addIssue(issueData);
    
    // Show success message with payment info
    let message = 'Private issue submitted successfully! Issue ID: ' + newIssue.id;
    if (estimatedBudget) {
        message += ` | Estimated Budget: ₹${estimatedBudget}`;
    }
    if (preferredWorkerId) {
        const workers = app.authManager.getWorkers();
        const worker = workers.find(w => w.id === preferredWorkerId);
        if (worker) {
            message += ` | Assigned to: ${worker.name}`;
        }
    }
    showToast(message, 'success');
    
    // Reset form
    elements.privateIssueForm.reset();
    const privateImagePreview = document.getElementById('private-image-preview');
    if (privateImagePreview) privateImagePreview.style.display = 'none';
    
    // Navigate to track page
    setTimeout(() => {
        navigateToPage('track');
        if (elements.trackIssueId) {
            elements.trackIssueId.value = newIssue.id;
            trackIssue(newIssue.id);
        }
    }, 1500);
}

// ===== Workers Page =====
function loadWorkers() {
    if (!elements.workersList) return;
    
    const workers = app.authManager.getWorkers();
    const jobRoleFilter = elements.filterJobRole?.value || '';
    const sortBy = elements.sortWorkers?.value || 'rating';
    
    let filtered = workers;
    
    // Filter by job role
    if (jobRoleFilter) {
        filtered = filtered.filter(worker => worker.jobRole === jobRoleFilter);
    }
    
    // Sort workers
    filtered = filtered.sort((a, b) => {
        if (sortBy === 'rating') {
            return (b.rating || 0) - (a.rating || 0);
        } else if (sortBy === 'completed') {
            return (b.completedJobs || 0) - (a.completedJobs || 0);
        } else if (sortBy === 'experience') {
            return (b.experience || 0) - (a.experience || 0);
        }
        return 0;
    });
    
    renderWorkers(filtered);
    
    // Also update worker dropdown in private issue form
    updateWorkerDropdown(filtered);
}

function renderWorkers(workers) {
    if (!elements.workersList) return;
    
    elements.workersList.innerHTML = '';
    
    if (workers.length === 0) {
        elements.workersList.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No workers found.</p>';
        return;
    }
    
    const jobRoleLabels = {
        electrician: 'Electrician',
        plumber: 'Plumber',
        carpenter: 'Carpenter',
        painter: 'Painter',
        mechanic: 'Mechanic',
        cleaner: 'Cleaner',
        gardener: 'Gardener',
        appliance_repair: 'Appliance Repair'
    };
    
    workers.forEach(worker => {
        const card = document.createElement('div');
        card.className = 'worker-card';
        
        const ratingStars = '★'.repeat(Math.floor(worker.rating || 0)) + '☆'.repeat(5 - Math.floor(worker.rating || 0));
        
        card.innerHTML = `
            <div class="worker-header">
                <h3>${escapeHtml(worker.name)}</h3>
                <div class="worker-rating">
                    <span class="rating-stars">${ratingStars}</span>
                    <span class="rating-value">${(worker.rating || 0).toFixed(1)}</span>
                </div>
            </div>
            <div class="worker-details">
                <p class="worker-job-role">${jobRoleLabels[worker.jobRole] || worker.jobRole}</p>
                <p class="worker-experience">Experience: ${worker.experience || 0} years</p>
                <p class="worker-jobs">Completed Jobs: ${worker.completedJobs || 0}</p>
                <p class="worker-phone">📞 ${escapeHtml(worker.phone)}</p>
                ${worker.address ? `<p class="worker-address">📍 ${escapeHtml(worker.address)}</p>` : ''}
            </div>
            <div class="worker-actions">
                <button class="btn btn-primary btn-sm select-worker-btn" data-worker-id="${worker.id}">
                    Select Worker
                </button>
            </div>
        `;
        
        // Add select worker button handler
        const selectBtn = card.querySelector('.select-worker-btn');
        if (selectBtn) {
            selectBtn.addEventListener('click', () => {
                if (app.currentPage === 'submit') {
                    // Update private issue form
                    if (elements.preferredWorkerSelect) {
                        elements.preferredWorkerSelect.value = worker.id;
                    }
                    navigateToPage('submit');
                    // Switch to private form
                    const privateBtn = document.querySelector('[data-type="private"]');
                    if (privateBtn) privateBtn.click();
                    showToast('Worker selected!', 'success');
                } else {
                    showToast('Please go to Submit Issue page to select a worker', 'info');
                }
            });
        }
        
        elements.workersList.appendChild(card);
    });
}

function updateWorkerDropdown(workers) {
    if (!elements.preferredWorkerSelect) return;
    
    // Clear existing options except first
    while (elements.preferredWorkerSelect.options.length > 1) {
        elements.preferredWorkerSelect.remove(1);
    }
    
    workers.forEach(worker => {
        const option = document.createElement('option');
        option.value = worker.id;
        option.textContent = `${worker.name} (${worker.jobRole}) - Rating: ${(worker.rating || 0).toFixed(1)} ⭐`;
        elements.preferredWorkerSelect.appendChild(option);
    });
}

function initWorkersPage() {
    if (elements.filterJobRole) {
        elements.filterJobRole.addEventListener('change', loadWorkers);
    }
    if (elements.sortWorkers) {
        elements.sortWorkers.addEventListener('change', loadWorkers);
    }
    if (elements.browseWorkersBtn) {
        elements.browseWorkersBtn.addEventListener('click', () => {
            navigateToPage('workers');
        });
    }
}

// ===== Agent Dashboard =====
function initAgentDashboard() {
    if (elements.agentSearchBtn) {
        elements.agentSearchBtn.addEventListener('click', () => {
            searchAgentIssue();
        });
    }
    
    if (elements.agentWorkId) {
        elements.agentWorkId.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchAgentIssue();
            }
        });
    }
}

function searchAgentIssue() {
    const workId = elements.agentWorkId?.value?.trim();
    
    if (!workId) {
        showToast('Please enter a Work ID or Issue ID', 'error');
        return;
    }
    
    const issue = app.issueManager.getIssue(workId);
    
    if (!issue) {
        if (elements.agentResult) {
            elements.agentResult.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <p style="color: var(--danger-color); font-size: 1.125rem; margin-bottom: 1rem;">
                        Issue not found. Please check the Work ID.
                    </p>
                    <div style="margin-top: 2rem;">
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                            Need help? Contact Customer Care:
                        </p>
                        <a href="tel:+91-1800-123-4567" class="btn btn-primary">
                            📞 Call Customer Care: +91-1800-123-4567
                        </a>
                    </div>
                </div>
            `;
            elements.agentResult.style.display = 'block';
        }
        return;
    }
    
    // Display issue details for agent
    displayAgentIssueDetails(issue);
}

function displayAgentIssueDetails(issue) {
    const categoryLabels = {
        infrastructure: 'Infrastructure',
        safety: 'Safety',
        environment: 'Environment',
        transportation: 'Transportation',
        utilities: 'Utilities',
        other: 'Other'
    };
    
    const statusDisplay = {
        'submitted': 'Submitted',
        'dispatched': 'Dispatched',
        'otp-verification': 'OTP Verification',
        'resolved': 'Resolved',
        'open': 'Open',
        'in-progress': 'In Progress',
        'escalated': 'Escalated'
    };
    
    let html = `
        <div class="agent-issue-details">
            <div class="agent-issue-header">
                <h3>${escapeHtml(issue.title)}</h3>
                <span class="issue-status status-${issue.status}">${statusDisplay[issue.status] || issue.status}</span>
            </div>
            
            <div class="agent-issue-info">
                <div class="info-section">
                    <h4>Issue ID</h4>
                    <p class="issue-id-display">${escapeHtml(issue.id)}</p>
                </div>
                
                <div class="info-section">
                    <h4>Description</h4>
                    <p>${escapeHtml(issue.description)}</p>
                </div>
                
                <div class="info-section">
                    <h4>Category</h4>
                    <p>${categoryLabels[issue.category] || issue.category}</p>
                </div>
                
                <div class="info-section">
                    <h4>Status</h4>
                    <p>${statusDisplay[issue.status] || issue.status}</p>
                </div>
                
                ${issue.addressDetails ? `
                    <div class="info-section">
                        <h4>Address Details</h4>
                        <p>
                            ${issue.addressDetails.houseNumber ? issue.addressDetails.houseNumber + ', ' : ''}
                            ${issue.addressDetails.streetName}<br>
                            ${issue.addressDetails.villageName}, ${issue.addressDetails.mandal}<br>
                            ${issue.addressDetails.district} - ${issue.addressDetails.pincode}
                        </p>
                    </div>
                ` : ''}
                
                ${issue.assignedTo ? `
                    <div class="info-section">
                        <h4>Assigned To</h4>
                        <p>
                            <strong>${escapeHtml(issue.assignedTo.name)}</strong><br>
                            Phone: <a href="tel:${issue.assignedTo.phone}">${escapeHtml(issue.assignedTo.phone)}</a>
                        </p>
                    </div>
                ` : ''}
                
                ${issue.expectedResolution ? `
                    <div class="info-section">
                        <h4>Expected Resolution</h4>
                        <p>${formatDate(issue.expectedResolution)}</p>
                    </div>
                ` : ''}
            </div>
            
            ${issue.image ? `
                <div class="info-section">
                    <h4>Uploaded Image</h4>
                    <img src="${issue.image}" alt="Issue Image" style="max-width: 100%; border-radius: var(--radius-md); margin-top: 1rem;">
                </div>
            ` : ''}
            
            <div class="agent-actions">
                <a href="tel:+91-1800-123-4567" class="btn btn-primary">
                    📞 Call Customer Care: +91-1800-123-4567
                </a>
            </div>
        </div>
    `;
    
    if (elements.agentResult) {
        elements.agentResult.innerHTML = html;
        elements.agentResult.style.display = 'block';
    }
}

function init() {
    initLogo();
    initNavigation();
    initAuth();
    initIssueForm();
    initPrivateIssueForm();
    initIssueTypeSelector();
    initImagePreview();
    initFilters();
    initModals();
    initCommentForm();
    initReviewForm();
    initTrackIssue();
    initLanguageChanger();
    initVoiceRecording();
    initOverdueChecker();
    initWorkersPage();
    initAgentDashboard();
    loadHomePage();
    initChatbot();

    // Handle hash navigation
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        if (hash && ['home', 'submit', 'dashboard'].includes(hash)) {
            navigateToPage(hash);
        }
    });

    // Check initial hash
    const hash = window.location.hash.slice(1);
    if (hash && ['home', 'submit', 'dashboard', 'track', 'reviews', 'workers', 'agent'].includes(hash)) {
        navigateToPage(hash);
    } else {
        navigateToPage('home');
    }
    
    // Initialize sample workers if none exist
    initializeSampleWorkers();
}

function initializeSampleWorkers() {
    const workers = app.authManager.getWorkers();
    if (workers.length === 0) {
        // Add sample workers
        const sampleWorkers = [
            {
                id: 'worker_sample_1',
                name: 'Ramesh Kumar',
                phone: '+91-9876543210',
                email: 'ramesh.electrician@example.com',
                jobRole: 'electrician',
                experience: 8,
                address: 'Hyderabad, Telangana',
                password: 'password123',
                rating: 4.8,
                totalJobs: 45,
                completedJobs: 43,
                earnings: 125000,
                createdAt: new Date(Date.now() - 86400000 * 30).toISOString()
            },
            {
                id: 'worker_sample_2',
                name: 'Suresh Reddy',
                phone: '+91-9876543211',
                email: 'suresh.plumber@example.com',
                jobRole: 'plumber',
                experience: 12,
                address: 'Hyderabad, Telangana',
                password: 'password123',
                rating: 4.9,
                totalJobs: 78,
                completedJobs: 76,
                earnings: 210000,
                createdAt: new Date(Date.now() - 86400000 * 60).toISOString()
            },
            {
                id: 'worker_sample_3',
                name: 'Kiran Sharma',
                phone: '+91-9876543212',
                email: 'kiran.carpenter@example.com',
                jobRole: 'carpenter',
                experience: 6,
                address: 'Hyderabad, Telangana',
                password: 'password123',
                rating: 4.6,
                totalJobs: 32,
                completedJobs: 30,
                earnings: 95000,
                createdAt: new Date(Date.now() - 86400000 * 20).toISOString()
            }
        ];
        
        sampleWorkers.forEach(worker => {
            app.authManager.saveWorkers([...app.authManager.getWorkers(), worker]);
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===== Chatbot Floating Widget =====
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotBox = document.getElementById('chatbot-box');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input-field');
const chatbotSend = document.getElementById('chatbot-send');

chatbotToggle.addEventListener('click', () => {
  chatbotBox.style.display = 'flex';
  chatbotToggle.style.display = 'none';
});

chatbotClose.addEventListener('click', () => {
  chatbotBox.style.display = 'none';
  chatbotToggle.style.display = 'block';
});

chatbotSend.addEventListener('click', sendChatMessage);
chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendChatMessage();
});

function sendChatMessage() {
  const userText = chatbotInput.value.trim();
  if (!userText) return;

  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'user-msg';
  userMsg.textContent = userText;
  chatbotMessages.appendChild(userMsg);
  chatbotInput.value = '';

  // Auto-scroll
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  // Bot reply simulation
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'bot-msg';
    botMsg.textContent = getBotReply(userText);
    chatbotMessages.appendChild(botMsg);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }, 700);
}

function getBotReply(input) {
  input = input.toLowerCase();
  if (input.includes('hello') || input.includes('hi')) return "Hello! 👋 How can I assist you today?";
  if (input.includes('submit')) return "You can report an issue using the 'Submit Issue' page.";
  if (input.includes('track')) return "Enter your Issue ID on the 'Track Issue' page to check its status.";
  if (input.includes('review')) return "You can leave feedback on the 'Reviews' section.";
  return "I'm here to help with SamadhanSetu — try asking about submitting or tracking issues!";
}
