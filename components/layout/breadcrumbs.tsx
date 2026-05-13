import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/content/types";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="pb-8 mb-0">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.href}-${item.name}`} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden className="text-slate-300">/</span> : null}
              {isLast ? (
                <span className="font-medium text-slate-200 text-xs">{item.name}</span>
              ) : (
                <Link href={item.href} className="text-slate-300  text-xs hover:text-slate-100 underline-offset-4 hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
