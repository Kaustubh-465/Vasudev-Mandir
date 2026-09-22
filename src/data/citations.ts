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
    id: "eknathi-bhagwat",
    title: {
      mr: "एकनाथी भागवत संप्रदाय व श्रीकृष्ण स्वरूप",
      en: "Eknathi Bhagwat Sampradaya & Lord Krishna Form",
    },
    subtitle: {
      mr: "वाटेगाव येथील मंदिरातील वासुदेवाची संकल्पना व मूर्तीची ठेवण",
      en: "Concept of Vasudev & Idol posture according to Eknathi Bhagwat",
    },
    content: [
      {
        mr: "वाटेगाव येथील वासुदेव मंदिर हे प्रामुख्याने 'एकनाथी भागवत संप्रदायानुसार' (Eknathi Bhagwat Sampradaya) चालणारे ऐतिहासिक मंदिर आहे.",
        en: "The Vasudev Mandir at Wategaon strictly operates according to the sacred traditions of the Eknathi Bhagwat Sampradaya.",
      },
      {
        mr: "भागवत परंपरेत 'वासुदेव' म्हणजे वसुदेव व देवकीचा पुत्र साक्षात भगवान श्रीकृष्ण! 'वासुदेव सर्वमिति' (सर्व जग वासुदेवमय आहे) हा श्रीमद्भगवद्गीतेतील व एकनाथी भागवतातील मुख्य संदेश या मंदिरात पूजला जातो.",
        en: "In Bhagwat tradition, 'Vasudev' signifies Lord Krishna Himself, the divine son of Vasudeva & Devaki. The temple embodies the core philosophy 'Vasudev Sarvamiti' (All existence is permeated by Vasudev).",
      },
      {
        mr: "मंदिराच्या गाभाऱ्यातील पंचधातूची मूर्ती ही संत एकनाथ महाराजांनी 'एकनाथी भागवत' ग्रंथात वर्णन केलेल्या बालकृष्ण व वासुदेव श्रीकृष्णाच्या शांत, मंदस्मित आणि प्रसन्न भावमुद्रेनुसार (मूर्तीची ठेवण) घडवण्यात आलेली आहे.",
        en: "The Panchadhatu (five-metal) idol in the sanctum sanctorum is crafted exactly according to the serene, smiling divine posture (Murti Thevan) described in Sant Eknath Maharaj's Eknathi Bhagwat.",
      },
    ],
    citationsList: [
      {
        source: { mr: "एकनाथी भागवत - अध्याय १ ते ३१", en: "Eknathi Bhagwat - Chapters 1 to 31" },
        detail: {
          mr: "संत एकनाथ महाराजांनी भागवत ग्रंथात श्रीकृष्णाच्या वासुदेव रूपाचे आणि नामस्मरणाचे अलौकिक महत्त्व वर्णन केले आहे.",
          en: "Sant Eknath Maharaj details the cosmic significance of Krishna's Vasudev form and Harinam remembrance.",
        },
      },
      {
        source: { mr: "श्रीमद्भगवद्गीता (अध्याय ७, श्लोक १९)", en: "Shrimad Bhagavad Gita (Ch 7, Verse 19)" },
        detail: {
          mr: "'वासुदेवः सर्वमिति स महात्मा सुदुर्लभः' - सर्व काही वासुदेवमय पाहणारा ज्ञानी श्रेष्ठ आहे.",
          en: "'Vasudevah Sarvamiti Sa Mahatma Sudurlabhah' - Rare is that noble soul who sees Vasudev in everything.",
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
      mr: "प्रभात समयी हरिनाम सांगणारा वासुदेव व संत एकनाथांचे रूपक",
      en: "The morning mendicant spreading Harinam & Sant Eknath's allegorical compositions",
    },
    content: [
      {
        mr: "महाराष्ट्राच्या वारकरी व लोकसंस्कृतीत 'वासुदेव' हे अत्यंत आदरणीय व पवित्र स्थान आहे. मस्तकावर मोरपिसांची उंच टोपी, हातात चिपळ्या व टाळ, पायात घुंगुर, गळ्यात तुळशीमाळ आणि 'दान पावलं!' असा गजर करत पहाटेच्या वेळी घरोघरी हरिनाम पोहोचवणारा वासुदेव ही महाराष्ट्राची आध्यात्मिक ओळख आहे.",
        en: "In Maharashtra's Varkari folk tradition, 'Vasudev' holds a deeply reverent place. Adorned with a tall peacock feather cap, brass cymbals, wooden clappers, and ankle bells, the Vasudev visits households at dawn chanting Harinam.",
      },
      {
        mr: "संत एकनाथ महाराज आणि संत तुकाराम महाराज यांनी आपल्या अभंगांमध्ये वासुदेवाचे रूपक वापरून अज्ञान दूर करण्याचा आणि नामाचा संदेश दिला आहे. 'वासुदेव आला, वासुदेव आला, दारी वासुदेव आला!' या अभंगातून भगवंताच्या भक्तीचे दान मागितले जाते.",
        en: "Saints Eknath Maharaj and Tukaram Maharaj composed immortal allegorical Abhangs using the persona of 'Vasudev' to awaken spiritual consciousness and bestow the alms of devotion.",
      },
    ],
    citationsList: [
      {
        source: { mr: "संत एकनाथ महाराज गाथा - वासुदेव अभंग", en: "Sant Eknath Maharaj Gatha - Vasudev Abhangs" },
        detail: {
          mr: "'वासुदेव सांगतो तुम्हां, राम कृष्ण म्हणा भावाने...' - संत एकनाथांचे प्रसिद्ध रूपक अभंग.",
          en: "'Vasudev tells you, chant Ram Krishna with devotion...' - Eknath Maharaj's famous allegorical songs.",
        },
      },
      {
        source: { mr: "महाराष्ट्राचा लोकदैवत इतिहास", en: "Maharashtra Folk Cultural History" },
        detail: {
          mr: "वासुदेव हा केवळ एक लोककलाकार नसून भागवत धर्माचा प्रचारक व श्रीकृष्ण भक्तीचा संदेशवाहक मानला जातो.",
          en: "Vasudev is recognized not merely as a folk artist, but as a harbinger of Bhagwat Dharma and Krishna devotion.",
        },
      },
    ],
  },
  {
    id: "divekar-heritage",
    title: {
      mr: "वाटेगावचे दिवेकर कुलदैवत व मंदिर परंपरा",
      en: "Wategaon's Divekar Kuldaivat Heritage",
    },
    subtitle: {
      mr: "दिवेकर घराण्याची २०० वर्षांची श्रद्धा व जतन",
      en: "200 Years of Devotion & Preservation by the Divekar Family",
    },
    content: [
      {
        mr: "वाटेगाव येथील वासुदेव मंदिर हे गावातील प्रसिद्ध 'दिवेकर' कुटुंबाचे कुलदैवत आहे. सुमारे २०० वर्षांपूर्वी दिवेकर घराण्यातील पूर्वजांनी भोगावती नदीकाठी या मंदिराची स्थापना केली.",
        en: "The Vasudev Mandir at Wategaon serves as the revered Kuldaivat (family deity) of the Divekar family. Established by the forefathers of the Divekar family around 200 years ago on the banks of Bhogawati river.",
      },
      {
        mr: "जरी हे मंदिर दिवेकर कुटुंबाचे खाजगी देवस्थान असले, तरी संपूर्ण वाटेगाव व परिसरातील हजारो भाविकांसाठी हे एक अत्यंत पवित्र व जागृत श्रद्धास्थान आहे. दरवर्षी कोजागिरी ते त्रिपुरारी पौर्णिमेदरम्यान येथे भव्य दीपोत्सव साजरा होतो.",
        en: "While preserved as a private devasthan of the Divekar family, it is embraced by all of Wategaon and surrounding regions as a deeply sacred, living center of faith open to all devotees.",
      },
    ],
    citationsList: [
      {
        source: { mr: "वाटेगाव स्थानिक इतिहास व परंपरा", en: "Wategaon Local Heritage Records" },
        detail: {
          mr: "दिवेकर घराण्याकडून दोन शतकांपासून अखंड पूजा-अर्चा, काकड आरती आणि दीपोत्सव परंपरेचे जतन केले जात आहे.",
          en: "The Divekar family has maintained continuous daily worship, Kakad Aarti, and Deepotsav traditions for two centuries.",
        },
      },
    ],
  },
];

