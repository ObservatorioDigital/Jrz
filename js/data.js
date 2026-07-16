/* ==========================================================================
   Observatorio Juárez — data.js
   Global placeholder data (plain consts, no ES modules).
   All content is editable placeholder. Marked [EDITAR] where the user must
   verify or insert real, sourced data. No real names, no specific accusations.
   ========================================================================== */

/* --------------------------------------------------------------------------
   TEMAS — Infographic topics ("Temas más señalados").
   Each: nombre, pct (0–100), categoria (used for icon/color grouping).
   -------------------------------------------------------------------------- */
const TEMAS = [
  { nombre: 'Baches',                     pct: 32, categoria: 'baches' },
  { nombre: 'Basura / Limpia',            pct: 24, categoria: 'basura' },
  { nombre: 'Alumbrado',                  pct: 18, categoria: 'alumbrado' },
  { nombre: 'Obra pública abandonada',    pct: 14, categoria: 'obras' },
  { nombre: 'Patrullas / Seguridad',      pct: 12, categoria: 'seguridad' }
];

/* --------------------------------------------------------------------------
   CARTEL — "Los más buscados: el cartel de Cruz" (tarjeta del panorama).
   The grid renders from PERSONAJES (expedientes) around this center cell,
   following the original hand-drawn mockup. Clicking a face opens its
   expediente; clicking the center scrolls to #expedientes.
   -------------------------------------------------------------------------- */
const CARTEL_CENTRO = {
  nombre: 'Cruz Pérez Cuéllar',
  etiqueta: 'El más chueco',
  foto: 'assets/personajes/cruz-perez-cuellar.jpg'
};

/* --------------------------------------------------------------------------
   CRONOLOGIA — Timeline of documented cases (2022–2026).
   Source: editorial notes in /Notas (NOTAS below) — audits, prosecutors'
   files and press investigations during the Pérez Cuéllar administration.
   Each: fecha, titulo, descripcion, categoria (corrupcion|seguridad|transparencia),
   monto (optional highlight), fuente (optional attribution).
   -------------------------------------------------------------------------- */
const CRONOLOGIA = [
  {
    fecha: 'Abr 2022',
    titulo: '“Bacheo Transparente”: reparaciones simuladas',
    descripcion: 'Inspecciones ciudadanas detectan mezcla asfáltica de baja calidad y baches “reparados” solo en papel, en 9 contratos del programa municipal.',
    categoria: 'corrupcion',
    monto: '43.5 MDP',
    fuente: 'Plan Estratégico de Juárez'
  },
  {
    fecha: 'Nov 2022',
    titulo: '“Juárez Digital”: pagos sin evidencia',
    descripcion: 'La Auditoría Superior del Estado observa pagos a proveedores sin acreditar la entrega ni la puesta en marcha de los sistemas contratados por adjudicación directa.',
    categoria: 'corrupcion',
    monto: '61.3 MDP',
    fuente: 'Auditoría Superior del Estado de Chihuahua'
  },
  {
    fecha: 'Jun 2023',
    titulo: 'Policías municipales secuestradores de migrantes',
    descripcion: 'Dos agentes en activo son detenidos por privar de la libertad a migrantes a la salida del aeropuerto y exigir rescates de hasta medio millón de pesos.',
    categoria: 'seguridad',
    fuente: 'Fiscalía General del Estado'
  },
  {
    fecha: 'Oct 2023',
    titulo: '“Fabuloso-gate”: contratos al propio gabinete',
    descripcion: 'Cuatro contratos directos de insumos de limpieza acaban en empresas fachada ligadas al director de Desarrollo Económico, que renuncia ante la presión.',
    categoria: 'corrupcion',
    monto: '6.5 MDP',
    fuente: 'Investigaciones periodísticas'
  },
  {
    fecha: 'Nov 2023',
    titulo: 'Enriquecimiento ilícito: la casa de El Campestre',
    descripcion: 'Denuncia formal contra el alcalde por habitar una residencia de 26–30 MDP, imposible de pagar con su sueldo; la Fiscalía Anticorrupción embarga el inmueble en 2024.',
    categoria: 'corrupcion',
    monto: '30 MDP',
    fuente: 'Fiscalía Anticorrupción / denuncia PAN'
  },
  {
    fecha: 'Ene 2024',
    titulo: '“Mochilagate”: sobreprecio en útiles escolares',
    descripcion: 'El municipio paga a precio de menudeo 250 mil kits de mochilas con un sobreprecio cercano a los 50 MDP; el caso llega a la Fiscalía Anticorrupción.',
    categoria: 'corrupcion',
    monto: '50 MDP',
    fuente: 'Norte Digital'
  },
  {
    fecha: 'Ene 2025',
    titulo: 'Narcotúnel protegido por mandos municipales',
    descripcion: 'Frente a la Plaza de la Mexicanidad se descubre un túnel para tráfico de drogas y personas, cuidado por escoltas policiacos asignados al narcolíder “Delta 1”.',
    categoria: 'seguridad',
    fuente: 'Causa penal en el Distrito Oeste de Texas'
  },
  {
    fecha: 'Jun 2025',
    titulo: 'Crematorio Plenitud: 380 cuerpos y sobornos',
    descripcion: 'Autoridades estatales hallan 380 cuerpos apilados en una bodega sin licencias. Inspectores municipales y policías omitieron —o cobraron por ignorar— su operación.',
    categoria: 'seguridad',
    fuente: 'Intervención de autoridades estatales'
  },
  {
    fecha: 'Ago 2025',
    titulo: 'Policías activos, escoltas del narco',
    descripcion: 'En el enfrentamiento donde muere el líder de “La Línea” caen también sus escoltas: dos elementos en activo de la Policía Municipal, asignados por un comandante.',
    categoria: 'seguridad',
    fuente: 'Reportes de prensa local'
  },
  {
    fecha: '2025',
    titulo: 'Venta del suelo destinado a escuelas y bomberos',
    descripcion: 'El municipio vende a 19 constructoras el 6% de suelo reservado a equipamiento urbano; a cambio recibe vehículos, despensas y pavimento para fraccionamientos de lujo.',
    categoria: 'corrupcion',
    fuente: 'Expediente 014/2025, Tribunal Estatal de Justicia Administrativa'
  },
  {
    fecha: 'May 2026',
    titulo: 'Contratos a la red política del hermano del alcalde',
    descripcion: 'Al menos 20 contratos de obra pública se asignan a colaboradores del diputado Alejandro Pérez Cuéllar, en concursos con un solo competidor o competidores paleros.',
    categoria: 'corrupcion',
    monto: '74 MDP',
    fuente: 'Investigaciones periodísticas'
  },
  {
    fecha: '2026',
    titulo: 'Amparo para ocultar la nómina de la parentela',
    descripcion: 'El alcalde con licencia litiga en tribunales federales —con recursos del erario— para no revelar cuántos familiares suyos cobran más de 80 mil pesos al mes del presupuesto.',
    categoria: 'transparencia',
    fuente: 'Solicitud ciudadana de transparencia'
  }
];

/* --------------------------------------------------------------------------
   (El mapa de servicios ahora es un iframe en vivo de bachesjrz.com;
   los marcadores locales PUNTOS_SERVICIOS se retiraron.)
   -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
   PUNTOS_DENUNCIAS — Map 2 markers (public-safety / accountability).
   Generic, prudent wording ("presunto", "reportado a la CEDH").
   No real names, no fabricated cases.
   cat: gobierno | corrupcion | abusos | investigacion
   -------------------------------------------------------------------------- */
const PUNTOS_DENUNCIAS = [
  { lat: 31.6904, lng: -106.4245, cat: 'gobierno',      titulo: 'Reporte de mal gobierno',   descripcion: 'Presunta omisión en la prestación de un servicio público. Reporte ciudadano. [EDITAR]' },
  { lat: 31.7250, lng: -106.4600, cat: 'gobierno',      titulo: 'Reporte de mal gobierno',   descripcion: 'Presunta falta de respuesta a solicitudes vecinales. [EDITAR]' },
  { lat: 31.6600, lng: -106.4000, cat: 'corrupcion',    titulo: 'Presunta irregularidad',    descripcion: 'Presunta irregularidad administrativa reportada; en verificación. [EDITAR: fuente]' },
  { lat: 31.7100, lng: -106.4800, cat: 'corrupcion',    titulo: 'Presunta irregularidad',    descripcion: 'Presunto uso indebido de recursos, según reporte ciudadano. [EDITAR]' },
  { lat: 31.6750, lng: -106.4550, cat: 'abusos',        titulo: 'Denuncia ciudadana',        descripcion: 'Presunto abuso de autoridad, reportado a la CEDH. [EDITAR: folio]' },
  { lat: 31.7400, lng: -106.4300, cat: 'abusos',        titulo: 'Denuncia ciudadana',        descripcion: 'Presunto uso excesivo de la fuerza; caso reportado. [EDITAR]' },
  { lat: 31.6350, lng: -106.3900, cat: 'abusos',        titulo: 'Denuncia ciudadana',        descripcion: 'Presunta detención irregular, en seguimiento. [EDITAR]' },
  { lat: 31.7000, lng: -106.4400, cat: 'investigacion', titulo: 'Caso en investigación',     descripcion: 'Caso en seguimiento con base en notas públicas. [EDITAR: fuente]' },
  { lat: 31.6850, lng: -106.4950, cat: 'investigacion', titulo: 'Caso en investigación',     descripcion: 'Reporte en proceso de verificación por el observatorio. [EDITAR]' },
  { lat: 31.7550, lng: -106.4450, cat: 'investigacion', titulo: 'Caso en investigación',     descripcion: 'Expediente ciudadano abierto; pendiente de corroborar. [EDITAR]' }
];

/* --------------------------------------------------------------------------
   NOTAS — Editorial notes (blog). Source: /Notas .docx files.
   Each: id, categoria, color (chip), fecha, titulo, resumen (card preview),
   cuerpo: array of blocks {t:'h'|'p', x:'text'} rendered in the reader modal.
   -------------------------------------------------------------------------- */
const NOTAS = [
  {
    id: 'corrupcion-peculado-opacidad',
    categoria: 'Corrupción',
    color: 'red',
    fecha: 'Julio 2026',
    autor: 'Redacción Observatorio Juárez',
    imagen: 'assets/notas/nota-corrupcion.jpg',
    imagenAlt: 'Policía municipal armado junto a una patrulla durante un operativo nocturno',
    titulo: 'Corrupción, peculado y opacidad, sellos del gobierno de Cruz Pérez Cuéllar',
    resumen: 'Nueve casos documentados —del programa Bacheo Transparente al Crematorio Plenitud y las redes de nepotismo— que retratan una administración municipal marcada por desvíos millonarios, contratos a modo y opacidad sistemática.',
    cuerpo: [
      { t: 'h', x: '1. Abril de 2022: corrupción en programa de Bacheo' },
      { t: 'p', x: 'La organización ciudadana Plan Estratégico de Juárez detectó un esquema de corrupción en tres contratos otorgados por el municipio para este rubro. Las quejas políticas y ciudadanas por simulación de contratos y el mal estado de las calles continuaron de forma recurrente.' },
      { t: 'p', x: 'Mediante el programa Bacheo Transparente, el gobierno de Cruz Pérez Cuéllar asignó un presupuesto de 43.5 millones de pesos en 9 contratos a empresas encargadas de bachear, pero cuando Plan Estratégico realizó una inspección ciudadana se detectó la baja calidad de la mezcla asfáltica, además de que la reparación de baches era una vil simulación.' },
      { t: 'h', x: '2. Noviembre de 2022: Proyecto “Juárez Digital”' },
      { t: 'p', x: 'De acuerdo con los informes de fiscalización de la Auditoría Superior del Estado (ASE) de Chihuahua, en la revisión de la Cuenta Pública del gobierno municipal de Juárez, las observaciones financieras específicas en torno al programa Juárez Digital ascendieron a un monto total de 61.3 millones de pesos.' },
      { t: 'p', x: 'Las principales anomalías técnicas y documentales detectadas en dicho proyecto fueron: falta de evidencia de operación, pues la autoridad fiscalizadora determinó que el gobierno de Cruz Pérez Cuéllar realizó los pagos al proveedor sin que existiera la evidencia documental que acreditara el proceso de entrega-recepción de los sistemas contratados. Los auditores constataron también la ausencia de pruebas que confirmaran la correcta implementación y puesta en marcha del sistema de contabilidad y las plataformas digitales contempladas, además de que los contratos se realizaron sospechosamente por adjudicación directa.' },
      { t: 'h', x: '3. Noviembre de 2023: enriquecimiento ilícito y la “Casa de El Campestre”' },
      { t: 'p', x: 'Uno de los señalamientos más evidentes de la corrupción de Cruz Pérez Cuéllar ocurrió a raíz de denuncias presentadas ante la Fiscalía Anticorrupción el 30 de noviembre de 2023, cuando diputados del Partido Acción Nacional (PAN) interpusieron de forma oficial la denuncia por presunto enriquecimiento ilícito.' },
      { t: 'p', x: 'El escándalo documentó que el presidente municipal habitaba una residencia con un valor estimado en el mercado de entre 26 y 30 millones de pesos, ubicada en el exclusivo fraccionamiento El Campestre.' },
      { t: 'p', x: 'El escándalo alcanzó su punto crítico el 23 de abril de 2024, cuando la Fiscalía Anticorrupción realizó un operativo en el fraccionamiento Campestre para asegurar y embargar la propiedad ubicada en la calle Fresno, provocando el desalojo del alcalde (quien se encontraba con licencia por campaña electoral) y de su familia.' },
      { t: 'p', x: 'Activistas señalaron que el sueldo promedio del alcalde, de 100 mil pesos mensuales, hacía financieramente imposible adquirir o pagar una renta de dicha residencia de forma transparente.' },
      { t: 'p', x: 'Además, se descubrió que el propietario original de la vivienda era un exfuncionario y asesor de su propio gobierno, Daniel Pando, lo que disparó acusaciones de conflicto de interés y prestanombres.' },
      { t: 'h', x: '4. Octubre de 2023: el “Fabuloso-gate” de Iván Pérez Ruiz' },
      { t: 'p', x: 'Investigaciones periodísticas revelaron que el gobierno municipal de Juárez otorgó de forma directa cuatro contratos millonarios por 6.5 millones de pesos para la compra de insumos de limpieza como cloro, jabón y desinfectante de la marca Fabuloso.' },
      { t: 'p', x: 'Dichos contratos fueron asignados a la empresa fachada Malotti S. de R.L., que comparte domicilios y representantes legales con Le Granel, la cadena de tiendas de productos de limpieza propiedad de Iván Pérez Ruiz, entonces director de Desarrollo Económico del Municipio.' },
      { t: 'p', x: 'Ante la presión del caso, el funcionario renunció a su cargo el 9 de octubre de 2023. Un mes después, en noviembre de 2023, el Congreso del Estado de Chihuahua emitió un exhorto formal para que la Auditoría Superior del Estado revisara los contratos bajo las claves de asignación directa del municipio.' },
      { t: 'p', x: 'El 6 de diciembre de 2023, miembros del PAN y diputados locales interpusieron una denuncia formal ante la Fiscalía Anticorrupción por el presunto delito de corrupción y uso ilegal de atribuciones. Este caso ejemplificó el debate en torno al uso de empresas fachada y licitaciones direccionadas para beneficiar a miembros del gabinete municipal.' },
      { t: 'h', x: '5. Enero de 2024: el “Mochilagate”' },
      { t: 'p', x: 'La corrupción en el programa de útiles escolares se destapó de forma masiva tras una investigación del medio Norte Digital, que evidenció que el gobierno municipal pagó un sobreprecio cercano a los 50 millones de pesos en la compra de 250 mil kits de mochilas con útiles escolares, adquiriéndolos a precio de menudeo. Esto derivó en denuncias formales ante la Fiscalía Anticorrupción del Estado.' },
      { t: 'h', x: '6. Junio de 2025: Crematorio Plenitud' },
      { t: 'p', x: 'Tras denuncias ciudadanas por malos olores en la colonia Granjas Polo Gamboa, las autoridades estatales intervinieron el 26 de junio del 2025 una bodega en la que operaba sin licencias sanitarias el Crematorio Plenitud, donde se localizaron 380 cuerpos apilados y guardados de manera ilegal, sin refrigeración y en completo estado de descomposición.' },
      { t: 'p', x: 'El infame manejo de cientos de cuerpos ocurrió principalmente por la ceguera y corrupción del gobierno municipal de Cruz Pérez Cuéllar, que falló en su obligación del control y supervisión de las actividades comerciales de un crematorio que funcionaba sin licencias vigentes, ni supervisión de las actividades a que estaban obligadas las direcciones de Ecología, Comercio y Desarrollo Urbano, a su cargo.' },
      { t: 'p', x: 'Además, hubo también responsabilidad por omisión, negligencia y complicidad de la policía municipal, que recibía sobornos directos para cuidar la impunidad del crematorio, porque éste no operaba en el vacío: para mantener casi 400 cuerpos acumulados en un espacio urbano ordinario, existió un flujo constante de carrozas fúnebres, vehículos de carga y emanaciones o dinámicas operativas que resultan imposibles de ocultar a los patrullajes rutinarios de la Policía Municipal, o a los inspectores de Ecología, Comercio y Desarrollo Urbano del Municipio.' },
      { t: 'h', x: '7. Mayo de 2026: contratos a aliados políticos y redes de nepotismo' },
      { t: 'p', x: 'El entorno familiar y las alianzas partidistas del alcalde han sido foco de constantes investigaciones periodísticas, la más notable publicada en el primer semestre de 2026.' },
      { t: 'p', x: 'En ese periodo se reveló que el gobierno municipal otorgó al menos 20 contratos de obra pública por un monto cercano a los 74 millones de pesos entre 2021 y 2025, a colaboradores de Alejandro Pérez Cuéllar, diputado federal y hermano del alcalde.' },
      { t: 'p', x: 'Las asignaciones directas y las licitaciones “a modo” beneficiaron a perfiles integrados a la estructura política y partidista del hermano del edil, entre ellos Irvin Alonso Ruiz Orozco y Kenya Daniela Garibay Baca, ambos ligados al equipo político y de campaña de Alejandro Pérez Cuéllar y vinculados a operadores del Partido Verde. Las empresas operaban bajo esquemas sospechosos, ganando concursos donde prácticamente participaban solas o contra un único competidor palero.' },
      { t: 'h', x: '8. 2025: venta de terrenos municipales' },
      { t: 'p', x: 'El municipio de Juárez ha vendido a 19 constructores de vivienda los porcentajes del 6 por ciento que por ley deben entregar para equipamiento urbano, donde debieron construir escuelas, guarderías, estaciones de bomberos y de policía en fraccionamientos populares. Ese recurso lo han utilizado para pavimentar calles y hacer banquetas en fraccionamientos de lujo de la ciudad.' },
      { t: 'p', x: 'Se tienen casos donde, a cambio del porcentaje de tierra que pertenecía al fraccionamiento, pidieron vehículos que donaron a organizaciones civiles afines a los intereses políticos de la administración municipal de Cruz Pérez Cuéllar, según se desprende del expediente 014/2025, resuelto por el Tribunal Estatal de Justicia Administrativa de Chihuahua.' },
      { t: 'p', x: 'En dicha resolución quedó documentado que, con autorización del Cabildo, la dirección de Desarrollo Urbano del Municipio pidió vehículos, despensas, cemento y pavimento para calles de los fraccionamientos de lujo de la ciudad, mientras que las despensas y cemento los ha utilizado para la compra de votos en las campañas políticas.' },
      { t: 'p', x: 'Entre los fraccionamientos afectados se encuentran Aria, Residencial del Valle, Privada Casandra, Terra Luna, Rinconadas del Valle, Belisa Residencial, Gran Reserva, Tres Cantos y Valle Senecú, principalmente.' },
      { t: 'h', x: '9. 2026: Cruz se ampara para no revelar salarios de familiares en la nómina municipal' },
      { t: 'p', x: 'El alcalde con licencia interpuso recurso de revisión ante el Tribunal Colegiado de Circuito para no responder una pregunta básica de transparencia realizada por una solicitud ciudadana: ¿cuántos familiares del alcalde con licencia trabajan en la nómina municipal y ganan más de 80 mil pesos mensuales?' },
      { t: 'p', x: 'La pregunta que el municipio se niega rotundamente a responder es de evidente interés general, porque cuestiona una irregularidad que prohíbe y sanciona, en su artículo cuarto, la Ley Federal de Austeridad Republicana.' },
      { t: 'p', x: 'Esta Ley, creada el 19 de noviembre de 2019 bajo el mandato de Andrés Manuel López Obrador, define formalmente el nepotismo como una conducta de corrupción que atenta contra el uso eficiente y honesto de los recursos públicos.' },
      { t: 'p', x: 'Cuando Cruz fue cuestionado por los canales oficiales de transparencia y se negó a responder interponiendo un recurso de amparo, confirmó que en la nómina municipal cobran sueldos elevados personas con las que tiene algún parentesco.' },
      { t: 'p', x: 'Es claro que no se trata de información confidencial, ni de seguridad nacional. Es información que debe ser pública por mandato de ley, pero al ocultarla mediante amparos y recursos de revisión en los tribunales federales, pone de manifiesto que tiene a su parentela cobrando del presupuesto municipal.' },
      { t: 'p', x: 'El contraste en la entidad es evidente. Otros ayuntamientos del estado de Chihuahua publican de forma digital y abierta los sueldos y salarios detallados de todos sus funcionarios. Cualquier ciudadano puede consultar sin trabas cuánto gana cada servidor público, desde el presidente municipal hasta el último elemento operativo de la administración.' },
      { t: 'p', x: 'Sin embargo, en Juárez esa información elemental no existe —o mejor dicho, existe, pero se oculta deliberadamente bajo el amparo de recursos legales costeados por el propio erario.' }
    ]
  },
  {
    id: 'robar-no-es-administrar',
    categoria: 'Opinión',
    color: 'green',
    fecha: 'Julio 2026',
    autor: 'Redacción Observatorio Juárez',
    imagen: 'assets/notas/nota-opinion.webp',
    imagenAlt: 'Catedral de Ciudad Juárez al atardecer',
    titulo: 'Robar no es administrar',
    resumen: 'Desde 2021, la administración municipal de Juárez ha estado bajo intensa fiscalización y señalamientos de corrupción. Mientras tanto, la ciudad se mantiene entre las más violentas del mundo.',
    cuerpo: [
      { t: 'p', x: 'Desde 2021, la administración municipal de Juárez, encabezada por Cruz Pérez Cuéllar, ha estado bajo una intensa fiscalización y señalamientos de corrupción, tanto por organizaciones civiles como por medios de comunicación independientes.' },
      { t: 'p', x: 'El gobierno municipal del alcalde de Morena con licencia, que busca la gubernatura de Chihuahua, está marcado por millonarios desvíos de recursos públicos y una compleja situación de inseguridad por complicidad con el crimen organizado, que han dado pie a varios escándalos de alto perfil mediático y denuncias formales ante la Fiscalía General del Estado, la Auditoría Superior del Estado y la Fiscalía Anticorrupción.' },
      { t: 'p', x: 'Las denuncias por corrupción, nepotismo, desviación de recursos para promocionarse en el Estado y asignación de contratos a funcionarios de su administración, se han visto agravadas con los múltiples casos de policías municipales involucrados en hechos de homicidio, protección de sicarios y narcolíderes, abuso sexual, robo y extorsión, que evidencian la corrupción que impera en la Secretaría de Seguridad Pública Municipal.' },
      { t: 'p', x: 'En consecuencia, la ciudad está en manos de delincuentes. Los números oficiales de violencia criminal que registra Ciudad Juárez no dejan mentir.' },
      { t: 'p', x: 'Con una tasa de 60.6 homicidios por cada 100 mil habitantes, Juárez ocupa actualmente el lugar número 12 a nivel nacional en incidencia de violencia homicida y el sitio 17 en el ranking de las ciudades más peligrosas del mundo.' },
      { t: 'p', x: 'Si se considera que de un total de 2,462 municipios que existen en el país, el de Juárez se mantiene en los primeros lugares del ranking internacional de peligrosidad, esto pone en evidencia el fracaso de la estrategia de seguridad que se aplica en la frontera.' },
      { t: 'p', x: 'Por si ello fuera poca cosa, el municipio de Juárez, gobernado por Morena, ocupa el segundo lugar de las fronteras del norte del país más peligrosas, después de Tijuana, con el mismo signo político y una tasa de homicidios de 70.0 por cada 100 mil habitantes.' }
    ]
  },
  {
    id: 'secuestradores-sicarios-policia',
    categoria: 'Seguridad',
    color: 'dark',
    fecha: 'Julio 2026',
    autor: 'Redacción Observatorio Juárez',
    imagen: 'assets/notas/nota-seguridad.png',
    imagenAlt: 'Patrulla de la policía municipal en la escena de un crimen frente a un centro cambiario',
    titulo: 'Secuestradores y sicarios en la policía municipal de Juárez',
    resumen: 'Policías señalados como secuestradores de migrantes, sicarios, escoltas del narco y cómplices del cobro de piso: los casos que evidencian la infiltración del crimen organizado en la corporación municipal.',
    cuerpo: [
      { t: 'p', x: 'Aunque en los primeros seis meses del año en curso Juárez registró 317 homicidios dolosos y tuvo una disminución de 171 en comparación con el mismo periodo del 2025, esto ocurrió gracias a la operación de la Plataforma Centinela del gobierno del Estado, no por la eficiencia de la policía municipal de Juárez.' },
      { t: 'p', x: 'De esta cifra destaca el hecho de que el 40 por ciento fueron considerados homicidios de alto impacto, como el último registrado el pasado sábado 27 de junio en la avenida Manuel Gómez Morín, afuera de una casa de cambio, a las 13:58 horas, a plena luz del día, donde una pareja de adultos mayores fueron asesinados a balazos cuando se encontraban a bordo de una camioneta.' },
      { t: 'p', x: 'Dicha avenida, y en particular este sector comercial, está considerado como un corredor seguro por la policía municipal, por la presencia policial que supuestamente debe tener las 24 horas del día, pero sospechosamente a la hora de los atentados nunca aparecen.' },
      { t: 'p', x: 'Esta violencia del crimen organizado ocurre a pesar de que Juárez cuenta con un estado de fuerza de 3,500 policías municipales, 1,800 elementos de la Guardia Nacional, 600 elementos del Ejército Mexicano y 50 agentes federales de investigación de la FGR.' },
      { t: 'p', x: 'Pero ni con ese estado de fuerza y ni con el apoyo de más de dos mil elementos de la Guardia Nacional y del Ejército, la policía municipal ha podido contener a los grupos criminales, por una simple razón: sus filas se encuentran infiltradas y los mandos tienen un alto grado de complicidad con el crimen organizado de la frontera.' },
      { t: 'p', x: 'Así lo revelan los casos de alto impacto que se han registrado donde elementos municipales han sido señalados como agresores sexuales, escoltas del narco, sicarios, secuestradores y cómplices de los grupos criminales que manejan el narcomenudeo en la ciudad.' },
      { t: 'h', x: 'Municipales secuestradores' },
      { t: 'p', x: 'En junio de 2023 fueron detenidos dos policías municipales, Saulo D.G. y Juan Manuel R.I., acusados de secuestrar migrantes cuando éstos salían del aeropuerto local.' },
      { t: 'p', x: 'Los polisecuestradores los privaban de su libertad en una casa de seguridad y exigían a sus parientes ubicados en los Estados Unidos rescates hasta de medio millón de pesos.' },
      { t: 'h', x: 'Policía sicario' },
      { t: 'p', x: 'El 26 de junio de 2025 fue detenido el policía municipal en activo Galdino Peña Jacinto, alias “El Monster”, por haber participado como sicario en la masacre de Bavispe, Sonora, en el 2019, donde fueron asesinadas cobardemente tres madres de familia y seis niños de las familias LeBarón y Langford.' },
      { t: 'p', x: 'Miembros de esas familias asentadas en el noroeste del Estado se manifestaron en agosto del 2025 en la presidencia municipal de Juárez, exigiendo la renuncia del alcalde Cruz Pérez Cuéllar y del secretario de Seguridad Pública César Omar Muñoz, por encubrir policías asesinos infiltrados en sus filas.' },
      { t: 'h', x: 'Policías escoltas de narcolíder' },
      { t: 'p', x: 'En agosto del 2025 se registró el asesinato del presunto líder de la organización delictiva “La Línea”, Ulises Nache Trujillo, alias “Delta 1”, en un enfrentamiento en una zona residencial de Juárez, donde también murieron sus escoltas, Rigoberto Pulido Escobedo y Miguel Eduardo Salas Gallegos, elementos activos de la Policía Municipal de Juárez.' },
      { t: 'h', x: 'Mandos cómplices del crimen organizado' },
      { t: 'p', x: 'El comandante del grupo de inteligencia de la policía municipal de nombre “Martín” fue señalado como el mando que proporcionó los dos escoltas de la policía municipal al líder criminal Ulises Nache Trujillo, alias “Delta 1”.' },
      { t: 'p', x: 'Junto con “Erik”, comandante del Grupo de Operaciones Especiales (GOE), son señalados además de brindar protección a bares y centros nocturnos para que operen fuera de horario y para la venta de narcomenudeo.' },
      { t: 'h', x: 'Narcotúnel' },
      { t: 'p', x: 'El capo de La Línea asesinado, Ulises Nache Trujillo, mejor conocido como Delta 1, estaba directamente involucrado en el narcotúnel descubierto el 10 de enero del 2025 frente a la Plaza de la Mexicanidad, y trabajaba para María Del Rosario Navarro-Sánchez, “La Chayo”, la mexicana detenida y juzgada en los Estados Unidos, en el Distrito Oeste de Texas, por tráfico de drogas, de armas y de personas.' },
      { t: 'p', x: 'Este pasadizo clandestino era utilizado por el crimen organizado tanto para el tráfico de drogas como para el cruce ilegal de personas. Estaba localizado en la avenida Rafael Pérez Serna y conectaba con el sistema de drenaje pluvial de El Paso.' },
      { t: 'p', x: 'La policía municipal protegía este narcotúnel a través del comandante Martín Alonso y los elementos que tenía asignados como escolta al narcolíder “Delta 1”.' },
      { t: 'h', x: 'Polimunicipales pandilleros' },
      { t: 'p', x: 'El caso de los 6 policías que detuvieron de manera arbitraria a un conductor de transporte por aplicación en el cruce del bulevar Zaragoza y la calle Puerto Tarento, en la colonia Patria II, donde le robaron 5,700 dólares en efectivo y 600 pesos. Tras percatarse del robo, la víctima solicitó auxilio y fueron otras las unidades preventivas las que interceptaron a sus propios compañeros, poniéndolos bajo arresto inmediato y a disposición del Ministerio Público por abuso de autoridad y robo calificado en la modalidad de pandilla.' },
      { t: 'h', x: 'Policías coludidos en cobro de piso' },
      { t: 'p', x: 'La Fiscalía General del Estado ha desarticulado bandas dedicadas a la extorsión de comercios locales (como talleres mecánicos y tortillerías en la periferia) donde los líderes operativos o los encargados de brindar cobertura perimetral resultaron ser elementos con hasta 8 años de antigüedad en la Policía Municipal. Estos agentes aprovechaban el conocimiento de los cuadrantes y las bitácoras de patrullaje para presionar a los locatarios a pagar cuotas mensuales, bajo amenaza de muerte o ataques armados a sus negocios.' },
      { t: 'h', x: 'Abuso de autoridad y agresiones sistemáticas a la prensa' },
      { t: 'p', x: 'La censura mediante la fuerza bruta contra el gremio periodístico local detonó una crisis política a principios de 2023, evidenciando que los agentes municipales actúan de manera arbitraria bajo el amparo de la impunidad institucional.' },
      { t: 'p', x: 'La Red de Periodistas de Juárez denunció una escalada de violencia en la que policías municipales detuvieron arbitrariamente y golpearon al reportero Joel González, de El Diario de Juárez, justo en el estacionamiento de las instalaciones del periódico.' },
      { t: 'p', x: 'El reportero intentaba documentar una detención ciudadana sospechosa. Días antes de ese evento, agentes municipales encapuchados y con los números de las patrullas tapados encañonaron con rifles de asalto a reporteros del periódico Norte para obligarlos a borrar material fotográfico.' },
      { t: 'p', x: 'La justificación de la corporación fue “protegerse del crimen organizado”, pero los ataques consolidaron denuncias penales por abuso de autoridad y violaciones graves a los derechos humanos ante la Fiscalía del Estado.' },
      { t: 'h', x: 'Simulación en las sanciones a los policías corruptos' },
      { t: 'p', x: 'Frente a los persistentes índices delictivos de alto impacto en la ciudad y la corrupción interna de la Secretaría de Seguridad Pública Municipal, el gobierno municipal de Juárez ha simulado las sanciones a los policías corruptos y abusadores.' },
      { t: 'p', x: 'Las constantes quejas ciudadanas por extorsión (el llamado cobro de “moches” viales y policiales) destaparon la opacidad institucional.' },
      { t: 'p', x: 'A finales de 2025, auditorías de transparencia revelaron que, aunque la narrativa oficial del alcalde Cruz Pérez Cuéllar afirmaba haber suspendido o dado de baja a cerca de 400 elementos policiacos por malas prácticas, los registros oficiales internos de la corporación sólo reconocían la sanción real de 219 agentes en cuatro años.' },
      { t: 'p', x: 'De los elementos sancionados, sólo 31 agentes fueron removidos de forma definitiva sin opción a reingreso.' },
      { t: 'p', x: 'Los motivos de los expedientes iban desde el cohecho y abusos arbitrarios de autoridad, pasando por la complicidad con el crimen organizado, hasta acusaciones graves de tortura y violaciones sistemáticas a los derechos humanos, lo que evidencia que los controles de confianza internos permiten la total infiltración del crimen organizado.' }
    ]
  }
];

/* --------------------------------------------------------------------------
   PERSONAJES — "Expedientes" grid: officials and figures under public
   scrutiny. Editorial rule: estado 'doc' = the señalamiento is documented in
   published press (red stamp); estado 'ver' = citizen report still being
   verified (gray dashed stamp + [EDITAR]). Every nota lists its real URL.
   verificada:false = URL returned by search engines but the site blocked
   automated reading — open manually before citing.
   foto: local file in assets/personajes/ (falls back to a monogram).
   -------------------------------------------------------------------------- */
const PERSONAJES = [
  {
    id: 'enrique-licon',
    nombre: 'Enrique Licón Chávez',
    cargo: 'Coordinador de Directores',
    entidad: 'Municipio de Juárez (desde sep 2024)',
    estado: 'ver',
    sello: 'Caso Koraachi',
    foto: 'assets/personajes/enrique-licon.jpg',
    fotoCredito: 'Foto: Gobierno Municipal de Juárez (juarez.gob.mx)',
    resumen: [
      'Coordinador del gabinete de Cruz Pérez Cuéllar desde septiembre de 2024; antes encabezó la Coordinación de Administración y Control de Proyectos y coordinó la campaña de reelección del alcalde.',
      'Reportes recibidos directamente por este observatorio lo vinculan al caso del Grupo Koraachi, la constructora más favorecida del gobierno municipal (18 contratos por unos 478 MDP, según Yo Ciudadano). La prensa documenta además su papel operativo: como responsable de Control de Proyectos presentó y dio seguimiento al Distribuidor Vial Talamás–Independencia (~380 MDP), adjudicado al consorcio Akel–Koraachi–Urbanissa y entregado con retraso y sin los accesos peatonales contratados.'
    ],
    notas: [
      { titulo: 'Vigilará Municipio obras en la Talamás', medio: 'El Diario de Juárez', fecha: 'Oct 2023', url: 'https://diario.mx/juarez/2023/oct/06/vigilara-municipio-obras-en-la-talamas-971628.html', verificada: true },
      { titulo: 'Nombra alcalde a coordinador del Gabinete para nueva administración', medio: 'El Diario de Juárez', fecha: 'Sep 2024', url: 'https://diario.mx/juarez/2024/sep/02/nombra-alcalde-a-coordinador-del-gabinete-para-nueva-administracion-1029525.html', verificada: true },
      { titulo: 'Enrique Licón será coordinador de Direcciones del Municipio', medio: 'La Verdad Juárez', fecha: 'Sep 2024', url: 'https://laverdadjuarez.com/2024/09/02/enrique-licon-sera-coordinador-de-direcciones-del-municipio/', verificada: true },
      { titulo: 'De Gexiq a Koraachi: más de 300 mdp en contratos a empresa vinculada a director municipal', medio: 'La Verdad Juárez', fecha: 'Jun 2022', url: 'https://laverdadjuarez.com/2022/06/29/de-gexiq-a-koraachi-mas-de-300-mdp-en-contratos-a-empresa-vinculada-a-director-municipal/', verificada: true }
    ]
  },
  {
    id: 'jorge-gutierrez-casas',
    nombre: 'Jorge Gutiérrez Casas',
    cargo: 'Contralor Municipal',
    entidad: 'Contraloría / Órgano Interno de Control',
    estado: 'doc',
    sello: 'Violencia política',
    foto: 'assets/personajes/jorge-gutierrez-casas.jpg',
    fotoCredito: 'Foto: Gobierno Municipal de Juárez (juarez.gob.mx)',
    resumen: [
      'Exregidor del PRI (2021–2024), donde coordinó la Comisión de Obras Públicas; hoy titular de la Contraloría por invitación de Cruz Pérez Cuéllar. En marzo de 2022, las regidoras Vanessa Mora y Karla Estrada lo acusaron de violencia política de género por sus expresiones en sesión de Cabildo.',
      'Reportes recibidos directamente por este observatorio lo vinculan además al caso del Grupo Koraachi. Lo documentado: coordinó la comisión de Obras Públicas justo en el periodo en que Koraachi se convirtió en la contratista más favorecida del municipio, y hoy encabeza la dependencia a la que desde 2022 se le pidió investigar a esa constructora, sin resultados públicos.'
    ],
    notas: [
      { titulo: 'Acusan al regidor Jorge Gutiérrez Casas de violencia política de género', medio: 'ADN / A Diario Network', fecha: 'Mar 2022', url: 'https://www.adiario.mx/estado/juarez/acusan-al-regidor-jorge-gutierrez-casas-de-violencia-politica-de-genero/', verificada: true },
      { titulo: 'Reordenamiento administrativo fortalece control y transparencia en Juárez', medio: 'El Bordo (entrevista)', fecha: 'Mar 2026', url: 'https://elbordo.com.mx/entrevistas/reordenamiento-administrativo-fortalece-control-y-transparencia-en-juarez-20260310-108945.html', verificada: true },
      { titulo: 'Las 10 empresas favoritas del Municipio en el primer año de Pérez Cuéllar', medio: 'La Verdad Juárez', fecha: 'Abr 2023', url: 'https://laverdadjuarez.com/2023/04/19/las-10-empresas-favoritas-del-municipio-en-el-primer-ano-de-perez-cuellar/', verificada: true },
      { titulo: 'Tendrá Contraloría un Reglamento Anticorrupción', medio: 'El Diario de Juárez', fecha: 'Jun 2026', url: 'https://diario.mx/juarez/2026/jun/03/tendra-contraloria-un-reglamento-anticorrupcion-1121090.html', verificada: false }
    ]
  },
  {
    id: 'julio-cesar-de-la-cruz',
    nombre: 'Julio César de la Cruz Reyes',
    cargo: 'Director General de Asentamientos Humanos',
    entidad: 'Municipio de Juárez (2021–hoy)',
    estado: 'doc',
    sello: 'Querella por terrenos',
    foto: 'assets/personajes/julio-cesar-de-la-cruz.jpg',
    fotoCredito: 'Foto: Gobierno Municipal de Juárez (juarez.gob.mx)',
    resumen: [
      'En julio de 2026 el ciudadano Diego Curiel presentó una querella formal ante la SEDATU en su contra por la entrega irregular de cartas de posesión en terrenos federales y de particulares, que afectaría a unas 1,050 familias de las colonias Conquista, Juanita Luna y Lomas de Poleo; pidió turnar el caso a la FGR.',
      'No es el primer señalamiento: en 2022 compareció ante el Cabildo por conflictos en colonias irregulares del poniente, donde vecinos lo acusaron de derribar casas y hostigar para apropiarse de terrenos, y en 2024 negó una audiencia pública solicitada por gestores sociales. En junio de 2026 se destapó como aspirante a diputado federal.'
    ],
    notas: [
      { titulo: 'Denuncian irregularidades en predios de la colonia Conquista', medio: 'Puente Libre', fecha: 'Jul 2026', url: 'https://puentelibre.mx/local/denuncia-ciudad-juarez-irregularidad-conquista-asentamientos-humanos/', verificada: true },
      { titulo: 'Comparecerá ante Cabildo director de Asentamientos Humanos', medio: 'El Diario de Juárez', fecha: 'Mar 2022', url: 'https://diario.mx/juarez/comparecera-ante-cabildo-director-de-asentamientos-humanos-20220323-1912085.html', verificada: true },
      { titulo: 'Director de Asentamientos Humanos niega derecho de audiencia a grupo ciudadano', medio: 'Norte Digital', fecha: 'Oct 2024', url: 'https://nortedigital.mx/director-de-asentamientos-humanos-niega-derecho-de-audiencia-a-grupo-ciudadano/', verificada: true },
      { titulo: 'Destapan aspiración de Julio de la Cruz: buscará diputación', medio: 'Puente Libre', fecha: 'Jun 2026', url: 'https://puentelibre.mx/local/destapan-aspiracion-de-julio-de-la-cruz-buscara-diputacion/', verificada: true }
    ]
  },
  {
    id: 'oscar-guevara',
    nombre: 'Óscar Guevara Ramírez',
    cargo: 'Director de Regulación Comercial',
    entidad: 'Municipio de Juárez (desde jun 2025)',
    estado: 'ver',
    sello: 'Venta de licencias',
    foto: 'assets/personajes/oscar-guevara.jpg',
    fotoCredito: 'Foto: Puente Libre / Tiempo.com.mx',
    resumen: [
      'Director de Regulación Comercial ("Comercio") desde junio de 2025, tras años como coordinador de Comercio Informal en la misma dependencia. Reportes recibidos directamente por este observatorio le atribuyen un esquema de venta de licencias y permisos.',
      'Lo documentado: en octubre de 2025 comerciantes de mercados protestaron en Presidencia denunciando aumentos en los costos de permisos y presuntos "moches" de inspectores de su dirección; el Municipio lo respaldó y negó los aumentos.'
    ],
    notas: [
      { titulo: '"No hay aumentos en permisos para ambulantes"', medio: 'El Diario de Juárez', fecha: 'Oct 2025', url: 'https://diario.mx/juarez/2025/oct/15/no-hay-aumentos-en-permisos-para-ambulantes-1089532.html', verificada: true },
      { titulo: 'Óscar Guevara, nuevo director de Regulación Comercial', medio: 'Puente Libre', fecha: 'Jun 2025', url: 'https://puentelibre.mx/local/oscar_guevara_nuevo_director_de_regulacion_comercial_ciudad_juarez_2025/', verificada: true },
      { titulo: 'Disparado 50% el comercio ambulante', medio: 'El Diario de Juárez', fecha: 'Abr 2026', url: 'https://diario.mx/juarez/2026/apr/02/disparado-50-el-comercio-ambulante-1112303.html', verificada: false }
    ]
  },
  {
    id: 'claudia-morales',
    nombre: 'Claudia Verónica Morales Medina',
    cargo: 'Directora General de Desarrollo Urbano',
    entidad: 'Municipio de Juárez (2021–hoy)',
    estado: 'ver',
    sello: 'Moches',
    foto: 'assets/personajes/claudia-morales.jpg',
    fotoCredito: 'Foto: Gobierno Municipal de Juárez (juarez.gob.mx)',
    resumen: [
      'Empresaria inmobiliaria (fundadora de Olvera Morales Bienes Raíces y expresidenta de AMPI Juárez), invitada por Cruz Pérez Cuéllar a dirigir Desarrollo Urbano desde 2021. Reportes recibidos directamente por este observatorio le atribuyen el cobro de "moches" en trámites de la dependencia.',
      'Contexto documentado sobre su dependencia: el expediente 014/2025 del Tribunal Estatal de Justicia Administrativa asienta que, con autorización del Cabildo, la dirección de Desarrollo Urbano pidió a constructoras vehículos, despensas, cemento y pavimento a cambio del 6% de suelo que por ley debía destinarse a escuelas, guarderías y estaciones de bomberos (ver la cronología y la nota del observatorio sobre este caso).'
    ],
    notas: [
      { titulo: 'Presenta Desarrollo Urbano proyectos de inversión para el ejercicio 2026', medio: 'ADN / A Diario Network', fecha: 'Dic 2025', url: 'https://www.adiario.mx/estado/juarez/presenta-desarrollo-urbano-proyectos-de-inversion-para-el-ejercicio-2026/', verificada: true },
      { titulo: 'Ser profesionista, empresaria y madre en Ciudad Juárez (perfil)', medio: 'Juárez Hoy', fecha: 'Mar 2022', url: 'https://juarezhoy.com.mx/ser-profesionista-empresaria-y-madre-en-ciudad-juarez/', verificada: true }
    ]
  },
  {
    id: 'cesar-omar-munoz',
    nombre: 'César Omar Muñoz Morales',
    cargo: 'Secretario de Seguridad Pública Municipal',
    entidad: 'SSPM de Juárez (2021–2027)',
    estado: 'doc',
    sello: 'Policías infiltrados',
    foto: 'assets/personajes/cesar-omar-munoz.jpg',
    fotoCredito: 'Foto: Norte Digital',
    resumen: [
      'Titular de la SSPM durante los casos que evidencian la infiltración del crimen en la corporación: el policía activo Galdino Peña Jacinto, "El Monster", detenido en 2025 como sicario de la masacre LeBarón–Langford de Bavispe (2019), reingresó a la corporación en 2024 pasando los exámenes de confianza. Las familias LeBarón exigieron su renuncia y la del alcalde en agosto de 2025.',
      'Ese mismo mes, dos policías municipales activos murieron como escoltas del narcolíder Ulises Nache, "Delta 1", en un enfrentamiento; Muñoz declaró que "estaban en su día franco". Además, registros de transparencia contradicen sus cifras: se declaraban más de 400 policías dados de baja por malas prácticas, pero los registros oficiales solo reconocen 219 sancionados en cuatro años.'
    ],
    notas: [
      { titulo: 'No me voy: César Muñoz desafía la presión política y apuesta al trabajo', medio: 'Norte Digital', fecha: 'Ago 2025', url: 'https://nortedigital.mx/no-me-voy-cesar-munoz-desafia-la-presion-politica-y-apuesta-al-trabajo-en-entrevista-con-norte-digital/', verificada: true },
      { titulo: 'Sin aclarar qué hacían policías con el "Delta 1"', medio: 'El Diario de Juárez', fecha: 'Ago 2025', url: 'https://diario.mx/juarez/2025/aug/16/sin-aclarar-que-hacian-policias-con-el-delta-1-1080315.html', verificada: true },
      { titulo: 'Piden los LeBarón renuncia del alcalde "por encubrir" a sicario en la policía', medio: 'La Verdad Juárez', fecha: 'Ago 2025', url: 'https://laverdadjuarez.com/2025/08/05/piden-los-lebaron-renuncia-del-alcalde-por-encubrir-a-sicario-en-la-policia-perez-cuellar-se-deslinda-del-caso/', verificada: false },
      { titulo: 'Son 219 los policías de Ciudad Juárez sancionados en 4 años; cifras oficiales contradicen al alcalde', medio: 'La Verdad Juárez', fecha: 'Nov 2025', url: 'https://laverdadjuarez.com/2025/11/18/son-219-los-policias-de-ciudad-juarez-sancionados-en-4-anos-cifras-oficiales-contradicen-al-alcalde/', verificada: false },
      { titulo: 'Dan de baja a 80 policías municipales en dos administraciones; entre ellos "El Monster"', medio: 'Norte Digital', fecha: 'Ago 2025', url: 'https://nortedigital.mx/dan-de-baja-a-80-policias-municipales-en-dos-administraciones-entre-ellos-el-monster/', verificada: true }
    ]
  },
  {
    id: 'francisco-ibarra',
    nombre: 'Francisco Javier Ibarra Molina',
    cargo: 'Exdirector de la OMEJ y del Instituto del Deporte',
    entidad: 'Municipio de Juárez (2017–nov 2022)',
    estado: 'doc',
    sello: 'Conflicto de interés',
    foto: 'assets/personajes/francisco-ibarra.jpg',
    fotoCredito: 'Foto: Juárez Hoy',
    resumen: [
      'Siendo director de la Operadora Municipal de Estacionamientos (OMEJ), el Cabildo aprobó vender el terreno del Rastro municipal a Enalte Desarrollos Inmobiliarios —empresa de su hermano y socio Luis Eduardo Ibarra Molina— por 66 MDP a precio de avalúo catastral, según la investigación de Yo Ciudadano. Renunció a la OMEJ en noviembre de 2022 "por cuestiones personales".',
      'Es socio, junto con su hermano, de al menos seis empresas, entre ellas la constructora Gexiq, gran contratista de obra pública hasta que la Contraloría pidió excluirla en 2016. La investigación "De Gexiq a Koraachi" documenta cómo ese entramado empresarial —asociado a Jorge Quiñónez Verduzco, coaccionista del Grupo Koraachi— acumuló 57 contratos por más de 306 MDP. Koraachi es hoy la contratista más favorecida del gobierno de Pérez Cuéllar.'
    ],
    notas: [
      { titulo: 'Municipio vende terreno del Rastro a hermano y socio de funcionario', medio: 'Yo Ciudadano', fecha: '2022', url: 'https://yociudadano.com.mx/investigaciones/municipio-vende-terreno-del-rastro-a-hermano-y-socio-de-funcionario/', verificada: false },
      { titulo: 'De Gexiq a Koraachi: más de 300 mdp en contratos a empresa vinculada a director municipal', medio: 'La Verdad Juárez', fecha: 'Jun 2022', url: 'https://laverdadjuarez.com/2022/06/29/de-gexiq-a-koraachi-mas-de-300-mdp-en-contratos-a-empresa-vinculada-a-director-municipal/', verificada: true },
      { titulo: 'Empresa vinculada a funcionario municipal obtiene contratos millonarios; presentan alto riesgo de corrupción', medio: 'La Verdad Juárez', fecha: 'Oct 2020', url: 'https://laverdadjuarez.com/2020/10/20/empresa-vinculada-a-funcionario-municipal-obtiene-contratos-millonarios-presentan-alto-riesgo-de-corrupcion/', verificada: true },
      { titulo: 'Renuncia Francisco Ibarra a la dirección de la OMEJ', medio: 'El Diario de Juárez', fecha: 'Nov 2022', url: 'https://diario.mx/juarez/2022/nov/14/renuncia-francisco-ibarra-a-la-direccion-de-la-omej-913676.html', verificada: true }
    ]
  },
  {
    id: 'ivan-perez',
    nombre: 'Iván Pérez Ruiz',
    cargo: 'Presidente de Canaco Juárez',
    entidad: 'Exdirector de Desarrollo Económico (2021–oct 2023)',
    estado: 'doc',
    sello: 'Caso Malotti',
    foto: 'assets/personajes/ivan-perez.jpg',
    fotoCredito: 'Foto: InBusiness Woman',
    resumen: [
      'Siendo director de Desarrollo Económico, el Municipio otorgó cuatro contratos directos por más de 6.5 MDP a Malotti S. de R.L., una empresa fachada que comparte domicilios y representantes legales con Le Granel, su cadena de tiendas de productos de limpieza, según la investigación de Yo Ciudadano y La Verdad Juárez. Renunció el 9 de octubre de 2023, días después de que los reporteros revisaran las facturas.',
      'En junio de 2026, Plan Estratégico de Juárez presentó dos denuncias penales ante la Fiscalía Anticorrupción por presunto tráfico de influencias, abuso del servicio público y desvío de recursos o peculado. Hoy preside la Cámara Nacional de Comercio de Ciudad Juárez, reelecto para el periodo 2026–2027.'
    ],
    notas: [
      { titulo: 'Con empresa fachada, Municipio dio contratos millonarios a cadena de tiendas de funcionario', medio: 'La Verdad Juárez / Yo Ciudadano', fecha: 'Oct 2023', url: 'https://laverdadjuarez.com/2023/10/19/con-empresa-fachada-municipio-dio-contratos-millonarios-a-cadena-de-tiendas-de-funcionario/', verificada: false },
      { titulo: 'Amenazan demandas penales contra Iván Pérez a Canaco Juárez', medio: 'La Opción de Chihuahua', fecha: 'Jun 2026', url: 'https://laopcion.com.mx/juarez/amenazan-demandas-penales-contra-ivan-perez-a-canaco-juarez-20260609-519758.html', verificada: true },
      { titulo: 'Renuncia Iván Pérez a la Dirección de Desarrollo Económico Municipal', medio: 'La Verdad Juárez', fecha: 'Oct 2023', url: 'https://laverdadjuarez.com/2023/10/09/renuncia-ivan-perez-a-la-direccion-de-desarrollo-economico-municipal/', verificada: false },
      { titulo: 'Con votación histórica, Canaco elige como nuevo presidente a Iván Pérez', medio: 'Net Noticias', fecha: 'Mar 2025', url: 'https://netnoticias.mx/juarez/con-votacion-historica-canaco-elige-como-nuevo-presidente-a-ivan-perez', verificada: true }
    ]
  },
  {
    id: 'daniel-pando',
    nombre: 'Daniel Pando Morales',
    cargo: 'Exfuncionario municipal y casero del alcalde',
    entidad: 'Regulación Comercial (2021–2022); Tránsito y Servicios Públicos con Cabada',
    estado: 'doc',
    sello: 'Casa de El Campestre',
    foto: 'assets/personajes/daniel-pando.jpg',
    fotoCredito: '',
    resumen: [
      'Propietario registrado de las dos residencias de El Campestre en el centro del escándalo de enriquecimiento ilícito del alcalde: la casa de la calle Fresno 1564 (comprada en 9.85 MDP en 2022 y rentada a Cruz Pérez Cuéllar en 70 mil pesos mensuales, según Norte Digital) y la de Fresno 1642 (13.7 MDP). El PAN denunció a ambos por enriquecimiento ilícito en noviembre de 2023.',
      'La Fiscalía Anticorrupción aseguró ambas residencias en abril de 2024 y los tribunales le negaron los amparos con los que intentó recuperarlas. Diputados pidieron a la Auditoría Superior investigar sus ingresos como servidor público y el posible conflicto de interés por su papel de asesor del propio gobierno municipal, señalamiento que el alcalde negó.'
    ],
    notas: [
      { titulo: 'No fue una, sino dos, las residencias de Daniel Pando aseguradas en El Campestre', medio: 'Norte Digital', fecha: 'Abr 2024', url: 'https://nortedigital.mx/son-dos-las-residencias-de-daniel-pando-aseguradas-en-el-campestre/', verificada: true },
      { titulo: 'Casa del Campestre, la otra Cruz que carga Pérez Cuéllar', medio: 'Norte Digital', fecha: '2023–2024', url: 'https://nortedigital.mx/casa-del-campestre-la-otra-cruz-que-carga-perez-cuellar/', verificada: true },
      { titulo: 'Piden diputados auditoría al Municipio de Juárez (caso Pando)', medio: 'Congreso de Chihuahua', fecha: 'Oct 2023', url: 'https://www.congresochihuahua.gob.mx/detalleNota.php?id=9434', verificada: true },
      { titulo: 'Niegan amparo a Daniel Pando por casa asegurada donde vivía Cruz Pérez Cuéllar', medio: 'El Heraldo de Chihuahua', fecha: '2024', url: 'https://www.elheraldodechihuahua.com.mx/local/juarez/niegan-amparo-a-daniel-pando-por-casa-asegurada-donde-vivia-cruz-perez-cuellar-11936919.html', verificada: false }
    ]
  },
  {
    id: 'carlos-najera',
    nombre: 'Carlos Nájera Payán',
    cargo: 'Coordinador General de Comunicación Social (vocero)',
    entidad: 'Municipio de Juárez (2021–hoy)',
    estado: 'ver',
    sello: 'Sobres amarillos',
    foto: 'assets/personajes/carlos-najera.jpg',
    fotoCredito: 'Foto: Axión Sin Límite',
    resumen: [
      'Vocero del gobierno de Cruz Pérez Cuéllar, ratificado en diciembre de 2024 para el segundo trienio. Reportes recibidos directamente por este observatorio le atribuyen el reparto de "sobres amarillos" (dinero en efectivo) a periodistas.',
      'Lo que sí está documentado es la cooptación de prensa por la vía formal: bajo su coordinación, el municipio gastó 543.2 MDP en medios y marketing en tres años (La Verdad Juárez), concentrados en unos cuantos medios; investigaciones de 2023 documentaron convenios de publicidad oficial a páginas que no existen o solo replican boletines, y pagos millonarios a exreporteros de la propia oficina de Comunicación Social.'
    ],
    notas: [
      { titulo: 'Gobierno de Ciudad Juárez subsidia la desinformación a través de contratos de publicidad oficial', medio: 'La Verdad Juárez / Yo Ciudadano', fecha: 'Sep 2023', url: 'https://laverdadjuarez.com/2023/09/19/gobierno-de-ciudad-juarez-subsidia-la-desinformacion-a-traves-de-contratos-de-publicidad-oficial/', verificada: false },
      { titulo: 'En tres años, Pérez Cuéllar gastó 543.2 millones en medios de comunicación y marketing', medio: 'La Verdad Juárez', fecha: 'Oct 2024', url: 'https://laverdadjuarez.com/2024/10/29/en-tres-anos-perez-cuellar-gasto-543-2-millones-en-medios-de-comunicacion-y-marketing/', verificada: false },
      { titulo: 'Municipio suma un gasto de 207.5 millones de pesos en Comunicación Social, Publicidad y Redes este 2025', medio: 'La Verdad Juárez', fecha: 'Nov 2025', url: 'https://laverdadjuarez.com/2025/11/05/municipio-suma-un-gasto-de-207-5-millones-de-pesos-en-comunicacion-social-publicidad-y-redes-este-2025/', verificada: false },
      { titulo: 'Ratifican a Carlos Nájera como coordinador de Comunicación Social', medio: 'Net Noticias', fecha: 'Dic 2024', url: 'https://netnoticias.mx/juarez/ratifican-a-carlos-najera-como-coordinador-de-comunicacion-social', verificada: true }
    ]
  },
  {
    id: 'hector-ortiz-orpinel',
    nombre: 'Héctor Ortiz Orpinel',
    cargo: 'Presidente municipal sustituto',
    entidad: 'Municipio de Juárez (desde jun 2026); antes secretario del Ayuntamiento',
    estado: 'ver',
    sello: 'Denuncia de acoso',
    foto: 'assets/personajes/hector-ortiz-orpinel.jpg',
    fotoCredito: 'Foto: Puente Libre / Tiempo.com.mx',
    resumen: [
      'Alcalde sustituto desde el 17 de junio de 2026, tras la licencia de Cruz Pérez Cuéllar para buscar la gubernatura; fue secretario del Ayuntamiento todo el sexenio y es exdiputado panista converso al proyecto de Morena. Reportes recibidos directamente por este observatorio refieren una denuncia de acoso en su contra.',
      'Lo documentado en prensa: como alcalde desestimó públicamente las denuncias del PAN contra la administración ("Ni una denuncia les ha pegado en 4 años") y recibió la queja de Anapromex por presunto acoso de agentes de vialidad contra dueños de autos "chuecos", que prometió investigar.'
    ],
    notas: [
      { titulo: '"Ni una denuncia les ha pegado en 4 años": Ortiz al PAN', medio: 'Puente Libre', fecha: 'Jun 2026', url: 'https://puentelibre.mx/local/ni-una-denuncia-les-ha-pegado-en-4-anos-ortiz-al-pan-ciudad-juarez-2026/', verificada: true },
      { titulo: 'Investigará Municipio supuesto acoso de agentes viales a autos "chuecos"', medio: 'El Diario de Juárez', fecha: 'Jun 2026', url: 'https://diario.mx/juarez/2026/jun/29/investigara-municipio-supuesto-acoso-de-agentes-viales-a-autos-chuecos-1125213.html', verificada: false },
      { titulo: 'Toma protesta Héctor Ortiz Orpinel como alcalde de Ciudad Juárez', medio: 'El Diario de Juárez', fecha: 'Jun 2026', url: 'https://diario.mx/juarez/2026/jun/17/toma-protesta-hector-ortiz-orpinel-como-alcalde-de-ciudad-juarez-1123331.html', verificada: false }
    ]
  }
];

/* --------------------------------------------------------------------------
   TRANZAS — "Las tranzas del más chueco": vertical videos (9:16, WhatsApp
   format) stored in assets/videos/ with a poster frame each.
   Each: id, titulo, desc, src, poster, dur (mm:ss shown on the card).
   -------------------------------------------------------------------------- */
const TRANZAS = [
  {
    id: 'tranza-01',
    titulo: 'Pagamos por protección… al crimen',
    desc: 'La red de policías municipales que, según investigaciones, terminó escoltando y protegiendo a un líder criminal, mientras la ciudad les paga el sueldo.',
    src: 'assets/videos/tranza-01.mp4',
    poster: 'assets/videos/poster-01.jpg',
    dur: '1:40'
  },
  {
    id: 'tranza-02',
    titulo: 'Treta judicial con recursos públicos',
    desc: 'El amparo indirecto con el que el alcalde con licencia litiga —con dinero del erario— para ocultar información que por ley debe ser pública.',
    src: 'assets/videos/tranza-02.mp4',
    poster: 'assets/videos/poster-02.jpg',
    dur: '0:49'
  },
  {
    id: 'tranza-03',
    titulo: 'La nómina de la parentela',
    desc: 'Cuñadas, allegados y operadores políticos con sueldos de 85 y 97 mil pesos al mes, cargados al presupuesto de todos los juarenses.',
    src: 'assets/videos/tranza-03.mp4',
    poster: 'assets/videos/poster-03.jpg',
    dur: '1:07'
  },
  {
    id: 'tranza-04',
    titulo: '¿80 mil pesos mensuales?',
    desc: 'La pregunta que el municipio se niega a responder: cuántos familiares del alcalde cobran más de 80 mil pesos al mes de la nómina municipal.',
    src: 'assets/videos/tranza-04.mp4',
    poster: 'assets/videos/poster-04.jpg',
    dur: '0:23'
  }
];

/* --------------------------------------------------------------------------
   MEMES — Real images stored in assets/memes/. Each: src, alt.
   -------------------------------------------------------------------------- */
const MEMES = [
  { src: 'assets/memes/meme-libertad-expresion.jpg', alt: 'Mural: "Aquí murió la libertad de expresión"' },
  { src: 'assets/memes/meme-expediente-alcalde.jpg', alt: 'Meme: el expediente del alcalde de Cd. Juárez' },
  { src: 'assets/memes/meme-transformacion.jpg',     alt: 'Meme: "¡La transformación que Juárez necesita!"' },
  { src: 'assets/memes/meme-dirigencia.jpg',         alt: 'Meme sobre la dirigencia de Morena en Chihuahua' }
];
