import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] text-[#333] font-sans">
      <header className="p-6 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-2xl font-serif tracking-wide">EZdesigns</h1>
        <nav className="space-x-4">
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="px-8 py-20 text-center bg-white">
        <motion.h2 
          className="text-4xl md:text-6xl font-serif mb-4"
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Timeless Interiors, Modern Touch
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          At EZdesigns, we transform spaces into elegant, personalized sanctuaries.
        </p>
        <Button className="bg-[#C5A880] text-white hover:bg-[#b2946d]">Explore Portfolio</Button>
      </section>

      <section id="portfolio" className="px-8 py-16">
        <h3 className="text-3xl font-serif mb-6">Portfolio</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={`https://source.unsplash.com/featured/?interior,design,room,${i}`} 
                  alt="Project" 
                  className="w-full h-60 object-cover" 
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="px-8 py-16 bg-[#fff]">
        <h3 className="text-3xl font-serif mb-6">Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Residential Design", desc: "Custom home interiors tailored to your lifestyle." },
            { title: "Commercial Spaces", desc: "Transforming offices and retail into inspiring environments." },
            { title: "Consultation", desc: "One-on-one guidance for your interior needs." }
          ].map((service, i) => (
            <Card key={i} className="bg-[#F5F5F0]">
              <CardContent className="p-4">
                <h4 className="font-serif text-xl mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="px-8 py-16">
        <h3 className="text-3xl font-serif mb-6">About</h3>
        <p className="max-w-3xl text-gray-700 leading-relaxed">
          Founded by a passion for refined aesthetics and functional design, EZdesigns brings vision to life.
          With years of experience and a commitment to excellence, our team curates interiors that reflect your personality and needs.
        </p>
      </section>

      <section id="contact" className="px-8 py-16 bg-white">
        <h3 className="text-3xl font-serif mb-6">Contact</h3>
        <form className="grid gap-4 max-w-xl">
          <input type="text" placeholder="Name" className="p-2 border rounded" />
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <textarea placeholder="Message" rows={4} className="p-2 border rounded"></textarea>
          <Button className="bg-[#C5A880] text-white hover:bg-[#b2946d]">Send Message</Button>
        </form>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EZdesigns. All rights reserved.
      </footer>
    </main>
  );
}
