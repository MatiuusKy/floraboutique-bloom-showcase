import InteractiveSelector, { SelectorItem } from "@/components/ui/interactive-selector";
import { motion } from "framer-motion";

const items: SelectorItem[] = [
  { title: "Rosas", subtitle: "Clásicas y románticas", image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=1200&q=80" },
  { title: "Tulipanes", subtitle: "Elegantes y sutiles", image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1200&q=80" },
  { title: "Girasoles", subtitle: "Energía & color", image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80" },
  { title: "Astromelias", subtitle: "Delicadas y duraderas", image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80" },
  { title: "Gerberas", subtitle: "Alegres y vibrantes", image: "https://images.unsplash.com/photo-1530092285049-1c42085fd395?auto=format&fit=crop&w=1200&q=80" },
];

const BouquetSelectorV4 = () => (
  <section id="catalogo" className="py-24 bg-muted">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <span className="text-primary-glow uppercase tracking-[0.3em] text-sm">Catálogo</span>
        <h2 className="font-display text-4xl md:text-6xl mt-4 mb-4">
          Explora nuestras propuestas
        </h2>
        <p className="text-muted-foreground text-lg">Desliza para descubrir cada una.</p>
      </motion.div>
      <InteractiveSelector items={items} />
    </div>
  </section>
);

export default BouquetSelectorV4;
