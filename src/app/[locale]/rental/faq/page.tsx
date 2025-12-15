import { useTranslations } from "next-intl";
import ContentLayout from "@/components/ContentLayout";

export default function RentalFaqPage() {
  const t = useTranslations("rental.faq");

  const faqs = ["guarantor", "japanese", "documents", "refused", "shortTerm", "internet"] as const;

  return (
    <ContentLayout
      backHref="/rental"
      backLabel={useTranslations("rental")("title")}
      title={t("title")}
    >
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq} className="content-box group">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-semibold text-slate-800 pr-4">
                Q: {t(`list.${faq}.q`)}
              </span>
              <span className="text-primary-600 group-open:rotate-180 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="mt-3 pt-3 border-t border-slate-200">
              <p className="text-slate-600">
                <span className="font-medium text-primary-600">A:</span> {t(`list.${faq}.a`)}
              </p>
            </div>
          </details>
        ))}
      </div>
    </ContentLayout>
  );
}
