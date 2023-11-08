import React, { useState } from 'react';
import Button from '../Button/Button';
import ContactFormServices from '../../services/ContactFormServices';
import ContactApiFormServices from '../../services/ContactApiForm';
import ToastifyComponent from '../Toastify/ToastifyComponent';
import { toast } from 'react-toastify';
import { iconsList } from '../Icons';
import { company, companyForm } from '../../constants/consts/company';
import { realtorData } from '../../constants/consts/realtor';
import Alert from '../Alert/Alert';

const reasons = [
  {
    id: 1,
    name: 'Soy Inversionista',
  },
  {
    id: 2,
    name: 'Soy Corredor',
  },
  {
    id: 3,
    name: 'Soy Propietario',
  },
];

const Contact = () => {
  const { FaUserAlt, FiMail, BsFillTelephoneFill } = iconsList;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    termsAndConditions: false,
    companyId: companyForm.id, // ❌ el company si es 15, el server responde con un status 500
    action: '',
    message: '',
    subject: '...',
    lastName: '...',
    meetingDate: 'No indicada',
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    allFieldRequierd: '',
    serverEmailError: '',
  });

  const colorText = 'text-white';
  const [colorsInput, setColors] = useState({
    label: 'text-white',
    bg: 'bg-transparent',
    border: 'border-black',
    Textplaceholder: 'placeholder-white',
    focusBorder: 'focus:border-white',
    focusBg: 'focus:bg-transparent',
  });
  const [colorsButton, setColorsButton] = useState({
    bg: 'bg-white',
    hoverBg: 'hover:bg-gray-300',
    text: 'text-panal-cyan',
    fill: 'fill-panal-cyan',
  });

  /** Handle Form Data inputs */
  /** Update Name */
  const handleName = (name) => {
    setFormData({
      ...formData,
      name: name,
    });
  };

  /** Update Email */
  const handleEmail = (email) => {
    setFormData({
      ...formData,
      email: email,
    });
  };
  /** Update phone */
  const handlePhone = (phone) => {
    setFormData({
      ...formData,
      phone: phone,
    });
  };

  /** Update Reason */
  const handleAction = (ev) => {
    setFormData({
      ...formData,
      action: ev.target.value,
    });
  };

  const handleMessage = (ev) => {
    setFormData({
      ...formData,
      message: ev.target.value,
    });
  };

  /** Update CHECKBOX */
  const handleVerification = (ev) => {
    setFormData({
      ...formData,
      termsAndConditions: ev.target.checked,
    });
  };

  /** On toast success */
  const showToastSuccessMsg = (msg) => {
    toast.success(msg, {
      position: 'bottom-center',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  /** On toast error */
  const showToastErrorMsg = (msg) => {
    toast.error(msg, {
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  /** Handle Terms and Conditions change */
  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      termsAndConditions: false,
      companyId: companyForm.id,
      action: '',
      message: '',
      subject: '',
      lastName: '...',
      meetingDate: 'No indicada',
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (
      [
        formData?.name,
        formData?.email,
        formData?.phone,
        formData?.action,
        formData?.message,
      ].includes('') ||
      formData.termsAndConditions === false
    ) {
      showToastErrorMsg(
        'Todos los campos son obligatorios, y debes aceptar los terminos y condiciones'
      );
      return;
    }

    try {
      /** FormSubmit Service */
      setLoading(true);
      const response = await ContactFormServices.sendContactAboutForm(
        'Unne',
        formData?.name,
        formData?.email,
        formData?.phone,
        formData?.action,
        formData?.message,
        realtorData?.email
      );

      /** Api Service */
      const apiResponse = await ContactApiFormServices.addContactForm(formData);

      if (response?.success === 'false') {
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError:
            'Se necesita activación de email del administrador/a',
        });
        setLoading(false);
        resetForm();
        return;
      }

      if (response.success === 'true' && apiResponse.status === 'ok') {
        setLoading(false);
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError: '',
        });
        showToastSuccessMsg(
          `Solicitud enviada exitosamente, dentro de poco de contactaremos`
        );
        setTimeout(() => {
          resetForm();
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      showToastErrorMsg('Ha ocurrido un error al enviar el formulario');
    }
  };

  return (
    <div className="bg-gray-200 rounded-[50px] p-4 my-10 ">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-700 py-3">
          Contáctanos<br/> para más información
        </h2>
      </div>
      <form name="FormSubmit" onSubmit={handleSubmit} className="py-10">
        <div className="flex mb-5">
          <div className="w-1/5 flex justify-start items-center">
            <i className="p-4 rounded-full bg-white ml-2 xl:ml-8">
              <FaUserAlt className="text-xl text-gray-300" />
            </i>
          </div>

          <div className="w-4/6 flex justify-center items-center flex-col">
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              id="name"
              value={formData?.name}
              onChange={(ev) => handleName(ev.target.value)}
              className="w-full p-3 rounded-full bg-white text-lg text-gray-900 placeholder:text-gray-500 placeholder:font-bold outline-none focus:outline-none"
            />
          </div>
        </div>
        <div className="flex mb-5">
          <div className="w-1/5 flex justify-start items-center">
            <i className="p-4 rounded-full bg-white ml-2 xl:ml-8">
              <FiMail className="text-xl text-gray-300" />
            </i>
          </div>
          <div className="w-4/6 flex justify-center items-center flex-col">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo electrónico"
              className=" w-full p-3 rounded-full bg-white text-lg text-gray-900 placeholder:text-gray-500 placeholder:font-bold outline-none"
              value={formData?.email}
              onChange={(ev) => handleEmail(ev.target.value)}
            />
          </div>
        </div>
        <div className="flex mb-5">
          <div className="w-1/5 flex justify-start items-center">
            <i className="p-4 rounded-full bg-white ml-2 xl:ml-8">
            <BsFillTelephoneFill className="text-xl text-gray-300" />
            </i>
          </div>
          <div className="w-4/6 flex justify-center items-center flex-col">
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Teléfono"
              className=" w-full p-3 rounded-full bg-white text-lg text-gray-900 placeholder:text-gray-500 placeholder:font-bold outline-none"
              value={formData?.phone}
              onChange={(ev)=> handlePhone(ev.target.value)}
            />
          </div>
        </div>
        <div className="my-5 py-3 flex justify-center items-center flex-wrap">
          {reasons.map((reason) => (
            <label key={reason.id} className="flex items-center mx-1 my-1">
              <input
                type="checkbox"
                id="action"
                name="action"
                value={reason.name}
                checked={formData?.action === reason.name}
                onChange={handleAction}
                className="h-[1.125rem] mx-2 w-[1.125rem] mr-2 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
              />
              {reason.name}
            </label>
          ))}
        </div>
        <div className="flex mb-5">
          <div className="flex justify-start items-center"></div>
          <div className="w-[90%] mx-auto flex justify-center items-center flex-col">
            <textarea
              name="message"
              id="message"
              placeholder="Escriba su mensaje"
              value={formData?.message}
              onChange={handleMessage}
              className="textarea textarea-bordered  bg-white textarea-lg w-full h-full rounded-[20px] outline-none focus:outline-none"
            ></textarea>
          </div>
        </div>
        <div className="w-5/6 mx-auto my-14 mb-10 flex items-center justify-center">
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
              type="checkbox"
              id="termsAndConditions"
              name="termsAndConditions"
              checked={formData?.termsAndConditions}
              onChange={handleVerification}
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer text-gray-600"
              htmlFor="termsAndConditions"
            >
              Al continuar estás aceptando los términos y condiciones y la
              política de privacidad
            </label>
          </div>
        </div>

        {errorMsg?.serverEmailError && (
          <Alert type="danger" message={errorMsg?.serverEmailError} />
        )}

        <div className="flex mb-5 justify-center items-center">
          <button
            type="submit"
            className="bg-primary-400  text-white pl-2 pr-4 py-2 hover:bg-primary-opacity w-2/4 rounded-lg"
          >
            <div className="text-xl font-medium capitalize w-5/6 mx-auto text-center">
              {loading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className={`inline w-4 h-4 ${colorsButton.text} animate-spin ${colorsButton.fill}`}
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Cargando...</span>
                </div>
              ) : (
                <span className="ml-3">Enviar</span>
              )}
            </div>
          </button>
        </div>
        <ToastifyComponent />
      </form>
    </div>
  );
};

export default Contact;
