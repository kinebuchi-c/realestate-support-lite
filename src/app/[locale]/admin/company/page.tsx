"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
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

  const languages = [
    { code: "ja", label: "日本語" },
    { code: "en", label: "English" },
    { code: "zh", label: "中文" },
    { code: "zh-tw", label: "繁體中文" },
    { code: "ko", label: "한국어" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "tl", label: "Tagalog" },
    { code: "th", label: "ไทย" },
    { code: "id", label: "Bahasa Indonesia" },
    { code: "ms", label: "Bahasa Melayu" },
    { code: "my", label: "မြန်မာ" },
    { code: "ne", label: "नेपाली" },
    { code: "hi", label: "हिन्दी" },
    { code: "bn", label: "বাংলা" },
    { code: "ur", label: "اردو" },
    { code: "pt", label: "Português" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "ru", label: "Русский" },
    { code: "ar", label: "العربية" },
  ];

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
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleLanguageToggle(lang.code)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    companyInfo.supportedLanguages.includes(lang.code)
                      ? "bg-primary-100 border-primary-500 text-primary-700"
                      : "bg-white border-slate-300 text-slate-600 hover:border-slate-400"
                  }`}
                >
                  {lang.label}
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
