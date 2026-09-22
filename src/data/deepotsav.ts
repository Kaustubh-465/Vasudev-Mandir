export interface DeepotsavData {
  title: { mr: string; en: string };
  subtitle: { mr: string; en: string };
  period: { mr: string; en: string };
  highlights: Array<{
    title: { mr: string; en: string };
    description: { mr: string; en: string };
    icon: string;
  }>;
  schedule: Array<{
    time: { mr: string; en: string };
    event: { mr: string; en: string };
    details: { mr: string; en: string };
  }>;
}

export const deepotsavInfo: DeepotsavData = {
  title: {
    mr: "वाटेगाव वासुदेव मंदिराचा भव्य दीपोत्सव सोहळा",
    en: "Grand Deepotsav Festival of Wategaon Vasudev Mandir",
  },
  subtitle: {
    mr: "कोजागिरी पौर्णिमा ते त्रिपुरारी पौर्णिमा - संपूर्ण महिनाभर चालणारा दिव्यांचा लखलखाट",
    en: "Month-long illumination of thousands of traditional oil lamps from Kojagiri to Tripurari Purnima",
  },
  period: {
    mr: "कोजागिरी पौर्णिमा ते त्रिपुरारी पौर्णिमा (अश्विन शु. १५ ते कार्तिक शु. १५)",
    en: "Kojagiri Purnima to Tripurari Purnima (Ashwin Shuddha 15 to Kartik Shuddha 15)",
  },
  highlights: [
    {
      title: { mr: "हजारो पणत्यांचा लखलखाट", en: "Thousands of Illuminated Diyas" },
      description: {
        mr: "दररोज संध्याकाळी संपूर्ण मंदिर परिसर, सागवानी मंडप आणि ५० फूट उंच शिखर हजारो दिव्यांनी उजळून निघते.",
        en: "Every evening the entire temple compound, teakwood hall, and 50ft shikhara glow with thousands of earthen diyas.",
      },
      icon: "Flame",
    },
    {
      title: { mr: "काकड आरती व हरिनाम गजर", en: "Dawn Kakad Aarti & Chants" },
      description: {
        mr: "दीपोत्सवाच्या काळात भल्या पहाटे ५:३० वाजता काकड आरती आणि वासुदेवाचे प्रिय हरिनाम संकीर्तन होते.",
        en: "Devotees gather at 5:30 AM every morning for Kakad Aarti and soul-stirring Vasudev Harinam chanting.",
      },
      icon: "Sun",
    },
    {
      title: { mr: "त्रिपुरारी पौर्णिमा मुख्य सोहळा", en: "Tripurari Purnima Grand Finale" },
      description: {
        mr: "दीपोत्सवाच्या शेवटच्या दिवशी (त्रिपुरारी पौर्णिमेला) दीपमाळ प्रज्वलन, विशेष महापूजा आणि महाप्रसादाचे आयोजन केले जाते.",
        en: "On Tripurari Purnima, the grand Deepmal light ceremony is performed alongside special Mahapooja & Mahaprasad.",
      },
      icon: "Sparkles",
    },
  ],
  schedule: [
    {
      time: { mr: "पहाटे ५:३० वा.", en: "5:30 AM" },
      event: { mr: "काकड आरती व भूपाळी", en: "Kakad Aarti & Bhupali" },
      details: {
        mr: "एकनाथी भागवत परंपरेनुसार सकाळी वासुदेवाची पाद्यपूजा व काकड आरती.",
        en: "Morning padapooja and Kakad Aarti according to Eknathi Bhagwat traditions.",
      },
    },
    {
      time: { mr: "सकाळी ८:०० वा.", en: "8:00 AM" },
      event: { mr: "नित्य अभिषेक व महापूजा", en: "Daily Abhishek & Mahapooja" },
      details: {
        mr: "पंचधातू मूर्तीचा पंचामृत अभिषेक व सुशोभन.",
        en: "Panchamrut abhishek and floral decoration of the Panchadhatu Krishna idol.",
      },
    },
    {
      time: { mr: "संध्याकाळी ६:३० वा.", en: "6:30 PM" },
      event: { mr: "दीपावल्या प्रज्वलन", en: "Lighting of Earthen Lamps" },
      details: {
        mr: "मंदिर परिसरात सर्व दिव्यांचे प्रज्वलन व रोषणाई.",
        en: "Lighting thousands of traditional earthen oil lamps around the temple.",
      },
    },
    {
      time: { mr: "संध्याकाळी ७:३० वा.", en: "7:30 PM" },
      event: { mr: "धूपारती व दीप महोत्सव", en: "Dhuparti & Main Deepotsav Worship" },
      details: {
        mr: "महाआरती, मंत्रपुष्पांजली व भाविकांसाठी दर्शन.",
        en: "Grand evening Aarti, Mantrapushpanjali and darshan for all visiting pilgrims.",
      },
    },
  ],
};

