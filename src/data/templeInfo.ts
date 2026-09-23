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
    mr: "वाटेगाव (जि. सांगली) • भोगावती नदीच्या तीरावर स्थित दिवेकर घराण्याचे पिढीजात मंदिर",
    en: "Wategaon (Sangli) • Private Generational Temple of Divekar Family on Bhogawati River",
  },
  tagline: {
    mr: "॥ ॐ नमो भगवते वासुदेवाय ॥ • वाटेगाव येथील ऐतिहासिक श्री वासुदेव मंदिर",
    en: "॥ Om Namo Bhagavate Vasudevaya ॥ • Historic Shree Vasudev Mandir at Wategaon",
  },
  location: {
    village: { mr: "वाटेगाव", en: "Wategaon" },
    taluka: { mr: "वाळवा", en: "Walwa" },
    district: { mr: "सांगली", en: "Sangli" },
    state: { mr: "महाराष्ट्र", en: "Maharashtra" },
    fullAddress: {
      mr: "भोगावती नदीच्या काठी, वाटेगाव, तालुका वाळवा, जिल्हा सांगली - ४१५४१०, महाराष्ट्र",
      en: "Bhogawati River Bank, Wategaon, Taluka Walwa, District Sangli - 415410, Maharashtra",
    },
    river: { mr: "भोगावती नदी", en: "Bhogawati River" },
    googleMapsUrl: "https://maps.google.com/?q=Wategaon+Sangli+Maharashtra",
    coordinates: { lat: 17.0784, lng: 74.2718 },
  },
  quickStats: [
    { label: { mr: "स्थान", en: "Location" }, value: { mr: "वाटेगाव, ता. वाळवा (सांगली)", en: "Wategaon, Walwa (Sangli)" } },
    { label: { mr: "नदी", en: "River" }, value: { mr: "भोगावती नदी", en: "Bhogawati River" } },
    { label: { mr: "स्वरूप", en: "Deity Form" }, value: { mr: "श्री वासुदेव (पंचधातू मूर्ती)", en: "Shree Vasudev (Panchadhatu Idol)" } },
    { label: { mr: "परंपरा", en: "Heritage" }, value: { mr: "दिवेकर घराण्याचे खाजगी मंदिर", en: "Divekar Family Private Temple" } },
  ],
  keyHighlights: [
    {
      title: { mr: "पंचधातू वासुदेव मूर्ती", en: "Panchadhatu Vasudev Idol" },
      desc: {
        mr: "श्रीमद्भागवत एकादश स्कंध १४ व्या अध्यायातील वर्णनानुसार व भक्त ध्रुवाला दर्शन दिलेल्या श्री वासुदेवांच्या प्रसन्न स्वरूपाची पंचधातू उभी मूर्ती.",
        en: "Standing Panchadhatu idol of Lord Vasudev as described in Srimad Bhagavat 11th Canto Chapter 14.",
      },
    },
    {
      title: { mr: "सागवानी लाकडी मंडप", en: "Teakwood Mandap" },
      desc: {
        mr: "सन १९१२ मध्ये श्रीसद्गुरु गोविंद हरी दिवेकर यांनी उभारलेला सुशोभित लाकडी मंडप व १९१४ ची संगमरवरी फरशी.",
        en: "Ornate teakwood mandap built in 1912 by Govind Hari Divekar with marble flooring added in 1914.",
      },
    },
    {
      title: { mr: "दिवेकर पिढीजात परंपरा", en: "Divekar Generational Lineage" },
      desc: {
        mr: "वासुदेवस्वामी दिवेकर यांनी स्थापन केलेले व पिढ्यानपिढ्या दिवेकर कुटुंबाने प्रपंच व नोकरी सांभाळून जतन केलेले मंदिर.",
        en: "Established by Vasudevswami Divekar and preserved across generations by the Divekar family.",
      },
    },
    {
      title: { mr: "वार्षिक दीपोत्सव व उत्सव", en: "Deepotsav & Annual Utsav" },
      desc: {
        mr: "कोजागिरी ते त्रिपुरारी पौर्णिमा दरम्यानचा पारंपरिक दीपोत्सव आणि फाल्गुन महिन्यात साजरा होणारा स्थापना उत्सव.",
        en: "Traditional month-long Deepotsav from Kojagiri to Tripurari Purnima and Phalgun Mandir Sthapana Utsav.",
      },
    },
  ],
};
