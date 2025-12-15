"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("common");

  return (
    <footer className="bg-slate-800 text-slate-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg font-semibold text-white mb-2">
            {t("siteName")}
          </p>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
