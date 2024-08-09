import React from 'react';

const CardInfo = ({ cardHolder, expires }) => {
  return (
    <div className="p-4 bg-blue-500 shadow rounded-lg text-white">
      <h4 className="text-lg font-semibold">VISA</h4>
      <p className="text-2xl font-semibold mt-2">**** **** **** 1234</p>
      <div className="mt-4">
        <p>{cardHolder}</p>
        <p>Expires: {expires}</p>
      </div>
    </div>
  );
};

export default CardInfo;
