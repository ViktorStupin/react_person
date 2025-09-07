import React from 'react';

const Person = ({ name, age, isMale }) => {
  const partnerText = isMale ? 'wife' : 'husband';

  const showAge = age !== undefined;

  return (
    <div className="Person">
      <h2 className="Person__name">{name}</h2>
      {showAge && <p className="Person__age">Age: {age}</p>}
      <p className="Person__partner">Partner: {partnerText}</p>
    </div>
  );
};

export default Person;
