import { useState } from "react";
import coffeeImg from "@/assets/menu-coffee.jpg";
import coldImg from "@/assets/menu-cold.jpg";
import brunchImg from "@/assets/menu-brunch.jpg";
import dessertImg from "@/assets/menu-dessert.jpg";

type Item = { name: string; desc: string; price: string };

const categories: Record<string, { image: string; items: Item[] }> = {
  Cafés: {
    image: coffeeImg,
    items: [
      { name: "Espresso Aurora", desc: "Blend exclusivo de grãos do cerrado mineiro", price: "R$ 9" },
      { name: "Latte Avelã", desc: "Espresso duplo, leite vaporizado e calda artesanal", price: "R$ 16" },
      { name: "Flat White", desc: "Microespuma sedosa sobre ristretto", price: "R$ 14" },
      { name: "Coado V60", desc: "Método filtrado, notas cítricas e florais", price: "R$ 13" },
    ],
  },
  "Bebidas Geladas": {
    image: coldImg,
    items: [
      { name: "Cold Brew 12h", desc: "Extração lenta a frio, suave e adocicado", price: "R$ 15" },
      { name: "Iced Latte Caramelo", desc: "Espresso gelado, leite e caramelo caseiro", price: "R$ 17" },
      { name: "Mocha Frappê", desc: "Café, cacau belga e leite batidos com gelo", price: "R$ 19" },
      { name: "Matcha Latte Gelado", desc: "Matcha cerimonial japonês com leite", price: "R$ 18" },
    ],
  },
  Brunch: {
    image: brunchImg,
    items: [
      { name: "Avocado Toast", desc: "Sourdough, abacate, ovo poché e pimenta rosa", price: "R$ 32" },
      { name: "Bowl Aurora", desc: "Granola, frutas da estação, mel e iogurte grego", price: "R$ 28" },
      { name: "Croque Madame", desc: "Pão brioche, queijo gruyère e presunto parma", price: "R$ 36" },
      { name: "Panqueca de Banana", desc: "Massa fofa, banana caramelizada e maple", price: "R$ 26" },
    ],
  },
  Sobremesas: {
    image: dessertImg,
    items: [
      { name: "Cheesecake de Frutas", desc: "Base crocante, cream cheese e calda da casa", price: "R$ 22" },
      { name: "Brownie & Sorvete", desc: "Brownie quente com sorvete de baunilha", price: "R$ 24" },
      { name: "Tiramisù Clássico", desc: "Mascarpone, café espresso e cacau", price: "R$ 25" },
      { name: "Cookie da Casa", desc: "Gotas de chocolate belga, ainda quentinho", price: "R$ 12" },
    ],
  },
};

export function Menu() {
  const [active, setActive] = useState<keyof typeof categories>("Cafés");
  const current = categories[active];

  return (
    <section id="cardapio" className="py-28 lg:py-36 bg-secondary/40">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            · Cardápio
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Cada xícara, uma <span className="italic font-light text-accent">história</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Pratos e bebidas preparados com ingredientes selecionados e muito carinho.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat as keyof typeof categories)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "bg-background text-foreground/70 hover:text-foreground hover:bg-card"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:sticky lg:top-28 shadow-[var(--shadow-soft)]">
            <img
              key={active}
              src={current.image}
              alt={active}
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover animate-[fade-in_0.5s_ease-out]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream">
              <div className="text-xs uppercase tracking-[0.25em] text-cream/75 mb-1">Categoria</div>
              <div className="text-2xl font-display font-bold">{active}</div>
            </div>
          </div>

          <ul className="space-y-2" key={`list-${active}`}>
            {current.items.map((item, i) => (
              <li
                key={item.name}
                className="group flex items-start gap-6 py-5 border-b border-border last:border-b-0 hover:px-3 transition-all animate-[fade-up_0.4s_ease-out_both]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex-1 border-b border-dashed border-border/60 translate-y-[-4px]" />
                    <span className="text-lg font-display font-bold text-accent whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
