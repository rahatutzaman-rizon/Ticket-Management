import { QrCodeIcon } from '@heroicons/react/24/solid';

const CardInfo = ({ cardHolder, expires }) => {
  return (
    <div className="p-4 bg-blue-500 shadow-lg rounded-lg text-white">
      <div className="flex justify-between items-center">
      <QrCodeIcon className="h-10 w-10" /> {/* Placeholder for QR code */}
        <h4 className="text-lg font-semibold">Ticket Master</h4>
        
      </div>
      <p className="text-2xl font-semibold mt-2">**** **** **** 1234</p>
      <div className="mt-4 flex gap-24">
        <div>
            <h6>Card Holder</h6>
            <p>{cardHolder}</p>
        </div>
       <div>
       <h6>Expires</h6>
       <p>{expires}</p>

       </div>
      </div>
    </div>
  );
};

export default CardInfo;