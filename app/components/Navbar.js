"use client";

import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const countryToLanguage = {
    US: "EN",
    ES: "ES",
    FR: "FR",
    DE: "DE",
    IT: "IT",
    PT: "PT",
    RU: "RU",
    CN: "ZH",
    JP: "JA",
    KR: "KO",
    SA: "AR",
    IN: "HI",
    BD: "BN",
    PK: "UR",
    ID: "ID",
    MY: "MS",
    TH: "TH",
    VN: "VI",
    TR: "TR",
    NL: "NL",
    SE: "SV",
    NO: "NO",
    DK: "DA",
    FI: "FI",
    PL: "PL",
    CZ: "CS",
    SK: "SK",
    HU: "HU",
    RO: "RO",
    BG: "BG",
    HR: "HR",
    RS: "SR",
    UA: "UK",
    GR: "EL",
    IL: "HE",
    IR: "FA",
    KE: "SW",
    ET: "AM",
    NG: "YO",
    ZA: "AF",
    MM: "MY",
    KH: "KM",
    LA: "LO",
    LK: "SI",
    NP: "NE",
    BT: "DZ",
    MN: "MN",
    KZ: "KK",
    KG: "KY",
    UZ: "UZ",
    TJ: "TJ",
    TM: "TK",
    AZ: "AZ",
    AM: "HY",
    GE: "KA",
    EE: "ET",
    LV: "LV",
    LT: "LT",
    SI: "SL",
    MK: "MK",
    AL: "SQ",
    MT: "MT",
    IS: "IS",
    IE: "GA",
    LU: "LB",
    CH: "RM",
    FO: "FO",
  };

  const languageToCountry = {
    EN: "US",
    ES: "ES",
    FR: "FR",
    DE: "DE",
    IT: "IT",
    PT: "PT",
    RU: "RU",
    ZH: "CN",
    JA: "JP",
    KO: "KR",
    AR: "SA",
    HI: "IN",
    BN: "BD",
    UR: "PK",
    ID: "ID",
    MS: "MY",
    TH: "TH",
    VI: "VN",
    TR: "TR",
    NL: "NL",
    SV: "SE",
    NO: "NO",
    DA: "DK",
    FI: "FI",
    PL: "PL",
    CS: "CZ",
    SK: "SK",
    HU: "HU",
    RO: "RO",
    BG: "BG",
    HR: "HR",
    SR: "RS",
    UK: "UA",
    EL: "GR",
    HE: "IL",
    FA: "IR",
    SW: "KE",
    AM: "ET",
    YO: "NG",
    AF: "ZA",
    MY: "MM",
    KM: "KH",
    LO: "LA",
    SI: "LK",
    NE: "NP",
    DZ: "BT",
    MN: "MN",
    KK: "KZ",
    KY: "KG",
    UZ: "UZ",
    TJ: "TJ",
    TK: "TM",
    AZ: "AZ",
    HY: "AM",
    KA: "GE",
    ET: "EE",
    LV: "LV",
    LT: "LT",
    SL: "SI",
    MK: "MK",
    SQ: "AL",
    MT: "MT",
    IS: "IS",
    GA: "IE",
    LB: "LU",
    RM: "CH",
    FO: "FO",
  };

  const handleCountrySelect = (countryCode) => {
    const langCode = countryToLanguage[countryCode];
    if (langCode) {
      changeLanguage(langCode);
    }
  };

  const countries = Object.keys(countryToLanguage);

  const customLabels = {
    US: "English",
    ES: "Español",
    FR: "Français",
    DE: "Deutsch",
    IT: "Italiano",
    PT: "Português",
    RU: "Русский",
    CN: "中文",
    JP: "日本語",
    KR: "한국어",
    SA: "العربية",
    IN: "हिन्दी",
    BD: "বাংলা",
    PK: "اردو",
    ID: "Bahasa Indonesia",
    MY: "Bahasa Melayu",
    TH: "ไทย",
    VN: "Tiếng Việt",
    TR: "Türkçe",
    NL: "Nederlands",
    SE: "Svenska",
    NO: "Norsk",
    DK: "Dansk",
    FI: "Suomi",
    PL: "Polski",
    CZ: "Čeština",
    SK: "Slovenčina",
    HU: "Magyar",
    RO: "Română",
    BG: "Български",
    HR: "Hrvatski",
    RS: "Српски",
    UA: "Українська",
    GR: "Ελληνικά",
    IL: "עברית",
    IR: "فارسی",
    KE: "Kiswahili",
    ET: "አማርኛ",
    NG: "Yorùbá",
    ZA: "Afrikaans",
    MM: "မြန်မာ",
    KH: "ខ្មែរ",
    LA: "ລາວ",
    LK: "සිංහල",
    NP: "नेपाली",
    BT: "རྫོང་ཁ",
    MN: "Монгол",
    KZ: "Қазақ",
    KG: "Кыргыз",
    UZ: "Oʻzbek",
    TJ: "Тоҷикӣ",
    TM: "Türkmen",
    AZ: "Azərbaycan",
    AM: "Հայերեն",
    GE: "ქართული",
    EE: "Eesti",
    LV: "Latviešu",
    LT: "Lietuvių",
    SI: "Slovenščina",
    MK: "Македонски",
    AL: "Shqip",
    MT: "Malti",
    IS: "Íslenska",
    IE: "Gaeilge",
    LU: "Lëtzebuergesch",
    CH: "Rumantsch",
    FO: "Føroyskt",
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200 relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                {t("logo")}
              </h1>
            </div>

            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 text-lg font-medium rounded-lg transition-colors duration-200"
                >
                  {t("home")}
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 text-lg font-medium rounded-lg transition-colors duration-200"
                >
                  {t("about")}
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 text-lg font-medium rounded-lg transition-colors duration-200"
                >
                  {t("contact")}
                </a>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 p-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        isMobileMenuOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              </div>

              <div className="relative">
                <ReactFlagsSelect
                  selected={languageToCountry[currentLanguage]}
                  onSelect={handleCountrySelect}
                  countries={countries}
                  customLabels={customLabels}
                  selectButtonClassName="bg-blue-600 text-white px-5 py-3 rounded-full text-base font-semibold border-none outline-none cursor-pointer hover:from-purple-600 hover:to-indigo-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 min-w-40"
                  menuClassName="bg-white rounded-2xl shadow-2xl border border-gray-200 mt-2 max-h-96 overflow-y-auto z-50"
                  optionClassName="px-4 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 hover:translate-x-1 transition-all duration-200 cursor-pointer text-gray-700 text-sm font-medium"
                  placeholder="Select Language"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 text-lg font-medium rounded-lg transition-colors duration-200"
            >
              {t("home")}
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 text-lg font-medium rounded-lg transition-colors duration-200"
            >
              {t("about")}
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 text-lg font-medium rounded-lg transition-colors duration-200"
            >
              {t("contact")}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
