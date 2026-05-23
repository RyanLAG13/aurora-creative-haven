import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511300000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Aurora%20Caf%C3%A9."
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:shadow-[0_15px_40px_-5px_rgba(37,211,102,0.8)] hover:-translate-y-1 transition-all"
    >
      <span className="w-14 h-14 grid place-items-center">
        <MessageCircle className="w-6 h-6 fill-white" strokeWidth={0} />
      </span>
      <span className="pr-5 pl-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold group-hover:max-w-xs group-hover:pl-1 transition-all duration-500">
        Fale conosco
      </span>
    </a>
  );
}
