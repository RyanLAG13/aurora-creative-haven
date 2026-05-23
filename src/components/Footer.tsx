import { Coffee, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-10 rounded-full bg-accent text-accent-foreground grid place-items-center">
                <Coffee className="w-5 h-5" />
              </span>
              <span className="font-display font-bold text-xl">Aurora Café & Coworking</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Um espaço híbrido de cafeteria premium e coworking, feito para quem busca
              produtividade com conforto e bons encontros.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Navegação
            </div>
            <ul className="space-y-2.5 text-sm">
              {[
                ["#sobre", "Sobre"],
                ["#cardapio", "Cardápio"],
                ["#coworking", "Coworking"],
                ["#galeria", "Galeria"],
                ["#contato", "Contato"],
              ].map(([href, l]) => (
                <li key={href}>
                  <a href={href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Contato
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://instagram.com/auroracafe.cw" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Instagram className="w-4 h-4" /> @auroracafe.cw
                </a>
              </li>
              <li>
                <a href="mailto:ola@auroracafe.cw" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" /> ola@auroracafe.cw
                </a>
              </li>
              <li>
                <a href="tel:+551130000000" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" /> (11) 3000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Aurora Café & Coworking. Todos os direitos reservados.</p>
          <p>Feito com café ☕ e atenção aos detalhes.</p>
        </div>
      </div>
    </footer>
  );
}
