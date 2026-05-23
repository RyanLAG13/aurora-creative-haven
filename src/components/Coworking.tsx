import { Check, Wifi, Users, Coffee, Snowflake, Printer, Calendar } from "lucide-react";

const features = [
  { icon: Wifi, label: "Internet 1GB fibra dedicada" },
  { icon: Snowflake, label: "Ambiente climatizado" },
  { icon: Users, label: "Salas de reunião privadas" },
  { icon: Coffee, label: "Café ilimitado" },
  { icon: Printer, label: "Impressão e scanner" },
  { icon: Calendar, label: "Eventos exclusivos" },
];

const plans = [
  {
    name: "Day Pass",
    price: "49",
    period: "/dia",
    desc: "Perfeito para experimentar o espaço.",
    features: ["Mesa compartilhada", "Wi-Fi 1GB", "Café ilimitado", "1 hora de sala de reunião"],
    cta: "Reservar dia",
    featured: false,
  },
  {
    name: "Flex",
    price: "590",
    period: "/mês",
    desc: "Para quem trabalha aqui algumas vezes na semana.",
    features: ["Mesa compartilhada", "Acesso 10 dias/mês", "5h sala de reunião", "Café e brunch incluso", "Locker pessoal"],
    cta: "Assinar Flex",
    featured: true,
  },
  {
    name: "Dedicado",
    price: "1.290",
    period: "/mês",
    desc: "Seu lugar fixo, todos os dias.",
    features: ["Mesa fixa 24/7", "15h sala de reunião", "Café e brunch ilimitado", "Endereço fiscal", "Convites para eventos"],
    cta: "Quero ser membro",
    featured: false,
  },
];

export function Coworking() {
  return (
    <section id="coworking" className="py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              · Coworking
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
              Um lugar para <span className="italic font-light text-accent">criar</span>, todos os dias.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground">
            Planos flexíveis para freelancers, estudantes e times pequenos.
            Tudo o que você precisa para produzir bem — sem abrir mão do conforto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-4 hover:border-olive/60 transition-colors"
            >
              <span
                className="w-9 h-9 rounded-xl grid place-items-center"
                style={{ backgroundColor: "color-mix(in oklab, var(--olive) 18%, transparent)", color: "var(--olive)" }}
              >
                <f.icon className="w-4.5 h-4.5" strokeWidth={2} />
              </span>
              <span className="text-sm font-medium">{f.label}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 lg:p-9 flex flex-col transition-all hover:-translate-y-1 ${
                p.featured
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] lg:scale-[1.03]"
                  : "bg-card text-card-foreground border border-border hover:shadow-[var(--shadow-soft)]"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full">
                  Mais popular
                </span>
              )}
              <div className="mb-2 text-sm uppercase tracking-wider opacity-70">{p.name}</div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-xl font-display opacity-70">R$</span>
                <span className="text-5xl font-display font-bold">{p.price}</span>
                <span className="opacity-70 text-sm">{p.period}</span>
              </div>
              <p className={`text-sm mb-7 ${p.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.featured ? "text-accent" : "text-olive"}`} strokeWidth={3} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  p.featured
                    ? "bg-accent text-accent-foreground hover:shadow-xl"
                    : "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
