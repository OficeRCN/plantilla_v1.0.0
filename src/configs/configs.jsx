// Icons
import { HomeOutlined } from "@mui/icons-material";
import PaymentIcon from "@mui/icons-material/Payment";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import RssFeedIcon from "@mui/icons-material/RssFeed";

// Components
import { Home } from "../pages/home";
import { Consultas } from "../pages/consultas";
import { Documentos } from "../pages/documentos";
import { Nosotros } from "../pages/nosotros";
import { Servicios } from "../pages/servicios";
import { PageNotFound } from "../pages/pagenotfound";

export const appTitle = "Nombre de la empresa";

export const navbarRoutes = [
  {
    path: "/",
    title: "Inicio",
    element: <Home />,
    icon: <HomeOutlined />,
  },
  {
    path: "/servicios",
    title: "Servicios",
    element: <Servicios />,
    icon: <RssFeedIcon />,
  },
  // {
  //   path: "/consultas",
  //   title: "Consultas",
  //   element: <Consultas />,
  //   icon: <PaymentIcon />,
  // },
  {
    path: "/documentos",
    title: "Documentos",
    element: <Documentos />,
    icon: <ArticleIcon />,
  },
  {
    path: "/nosotros",
    title: "Nosotros",
    element: <Nosotros />,
    icon: <InfoIcon />,
  },
];

export const routerRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  // {
  //   path: "/consultas",
  //   element: <Consultas />,
  // },
  {
    path: "/documentos",
    element: <Documentos />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

export const footers = [
  {
    title: "Redes sociales",
    description: ["Facebook", "WhatsApp"],
    path: [
      "https://www.facebook.com/rednuevaconexion",
      "https://api.whatsapp.com/send?phone=59399 2419399&text=Hola.%20Saludos,%20permitame%20conocer%20m%C3%A1s%20de%20sus%20servicios",
    ],
  },

  {
    title: "Quick links",
    description: ["Inicio", "Servicios", "Consultas", "Nosotros"],
    path: ["/", "/servicios", "/consultas", "/nosotros"],
  },
  {
    title: "Links de interés",
    description: [
      "Speed test",
      "Presidencia de Ecuador",
      "Arcotel",
      "Telecomunicaciones",
    ],
    path: [
      "https://www.speedtest.net/",
      "https://www.presidencia.gob.ec/",
      "https://www.arcotel.gob.ec/",
      "https://www.telecomunicaciones.gob.ec/",
    ],
  },
  {
    title: "Comunidad",
    description: ["Pagos", "Soporte", "Correo"],
    path: [
      "https://api.whatsapp.com/send?phone=59399 2419399&text=Hola.%20Saludos,%20permitame%20conocer%20m%C3%A1s%20de%20sus%20servicios",
      "https://api.whatsapp.com/send?phone=59399 2419399&text=Hola.%20Saludos,%20permitame%20conocer%20m%C3%A1s%20de%20sus%20servicios",
      "kenaguirosado@gmail.com",
    ],
  },
];

export const planesRadio = [
  {
    title: "Home",
    price: "17.86",
    description: [
      "Navega con la mejor velocidad",
      "Ideal para estudiantes",
      "WIFI incluido",
      "12MB Compartición 1:1",
    ],
    buttonText: "Contratar plan",
    buttonVariant: "outlined",
  },
  {
    title: "Micro Empresarial",
    subheader: "Most popular",
    price: "35",
    description: [
      "Navega con la mejor velocidad.",
      "Ideal para Hogar o Cyber.",
      "WIFI Incluido",
      "15 MB Compartición 1:1",
    ],
    buttonText: "Contratar plan",
    buttonVariant: "contained",
  },
  {
    title: "Corporativo",
    price: "85",
    description: [
      "Navega con la mejor velocidad.",
      "Ideal para Hogar, Oficina y Salas.",
      "WIFI Incluido",
      "18 MB Compartición 1:1",
    ],
    buttonText: "Contratar plan",
    buttonVariant: "outlined",
  },
  {
    title: "Pymes",
    price: "100",
    description: [
      "Navega con la mejor velocidad.",
      "Ideal para Micro Empresas.",
      "WIFI Incluido",
      "20 MB Compartición 1:1",
    ],
    buttonText: "Contratar plan",
    buttonVariant: "outlined",
  },
  {
    title: "High Speed",
    price: "120",
    description: [
      "Navega con la mejor velocidad.",
      "Ideal para Empresas.",
      "WIFI Incluido",
      "25 MB Compartición 1:1",
    ],
    buttonText: "Contratar plan",
    buttonVariant: "outlined",
  },
];
export const planesFibra = [
  {
    title: "PLAN F.O. 75MB",
    price: "19.64",
    description: [
      "Navega con la mejor velocidad",
      "Ideal para estudiantes",
      "WIFI incluido",
      "Compartición 1:1",
    ],
    buttonText: "Contratar plan",
    buttonVariant: "outlined",
  },
  {
    title: "PLAN F.0. 100MB",
    subheader: "Most popular",
    price: "35",
    description: [
      "Navega con la mejor velocidad.",
      "Ideal para Hogar o Cyber.",
      "WIFI Incluido",
      "Compartición 1:1",
    ],
    buttonText: "Contratar plan",
    buttonVariant: "contained",
  },
  {
    title: "PLAN F.O. 150MB",
    price: "50",
    description: [
      "Navega con la mejor velocidad.",
      "Ideal para Hogar, Oficina y Salas.",
      "WIFI Incluido",
      "Compartición 1:1",
    ],
    buttonText: "Contratar plan",
    buttonVariant: "outlined",
  },
  {
    title: "PLAN F.O. 30MB",
    price: "100",
    description: [
      "Navega con la mejor velocidad.",
      "Ideal para Micro Empresas.",
      "WIFI Incluido",
      "Compartición 1:1",
    ],
    buttonText: "Contratar plan",
    buttonVariant: "outlined",
  },
];

export const rowData = [
  {
    description: [
      "Relación con el cliente",
      "Porcentaje de reclamos generales procedentes",
      "Tiempo máximo de reclamos de facturación",
      "Tiempo promedio de reparación de avería efectivas",
      "Porcentaje de módems utilizados (SIN EFECTO con Resolución 01-01-ARCOTEL-2022)",
      "Porcentaje de reclamos por la capacidad del canal de acceso contratado por el cliente",
    ],
    porcentaje: ["0%", "0%", "0%", "0%", "0%", "0%"],
  },
];

export const pdfRoutes = [
  "/pdf/071-03-CONATEL-2002 valor agregado.pdf",
  "/pdf/Consejos_de_seguridad_Antel.pdf",
  "/pdf/control parental.pdf",
  "/pdf/Definiciones_Banda_Ancha_Comparticion.pdf",
  "/pdf/Firewall.pdf",
  "/pdf/ley_organica_de_telecomunicaciones (1).pdf",
  "/pdf/NormadeCalidad2009.pdf",
  "/pdf/PORCENTAJES_DE_CONSUMO (1).pdf",
  "/pdf/qos sva.pdf",
  "/pdf/reglamento abonado.pdf",
  "/pdf/REGLAMENTO_GENERAL_LEY_TELECOMUNICACIONES.pdf",
  "/pdf/Reglamento-Ley-Organica-de-Telecomunicaciones.pdf",
  "/pdf/reglamento-para-los-abonados-clientes-sva.pdf",
  "/pdf/tel_477_16_conatel_2012.pdf",
  "/pdf/terminologias.pdf",
];

export const columnsConsultas = [
  {
    id: "ncomprobante",
    label: "N° Comprobante",
    minWidth: 170,
    align: "center",
  },
  {
    id: "valor",
    label: "Valor",
    minWidth: 170,
    align: "center",
  },
  {
    id: "vencimiento",
    label: "Vencimiento",
    minWidth: 170,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
  },
];

export const columnsListar = [
  {
    id: "id",
    label: "Id",
    minWidth: 170,
    align: "center",
  },
  {
    id: "emitido",
    label: "Emitido",
    minWidth: 170,
    align: "center",
  },
  {
    id: "vencimiento",
    label: "Vencimiento",
    minWidth: 170,
    align: "center",
  },
  {
    id: "subtotal",
    label: "Subtotal",
    minWidth: 170,
    align: "center",
  },
  {
    id: "total",
    label: "Total",
    minWidth: 170,
    align: "center",
  },
  {
    id: "fecha_pago",
    label: "Fecha pago",
    minWidth: 170,
    align: "center",
  },
  {
    id: "estado",
    label: "Estado",
    minWidth: 170,
    align: "center",
  },
  {
    id: "forma_pago",
    label: "Forma pago",
    minWidth: 170,
    align: "center",
  },
];

export const columnsDatos = [
  {
    id: "id",
    label: "Id",
    minWidth: 170,
    align: "center",
  },
  {
    id: "emitido",
    label: "Emitido",
    minWidth: 170,
    align: "center",
  },
  {
    id: "vencimiento",
    label: "Vencimiento",
    minWidth: 170,
    align: "center",
  },
  {
    id: "subtotal",
    label: "Subtotal",
    minWidth: 170,
    align: "center",
  },
  {
    id: "total",
    label: "Total",
    minWidth: 170,
    align: "center",
  },
  {
    id: "fecha_pago",
    label: "Fecha pago",
    minWidth: 170,
    align: "center",
  },
  {
    id: "estado",
    label: "Estado",
    minWidth: 170,
    align: "center",
  },
  {
    id: "forma_pago",
    label: "Forma pago",
    minWidth: 170,
    align: "center",
  },
];
