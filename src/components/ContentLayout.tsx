"use client";

import { Link } from "@/i18n/routing";
import { ReactNode } from "react";

interface ContentLayoutProps {
  backHref: string;
  backLabel: string;
  title: string;
  children: ReactNode;
}

export default function ContentLayout({
  backHref,
  backLabel,
  title,
  children,
}: ContentLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <Link href={backHref} className="text-primary-600 hover:underline text-sm">
          &larr; {backLabel}
        </Link>
      </div>

      <h1 className="section-title text-3xl mb-6">{title}</h1>

      {children}
    </div>
  );
}
