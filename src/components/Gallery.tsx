import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import rosas from "@/assets/product-rosas.jpg";
import girasoles from "@/assets/product-girasoles.jpg";
import tulipanes from "@/assets/product-tulipanes.jpg";
import gerberas from "@/assets/product-gerberas.jpg";
import mix from "@/assets/product-mix.jpg";
import especial from "@/assets/product-especial.jpg";

type Product = {
  img: string;
  name: string;
  category: string;
  price: string;
  desc: string;
};

const products: Product[] = [
  { img: rosas, name: "Ramo Pasion", category: "Rosas", price: "$29.990", desc: "Rosas rojas frescas envueltas en papel burdeos." },
  { img: girasoles, name: "Sol & Tulipan", category: "Girasoles", price: "$32.990", desc: "Girasoles vibrantes con tulipanes rosados." },
  { img: tulipanes, name: "Blanco Eterno", category: "Tulipanes", price: "$34.990", desc: "Tulipanes blancos premium en envoltorio lila." },
  { img: gerberas, name: "Fiesta Tropical", category: "Gerberas", price: "$27.990", desc: "Gerberas naranjas y fucsias llenas de energia." },
  { img: mix, name: "Romance Rosa", category: "Mix", price: "$36.990", desc: "Rosas y peonias con paniculata." },
  { img: especial, name: "Corazon de Rosas", category: "Especial", price: "$54.990", desc: "Edicion San Valentin con globos en forma de corazon." },
];

const categories = ["Todos", "Rosas", "Girasoles", "Tulipanes", "Gerberas", "Mix", "Especial"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Gallery = () => {
  const [filter, setFilter] = useState("Todos");
  const [open, setOpen] = useState<Product | null>(null);

  const filtered = filter === "Todos" ? products : products.filter((p) => p.category === filter);

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
          <span className="text-primary-glow uppercase tracking-[0.3em] text-sm">Galeria</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-4">
            Nuestros <span className="text-gradient italic">arreglos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explora algunos de los disenos que mas enamoran a nuestra comunidad.
          </p>
        </motion.div>

        {/* filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
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

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
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
                  width={768}
                  height={768}
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
                <a
                  href="https://www.instagram.com/floraboutique.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-brand text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Pedir por Instagram
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
