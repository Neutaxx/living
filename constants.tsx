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
    description: "Mantenimiento con contacto y sin contacto en redes de alta, media y baja tensión, ejecutado mediante canastas aisladas, escaleras, plataformas y andamios dieléctricos, incluyendo lavado de redes y equipos energizados, garantizando continuidad del servicio, seguridad operativa y cumplimiento del RETIE.",
    benefit: "Garantiza la continuidad del servicio sin interrupciones para el usuario final.",
    icon: Zap
  },
  {
    id: "termografia-electrica",
    title: "Inspección Termográfica Eléctrica",
    description: "Inspección avanzada aplicada a redes eléctricas de media y alta tensión y a equipos críticos como transformadores, seccionadores, interruptores, empalmes y bancos de condensadores, orientada a la detección temprana de sobrecalentamientos y fallas incipientes.",
    benefit: "Identificación temprana de fallas críticas antes de que ocurran.",
    icon: Activity
  },
  {
    id: "termografia-mecanica",
    title: "Inspección Termográfica Mecánica",
    description: "Diagnóstico preventivo aplicado a válvulas, trampas de vapor, tanques y contenedores, permitiendo identificar pérdidas energéticas y fallas operativas que afectan la eficiencia y confiabilidad de los procesos.",
    benefit: "Optimización de la eficiencia y confiabilidad de procesos industriales.",
    icon: Search
  },
  {
    id: "conductores",
    title: "Pruebas a Conductores de Media Tensión",
    description: "Pruebas eléctricas especializadas aplicadas a conductores y cableado de media tensión, para verificar el estado del aislamiento, continuidad y confiabilidad, asegurando una operación segura conforme al RETIE.",
    benefit: "Certificación de la integridad técnica de sus activos eléctricos.",
    icon: CheckCircle2
  },
  {
    id: "calidad-energia",
    title: "Análisis de Calidad y Energía",
    description: "Medición y análisis de calidad de energía aplicados a acometidas eléctricas, bancos de condensadores, entradas de potencia, equipos eléctricos y variadores de velocidad, orientados a la optimización energética y protección de activos.",
    benefit: "Optimización energética y protección de equipos sensibles.",
    icon: Activity
  },
  {
    id: "spt",
    title: "Sistemas de Puesta a Tierra",
    description: "Evaluación y medición aplicadas a mallas de puesta a tierra, electrodos y sistemas asociados, mediante medición de equipotencialidad, resistencia de malla y resistividad del suelo, garantizando la protección de personas y equipos y el cumplimiento estricto del RETIE.",
    benefit: "Seguridad absoluta para el personal y la infraestructura.",
    icon: ShieldCheck
  },
  {
    id: "transformadores",
    title: "Pruebas a Transformadores",
    description: "Pruebas eléctricas aplicadas a transformadores de potencia y distribución, incluyendo relación de transformación, resistencia de aislamiento, resistencia de fase y secuencia de fase, orientadas a asegurar confiabilidad y prolongar la vida útil del equipo.",
    benefit: "Prolongación de la vida útil y confiabilidad de transformadores.",
    icon: Cpu
  },
  {
    id: "interruptores",
    title: "Pruebas a Interruptores de Media Tensión",
    description: "Evaluación aplicada a interruptores de media tensión, mediante pruebas de resistencia de aislamiento y tangente delta, fortaleciendo la seguridad y disponibilidad de la red eléctrica.",
    benefit: "Mayor disponibilidad y seguridad de la red eléctrica.",
    icon: Zap
  },
  {
    id: "reles",
    title: "Pruebas a Relés de Protección",
    description: "Pruebas operativas aplicadas a relés de protección, verificando disparo, tiempos de actuación y correcta coordinación del sistema eléctrico.",
    benefit: "Protección efectiva del sistema eléctrico.",
    icon: ShieldCheck
  },
  {
    id: "motores",
    title: "Diagnóstico de Motores Eléctricos – MCE MAX",
    description: "Evaluación avanzada aplicada a motores eléctricos, mediante medición de inductancia, resistencia e aislamiento de bobinados y verificación de parámetros de funcionamiento, permitiendo anticipar fallas y reducir mantenimientos no programados.",
    benefit: "Reducción de mantenimientos no programados y tiempos de paro.",
    icon: Activity
  },
  {
    id: "drones",
    title: "Inspección de Redes por Dron",
    description: "Inspección técnica de líneas de media y alta tensión mediante drones especializados, optimizando tiempos de intervención, costos operativos y seguridad, especialmente en zonas de difícil acceso.",
    benefit: "Alcance total y reducción drástica de riesgos laborales.",
    icon: Cpu
  },
  {
    id: "construccion",
    title: "Construcción y Mantenimiento de Redes Eléctricas",
    description: "Construcción, mantenimiento y modernización de redes eléctricas energizadas y desenergizadas, bajo estándares técnicos, de seguridad y normativos vigentes.",
    benefit: "Infraestructura robusta construida bajo estándares internacionales.",
    icon: HardHat
  },
  {
    id: "complementarios",
    title: "Servicios Complementarios",
    description: "Poda, tala y rocería en redes eléctricas de baja, media y alta tensión. Alumbrado público. Construcción, interventoría y consultoría en sistemas de energía y energías renovables.",
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