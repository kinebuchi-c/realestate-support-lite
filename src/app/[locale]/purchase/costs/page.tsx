import { useTranslations } from "next-intl";
import ContentLayout from "@/components/ContentLayout";

export default function PurchaseCostsPage() {
  const t = useTranslations("purchase.costs");
  const common = useTranslations("common");

  const purchaseCosts = ["price", "stamp", "registration", "agentFee", "loanFee", "insurance", "acquisition"] as const;
  const ongoingCosts = ["propertyTax", "cityTax", "management", "repair"] as const;

  return (
    <ContentLayout
      backHref="/purchase"
      backLabel={useTranslations("purchase")("title")}
      title={t("title")}
    >
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-8">
        <p className="text-primary-800 font-medium">{t("conclusion")}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">{t("purchase.title")}</h2>
        <div className="space-y-3">
          {purchaseCosts.map((cost) => (
            <div key={cost} className="content-box">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">{t(`purchase.${cost}.name`)}</h3>
                  <p className="text-sm text-slate-600">{t(`purchase.${cost}.desc`)}</p>
                </div>
                {cost !== "price" && (
                  <div className="badge-blue ml-4 whitespace-nowrap">
                    {t(`purchase.${cost}.amount`)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">{t("ongoing.title")}</h2>
        <div className="space-y-3">
          {ongoingCosts.map((cost) => (
            <div key={cost} className="content-box">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">{t(`ongoing.${cost}.name`)}</h3>
                  <p className="text-sm text-slate-600">{t(`ongoing.${cost}.desc`)}</p>
                </div>
                <div className="badge-green ml-4 whitespace-nowrap">
                  {t(`ongoing.${cost}.amount`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
