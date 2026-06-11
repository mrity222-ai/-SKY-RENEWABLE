import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const posts = [
    {
      title: "PM-Suryodaya Yojana: Complete Subsidy Guide 2024",
      excerpt: "Everything you need to know about the latest rooftop solar subsidy scheme in India.",
      image: "https://picsum.photos/seed/arka_b1/800/600",
      date: "Oct 24, 2024",
      author: "Arkā Editorial"
    },
    {
      title: "Monocrystalline vs Polycrystalline: Which is best for you?",
      excerpt: "A technical deep dive into panel types and which one offers better efficiency for Indian summers.",
      image: "https://picsum.photos/seed/arka_b2/800/600",
      date: "Oct 12, 2024",
      author: "Engr. Rajesh K."
    },
    {
      title: "How to maintain your solar panels during monsoon?",
      excerpt: "Essential tips to keep your generation high even when the sun is hiding behind clouds.",
      image: "https://picsum.photos/seed/arka_b3/800/600",
      date: "Sept 28, 2024",
      author: "Maintenance Team"
    }
  ];

  return (
    <div className="bg-white">
      <section className="py-24 md:py-32 bg-primary text-white text-center">
        <div className="container mx-auto px-4 space-y-6">
          <h1 className="text-[30px] md:text-[44px] lg:text-[52px] font-bold font-headline">Solar <span className="text-accent">Knowledge Hub</span></h1>
          <p className="text-[15px] md:text-[17px] text-white/70 max-w-2xl mx-auto">Stay updated with the latest trends, policy changes, and maintenance tips in the world of solar energy.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <article key={i} className="group flex flex-col space-y-6">
                <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-xl">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform group-hover:scale-105 duration-500" />
                </div>
                <div className="flex gap-6 text-[11px] text-muted-foreground uppercase font-bold tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar className="size-3" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="size-3" /> {post.author}</span>
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold font-headline text-primary group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <Button variant="link" className="p-0 text-primary font-bold justify-start group-hover:gap-2 transition-all h-auto text-[14px]">
                  Read Article <ArrowRight className="ml-2 size-4" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}