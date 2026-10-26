import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#15191E] block mb-2 font-medium uppercase tracking-wider">Roofing services</span>
          <h2 className="font-display text-33 md:text-41 text-[#15191E]">Roof repairs and guttering for your home</h2>
        </AnimateOnScroll>
        <div className="flex flex-col space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#15191E] uppercase tracking-wider block mb-2 font-medium">Roof repairs</span>
              <h3 className="font-display text-26 md:text-33 text-[#15191E] mb-4">Roof repairs with care</h3>
              <p className="font-body text-15 md:text-17 text-[#15191E]/80 leading-relaxed mb-6">Joe and his team investigate leaks and roof damage, then explain the repair options.</p>
              <div className="p-4 bg-[#F3F5F7] border-l-4 border-[#FF4B0B] mb-6 rounded-sm"><span className="font-body text-13 text-[#15191E]/80"><strong className="text-[#15191E] font-semibold">Before work begins:</strong> Review the quote, scope and timing with Joe.</span></div>
              <Button href="/roof-repairs/" variant="ghost" size="md">Explore roof repairs</Button>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/roof-repair.png" alt="Roof repair work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /></div>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6"><div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/roofb3-1.jpg" alt="Guttering and downpipes" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#15191E] uppercase tracking-wider block mb-2 font-medium">Roof repairs</span>
              <h3 className="font-display text-26 md:text-33 text-[#15191E] mb-4">Guttering and downpipes</h3>
              <p className="font-body text-15 md:text-17 text-[#15191E]/80 leading-relaxed mb-6">Gutter repairs, replacement and downpipes help move rainwater away from your home.</p>
              <div className="p-4 bg-[#F3F5F7] border-l-4 border-[#FF4B0B] mb-6 rounded-sm"><span className="font-body text-13 text-[#15191E]/80"><strong className="text-[#15191E] font-semibold">Ask Joe:</strong> Discuss gutter options, the quote and next steps.</span></div>
              <Button href="/guttering-downpipes/" variant="ghost" size="md">Explore guttering</Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}









