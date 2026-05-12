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
  <section id="proceso" className="py-24 bg-muted relative overflow-hidden">
    <div className="container mx-auto px-6 relative">
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-primary/70">Proceso</span>
        <h2 className="font-display text-4xl md:text-6xl mt-3 text-foreground">
          ¿Cómo hacer tu pedido?
        </h2>
        <div className="w-16 h-px bg-primary/40 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-shadow text-center group"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center shadow-md">
                {i + 1}
              </div>
              <div className="flex justify-center mb-5 mt-2">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center ring-1 ring-primary/15 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
