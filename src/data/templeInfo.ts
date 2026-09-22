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
    mr: "वातेगाव (जि. सांगली) • भोगावती नदीतीर",
    en: "Wategaon (Sangli) • Bhogawati River Bank",
  },
  tagline: {
    mr: "॥ ॐ नमो भगवते वासुदेवाय ॥ • भोगावती नदीच्या पवित्र तीरावर स्थित श्री वासुदेव देवस्थान",
    en: "॥ Om Namo Bhagavate Vasudevaya ॥ • Sacred shrine situated on the banks of Bhogawati river",
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
    { label: { mr: "स्थान", en: "Location" }, value: { mr: "वाटेगाव (सांगली)", en: "Wategaon (Sangli)" } },
    { label: { mr: "पवित्र नदी", en: "Holy River" }, value: { mr: "भोगावती नदीकाठ", en: "Bhogawati River Bank" } },
    { label: { mr: "मुख्य देवता", en: "Main Deity" }, value: { mr: "श्री वासुदेव (श्रीकृष्ण)", en: "Shree Vasudev (Krishna)" } },
    { label: { mr: "वार्षिक उत्सव", en: "Annual Festival" }, value: { mr: "महिन्याचा दीपोत्सव", en: "Month-long Deepotsav" } },
  ],
  keyHighlights: [
    {
      title: { mr: "पंचधातू श्रीकृष्ण मूर्ती", en: "Panchadhatu Krishna Idol" },
      desc: {
        mr: "गाभाऱ्यात शांत, मंदस्मित आणि प्रसन्न भावमुद्रेत असणारी श्री वासुदेवाची (श्रीकृष्णाची) दुर्मीळ पंचधातू मूर्ती.",
        en: "Rare Panchadhatu idol of Shree Vasudev (Lord Krishna) radiating divine peace and serene smile.",
      },
    },
    {
      title: { mr: "सागवानी लाकडी स्थापत्य", en: "Teakwood Mandap" },
      desc: {
        mr: "६० फूट लांब व ३० फूट रुंद भव्य सागवानी लाकडी सभामंडप आणि ५० फूट उंच शिखर.",
        en: "Majestic 60ft x 30ft teakwood assembly hall with a 50ft high traditional shikhara.",
      },
    },
    {
      title: { mr: "उत्तराभिमुख मंदिर", en: "North-facing Layout" },
      desc: {
        mr: "भोगावती नदीच्या पवित्र तीरावर वसलेले उत्तराभिमुख मंदिर आणि शांत आध्यात्मिक परिसर.",
        en: "North-facing sacred layout situated peacefully on the holy banks of Bhogawati river.",
      },
    },
    {
      title: { mr: "वार्षिक दीपोत्सव", en: "Annual Deepotsav" },
      desc: {
        mr: "कोजागिरी पौर्णिमा ते त्रिपुरारी पौर्णिमेपर्यंत महिनाभर हजारो दिव्यांच्या लखलखाटातील सोहळा.",
        en: "Traditional month-long festival of earthen oil lamps from Kojagiri to Tripurari Purnima.",
      },
    },
  ],
};
