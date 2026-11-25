export type ContentType =
  | 'photo'
  | 'letter'
  | 'video'
  | 'audio'
  | 'coupon'
  | 'game'
  | 'secret'
  | 'memory';

export type CouponKind =
  | 'cita'
  | 'masaje'
  | 'cocinar'
  | 'batman'
  | 'abrazo'
  | 'eleccion'
  | 'si'
  | 'movie';

export interface Coupon {
  kind: CouponKind;
  title: string;
  description: string;
  emoji: string;
}

export type GameType = 'quiz' | 'memory' | 'truthdare' | 'guess';

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
}

export interface GameContent {
  type: GameType;
  title: string;
  quiz?: QuizQuestion[];
  prompts?: string[];
}

export interface DayContent {
  day: number;
  type: ContentType;
  title: string;
  message: string;
  /** Indica qué foto subir aquí — el usuario la reemplaza después */
  photoCaption?: string;
  photo?: string;
  video?: string;
  coupon?: Coupon;
  game?: GameContent;
  secret?: string;
  /** tema visual de la casilla */
  accent: 'playa' | 'catecismo' | 'selfie' | 'agua-santa' | 'navidad' | 'viaje';
}

export const ACCENT_META: Record<
  DayContent['accent'],
  { label: string; gradient: string; emoji: string }
> = {
  playa: {
    label: 'Nuestro viaje a la playa',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    emoji: '🌊',
  },
  catecismo: {
    label: 'Nuestro primer encuentro',
    gradient: 'from-christmas-gold-400 via-christmas-gold-600 to-christmas-red-700',
    emoji: '✝',
  },
  selfie: {
    label: 'Un selfie de los dos',
    gradient: 'from-pink-400 via-rose-500 to-christmas-red-600',
    emoji: '🤳',
  },
  'agua-santa': {
    label: 'Baños de Agua Santa',
    gradient: 'from-sky-400 via-cyan-500 to-blue-600',
    emoji: '♨',
  },
  navidad: {
    label: 'Espíritu navideño',
    gradient: 'from-christmas-red-600 via-christmas-red-800 to-christmas-red-950',
    emoji: '🎄',
  },
  viaje: {
    label: 'Aventura juntos',
    gradient: 'from-emerald-400 via-teal-500 to-christmas-pine-500',
    emoji: '🧳',
  },
};

export const DAY_CONTENTS: DayContent[] = [
  {
    day: 1,
    type: 'photo',
    accent: 'catecismo',
    photo: '/foto-dia-1.jpg',
    title: 'Donde todo empezó',
    message:
      'Hace siete años, en una sala de catecismo, fue nuestro primer encuentro. Un niño aislado y una chica introvertida que seguía a su hermana se toparón y un acto de buena Fé cambio sus vidas.',
    photoCaption: 'Una foto de los dos de los primeros tiempos',
  },
  {
    day: 2,
    type: 'photo',
    accent: 'selfie',
    photo: '/foto-dia-2.jpg',
    title: 'Selfie #1 de muchos',
    message:
      'Tú y yo, sin filtros, con una pose tímida, sin guion. Solo nosotros. Este es el primero de los selfies que llenan mi galería y mi corazón.',
    photoCaption: 'Selfie espontáneo de los dos.',
  },
  {
    day: 3,
    type: 'letter',
    accent: 'navidad',
    title: 'Carta para el día 3',
    message:
      'Mi niño,\n\nA veces me detengo a pensar en lo afortunada que fui de haberte conocido en ese catecismo. Tenías algo que no supe nombrar entonces, y hoy sé que gracias a tu persistencia hoy estamos juntos a pesar de las dificultades. Felicidades por nosotros, por estos siete años juntos.\n\nCon todo mi corazón,\nTu novia.',
  },
  {
    day: 4,
    type: 'photo',
    accent: 'playa',
    photo: '/foto-dia-4.jpg',
    title: 'Arena, sal y tú',
    message:
      'Nuestro primer viaje a la playa. El sol en tu cara, el mar que no paraba de mojarte los pies, y yo que no paraba de mirarte. Ese día supe que cualquier destino era perfecto si ibas tú.',
    photoCaption: 'Foto juntos en la playa.',
  },
  {
    day: 5,
    type: 'coupon',
    accent: 'navidad',
    title: 'Cupón: Cita a tu elección',
    message: 'Canjéalo ese mismo día. Yo invito tu solo di la hora. Y quién sería yo sin un poco de drama y un poco de humor así que se generoso con mi cartera XD',
    coupon: {
      kind: 'cita',
      title: 'Cita sorpresa',
      description: 'Una cita completa planeada por mí, en el lugar y momento que tú elijas.',
      emoji: '🎟',
    },
  },
  {
    day: 6,
    type: 'secret',
    accent: 'navidad',
    title: 'Mensaje secreto',
    message: 'Toca para descubrir tu mensaje secreto de hoy.',
    secret:
      'A veces pienso en todo lo que has tenido que superar y en la fuerza que has demostrado incluso cuando las cosas no han sido fáciles. Y solo quiero recordarte que estoy orgullosa de ti, que creo en ti y que nunca olvides lo valioso que eres. Hace siete años comenzó nuestra historia y hoy, después de tantos momentos, sigo sintiendo la misma certeza: quiero seguir caminando a tu lado, celebrando tus logros, sosteniéndote en los días difíciles y recordándote que siempre hay motivos para volver a empezar. No te rindas, amor, todavía nos quedan muchos sueños por cumplir juntos. ❤️',
  },
  {
    day: 7,
    type: 'game',
    accent: 'catecismo',
    title: 'Quiz: ¿Cuánto me conoces?',
    message: 'Pequeño reto del día 7. Demuestra que me conoces tanto como yo a ti.',
    game: {
      type: 'quiz',
      title: '¿Cuánto me conoces?',
      quiz: [
        {
          q: '¿Dónde nos conocimos?',
          options: ['En la escuela', 'En el catecismo', 'En una fiesta', 'En la playa'],
          answer: 1,
        },
        {
          q: '¿Cuántos años llevamos juntos?',
          options: ['5 años', '6 años', '7 años', '8 años'],
          answer: 2,
        },
        {
          q: '¿Cuál fue una de nuestras primeras salidas juntos?',
          options: ['El cine', 'El parque', 'Un viaje', 'Ninguno'],
          answer: 1,
        },
        {
          q: '¿Qué es algo que siempre he querido hacer contigo?',
          options: ['Dormir juntos', 'Ir a un SPA', 'Viajar a otro país', 'Comer comida Italiana'],
          answer: 2,
        },
        {
          q: '¿Qué es lo que más valoro de nuestra relación?',
          options: ['Los regalos', 'Los viajes', 'Las fotografías', 'El tiempo juntos'],
          answer: 3,
        },
      ],
    },
  },
  {
    day: 8,
    type: 'photo',
    accent: 'agua-santa',
    photo: '/foto-dia-8.jpg',
    title: 'Baños de Agua Santa',
    message:
      'Baños de Agua Santa siempre tendrá un lugar especial en nuestra historia, porque no fue solo un viaje de dos personas, fue un encuentro de dos corazones que, a pesar de las heridas, las traiciones y las decepciones, decidieron darse una nueva oportunidad. Entre conversaciones, abrazos y momentos a solas, intentamos dejar atrás aquello que nos había lastimado y recordar por qué alguna vez elegimos caminar juntos. Quizás no pudimos borrar lo que pasó, pero ese viaje nos permitió intentar sanar, soltar el dolor y volver a mirar hacia el mismo horizonte. Porque, a pesar de todo, todavía había amor y ganas de luchar por nosotros. ❤️',
    photoCaption: 'Foto en los Baños de Agua Santa.',
  },
  {
    day: 9,
    type: 'audio',
    accent: 'navidad',
    title: 'Una voz para ti',
    message:
      'Cierra los ojos y escucha. Hay algo que quiero decirte con mi voz, no con letras. Sube aquí un audio que grabe para ti.',
    photoCaption: 'Sube tu audio (graba una nota de voz romántica).',
  },
  {
    day: 10,
    type: 'photo',
    accent: 'selfie',
    photo: '/foto-dia-10.jpg',
    title: 'Selfie #2',
    message:
      'Otro selfie más para la colección. Entre tapabocas, sonrisas escondidas y las ganas de volver a disfrutar del mundo, nos regalamos este recuerdo. Después de tantos días de encierro e incertidumbre, volver a salir juntos y capturar este instante significó mucho más que una simple fotografía: fue recordar lo bonito que era compartir la vida contigo. Hoy miro esta imagen y sonrío al pensar que, incluso en los tiempos más difíciles, encontramos la manera de seguir creando recuerdos. Y aquí seguimos, sumando historias, selfies y razones para elegirnos una y otra vez. ❤️',
    photoCaption: 'Otro selfie espontáneo de los dos.',
  },
  {
    day: 11,
    type: 'letter',
    accent: 'navidad',
    title: 'Carta para el día 11',
    message:
      'Mi niño,\n\nSiete años después, sigo sintiendo la misma ilusión de caminar a tu lado. Quiero que nunca olvides lo valioso que eres, lo fuerte que has sido y todo lo que eres capaz de lograr. No permitas que los días difíciles apaguen tus sueños. Estoy orgullosa de ti, creo en ti y deseo verte cumplir cada una de tus metas. Nunca dejes de luchar por la felicidad que mereces.\n\nTe quiero.',
  },
  {
    day: 12,
    type: 'coupon',
    accent: 'navidad',
    title: 'Cupón: Masaje de 30 min',
    message: 'Canjeable una sola vez. Con happy ending de abrazo obligatorio.',
    coupon: {
      kind: 'masaje',
      title: 'Masaje garantizado',
      description: '30 minutos de masaje, a tu elección de zona, sin quejarte ni una vez.',
      emoji: '💆',
    },
  },
  {
    day: 13,
    type: 'secret',
    accent: 'navidad',
    title: 'Otro mensaje secreto',
    message: 'Hoy hay algo escondido solo para ti. Toca para revelarlo.',
    secret:
      'No sé qué nos tiene preparado la vida, pero sí sé con quién quiero descubrirlo. Quiero verte cumplir tus sueños, cumplir los míos y construir juntos muchos más. No necesito tener todo el futuro resuelto, solo deseo que sigamos encontrándonos en él. ❤️',
  },
  {
    day: 14,
    type: 'video',
    accent: 'navidad',
    video: '/video-dia-14.mp4',
    title: 'Un video para ti',
    message:
      'Hay recuerdos que las fotos no alcanzan a guardar. Quizás en ese momento no imaginábamos cuánto llegaríamos a vivir después, pero hoy, al volver a verlo, me doy cuenta de lo bonito que ha sido crecer, cambiar y seguir compartiendo tantos momentos contigo. El tiempo pasa, nosotros cambiamos, pero hay recuerdos que siempre consiguen devolvernos a la felicidad de aquel instante. ',
    photoCaption: 'Sube un video corto de ustedes dos.',
  },
  {
    day: 15,
    type: 'game',
    accent: 'navidad',
    title: 'Verdad o reto',
    message: 'Un mini juego para reír un rato. Por cada verdad/reto tienes que mandarme la respuesta',
    game: {
      type: 'truthdare',
      title: 'Verdad o reto',
      prompts: [
        'Verdad: ¿Cuál fue el momento exacto en que supiste que me querías?',
        'Reto: Llámame y cántame la canción infantil que una vez me hiciste bailar.',
        'Verdad: ¿Qué pensaste la primera vez que me viste en el catecismo?',
        'Reto: Mándame un selfie ahora mismo.',
        'Verdad: ¿Cuál ha sido tu viaje favorito conmigo y por qué?',
        'Reto: Escribe la razón por la que sigues a mi lado.',
      ],
    },
  },
  {
    day: 16,
    type: 'photo',
    accent: 'viaje',
    photo: '/foto-dia-16.png',
    title: 'Otro viaje, otra historia',
    message:
      'Cada viaje contigo es un capítulo nuevo. Cada viaje contigo se ha convertido en un recuerdo que guardo en el corazón. Hemos conocido playas, recorrido lugares, vivido aventuras y disfrutado hasta de los planes más sencillos. Pero con el tiempo entendí que no son los destinos los que hacen especiales nuestros viajes, sino tenerte a mi lado. Porque no importa qué tan lejos vayamos ni qué lugar descubramos, mi parte favorita siempre será compartir el tiempo contigo. ❤️',
    photoCaption: 'Foto de un viaje juntos (playa, baños o cualquier salida).',
  },
  {
    day: 17,
    type: 'coupon',
    accent: 'navidad',
    title: 'Cupón: Yo cocino',
    message: 'Canjeable por una noche. Tú eliges el platillo, yo lo cocino con amor y algo de caos.',
    coupon: {
      kind: 'cocinar',
      title: 'Cena casera a tu antojo',
      description: 'Tú pides el platillo, yo lo preparo y no te metes a la cocina para nada.',
      emoji: '🍳',
    },
  },
  {
    day: 18,
    type: 'photo',
    accent: 'selfie',
    photo: '/foto-dia-18.jpg',
    title: 'Selfie #3',
    message: 'El tercero de la colección. De esas noches que no se planean para convertirse en recuerdos inolvidables, pero terminan ocupando un lugar especial en el corazón. Mi cumpleaños, las risas, el baile, mis primos y tú compartiendo conmigo una noche diferente. Ojalá nunca nos falten motivos para celebrar la vida, bailar sin preocuparnos por nada y seguir creando recuerdos que nos hagan sonreír incluso muchos años después. ❤️',
    photoCaption: 'Tercer selfie espontáneo.',
  },
  {
    day: 19,
    type: 'audio',
    accent: 'navidad',
    title: 'Otra nota de voz',
    message: 'Una canción, un "te amo", una risa grabada. Lo que quieras poner aquí, lo escucharé mil veces.',
    photoCaption: 'Sube otra nota de voz o canción dedicada.',
  },
  {
    day: 20,
    type: 'secret',
    accent: 'navidad',
    title: 'Mensaje secreto del día 20',
    message: 'Ya casi llegamos al final. Hay algo más escondido para ti.',
    secret:
      'Si algún día se te olvida lo bonito que es lo nuestro, vuelve a estos recuerdos. Aquí están nuestras aventuras, nuestras locuras, las risas por tonterías, los días buenos y también aquellos en los que no todo fue fácil. Siete años de historias, de aprender juntos, de equivocarnos y volver a intentarlo. Y si algo deseo es que nunca perdamos esa complicidad de poder ser nosotros mismos, reírnos de cualquier cosa y seguir encontrando motivos para compartir la vida.❤️',
  },
  {
    day: 21,
    type: 'game',
    accent: 'navidad',
    title: 'Adivina el recuerdo',
    message: 'Te doy pistas, tú adivinas el momento. ¿Cuántos recuerdos puedes nombrar?',
    game: {
      type: 'guess',
      title: 'Adivina el recuerdo',
      prompts: [
        'Un lugar nuevo, muchas fotos y un momento que repetiríamos mil veces. ¿A dónde fuimos?',
        'Una canción que no era precisamente para bailar en pareja, pero terminó teniendo su propio espectáculo. ¿Qué hice?',
        'Caras deformadas, filtros ridículos y muchas carcajadas. ¿Qué hacíamos con la cámara?',
        'No necesitábamos un gran plan, solo salir juntos y disfrutar el camino. ¿A dónde escapamos?',
        'Entre naturaleza, caminos y tranquilidad, compartimos una salida especial. ¿Qué lugar era?',
      ],
    },
  },
  {
    day: 22,
    type: 'coupon',
    accent: 'navidad',
    title: 'Cupón: Noche de película',
    message: 'Tú eliges la película que quieras y la vemos de principio a fin. Sin interrupciones, sin quejas y disfrutando de una velada juntos',
    coupon: {
      kind: 'movie',
      title: 'Noche de película',
      description: 'Tú eliges la película. Yo pongo las palomitas, cobija y compañía sin quejarme.',
      emoji: '🎬',
    },
  },
  {
    day: 23,
    type: 'letter',
    accent: 'navidad',
    title: 'Carta de Nochebuena',
    message:
      'Mi niño,\n\nMañana es Navidad y el regalo más grande no está bajo ningún árbol: eres tú. Una vez más, me doy cuenta de que el regalo más bonito que me ha dado la vida es poder compartir tantos momentos contigo. No existen palabras suficientes para describir todo lo que hemos vivido en estos siete años: desde aquel catecismo donde comenzó nuestra historia, los viajes, las playas, Baños, las fotografías, las salidas al cine, al parque y las risas por cualquier tontería. Pero los días difíciles también nos enseñaron tanto gracias por estar en mi crecimiento personal y si pudiera guardar cada instante, cada abrazo, cada aventura y cada pedacito de nuestra historia, lo haría para nunca olvidar lo bonito que fue coincidir contigo. Gracias por todo lo que has hecho por mi y espero poder aportado algo en ti. Feliz Nochebuena. Gracias por ser parte de mi vida y de mis días. \nCon todo el cariño del mundo.',
  },
  {
    day: 24,
    type: 'memory',
    accent: 'navidad',
    title: 'El gran final',
    message:
      'Llegamos al último día. Y este no es un final, es un comienzo. Estos 24 días fueron apenas una pequeña forma de recordarte todo lo que hemos vivido, cada sonrisa, cada aventura, cada locura y hasta los momentos difíciles que nos hicieron crecer. Entra a nuestra galería y descubre la última carta. Allí encontrarás pedacitos de nosotros, recuerdos que las palabras no alcanzan a describir y una historia que siempre llevaré en el corazón. Porque siete años no se resumen en un calendario, pero sí nos recuerdan lo bonito que ha sido encontrarnos y seguir caminando juntos. ',
  },
];



export const FINAL_LETTER = `Mi niño,

Llegamos al día 24. Veinticuatro puertas abiertas, veinticuatro recuerdos revive juntos, y todavía me sobran razones para quererte.

Hace siete años te encontré en un catecismo. No sabía que estaba empezando a escribir la mejor historia de mi vida. Desde entonces hemos coleccionado atardeceres en la playa, aguas termales en los Baños de Agua Santa, selfies espontáneas, retos tontos, cartas escritas a destiempo y abrazos que curan cualquier día malo.

Este calendario no es más que una excusa para decirte lo que ya sabes: que te sigo eligiendo. Hoy, mañana, y todos los diciembres que nos queden.

Gracias por quedarte. Gracias por ser mi lugar favorito.

Feliz Navidad, mi niño. Aquí está el final de este adviento, pero apenas empezamos el nuestro.

Con todo mi corazón, para siempre,
Yo`;
