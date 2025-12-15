import { useTranslations } from "next-intl";
import ContentLayout from "@/components/ContentLayout";

export default function RentalDocumentsPage() {
  const t = useTranslations("rental.documents");
  const common = useTranslations("common");

  const basicDocs = ["residenceCard", "passport", "certificate"] as const;
  const incomeDocs = ["employment", "payslip", "taxCertificate", "bankStatement"] as const;
  const studentDocs = ["studentId", "enrollment", "sponsor"] as const;
  const otherDocs = ["seal", "photo", "emergency"] as const;

  return (
    <ContentLayout
      backHref="/rental"
      backLabel={useTranslations("rental")("title")}
      title={t("title")}
    >
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-8">
        <p className="text-primary-800 font-medium">{t("conclusion")}</p>
      </div>

      {/* Basic Documents */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">{t("basic.title")}</h2>
        <div className="space-y-3">
          {basicDocs.map((doc) => (
            <div key={doc} className="content-box">
              <h3 className="font-semibold text-slate-800">{t(`basic.items.${doc}.name`)}</h3>
              <p className="text-sm text-slate-600 mb-1">{t(`basic.items.${doc}.desc`)}</p>
              <p className="text-xs text-primary-600">📍 {t(`basic.items.${doc}.where`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Income Documents */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">{t("income.title")}</h2>
        <div className="space-y-3">
          {incomeDocs.map((doc) => (
            <div key={doc} className="content-box">
              <h3 className="font-semibold text-slate-800">{t(`income.items.${doc}.name`)}</h3>
              <p className="text-sm text-slate-600 mb-1">{t(`income.items.${doc}.desc`)}</p>
              <p className="text-xs text-primary-600">📍 {t(`income.items.${doc}.where`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Student Documents */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">{t("student.title")}</h2>
        <div className="space-y-3">
          {studentDocs.map((doc) => (
            <div key={doc} className="content-box">
              <h3 className="font-semibold text-slate-800">{t(`student.items.${doc}.name`)}</h3>
              <p className="text-sm text-slate-600 mb-1">{t(`student.items.${doc}.desc`)}</p>
              <p className="text-xs text-primary-600">📍 {t(`student.items.${doc}.where`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Other Documents */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">{t("other.title")}</h2>
        <div className="space-y-3">
          {otherDocs.map((doc) => (
            <div key={doc} className="content-box">
              <h3 className="font-semibold text-slate-800">{t(`other.items.${doc}.name`)}</h3>
              <p className="text-sm text-slate-600 mb-1">{t(`other.items.${doc}.desc`)}</p>
              <p className="text-xs text-primary-600">📍 {t(`other.items.${doc}.where`)}</p>
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
