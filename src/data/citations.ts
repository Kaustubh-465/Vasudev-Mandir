export interface CitationSection {
  id: string;
  title: { mr: string; en: string };
  subtitle: { mr: string; en: string };
  content: Array<{ mr: string; en: string }>;
  bullets?: Array<{
    heading: { mr: string; en: string };
    detail: { mr: string; en: string };
  }>;
}

export const vasudevCitations: CitationSection[] = [
  {
    id: "wategaon-shrine",
    title: {
      mr: "श्री वासुदेव मंदिराबद्दल",
      en: "About Shri Vasudev Mandir",
    },
    subtitle: {
      mr: "भक्तिमय स्थान वाटेगाव",
      en: "Devotional Sanctuary Wategaon",
    },
    content: [
      {
        mr: "महाराष्ट्राच्या समृद्ध सांस्कृतिक आणि आध्यात्मिक वारशात वाटेगाव परिसराला एक वेगळे स्थान आहे. येथील श्री वासुदेव मंदिर हे केवळ एक देवस्थान नसून, परिसरातील सर्व भाविकांचे श्रद्धास्थान आणि आत्मिक शांततेचे केंद्र आहे. पिढ्यानपिढ्या या भक्तिमय भूमीत भक्ती, परमार्थ आणि सामाजिक एकात्मतेचा झरा वाहत आला आहे.",
        en: "Wategaon holds a unique position in Maharashtra's rich cultural and spiritual heritage. Shree Vasudev Mandir is a sanctuary of faith and spiritual peace for all devotees.",
      },
    ],
  },
  {
    id: "vasudev-significance",
    title: {
      mr: "भगवान श्री वासुदेवांचे स्वरूप व आध्यात्मिक महत्त्व",
      en: "Divine Form & Spiritual Significance of Shree Vasudev",
    },
    subtitle: {
      mr: "सर्वव्यापी चैतन्य व लोकसंस्कृतीतील स्थान",
      en: "All-pervading Consciousness & Cultural Traditions",
    },
    content: [
      {
        mr: "सनातन संस्कृती आणि भागवत संप्रदायात भगवान वासुदेव (श्रीकृष्ण/विष्णू) हे संपूर्ण सृष्टीचे पालनपोषण करणारे आणि अष्टपैलू शक्तीचे प्रतीक मानले जातात.",
        en: "In Sanatan tradition, Lord Vasudev (Shri Krishna/Vishnu) is revered as the preserver of the universe and symbol of cosmic energy.",
      },
    ],
    bullets: [
      {
        heading: {
          mr: "सर्वव्यापी चैतन्य",
          en: "All-pervading Cosmic Consciousness",
        },
        detail: {
          mr: "'वासुदेव' या शब्दाचा अर्थ आहे — \"ज्यांच्यामध्ये संपूर्ण विश्व सामावले आहे आणि जे सर्व घटकांत अंतर्भूत आहेत.\" हे केवळ एका आराध्यदैवताचे नाव नसून समस्त चराचरात वसलेल्या ईश्वरी चैतन्याचे प्रतीक आहे.",
          en: "'Vasudev' signifies the Supreme divine consciousness in which the entire universe abides and which dwells within all creation.",
        },
      },
      {
        heading: {
          mr: "भक्ती आणि समर्पणाची परंपरा",
          en: "Tradition of Devotion & Surrender",
        },
        detail: {
          mr: "महाराष्ट्राच्या लोकसंस्कृतीत 'वासुदेव' ही एक अत्यंत पूजनीय परंपरा आहे. सकाळी पहाटे दारावर येऊन टाळ-मृदंगाच्या गजरात, मोरपिसाची टोपी घालून भगवंताचे नामस्मरण करणारे वासुदेव हे आपल्या संस्कृतीचे जिवंत प्रतीक आहेत. याच लोकपरंपरेचा आणि भक्तीचा वारसा या मंदिराशी जोडलेला आहे.",
          en: "In Maharashtrian folk heritage, Vasudev represents a revered tradition of morning Harinam chanting adorned with peacock plume caps.",
        },
      },
    ],
  },
  {
    id: "history-and-events",
    title: {
      mr: "मंदिराचा इतिहास व धार्मिक कार्य",
      en: "Temple Heritage & Religious Gatherings",
    },
    subtitle: {
      mr: "दिवेकर घराण्याचे खाजगी देवस्थान ट्रस्ट व ग्रामस्थांची श्रद्धा",
      en: "Divekar Family Private Devasthan Trust & Local Faith",
    },
    content: [
      {
        mr: "हे मंदिर दिवेकर घराण्याचे खाजगी देवस्थान (Private Devasthan Trust) असून, दिवेकर कुटुंबाकडून या मंदिराची पूजा-अर्चा, जतन आणि देखभाल पार पाडली जाते.",
        en: "This shrine is maintained and preserved by the Divekar family as a private devasthan trust.",
      },
      {
        mr: "जरी हे दिवेकर कुटुंबाचे खाजगी देवस्थान असले, तरी वाटेगाव व परिसरातील सर्व ग्रामस्थांसाठी हे अत्यंत श्रद्धेचे व आत्मिक शांततेचे स्थान आहे. गावात कोणताही शुभप्रसंग असो किंवा संकटाचे निवारण असो, येथील वासुदेवाच्या चरणी नतमस्तक होऊनच प्रत्येक कार्याची सुरुवात होते.",
        en: "While preserved by the Divekar family, it is revered by all of Wategaon where every auspicious occasion begins with seeking Lord Vasudev's blessings.",
      },
      {
        mr: "या मंदिरात वर्षभर विविध धार्मिक उत्सव साजरे केले जातात. विशेषतः एकादशी, जन्मोत्सव, आणि पाडव्यासारख्या दिवशी मंदिरात विशेष पूजा, भजन, कीर्तन आणि महाप्रसादाचे आयोजन केले जाते, ज्यामध्ये संपूर्ण वाटेगाव गाव एकसंध होऊन सहभाग घेते.",
        en: "Various celebrations are organized throughout the year, especially on Ekadashi, Janmashtami, and Padwa with pooja, bhajan, and Mahaprasad.",
      },
    ],
  },
];
