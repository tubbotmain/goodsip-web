import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-900 font-sans selection:bg-orange-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-8 md:px-12 lg:px-24">
        <div className="text-2xl font-bold tracking-tighter">
          GOODSIP<span className="text-orange-500">.</span>
        </div>
        <div className="hidden space-x-8 text-sm font-medium uppercase tracking-widest md:flex">
          <Link href="#about" className="hover:text-orange-500 transition-colors">Experience</Link>
          <Link href="#philosophy" className="hover:text-orange-500 transition-colors">Philosophy</Link>
          <Link href="#contact" className="hover:text-orange-500 transition-colors">Join Us</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center md:px-12 lg:px-24">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            Build wisdom, <br />
            <span className="text-orange-500 italic font-serif">one sip at a time.</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-stone-600 md:text-xl leading-relaxed">
            Wine education for the rest of us. We help the average drinker build 
            wisdom through experience, not academics. No jargon, just better choices.
          </p>

          <div className="pt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link 
              href="https://instagram.com/goodsip.wine" 
              className="flex h-14 w-full items-center justify-center rounded-full bg-stone-900 px-8 text-lg font-medium text-stone-50 transition-all hover:bg-orange-600 sm:w-auto"
            >
              Follow our Journey
            </Link>
            <Link 
              href="#waitlist" 
              className="flex h-14 w-full items-center justify-center rounded-full border-2 border-stone-900 px-8 text-lg font-medium transition-all hover:bg-stone-100 sm:w-auto"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </main>

      {/* Value Prop / Instagram Hook */}
      <section className="bg-stone-900 py-24 text-stone-50">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6 text-left">
              <h2 className="text-3xl font-bold md:text-5xl leading-tight text-stone-50">
                Taste-first education. <br />
                <span className="text-orange-400">Demystified.</span>
              </h2>
              <p className="text-lg text-stone-400 leading-relaxed">
                Ever wondered what &quot;mineral&quot; actually tastes like? Or why tannins matter? 
                We skip the snobbery and focus on side-by-side experiences that actually teach your palate.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="h-1 w-12 bg-orange-500"></div>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                  Coming soon to Vancouver
                </span>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl bg-stone-800 overflow-hidden border border-stone-700">
               <div className="absolute inset-0 flex items-center justify-center text-stone-500 italic">
                [ Reels Placeholder: WTF is Mineral? ]
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-12 px-6 text-center text-stone-500">
        <p className="text-sm tracking-wide">
          &copy; 2026 GOODSIP.WINE — Experience, distilled.
        </p>
      </footer>
    </div>
  );
}
