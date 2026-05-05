import { Search, MessageCircle, CheckCircle2, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    title: "Elige tu arreglo",
    desc: "Revisa el catalogo o cuentanos la ocasion y el presupuesto.",
  },
  {
    icon: MessageCircle,
    title: "Escribenos por WhatsApp",
    desc: "+56 9 2989 5674 — respondemos en minutos.",
  },
  {
    icon: CheckCircle2,
    title: "Confirmamos y coordinamos",
    desc: "Cotizacion clara + horario de entrega acordado.",
  },
  {
    icon: PartyPopper,
    title: "¡Recibe tus flores!",
    desc: "Despacho a domicilio o retiro en Ñuñoa (coordinar punto).",
  },
];

const OrderProcess = () => {
  return (
    <section id="proceso" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary-glow)/0.25),transparent_70%)]" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] opacity-80">Proceso</span>
          <h2 className="font-display text-4xl md:text-6xl mt-3">
            ¿Como hacer tu <em className="italic">pedido?</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 max-w-6xl mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative text-center px-6 md:border-r md:last:border-r-0 border-primary-foreground/15"
              >
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 font-display italic text-6xl opacity-10 select-none"
                  aria-hidden
                >
                  0{i + 1}
                </span>
                <div className="relative pt-6 flex justify-center mb-5">
                  <div className="w-14 h-14 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center ring-1 ring-primary-foreground/20">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center mt-14 gap-4">
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#1fb955] text-white rounded-full px-8 shadow-elegant"
            asChild
          >
            <a
              href="https://wa.me/56929895674"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> Hacer mi pedido ahora
            </a>
          </Button>
          <p className="text-sm opacity-75 text-center">
            🌷 Pedidos antes de las 14:00 hrs · Entrega el mismo dia · Lun a Sab
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
