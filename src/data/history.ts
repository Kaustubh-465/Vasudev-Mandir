export interface HistoryTimelineItem {
  year: string;
  title: { mr: string; en: string };
  description: { mr: string; en: string };
}

export interface SthapanaUtsavData {
  title: { mr: string; en: string };
  subtitle: { mr: string; en: string };
  period: { mr: string; en: string };
  duration: { mr: string; en: string };
  events: Array<{
    title: { mr: string; en: string };
    time?: { mr: string; en: string };
    desc: { mr: string; en: string };
  }>;
}

export interface HistorySection {
  title: { mr: string; en: string };
  paragraphs: Array<{ mr: string; en: string }>;
  timeline: HistoryTimelineItem[];
  sthapanaUtsav: SthapanaUtsavData;
}

export const templeHistory: HistorySection = {
  title: {
    mr: "श्री वासुदेव मंदिर वाटेगाव - इतिहास व कौटुंबिक परंपरा",
    en: "Shree Vasudev Mandir Wategaon - History & Family Heritage",
  },
  paragraphs: [
    {
      mr: "सांगली जिल्ह्यातील वाळवा तालुक्यात असलेल्या वाटेगाव येथे भोगावती नदीच्या तीरावर **श्री वासुदेव मंदिर** वसलेले आहे. हे मंदिर **दिवेकर घराण्याचे खाजगी मंदिर** आहे.",
      en: "Shree Vasudev Mandir is located on the banks of Bhogawati river in Wategaon, Walwa taluka of Sangli district. This is a **private temple of the Divekar family**.",
    },
    {
      mr: "सुमारे शंभर वर्षांपूर्वी लिहिलेल्या ऐतिहासिक ग्रंथातील नोंदीनुसार, **वासुदेवस्वामी दिवेकर** यांनी स्वतःच्या श्रमाने वाटेगाव येथे मंदिराची व श्री वासुदेव मूर्तीची स्थापना केली. त्यांनी वासुदेव उपासना व भजन-पूजनाची परंपरा सुरू केली.",
      en: "According to historical records, **Vasudevswami Divekar** established the temple and Shree Vasudev idol at Wategaon by his own labor, initiating the family tradition of worship.",
    },
    {
      mr: "त्यांच्यानंतर वै. विश्वनाथ दादा पाटणकर आणि वै. वाटेश्वरबुवा दिवेकर यांनी ही परंपरा पुढे चालवली. पुढे श्रीसद्गुरु गोविंद हरी दिवेकर यांनी नोकरी आणि प्रपंचाची कठीण जबाबदारी सांभाळत मंदिराची व्यवस्था, नित्यक्रम आणि जिर्णोद्धार अत्यंत निष्ठेने पूर्ण केला.",
      en: "The tradition was carried forward by Vishwanath Dada Patankar and Wateshwarbuwa Divekar, and subsequently by Govind Hari Divekar who devotedly managed the temple alongside his job and family responsibilities.",
    },
  ],
  timeline: [
    {
      year: "स्थापना व समाधी (शके १७६७)",
      title: { mr: "वासुदेवस्वामी दिवेकर", en: "Vasudevswami Divekar" },
      description: {
        mr: "वासुदेवस्वामी दिवेकर यांनी वाटेगाव येथे मंदिराची व श्री वासुदेव मूर्तीची स्थापना केली. (समाधी: शके १७६७ श्रावण शुद्ध ३).",
        en: "Vasudevswami Divekar established the temple and Shree Vasudev idol at Wategaon. (Samadhi: Shake 1767 Shravan Shuddha 3).",
      },
    },
    {
      year: "परंपरा व साधना",
      title: { mr: "वै. विश्वनाथ दादा पाटणकर व वै. वाटेश्वरबुवा", en: "Vishwanath Dada & Wateshwarbuwa" },
      description: {
        mr: "विश्वनाथ दादा पाटणकर यांनी ग्रंथलेखन व उपदेशपरंपरा चालवली. त्यानंतर गोविंदबुवांचे चुलते वाटेश्वरबुवा दिवेकर यांनी उपासना परंपरा पुढे नेली. (समाधी: शके १८२४ भाद्रपद शुद्ध १३).",
        en: "Vishwanath Dada Patankar wrote spiritual texts, followed by Wateshwarbuwa Divekar who led worship traditions until Shake 1824.",
      },
    },
    {
      year: "सन १९१२ ते १९१४",
      title: { mr: "लाकडी मंडप व संगमरवरी फरशी", en: "Mandap & Marble Flooring" },
      description: {
        mr: "सन १९१२ मध्ये श्रीसद्गुरु गोविंद हरी दिवेकर यांनी मंडप उभारून घेतला व १९१४ साली त्यांनी संगमरवरी फरशी बसवून घेतली.",
        en: "Govind Hari Divekar constructed the teakwood mandap in 1912 and laid marble flooring in 1914.",
      },
    },
    {
      year: "कौटुंबिक जतन",
      title: { mr: "दिवेकर घराण्याचा वारसा", en: "Divekar Family Heritage" },
      description: {
        mr: "कोणत्याही पब्लिक ट्रस्टशिवाय, दिवेकर कुटुंबाने पिढ्यानपिढ्या स्वतःच्या श्रमाने व जबाबदारीने मंदिराचे जतन व दैनंदिन व्यवस्था सांभाळली आहे.",
        en: "Maintained generation after generation as a private family heritage by the Divekar family with utter simplicity and devotion.",
      },
    },
  ],
  sthapanaUtsav: {
    title: { mr: "वार्षिक मंदिर स्थापना उत्सव", en: "Annual Mandir Sthapana Utsav" },
    subtitle: { mr: "फाल्गुन शुद्ध दशमी व ४ दिवसांचा पारंपरिक उत्सव", en: "Phalgun Shuddha Dashami & 4-Day Traditional Festival" },
    period: { mr: "फेब्रुवारी - मार्च (फाल्गुन काळ)", en: "February - March (Phalgun Period)" },
    duration: { mr: "४ दिवसांचा उत्सव", en: "4-Day Observance" },
    events: [
      {
        title: { mr: "कीर्तन व भजन", en: "Kirtan & Bhajan" },
        time: { mr: "संध्याकाळी ७:३० ते रात्री ९:३०", en: "7:30 PM to 9:30 PM" },
        desc: {
          mr: "उत्सवाच्या ४ दिवसांत दररोज रात्री ७:३० ते ९:३० या वेळेत कीर्तन आणि पारंपरिक भजनांचे आयोजन केले जाते.",
          en: "Every evening during the 4-day festival from 7:30 PM to 9:30 PM, traditional Kirtan and Bhajan sessions take place.",
        },
      },
      {
        title: { mr: "रथोत्सव", en: "Rathotsav Procession" },
        desc: {
          mr: "स्थापना उत्सवानिमित्त मंदिरात पारंपरिक रथोत्सव पार पडतो.",
          en: "Traditional Rathotsav chariot procession is held as part of the establishment anniversary.",
        },
      },
      {
        title: { mr: "नित्य पूजा व नैवेद्य", en: "Daily Rituals & Offerings" },
        desc: {
          mr: "सकाळी व संध्याकाळी काकड आरती, भजन आणि साधे महाप्रसाद वाटप केले जाते.",
          en: "Morning Kakad Aarti, evening prayers, and traditional Mahaprasad distribution.",
        },
      },
    ],
  },
};
