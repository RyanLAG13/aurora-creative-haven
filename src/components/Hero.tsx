import heroImg from "@/assets/hero-cafe.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior aconchegante do Aurora Café & Coworking"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/55 to-foreground/85" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-10 py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/15 backdrop-blur border border-cream/25 px-4 py-1.5 mb-7 animate-[fade-in_0.6s_ease-out]">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-medium tracking-wider uppercase text-cream">
              Café Premium · Coworking · Comunidade
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream leading-[1.02] animate-[fade-up_0.7s_ease-out]">
            Seu café,
            <br />
            seu escritório,
            <br />
            <span className="italic font-light text-accent">sua criatividade.</span>
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-cream/85 max-w-xl leading-relaxed animate-[fade-up_0.8s_ease-out_0.1s_both]">
            Um espaço híbrido onde o aroma do café artesanal encontra a produtividade.
            Reserve sua mesa, conecte-se e crie em um ambiente pensado para você.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-[fade-up_0.9s_ease-out_0.2s_both]">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:shadow-2xl transition-all"
            >
              Reservar Mesa
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/40 text-cream px-7 py-4 font-semibold backdrop-blur hover:bg-cream hover:text-primary transition-all"
            >
              Conhecer Espaço
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg animate-[fade-up_1s_ease-out_0.3s_both]">
            {[
              { n: "120+", l: "Lugares" },
              { n: "4", l: "Salas privadas" },
              { n: "1GB", l: "Wi-Fi fibra" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl lg:text-4xl font-display font-bold text-cream">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-cream/65 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cream/60 animate-[float_3s_ease-in-out_infinite]">
        <span className="text-[10px] uppercase tracking-[0.25em]">Role para descobrir</span>
        <div className="w-px h-10 bg-cream/40" />
      </div>
    </section>
  );
}
