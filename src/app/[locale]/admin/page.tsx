"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function AdminPage() {
  const t = useTranslations("admin");

  const menuItems = [
    {
      key: "company",
      href: "/admin/company",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "blue",
    },
    {
      key: "content",
      href: "/admin/content",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "green",
    },
    {
      key: "preview",
      href: "/",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: "purple",
    },
  ];

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-200",
    green: "bg-green-100 text-green-600 group-hover:bg-green-200",
    purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-200",
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">{t("title")}</h1>
        <p className="text-lg text-slate-600">{t("subtitle")}</p>
        <div className="mt-4 inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
          {t("demoMode")}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className="group block bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all"
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 ${colorClasses[item.color]}`}>
              {item.icon}
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              {t(`menu.${item.key}.title`)}
            </h2>
            <p className="text-slate-600 text-sm">
              {t(`menu.${item.key}.desc`)}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">{t("howToUse.title")}</h3>
        <ul className="space-y-1 text-sm text-blue-700">
          {(["step1", "step2", "step3"] as const).map((step) => (
            <li key={step} className="flex items-start">
              <span className="mr-2">•</span>
              {t(`howToUse.${step}`)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
