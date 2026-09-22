export interface HistorySection {
  title: { mr: string; en: string };
  paragraphs: Array<{ mr: string; en: string }>;
  timeline: Array<{
    period: { mr: string; en: string };
    event: { mr: string; en: string };
    description: { mr: string; en: string };
  }>;
}

export const templeHistory: HistorySection = {
  title: {
    mr: "श्री वासुदेव मंदिर वाटेगाव - इतिहास व वैशिष्ट्ये",
    en: "Shree Vasudev Mandir Wategaon - History & Architectural Legacy",
  },
  paragraphs: [
    {
      mr: "सांगली जिल्ह्यातील वाळवा तालुक्यात वसलेले **वाटेगाव** हे ऐतिहासिक व सांस्कृतिकदृष्ट्या समृद्ध गाव आहे. या गावामध्ये भोगावती नदीच्या पवित्र तीरावर **श्री वासुदेव मंदिर** सुमारे २०० वर्षांपूर्वी उभारण्यात आले आहे.",
      en: "Nestled in Walwa taluka of Sangli district, **Wategaon** is a village rich in historical and cultural heritage. On the holy banks of Bhogawati river stands **Shree Vasudev Mandir**, constructed around 200 years ago.",
    },
    {
      mr: "हे मंदिर संपूर्ण भारतातील **एकमेव वासुदेव मंदिर** असल्याचे मानले जाते. हे देवस्थान उत्तराभिमुख (North-facing) असून, गावातील 'दिवेकर' घराण्याचे हे कुलदैवत आहे. दोन शतकांपासून दिवेकर कुटुंबाकडून या मंदिराचे नेटके जतन व धार्मिक परंपरा पार पाडली जात आहे.",
      en: "This shrine is universally cherished as **India's unique Vasudev Temple**. Facing north (Uttarabhimukh), it serves as the Kuldaivat of the local 'Divekar' family, who have diligently preserved its sacred customs for two centuries.",
    },
    {
      mr: "मंदिराचे स्थापत्य अत्यंत प्रेक्षणीय आहे. मंदिराचा सभाखंड पूर्णपणे **सागवानी लाकडाचा (Teakwood)** बनलेला आहे. मंदिराची एकूण लांबी ६० फूट, रुंदी ३० फूट आणि शिखराची उंची तब्बल ५० फूट आहे. गाभाऱ्यामध्ये शांत, मंदस्मित आणि प्रसन्न भावमुद्रेत असणारी वासुदेवाची (श्रीकृष्णाची) **पंचधातूची मूर्ती** प्रस्थापित आहे.",
      en: "The architecture is breathtaking. The main mandap is crafted entirely from fine **Teakwood**. The temple measures 60 feet in length, 30 feet in width, with a imposing 50-foot shikhara. In the sanctum sanctorum, a pristine **Panchadhatu idol** of Vasudev Shri Krishna radiates divine serenity.",
    },
  ],
  timeline: [
    {
      period: { mr: "१८ व्या शतकाचा उत्तरार्ध (~२०० वर्षांपूर्वी)", en: "Late 18th Century (~200 Years Ago)" },
      event: { mr: "मंदिराची स्थापना", en: "Temple Foundation" },
      description: {
        mr: "भोगावती नदीकाठी दिवेकर पूर्वजांकडून उत्तराभिमुख वासुदेव मंदिराची स्थापना व सागवानी मंडपाची उभारणी.",
        en: "Establishment of the north-facing temple and teakwood hall by Divekar ancestors along Bhogawati river.",
      },
    },
    {
      period: { mr: "एकनाथी भागवत परंपरा", en: "Eknathi Bhagwat Tradition" },
      event: { mr: "संप्रदाय संकल्पना", en: "Sampradaya Heritage" },
      description: {
        mr: "संत एकनाथ महाराजांच्या भागवतातील वर्णनानुसार पंचधातू मूर्तीची स्थापना व नित्य विधीची सुरुवात.",
        en: "Installation of Panchadhatu idol following Sant Eknath's scriptures and daily devotional routines.",
      },
    },
    {
      period: { mr: "वार्षिक दीपोत्सव परंपरा", en: "Annual Deepotsav Tradition" },
      event: { mr: "कोजागिरी ते त्रिपुरारी उत्सव", en: "Month-long Light Festival" },
      description: {
        mr: "कोजागिरी पौर्णिमेपासून सुरु होऊन त्रिपुरारी पौर्णिमेपर्यंत महिनाभर चालणाऱ्या भव्य दीपोत्सवाची सुरुवात.",
        en: "Initiation of the month-long festival of thousands of oil lamps from Kojagiri to Tripurari Purnima.",
      },
    },
    {
      period: { mr: "वर्तमान काळ", en: "Present Day" },
      event: { mr: "डिजिटल क्यूआर व जागतिक ओळख", en: "Digital QR & Global Reach" },
      description: {
        mr: "Vercel वर डिप्लॉय केलेल्या संकेतस्थळाद्वारे व मंदिरात लावलेल्या क्यूआर कोडद्वारे भाविकांना माहिती उपलब्ध.",
        en: "Global web presence on Vercel with temple QR code for visiting devotees and digital pilgrims.",
      },
    },
  ],
};

