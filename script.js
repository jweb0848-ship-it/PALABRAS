// Lista DEPURADA: Solo palabras de 5 letras
const words = [
    "ABAJO", "ABEJA", "ABETO", "ABRIL", "ABRIR", "ACABO", "ACASO", "ACCES", "ACERO", "ACIDO",
    "ACOSO", "ACTAS", "ACTOR", "ACTOS", "ACTUA", "ACUDA", "ACUDE", "ACUSO", "ADIOS", "ADOBE",
    "ADORO", "AEREO", "AFORO", "AGUDO", "AGUJA", "AHORA", "AIRES", "AJENO", "ALADO", "ALAMO",
    "ALBAS", "ALDEA", "ALEJO", "ALETA", "ALFAS", "ALGAS", "ALIAS", "ALIAR", "ALMAS", "ALOJO",
    "ALTAR", "ALTAS", "ALTOS", "ALZAR", "AMADO", "AMAGO", "AMARA", "AMASO", "AMBAS", "AMBOS",
    "AMIGA", "AMIGO", "ANCHO", "ANCLA", "ANDAR", "ANDAS", "ANDEN", "ANGEL", "ANGLO", "ANILL",
    "ANIMA", "ANIMO", "ANION", "ANEXO", "ANTES", "ANTRO", "ANUAL", "ANULA", "AÑOSO", "AOVAS",
    "APAGO", "APEGO", "APERO", "APICE", "APILA", "APIÑO", "APODO", "APOYO", "APTOS", "APURO",
    "AQUEL", "ARABE", "ARADA", "ARADO", "ARAÑA", "ARBOL", "ARCES", "ARCHI", "ARCOS", "ARDER",
    "ARDOR", "ARDUO", "ARENA", "AREPA", "ARGOT", "ARIDO", "ARIES", "AROMA", "ARPAR", "ARRAS",
    "ARREA", "ARREO", "ARROZ", "ARTES", "ASADO", "ASCUA", "ASEOS", "ASESO", "ASILO", "ASNOS",
    "ASTRO", "ATADO", "ATAJO", "ATICO", "ATOMO", "ATONO", "ATRIL", "ATROZ", "AUDAZ", "AUDIO",
    "AUGUR", "AULAS", "AUNAR", "AUREO", "AUTOR", "AUTOS", "AVARO", "AVENA", "AVION", "AVISO",
    "AXILA", "AYUDA", "AYUNO", "AZOTE", "AZUAR", "BABAS", "BABEL", "BABIA", "BACAS", "BAHIA",
    "BAILE", "BAJAS", "BAJOS", "BALAS", "BALDA", "BALDE", "BALIN", "BALON", "BALSA", "BANCO",
    "BANDA", "BANDO", "BANJO", "BAÑAR", "BAÑOS", "BARBA", "BARCA", "BARCO", "BARDA", "BARIO",
    "BARRA", "BARRO", "BASAR", "BASAS", "BASES", "BASTA", "BASTO", "BATAS", "BATEA", "BATES",
    "BATIR", "BATIS", "BAYAS", "BAZAR", "BEBER", "BEBES", "BECAS", "BEDEL", "BELEN", "BELGA",
    "BELLA", "BELLO", "BESAR", "BESOS", "BETAS", "BICHO", "BIELA", "BILIS", "BINGO", "BIRRA",
    "BISAR", "BIZCO", "BLUSA", "BOINA", "BOLAS", "BOLOS", "BOLSA", "BOMBA", "BOMBO", "BONOS",
    "BORDE", "BORDO", "BORLA", "BORRA", "BOTAR", "BOTAS", "BOTES", "BOTIN", "BOTON", "BOXEO",
    "BOZAL", "BRAVA", "BRAVO", "BRAZO", "BREVA", "BREVE", "BRISA", "BROCA", "BROMA", "BROTA",
    "BROTE", "BRUJA", "BRUJO", "BRUMA", "BRUTO", "BUCAL", "BUCEO", "BUCLE", "BUENO", "BUFON",
    "BULBO", "BULLA", "BULTO", "BUQUE", "BURLA", "BURRO", "BUSCA", "BUSCO", "BUZON", "CABAL",
    "CABAS", "CABLE", "CABRA", "CACAO", "CACTO", "CAIDA", "CAIDO", "CAJAS", "CAJON", "CALAS",
    "CALCA", "CALCO", "CALDO", "CALLA", "CALLE", "CALMA", "CALMO", "CALOR", "CALVA", "CALVO",
    "CAMAS", "CAMPO", "CANAL", "CANAS", "CANJE", "CANOA", "CANON", "CANTO", "CAOBA", "CAPAS",
    "CAPAZ", "CARAS", "CARDA", "CARDO", "CARGA", "CARGO", "CARNE", "CARPA", "CARRO", "CARTA",
    "CASAR", "CASAS", "CASCO", "CASOS", "CASTA", "CASTO", "CATAR", "CATAS", "CAUCE", "CAUSA",
    "CAVAR", "CAZAR", "CAZAS", "CEDER", "CEDRO", "CEGAR", "CEJAS", "CELDA", "CELOS", "CENAR",
    "CENAS", "CENIT", "CENSO", "CEÑIR", "CEÑOS", "CERCA", "CERCO", "CERDO", "CEROS", "CERRO",
    "CESAR", "CESTA", "CESTO", "CETRO", "CHALE", "CHATO", "CHICA", "CHICO", "CHINO", "CHITA",
    "CHOCO", "CHOZA", "CHUCO", "CHULO", "CHUPA", "CICLO", "CIEGO", "CIELO", "CIEZA", "CIFRA",
    "CIGAR", "CIMAS", "CINCO", "CINES", "CINTA", "CINTO", "CIRCO", "CIRIO", "CISNE", "CITAR",
    "CITAS", "CIVIL", "CLARA", "CLARO", "CLASE", "CLAVA", "CLAVE", "CLAVO", "CLERO", "CLIMA",
    "CLIPS", "CLONO", "CLORO", "COBRA", "COBRE", "COBRO", "COCER", "COCHE", "COCOS", "CODOS",
    "COGER", "COJIN", "COJOS", "COLAS", "COLES", "COLMO", "COLON", "COLOR", "COMER", "COMES",
    "COMIC", "CONDE", "CONOS", "COPAS", "COPIA", "COPLA", "CORAL", "CORAS", "COREA", "COROS",
    "CORRE", "CORRO", "CORTE", "CORTO", "COSAS", "COSER", "COSTA", "COSTO", "COTAS", "CRASO",
    "CREAR", "CREAS", "CRECE", "CREDO", "CREER", "CREMA", "CRIAR", "CRIBA", "CRISIS", "CROMO",
    "CRUCE", "CRUDO", "CRUEL", "CUBOS", "CUBRE", "CUECE", "CUELLO", "CUERO", "CUEVA", "CUEVO",
    "CULPA", "CULTO", "CUOTA", "CUPON", "CURAR", "CURAS", "CURIA", "CURRO", "CURSO", "CURVA",
    "CURVO", "CUTIS", "CUTRE", "DADOS", "DAGAS", "DAMAS", "DANZA", "DAÑAR", "DAÑOS", "DARDO",
    "DARES", "DATOS", "DEBER", "DEBIL", "DEBUT", "DECIR", "DECOR", "DEDOS", "DEJAR", "DELCO",
    "DELOS", "DELTA", "DEMAS", "DEMOS", "DENSO", "DENTO", "DESDE", "DESEO", "DEUDA", "DIETA",
    "DIGNA", "DIGNO", "DIMES", "DINERO", "DIOSA", "DIQUE", "DISCO", "DIVAN", "DOBLE", "DOCIL",
    "DOCTO", "DOGMA", "DOLAR", "DOLER", "DOLOR", "DOMAR", "DONAR", "DONDE", "DONES", "DORAR",
    "DOSIS", "DOTAR", "DOTES", "DRAGA", "DRAMA", "DROGA", "DUCHA", "DUDA", "DUELO", "DUEÑA",
    "DUEÑO", "DULCE", "DUNAS", "DUPLA", "DUQUE", "DURAR", "EBANO", "EBRIO", "ECHAR", "EDITAR",
    "EDUCAR", "EFECTO", "EFEBO", "EGIDA", "EJOTE", "ELITE", "ELLAS", "ELLOS", "ENANO", "ENCIA",
    "ENERO", "ENTRAR", "ENTRE", "ENVIO", "EPICA", "EPICO", "EPOCA", "EQUIPO", "ERROR", "ERIZO",
    "ERRAR", "ESPIA", "ESPIN", "ESQUI", "ESTAR", "ESTAS", "ETAPA", "ETICA", "ETICO", "ETNIA",
    "EXITO", "EXODO", "EXTRA", "FACIL", "FAENA", "FALDA", "FALLA", "FALLO", "FALSA", "FALSO",
    "FANAL", "FANGO", "FAROL", "FAROS", "FARSA", "FATAL", "FAUNA", "FAVOR", "FECHA", "FELIZ",
    "FERIA", "FEROZ", "FERRY", "FETO", "FEUDO", "FIBRA", "FICHA", "FIEL", "FIERA", "FIJAR",
    "FILAS", "FILIA", "FILME", "FILON", "FINAL", "FINCA", "FIRMA", "FIRME", "FLACO", "FLAMA",
    "FLASH", "FLECO", "FLOJO", "FLOTA", "FLOTE", "FLUJO", "FLUOR", "FOBIA", "FOCAS", "FOCOS",
    "FOGON", "FOLIO", "FONDO", "FORMA", "FORRO", "FOSIL", "FOTOS", "FRASE", "FREIR", "FRENO",
    "FRESA", "FRITO", "FRUTA", "FRUTO", "FUEGO", "FUERA", "FUGA", "FUGAZ", "FUMAR", "FUNDA",
    "FUNDO", "FURIA", "FUROR", "FUSIL", "GABAN", "GAFAS", "GAJOS", "GALAN", "GALAS", "GALES",
    "GALLO", "GAMBA", "GANAR", "GANAS", "GANGA", "GANSO", "GARRA", "GARZA", "GASES", "GASTO",
    "GATAS", "GATOS", "GEMAS", "GEMIR", "GENES", "GENIO", "GENTE", "GESTO", "GIRAR", "GLOBO",
    "GOLFO", "GOLPE", "GORDA", "GORDO", "GORRA", "GORRO", "GOTAS", "GOZAR", "GRADA", "GRADO",
    "GRAMO", "GRANA", "GRANO", "GRAPA", "GRASA", "GRASO", "GRATA", "GRATO", "GRAVA", "GRAVE",
    "GRECA", "GRIFO", "GRITO", "GROSO", "GRUPO", "GRUTA", "GUAPA", "GUAPO", "GUIAR", "GUIÑO",
    "GUION", "GUISA", "GUISO", "GUSTO", "HABER", "HABIL", "HABLA", "HACER", "HACHA", "HALLAR",
    "HAMPA", "HARTA", "HARTO", "HASTA", "HAYAS", "HEBRA", "HECHO", "HEDOR", "HELAR", "HELIO",
    "HERIR", "HEROE", "HIELO", "HIENA", "HIGADO", "HIJOS", "HILOS", "HIMNO", "HIPAR", "HIPER",
    "HOBBY", "HOJAR", "HOJAS", "HOLLIN", "HONDA", "HONDO", "HONGO", "HONOR", "HONRA", "HORAS",
    "HORDA", "HORMA", "HORNO", "HOTEL", "HOYOS", "HUECO", "HUELA", "HUELE", "HUESO", "HUEVO",
    "HUIDA", "HUMOR", "HUMUS", "HURTO", "ICONO", "IDEAL", "IDEAR", "IDEAS", "IDOLO", "IGNEO",
    "IGUAL", "ILESO", "ILUSO", "IMAN", "IMPAR", "IMPIO", "IMPON", "INDIA", "INDIO", "INGLE",
    "INPUT", "INTER", "ION", "IRREAL", "ISLAM", "ISLAS", "ITEM", "JABON", "JALEO", "JAMAS",
    "JAMON", "JAQUE", "JARRA", "JARRO", "JAULA", "JAUTA", "JEFE", "JERGA", "JETAS", "JOVEN",
    "JOYAS", "JUDIA", "JUDIO", "JUEGO", "JUEZ", "JUGAR", "JULIO", "JUNCO", "JUNIO", "JUNTA",
    "JUNTO", "JURAR", "JUSTA", "JUSTO", "KARMA", "LABIO", "LABOR", "LACRA", "LADOS", "LAGOS",
    "LAICO", "LAMER", "LANAS", "LANZA", "LAPIZ", "LAPSO", "LARGA", "LARGO", "LARVA", "LASER",
    "LATAS", "LATEX", "LATIN", "LATIR", "LAVAR", "LECHE", "LECHO", "LEGUA", "LEJOS", "LENGUA",
    "LENTA", "LENTO", "LEÑAS", "LEPRA", "LERDO", "LETAL", "LETRA", "LEYES", "LIBRA", "LIBRE",
    "LIBRO", "LICOR", "LIDER", "LIDIA", "LIGAR", "LIJAR", "LIMBO", "LIMON", "LINCE", "LINDE",
    "LINDO", "LINEA", "LINOS", "LISTA", "LISTO", "LITIO", "LITRO", "LLAGA", "LLAMA", "LLANO",
    "LLAVE", "LLEGA", "LLENO", "LLORA", "LOCAL", "LOCUS", "LOGIA", "LOGRO", "LOMAS", "LOMOS",
    "LONJA", "LOTES", "LUCES", "LUCHA", "LUCIR", "LUCRO", "LUEGO", "LUGAR", "LUJO", "LUNAR",
    "LUNAS", "LUNES", "MACRO", "MADRE", "MAFIA", "MAGIA", "MAGMA", "MAJOS", "MALAS", "MALLA",
    "MALOS", "MAMAR", "MAMBO", "MAMUT", "MANCO", "MANDO", "MANEA", "MANES", "MANGA", "MANGO",
    "MANIA", "MANIR", "MANOS", "MANTA", "MANTO", "MARCA", "MARCO", "MAREA", "MAREO", "MARTE",
    "MARZO", "MASAS", "MASON", "MATAR", "MATIZ", "MATON", "MAULA", "MAYOR", "MAZDA", "MECER",
    "MECHA", "MEDIA", "MEDIO", "MEDIR", "MEJOR", "MELON", "MENOR", "MENOS", "MENTA", "MENTE",
    "MEOLLO", "MERCA", "MERMA", "MESAS", "MESES", "METAL", "METAS", "METEO", "METER", "METRO",
    "MIEDO", "MIGAS", "MILES", "MILIS", "MILLA", "MINAS", "MIOPE", "MIRAR", "MIRAS", "MISIL",
    "MISMO", "MITAD", "MITIN", "MITOS", "MIXTO", "MOCHO", "MODELO", "MOJAR", "MOLAR", "MOLDE",
    "MOLER", "MOMIA", "MONDA", "MONJA", "MONJE", "MONOS", "MONTE", "MONTO", "MORAL", "MORAR",
    "MORBO", "MORIR", "MORRO", "MOSCA", "MOTEL", "MOTIN", "MOTOR", "MOVER", "MOVIL", "MUCHO",
    "MUDAR", "MUELA", "MUJER", "MULA", "MULTA", "MUNDO", "MURAL", "MUROS", "MUSEO", "MUSGO",
    "MUSLO", "MUTUO", "NACER", "NADAR", "NADIE", "NAIPE", "NANAS", "NARIZ", "NATAL", "NATAS",
    "NAVAL", "NAVES", "NAVIO", "NEGAR", "NEGRA", "NEGRO", "NERVIO", "NEVAR", "NICHO", "NIEBLA",
    "NIETA", "NIETO", "NIEVE", "NINFA", "NIÑAS", "NIÑEZ", "NIÑOS", "NIVEL", "NOBLE", "NOCHE",
    "NOCIVO", "NOMADE", "NORIA", "NORMA", "NORTE", "NOTAR", "NOTAS", "NOVEL", "NOVIA", "NOVIO",
    "NUBES", "NUCLEO", "NUERA", "NUEVA", "NUEVE", "NUEVO", "NUNCA", "OASIS", "OBESO", "OBRA",
    "OBRAR", "OBRAS", "OBVIO", "OCASO", "OCIO", "ODIO", "OESTE", "OIDOS", "OJALA", "OJEAR",
    "OJERA", "OLEADA", "OLIVA", "OLIVO", "OMEGA", "ONDA", "ONDAS", "ONZA", "OPACO", "OPALO",
    "OPERA", "OPTAR", "ORBITA", "ORDEN", "OREJA", "ORFEO", "ORGIA", "ORINA", "ORLAR", "ORUGA",
    "OSCAR", "OSTIA", "OVALO", "OVEJA", "OVINO", "OVULO", "OXIDO", "OZONO", "PACER", "PACTO",
    "PADRE", "PAGAR", "PAIS", "PALAS", "PALCO", "PALMA", "PALMO", "PALOS", "PAMPA", "PANAL",
    "PANDA", "PANEL", "PAÑAL", "PAPEL", "PARAR", "PARCO", "PARDO", "PARED", "PARIR", "PARRA",
    "PARTE", "PARTO", "PASAR", "PASEO", "PASOS", "PASTA", "PASTO", "PATAS", "PATIN", "PATIO",
    "PATOS", "PAUSA", "PAUTA", "PAVOR", "PEAJE", "PECAS", "PECHO", "PEDAL", "PEDIR", "PEGAR",
    "PEINE", "PELAR", "PELEA", "PELIS", "PELOS", "PENAL", "PENAR", "PENAS", "PENCA", "PEÑON",
    "PEPINO", "PERAL", "PERAS", "PERRO", "PESAR", "PESCA", "PESOS", "PESTE", "PETOS", "PIANO",
    "PICAR", "PICOS", "PIEZA", "PILAR", "PILAS", "PILLO", "PINAR", "PINOS", "PINTA", "PINZA",
    "PIOJO", "PISAR", "PISOS", "PISTA", "PIVOT", "PIZCA", "PIZZA", "PLACA", "PLAGA", "PLANA",
    "PLANO", "PLATA", "PLATO", "PLAYA", "PLAZA", "PLEBE", "PLENO", "PLOMO", "PLUMA", "POBRE",
    "PODAR", "PODER", "PODIO", "POEMA", "POETA", "POLAR", "POLEA", "POLEN", "POLIS", "POLLO",
    "POLOS", "POLVO", "POMPA", "PONER", "PONIS", "PORRA", "PORTA", "PORTE", "POSAR", "POSTE",
    "POSTRE", "POTRO", "PRADO", "PRESA", "PRESO", "PRIMA", "PRIMO", "PRIOR", "PRISA", "PROBAR",
    "PROFE", "PROLE", "PROSA", "PUDOR", "PUJAR", "PULGA", "PULIR", "PULLA", "PULPA", "PULSO",
    "PUNTA", "PUNTO", "PUÑAL", "PURE", "PURGA", "QUEDA", "QUEJA", "QUEMA", "QUESO", "QUIEN",
    "QUITA", "RABIA", "RACHA", "RADAR", "RADIO", "RAJA", "RAMAS", "RAMPA", "RANAS", "RANGO",
    "RAPAR", "RAPTO", "RASGO", "RASPA", "RATAS", "RATON", "RAYA", "RAZON", "REATA", "RECIO",
    "RECTA", "RECTO", "REDES", "REGLA", "REHEN", "REINA", "REINO", "REJAS", "RELAX", "RELOJ",
    "REMAR", "RENAL", "RENTA", "REPTIL", "RESES", "RESTO", "RETAR", "RETO", "RETRO", "REVES",
    "REZAR", "RIEGO", "RIFLE", "RIGOR", "RITMO", "RIVAL", "ROBAR", "ROBLE", "ROBOS", "ROCAS",
    "ROCIO", "RODAR", "RODEO", "ROGAR", "ROLLO", "RONDA", "ROPAS", "ROSAS", "ROSCA", "ROTA",
    "ROTOS", "ROZAR", "RUBIO", "RUDA", "RUEDA", "RUEDO", "RUEGO", "RUIDO", "RUINA", "RULA",
    "RULO", "RUMBA", "RUMBO", "RURAL", "RUTINA", "SABER", "SABIO", "SABLE", "SABOR", "SACAR",
    "SACRO", "SAETA", "SAGAZ", "SALAR", "SALAS", "SALDO", "SALIR", "SALMO", "SALON", "SALSA",
    "SALTO", "SALUD", "SALVA", "SALVO", "SANAR", "SANTO", "SAQUE", "SATEN", "SAUNA", "SAVIA",
    "SECAR", "SECTA", "SELLO", "SELVA", "SENDA", "SEÑAL", "SEÑOR", "SEPIA", "SERIE", "SERIO",
    "SESGO", "SETAS", "SEXTO", "SIDRA", "SIEGA", "SIGLO", "SIGNO", "SILBA", "SILLA", "SILO",
    "SILVA", "SIMIL", "SIMIO", "SIMON", "SITIO", "SOBAR", "SOBRA", "SOBRE", "SOCIO", "SODIO",
    "SOLAR", "SOLER", "SOMBRA", "SONAR", "SONDA", "SOPAS", "SOPLO", "SORDO", "SORNA", "SORTEO",
    "SOSO", "SUAVE", "SUBIR", "SUCIO", "SUDAR", "SUDOR", "SUELA", "SUELO", "SUEÑO", "SUERO",
    "SUERTE", "SUMAR", "SUPER", "SURCO", "SUSTO", "SUTIL", "TABLA", "TACTO", "TALAR", "TALCO",
    "TALLA", "TALLE", "TALLO", "TALON", "TANGO", "TANTO", "TAÑER", "TAPAR", "TAPIZ", "TAPON",
    "TARDE", "TARDO", "TAREA", "TARRO", "TARTA", "TASAR", "TAZAS", "TEATRO", "TECHO", "TECLA",
    "TEDIO", "TEJER", "TELAR", "TELAS", "TEMAS", "TEMER", "TEMOR", "TENAZ", "TENER", "TENIS",
    "TENOR", "TENSO", "TERCO", "TERMO", "TERNA", "TERSO", "TESIS", "TETAS", "TEXTO", "TIARA",
    "TIBIA", "TIBIO", "TIENDA", "TIESO", "TIGRE", "TILDE", "TIMBA", "TIMON", "TINTA", "TINTE",
    "TINTO", "TIPOS", "TIRAR", "TIROS", "TITAN", "TIZA", "TIZNE", "TOALLA", "TOCAR", "TOCINO",
    "TOLDO", "TOMAR", "TONEL", "TONTO", "TOQUE", "TORAX", "TORCA", "TOREO", "TORNO", "TOROS",
    "TORPE", "TORRE", "TORSO", "TORTA", "TOSER", "TOTAL", "TRABA", "TRACA", "TRAER", "TRAGO",
    "TRAJE", "TRAMA", "TRAMO", "TRAPO", "TRATO", "TRAZO", "TREPA", "TRIBU", "TRIGO", "TRIPA",
    "TROMPA", "TRONO", "TROPA", "TROTE", "TROZO", "TRUCO", "TUMBA", "TUNEL", "TURBA", "TURBO",
    "TURNO", "TUTOR", "UBICAR", "UJIER", "UNICO", "UNION", "UNTAR", "URGENTE", "USADO", "USAR",
    "USTED", "USURA", "UTERO", "UVAS", "VACAS", "VACIO", "VAGAR", "VAGON", "VAINA", "VALER",
    "VALIA", "VALLA", "VALLE", "VALOR", "VAMOS", "VAPOR", "VARIO", "VARON", "VASCO", "VASOS",
    "VASTO", "VATER", "VECINO", "VEDA", "VEJEZ", "VELAS", "VELOZ", "VENDER", "VENIR", "VENTA",
    "VENUS", "VERAS", "VERANO", "VERBO", "VERDE", "VERJA", "VERSO", "VESTIR", "VIAJE", "VICIO",
    "VIDAS", "VIDEO", "VIEJO", "VIGIA", "VIGOR", "VILLA", "VIOLA", "VIRAL", "VIRGO", "VIRUS",
    "VISAR", "VISITA", "VISON", "VISTA", "VISTO", "VITAL", "VIUDA", "VIUDO", "VIVAZ", "VIVIR",
    "VOCAL", "VOCES", "VODKA", "VOLAR", "VOLCAN", "VOTAR", "VUELO", "VULGAR", "YEGUA", "YENDO",
    "YERBA", "YERNO", "YOGUR", "ZAFAR", "ZANJA", "ZARPA", "ZARZA", "ZORRO", "ZUECO", "ZURDO"
];

let secretWord = "";
const height = 6; 
const width = 5;

let row = 0; 
let currentSelectedCol = 0; 
let gameOver = false;

window.onload = function() {
    startNewGame();
}

function startNewGame() {
    document.getElementById("modal-overlay").classList.add("hidden");

    // Elegir palabra nueva
    secretWord = words[Math.floor(Math.random() * words.length)];
    
    // FILTRO DE SEGURIDAD: Si por alguna razón sale una palabra que no es de 5, busca otra
    while(secretWord.length !== 5){
        secretWord = words[Math.floor(Math.random() * words.length)];
    }
    
    console.log("Palabra secreta:", secretWord); 

    row = 0;
    currentSelectedCol = 0;
    gameOver = false;

    const board = document.getElementById("board");
    board.innerHTML = "";
    
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            
            tile.addEventListener("click", function() {
                if (gameOver || this.id.split("-")[0] != row.toString()) return;
                selectTile(row, parseInt(this.id.split("-")[1]));
            });

            board.appendChild(tile);
        }
    }

    // Resetear teclado
    const kbContainer = document.getElementById("keyboard-container");
    kbContainer.innerHTML = `
        <div class="keyboard-row" id="row-1"></div>
        <div class="keyboard-row" id="row-2"></div>
        <div class="keyboard-row" id="row-3"></div>
    `;
    createOnScreenKeyboard();

    selectTile(row, 0);
}

window.startNewGame = startNewGame;

// Evento para teclado físico
document.addEventListener("keyup", (e) => {
    if (gameOver) return;
    
    // Si es letra
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        let currTile = document.getElementById(row.toString() + "-" + currentSelectedCol.toString());
        currTile.innerText = e.code[3];
        
        if (currentSelectedCol < width - 1) {
            selectTile(row, currentSelectedCol + 1);
        }
        
        checkAutoSubmit();
    }
    // Si es borrar
    else if (e.code == "Backspace") {
        let currTile = document.getElementById(row.toString() + "-" + currentSelectedCol.toString());
        if (currTile.innerText !== "") {
                currTile.innerText = "";
        } 
        else if (currentSelectedCol > 0) {
                selectTile(row, currentSelectedCol - 1);
                document.getElementById(row.toString() + "-" + currentSelectedCol.toString()).innerText = "";
        }
    }
    // Enter (opcional)
    else if (e.code == "Enter") {
        let filledTiles = 0;
        for (let c = 0; c < width; c++) {
            if(document.getElementById(row.toString() + "-" + c.toString()).innerText !== "") filledTiles++;
        }
        if (filledTiles === width) checkRow();
    }
});

function selectTile(r, c) {
    let prevSelected = document.querySelector(".selected");
    if (prevSelected) prevSelected.classList.remove("selected");
    
    let newTile = document.getElementById(r.toString() + "-" + c.toString());
    if(newTile) {
        newTile.classList.add("selected");
        currentSelectedCol = c;
    }
}

function checkAutoSubmit() {
    let filledTiles = 0;
    for (let c = 0; c < width; c++) {
        let tile = document.getElementById(row.toString() + "-" + c.toString());
        if(tile.innerText !== "") filledTiles++;
    }

    if (filledTiles === width) {
        setTimeout(() => {
            checkRow();
        }, 200);
    }
}

function checkRow() {
    let guess = "";
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + "-" + c.toString());
        guess += currTile.innerText;
    }

    guess = guess.toUpperCase();
    let letterCount = {};
    for (let i = 0; i < secretWord.length; i++) {
        let letter = secretWord[i];
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    let correct = 0;
    
    // 1. Verdes
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currTile.innerText;
        currTile.classList.remove("selected");

        if (secretWord[c] == letter) {
            currTile.classList.add("correct");
            let keyDiv = document.getElementById("key-" + letter);
            if (keyDiv) {
                keyDiv.classList.remove("present");
                keyDiv.classList.add("correct");
            }
            correct += 1;
            letterCount[letter] -= 1;
        }
    }

    // 2. Amarillas/Grises
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currTile.innerText;
        let keyDiv = document.getElementById("key-" + letter);

        if (!currTile.classList.contains("correct")) {
            if (secretWord.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                letterCount[letter] -= 1;
                if (keyDiv && !keyDiv.classList.contains("correct")) {
                    keyDiv.classList.add("present");
                }
            } else {
                currTile.classList.add("absent");
                if (keyDiv && !keyDiv.classList.contains("correct") && !keyDiv.classList.contains("present")) {
                    keyDiv.classList.add("absent");
                }
            }
        }
    }

    if (correct == width) {
        gameOver = true;
        setTimeout(() => showModal("¡Felicidades!", "Has adivinado la palabra correctamente.", true), 300);
        return;
    }

    row += 1; 
    currentSelectedCol = 0;  

    if (row == height) {
        gameOver = true;
        setTimeout(() => showModal("Juego Terminado", "La palabra era: " + secretWord, false), 300);
    } else {
        selectTile(row, 0);
    }
}

function showModal(title, message, isSuccess) {
    const modalOverlay = document.getElementById("modal-overlay");
    const modalContent = document.getElementById("modal-content");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");

    modalTitle.innerText = title;
    modalMessage.innerText = message;

    modalContent.classList.remove("modal-success", "modal-failure");
    if (isSuccess) {
        modalContent.classList.add("modal-success");
    } else {
        modalContent.classList.add("modal-failure");
    }

    modalOverlay.classList.remove("hidden");
}

function createOnScreenKeyboard() {
    const keys = [
        "QWERTYUIOP",
        "ASDFGHJKL",
        "ZXCVBNM"
    ];
    
    keys.forEach((rowKeys, index) => {
        let rowDiv = document.getElementById(`row-${index + 1}`);
        for(let char of rowKeys) {
            let keyDiv = document.createElement("div");
            keyDiv.innerText = char;
            keyDiv.classList.add("key");
            keyDiv.id = "key-" + char;
            
            keyDiv.onclick = () => {
                if (gameOver) return;
                let currTile = document.getElementById(row.toString() + "-" + currentSelectedCol.toString());
                currTile.innerText = char;
                
                if (currentSelectedCol < width - 1) {
                    selectTile(row, currentSelectedCol + 1);
                }
                
                checkAutoSubmit();
            };

            rowDiv.appendChild(keyDiv);
        }
    });
}