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
    en: "Shree Vasudev Mandir Wategaon - History & Architecture",
  },
  paragraphs: [
    {
      mr: "सांगली जिल्ह्यातील वाळवा तालुक्यात वसलेले **वाटेगाव** हे ऐतिहासिक व सांस्कृतिकदृष्ट्या समृद्ध गाव आहे. या गावामध्ये भोगावती नदीच्या पवित्र तीरावर **श्री वासुदेव मंदिर** उभारण्यात आले आहे.",
      en: "Nestled in Walwa taluka of Sangli district, **Wategaon** is a village rich in historical and cultural heritage. On the holy banks of Bhogawati river stands **Shree Vasudev Mandir**.",
    },
    {
      mr: "हे मंदिर भारतातील दुर्मिळ वासुदेव मंदिरांपैकी एक मानले जाते. हे देवस्थान उत्तराभिमुख (North-facing) असून, गावातील 'दिवेकर' घराण्याचे हे कुलदैवत आहे. दिवेकर कुटुंबाकडून या मंदिराचे नेटके जतन व धार्मिक पूजा परंपरा पार पाडली जाते.",
      en: "This shrine is cherished as a rare Vasudev Temple facing north (Uttarabhimukh), serving as the Kuldaivat of the local 'Divekar' family.",
    },
    {
      mr: "मंदिराचे स्थापत्य अत्यंत प्रेक्षणीय आहे. मंदिराचा सभामंडप पूर्णपणे **सागवानी लाकडाचा (Teakwood)** बनलेला आहे. मंदिराची एकूण लांबी ६० फूट, रुंदी ३० फूट आणि शिखराची उंची ५० फूट आहे. गाभाऱ्यामध्ये शांत, मंदस्मित आणि प्रसन्न भावमुद्रेत असणारी श्री वासुदेवाची (श्रीकृष्णाची) **पंचधातूची मूर्ती** प्रस्थापित आहे.",
      en: "The main mandap is crafted entirely from fine **Teakwood**. The temple measures 60 feet in length, 30 feet in width, with a 50-foot shikhara. In the sanctum sanctorum, a pristine **Panchadhatu idol** radiates divine serenity.",
    },
  ],
  timeline: [
    {
      period: { mr: "मंदिर स्थापना", en: "Temple Foundation" },
      event: { mr: "उत्तराभिमुख मंदिर रचना", en: "North-facing Layout" },
      description: {
        mr: "भोगावती नदीकाठी दिवेकर पूर्वजांकडून उत्तराभिमुख वासुदेव मंदिराची स्थापना व सागवानी लाकडी सभामंडपाची उभारणी.",
        en: "Establishment of the north-facing temple and teakwood hall by Divekar ancestors along Bhogawati river.",
      },
    },
    {
      period: { mr: "मूर्ती प्रतिष्ठापना", en: "Idol Consecration" },
      event: { mr: "पंचधातू श्रीकृष्ण मूर्ती", en: "Panchadhatu Krishna Idol" },
      description: {
        mr: "गाभाऱ्यात शांत व प्रसन्न भावमुद्रेतील पंचधातू श्री वासुदेव (श्रीकृष्ण) मूर्तीची प्रतिष्ठापना व नित्य पूजा विधी.",
        en: "Consecration of Panchadhatu idol following traditional devotional routines.",
      },
    },
    {
      period: { mr: "वार्षिक उत्सव", en: "Annual Celebration" },
      event: { mr: "त्रिपुरारी दीपोत्सव", en: "Tripurari Deepotsav" },
      description: {
        mr: "कोजागिरी पौर्णिमेपासून सुरु होऊन त्रिपुरारी पौर्णिमेपर्यंत महिनाभर चालणाऱ्या दीपोत्सव सोहळ्याची परंपरा.",
        en: "Initiation of the month-long festival of earthen oil lamps from Kojagiri to Tripurari Purnima.",
      },
    },
  ],
};
