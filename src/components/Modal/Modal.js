import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ButtonClose from '../BottonClose/BottonClose';
import Button from '../Button/Button';

const Modal = ({
  renderTrigger,
  renderContent,
  contentExtraClass = 'max-w-screen-xl',
  contentPaddingClass = 'py-4 px-6 md:py-5 text-slate-800 bg-white',
  triggerText = 'Open Modal',
  modalTitle = 'Modal title',
  modalSubtitle = "Modal subtitle",
  isOpenProp,
  onCloseModal,
}) => {
  let [isOpen, setIsOpen] = useState(!!isOpenProp);

  function closeModal() {
    if (typeof isOpenProp !== 'boolean') {
      setIsOpen(false);
    }
    onCloseModal && onCloseModal();
  }

  function openModal() {
    if (typeof isOpenProp !== 'boolean') {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    setIsOpen(!!isOpenProp);
  }, [isOpenProp]);

  return (
    <div>
      {renderTrigger ? (
        renderTrigger(openModal)
      ) : (
        <Button onClick={openModal}> {triggerText} </Button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-1 text-center md:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-75"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-50 dark:bg-opacity-80" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-75"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={`inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-slate-900 border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-slate-800 dark:border-slate-700 text-slate-900 dark:text-slate-300 ${contentExtraClass}`}
              >
                <div className="py-4 px-6 text-center relative border-b bg-white border-slate-100 md:py-5">
                  <ButtonClose
                    onClick={closeModal}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4"
                  />
                  {modalTitle && (
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold lg:text-xl mx-10 text-slate-800"
                    >
                      {modalTitle}
                    </Dialog.Title>
                  )}
                    {modalSubtitle && (
                    <Dialog.Title
                      as="h5"
                      className="text-base font-light lg:text-base mx-10 text-slate-400"
                    >
                      {modalSubtitle}
                    </Dialog.Title>
                  )}
                </div>
                <div className={contentPaddingClass}>{renderContent()}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
