import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, faAnchorLock } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import React from 'react';
import { Si1Password } from 'react-icons/si';

const Test = () => {
  return (
    <div>
      hii
      <FontAwesomeIcon icon={fa1} />
      <FontAwesomeIcon icon={fa2} />
      <FontAwesomeIcon icon={fa3} />  
      <FontAwesomeIcon icon={faAnchorLock}  />
      <Si1Password/>
    </div>
  );
}

export default Test;
