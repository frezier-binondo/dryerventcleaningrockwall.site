import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  Flame,
  Phone,
} from "lucide-react";
import { COMPANY, BLOG_POSTS, SERVICES, LOCATIONS } from "@/lib/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { ContentLink } from "@/components/ContentLink";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [post.image],
    datePublished: "2026-10-15T08:00:00+08:00",
    dateModified: "2026-11-01T08:00:00+08:00",
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: "https://dryerventcleaningrockwall.site",
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: "https://dryerventcleaningrockwall.site/favicon.ico",
      },
    },
    description: post.metaDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold mb-4 border border-sky-500/30">
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-6">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-sky-400" />
              <span>{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{post.publishDate}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Article Body Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Article Content */}
            <article className="lg:col-span-8 space-y-8 prose-content text-slate-700 leading-relaxed text-base sm:text-lg">
              {/* Featured Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg mb-8 border border-slate-200">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
              </div>

              {/* Direct Answer / Featured Snippet Box */}
              <div className="p-6 bg-sky-50/80 rounded-3xl border border-sky-200 not-prose">
                <div className="text-xs font-black uppercase text-sky-900 tracking-wider mb-2">
                  Key Takeaway / Direct Answer
                </div>
                <p className="text-slate-800 text-base leading-relaxed font-medium">
                  {post.excerpt}
                </p>
              </div>

              {/* Dynamic Content Sections */}
              {post.contentSections.map((sec, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                    {sec.heading}
                  </h2>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="mb-4">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {/* Internal Links & External Citation Box */}
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 not-prose my-8">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Related Services &amp; Fire Safety Resources
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Explore other related pages across our Rockwall dryer vent silo:
                </p>
                <div className="flex flex-wrap gap-3">
                  {post.internalLinks.map((link, idx) => (
                    <ContentLink key={idx} href={link.url} className="text-sm">
                      {link.text}
                    </ContentLink>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold">Authoritative Source:</span>
                  <ContentLink href={post.externalLink.url} isExternal>
                    {post.externalLink.text}
                  </ContentLink>
                </div>
              </div>

              {/* Article FAQs */}
              <div className="not-prose pt-6 border-t border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {post.faqs.map((f, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-sky-600 shrink-0 mt-1" />
                        <span>{f.q}</span>
                      </h4>
                      <p className="text-sm text-slate-600 pl-6 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                <LeadForm
                  compact
                  title="Schedule Dryer Vent Cleaning"
                  subtitle="Serving Rockwall & all surrounding areas."
                />

                <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800">
                  <h4 className="text-base font-bold mb-3 flex items-center gap-2 text-amber-400">
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Need Immediate Help?</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Call our local technicians now for instant advice or same-day scheduling.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-center block text-sm shadow-md transition-colors"
                  >
                    {COMPANY.phoneFormatted}
                  </a>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
                    Other Helpful Articles
                  </h4>
                  <ul className="space-y-3 text-xs">
                    {BLOG_POSTS.filter((p) => p.slug !== post.slug)
                      .slice(0, 4)
                      .map((p) => (
                        <li key={p.slug}>
                          <Link href={`/blog/${p.slug}`} className="hover:text-sky-600 font-semibold line-clamp-2">
                            {p.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
