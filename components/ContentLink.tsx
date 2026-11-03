import React from "react";
import Link from "next/link";
import { ExternalLink as ExtIcon } from "lucide-react";

interface ContentLinkProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
}

export function ContentLink({ href, children, isExternal = false, className = "" }: ContentLinkProps) {
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`content-link external-link font-semibold text-teal-600 underline decoration-teal-400 underline-offset-4 hover:text-teal-800 hover:decoration-teal-800 transition-all duration-200 inline-flex items-center gap-1 ${className}`}
      >
        <span>{children}</span>
        <ExtIcon className="w-3.5 h-3.5 inline-block opacity-75" />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`content-link font-semibold text-sky-600 underline decoration-sky-400 underline-offset-4 hover:text-amber-600 hover:decoration-amber-500 transition-all duration-200 inline-flex items-center ${className}`}
    >
      <span>{children}</span>
    </Link>
  );
}
