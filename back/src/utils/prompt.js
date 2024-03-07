const prompt = (options) => {
  const project = options.project
    ? `Menciona que encontraste información sobre el projecto ${options.project} y que te interesa participar en ese u otros similares`
    : "";

  const style =
    options.style === "formal"
      ? `utiliza un tono formal hablando de "usted" en todo momento,pero saludando por su nombre`
      : `utiliza un tono informal e incluye hasta 2 emojis en tus opciones`;

  return `Eres un desarrollador en busca de empleo. Construye 3 opciones de mensaje personal en ${options.lang} para enviar via linkedIn, no más de 400 caracteres cada opción, dirigido a ${options.receiver}, de ${options.company}. 
    
      ${project}

      Menciona tu experiencia en ${options.skills} y como  podría ser de utilidad para la empresa y sus proyectos.

    ${style}

     Incluye al final un call-to-action imperativo amable que proponga que revise tu experiencia más a fondo y seguir la conversación por otros medios disponibles en tu LinkedIn. 

     Responde con un JSON que contenga la propiedad messages con un array que contenga únicamente las 3 opciones de mensaje, sin ningún key ni anidadas de niguna otra manera.
     `;
};

module.exports = prompt;
