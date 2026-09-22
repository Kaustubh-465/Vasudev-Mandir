export interface TempleData {
  title: { mr: string; en: string };
  subtitle: { mr: string; en: string };
  tagline: { mr: string; en: string };
  location: {
    village: { mr: string; en: string };
    taluka: { mr: string; en: string };
    district: { mr: string; en: string };
    state: { mr: string; en: string };
    fullAddress: { mr: string; en: string };
    river: { mr: string; en: string };
    googleMapsUrl: string;
    coordinates: { lat: number; lng: number };
  };
  keyHighlights: Array<{
    title: { mr: string; en: string };
    desc: { mr: string; en: string };
    icon: string;
  }>;
  quickStats: Array<{
    label: { mr: string; en: string };
    value: { mr: string; en: string };
  }>;
}

export const templeData: TempleData = {
  title: {
    mr: "श्री वासुदेव मंदिर, वाटेगाव",
    en: "Shree Vasudev Mandir, Wategaon",
  },
  subtitle: {
    mr: "भारतातील एकमेव वासुदेव मंदिर | एकनाथी भागवत संप्रदाय स्थान",
    en: "India's Unique Vasudev Temple | Eknathi Bhagwat Sampradaya Heritage",
  },
  tagline: {
    mr: "॥ एका जनार्दनी ॥ - भोगावती नदीच्या पवित्र तीरावर स्थित सुमारे २०० वर्षांचे प्राचीन व ऐतिहासिक देवस्थान",
    en: "A 200-year-old sacred heritage site situated on the holy banks of Bhogawati river",
  },
  location: {
    village: { mr: "वाटेगाव", en: "Wategaon" },
    taluka: { mr: "वाळवा", en: "Walwa" },
    district: { mr: "सांगली", en: "Sangli" },
    state: { mr: "महाराष्ट्र", en: "Maharashtra" },
    fullAddress: {
      mr: "भोगावती नदीकाठ, वाटेगाव, तालुका वाळवा, जिल्हा सांगली - ४१५४१०, महाराष्ट्र",
      en: "Bhogawati River Bank, Wategaon, Taluka Walwa, District Sangli - 415410, Maharashtra",
    },
    river: { mr: "भोगावती नदी", en: "Bhogawati River" },
    googleMapsUrl: "https://maps.google.com/?q=Wategaon+Sangli+Maharashtra",
    coordinates: { lat: 17.0784, lng: 74.2718 },
  },
  quickStats: [
    { label: { mr: "स्थापना", en: "Established" }, value: { mr: "सुमारे २०० वर्षांपूर्वी", en: "~200 Years Ago" } },
    { label: { mr: "संप्रदाय", en: "Sampradaya" }, value: { mr: "एकनाथी भागवत संप्रदाय", en: "Eknathi Bhagwat" } },
    { label: { mr: "मूर्ती", en: "Idol" }, value: { mr: "पंचधातू श्रीकृष्ण मूर्ती", en: "Panchadhatu Krishna Idol" } },
    { label: { mr: "मुख्य उत्सव", en: "Main Festival" }, value: { mr: "महिन्याचा भव्य दीपोत्सव", en: "Month-long Deepotsav" } },
  ],
  keyHighlights: [
    {
      title: { mr: "भारतातील एकमेव वासुदेव मंदिर", en: "India's Unique Vasudev Temple" },
      desc: {
        mr: "संपूर्ण भारतात वासुदेवाच्या नावाने ओळखले जाणारे व एकनाथी भागवत परंपरेनुसार पूजले जाणारे हे एकमेव व दुर्मिळ मंदिर आहे.",
        en: "Recognized across India as the unique Vasudev Temple dedicated specifically under Eknathi Bhagwat traditions.",
      },
      icon: "Landmark",
    },
    {
      title: { mr: "एकनाथी भागवत संप्रदाय", en: "Eknathi Bhagwat Tradition" },
      desc: {
        mr: "संत एकनाथ महाराजांच्या ग्रंथ परंपरेनुसार पूजा-अर्चा चालते. गाभाऱ्यातील मूर्तीची ठेवण साक्षात श्रीकृष्ण रूपात आहे.",
        en: "Daily rituals strictly follow Sant Eknath Maharaj's Eknathi Bhagwat tradition, representing Bhagwan Shri Krishna.",
      },
      icon: "Scroll",
    },
    {
      title: { mr: "भव्य सागवानी स्थापत्य", en: "Teakwood Architecture" },
      desc: {
        mr: "६० फूट लांब व ३० फूट रुंद सागवानी लाकडी भव्य मंडप आणि ५० फूट उंच नक्षीदार भव्य शिखर.",
        en: "Features a majestic 60ft x 30ft pure teakwood mandap and a grand 50ft high decorated shikhara.",
      },
      icon: "Crown",
    },
    {
      title: { mr: "त्रिपुरारी दीपोत्सव", en: "Month-long Deepotsav" },
      desc: {
        mr: "कोजागिरी पौर्णिमा ते त्रिपुरारी पौर्णिमेपर्यंत महिनाभर हजारो दिव्यांच्या लखलखाटात दीपोत्सव साजरा होतो.",
        en: "Celebrates a month-long festival of lights with thousands of traditional diyas from Kojagiri to Tripurari Purnima.",
      },
      icon: "Flame",
    },
  ],
};

