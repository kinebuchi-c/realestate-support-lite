"use client";

import { Link } from "@/i18n/routing";
import { ReactNode } from "react";

interface CategoryCardProps {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

const colorClasses: Record<string, { bg: string; icon: string }> = {
  blue: { bg: "bg-blue-100", icon: "text-blue-600" },
  green: { bg: "bg-green-100", icon: "text-green-600" },
  purple: { bg: "bg-purple-100", icon: "text-purple-600" },
  orange: { bg: "bg-orange-100", icon: "text-orange-600" },
  red: { bg: "bg-red-100", icon: "text-red-600" },
};

export default function CategoryCard({
  href,
  title,
  description,
  icon,
  color,
}: CategoryCardProps) {
  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <Link href={href} className="block">
      <div className="card hover:border-primary-300 group cursor-pointer h-full">
        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-3`}>
          <span className={colors.icon}>{icon}</span>
        </div>
        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-primary-600 transition-colors mb-1">
          {title}
        </h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </Link>
  );
}
