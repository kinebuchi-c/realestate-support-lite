import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ContentLayout from "@/components/ContentLayout";

export default function RentalFlowPage() {
  const t = useTranslations("rental.flow");
  const common = useTranslations("common");

  const steps = ["search", "viewing", "application", "screening", "contract", "movein"] as const;

  return (
    <ContentLayout
      backHref="/rental"
      backLabel={useTranslations("rental")("title")}
      title={t("title")}
    >
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-8">
        <p className="text-primary-800 font-medium">{t("conclusion")}</p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step} className="content-box">
            <div className="flex items-start">
              <div className="step-number mr-4 mt-1 flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {t(`steps.${step}.title`)}
                </h3>
                <p className="text-slate-600 mb-3">{t(`steps.${step}.desc`)}</p>
                <ul className="space-y-1">
                  {(t.raw(`steps.${step}.points`) as string[]).map((point, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600">
                      <span className="text-primary-500 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
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
