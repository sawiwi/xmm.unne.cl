/** Truncate string lenght */
export const truncateString = (str, limit = 60) =>
  str.length > limit ? `${str.substring(0, limit)}...` : str;

/** Parse number to CLP currency */
export const parseToCLPCurrency = (number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(number);
};

/** Parse CLP to UF */
export const clpToUf = (clpValue, ufValue) => {
  return (Math.round((clpValue / ufValue) * 100) / 100000).toFixed(2);
};
export const clpToUf2 = (clpValue, ufValue) => {
  return (clpValue / ufValue).toFixed(2);
};

/** Parse UF to CLP */
export const ufToClp = (priceUF, ufValue) => priceUF * ufValue;

export const parseToDecimal = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/** Generate random numbers (4) */
export const generateValidationCode = () =>
  String(Math.floor(1000 + Math.random() * 9000));

/** Truncate small string */
export const truncateStringSmall = (str, limit = 30) =>
  str?.length > limit ? `${str?.substring(0, limit)}...` : str;

export const parseRealtorDate = (currentTime) => {
  const date = new Date(currentTime);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const hours = date.getHours().toString().padStart(2, '0');
  const mins = date.getMinutes().toString().padStart(2, '0');

  const parsedDate = `${day}/${month}/${year} ${hours}:${mins}`;
  return parsedDate;
};
