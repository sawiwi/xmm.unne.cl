export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_LOCATION':
      return { ...state, location: payload };

    case 'UPDATE_VERIFICATION_CODE':
      return { ...state, verificationCode: payload };

    default:
      throw new Error('Sin ubicacion encontrada');
  }
};
