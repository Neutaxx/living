import { 
  Zap, 
  Activity, 
  Search, 
  ShieldCheck, 
  Cpu, 
  HardHat, 
  CheckCircle2, 
  Users, 
  Clock, 
  Award,
  Leaf
} from "lucide-react";
import { ServiceItem, ClientProject, DifferentialItem } from "./types";

export const COMPANY_INFO = {
  name: "LIVING S.A.S.",
  slogan: "Energía segura, Soluciones ágiles",
  phone: "317 111 15 55 - 311 571 20 95",
  email: "info.comercial@livingsas.com",
  address: "Carrera 52 #75-23 Bogotá – Colombia",
  description: "Somos una compañía especializada en soluciones avanzadas para construcción y mantenimiento de sistemas eléctricos en media y alta tensión, bajo estrictos protocolos de línea viva."
};

export const SERVICES: ServiceItem[] = [
  {
    id: "linea-viva",
    title: "Mantenimiento de Redes Energizadas (Línea Viva)",
    description: "Mantenimiento a contacto y sin contacto en redes de alta, media y baja tensión, utilizando carro canastas, escaleras, plataformas y andamios dieléctricos.",
    benefit: "Garantiza la continuidad del servicio sin interrupciones para el usuario final.",
    icon: Zap
  },
  {
    id: "diagnostico",
    title: "Inspección y Diagnóstico Predictivo",
    description: "Termografía, ultrasonido, ultrasonido visual (NL Acoustics – Teledyne FLIR) y cronografía especializada.",
    benefit: "Identificación temprana de fallas críticas antes de que ocurran.",
    icon: Search
  },
  {
    id: "pruebas",
    title: "Pruebas Eléctricas y Ensayos Especializados",
    description: "Inyección de corriente, ensayos a cableado de potencia (HI-POT y VLF), pruebas de relación de transformación, factor de pérdidas (Tangente Delta) y capacitancia.",
    benefit: "Certificación de la integridad técnica de sus activos eléctricos.",
    icon: Activity
  },
  {
    id: "spt",
    title: "Sistemas de Puesta a Tierra (SPT)",
    description: "Medición, análisis y mejoramiento de sistemas de puesta a tierra, garantizando la protección de personas, equipos y el cumplimiento normativo.",
    benefit: "Seguridad absoluta para el personal y la infraestructura.",
    icon: ShieldCheck
  },
  {
    id: "drones",
    title: "Inspección de Redes con Drones",
    description: "Inspección técnica de líneas de media y alta tensión mediante drones, optimizando tiempos, costos y seguridad en zonas de difícil acceso.",
    benefit: "Alcance total y reducción drástica de riesgos laborales.",
    icon: Cpu
  },
  {
    id: "construccion",
    title: "Construcción y Mantenimiento de Redes",
    description: "Desarrollo de proyectos de construcción, mantenimiento y modernización de redes energizadas y desenergizadas.",
    benefit: "Infraestructura robusta construida bajo estándares internacionales.",
    icon: HardHat
  },
  {
    id: "complementarios",
    title: "Servicios Complementarios",
    description: "Poda, tala y rocería en redes. Alumbrado público y semaforización. Construcción e interventoría en sistemas de energía renovable.",
    benefit: "Gestión integral del entorno y sistemas secundarios.",
    icon: Leaf
  }
];

export const CLIENTS: ClientProject[] = [
  {
    id: "enel",
    name: "Enel Codensa",
    sector: "Operador de Red",
    serviceType: "Mantenimiento Línea Viva",
    description: "Ejecución de mantenimiento preventivo en circuitos de 11.4kV y 34.5kV sin corte de servicio, asegurando disponibilidad energética para más de 50,000 usuarios.",
    logoPlaceholder: "ENEL"
  },
  {
    id: "geb",
    name: "Grupo Energía Bogotá",
    sector: "Transmisión",
    serviceType: "Consultoría y Pruebas",
    description: "Diagnóstico avanzado de subestaciones y pruebas VLF en cableado de potencia para expansión de infraestructura crítica.",
    logoPlaceholder: "GEB"
  },
  {
    id: "parex",
    name: "Parex Resources",
    sector: "Oil & Gas",
    serviceType: "Sistemas de Puesta a Tierra",
    description: "Certificación y rediseño de mallas de puesta a tierra en campos petroleros, cumpliendo normativa RETIE y estándares internacionales de seguridad.",
    logoPlaceholder: "PAREX"
  },
  {
    id: "ecopetrol",
    name: "Ecopetrol",
    sector: "Hidrocarburos",
    serviceType: "Inspección con Drones",
    description: "Monitoreo termográfico aéreo de líneas de transmisión privadas en zonas selváticas de difícil acceso geográfico.",
    logoPlaceholder: "ECO"
  },
  {
    id: "oxy",
    name: "OXY",
    sector: "Energía",
    serviceType: "Mantenimiento Preventivo",
    description: "Intervención en infraestructura de alta tensión para garantizar continuidad operativa en plantas de procesamiento.",
    logoPlaceholder: "OXY"
  },
  {
    id: "gasnatural",
    name: "Gas Natural Fenosa",
    sector: "Servicios Públicos",
    serviceType: "Construcción de Redes",
    description: "Ampliación de redes de distribución y acometidas industriales para nuevos desarrollos urbanísticos.",
    logoPlaceholder: "GNF"
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    title: "Ética y Transparencia",
    description: "Relaciones comerciales basadas en la honestidad y el cumplimiento estricto de lo pactado.",
    icon: CheckCircle2
  },
  {
    title: "Talento Humano",
    description: "Equipo de ingeniería certificado y técnicos especialistas con amplia trayectoria en sector energético.",
    icon: Users
  },
  {
    title: "Agilidad de Respuesta",
    description: "Capacidad operativa para atender emergencias y requerimientos urgentes 24/7.",
    icon: Clock
  },
  {
    title: "Excelencia Técnica",
    description: "Equipos de última generación para diagnóstico y ejecución precisa.",
    icon: Award
  }
];