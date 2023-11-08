import axios from 'axios';
import { parseRealtorDate } from '../utils';
const ContactFormServices = {
  sendFormToUser: async (name, userEmail, phone, uniqueCode) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${userEmail}`,
      {
        Nombre: name,
        Telefono: phone,
        Correo: userEmail,
        Codigo: uniqueCode,
        '_subject': 'De: Unne.cl'

      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  sendFormToRealtor: async (
    from,
    name,
    userEmail,
    phone,
    propertyType,
    bedrooms,
    bathrooms,
    surfaceM2,
    commonExpenses,
    parkingLots,
    haveWarehouse,
    address,
    realtorEmail
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Desde: from,
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
        Tipo_de_propiedad: propertyType,
        Dormitorios: bedrooms,
        Banos: bathrooms,
        Superficie: surfaceM2,
        Gastos_comunes: commonExpenses,
        Estacionamientos: parkingLots,
        Incluye_bodega: haveWarehouse,
        Direccion: address,
        '_subject': 'De: Unne.cl'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  sendContactForm: async (from, name, userEmail, phone, realtorEmail) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Desde: from,
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
        '_subject': 'De: Unne.cl'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  // Formulario Unidades nuevas
  sendContactUnidad: async (
    name,
    lastname,
    userEmail,
    phone,
    date,
    time,
    realtorEmail
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Nombre: name,
        Apellido: lastname,
        Correo: userEmail,
        Telefono: phone,
        Fecha: date,
        Hora: time,
        '_subject': 'De: Unne.cl'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  // Quienes somos form
  sendContactAboutForm: async (
    from,
    name,
    userEmail,
    phone,
    reason,
    message,
    realtorEmail
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Desde: from,
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
        Soy: reason,
        Mensaje: message,
        '_subject': 'De: Unne.cl'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  //Meeting Form
  sendContactMeetingForm: async (
    from,
    name,
    email,
    subject,
    message,
    realtorEmail
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Desde: from,
        Nombre: name,
        Email: email,
        Asunto: subject,
        Mensaje: message,
        '_subject': 'De: Mi página web'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },


};

export default ContactFormServices;
