import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { company } from '../../../../constants/consts/company';
import { iconsList } from '../../../Icons';

const ClipboardProperty = ({ copied, setCopied, propertyId }) => {
  const { HiClipboard, HiClipboardCheck } = iconsList;

  return (
    <CopyToClipboard
      text={`https://unne.pa/propiedades/${propertyId}?statusId=${company?.statusId}&companyId=${company?.companyId}`}
      onCopy={() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      }}
    >
      <div className="flex justify-center text-lg my-5 p-2 rounded-lg bg-gray-100 cursor-pointer">
        <span className="flex items-center text-slate-500">
          {!copied ? 'Compartir enlace' : 'Copiado'}
          <span className="text-slate-500 ml-2 text-2xl">
            {!copied ? (
              <HiClipboard className="text-slate-500" />
            ) : (
              <HiClipboardCheck className="text-green-600" />
            )}
          </span>
        </span>
      </div>
    </CopyToClipboard>
  );
};

export default ClipboardProperty;
