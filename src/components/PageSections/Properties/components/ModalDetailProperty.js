import React, {useState, useEffect} from "react";
import { Dialog } from '@headlessui/react'
import GalleryCarousel from '../../../GalleryCarousel/GalleryCarousel';
import Characteristics from "./Characteristics";
import Details from "./Details";
import Spinner from '../../../Spinner/Spinner';
import Section from "../../../Section/Section";




const ModalDetailProperty = ({property}) => {
    const [loadingOnStart, setLoadingOnStart] = useState(true);

    const lng = Number(property?.LngLat?.match(/Lng: ([-\d.]+)/)[1]) || -70.64827;
    const lat = Number(property?.LngLat?.match(/Lat: ([-\d.]+)/)[1]) || -33.45694;


    useEffect(() => {
        if (Object.keys(property).length > 0) {
          setLoadingOnStart(false);
          return;
        }
      }, [property]);

    return(
        
                 
        <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle transition-all">
                  {loadingOnStart && <Spinner />}
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    
                  </Dialog.Title> */}
                  <div className="mt-2">
                        <GalleryCarousel property={property} />
                        <Characteristics property={property} />
                        <div className="sm:col-span-6 col-span-3 xl:col-span-1 bg-white h-auto order-1 xl:order-2">
                            <Details property={property} />
                        </div>
                  </div>

                </Dialog.Panel>
      
   
    )
}

export default ModalDetailProperty;