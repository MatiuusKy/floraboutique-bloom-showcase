import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/floraboutique-logo.jpeg";
import heroDesktop from "@/assets/hero-desktop.jpeg";
import heroMobile from "@/assets/hero-mobile.jpeg";
import { Flower2, Heart, Truck, Sparkles, Instagram, MessageCircle, MapPin } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger: Variants = {
  show: { transition: { staggerChildren: 0.15 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

const collections = [
  { name: "Ramos de Rosas", desc: "Clasicos atemporales en tonos pasion.", emoji: "🌹" },
  { name: "Girasoles & Color", desc: "Energia y alegria en cada arreglo.", emoji: "🌻" },
  { name: "Tulipanes Premium", desc: "Elegancia delicada para momentos unicos.", emoji: "🌷" },
  { name: "Gerberas Vibrantes", desc: "Frescura y color para sorprender.", emoji: "🌺" },
  { name: "Mix Artesanal", desc: "Composiciones unicas hechas a mano.", emoji: "💐" },
  { name: "Ediciones Especiales", desc: "Para San Valentin, cumpleaños y mas.", emoji: "✨" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Nav */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Flora Boutique logo" className="w-10 h-10 rounded-full object-cover shadow-soft" />
            <span className="font-display text-xl text-primary">Flora Boutique</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#colecciones" className="hover:text-primary transition-colors">Colecciones</a>
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <Button variant="default" className="bg-gradient-brand hover:opacity-90 shadow-soft" asChild>
            <a href="#contacto">Pedir ahora</a>
          </Button>
        </div>
      </motion.nav>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center pt-20">
        <picture className="absolute inset-0">
          <source media="(max-width: 768px)" srcSet={heroMobile} />
          <img src={heroDesktop} alt="Coleccion de ramos Flora Boutique" className="w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

        <div className="relative container mx-auto px-6 py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-primary-foreground"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/20 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Floreria artesanal en Chile</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
              Flores que <em className="italic font-normal">cuentan</em> historias
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl mb-10 text-primary-foreground/90 max-w-xl">
              Cada ramo de Flora Boutique es disenado a mano para celebrar tus momentos mas importantes. Frescura, color y emocion en cada entrega.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-elegant text-base">
                Ver colecciones
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground text-base">
                <Instagram className="w-4 h-4 mr-2" /> Seguir @floraboutique.cl
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* floating decorative */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 hidden lg:block text-primary-foreground/40"
        >
          <Flower2 className="w-24 h-24" />
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Heart, title: "Hecho con amor", desc: "Cada arreglo es preparado a mano por nuestras floristas." },
              { icon: Truck, title: "Entrega el mismo dia", desc: "Despachos rapidos y cuidados en toda la region." },
              { icon: Sparkles, title: "Flores frescas", desc: "Seleccionamos lo mejor del mercado cada manana." },
            ].map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 shadow-soft">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl mb-2 text-primary">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collections */}
      <section id="colecciones" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary-glow uppercase tracking-[0.3em] text-sm">Nuestras creaciones</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 mb-4">
              Colecciones <span className="text-gradient italic">florales</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Descubre los estilos que enamoran a nuestra comunidad.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {collections.map((c, i) => (
              <motion.article
                key={c.name}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-blush/40 p-8 border border-border/50 shadow-soft cursor-pointer"
              >
                <div className="absolute -top-8 -right-8 text-9xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                  {c.emoji}
                </div>
                <div className="relative">
                  <span className="text-sm text-primary-glow font-medium">0{i + 1}</span>
                  <h3 className="font-display text-3xl mt-2 mb-3 text-primary">{c.name}</h3>
                  <p className="text-muted-foreground">{c.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="py-24 bg-gradient-soft relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-glow uppercase tracking-[0.3em] text-sm">Sobre nosotros</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 leading-tight">
              Donde la <em className="italic">naturaleza</em> se vuelve regalo.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              En Flora Boutique creemos que un ramo bien hecho puede cambiar un dia entero. Por eso seleccionamos cada flor con dedicacion y cuidamos cada detalle de la entrega.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Hemos acompañado a miles de clientes en sus momentos mas importantes: aniversarios, cumpleaños, condolencias, o simplemente "porque si".
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { n: "5K+", l: "Clientes felices" },
                { n: "100%", l: "Flores frescas" },
                { n: "24h", l: "Despacho rapido" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl text-gradient">{s.n}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-elegant">
              <img src={heroMobile} alt="Ramos artesanales" className="w-full h-full object-cover" />
            </div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground shadow-elegant"
            >
              <div className="text-center text-xs font-medium leading-tight">
                FLORA<br/>BOUTIQUE<br/>· CL ·
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contacto" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-primary-glow blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-accent blur-3xl"
        />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Flower2 className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              Hagamos de tu momento <em className="italic">algo unico</em>
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10">
              Escribenos por Instagram o WhatsApp y diseñemos juntos el ramo perfecto.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-elegant" asChild>
                <a href="https://www.instagram.com/floraboutique.cl/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 mr-2" /> @floraboutique.cl
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-8 text-sm opacity-75">
              <MapPin className="w-4 h-4" /> Despacho en Santiago, Chile
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-10 border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Flora Boutique" className="w-9 h-9 rounded-full object-cover" />
            <span className="font-display text-primary">Flora Boutique</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Flora Boutique. Hecho con amor 🌸</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
