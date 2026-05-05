import { Package, Clock, MessageCircle, Truck } from "lucide-react";

const cards = [
  {
    icon: Package,
    label: "Retiro",
    title: "Ñuñoa (coordinar punto)",
    desc: "Sin local fisico — retiro acordado por WhatsApp.",
  },
  {
    icon: Clock,
    label: "Despacho",
    badge: "Todos los dias",
    title: "Lunes a Domingo",
    desc: "Region Metropolitana completa.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    title: "+56 9 2989 5674",
    desc: "Respondemos en minutos.",
    cta: { label: "Escribir ahora →", href: "https://wa.me/56929895674" },
  },
  {
    icon: Truck,
    label: "Cobertura",
    title: "Region Metropolitana",
    desc: "Ñuñoa, Providencia, Las Condes, Santiago Centro, La Reina, Macul, Vitacura y mas.",
  },
];

const LocationInfo = () => {
  return (
    <section id="ubicacion" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Visitanos
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-primary mt-3">
            ¿Donde <em className="italic">estamos?</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.label}
                className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-elegant transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">
                      {c.label}
                    </span>
                    {c.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        {c.badge}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                {c.cta && (
                  <a
                    href={c.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-medium text-primary hover:underline"
                  >
                    {c.cta.label}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
