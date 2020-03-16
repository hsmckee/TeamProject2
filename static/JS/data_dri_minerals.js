// This Object contains the nested objects.
//First level of keys are "Female" and "Male"
//Second level is Mineral names
//Third level keys are
//"13" - means the particular RDA for ages 9-13 years
//"18" - means the particular RDA for ages 14-18 years
//"30" - means the particular RDA for ages 19-30 years
//"50" - means the particular RDA for ages 31-50 years
//"70" - means the particular RDA for ages 51-70 years
//"100" - means the particular RDA for ages >70 years
//unit - means the unit for this particular mineral RDA
const data_mineral_rda = {
  Female: {
    Calcium: {
      "13": "1,300",
      "30": "1,000",
      "50": "1,000",
      "70": "1,200",
      unit: "(mg/d)",
      "18": "1,300",
      "100": "1,200"
    },
    Chromium: {
      "13": "21",
      "30": "25",
      "50": "25",
      "70": "20",
      unit: "(micro_g/d)",
      "18": "24",
      "100": "20"
    },
    Copper: {
      "13": "700",
      "30": "900",
      "50": "900",
      "70": "900",
      unit: "(micro_g/d)",
      "18": "890",
      "100": "900"
    },
    Fluoride: {
      "13": "2",
      "30": "3",
      "50": "3",
      "70": "3",
      unit: "(mg/d)",
      "18": "3",
      "100": "3"
    },
    Iodine: {
      "13": "120",
      "30": "150",
      "50": "150",
      "70": "150",
      unit: "(micro_g/d)",
      "18": "150",
      "100": "150"
    },
    Iron: {
      "13": "8",
      "30": "18",
      "50": "18",
      "70": "8",
      unit: "(mg/d)",
      "18": "15",
      "100": "8"
    },
    Magnesium: {
      "13": "240",
      "30": "310",
      "50": "320",
      "70": "320",
      unit: "(mg/d)",
      "18": "360",
      "100": "320"
    },
    Manganese: {
      "13": "1.6",
      "30": "1.8",
      "50": "1.8",
      "70": "1.8",
      unit: "(mg/d)",
      "18": "1.6",
      "100": "1.8"
    },
    Molybdenum: {
      "13": "34",
      "30": "45",
      "50": "45",
      "70": "45",
      unit: "(micro_g/d)",
      "18": "43",
      "100": "45"
    },
    Phosphorus: {
      "13": "1,250",
      "30": "700",
      "50": "700",
      "70": "700",
      unit: "(mg/d)",
      "18": "1,250",
      "100": "700"
    },
    Selenium: {
      "13": "40",
      "30": "55",
      "50": "55",
      "70": "55",
      unit: "(micro_g/d)",
      "18": "55",
      "100": "55"
    },
    Zinc: {
      "13": "8",
      "30": "8",
      "50": "8",
      "70": "8",
      unit: "(mg/d)",
      "18": "9",
      "100": "8"
    },
    Potassium: {
      "13": "4.5",
      "30": "4.7",
      "50": "4.7",
      "70": "4.7",
      unit: "(g/d)",
      "18": "4.7",
      "100": "4.7"
    },
    Sodium: {
      "13": "1.5",
      "30": "1.5",
      "50": "1.5",
      "70": "1.3",
      unit: "(g/d)",
      "18": "1.5",
      "100": "1.2"
    },
    Chloride: {
      "13": "2.3",
      "30": "2.3",
      "50": "2.3",
      "70": "2",
      unit: "(g/d)",
      "18": "2.3",
      "100": "1.8"
    }
  },
  Male: {
    Calcium: {
      "13": "1,300",
      "50": "1,000",
      "70": "1,000",
      "100": "1,200",
      unit: "(mg/d)",
      "18": "1,300",
      "30": "1,000"
    },
    Chromium: {
      "13": "25",
      "50": "35",
      "70": "30",
      "100": "30",
      unit: "(micro_g/d)",
      "18": "35",
      "30": "35"
    },
    Copper: {
      "13": "700",
      "50": "900",
      "70": "900",
      "100": "900",
      unit: "(micro_g/d)",
      "18": "890",
      "30": "900"
    },
    Fluoride: {
      "13": "2",
      "50": "4",
      "70": "4",
      "100": "4",
      unit: "(mg/d)",
      "18": "3",
      "30": "4"
    },
    Iodine: {
      "13": "120",
      "50": "150",
      "70": "150",
      "100": "150",
      unit: "(micro_g/d)",
      "18": "150",
      "30": "150"
    },
    Iron: {
      "13": "8",
      "50": "8",
      "70": "8",
      "100": "8",
      unit: "(mg/d)",
      "18": "11",
      "30": "8"
    },
    Magnesium: {
      "13": "240",
      "50": "420",
      "70": "420",
      "100": "420",
      unit: "(mg/d)",
      "18": "410",
      "30": "400"
    },
    Manganese: {
      "13": "1.9",
      "50": "2.3",
      "70": "2.3",
      "100": "2.3",
      unit: "(mg/d)",
      "18": "2.2",
      "30": "2.3"
    },
    Molybdenum: {
      "13": "34",
      "50": "45",
      "70": "45",
      "100": "45",
      unit: "(micro_g/d)",
      "18": "43",
      "30": "45"
    },
    Phosphorus: {
      "13": "1,250",
      "50": "700",
      "70": "700",
      "100": "700",
      unit: "(mg/d)",
      "18": "1,250",
      "30": "700"
    },
    Selenium: {
      "13": "40",
      "50": "55",
      "70": "55",
      "100": "55",
      unit: "(micro_g/d)",
      "18": "55",
      "30": "55"
    },
    Zinc: {
      "13": "8",
      "50": "11",
      "70": "11",
      "100": "11",
      unit: "(mg/d)",
      "18": "11",
      "30": "11"
    },
    Potassium: {
      "13": "4.5",
      "50": "4.7",
      "70": "4.7",
      "100": "4.7",
      unit: "(g/d)",
      "18": "4.7",
      "30": "4.7"
    },
    Sodium: {
      "13": "1.5",
      "50": "1.5",
      "70": "1.3",
      "100": "1.2",
      unit: "(g/d)",
      "18": "1.5",
      "30": "1.5"
    },
    Chloride: {
      "13": "2.3",
      "50": "2.3",
      "70": "2",
      "100": "1.8",
      unit: "(g/d)",
      "18": "2.3",
      "30": "2.3"
    }
  }
};
