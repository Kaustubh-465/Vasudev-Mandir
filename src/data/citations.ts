export interface CitationSection {
  id: string;
  title: { mr: string; en: string };
  subtitle: { mr: string; en: string };
  content: Array<{ mr: string; en: string }>;
  citationsList?: Array<{
    source: { mr: string; en: string };
    detail: { mr: string; en: string };
  }>;
}

export const vasudevCitations: CitationSection[] = [
  {
    id: "krishna-identity",
    title: {
      mr: "वासुदेव स्वरूप - साक्षात श्रीकृष्ण",
      en: "Vasudev Form - Bhagwan Shri Krishna",
    },
    subtitle: {
      mr: "वासुदेव संदर्भातील पौराणिक व अध्यात्मिक स्वरूप",
      en: "Mythological & Spiritual Identity of Lord Vasudev",
    },
    content: [
      {
        mr: "वातेगाव येथील श्री वासुदेव मंदिरातील देवता म्हणजेच साक्षात भगवान श्रीकृष्ण! वसुदेव व देवकीचा पुत्र म्हणून भगवंताला 'वासुदेव' हे नाव प्राप्त झाले.",
        en: "The deity at Shree Vasudev Mandir Wategaon is Bhagwan Shri Krishna Himself, named 'Vasudev' as the divine son of Vasudeva & Devaki.",
      },
      {
        mr: "श्रीमद्भगवद्गीतेमध्ये भगवंतांनी 'वासुदेवः सर्वमिति' (सर्व विश्वात वासुदेव भरून राहिला आहे) हा विचार मांडला आहे. गाभाऱ्यातील पंचधातूची मूर्ती ही श्रीकृष्णाच्या शांत, मंदस्मित आणि प्रसन्न भावमुद्रेनुसार (मूर्तीची ठेवण) घडवण्यात आली आहे.",
        en: "In the Shrimad Bhagavad Gita, the Supreme Lord states 'Vasudevah Sarvamiti'. The Panchadhatu idol's posture reflects Krishna's serene divine smile.",
      },
    ],
    citationsList: [
      {
        source: { mr: "श्रीमद्भगवद्गीता (अध्याय ७, श्लोक १९)", en: "Shrimad Bhagavad Gita (Ch 7, Verse 19)" },
        detail: {
          mr: "'वासुदेवः सर्वमिति स महात्मा सुदुर्लभः' - सर्व भूतमात्रांमध्ये वासुदेवास पाहणारा ज्ञानी श्रेष्ठ मानला जातो.",
          en: "'Vasudevah Sarvamiti Sa Mahatma Sudurlabhah' - The wise who see Vasudev in all existence are truly noble.",
        },
      },
      {
        source: { mr: "वासुदेव महामंत्र", en: "Vasudev Mahamantra" },
        detail: {
          mr: "'ॐ नमो भगवते वासुदेवाय' - भगवंताच्या वासुदेव रूपाचा नित्य महामंत्र.",
          en: "'Om Namo Bhagavate Vasudevaya' - The sacred eternal Mahamantra of Lord Krishna.",
        },
      },
    ],
  },
  {
    id: "vasudev-tradition",
    title: {
      mr: "महाराष्ट्रातील वासुदेव परंपरा व संत साहित्य",
      en: "Maharashtrian Vasudev Tradition & Saint Literature",
    },
    subtitle: {
      mr: "प्रभात समयी हरिनाम सांगणारा वासुदेव व संत अभंग",
      en: "The morning mendicant spreading Harinam & Saint allegorical Abhangs",
    },
    content: [
      {
        mr: "महाराष्ट्राच्या वारकरी व लोकसंस्कृतीत 'वासुदेव' हे अत्यंत आदरणीय व पवित्र स्थान आहे. मस्तकावर मोरपिसांची उंच टोपी, हातात चिपळ्या व टाळ, पायात घुंगुर, गळ्यात तुळशीमाळ आणि 'दान पावलं!' असा गजर करत पहाटेच्या वेळी घरोघरी हरिनाम पोहोचवणारा वासुदेव ही महाराष्ट्राची आध्यात्मिक परंपरा आहे.",
        en: "In Maharashtra's Varkari tradition, Vasudev holds a deeply sacred place. Wearing a tall peacock feather cap and carrying cymbals, the Vasudev spreads Harinam at dawn.",
      },
      {
        mr: "संत एकनाथ महाराज आणि संत तुकाराम महाराज यांनी आपल्या अभंगांमध्ये वासुदेवाचे रूपक वापरून भक्तीचा व हरिनामाचा संदेश दिला आहे.",
        en: "Saints Eknath Maharaj and Tukaram Maharaj composed famous allegorical Abhangs imparting spiritual wisdom through Vasudev.",
      },
    ],
    citationsList: [
      {
        source: { mr: "संत एकनाथ महाराज गाथा", en: "Sant Eknath Maharaj Gatha" },
        detail: {
          mr: "'वासुदेव आला वासुदेव आला... राम कृष्ण म्हणा भावाने' - संत एकनाथांचे प्रसिद्ध रूपक अभंग.",
          en: "'Vasudev has arrived... Chant Ram Krishna with devotion' - Eknath Maharaj's allegorical compositions.",
        },
      },
    ],
  },
  {
    id: "divekar-heritage",
    title: {
      mr: "वातेगावचे दिवेकर कुलदैवत स्थान",
      en: "Wategaon's Divekar Kuldaivat Heritage",
    },
    subtitle: {
      mr: "दिवेकर घराण्याचे कुलदैवत व ऐतिहासिक स्थान",
      en: "Kuldaivat of the Divekar Family",
    },
    content: [
      {
        mr: "वातेगाव येथील वासुदेव मंदिर हे गावातील 'दिवेकर' कुटुंबाचे कुलदैवत आहे. भोगावती नदीच्या पवित्र तीरावर हे मंदिर स्थित असून दिवेकर घराण्याकडून नित्य पूजा-अर्चा पार पाडली जाते.",
        en: "The Vasudev Mandir at Wategaon serves as the revered Kuldaivat of the local Divekar family on the banks of Bhogawati river.",
      },
      {
        mr: "संपूर्ण वातेगाव व परिसरातील भाविकांसाठी हे एक अत्यंत पवित्र व शांत श्रद्धास्थान आहे. दरवर्षी कोजागिरी ते त्रिपुरारी पौर्णिमेदरम्यान येथे भव्य दीपोत्सव साजरा होतो.",
        en: "A peaceful sanctuary of faith for all of Wategaon, celebrating an annual month-long festival of lights.",
      },
    ],
  },
];
