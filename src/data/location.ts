export interface RouteOption {
  mode: { mr: string; en: string };
  icon: string;
  details: Array<{
    route: { mr: string; en: string };
    distance: { mr: string; en: string };
    description: { mr: string; en: string };
  }>;
}

export const locationInfo = {
  address: {
    name: { mr: "श्री वासुदेव मंदिर", en: "Shree Vasudev Mandir" },
    street: { mr: "भोगावती नदीकाठ, मंदिर गल्ली", en: "Bhogawati River Bank, Temple Street" },
    village: { mr: "वाटेगाव", en: "Wategaon" },
    taluka: { mr: "वाळवा", en: "Walwa" },
    district: { mr: "सांगली", en: "Sangli" },
    pincode: "415410",
    state: { mr: "महाराष्ट्र", en: "Maharashtra" },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30560.1234567!2d74.2718!3d17.0784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc107e123456789%3A0x123456789abcdef!2sWategaon%2C+Maharashtra+415410!5e0!3m2!1sen!2sin!4v1700000000000",
    directMapsUrl: "https://maps.google.com/?q=Wategaon+Sangli+Maharashtra",
  },
  routes: [
    {
      mode: { mr: "रस्त्याने (Road Transport)", en: "By Road" },
      icon: "Bus",
      details: [
        {
          route: { mr: "पेठ नाका (राष्ट्रीय महामार्ग ४८) वरून", en: "Via Peth Naka (NH 48)" },
          distance: { mr: "सुमारे १२ किमी", en: "Approx 12 km" },
          description: {
            mr: "पुणे-बंगळुरू महामार्गावरील (NH48) पेठ नाका येथून इस्लामपूर मार्गे वाटेगावसाठी एसटी बस व खाजगी वाहने उपलब्ध आहेत.",
            en: "From Peth Naka on Pune-Bengaluru Highway (NH48), head towards Islampur to reach Wategaon via local transport.",
          },
        },
        {
          route: { mr: "कराड (Karad) शहर वरून", en: "From Karad City" },
          distance: { mr: "सुमारे २५ किमी", en: "Approx 25 km" },
          description: {
            mr: "कराड बस स्थानकावरून शेणोली किंवा शिराळा मार्गे वाटेगावसाठी नियमित बसेस आणि रिक्षा उपलब्ध आहेत.",
            en: "Regular MSRTC buses and taxis available from Karad bus station via Shenoli / Shirala route.",
          },
        },
        {
          route: { mr: "सांगली (Sangli) मुख्य शहरावरून", en: "From Sangli City" },
          distance: { mr: "सुमारे ४५ किमी", en: "Approx 45 km" },
          description: {
            mr: "सांगली - इस्लामपूर - वाटेगाव मुख्य हमरस्त्याने खाजगी गाडी किंवा एसटी बसने १ तासात पोहोचता येते.",
            en: "Drive via Sangli-Islampur road to reach Wategaon in under 1 hour.",
          },
        },
      ],
    },
    {
      mode: { mr: "रेल्वेने (By Train)", en: "By Train" },
      icon: "Train",
      details: [
        {
          route: { mr: "शेणोली रेल्वे स्टेशन (Shenoli)", en: "Shenoli Railway Station" },
          distance: { mr: "सुमारे १५ किमी", en: "Approx 15 km" },
          description: {
            mr: "सर्वात जवळचे छोटे रेल्वे स्थानक. तेथून वाटेगावसाठी लोकल रिक्षा व बसेस मिळतात.",
            en: "Nearest local railway station with auto rickshaws connecting to Wategaon.",
          },
        },
        {
          route: { mr: "कराड रेल्वे स्टेशन (Karad)", en: "Karad Railway Station" },
          distance: { mr: "सुमारे २५ किमी", en: "Approx 25 km" },
          description: {
            mr: "प्रमुख एक्सप्रेस गाड्या थांबणारे जवळचे मोठे स्टेशन. स्थानकाबाहेरून थेट बसेस मिळतात.",
            en: "Major railway junction connecting express trains across Maharashtra and India.",
          },
        },
        {
          route: { mr: "मिरज जंक्शन (Miraj Junction)", en: "Miraj Junction" },
          distance: { mr: "सुमारे ५० किमी", en: "Approx 50 km" },
          description: {
            mr: "भारतातील सर्व मोठ्या शहरांशी जोडलेले जंक्शन. तेथून सांगली-इस्लामपूर मार्गे वाटेगाव गाठता येते.",
            en: "Major junction connected to Mumbai, Pune, Bangalore, Delhi.",
          },
        },
      ],
    },
  ],
};

