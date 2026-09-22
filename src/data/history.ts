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
    mr: "श्री वासुदेव मंदिर वाटेगाव - ऐतिहासिक कालखंड व जतन",
    en: "Shree Vasudev Mandir Wategaon - Historical Timeline & Heritage",
  },
  paragraphs: [
    {
      mr: "सांगली जिल्ह्यातील वाळवा तालुक्यात असलेल्या वाटेगाव येथे भोगावती नदीच्या तीरावर **श्री वासुदेव मंदिर** उभारण्यात आले आहे.",
      en: "On the banks of Bhogawati river in Wategaon, Walwa taluka of Sangli district, stands **Shree Vasudev Mandir**.",
    },
    {
      mr: "दिवेकर घराण्याचे खाजगी देवस्थान ट्रस्ट असलेल्या या मंदिराची स्थापना १८१४ मध्ये **वासुदेव स्वामी दिवेकर** यांनी केली. पिढ्यानपिढ्या दिवेकर कुटुंबातील वासुदेव भक्तांनी या मंदिराची पूजा-अर्चा व जतनाची परंपरा पुढे चालू ठेवली आहे.",
      en: "Established in 1814 by **Vasudev Swami Divekar**, this private devasthan trust has been dutifully preserved across generations by Divekar family devotees.",
    },
  ],
  timeline: [
    {
      year: "१८१४ (1814)",
      title: { mr: "मंदिर स्थापना", en: "Temple Foundation" },
      description: {
        mr: "वासुदेव स्वामी दिवेकर यांच्या हस्ते भोगावती नदीजवळ श्री वासुदेव मंदिराची स्थापना झाली.",
        en: "Shree Vasudev Mandir was established near Bhogawati river by Vasudev Swami Divekar.",
      },
    },
    {
      year: "पिढीजात वारसा",
      title: { mr: "वासुदेव भक्तांची परंपरा", en: "Generational Lineage" },
      description: {
        mr: "स्थापनेनंतर हे मंदिर पिढ्यानपिढ्या दिवेकर घराण्यातील पुढील वासुदेव भक्तांकडे सोपवण्यात आले.",
        en: "Handed down generation by generation to further devotees of Lord Vasudev in the Divekar family.",
      },
    },
    {
      year: "१९ वे - २० वे शतक",
      title: { mr: "गोविंद हरी दिवेकर काळ", en: "Era of Govind Hari Divekar" },
      description: {
        mr: "१९ व्या शतकाच्या अखेरीस व २० व्या शतकाच्या सुरुवातीच्या काळात गोविंद हरी दिवेकर यांनी मंदिराची देखरेख व व्यवस्थापन सांभाळले.",
        en: "Around the late 19th century and early 20th century, the temple was managed and overseen by Govind Hari Divekar.",
      },
    },
    {
      year: "१९१४ (1914)",
      title: { mr: "भव्य जीर्णोद्धार", en: "Temple Jirnodhar" },
      description: {
        mr: "१९१४ मध्ये सांगलीच्या श्रीमंत पटवर्धन संस्थानाच्या सहकार्याने मंदिराचा भव्य जीर्णोद्धार करण्यात आला.",
        en: "In 1914, a major Jirnodhar (renovation) of the temple was completed with the support of the Patwardhans of Sangli.",
      },
    },
    {
      year: "२०१४ (2014)",
      title: { mr: "द्विशताब्दी वर्ष (२०० वर्षे)", en: "200 Years Completion" },
      description: {
        mr: "२०१४ मध्ये श्री वासुदेव मंदिराच्या स्थापनेस तब्बल २०० वर्षे पूर्ण झाली.",
        en: "In 2014, Shree Vasudev Mandir completed 200 glorious years of foundation.",
      },
    },
  ],
  sthapanaUtsav: {
    title: { mr: "वार्षिक मंदिर स्थापना उत्सव सोहळा", en: "Annual Mandir Sthapana Utsav" },
    subtitle: { mr: "फेब्रुवारी - मार्च दरम्यान ४ दिवसांचा भव्य उत्सव", en: "4-Day Festival held in February - March" },
    period: { mr: "फेब्रुवारी - मार्च काळ", en: "February - March Period" },
    duration: { mr: "तब्बल ४ दिवसांचा सोहळा", en: "4 Days Celebration" },
    events: [
      {
        title: { mr: "रात्रीचे भव्य कीर्तन", en: "Night Kirtan Programs" },
        time: { mr: "संध्याकाळी ७:३० ते रात्री ९:३०", en: "7:30 PM to 9:30 PM" },
        desc: {
          mr: "उत्सवाच्या काळात दररोज रात्री ७:३० ते ९:३० या वेळेत प्रसिद्ध कीर्तनकारांचे भक्तिमय कीर्तन आयोजित केले जाते.",
          en: "Every night during the festival from 7:30 PM to 9:30 PM, soul-stirring Kirtan performances are organized.",
        },
      },
      {
        title: { mr: "भव्य रथोत्सव", en: "Rathotsav (Chariot Procession)" },
        desc: {
          mr: "श्री वासुदेव देवाचा भव्य रथोत्सव व मिरवणूक काढली जाते.",
          en: "Grand Rathotsav chariot procession of Shree Vasudev is conducted.",
        },
      },
      {
        title: { mr: "भजन व नामस्मरण", en: "Bhajans & Devotional Chanting" },
        desc: {
          mr: "दिवसभरात विविध भजनी मंडळांचे भजन, पूजा व धार्मिक कार्यक्रम पार पडतात.",
          en: "Devotional Bhajans, pooja rituals, and spiritual discourses are held throughout the days.",
        },
      },
    ],
  },
};
