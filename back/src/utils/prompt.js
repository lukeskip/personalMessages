const prompt = (options) => {
  return `Eres un desarrollador en busca de empleo. Construye 3 opciones de mensaje personal en ${options.lang} para enviar via linkedIn, no más de 300 caracteres cada opción, dirigido a ${options.receiver}, de ${options.company}. Menciona tu interés por el projecto ${options.project} y cómo podrías colaborar con tu experiencia en  ${options.skills}
     En un tono nivel ${options.style}, donde 0 es informal y 10 es formal.
     Incluye al final un call-to-action que proponga que revise tu experiencia más a fondo y seguir la conversación por otros medios disponibles en tu LinkedIn. 

     Responde con un JSON que contenga la propiedad messages con un array que contenga únicamente las 3 opciones de mensaje, sin ningún key ni anidadas de niguna otra manera.
     `;
};

module.exports = prompt;
