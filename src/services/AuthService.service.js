import Cookies from 'js-cookie';

// Función para convertir cadenas de tiempo en milisegundos
const parseTimeToMilliseconds = (timeString) => {
  const regex = /(\d+)([dh])/;
  const matches = timeString.match(regex);

  if (!matches) {
    return null; // Si el formato no es válido, devuelve null
  }

  const value = parseInt(matches[1]);
  const unit = matches[2];

  if (unit === 'd') {
    return value * 24 * 60 * 60 * 1000; // Convertir días a milisegundos
  } else if (unit === 'h') {
    return value * 60 * 60 * 1000; // Convertir horas a milisegundos
  }

  return null; // Si la unidad no es válida, devuelve null
};

// Función para establecer la cookie con tiempo de expiración
export const setTokenCookie = (TOKEN_COOKIE_NAME, token, expires) => {
  const expirationTime = parseTimeToMilliseconds(expires);
  
  if (expirationTime !== null) {
    const expirationDate = new Date(Date.now() + expirationTime);
    Cookies.set(TOKEN_COOKIE_NAME, token, { expires: expirationDate });
  }
};


export const getTokenCookie = (TOKEN_COOKIE_NAME) => {
  return Cookies.get(TOKEN_COOKIE_NAME);
};

export const removeTokenCookie = (TOKEN_COOKIE_NAME) => {
  Cookies.remove(TOKEN_COOKIE_NAME);
};
