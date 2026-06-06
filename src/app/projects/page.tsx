
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  const projects = [
    { title: "Residential Rooftop", location: "Ahmedabad", size: "5 kW", type: "Residential", image: "https://picsum.photos/seed/arka_p1/800/600" },
    { title: "Industrial Solar Farm", location: "Sanand", size: "250 kW", type: "Industrial", image: "https://picsum.photos/seed/arka_p2/800/600" },
    { title: "Cooperative Housing", location: "Surat", size: "50 kW", type: "Commercial", image: "https://picsum.photos/seed/arka_p3/800/600" },
    { title: "Textile Mill", location: "Vapi", size: "100 kW", type: "Industrial", image: "https://picsum.photos/seed/arka_p4/800/600" },
    { title: "Modern Villa", location: "Vadodara", size: "10 kW", type: "Residential", image: "https://picsum.photos/seed/arka_p5/800/600" },
    { title: "Hospital Setup", location: "Rajkot", size: "30 kW", type: "Commercial", image: "https://picsum.photos/seed/arka_p6/800/600" },
  ];

  return (
    <div className="bg-white">
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold font-headline">Our <span className="text-accent">Portfolio</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Take a look at some of our successful installations across residential and industrial sectors.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button className="rounded-full px-8 bg-accent text-primary font-bold">All Projects</Button>
            <Button variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary/5">Residential</Button>
            <Button variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary/5">Commercial</Button>
            <Button variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary/5">Industrial</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative rounded-[40px] overflow-hidden aspect-[4/3] shadow-lg">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-110 duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Badge className="w-fit mb-3 bg-accent text-primary font-bold">{project.type}</Badge>
                  <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
                  <div className="flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm opacity-80">{project.location}</span>
                    <span className="text-lg font-bold text-accent">{project.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
