import { useTranslations } from "next-intl";
import ContentLayout from "@/components/ContentLayout";

export default function PurchaseDocumentsPage() {
  const t = useTranslations("purchase.documents");
  const common = useTranslations("common");

  const japanIdentity = ["residenceCard", "passport", "juminhyo", "seal", "registeredSeal"] as const;
  const japanIncome = ["taxCertificate", "employment", "payslip", "bankStatement"] as const;
  const overseasIdentity = ["passport", "signature", "address"] as const;
  const overseasFunds = ["bankStatement", "sourceOfFunds", "remittance"] as const;
  const loanDocs = ["permanentResidence", "healthInsurance", "pensionRecord", "taxReturn"] as const;

  return (
    <ContentLayout
      backHref="/purchase"
      backLabel={useTranslations("purchase")("title")}
      title={t("title")}
    >
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-8">
        <p className="text-primary-800 font-medium">{t("conclusion")}</p>
      </div>

      {/* Japan Resident Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-2 border-b-2 border-primary-500">
          🇯🇵 {t("japanResident.title")}
        </h2>

        {/* Identity */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-700 mb-3">{t("japanResident.identity.title")}</h3>
          <div className="space-y-3">
            {japanIdentity.map((doc) => (
              <div key={doc} className="content-box">
                <h4 className="font-semibold text-slate-800">{t(`japanResident.identity.items.${doc}.name`)}</h4>
                <p className="text-sm text-slate-600 mb-1">{t(`japanResident.identity.items.${doc}.desc`)}</p>
                <p className="text-xs text-primary-600">📍 {t(`japanResident.identity.items.${doc}.where`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Income */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-700 mb-3">{t("japanResident.income.title")}</h3>
          <div className="space-y-3">
            {japanIncome.map((doc) => (
              <div key={doc} className="content-box">
                <h4 className="font-semibold text-slate-800">{t(`japanResident.income.items.${doc}.name`)}</h4>
                <p className="text-sm text-slate-600 mb-1">{t(`japanResident.income.items.${doc}.desc`)}</p>
                <p className="text-xs text-primary-600">📍 {t(`japanResident.income.items.${doc}.where`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overseas Resident Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-2 border-b-2 border-green-500">
          🌍 {t("overseasResident.title")}
        </h2>

        {/* Identity */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-700 mb-3">{t("overseasResident.identity.title")}</h3>
          <div className="space-y-3">
            {overseasIdentity.map((doc) => (
              <div key={doc} className="content-box">
                <h4 className="font-semibold text-slate-800">{t(`overseasResident.identity.items.${doc}.name`)}</h4>
                <p className="text-sm text-slate-600 mb-1">{t(`overseasResident.identity.items.${doc}.desc`)}</p>
                <p className="text-xs text-primary-600">📍 {t(`overseasResident.identity.items.${doc}.where`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Funds */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-700 mb-3">{t("overseasResident.funds.title")}</h3>
          <div className="space-y-3">
            {overseasFunds.map((doc) => (
              <div key={doc} className="content-box">
                <h4 className="font-semibold text-slate-800">{t(`overseasResident.funds.items.${doc}.name`)}</h4>
                <p className="text-sm text-slate-600 mb-1">{t(`overseasResident.funds.items.${doc}.desc`)}</p>
                <p className="text-xs text-primary-600">📍 {t(`overseasResident.funds.items.${doc}.where`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loan Documents */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">🏦 {t("loan.title")}</h2>
        <div className="space-y-3">
          {loanDocs.map((doc) => (
            <div key={doc} className="content-box">
              <h4 className="font-semibold text-slate-800">{t(`loan.items.${doc}.name`)}</h4>
              <p className="text-sm text-slate-600 mb-1">{t(`loan.items.${doc}.desc`)}</p>
              <p className="text-xs text-primary-600">📍 {t(`loan.items.${doc}.where`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">{common("point")}</h4>
        <ul className="space-y-1">
          {(t.raw("tips") as string[]).map((tip, i) => (
            <li key={i} className="flex items-start text-sm text-blue-700">
              <span className="mr-2">💡</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </ContentLayout>
  );
}
