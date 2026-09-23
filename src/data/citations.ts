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
      mr: "वाटेगाव येथील श्री वासुदेव मंदिर",
      en: "Shree Vasudev Mandir at Wategaon",
    },
    subtitle: {
      mr: "दिवेकर घराण्याचे खाजगी मंदिर",
      en: "Divekar Family Private Temple",
    },
    content: [
      {
        mr: "वाटेगाव (जि. सांगली) येथे भोगावती नदीच्या तीरावर हे मंदिर वसलेले आहे. हे दिवेकर कुटुंबाचे खाजगी मंदिर असून, कोणत्याही पब्लिक ट्रस्टशिवाय सुमारे दोनशे वर्षांपासून दिवेकर घराण्याने स्वतःच्या जबाबदारीवर हे मंदिर व पूजा-अर्चा जतन केली आहे.",
        en: "Located on the banks of Bhogawati river in Wategaon (Sangli), this is a private temple maintained by the Divekar family for around two centuries without any public trust.",
      },
    ],
  },
  {
    id: "vasudev-significance",
    title: {
      mr: "श्री वासुदेवांचे स्वरूप व भागवत संदर्भ",
      en: "Form & Significance of Lord Vasudev",
    },
    subtitle: {
      mr: "श्रीमद्भागवत एकादश स्कंध १४ वा अध्याय संदर्भ",
      en: "Reference from Srimad Bhagavat 11th Canto Chapter 14",
    },
    content: [
      {
        mr: "मंदिरातील वासुदेवाची मूर्ती ही श्रीमद्भागवत ग्रंथाच्या एकादश स्कंधातील १४ व्या अध्यायात ध्यानासाठी वर्णन केलेल्या रूपावर आधारित आहे. हे तेच चतुर्भुज प्रसन्न स्वरूप आहे ज्या रूपाचे दर्शन भक्त ध्रुवाला झाले होते.",
        en: "The idol of Lord Vasudev is sculpted based on the meditative form described in Srimad Bhagavat 11th Canto Chapter 14, which is the same 4-armed form that granted darshan to Bhakta Dhruva.",
      },
      {
        mr: "निर्गुण आणि अगाध असलेल्या ईश्वराच्या विश्वरूपाची प्रचिती साध्या डोळ्यांनी घेता यावी, यासाठी सगुण रूपात या पंचधातू मूर्तीची स्थापना करण्यात आली आहे. चार हातांत शंख, चक्र, गदा आणि पद्म धारण केलेली, पितळी पत्र्यांनी मढवलेल्या सिंहासनावर प्रस्थापित असलेली ही उभी मूर्ती अत्यंत प्रसन्न हास्यमुद्रेत आहे.",
        en: "To perceive the infinite unmanifest divine consciousness through human sight, the idol was sculpted in 4-armed standing posture with Shankha, Chakra, Gada, Padma, reflecting a serene smile.",
      },
    ],
    bullets: [
      {
        heading: {
          mr: "श्रीमद्भागवत एकादश स्कंध संदर्भ",
          en: "Srimad Bhagavat 11th Canto Reference",
        },
        detail: {
          mr: "भागवतातील ध्यानासाठी योग्य अशा चतुर्भुज प्रसन्न रूपाच्या वर्णनाशी हुबेहुब जुळणारी मूर्ती, जी साधकांना शांतता व चित्तशुद्धीचा मार्ग दाखवते.",
          en: "The idol matches the meditative 4-armed form described in Srimad Bhagavat, guiding seekers toward inner peace and clarity.",
        },
      },
      {
        heading: {
          mr: "प्रपंच आणि परमार्थाचा मेळ",
          en: "Balancing Duty & Practice",
        },
        detail: {
          mr: "ग्रंथातील नोंदीनुसार, श्रीसद्गुरु गोविंद हरी दिवेकर यांनी नोकरी आणि कौटुंबिक प्रपंच सांभाळत, कोणतीही कसर न सोडता मंदिराची सेवा आणि १९१२ मधील लाकडी मंडपाचे काम पूर्ण केले. प्रपंच व कर्तव्य बजावत साधना करणे हेच या परंपरेचे गमक आहे.",
          en: "Govind Hari Divekar managed household duties and employment while quietly maintaining temple rituals and executing the 1912 teakwood mandap construction.",
        },
      },
    ],
  },
];
