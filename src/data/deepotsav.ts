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
    mr: "वाटेगाव वासुदेव मंदिरातील दीपोत्सव",
    en: "Deepotsav Festival at Wategaon Vasudev Mandir",
  },
  subtitle: {
    mr: "कोजागिरी पौर्णिमा ते त्रिपुरारी पौर्णिमा दरम्यान महिनाभर साजरा होणारा पारंपरिक दीपप्रज्वलन सोहळा",
    en: "Traditional month-long lighting of lamps from Kojagiri Purnima to Tripurari Purnima",
  },
  period: {
    mr: "कोजागिरी पौर्णिमा ते त्रिपुरारी पौर्णिमा (अश्विन शु. १५ ते कार्तिक शु. १५)",
    en: "Kojagiri Purnima to Tripurari Purnima (Ashwin Shuddha 15 to Kartik Shuddha 15)",
  },
  highlights: [
    {
      title: { mr: "पारंपरिक दीपप्रज्वलन", en: "Traditional Lamp Lighting" },
      description: {
        mr: "दररोज संध्याकाळी संपूर्ण मंदिर परिसर, सागवानी मंडप आणि पायऱ्यांवर पणत्या व समयांचे प्रज्वलन केले जाते.",
        en: "Every evening traditional earthen lamps and brass samai lamps are lit across the temple grounds and mandap.",
      },
      icon: "Flame",
    },
    {
      title: { mr: "काकड आरती व भूपाळी", en: "Dawn Kakad Aarti" },
      description: {
        mr: "दीपोत्सवाच्या काळात भल्या पहाटे ५:३० वाजता नित्य काकड आरती आणि नामस्मरण होते.",
        en: "Morning Kakad Aarti and quiet devotional prayers are held at 5:30 AM during the festival period.",
      },
      icon: "Sun",
    },
    {
      title: { mr: "त्रिपुरारी पौर्णिमा सांगता", en: "Tripurari Purnima Concluding Festival" },
      description: {
        mr: "दीपोत्सवाच्या शेवटच्या दिवशी त्रिपुरारी पौर्णिमेला दीपमाळ प्रज्वलन व पूजा केली जाते.",
        en: "On the final day of Tripurari Purnima, the Deepmal lighting ceremony is performed.",
      },
      icon: "Sparkles",
    },
  ],
  schedule: [
    {
      time: { mr: "पहाटे ५:३० वा.", en: "5:30 AM" },
      event: { mr: "काकड आरती", en: "Kakad Aarti" },
      details: {
        mr: "सकाळच्या वेळी नित्य काकड आरती व भूपाळी.",
        en: "Morning Kakad Aarti and traditional prayers.",
      },
    },
    {
      time: { mr: "सकाळी ८:०० वा.", en: "8:00 AM" },
      event: { mr: "नित्य पूजा व अर्चना", en: "Daily Pooja" },
      details: {
        mr: "पंचधातू मूर्तीची नित्य पूजा व पुष्प शृंगार.",
        en: "Daily pooja and floral offerings to the Panchadhatu idol.",
      },
    },
    {
      time: { mr: "संध्याकाळी ६:३० वा.", en: "6:30 PM" },
      event: { mr: "दीपप्रज्वलन", en: "Lighting of Lamps" },
      details: {
        mr: "मंदिर परिसरात सर्व समया व पणत्यांचे प्रज्वलन.",
        en: "Lighting of traditional lamps and samai lights around the temple.",
      },
    },
    {
      time: { mr: "संध्याकाळी ७:३० वा.", en: "7:30 PM" },
      event: { mr: "सायंकाळची आरती", en: "Evening Aarti" },
      details: {
        mr: "सायंकाळची मुख्य आरती व मंत्रपुष्पांजली.",
        en: "Main evening Aarti and prayer worship.",
      },
    },
  ],
};
