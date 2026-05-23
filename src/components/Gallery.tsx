import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, alt: "Coworking iluminado com pessoas trabalhando", span: "lg:col-span-2 lg:row-span-2" },
  { src: g2, alt: "Barista preparando latte art", span: "" },
  { src: g3, alt: "Canto de leitura com poltrona e livros", span: "lg:row-span-2" },
  { src: g4, alt: "Sala de reunião com paredes de vidro", span: "" },
  { src: g5, alt: "Fachada do café ao entardecer", span: "" },
  { src: g6, alt: "Flat lay de mesa de trabalho com café", span: "lg:col-span-2" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-28 lg:py-36 bg-secondary/40">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              · Galeria
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] max-w-xl">
              Um <span className="italic font-light text-accent">passeio</span> pelo Aurora.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Cada canto foi pensado para inspirar foco, conversa e descanso.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[220px]">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl lg:rounded-3xl group ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
