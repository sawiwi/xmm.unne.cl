import React, { useState, useEffect } from 'react';
import Section from '../../../Section/Section';
import { PDFViewer } from '@react-pdf/renderer';
import TopInfoAddress from './TopInfoAddress';
import GalleryCarousel from '../../../GalleryCarousel/GalleryCarousel';
import Details from './Details';
import Characteristics from './Characteristics';
import ReactMap from '../../../Map/ReactMap';
import PDFView from './PDFView';
import SimilarProyects from './SimilarProyects';
import ClipboardProperty from './ClipboardProperty';
import Modal from '../../../Modal/Modal';
import Spinner from '../../../Spinner/Spinner';
import { iconsList } from '../../../Icons';
// import LocationSearch from './LocationSearch';

const PropertyComponent = ({ property }) => {
  const [loadingOnStart, setLoadingOnStart] = useState(true);
  const [showModalShare, setShowModalShare] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [copied, setCopied] = useState(false);
  const { FaShare, MdSimCardDownload } = iconsList;

  const lng = Number(property?.LngLat?.match(/Lng: ([-\d.]+)/)[1]) || -70.64827;
  const lat = Number(property?.LngLat?.match(/Lat: ([-\d.]+)/)[1]) || -33.45694;

  /** Render clipboard property modal */
  const renderContent = () => (
    <ClipboardProperty
      {...{
        propertyId: property?.id,
        copied,
        setCopied,
      }}
    />
  );

  /** Render Property detail */
  const renderContentPdf = () => (
    <PDFViewer className="w-full h-[90vh]">
      <PDFView property={property} />
    </PDFViewer>
  );

  useEffect(() => {
    if (Object.keys(property).length > 0) {
      setLoadingOnStart(false);
      return;
    }
  }, [property]);

  return (
    <Section>
      {loadingOnStart && <Spinner />}

      {Object.keys(property).length > 0 && (
        <div className="my-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto bg-red md:grid-cols-reverse">
            <div className="sm:col-span-6 col-span-3 xl:col-span-3 bg-gray-50 max-h-auto order-2 xl:order-1">
              <div className="flex justify-between items-center py-2.5 px-5 text-xs xl:text-sm text-gray-500">
                <TopInfoAddress property={property} />
                <div className="flex flex-row">
                  <span
                    onClick={() => setShowModalShare(true)}
                    className="flex items-center hover:text-primary cursor-pointer"
                  >
                    <FaShare className="mr-1" />
                    Compartir
                  </span>
                  <span className="mx-4 text-gray-200">|</span>
                  <span
                    onClick={() => setShowModalDetail(true)}
                    className="flex items-center hover:text-primary cursor-pointer"
                  >
                    <MdSimCardDownload className="mr-1" />
                    Descargar PDF
                  </span>
                </div>
              </div>
              <GalleryCarousel items={property} />
              <Characteristics property={property} />
            </div>
            <div className="sm:col-span-6 col-span-3 xl:col-span-1 bg-white h-auto order-1 xl:order-2">
              <Details property={property} />
              <SimilarProyects property={property} />
            </div>
          </div>

          <div>
            <ReactMap
              longitudeProp={lng}
              latitudeProp={lat}
              property={property}
            />
          </div>
          <Modal
            renderTrigger={() => null}
            isOpenProp={showModalShare}
            renderContent={renderContent}
            contentExtraClass="max-w-2xl"
            modalTitle="Compartir Propiedad"
            onCloseModal={() => {
              setShowModalShare(false);
            }}
          />
          <Modal
            renderTrigger={() => null}
            isOpenProp={showModalDetail}
            renderContent={renderContentPdf}
            contentExtraClass="max-w-[90%]"
            modalTitle="Descargar PDF"
            onCloseModal={() => {
              setShowModalDetail(false);
            }}
          />
        </div>
      )}
    </Section>
  );
};

export default PropertyComponent;
