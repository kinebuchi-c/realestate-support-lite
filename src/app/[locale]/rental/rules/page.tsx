import { useTranslations } from "next-intl";
import ContentLayout from "@/components/ContentLayout";

export default function RentalRulesPage() {
  const t = useTranslations("rental.rules");
  const common = useTranslations("common");

  const rules = ["noise", "garbage", "shoes", "pets", "smoking", "guests", "renovation"] as const;

  const ruleIcons: Record<string, string> = {
    noise: "🔇",
    garbage: "🗑️",
    shoes: "👟",
    pets: "🐾",
    smoking: "🚭",
    guests: "👥",
    renovation: "🔨",
  };

  return (
    <ContentLayout
      backHref="/rental"
      backLabel={useTranslations("rental")("title")}
      title={t("title")}
    >
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-8">
        <p className="text-primary-800 font-medium">{t("conclusion")}</p>
      </div>

      <div className="space-y-4">
        {rules.map((rule) => (
          <div key={rule} className="content-box">
            <div className="flex items-start">
              <span className="text-2xl mr-3">{ruleIcons[rule]}</span>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">
                  {t(`list.${rule}.name`)}
                </h3>
                <p className="text-sm text-slate-600">{t(`list.${rule}.desc`)}</p>
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
