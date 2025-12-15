"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

interface CompanyInfo {
  name: string;
  nameEn: string;
  phone: string;
  email: string;
  address: string;
  addressEn: string;
  license: string;
  website: string;
  supportedLanguages: string[];
}

const defaultCompanyInfo: CompanyInfo = {
  name: "",
  nameEn: "",
  phone: "",
  email: "",
  address: "",
  addressEn: "",
  license: "",
  website: "",
  supportedLanguages: ["ja"],
};

export default function AdminCompanyPage() {
  const t = useTranslations("admin.company");
  const common = useTranslations("common");
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(defaultCompanyInfo);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("companyInfo");
    if (stored) {
      setCompanyInfo(JSON.parse(stored));
    }
  }, []);

  const handleChange = (field: keyof CompanyInfo, value: string | string[]) => {
    setCompanyInfo((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleLanguageToggle = (lang: string) => {
    setCompanyInfo((prev) => {
      const languages = prev.supportedLanguages.includes(lang)
        ? prev.supportedLanguages.filter((l) => l !== lang)
        : [...prev.supportedLanguages, lang];
      return { ...prev, supportedLanguages: languages };
    });
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem("companyInfo", JSON.stringify(companyInfo));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const locale = useLocale();

  const languageLabels: Record<string, Record<string, string>> = {
    ja: {
      ja: "日本語", en: "英語", zh: "中国語（簡体）", "zh-tw": "中国語（繁体）",
      ko: "韓国語", vi: "ベトナム語", tl: "タガログ語", th: "タイ語",
      id: "インドネシア語", ms: "マレー語", my: "ミャンマー語", ne: "ネパール語",
      hi: "ヒンディー語", bn: "ベンガル語", ur: "ウルドゥー語", pt: "ポルトガル語",
      es: "スペイン語", fr: "フランス語", de: "ドイツ語", ru: "ロシア語", ar: "アラビア語",
    },
    en: {
      ja: "Japanese", en: "English", zh: "Chinese (Simplified)", "zh-tw": "Chinese (Traditional)",
      ko: "Korean", vi: "Vietnamese", tl: "Tagalog", th: "Thai",
      id: "Indonesian", ms: "Malay", my: "Burmese", ne: "Nepali",
      hi: "Hindi", bn: "Bengali", ur: "Urdu", pt: "Portuguese",
      es: "Spanish", fr: "French", de: "German", ru: "Russian", ar: "Arabic",
    },
    zh: {
      ja: "日语", en: "英语", zh: "中文（简体）", "zh-tw": "中文（繁体）",
      ko: "韩语", vi: "越南语", tl: "他加禄语", th: "泰语",
      id: "印尼语", ms: "马来语", my: "缅甸语", ne: "尼泊尔语",
      hi: "印地语", bn: "孟加拉语", ur: "乌尔都语", pt: "葡萄牙语",
      es: "西班牙语", fr: "法语", de: "德语", ru: "俄语", ar: "阿拉伯语",
    },
  };

  const languages = [
    "ja", "en", "zh", "zh-tw", "ko", "vi", "tl", "th",
    "id", "ms", "my", "ne", "hi", "bn", "ur", "pt",
    "es", "fr", "de", "ru", "ar",
  ];

  const getLanguageLabel = (code: string) => {
    const labels = languageLabels[locale] || languageLabels.en;
    return labels[code] || code;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link href="/admin" className="text-primary-600 hover:underline text-sm">
          &larr; {useTranslations("admin")("title")}
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">{t("title")}</h1>

        <div className="space-y-6">
          {/* Company Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("fields.name")}
              </label>
              <input
                type="text"
                value={companyInfo.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="株式会社〇〇不動産"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("fields.nameEn")}
              </label>
              <input
                type="text"
                value={companyInfo.nameEn}
                onChange={(e) => handleChange("nameEn", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="ABC Real Estate Co., Ltd."
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("fields.phone")}
              </label>
              <input
                type="tel"
                value={companyInfo.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="03-1234-5678"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("fields.email")}
              </label>
              <input
                type="email"
                value={companyInfo.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="info@example.com"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t("fields.address")}
            </label>
            <input
              type="text"
              value={companyInfo.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="東京都〇〇区..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t("fields.addressEn")}
            </label>
            <input
              type="text"
              value={companyInfo.addressEn}
              onChange={(e) => handleChange("addressEn", e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="1-2-3 Shibuya, Shibuya-ku, Tokyo"
            />
          </div>

          {/* License & Website */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("fields.license")}
              </label>
              <input
                type="text"
                value={companyInfo.license}
                onChange={(e) => handleChange("license", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="東京都知事(1)第12345号"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("fields.website")}
              </label>
              <input
                type="url"
                value={companyInfo.website}
                onChange={(e) => handleChange("website", e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="https://example.com"
              />
            </div>
          </div>

          {/* Supported Languages */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              {t("fields.languages")}
            </label>
            <div className="flex flex-wrap gap-2">
              {languages.map((langCode) => (
                <button
                  key={langCode}
                  type="button"
                  onClick={() => handleLanguageToggle(langCode)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    companyInfo.supportedLanguages.includes(langCode)
                      ? "bg-primary-100 border-primary-500 text-primary-700"
                      : "bg-white border-slate-300 text-slate-600 hover:border-slate-400"
                  }`}
                >
                  {getLanguageLabel(langCode)}
                </button>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex items-center gap-4 pt-4 border-t">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              {common("save")}
            </button>
            {saved && (
              <span className="text-green-600 text-sm font-medium">
                {t("saved")}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-700">
          {t("note")}
        </p>
      </div>
    </div>
  );
}
