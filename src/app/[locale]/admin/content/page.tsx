"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

interface ContentSettings {
  rental: {
    enabled: boolean;
    sections: {
      flow: boolean;
      costs: boolean;
      guarantee: boolean;
      documents: boolean;
      terms: boolean;
      rules: boolean;
      faq: boolean;
    };
  };
  purchase: {
    enabled: boolean;
    sections: {
      flow: boolean;
      costs: boolean;
      documents: boolean;
      terms: boolean;
      rules: boolean;
      faq: boolean;
    };
  };
  customMessages: {
    welcome: string;
    rental: string;
    purchase: string;
  };
}

const defaultSettings: ContentSettings = {
  rental: {
    enabled: true,
    sections: {
      flow: true,
      costs: true,
      guarantee: true,
      documents: true,
      terms: true,
      rules: true,
      faq: true,
    },
  },
  purchase: {
    enabled: true,
    sections: {
      flow: true,
      costs: true,
      documents: true,
      terms: true,
      rules: true,
      faq: true,
    },
  },
  customMessages: {
    welcome: "",
    rental: "",
    purchase: "",
  },
};

export default function AdminContentPage() {
  const t = useTranslations("admin.content");
  const common = useTranslations("common");
  const [settings, setSettings] = useState<ContentSettings>(defaultSettings);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("contentSettings");
    if (stored) {
      setSettings(JSON.parse(stored));
    }
  }, []);

  const handleSectionToggle = (
    category: "rental" | "purchase",
    section: string
  ) => {
    setSettings((prev) => {
      const currentSections = prev[category].sections;
      const currentValue = (currentSections as Record<string, boolean>)[section];
      return {
        ...prev,
        [category]: {
          ...prev[category],
          sections: {
            ...currentSections,
            [section]: !currentValue,
          },
        },
      };
    });
    setSaved(false);
  };

  const handleCategoryToggle = (category: "rental" | "purchase") => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        enabled: !prev[category].enabled,
      },
    }));
    setSaved(false);
  };

  const handleMessageChange = (field: keyof ContentSettings["customMessages"], value: string) => {
    setSettings((prev) => ({
      ...prev,
      customMessages: {
        ...prev.customMessages,
        [field]: value,
      },
    }));
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem("contentSettings", JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const rentalSections = [
    { key: "flow", icon: "📋" },
    { key: "costs", icon: "💰" },
    { key: "guarantee", icon: "🛡️" },
    { key: "documents", icon: "📄" },
    { key: "terms", icon: "📖" },
    { key: "rules", icon: "🏠" },
    { key: "faq", icon: "❓" },
  ];

  const purchaseSections = [
    { key: "flow", icon: "📋" },
    { key: "costs", icon: "💰" },
    { key: "documents", icon: "📄" },
    { key: "terms", icon: "📖" },
    { key: "rules", icon: "⚠️" },
    { key: "faq", icon: "❓" },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <Link href="/admin" className="text-primary-600 hover:underline text-sm">
          &larr; {useTranslations("admin")("title")}
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-slate-800 mb-6">{t("title")}</h1>

      {/* Rental Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-800">{t("rental.title")}</h2>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.rental.enabled}
              onChange={() => handleCategoryToggle("rental")}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>

        <div className={`space-y-2 ${!settings.rental.enabled && "opacity-50 pointer-events-none"}`}>
          {rentalSections.map((section) => (
            <label
              key={section.key}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100"
            >
              <span className="flex items-center gap-2">
                <span>{section.icon}</span>
                <span className="text-slate-700">{t(`rental.sections.${section.key}`)}</span>
              </span>
              <input
                type="checkbox"
                checked={settings.rental.sections[section.key as keyof typeof settings.rental.sections]}
                onChange={() => handleSectionToggle("rental", section.key)}
                className="w-5 h-5 text-primary-600 rounded border-slate-300 focus:ring-primary-500"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Purchase Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-800">{t("purchase.title")}</h2>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.purchase.enabled}
              onChange={() => handleCategoryToggle("purchase")}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>

        <div className={`space-y-2 ${!settings.purchase.enabled && "opacity-50 pointer-events-none"}`}>
          {purchaseSections.map((section) => (
            <label
              key={section.key}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100"
            >
              <span className="flex items-center gap-2">
                <span>{section.icon}</span>
                <span className="text-slate-700">{t(`purchase.sections.${section.key}`)}</span>
              </span>
              <input
                type="checkbox"
                checked={settings.purchase.sections[section.key as keyof typeof settings.purchase.sections]}
                onChange={() => handleSectionToggle("purchase", section.key)}
                className="w-5 h-5 text-primary-600 rounded border-slate-300 focus:ring-primary-500"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Custom Messages */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">{t("messages.title")}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t("messages.welcome")}
            </label>
            <textarea
              value={settings.customMessages.welcome}
              onChange={(e) => handleMessageChange("welcome", e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              rows={2}
              placeholder={t("messages.welcomePlaceholder")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t("messages.rentalNote")}
            </label>
            <textarea
              value={settings.customMessages.rental}
              onChange={(e) => handleMessageChange("rental", e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              rows={2}
              placeholder={t("messages.rentalPlaceholder")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t("messages.purchaseNote")}
            </label>
            <textarea
              value={settings.customMessages.purchase}
              onChange={(e) => handleMessageChange("purchase", e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              rows={2}
              placeholder={t("messages.purchasePlaceholder")}
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center gap-4">
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

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          {t("note")}
        </p>
      </div>
    </div>
  );
}
