import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Truck, Bot, Users, Activity, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloraAdmin = () => {
  return (
    <div className="min-h-screen bg-[#FBF9F8] text-[#1A1015] overflow-x-hidden font-sans antialiased">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#FBF9F8]/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#97224A] to-[#5A0F2A] shadow-sm flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-semibold tracking-tight text-[15px]">Flora Admin</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[13.5px] text-[#1A1015]/70">
            <a href="#" className="hover:text-[#1A1015] transition-colors">Plataforma</a>
            <a href="#" className="hover:text-[#1A1015] transition-colors">Soluciones</a>
            <a href="#" className="hover:text-[#1A1015] transition-colors">Precios</a>
            <a href="#" className="hover:text-[#1A1015] transition-colors">Clientes</a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="h-9 text-[13.5px] hover:bg-black/5">Ingresar</Button>
            <Button className="h-9 text-[13.5px] bg-[#1A1015] hover:bg-[#1A1015]/90 text-white rounded-full px-4">
              Solicitar Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Ambient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#EFCEDA]/40 blur-[120px]" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#97224A]/10 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#FFE4D9]/50 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #1A1015 1px, transparent 1px), linear-gradient(to bottom, #1A1015 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/8 bg-white/60 backdrop-blur-sm text-[12px] font-medium text-[#1A1015]/70 mb-7"
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#97224A] opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#97224A]" />
              </span>
              Nueva generación · Disponible 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.02] tracking-[-0.025em] text-[#1A1015]"
            >
              El sistema operativo
              <br />
              inteligente para{" "}
              <span className="italic font-normal bg-gradient-to-br from-[#97224A] to-[#5A0F2A] bg-clip-text text-transparent">
                florerías modernas
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-7 text-[17px] leading-relaxed text-[#1A1015]/65 max-w-[520px]"
            >
              Centraliza pedidos, delivery, CRM emocional, automatizaciones e inteligencia
              operacional en una sola plataforma.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button className="h-12 px-6 rounded-full bg-[#1A1015] hover:bg-[#1A1015]/90 text-white text-[14px] font-medium shadow-[0_8px_24px_-8px_rgba(151,34,74,0.4)]">
                Solicitar Demo
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="ghost"
                className="h-12 px-5 rounded-full text-[14px] font-medium text-[#1A1015]/80 hover:bg-black/5"
              >
                Explorar plataforma
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-14 pt-8 border-t border-black/8 flex flex-wrap gap-x-10 gap-y-4 text-[12px] uppercase tracking-[0.14em] text-[#1A1015]/40 font-medium"
            >
              <span>Florerías premium</span>
              <span>·</span>
              <span>Latam · Europa</span>
              <span>·</span>
              <span>SOC 2 Ready</span>
            </motion.div>
          </div>

          {/* RIGHT — composition */}
          <div className="lg:col-span-6 relative h-[560px] lg:h-[640px]">
            {/* Main dashboard card */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="absolute inset-0 lg:inset-y-8 lg:right-0 lg:left-12 rounded-2xl bg-white border border-black/5 shadow-[0_40px_80px_-30px_rgba(26,16,21,0.25),0_8px_24px_-12px_rgba(151,34,74,0.15)] overflow-hidden"
            >
              {/* topbar */}
              <div className="h-10 border-b border-black/5 flex items-center px-4 gap-1.5 bg-[#FBF9F8]/50">
                <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                <div className="ml-4 text-[11px] text-[#1A1015]/40 font-medium">
                  flora.admin · operaciones
                </div>
              </div>

              <div className="p-6 grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <div className="text-[11px] uppercase tracking-wider text-[#1A1015]/40 font-medium">
                    Revenue · 30 días
                  </div>
                  <div className="mt-1 text-[28px] font-display tracking-tight">$48.2M</div>
                  <div className="text-[11px] text-emerald-600 font-medium mt-0.5 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +18.4% vs período anterior
                  </div>

                  {/* sparkline */}
                  <svg viewBox="0 0 300 80" className="w-full h-20 mt-4">
                    <defs>
                      <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#97224A" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#97224A" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,60 C30,55 50,45 70,48 C95,51 110,30 140,28 C170,26 185,40 210,35 C240,29 260,12 300,18 L300,80 L0,80 Z"
                      fill="url(#grad)"
                    />
                    <path
                      d="M0,60 C30,55 50,45 70,48 C95,51 110,30 140,28 C170,26 185,40 210,35 C240,29 260,12 300,18"
                      fill="none"
                      stroke="#97224A"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Pedidos hoy", value: "127", tone: "text-[#1A1015]" },
                    { label: "Ticket prom.", value: "$54k", tone: "text-[#1A1015]" },
                    { label: "Retención", value: "94%", tone: "text-emerald-600" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-lg bg-[#FBF9F8] border border-black/5 p-3">
                      <div className="text-[10px] uppercase tracking-wider text-[#1A1015]/40 font-medium">
                        {m.label}
                      </div>
                      <div className={`text-[18px] font-display tracking-tight mt-0.5 ${m.tone}`}>
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity rows */}
              <div className="px-6 pb-6">
                <div className="text-[11px] uppercase tracking-wider text-[#1A1015]/40 font-medium mb-3">
                  Actividad operacional
                </div>
                <div className="space-y-2">
                  {[
                    { icon: Truck, label: "Pedido #2841 · Las Condes", status: "En ruta", color: "#97224A" },
                    { icon: Bot, label: "Forecast IA · próx. 7 días", status: "Listo", color: "#5A0F2A" },
                    { icon: Users, label: "CRM · 12 clientes recurrentes", status: "Sync", color: "#97224A" },
                  ].map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#FBF9F8] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center"
                          style={{ background: `${r.color}10`, color: r.color }}
                        >
                          <r.icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[13px] text-[#1A1015]/80">{r.label}</span>
                      </div>
                      <span className="text-[11px] font-medium text-[#1A1015]/50">{r.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating insight 1 */}
            <motion.div
              initial={{ opacity: 0, y: 14, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="absolute -left-2 lg:-left-6 top-16 rounded-xl bg-white/90 backdrop-blur-xl border border-black/5 shadow-[0_20px_40px_-20px_rgba(26,16,21,0.25)] px-4 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#1A1015]/40 font-medium">Revenue</div>
                <div className="text-[14px] font-semibold text-[#1A1015] leading-tight">+18% este mes</div>
              </div>
            </motion.div>

            {/* Floating insight 2 */}
            <motion.div
              initial={{ opacity: 0, y: 14, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute right-0 lg:-right-4 top-1/3 rounded-xl bg-white/90 backdrop-blur-xl border border-black/5 shadow-[0_20px_40px_-20px_rgba(26,16,21,0.25)] px-4 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-[#97224A]/10 flex items-center justify-center">
                <Truck className="w-4 h-4 text-[#97224A]" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#1A1015]/40 font-medium">
                  Live deliveries
                </div>
                <div className="text-[14px] font-semibold text-[#1A1015] leading-tight">12 activos · 4 drivers</div>
              </div>
            </motion.div>

            {/* Floating insight 3 */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="absolute left-4 lg:left-2 -bottom-2 lg:bottom-6 rounded-xl bg-[#1A1015] text-white shadow-[0_24px_48px_-16px_rgba(26,16,21,0.5)] px-4 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/50 font-medium">AI Forecast</div>
                <div className="text-[14px] font-semibold leading-tight">Listo para revisar</div>
              </div>
              <Zap className="w-3.5 h-3.5 text-[#EFCEDA] ml-1" />
            </motion.div>

            {/* Floating insight 4 */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute right-4 lg:right-8 bottom-10 rounded-xl bg-white/90 backdrop-blur-xl border border-black/5 shadow-[0_20px_40px_-20px_rgba(26,16,21,0.25)] px-4 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-[#EFCEDA]/60 flex items-center justify-center">
                <Activity className="w-4 h-4 text-[#97224A]" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#1A1015]/40 font-medium">CRM Emotional</div>
                <div className="text-[14px] font-semibold text-[#1A1015] leading-tight">Active · 1.2k clientes</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Logo strip */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-24 lg:mt-32">
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#1A1015]/35 font-medium text-center mb-8">
            Florerías que ya están elevando su operación
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-[#1A1015]/30 font-display text-2xl tracking-tight">
            <span>Flora Boutique</span>
            <span>·</span>
            <span className="italic">Maison Fleur</span>
            <span>·</span>
            <span>Pétalo &amp; Co</span>
            <span>·</span>
            <span className="italic">Verbena</span>
            <span>·</span>
            <span>Atelier Rosé</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloraAdmin;
