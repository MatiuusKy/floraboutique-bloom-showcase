import { Search, MessageCircle, CheckCircle2, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    title: "Elige tu arreglo",
    desc: "Descubre nuestro catálogo o cuéntanos la ocasión. Creamos una propuesta pensada especialmente para ti.",
  },
  {
    icon: MessageCircle,
    title: "Conversemos por WhatsApp",
    desc: "Escríbenos y te asesoramos en minutos para dar forma a tu idea.",
  },
  {
    icon: CheckCircle2,
    title: "Confirmamos los detalles",
    desc: "Coordinamos cada aspecto: diseño, valor y fecha de entrega, con total claridad.",
  },
  {
    icon: PartyPopper,
    title: "Recibe tus flores",
    desc: "Entrega a domicilio o retiro coordinado. Tu momento especial, listo para disfrutar.",
  },
];

const OrderProcessV4 = () => (
  <section id="proceso" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary-glow)/0.25),transparent_70%)]" />
    <div className="container mx-auto px-6 relative">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] opacity-80">Proceso</span>
        <h2 className="font-display text-4xl md:text-6xl mt-3">
          ¿Cómo hacer tu pedido?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 max-w-6xl mx-auto">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="relative text-center px-6 md:border-r md:last:border-r-0 border-primary-foreground/15"
            >
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
          <a href="https://wa.me/56929895674" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" /> Hacer mi pedido ahora
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default OrderProcessV4;
