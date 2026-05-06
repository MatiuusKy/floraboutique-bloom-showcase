import ScrollExpandHeroV4 from "@/components/ui/scroll-expansion-hero-v4";
import heroCenter from "@/assets/center-bouquets.jpeg";
import bg1 from "@/assets/hero-carousel-1.jpeg";
import bg2 from "@/assets/hero-carousel-2.jpeg";
import bg3 from "@/assets/hero-carousel-3.jpeg";
import bg4 from "@/assets/hero-carousel-4.jpeg";
import bg5 from "@/assets/hero-carousel-5.jpeg";
import logo from "@/assets/floraboutique-logo-new.jpeg";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, ShoppingBag } from "lucide-react";
import BouquetSelectorV4 from "@/components/BouquetSelectorV4";
import GalleryV4 from "@/components/GalleryV4";
import OrderProcessV4 from "@/components/OrderProcessV4";
import { Footer } from "@/components/ui/footer";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

const IndexV4 = () => {
  const [showNav, setShowNav] = useState(false);
  const { count, setOpen } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;
      if (y > window.innerHeight * 0.6 && goingDown) setShowNav(true);
      else if (!goingDown || y < 80) setShowNav(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50 transition-transform duration-500 ease-out ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/v4" className="flex items-center gap-3">
            <img src={logo} alt="Flora Boutique" className="w-9 h-9 rounded-full object-cover" />
            <span className="font-display text-lg text-primary">Flora Boutique</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#catalogo" className="hover:text-primary transition-colors">Catálogo</a>
            <a href="#galeria" className="hover:text-primary transition-colors">Galería</a>
            <a href="#proceso" className="hover:text-primary transition-colors">Cómo pedir</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="relative p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="w-5 h-5 text-primary" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      <ScrollExpandHeroV4
        mediaSrc={heroCenter}
        bgImages={[bg1, bg2, bg3, bg4, bg5]}
        subtitle="¿Quieres regalar algo único para un momento especial?"
        scrollToExpand="Desliza para descubrir"
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <img src={logo} alt="Flora Boutique" className="w-20 h-20 rounded-full object-cover mx-auto shadow-elegant" />
          <h2 className="font-seasons text-4xl md:text-5xl text-primary">
            Flores que cuentan historias
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada ramo de Flora Boutique es diseñado cuidadosamente para celebrar tus momentos más importantes.
          </p>
          <Button size="lg" className="bg-gradient-brand" asChild>
            <a href="#catalogo">Ver catálogo</a>
          </Button>
        </div>
      </ScrollExpandHeroV4>

      <BouquetSelectorV4 />
      <GalleryV4 />
      <OrderProcessV4 />

      <section id="contacto" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              Hagamos de tu momento algo único
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10">
              Escríbenos por Instagram o WhatsApp y diseñemos juntos el ramo perfecto.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-elegant" asChild>
                <a href="https://www.instagram.com/floraboutique.cl/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 mr-2" /> @floraboutique.cl
                </a>
              </Button>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#1fb955] text-white" asChild>
                <a href="https://wa.me/56929895674" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer
        logo={<img src={logo} alt="Flora Boutique" className="w-10 h-10 rounded-full object-cover" />}
        brandName="Flora Boutique"
        socialLinks={[
          { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/floraboutique.cl/", label: "Instagram" },
          { icon: <MessageCircle className="w-4 h-4" />, href: "https://wa.me/56929895674", label: "WhatsApp" },
        ]}
        mainLinks={[
          { href: "#catalogo", label: "Catálogo" },
          { href: "#galeria", label: "Galería" },
          { href: "#proceso", label: "Cómo pedir" },
          { href: "#contacto", label: "Contacto" },
        ]}
        legalLinks={[
          { href: "/v4/politicas/terminos", label: "Términos y Condiciones" },
          { href: "/v4/politicas/pagos", label: "Política de Pagos" },
          { href: "/v4/politicas/envios", label: "Políticas de Envío" },
        ]}
        copyright={{
          text: `© ${new Date().getFullYear()} Flora Boutique`,
          license: "Hecho con amor 🌸 · Región Metropolitana, Chile",
        }}
      />
    </div>
  );
};

export default IndexV4;
