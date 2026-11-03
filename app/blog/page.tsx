import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Flame,
  Phone,
  ShieldAlert,
} from "lucide-react";
import { COMPANY, BLOG_POSTS } from "@/lib/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentLink } from "@/components/ContentLink";

export const metadata: Metadata = {
  title: "Dryer Vent Cleaning Tips & Guides | Rockwall TX Blog",
  description:
    "Read dryer vent cleaning tips, safety guides and maintenance advice from Rockwall, TX dryer vent pros. Learn how to keep your dryer safe.",
};

export default function BlogHubPage() {
  const featuredPost = BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.slice(1);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-4 border border-amber-500/30">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Expert Knowledge &amp; Fire Prevention</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Dryer Vent Cleaning <span className="text-sky-400">Tips &amp; Guides</span>
            </h1>
            <p className="text-lg text-slate-300 mt-4 leading-relaxed font-normal">
              Essential fire safety advice, appliance efficiency guidelines, maintenance schedules, and practical troubleshooting from certified Rockwall, TX dryer exhaust professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Hub Longform Overview (500+ Words) */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl prose-content text-slate-700 leading-relaxed text-base sm:text-lg">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
              Your Guide to Safe and Efficient Home Laundry in Rockwall, TX
            </h2>
            <p>
              Welcome to the Dryer Vent Cleaning Rockwall knowledge hub. Our mission is not merely cleaning ductwork; it is empowering homeowners across Rockwall, Heath, Fate, Royse City, Rowlett, and Wylie with actionable fire prevention knowledge. Modern homes are marvels of energy efficiency, but tightly sealed building envelopes and second-story laundry placements create unique exhaust ventilation challenges that every family should understand.
            </p>
            <p className="mt-4">
              In this resource center, our technicians share field insights gained from servicing thousands of North Texas homes. You will find in-depth articles detailing the clear warning signs of hazardous lint blockages, comparisons between HVAC air duct cleaning and dedicated dryer exhaust cleaning, and seasonal guidance on preventing bird nests in exterior flapper vents.
            </p>
            <p className="mt-4">
              Regular maintenance is your strongest defense against appliance fires. If you have immediate concerns about your dryer taking multiple cycles or feeling scorching hot, explore our core{" "}
              <ContentLink href="/dryer-vent-cleaning">
                Dryer Vent Cleaning
              </ContentLink>{" "}
              service or reach out directly to our{" "}
              <ContentLink href="/contact">
                Contact
              </ContentLink>{" "}
              team for same-day dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-black uppercase tracking-wider text-amber-600 mb-3">
            ★ Featured Guide
          </div>
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[300px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">{featuredPost.publishDate}</span>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="font-extrabold text-amber-600 hover:text-amber-700 text-sm flex items-center gap-1.5"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              All Fire Safety &amp; Dryer Guides
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Browse our complete library of expert dryer vent maintenance articles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-sky-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[11px] font-bold">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.publishDate}</span>
                      <span>•</span>
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">By {post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-sky-600 group-hover:text-amber-600 flex items-center gap-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
