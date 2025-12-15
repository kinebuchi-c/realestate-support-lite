import { useTranslations } from "next-intl";
import ContentLayout from "@/components/ContentLayout";

export default function RentalGuaranteePage() {
  const t = useTranslations("rental.guarantee");
  const common = useTranslations("common");

  const screeningItems = ["income", "visa", "history", "contact"] as const;

  return (
    <ContentLayout
      backHref="/rental"
      backLabel={useTranslations("rental")("title")}
      title={t("title")}
    >
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-8">
        <p className="text-primary-800 font-medium">{t("conclusion")}</p>
      </div>

      {/* What is a Guarantee Company */}
      <div className="content-box mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-3">{t("whatIs.title")}</h2>
        <p className="text-slate-600">{t("whatIs.desc")}</p>
      </div>

      {/* Benefits */}
      <div className="content-box mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-3">{t("benefits.title")}</h2>
        <ul className="space-y-2">
          {(t.raw("benefits.list") as string[]).map((benefit, i) => (
            <li key={i} className="flex items-start text-slate-600">
              <span className="text-green-500 mr-2">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Cost */}
      <div className="content-box mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-3">{t("cost.title")}</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
            <span className="text-slate-700">{t("cost.initial")}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
            <span className="text-slate-700">{t("cost.renewal")}</span>
          </div>
          <p className="text-sm text-slate-500 mt-2">{t("cost.note")}</p>
        </div>
      </div>

      {/* Screening */}
      <div className="content-box mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-3">{t("screening.title")}</h2>
        <div className="space-y-3">
          {screeningItems.map((item) => (
            <div key={item} className="p-3 bg-slate-50 rounded">
              <h3 className="font-semibold text-slate-800">{t(`screening.items.${item}.name`)}</h3>
              <p className="text-sm text-slate-600">{t(`screening.items.${item}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Required Documents */}
      <div className="content-box mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-3">{t("documents.title")}</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-slate-700 mb-2">{common("important")}</h3>
          <ul className="space-y-1">
            {(t.raw("documents.required") as string[]).map((doc, i) => (
              <li key={i} className="flex items-start text-sm text-slate-600">
                <span className="text-primary-500 mr-2">•</span>
                {doc}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-700 mb-2">{common("note")}</h3>
          <ul className="space-y-1">
            {(t.raw("documents.optional") as string[]).map((doc, i) => (
              <li key={i} className="flex items-start text-sm text-slate-600">
                <span className="text-slate-400 mr-2">•</span>
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tips */}
      <div className="content-box mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-3">{t("tips.title")}</h2>
        <ul className="space-y-2">
          {(t.raw("tips.list") as string[]).map((tip, i) => (
            <li key={i} className="flex items-start text-slate-600">
              <span className="text-blue-500 mr-2">💡</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Foreigner Friendly Companies */}
      <div className="content-box mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-3">{t("foreignerFriendly.title")}</h2>
        <p className="text-slate-600 mb-3">{t("foreignerFriendly.desc")}</p>
        <div className="flex flex-wrap gap-2">
          {(t.raw("foreignerFriendly.companies") as string[]).map((company, i) => (
            <span key={i} className="badge-blue">{company}</span>
          ))}
        </div>
      </div>

      {/* Cautions */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">{common("note")}</h4>
        <ul className="space-y-1">
          {(t.raw("cautions") as string[]).map((caution, i) => (
            <li key={i} className="flex items-start text-sm text-yellow-700">
              <span className="mr-2">⚠️</span>
              {caution}
            </li>
          ))}
        </ul>
      </div>
    </ContentLayout>
  );
}
