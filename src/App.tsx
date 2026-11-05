import { useState, useEffect, useRef } from 'react';

const slides = [
  { id: 0, label: 'Intro' },
  { id: 1, label: 'User' },
  { id: 2, label: 'Need' },
  { id: 3, label: 'Features' },
  { id: 4, label: 'Why AI' },
];

function SlideIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <a
          key={i}
          href={`#slide-${i}`}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-500 border border-amber-400/40 ${
            i === current
              ? 'bg-amber-400 scale-125 shadow-lg shadow-amber-400/30'
              : 'bg-transparent hover:bg-amber-400/30'
          }`}
          title={slides[i].label}
        />
      ))}
    </div>
  );
}

function SlideHero() {
  return (
    <section
      id="slide-0"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0f05] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(245,158,11,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(217,119,6,0.06),transparent_50%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-orange-500/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-300/80 text-sm font-medium tracking-wide">Product Concept — 5-Slide Deck</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            VibeScout
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-amber-100/60 font-light max-w-2xl mx-auto leading-relaxed mb-6">
          An AI agent that curates workspaces, cafes & short-term rentals based on your{' '}
          <span className="text-amber-300 font-medium">aesthetic DNA</span> — not just WiFi speed and price.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm text-amber-100/40">
          <span className="px-3 py-1 rounded-full border border-amber-400/10 bg-amber-400/5">Workspaces</span>
          <span className="px-3 py-1 rounded-full border border-amber-400/10 bg-amber-400/5">Cafes</span>
          <span className="px-3 py-1 rounded-full border border-amber-400/10 bg-amber-400/5">Short-term Rentals</span>
        </div>

        <p className="mt-16 text-amber-100/30 text-sm animate-bounce">↓ Scroll to explore</p>
      </div>
    </section>
  );
}

function SlideUser() {
  return (
    <section
      id="slide-1"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(245,158,11,0.04),transparent_70%)]" />

      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-amber-400/60 text-sm font-mono">01</span>
          <div className="h-px flex-1 bg-gradient-to-r from-amber-400/20 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-3">Target User</h2>
        <p className="text-amber-100/50 text-lg mb-12 max-w-2xl">
          Who needs aesthetic-aware space curation?
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="group p-6 rounded-2xl border border-amber-400/10 bg-amber-400/[0.02] hover:bg-amber-400/[0.05] transition-all duration-300">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">International Students</h3>
            <p className="text-amber-100/50 text-sm leading-relaxed">
              New to a city, seeking spaces that feel like home — or an exciting new chapter. Need both focus zones and exploration energy.
            </p>
          </div>
          <div className="group p-6 rounded-2xl border border-amber-400/10 bg-amber-400/[0.02] hover:bg-amber-400/[0.05] transition-all duration-300">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">Remote Workers</h3>
            <p className="text-amber-100/50 text-sm leading-relaxed">
              Freelancers & digital nomads who know that <em>where</em> you work shapes <em>how</em> you think. Environment is productivity.
            </p>
          </div>
          <div className="group p-6 rounded-2xl border border-amber-400/10 bg-amber-400/[0.02] hover:bg-amber-400/[0.05] transition-all duration-300">
            <div className="text-3xl mb-4">🎒</div>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">Digital Nomads</h3>
            <p className="text-amber-100/50 text-sm leading-relaxed">
              Always arriving somewhere new. Need to quickly find spaces that match their creative rhythm — not just "has WiFi."
            </p>
          </div>
        </div>

        {/* Persona card */}
        <div className="rounded-2xl border border-amber-400/15 bg-gradient-to-br from-amber-400/[0.04] to-transparent p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-lg font-bold text-black">
              T
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-200">Persona: Tarun</h3>
              <p className="text-amber-100/50 text-sm">18–24 · Indian · International student in Italy</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-amber-300/80 text-xs font-mono uppercase tracking-wider mb-3">Loves</h4>
              <ul className="space-y-2 text-sm text-amber-100/60">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">◆</span>
                  Immersive games (RDR2, PUBG) — worlds with atmosphere
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">◆</span>
                  Queen music — theatrical, layered, emotional
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">◆</span>
                  MrBeast videos — high-energy spectacle
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-300/80 text-xs font-mono uppercase tracking-wider mb-3">Aesthetic Tension</h4>
              <ul className="space-y-2 text-sm text-amber-100/60">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">◈</span>
                  <span><strong className="text-amber-200">Cozy:</strong> "Peaceful living rooms," "libraries full of books telling stories"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">◈</span>
                  <span><strong className="text-amber-200">Vibrant:</strong> "Busy hustling streets in Shanghai," "new things in China"</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-amber-400/10">
            <p className="text-amber-100/70 text-sm italic">
              "He wants spaces that feel cozy and story-driven for deep focus — but located in neighborhoods with vibrant street energy for when he wants to explore."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideNeed() {
  return (
    <section
      id="slide-2"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0805] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(239,68,68,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-amber-400/60 text-sm font-mono">02</span>
          <div className="h-px flex-1 bg-gradient-to-r from-amber-400/20 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-3">The Unmet Need</h2>
        <p className="text-amber-100/50 text-lg mb-12 max-w-2xl">
          Why existing solutions fail people like Tarun.
        </p>

        {/* The problem */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-red-400/80 text-xs font-mono uppercase tracking-wider">❌ What exists today</h3>
            <div className="space-y-3">
              {['Airbnb', 'WeWork', 'Google Maps', 'Couchsurfing'].map((app) => (
                <div key={app} className="flex items-center gap-3 p-3 rounded-lg bg-red-500/[0.03] border border-red-400/10">
                  <span className="text-red-400/60 text-xs">✕</span>
                  <span className="text-amber-100/60 text-sm">{app}</span>
                  <span className="text-amber-100/30 text-xs ml-auto">filters by: price, location, amenities</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-amber-400/80 text-xs font-mono uppercase tracking-wider">✦ What's missing</h3>
            <div className="space-y-3">
              {[
                'How a space *feels* when you walk in',
                'Whether the light matches your mood',
                'If the neighborhood energy matches your rhythm',
                'Whether a space tells a story you connect with',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-amber-500/[0.03] border border-amber-400/10">
                  <span className="text-amber-400 text-xs">◆</span>
                  <span className="text-amber-100/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core insight */}
        <div className="rounded-2xl border border-amber-400/15 bg-gradient-to-br from-amber-400/[0.04] to-transparent p-8">
          <h3 className="text-amber-300/80 text-xs font-mono uppercase tracking-wider mb-4">Core Insight</h3>
          <p className="text-xl md:text-2xl text-amber-100/80 leading-relaxed font-light">
            People don't choose spaces by specs. They choose by{' '}
            <span className="text-amber-300 font-medium">emotional resonance</span>.
          </p>
          <p className="text-amber-100/50 mt-4 text-sm leading-relaxed">
            A ₹500/hr cafe with warm wood, jazz playing softly, and rain on the windows will outperform a sterile ₹200/hr co-working space every time — for someone like Tarun. But no app captures this.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center p-4 rounded-xl border border-amber-400/10">
            <div className="text-2xl md:text-3xl font-bold text-amber-300">73%</div>
            <div className="text-xs text-amber-100/40 mt-1">of remote workers say environment affects focus</div>
          </div>
          <div className="text-center p-4 rounded-xl border border-amber-400/10">
            <div className="text-2xl md:text-3xl font-bold text-amber-300">0</div>
            <div className="text-xs text-amber-100/40 mt-1">apps that filter by aesthetic or vibe</div>
          </div>
          <div className="text-center p-4 rounded-xl border border-amber-400/10">
            <div className="text-2xl md:text-3xl font-bold text-amber-300">∞</div>
            <div className="text-xs text-amber-100/40 mt-1">photos on listings with no emotional context</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideFeatures() {
  return (
    <section
      id="slide-3"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(245,158,11,0.05),transparent_60%)]" />

      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-amber-400/60 text-sm font-mono">03</span>
          <div className="h-px flex-1 bg-gradient-to-r from-amber-400/20 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-3">Core Features</h2>
        <p className="text-amber-100/50 text-lg mb-12 max-w-2xl">
          Three pillars that make VibeScout fundamentally different.
        </p>

        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="group rounded-2xl border border-amber-400/10 bg-gradient-to-r from-amber-400/[0.03] to-transparent p-8 hover:border-amber-400/20 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/10 flex items-center justify-center border border-amber-400/20">
                <span className="text-2xl">🧬</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-amber-200">Aesthetic DNA Profiling</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">Core</span>
                </div>
                <p className="text-amber-100/60 text-sm leading-relaxed mb-4">
                  Users swipe through curated images (spaces, streets, interiors, moods). The AI maps preferences across dimensions: <em>warmth, density, nostalgia, energy, nature, story</em>. No two users share the same DNA.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Warmth', 'Density', 'Nostalgia', 'Energy', 'Nature', 'Story'].map((dim) => (
                    <span key={dim} className="text-xs px-2 py-1 rounded-md bg-amber-400/5 text-amber-300/60 border border-amber-400/10">
                      {dim}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group rounded-2xl border border-amber-400/10 bg-gradient-to-r from-amber-400/[0.03] to-transparent p-8 hover:border-amber-400/20 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/10 flex items-center justify-center border border-amber-400/20">
                <span className="text-2xl">💬</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-amber-200">Natural Language Intent Search</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">Core</span>
                </div>
                <p className="text-amber-100/60 text-sm leading-relaxed mb-4">
                  Instead of filters, users describe what they want in their own words. The AI understands context, mood, and contradictions.
                </p>
                <div className="bg-black/30 rounded-lg p-4 border border-amber-400/10 font-mono text-sm">
                  <p className="text-amber-100/40 text-xs mb-2">User query:</p>
                  <p className="text-amber-200/80 italic">
                    "Somewhere cozy with books and warm light for deep work, but on a street where I can step out and feel alive"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group rounded-2xl border border-amber-400/10 bg-gradient-to-r from-amber-400/[0.03] to-transparent p-8 hover:border-amber-400/20 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/10 flex items-center justify-center border border-amber-400/20">
                <span className="text-2xl">✨</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-amber-200">Vibe-Matched Recommendations + AI Rationale</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">Core</span>
                </div>
                <p className="text-amber-100/60 text-sm leading-relaxed mb-4">
                  Every recommendation comes with an AI-generated explanation of <em>why</em> this space matches your vibe — making the invisible visible.
                </p>
                <div className="bg-black/30 rounded-lg p-4 border border-amber-400/10">
                  <p className="text-amber-100/40 text-xs mb-2">AI rationale example:</p>
                  <p className="text-amber-200/70 text-sm leading-relaxed">
                    "Matched 87% — This cafe has the warm wood tones and book-lined walls you gravitate toward (cozy DNA), while being on Via Torino — Milan's most vibrant student street, giving you that Shanghai-street energy when you need a break."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideWhyAI() {
  return (
    <section
      id="slide-4"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0805] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(245,158,11,0.06),transparent_50%)]" />

      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-amber-400/60 text-sm font-mono">04</span>
          <div className="h-px flex-1 bg-gradient-to-r from-amber-400/20 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-3">Why an Aesthetic-Aware AI Agent?</h2>
        <p className="text-amber-100/50 text-lg mb-12 max-w-2xl">
          Why this can't just be a normal search app with better filters.
        </p>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl border border-red-400/10 bg-red-400/[0.02] p-6">
            <h3 className="text-red-400/80 text-xs font-mono uppercase tracking-wider mb-4">Normal Search App</h3>
            <ul className="space-y-3 text-sm text-amber-100/50">
              <li className="flex items-start gap-2">
                <span className="text-red-400/60 mt-0.5">→</span>
                Requires predefined categories (filters can't capture "cozy but vibrant")
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400/60 mt-0.5">→</span>
                Can't understand contradictions or nuance in human desire
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400/60 mt-0.5">→</span>
                Treats all users the same — no personalization beyond past bookings
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400/60 mt-0.5">→</span>
                No explanation for why a result was shown
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-400/15 bg-amber-400/[0.03] p-6">
            <h3 className="text-amber-400/80 text-xs font-mono uppercase tracking-wider mb-4">VibeScout (AI Agent)</h3>
            <ul className="space-y-3 text-sm text-amber-100/70">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">→</span>
                Maps continuous aesthetic dimensions — handles contradictions natively
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">→</span>
                Understands "cozy for work, vibrant for breaks" as a single coherent need
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">→</span>
                Each user has a unique aesthetic DNA that evolves over time
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">→</span>
                Explains every match: "This space fits because…"
              </li>
            </ul>
          </div>
        </div>

        {/* Key differentiators */}
        <div className="rounded-2xl border border-amber-400/15 bg-gradient-to-br from-amber-400/[0.04] to-transparent p-8 mb-8">
          <h3 className="text-amber-300/80 text-xs font-mono uppercase tracking-wider mb-6">The AI Advantage</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="text-amber-200 font-medium text-sm mb-1">Contextual Understanding</h4>
              <p className="text-amber-100/50 text-xs leading-relaxed">
                AI reads between the lines. "I like RDR2" → understands preference for immersive, atmospheric, story-rich environments.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="text-amber-200 font-medium text-sm mb-1">Adaptive Learning</h4>
              <p className="text-amber-100/50 text-xs leading-relaxed">
                Your DNA evolves. Monday you want library silence; Friday you want neon-lit energy. VibeScout adapts to your rhythm.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🌐</div>
              <h4 className="text-amber-200 font-medium text-sm mb-1">Cross-Cultural Sensitivity</h4>
              <p className="text-amber-100/50 text-xs leading-relaxed">
                An international student in Italy has different aesthetic references than a local. AI bridges cultural context gaps.
              </p>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="text-center">
          <p className="text-xl md:text-2xl text-amber-100/70 font-light max-w-3xl mx-auto leading-relaxed">
            A search app gives you <span className="text-amber-300">results</span>.
            <br />
            VibeScout gives you <span className="text-amber-300">a place that feels like yours</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id^="slide-"]');
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const el = section as HTMLElement;
        if (el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setCurrentSlide(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] text-white font-sans selection:bg-amber-400/20 selection:text-amber-200">
      <SlideIndicator current={currentSlide} total={5} />
      <SlideHero />
      <SlideUser />
      <SlideNeed />
      <SlideFeatures />
      <SlideWhyAI />

      {/* Footer */}
      <footer className="py-12 text-center border-t border-amber-400/10">
        <p className="text-amber-100/30 text-sm">
          VibeScout — Product Concept Deck · Designed for people who choose spaces by feeling, not filters.
        </p>
      </footer>
    </div>
  );
}
