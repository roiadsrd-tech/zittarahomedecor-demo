import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Phone,
  Instagram,
  MapPin,
  Check,
  Compass,
  Ruler,
  Layers,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { TechnicalSchematic, BespokeServiceIcon } from './components/BrandVisuals';

// Constantes de contacto oficial
const WHATSAPP_PHONE = '18097929417';
const WHATSAPP_DISPLAY = '+1 809-792-9417';
const INSTAGRAM_URL = 'https://www.instagram.com/zittarahomedecor/';
const ADDRESS_LINE1 = 'Rafael Augusto Sánchez esq. Lope de Vega 28';
const ADDRESS_LINE2 = 'Plaza Forastieri, Piantini, Santo Domingo, RD';
const LOCATION_COORDINATES = "18°28'42\"N 69°55'58\"W";

const BASE_WA_URL = `https://wa.me/${WHATSAPP_PHONE}?text=Hola%2C%20vi%20el%20portafolio%20web%20de%20Zittara%20Home%20Decor%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.`;

// Catálogo de Servicios con soporte multi-página
const SERVICES = [
  {
    slug: 'interiorismo-y-remodelacion',
    number: '01',
    title: 'Interiorismo y Remodelación',
    kicker: 'Diseño Integral',
    summary: 'Transformación integral de residencias y apartamentos donde la fluidez espacial, la luz natural y los materiales nobles conviven en armonía técnica.',
    challenge: 'Resolvemos la desarticulación funcional y visual de los espacios a través de una conceptualización integral y ejecución milimétrica.',
    specs: [
      { label: 'Alcance', val: 'Levantamiento, renders 3D, selección material y dirección de obra' },
      { label: 'Ubicaciones habituales', val: 'Piantini, Serrallés, Naco, Bella Vista' },
      { label: 'Plazo estimado', val: '6 a 12 semanas según metraje' },
      { label: 'Materialidad', val: 'Piedras naturales, maderas cálidas, iluminación 2700K' }
    ],
    features: [
      {
        title: 'Curaduría de Materiales Nobles',
        desc: 'Selección rigurosa de mármoles, maderas tratadas, textiles en lino y acabados que resisten el clima tropical dominicano.'
      },
      {
        title: 'Supervisión y Dirección de Obra',
        desc: 'Presencia técnica continua para garantizar que cada trazo del anteproyecto se respete fielmente en la construcción final.'
      },
      {
        title: 'Iluminación Arquitectónica',
        desc: 'Diseño lumínico estratificado en temperatura cálida (2700K a 3000K) para realzar texturas y crear atmósferas acogedoras.'
      }
    ],
    photos: [
      { url: './media/post_6.jpg', caption: 'Comedor residencial con mesa maciza y estantería iluminada en Serrallés' },
      { url: './media/post_17.jpg', caption: 'Curaduría textil con cojines texturizados sobre tapicería terracota' },
      { url: './media/post_18.jpg', caption: 'Encuentro de madera natural y terciopelo en zona de estar' }
    ]
  },
  {
    slug: 'mobiliario-a-medida',
    number: '02',
    title: 'Mobiliario a Medida',
    kicker: 'Fabricación Propia',
    summary: 'Diseño ebanístico y manufactura de cocinas de autor, clósets modulares y centros de entretenimiento concebidos para durar generaciones.',
    challenge: 'Maximizamos el almacenaje inteligente y la estética escultórica adaptándonos a la geometría exacta de cada residencia.',
    specs: [
      { label: 'Taller', val: 'Fabricación ebanística propia en taller especializado' },
      { label: 'Herrajes', val: 'Sistemas europeos de cierre suave Blum y Hettich' },
      { label: 'Superficies', val: 'Cuarzo estatutario, granito importado y porcelánico' },
      { label: 'Garantía', val: 'Ajuste milimétrico y respaldo estructural' }
    ],
    features: [
      {
        title: 'Cocinas de Autor con Isla',
        desc: 'Módulos ergonómicos, almacenamiento oculto, encimeras en cascada y campanas integradas en acabados bitono.'
      },
      {
        title: 'Clósets y Vestidores de Lujo',
        desc: 'Compartimentos a medida con iluminación LED perimetral en aluminio anodizado y divisiones en roble seleccionado.'
      },
      {
        title: 'Muebles de Entretenimiento & Estudios',
        desc: 'Paneles alistonados acústicos con cableado invisible, escritorios suspendidos y librerías monumentales.'
      }
    ],
    photos: [
      { url: './media/post_4.jpg', caption: 'Cocina de autor con isla en roble natural y encimera en piedra blanca' },
      { url: './media/post_1.jpg', caption: 'Mueble multifuncional infantil a medida con escritorio y estanterías integradas' },
      { url: './media/post_9.jpg', caption: 'Zona de preparación y fregadero con grifería de cuello alto y gavetería oculta' },
      { url: './media/post_10.jpg', caption: 'Frente de cocción con campana extractora y contraste de carpintería bitono' }
    ]
  },
  {
    slug: 'diseno-comercial',
    number: '03',
    title: 'Diseño Comercial & Retail',
    kicker: 'Espacios de Negocio',
    summary: 'Desarrollo de locales comerciales, farmacias, tiendas boutique y oficinas concebidos para cautivar al cliente y maximizar la rentabilidad.',
    challenge: 'Convertimos la identidad corporativa en una experiencia física envolvente que acelera el recorrido de compra y la presencia de marca.',
    specs: [
      { label: 'Tipología', val: 'Farmacias, retail de moda, boutiques y sedes de servicios' },
      { label: 'Tráfico', val: 'Materiales de alto tránsito y fácil higienización' },
      { label: 'Mobiliario', val: 'Vitrinas de seguridad, góndolas modulares y counter de pago' },
      { label: 'Normativa', val: 'Accesibilidad, iluminación comercial focal y acústica' }
    ],
    features: [
      {
        title: 'Exhibición y Merchandising Visual',
        desc: 'Mobiliario perimetral y central calculado para destacar productos estratégicos y facilitar la reposición continua.'
      },
      {
        title: 'Fachadas y Cristalería Arquitectónica',
        desc: 'Cerramientos limpios y marquesinas que proyectan sofisticación inmediata hacia la vía pública.'
      },
      {
        title: 'Optimización de Flujo y Ergonomía',
        desc: 'Trazado de circulaciones sin cuellos de botella para mejorar la experiencia de compra y la productividad del equipo.'
      }
    ],
    photos: [
      { url: './media/post_2.jpg', caption: 'Fachada frontal moderna con carpintería metálica y puertas de cristal' },
      { url: './media/post_3.jpg', caption: 'Interior comercial con exhibidores modulares e iluminación técnica' },
      { url: './media/post_5.jpg', caption: 'Espacio sanitario comercial con lavabo cerámico y panel de listones' }
    ]
  }
];

// Obras destacadas (Fotos únicas sin repetición con el Hero)
const PROJECTS = [
  {
    code: 'OBRA · 01',
    title: 'Cocina de Autor con Frente Bitono',
    category: 'Ebanistería Residencial',
    location: 'Piantini, Santo Domingo',
    photo: './media/post_10.jpg',
    secondaryPhoto: './media/post_9.jpg',
    materials: 'Roble natural, cuarzo estatutario y acero inoxidable',
    detail: 'Módulo de preparación con campana integrada, gavetas ocultas y grifería de cuello alto sobre encimera monolítica.'
  },
  {
    code: 'OBRA · 02',
    title: 'Mobiliario Multifuncional Integrado',
    category: 'Carpintería a Medida',
    location: 'Serrallés, Santo Domingo',
    photo: './media/post_1.jpg',
    secondaryPhoto: './media/post_18.jpg',
    materials: 'Madera natural, herrajes de cierre suave y acabados mate',
    detail: 'Mueble integral con escritorio continuo, almacenaje optimizado y nicho multimedia para habitación residencial.'
  },
  {
    code: 'OBRA · 03',
    title: 'Sede Comercial & Farmacia Moderna',
    category: 'Retail & Espacios Comerciales',
    location: 'Santo Domingo',
    photo: './media/post_2.jpg',
    secondaryPhoto: './media/post_3.jpg',
    materials: 'Cristal templado, carpintería técnica en laca y superficies sanitarias',
    detail: 'Transformación total de fachada y layout interno para optimizar el flujo de clientes y exhibición de alta rotación.'
  }
];

// Curaduría de Tienda / Objetos de diseño
const CURATED_OBJECTS = [
  {
    title: 'Lámpara Escultural & Lectura',
    photo: './media/post_14.jpg',
    tag: 'Iluminación',
    desc: 'Cuerpo cerámico geométrico con pantalla en tono cálido.'
  },
  {
    title: 'Jarrones Ondulados Cerámica',
    photo: './media/post_16.jpg',
    tag: 'Arte Objeto',
    desc: 'Piezas artesanales con relieves orgánicos para consolas.'
  },
  {
    title: 'Escultura Sputnik & Metales',
    photo: './media/post_13.jpg',
    tag: 'Accesorios',
    desc: 'Detalles en bronce y latón cepillado para bibliotecas.'
  },
  {
    title: 'Acentos & Mármol de Temporada',
    photo: './media/post_7.jpg',
    tag: 'Decoración',
    desc: 'Texturas minerales y elementos curados en showroom.'
  }
];

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('Cocina / Mobiliario');
  const [approxArea, setApproxArea] = useState('80 - 150 m²');

  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash || '#/';
      setCurrentHash(h);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (hash) => {
    window.location.hash = hash;
  };

  // Detección de subpágina de servicio
  const isServiceView = currentHash.startsWith('#/servicios/');
  const activeServiceSlug = isServiceView ? currentHash.replace('#/servicios/', '') : null;
  const currentService = activeServiceSlug ? SERVICES.find(s => s.slug === activeServiceSlug) : null;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)' }}>
      {/* ── BARRA DE NAVEGACIÓN PRINCIPAL ─────────────────────────────────────── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 60,
          backgroundColor: 'rgba(247, 245, 240, 0.94)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-hairline)'
        }}
      >
        <div
          className="container-editorial"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px'
          }}
        >
          {/* Logo genuino y marca */}
          <a
            href="#/"
            onClick={(e) => { e.preventDefault(); navigateTo('#/'); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}
          >
            <img
              src="./media/logo_real.jpg"
              alt="Zittara Home Decor"
              style={{
                width: '42px',
                height: '42px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '1px solid var(--border-hairline)'
              }}
            />
            <div>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)'
                }}
              >
                Zittara
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold-dark)',
                  marginTop: '-2px'
                }}
              >
                Home Decor · Piantini
              </span>
            </div>
          </a>

          {/* Menú de enlaces desktop */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.5rem'
            }}
            className="desktop-nav"
          >
            <a
              href="#/"
              onClick={(e) => { e.preventDefault(); navigateTo('#/'); }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: !isServiceView ? 'var(--accent-gold-dark)' : 'var(--text-primary)',
                fontWeight: 600
              }}
            >
              Estudio
            </a>
            <a
              href="#/servicios/interiorismo-y-remodelacion"
              onClick={(e) => { e.preventDefault(); navigateTo('#/servicios/interiorismo-y-remodelacion'); }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: activeServiceSlug === 'interiorismo-y-remodelacion' ? 'var(--accent-gold-dark)' : 'var(--text-primary)',
                fontWeight: 600
              }}
            >
              Interiorismo
            </a>
            <a
              href="#/servicios/mobiliario-a-medida"
              onClick={(e) => { e.preventDefault(); navigateTo('#/servicios/mobiliario-a-medida'); }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: activeServiceSlug === 'mobiliario-a-medida' ? 'var(--accent-gold-dark)' : 'var(--text-primary)',
                fontWeight: 600
              }}
            >
              Mobiliario a Medida
            </a>
            <a
              href="#/servicios/diseno-comercial"
              onClick={(e) => { e.preventDefault(); navigateTo('#/servicios/diseno-comercial'); }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: activeServiceSlug === 'diseno-comercial' ? 'var(--accent-gold-dark)' : 'var(--text-primary)',
                fontWeight: 600
              }}
            >
              Comercial
            </a>
            <a
              href="#portafolio"
              onClick={(e) => {
                if (isServiceView) {
                  navigateTo('#/');
                  setTimeout(() => {
                    const el = document.getElementById('portafolio');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                fontWeight: 600
              }}
            >
              Portafolio
            </a>
          </nav>

          {/* CTA directo WhatsApp y menú mobile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={BASE_WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: '0.75rem 1.4rem' }}
            >
              <span>Cotizar Proyecto</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Abrir menú"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                color: 'var(--text-primary)'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Drawer móvil limpio */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: 'var(--bg-primary)',
              borderBottom: '1px solid var(--border-hairline)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <a
              href="#/"
              onClick={(e) => { e.preventDefault(); navigateTo('#/'); }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              01 / Inicio & Estudio
            </a>
            <a
              href="#/servicios/interiorismo-y-remodelacion"
              onClick={(e) => { e.preventDefault(); navigateTo('#/servicios/interiorismo-y-remodelacion'); }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              02 / Interiorismo y Remodelación
            </a>
            <a
              href="#/servicios/mobiliario-a-medida"
              onClick={(e) => { e.preventDefault(); navigateTo('#/servicios/mobiliario-a-medida'); }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              03 / Mobiliario a Medida
            </a>
            <a
              href="#/servicios/diseno-comercial"
              onClick={(e) => { e.preventDefault(); navigateTo('#/servicios/diseno-comercial'); }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              04 / Diseño Comercial & Retail
            </a>
            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', gap: '1rem' }}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Instagram size={16} /> @zittarahomedecor
              </a>
              <a href={`tel:${WHATSAPP_PHONE}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Phone size={16} /> {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── CONTENIDO PRINCIPAL: VISTA MULTI-PÁGINA O PORTADA ────────────────── */}
      <main style={{ flex: 1 }}>
        {isServiceView && currentService ? (
          /* ====================================================================
             VISTA DEDICADA DE SERVICIO (ARQUITECTURA MULTI-PÁGINA)
             ==================================================================== */
          <div className="animate-fade-in" style={{ paddingBottom: '6rem' }}>
            {/* Cabecera del Servicio */}
            <section
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderBottom: '1px solid var(--border-hairline)',
                paddingTop: '4.5rem',
                paddingBottom: '4.5rem'
              }}
            >
              <div className="container-editorial">
                <button
                  onClick={() => navigateTo('#/')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold-dark)',
                    marginBottom: '2rem',
                    fontWeight: 600
                  }}
                >
                  <ArrowLeft size={16} />
                  <span>Volver al Estudio</span>
                </button>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-gold-dark)',
                        marginBottom: '0.75rem'
                      }}
                    >
                      {currentService.number} / {currentService.kicker}
                    </div>
                    <h1
                      style={{
                        fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                        marginBottom: '1.5rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {currentService.title}
                    </h1>
                    <p
                      style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.65,
                        marginBottom: '2.5rem',
                        maxWidth: '560px'
                      }}
                    >
                      {currentService.summary}
                    </p>

                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hola, me interesa consultar el servicio de ${currentService.title} para un proyecto en Santo Domingo.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold"
                    >
                      <span>Cotizar {currentService.title}</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  {/* Ficha técnica del servicio */}
                  <div
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      padding: '2.5rem',
                      border: '1px solid var(--border-hairline)'
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--text-primary)',
                        paddingBottom: '1rem',
                        borderBottom: '1px solid var(--border-hairline)',
                        marginBottom: '1.5rem'
                      }}
                    >
                      Ficha Técnica de Ejecución
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      {currentService.specs.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', borderBottom: '1px solid rgba(28,26,23,0.06)', paddingBottom: '0.75rem' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                            {item.label}
                          </span>
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500, textAlign: 'right' }}>
                            {item.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Galería Fotográfica Real del Servicio (Sin Repetición) */}
            <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
              <div className="container-editorial">
                <div style={{ marginBottom: '3rem' }}>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '0.75rem' }}>
                    Obras & Registro Fotográfico
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    Fotografías reales documentadas de proyectos concluidos por Zittara Home Decor.
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: currentService.photos.length === 4 ? 'repeat(auto-fit, minmax(280px, 1fr))' : 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '2rem'
                  }}
                >
                  {currentService.photos.map((item, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div className="image-reveal-wrapper" style={{ aspectRatio: '4/5', width: '100%' }}>
                        <img src={item.url} alt={item.caption} />
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.45,
                          borderTop: '1px solid var(--border-hairline)',
                          paddingTop: '0.5rem'
                        }}
                      >
                        [0{pIdx + 1}] · {item.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Metodología & Criterios de Calidad */}
            <section
              style={{
                backgroundColor: 'var(--bg-secondary)',
                paddingTop: '5rem',
                paddingBottom: '5rem',
                borderTop: '1px solid var(--border-hairline)'
              }}
            >
              <div className="container-editorial">
                <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '1rem' }}>
                    Criterios de Excelencia
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                    {currentService.challenge}
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                  {currentService.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        padding: '2.5rem',
                        border: '1px solid var(--border-hairline)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-gold-dark)' }}>
                        Fase 0{fIdx + 1}
                      </div>
                      <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>
                        {feat.title}
                      </h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hola, estuve viendo la sección de ${currentService.title} en su web y deseo agendar una reunión preliminar.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                    style={{ padding: '1.1rem 2.4rem' }}
                  >
                    <span>Iniciar Conversación por WhatsApp</span>
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* ====================================================================
             PORTADA PRINCIPAL (HOME) — MINIMALISMO ABSOLUTO & 7 SECCIONES ÚNICAS
             ==================================================================== */
          <div>
            {/* ── SECCIÓN 1: HERO EDITORIAL ASIMÉTRICO (AWWWARDS ARCHETYPE) ───── */}
            <section
              style={{
                position: 'relative',
                paddingTop: 'clamp(3rem, 6vw, 5.5rem)',
                paddingBottom: 'clamp(4rem, 8vw, 6.5rem)',
                backgroundColor: 'var(--bg-primary)',
                borderBottom: '1px solid var(--border-hairline)',
                overflow: 'hidden'
              }}
            >
              <div className="container-editorial">
                {/* Meta superior sobrio */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '2.5rem',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid var(--border-hairline)'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Estudio de Arquitectura de Interiores · Santo Domingo
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)' }}>
                    {LOCATION_COORDINATES}
                  </div>
                </div>

                {/* Gran Titular Monumental */}
                <div style={{ maxWidth: '1180px', marginBottom: '3.5rem' }}>
                  <h1
                    style={{
                      fontSize: 'clamp(2.5rem, 6.2vw, 5.6rem)',
                      fontWeight: 500,
                      lineHeight: 1.04,
                      letterSpacing: '-0.01em',
                      color: 'var(--text-primary)',
                      marginBottom: '1.5rem'
                    }}
                  >
                    Transformamos espacios en experiencias únicas.
                  </h1>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'end' }}>
                    <p
                      style={{
                        fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                        maxWidth: '640px'
                      }}
                    >
                      Diseño y construcción de interiores en Santo Domingo. Especialistas en mobiliario a medida, cocinas de autor y remodelaciones residenciales con acabados de alta gama.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                      <a href={BASE_WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
                        <span>Iniciar Consulta</span>
                        <ArrowRight size={15} />
                      </a>
                      <button
                        onClick={() => {
                          const el = document.getElementById('especialidades');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-outline"
                      >
                        <span>Explorar Especialidades</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mosaico Asimétrico Editorial de 3 Fotografías Reales */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '1.5rem',
                    alignItems: 'end'
                  }}
                >
                  {/* Imagen Principal [01] - 7 Columnas */}
                  <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '0.6rem' }} className="hero-col-main">
                    <div className="image-reveal-wrapper" style={{ aspectRatio: '16/11', width: '100%' }}>
                      <img
                        src="./media/post_4.jpg"
                        alt="Isla de cocina moderna en madera y piedra"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      <span>[01] · Cocina de Autor con Isla Central</span>
                      <span>Piantini</span>
                    </div>
                  </div>

                  {/* Imagen Secundaria [02] - 3 Columnas */}
                  <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', gap: '0.6rem' }} className="hero-col-sub1">
                    <div className="image-reveal-wrapper" style={{ aspectRatio: '4/5', width: '100%' }}>
                      <img
                        src="./media/post_5.jpg"
                        alt="Baño de diseño con lavabo y espejo circular dorado"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      <span>[02] · Baño Residencial</span>
                      <span>Santo Domingo</span>
                    </div>
                  </div>

                  {/* Imagen Detalle [03] - 2 Columnas */}
                  <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '0.6rem' }} className="hero-col-sub2">
                    <div className="image-reveal-wrapper" style={{ aspectRatio: '1/1', width: '100%' }}>
                      <img
                        src="./media/post_6.jpg"
                        alt="Comedor elegante con estantería iluminada"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      [03] · Serrallés
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECCIÓN 2: MANIFIESTO DE MATERIALIDAD & PRECISION (WARM STONE) ─ */}
            <section
              id="manifiesto"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                paddingTop: '6rem',
                paddingBottom: '6rem',
                borderBottom: '1px solid var(--border-hairline)'
              }}
            >
              <div className="container-editorial">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                  {/* Columna Izquierda: Manifiesto y Cita */}
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-gold-dark)',
                        marginBottom: '1rem'
                      }}
                    >
                      Manifiesto & Dirección
                    </div>
                    <blockquote
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.6rem, 2.6vw, 2.3rem)',
                        lineHeight: 1.3,
                        color: 'var(--text-primary)',
                        marginBottom: '2rem'
                      }}
                    >
                      "No se trata solo de decorar, se trata de crear espacios con intención, personalidad y armonía."
                    </blockquote>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                      Con sede en Piantini y un sólido historial documentado en sectores exclusivos de Santo Domingo, Zittara Home Decor aborda cada obra con rigor técnico: desde el despiece milimétrico de la carpintería hasta la selección de vetas en mármoles y maderas nobles.
                    </p>

                    {/* Cifras de Trayectoria Puras (Sin badges decorativos) */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1.5rem',
                        borderTop: '1px solid var(--border-hairline)',
                        paddingTop: '2rem'
                      }}
                    >
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                          5.6K
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          Obras en portafolio
                        </div>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                          36K
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          Comunidad activa
                        </div>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--accent-gold-dark)', fontWeight: 600 }}>
                          100%
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          A medida
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Columna Derecha: Imagen Táctil de Materialidad */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="image-reveal-wrapper" style={{ aspectRatio: '4/4.5', width: '100%' }}>
                      <img
                        src="./media/post_17.jpg"
                        alt="Curaduría textil y materialidades nobles Zittara"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-hairline)', paddingTop: '0.75rem' }}>
                      <span>Materiales Principales</span>
                      <span>Roble · Mármol · Acero · Lino</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECCIÓN 3: DISCIPLINAS & RUTAS DEDICADAS POR SERVICIO ────────── */}
            <section
              id="especialidades"
              style={{
                backgroundColor: 'var(--bg-primary)',
                paddingTop: '6rem',
                paddingBottom: '6rem',
                borderBottom: '1px solid var(--border-hairline)'
              }}
            >
              <div className="container-editorial">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '0.75rem' }}>
                      Especialidades
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', color: 'var(--text-primary)' }}>
                      Líneas de Diseño & Fabricación
                    </h2>
                  </div>
                  <p style={{ maxWidth: '440px', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Cada disciplina cuenta con un equipo técnico dedicado y fabricación a medida para garantizar el máximo estándar estético.
                  </p>
                </div>

                {/* Lista Asimétrica Editorial de Servicios con Iconos Vectoriales Custom */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {SERVICES.map((srv, idx) => (
                    <div
                      key={srv.slug}
                      style={{
                        paddingTop: '2.5rem',
                        paddingBottom: '2.5rem',
                        borderTop: '1px solid var(--border-hairline)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        alignItems: 'center',
                        transition: 'var(--transition-smooth)'
                      }}
                    >
                      {/* Número e Ícono Vectorial Custom-Made */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--text-muted)' }}>
                          {srv.number}
                        </span>
                        <BespokeServiceIcon index={idx} title={srv.title} category={srv.kicker} size={48} />
                        <div>
                          <h3 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                            {srv.title}
                          </h3>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', letterSpacing: '0.1em' }}>
                            {srv.kicker}
                          </span>
                        </div>
                      </div>

                      {/* Descripción breve */}
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                        {srv.summary}
                      </p>

                      {/* Botón de Entrada a Subpágina Dedicada */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => navigateTo(`#/servicios/${srv.slug}`)}
                          className="btn-outline"
                          style={{ padding: '0.85rem 1.6rem' }}
                        >
                          <span>Ver Detalles & Fotos</span>
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid var(--border-hairline)' }} />
                </div>
              </div>
            </section>

            {/* ── SECCIÓN 4: DESGLOSE TÉCNICO CAD & EBANISTERÍA (BASALT DARK) ── */}
            <section
              id="esquema"
              style={{
                backgroundColor: 'var(--bg-dark)',
                color: 'var(--text-light)',
                paddingTop: '6rem',
                paddingBottom: '6rem',
                borderBottom: '1px solid var(--border-hairline-dark)'
              }}
            >
              <div className="container-editorial">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
                      Rigor Constructivo
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', color: 'var(--text-light)' }}>
                      Desglose Técnico & Ebanistería
                    </h2>
                  </div>
                  <p style={{ maxWidth: '480px', color: 'var(--text-light-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Explora las capas de fabricación milimétrica, perfilería acústica y canalización de iluminación arquitectónica en nuestro visualizador interactivo.
                  </p>
                </div>

                {/* Componente Técnico Vectorial Interactivo */}
                <div style={{ border: '1px solid var(--border-hairline-dark)' }}>
                  <TechnicalSchematic />
                </div>
              </div>
            </section>

            {/* ── SECCIÓN 5: PORTAFOLIO DE OBRAS SELECCIONADAS ────────────────── */}
            <section
              id="portafolio"
              style={{
                backgroundColor: 'var(--bg-primary)',
                paddingTop: '6rem',
                paddingBottom: '6rem',
                borderBottom: '1px solid var(--border-hairline)'
              }}
            >
              <div className="container-editorial">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '0.75rem' }}>
                      Portafolio Seleccionado
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', color: 'var(--text-primary)' }}>
                      Obras Concluidas
                    </h2>
                  </div>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <Instagram size={15} />
                    <span>Ver Más en @zittarahomedecor</span>
                  </a>
                </div>

                {/* Ritmo Alternado de Proyectos */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                  {PROJECTS.map((proj, pIdx) => (
                    <div
                      key={pIdx}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '3rem',
                        alignItems: 'center'
                      }}
                    >
                      {/* Galería del Proyecto */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '3fr 2fr',
                          gap: '1rem',
                          order: pIdx % 2 === 1 ? 2 : 1
                        }}
                      >
                        <div className="image-reveal-wrapper" style={{ aspectRatio: '4/5', width: '100%' }}>
                          <img src={proj.photo} alt={proj.title} />
                        </div>
                        <div className="image-reveal-wrapper" style={{ aspectRatio: '4/5', width: '100%' }}>
                          <img src={proj.secondaryPhoto} alt={`${proj.title} detalle`} />
                        </div>
                      </div>

                      {/* Ficha Técnica y Explicación */}
                      <div style={{ order: pIdx % 2 === 1 ? 1 : 2 }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold-dark)', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
                          {proj.code} · {proj.location}
                        </div>
                        <h3 style={{ fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                          {proj.title}
                        </h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                          {proj.detail}
                        </p>

                        <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1.25rem', marginBottom: '2rem' }}>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                            Especificaciones Principales:
                          </div>
                          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                            {proj.materials}
                          </div>
                        </div>

                        <a
                          href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hola, me interesa consultar detalles sobre un proyecto similar a "${proj.title}".`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gold"
                        >
                          <span>Consultar Esta Obra</span>
                          <ArrowRight size={15} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECCIÓN 6: SHOWROOM & OBJETOS DE CURADURÍA ─────────────────── */}
            <section
              style={{
                backgroundColor: 'var(--bg-secondary)',
                paddingTop: '6rem',
                paddingBottom: '6rem',
                borderBottom: '1px solid var(--border-hairline)'
              }}
            >
              <div className="container-editorial">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '0.75rem' }}>
                      Tienda & Showroom
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', color: 'var(--text-primary)' }}>
                      Objetos de Curaduría
                    </h2>
                  </div>
                  <p style={{ maxWidth: '440px', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    En nuestro showroom de Piantini disponemos de una cuidada selección de lámparas esculturales, arte cerámico y acentos para complementar cada proyecto.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                  {CURATED_OBJECTS.map((obj, oIdx) => (
                    <div key={oIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div className="image-reveal-wrapper" style={{ aspectRatio: '1/1', width: '100%' }}>
                        <img src={obj.photo} alt={obj.title} />
                      </div>
                      <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '0.75rem' }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-gold-dark)', textTransform: 'uppercase' }}>
                          {obj.tag}
                        </div>
                        <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                          {obj.title}
                        </h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '0.35rem', lineHeight: 1.45 }}>
                          {obj.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECCIÓN 7: ESTUDIO, VISITA & COTIZACIÓN INTERACTIVA ─────────── */}
            <section
              id="estudio"
              style={{
                backgroundColor: 'var(--bg-primary)',
                paddingTop: '6rem',
                paddingBottom: '6rem',
                borderBottom: '1px solid var(--border-hairline)'
              }}
            >
              <div className="container-editorial">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
                  {/* Información de Ubicación y Sede Real */}
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '0.75rem' }}>
                      Sede & Atención
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                      Visita Nuestro Estudio en Piantini
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2.5rem' }}>
                      Recibimos clientes y arquitectos para revisión de planos, selección de acabados en muestrario físico y cotización técnica de proyectos.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <MapPin size={20} color="var(--accent-gold-dark)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                        <div>
                          <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{ADDRESS_LINE1}</div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{ADDRESS_LINE2}</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <Phone size={20} color="var(--accent-gold-dark)" style={{ flexShrink: 0 }} />
                        <a href={`tel:${WHATSAPP_PHONE}`} style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                          {WHATSAPP_DISPLAY}
                        </a>
                      </div>

                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <Instagram size={20} color="var(--accent-gold-dark)" style={{ flexShrink: 0 }} />
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                          @zittarahomedecor (35.9K seguidores)
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Interfaz de Cotización Directa */}
                  <div
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      padding: 'clamp(2rem, 4vw, 3rem)',
                      border: '1px solid var(--border-hairline)'
                    }}
                  >
                    <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                      Configurar Solicitud de Proyecto
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '2rem' }}>
                      Selecciona las características de tu espacio para abrir un chat directo con nuestro equipo técnico.
                    </p>

                    <div style={{ marginBottom: '1.75rem' }}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                        Tipo de Espacio:
                      </label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {['Residencial Integral', 'Cocina / Mobiliario', 'Diseño Comercial', 'Remodelación Baño'].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSelectedRoom(opt)}
                            style={{
                              padding: '0.65rem 1.1rem',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.75rem',
                              backgroundColor: selectedRoom === opt ? 'var(--text-primary)' : 'var(--bg-primary)',
                              color: selectedRoom === opt ? '#FFFFFF' : 'var(--text-primary)',
                              border: '1px solid var(--border-hairline)',
                              cursor: 'pointer'
                            }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                        Metraje Aproximado:
                      </label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {['Menos de 80 m²', '80 - 150 m²', '150 - 300 m²', 'Más de 300 m²'].map((area) => (
                          <button
                            key={area}
                            type="button"
                            onClick={() => setApproxArea(area)}
                            style={{
                              padding: '0.65rem 1.1rem',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.75rem',
                              backgroundColor: approxArea === area ? 'var(--text-primary)' : 'var(--bg-primary)',
                              color: approxArea === area ? '#FFFFFF' : 'var(--text-primary)',
                              border: '1px solid var(--border-hairline)',
                              cursor: 'pointer'
                            }}
                          >
                            {area}
                          </button>
                        ))}
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hola equipo de Zittara Home Decor, deseo cotizar un proyecto de tipo "${selectedRoom}" con área aproximada de "${approxArea}" en Santo Domingo.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold"
                      style={{ width: '100%', padding: '1.1rem', textAlign: 'center' }}
                    >
                      <span>Enviar Configuración por WhatsApp</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* ── SECCIÓN 8: MEGA-FOOTER MONOLÍTICO DE AUTOR ───────────────────────── */}
      <footer
        style={{
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-light)',
          borderTop: '1px solid var(--border-hairline-dark)',
          paddingTop: '5rem',
          paddingBottom: '2.5rem'
        }}
      >
        <div className="container-editorial">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '3rem',
              paddingBottom: '4rem',
              borderBottom: '1px solid var(--border-hairline-dark)'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text-light)', marginBottom: '1rem', letterSpacing: '0.06em' }}>
                Zittara Home Decor
              </div>
              <p style={{ color: 'var(--text-light-muted)', fontSize: '0.88rem', lineHeight: 1.6, maxWidth: '320px' }}>
                Diseño y construcción de interiores, ebanistería a medida y curaduría arquitectónica en Santo Domingo, República Dominicana.
              </p>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                Especialidades
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                <a href="#/servicios/interiorismo-y-remodelacion" onClick={(e) => { e.preventDefault(); navigateTo('#/servicios/interiorismo-y-remodelacion'); }} style={{ color: 'var(--text-light-muted)' }}>
                  Interiorismo y Remodelación
                </a>
                <a href="#/servicios/mobiliario-a-medida" onClick={(e) => { e.preventDefault(); navigateTo('#/servicios/mobiliario-a-medida'); }} style={{ color: 'var(--text-light-muted)' }}>
                  Mobiliario a Medida & Cocinas
                </a>
                <a href="#/servicios/diseno-comercial" onClick={(e) => { e.preventDefault(); navigateTo('#/servicios/diseno-comercial'); }} style={{ color: 'var(--text-light-muted)' }}>
                  Diseño Comercial & Retail
                </a>
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                Estudio & Ubicación
              </div>
              <div style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                <div>Plaza Forastieri, Local Piantini</div>
                <div>Lope de Vega esq. Rafael Augusto Sánchez</div>
                <div>Santo Domingo, República Dominicana</div>
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                Contacto Directo
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                <a href={BASE_WA_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light-muted)' }}>
                  Instagram: @zittarahomedecor
                </a>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-light-muted)' }}>
                  Lunes a Viernes · 9:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Wordmark Monumental a Todo Ancho */}
          <div
            style={{
              paddingTop: '3.5rem',
              paddingBottom: '2.5rem',
              textAlign: 'center',
              userSelect: 'none',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 10.5vw, 9.8rem)',
                fontWeight: 600,
                letterSpacing: '0.14em',
                lineHeight: 0.95,
                color: 'rgba(244, 240, 234, 0.08)',
                whiteSpace: 'nowrap',
                textTransform: 'uppercase'
              }}
            >
              Zittara Home Decor
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(244, 240, 234, 0.06)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-light-muted)'
            }}
          >
            <div>© {new Date().getFullYear()} Zittara Home Decor. Todos los derechos reservados.</div>
            <div>Piantini · Serrallés · Santo Domingo · RD</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
