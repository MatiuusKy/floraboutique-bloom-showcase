import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

type Section = { heading?: string; body: string[] };
type Policy = { title: string; intro: string; sections: Section[]; closing?: string };

const policies: Record<string, Policy> = {
  terminos: {
    title: "Términos y Condiciones",
    intro:
      "Al realizar una compra en Flora Boutique, aceptas los siguientes términos y condiciones. Nuestro objetivo es entregarte una experiencia transparente, cercana y de calidad en cada pedido.",
    sections: [
      {
        heading: "1. Pedidos y tiempos de anticipación",
        body: [
          "Para asegurar disponibilidad y una correcta preparación, recomendamos considerar los siguientes plazos:",
          "• Pedidos personalizados o especiales: deben realizarse con un mínimo de 48 horas de anticipación al día de entrega.",
          "• Pedidos de catálogo: se recomienda realizar con al menos 24 horas de anticipación al día de entrega.",
          "Los pedidos están sujetos a disponibilidad de flores, materiales y cupos de despacho.",
        ],
      },
      {
        heading: "2. Reembolsos por cancelación",
        body: [
          "Se realizarán reembolsos únicamente cuando la cancelación del pedido sea solicitada con al menos 48 horas de anticipación a la fecha programada de entrega.",
          "Solicitudes fuera de ese plazo no podrán ser reembolsadas, ya que implica reserva de flores, materiales y planificación operativa.",
        ],
      },
      {
        heading: "3. Cambios y devoluciones",
        body: [
          "Debido a la naturaleza perecible de nuestros productos, solo se aceptarán cambios o devoluciones cuando exista un problema atribuible directamente a Flora Boutique o al transporte, tales como:",
          "• Producto dañado durante el traslado.",
          "• Error evidente en la entrega.",
          "• Defectos de calidad no asociados al cuidado posterior del cliente.",
          "Para evaluar cualquier caso, el cliente deberá informar la situación dentro de un plazo máximo de 12 horas posteriores a la entrega.",
          "En entregas realizadas en conserjería, recepción o terceros, el respaldo válido para revisión será la fotografía de entrega enviada por el transporte.",
        ],
      },
      {
        heading: "4. Naturaleza artesanal y variaciones del producto",
        body: [
          "Cada ramo o arreglo floral es elaborado a mano y con flores naturales frescas, por lo que:",
          "• No siempre quedará idéntico a la fotografía de referencia.",
          "• Puede haber variaciones en distribución, apertura de flores y presentación general.",
          "• Las flores pueden variar en tonalidad, tamaño o textura según temporada, disponibilidad y naturaleza propia del producto.",
          "Siempre procuramos respetar el estilo, diseño y valor del arreglo solicitado.",
        ],
      },
      {
        heading: "5. Confidencialidad y protección de datos",
        body: [
          "En Flora Boutique respetamos la privacidad de nuestros clientes.",
          "• No compartimos datos personales con terceros ajenos al proceso de compra y entrega.",
          "• La información entregada se utiliza únicamente para gestionar pedidos, pagos y despachos.",
          "• No divulgamos mensajes personales incluidos en tarjetas, dedicatorias o notas adjuntas.",
        ],
      },
      {
        heading: "6. Aceptación de condiciones",
        body: [
          "Al confirmar una compra y realizar el pago, se entiende que el cliente ha leído y aceptado estos términos y condiciones.",
        ],
      },
    ],
    closing:
      "Trabajamos con dedicación para que cada entrega represente un gesto especial, con flores frescas y atención personalizada. Gracias por confiar en Flora Boutique. 💐",
  },
  pagos: {
    title: "Política de Pagos",
    intro:
      "En Flora Boutique trabajamos bajo modalidad online y con pedidos preparados especialmente para cada cliente, por lo que solicitamos revisar nuestra política de pagos antes de confirmar tu compra.",
    sections: [
      {
        heading: "Pago anticipado",
        body: [
          "Todos los pedidos requieren pago total por adelantado para ser confirmados e ingresados a preparación, ya sea en modalidad de:",
          "• Despacho a domicilio",
          "• Retiro previamente coordinado",
          "La preparación y reserva de flores comienza una vez recibido y confirmado el comprobante de pago.",
        ],
      },
      {
        heading: "Medio de pago disponible",
        body: [
          "Actualmente aceptamos pagos exclusivamente vía transferencia bancaria.",
          "Una vez realizado el pago, solicitamos enviar el comprobante por nuestros canales de atención para validar tu pedido a la brevedad.",
        ],
      },
      {
        heading: "Confirmación del pedido",
        body: [
          "Tu compra quedará confirmada una vez que:",
          "1. Se haya recibido el pago total.",
          "2. Se valide correctamente la transferencia.",
          "3. Se confirmen los datos de entrega o retiro.",
        ],
      },
      {
        heading: "Importante considerar",
        body: [
          "• No se realizan reservas sin pago previo.",
          "• Los pedidos están sujetos a disponibilidad de flores y agenda de despachos al momento de confirmar el pago.",
          "• En fechas de alta demanda (como Día de la Madre, San Valentín u otras ocasiones especiales), recomendamos realizar tu pago con anticipación para asegurar cupo.",
        ],
      },
    ],
    closing:
      "En Flora Boutique cada arreglo floral es preparado con dedicación y flores frescas seleccionadas diariamente. Gracias por confiar en nosotros para acompañar tus momentos especiales. 💐",
  },
  envios: {
    title: "Políticas de Envío",
    intro:
      "En Flora Boutique realizamos despachos a domicilio en la Región Metropolitana con el mayor cuidado y puntualidad posible, para que tus flores lleguen frescas y en perfectas condiciones. Además, todas nuestras flores son transportadas en agua y con climatización adecuada, lo que permite conservar su frescura, hidratación y presentación durante todo el trayecto.",
    sections: [
      {
        heading: "Horarios de despacho",
        body: [
          "• Lunes a sábado: 09:00 a 21:00 hrs.",
          "• Domingos: 10:00 a 18:00 hrs, previa coordinación y sujeto a disponibilidad.",
        ],
      },
      {
        heading: "Entregas en horario específico",
        body: [
          "Si deseas recibir tu pedido en un rango horario puntual o en una hora específica, este servicio está sujeto a disponibilidad logística y puede tener un cargo adicional.",
        ],
      },
      {
        heading: "Información importante para una entrega exitosa",
        body: [
          "Te recomendamos revisar cuidadosamente la dirección ingresada y asegurarte de que exista una persona disponible para recibir el pedido dentro del horario solicitado.",
        ],
      },
      {
        heading: "Situaciones en las que no corresponde devolución de dinero",
        body: [
          "No será posible realizar devolución del monto pagado cuando el despacho no pueda concretarse por causas ajenas a Flora Boutique, tales como:",
          "1. No hay personas en el domicilio y no se logra contacto con el cliente vía llamada telefónica. (Tiempo máximo de espera del conductor: 10 minutos por pedido).",
          "2. Dirección incorrecta, incompleta, inexistente o mal ingresada.",
          "3. El destinatario rechaza la entrega.",
          "4. Clínicas, hospitales, oficinas, tiendas o locales comerciales donde no permitan recepción de pedidos o no se logre contacto con el cliente o receptor.",
        ],
      },
      {
        heading: "Recomendaciones para oficinas, clínicas y locales comerciales",
        body: [
          "• Indicar nombre y número de contacto de quien recibirá el pedido.",
          "• En oficinas o centros comerciales, esto facilita la coordinación, especialmente en zonas con acceso limitado o dificultad para estacionar.",
          "• En clínicas u hospitales, confirmar previamente que exista una persona autorizada para recibir, ya que algunos recintos no permiten ingreso ni recepción externa.",
        ],
      },
      {
        heading: "Reagendamiento o cambio de dirección",
        body: [
          "En cualquiera de las situaciones anteriores, el valor del envío deberá igualmente ser cubierto, ya que el conductor realizó el recorrido asignado.",
          "Si deseas reprogramar la entrega para el día siguiente o cambiar la dirección de destino, se podrá gestionar según disponibilidad y con el cobro de un nuevo envío.",
        ],
      },
    ],
    closing:
      "En Flora Boutique trabajamos día a día para entregar una experiencia cercana, confiable y especial en cada pedido. Gracias por confiar en nosotros para acompañar tus momentos importantes. 💐",
  },
};

const Policies = () => {
  const { slug = "terminos" } = useParams();
  const policy = policies[slug] ?? policies.terminos;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${policy.title} · Flora Boutique`;
  }, [policy.title]);

  return (
    <main className="min-h-screen bg-background py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <Link to="/v4" className="text-sm text-primary hover:underline">← Volver</Link>
        <h1 className="font-display text-4xl md:text-5xl text-primary mt-6 mb-4">
          {policy.title} <span className="text-primary-glow">🌷</span>
        </h1>
        <p className="text-muted-foreground mb-10 leading-relaxed">{policy.intro}</p>

        <div className="space-y-8">
          {policy.sections.map((s) => (
            <section key={s.heading}>
              {s.heading && <h2 className="font-display text-2xl text-primary mb-3">{s.heading}</h2>}
              <div className="space-y-2 text-foreground/85 leading-relaxed">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {policy.closing && (
          <div className="mt-12 p-6 rounded-2xl bg-secondary/40 border border-border">
            <h3 className="font-display text-xl text-primary mb-2">Nuestro compromiso</h3>
            <p className="text-foreground/85 leading-relaxed">{policy.closing}</p>
          </div>
        )}
      </article>
    </main>
  );
};

export default Policies;
