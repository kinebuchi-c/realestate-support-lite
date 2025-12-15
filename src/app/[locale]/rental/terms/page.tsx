import { useTranslations } from "next-intl";
import ContentLayout from "@/components/ContentLayout";

export default function RentalTermsPage() {
  const t = useTranslations("rental.terms");

  const terms = ["1R", "1K", "1DK", "1LDK", "tatami", "UB", "autoLock", "flooring", "balcony", "parking"] as const;

  return (
    <ContentLayout
      backHref="/rental"
      backLabel={useTranslations("rental")("title")}
      title={t("title")}
    >
      <div className="grid md:grid-cols-2 gap-4">
        {terms.map((term) => (
          <div key={term} className="content-box">
            <h3 className="font-semibold text-slate-800 mb-1">
              {t(`list.${term}.name`)}
            </h3>
            <p className="text-sm text-slate-600">{t(`list.${term}.desc`)}</p>
          </div>
        ))}
      </div>
    </ContentLayout>
  );
}
