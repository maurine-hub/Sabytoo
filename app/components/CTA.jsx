export default function CTA() {
  return (
    <section className="absolute -translate-y-3/4 translate-x-48">
      <div className="container mx-auto max-w-6xl bg-[#3b7ab7] rounded-lg px-16 py-6">
        <div className="flex text-white items-center justify-evenly">
          <div>
            <p className="text-sm font-medium mb-2">TRY IT NOW</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to level up your<br />
              payment process?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Supports small businesses with simple invoicing, powerful<br />
              integrations, and cash flow management tools.
            </p>
          </div>

          <div className="h-10 flex flex-wrap gap-4">
            <button className="bg-orange-600 hover:bg-orange-600/90 text-white px-8 py-3 rounded-lg transition-all">
              Get Started Now
            </button>
            <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg transition-all flex items-center">
              Download Now
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}