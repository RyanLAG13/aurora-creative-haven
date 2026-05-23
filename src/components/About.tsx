import { Coffee, Users, Wifi, Heart } from "lucide-react";

const values = [
  { icon: Coffee, title: "Café Artesanal", text: "Grãos selecionados de microlotes brasileiros, torrados semanalmente." },
  { icon: Users, title: "Comunidade", text: "Networking natural entre freelancers, estudantes e startups." },
  { icon: Wifi, title: "Produtividade", text: "Infraestrutura preparada para você trabalhar com conforto." },
  { icon: Heart, title: "Aconchego", text: "Ambiente pensado para se sentir em casa por horas — ou o dia todo." },
];

export function About() {
  return (
    <section id="sobre" className="py-28 lg:py-36 relative">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              · Sobre nós
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
              Onde ideias <span className="italic font-light text-accent">germinam</span> com café fresco.
            </h2>
            <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
              O Aurora nasceu da vontade de criar um lugar onde a pausa para o café se
              transformasse em produtividade — e a produtividade em encontros. Um espaço
              híbrido para quem busca conforto, foco e boas conversas no mesmo ambiente.
            </p>
            <p className="mt-4 text-base lg:text-lg text-muted-foreground leading-relaxed">
              Aqui, freelancers, estudantes e startups dividem mesas, ideias e xícaras.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group rounded-3xl bg-card border border-border p-7 hover:border-accent/50 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary grid place-items-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <v.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
