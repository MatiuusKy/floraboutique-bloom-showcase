import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import rosas from "@/assets/product-rosas.jpg";
import girasoles from "@/assets/product-girasoles.jpg";
import tulipanes from "@/assets/product-tulipanes.jpg";
import gerberas from "@/assets/product-gerberas.jpg";
import mix from "@/assets/product-mix.jpg";
import especial from "@/assets/product-especial.jpg";

type Color = "rojo" | "rosado" | "amarillo" | "blanco" | "naranjo" | "morado";
type Size = "S" | "M" | "L" | "XL";

type Product = {
  img: string;
  name: string;
  category: string;
  price: string;
  desc: string;
  colors?: Color[];
  sizes?: Size[];
};

const ALL_COLORS: Color[] = ["rojo", "rosado", "amarillo", "blanco", "naranjo", "morado"];
const ALL_SIZES: Size[] = ["S", "M", "L", "XL"];
const COLOR_HEX: Record<Color, string> = {
  rojo: "#B91C1C",
  rosado: "#EFCEDA",
  amarillo: "#FACC15",
  blanco: "#F8F5F2",
  naranjo: "#F97316",
  morado: "#7C3AED",
};
const SIZE_LABEL: Record<Size, string> = {
  S: "S | 5 varas",
  M: "M | 10 varas",
  L: "L | 15 varas",
  XL: "XL | 20 varas",
};

const products: Product[] = [
  { img: rosas, name: "Ramo Pasión", category: "Rosas", price: "$29.990", desc: "Rosas rojas frescas envueltas en papel burdeos.", colors: ["rojo", "rosado", "blanco"], sizes: ["S", "M", "L", "XL"] },
  { img: rosas, name: "Rosas Blush", category: "Rosas", price: "$31.990", desc: "Rosas rosadas en envoltorio artesanal.", colors: ["rosado", "blanco"], sizes: ["S", "M", "L"] },
  { img: tulipanes, name: "Blanco Eterno", category: "Tulipanes", price: "$34.990", desc: "Tulipanes blancos premium en envoltorio lila.", colors: ["blanco", "amarillo", "morado", "rosado"], sizes: ["M", "L", "XL"] },
  { img: girasoles, name: "Sol & Tulipán", category: "Girasoles", price: "$32.990", desc: "Girasoles vibrantes con tulipanes rosados.", colors: ["amarillo", "naranjo"], sizes: ["S", "M", "L"] },
  { img: gerberas, name: "Fiesta Tropical", category: "Gerberas", price: "$27.990", desc: "Gerberas naranjas y fucsias llenas de energía.", colors: ["rojo", "rosado", "amarillo", "naranjo", "blanco"], sizes: ["S", "M", "L"] },
  { img: mix, name: "Brisa Astromelia", category: "Astromelias", price: "$28.990", desc: "Astromelias multicolores con follaje fresco.", colors: ["rosado", "amarillo", "blanco", "morado", "naranjo"], sizes: ["S", "M", "L", "XL"] },
  { img: mix, name: "Romance Rosa", category: "Mix", price: "$36.990", desc: "Rosas y peonías con paniculata." },
  { img: especial, name: "Corazón de Rosas", category: "Especial", price: "$54.990", desc: "Edición San Valentín con globos en forma de corazón." },
];

const categories = ["Todos", "Rosas", "Tulipanes", "Girasoles", "Astromelias", "Gerberas", "Mix", "Especial"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FILTERABLE = ["Rosas", "Tulipanes", "Gerberas", "Astromelias"];

const GalleryV4 = () => {
  const [filter, setFilter] = useState("Todos");
  const [color, setColor] = useState<Color | "todos">("todos");
  const [size, setSize] = useState<Size | "todos">("todos");
  const [open, setOpen] = useState<Product | null>(null);

  const showVariantFilters = FILTERABLE.includes(filter);

  const filtered = products.filter((p) => {
    if (filter !== "Todos" && p.category !== filter) return false;
    if (showVariantFilters && color !== "todos" && !p.colors?.includes(color)) return false;
    if (showVariantFilters && size !== "todos" && !p.sizes?.includes(size)) return false;
    return true;
  });

  const whatsappLink = (name: string) =>
    `https://wa.me/56929895674?text=${encodeURIComponent(`Hola Flora Boutique, me interesa comprar "${name}"`)}`;

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary-glow uppercase tracking-[0.3em] text-sm">Galería</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-4">
            Nuestros arreglos
          </h2>
          <p className="text-muted-foreground text-lg">
            Explora algunos de los diseños que más enamoran a nuestra comunidad.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => { setFilter(c); setColor("todos"); setSize("todos"); }}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                filter === c
                  ? "bg-gradient-brand text-primary-foreground border-transparent shadow-soft"
                  : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {showVariantFilters && (
          <div className="max-w-3xl mx-auto mb-12 space-y-4 bg-card/60 border border-border/60 rounded-2xl p-5">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Color</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setColor("todos")}
                  className={`px-4 py-1.5 rounded-full text-xs border ${color === "todos" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}
                >
                  Todos
                </button>
                {ALL_COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-4 py-1.5 rounded-full text-xs border flex items-center gap-2 capitalize ${color === c ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}
                  >
                    <span className="w-3 h-3 rounded-full border border-border/60" style={{ backgroundColor: COLOR_HEX[c] }} />
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Tamaño</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSize("todos")}
                  className={`px-4 py-1.5 rounded-full text-xs border ${size === "todos" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}
                >
                  Todos
                </button>
                {ALL_SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-1.5 rounded-full text-xs border ${size === s ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}
                  >
                    {SIZE_LABEL[s]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <motion.article
              key={p.name}
              layout
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              onClick={() => setOpen(p)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-card shadow-soft border border-border/50"
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={`${p.name} - ${p.category} Flora Boutique`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs text-primary-glow uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-display text-xl text-primary mt-1">{p.name}</h3>
                </div>
                <span className="font-display text-lg text-foreground whitespace-nowrap">{p.price}</span>
              </div>
            </motion.article>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-12">
              No hay arreglos con esos filtros. Prueba otra combinación.
            </p>
          )}
        </motion.div>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden bg-card">
          {open && (
            <div className="grid md:grid-cols-2">
              <img src={open.img} alt={open.name} className="w-full h-full object-cover aspect-square" />
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs text-primary-glow uppercase tracking-wider">{open.category}</span>
                <h3 className="font-display text-3xl text-primary mt-2 mb-3">{open.name}</h3>
                <p className="text-muted-foreground mb-5">{open.desc}</p>
                <div className="font-display text-3xl text-gradient mb-6">{open.price}</div>
                <Button className="bg-[#25D366] hover:bg-[#1fb955] text-white" asChild>
                  <a href={whatsappLink(open.name)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> Me interesa
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GalleryV4;
