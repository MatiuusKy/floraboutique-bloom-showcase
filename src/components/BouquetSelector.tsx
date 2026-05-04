import InteractiveSelector, { SelectorItem } from "@/components/ui/interactive-selector";
import { motion } from "framer-motion";

const items: SelectorItem[] = [
  {
    title: "Rosas Pasion",
    subtitle: "Coleccion clasica",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Girasoles",
    subtitle: "Energia & color",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tulipanes",
    subtitle: "Premium",
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Peonias",
    subtitle: "Edicion limitada",
    image: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mix Artesanal",
    subtitle: "Hecho a mano",
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1200&q=80",
  },
];

const BouquetSelector = () => {
  return (
    <section id="catalogo" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary-glow uppercase tracking-[0.3em] text-sm">Catalogo</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-4">
            Explora nuestros <span className="text-gradient italic">ramos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pasa el cursor o toca cada estilo para descubrirlo.
          </p>
        </motion.div>
        <InteractiveSelector items={items} />
      </div>
    </section>
  );
};

export default BouquetSelector;
