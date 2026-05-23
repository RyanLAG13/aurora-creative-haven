import { useState } from "react";
import { MapPin, Clock, Phone, Mail, Instagram, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            · Contato
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Venha tomar um <span className="italic font-light text-accent">café</span> com a gente.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-3xl bg-card border border-border p-7">
              <div className="flex items-start gap-4 mb-5">
                <span className="w-10 h-10 rounded-xl bg-accent/15 text-accent grid place-items-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-semibold mb-1">Endereço</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Rua das Flores, 1024<br />
                    Jardim Aurora · São Paulo, SP
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-5">
                <span className="w-10 h-10 rounded-xl bg-accent/15 text-accent grid place-items-center shrink-0">
                  <Clock className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-semibold mb-1">Funcionamento</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Seg a Sex: 07h às 22h<br />
                    Sábado: 08h às 18h
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-5">
                <span className="w-10 h-10 rounded-xl bg-accent/15 text-accent grid place-items-center shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-semibold mb-1">Telefone</div>
                  <a href="tel:+551130000000" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    (11) 3000-0000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-accent/15 text-accent grid place-items-center shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-semibold mb-1">E-mail</div>
                  <a href="mailto:ola@auroracafe.cw" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    ola@auroracafe.cw
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-border h-64">
              <iframe
                title="Mapa Aurora Café & Coworking"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.66%2C-23.57%2C-46.63%2C-23.55&layer=mapnik"
                className="w-full h-full grayscale-[0.3]"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
              (e.target as HTMLFormElement).reset();
            }}
            className="lg:col-span-3 rounded-3xl bg-card border border-border p-8 lg:p-10 flex flex-col"
          >
            <h3 className="text-2xl font-display font-bold mb-2">Mande uma mensagem</h3>
            <p className="text-sm text-muted-foreground mb-7">
              Reservas, eventos, parcerias — adoramos receber notícias.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <label className="block">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Nome</span>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                  placeholder="Seu nome"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">E-mail</span>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                  placeholder="voce@email.com"
                />
              </label>
            </div>
            <label className="block mb-4">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Assunto</span>
              <input
                type="text"
                className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                placeholder="Reserva de mesa, evento, coworking..."
              />
            </label>
            <label className="block mb-6 flex-1">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Mensagem</span>
              <textarea
                required
                rows={5}
                className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all resize-none"
                placeholder="Conta pra gente..."
              />
            </label>
            <button
              type="submit"
              className="self-start inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:shadow-2xl transition-all"
            >
              {sent ? "Mensagem enviada ✓" : (<>Enviar mensagem <Send className="w-4 h-4" /></>)}
            </button>
          </form>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Instagram className="w-4 h-4" />
          <a
            href="https://instagram.com/auroracafe.cw"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors font-medium"
          >
            @auroracafe.cw
          </a>
        </div>
      </div>
    </section>
  );
}
