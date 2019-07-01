import React from 'react';
import { CardColumns } from 'react-bootstrap';

import BuyCard from './BuyCard';
import nissan_sprite from './../../img/gtx_md.png';
import porsche_sprite from './../../img/porsche_md.png';

export default props => {
  console.log(props);
  // const renderCars = cars.map(car => <BuyCard car={car} />);
  return (
    <CardColumns>
      <BuyCard src={nissan_sprite} />
      <BuyCard src={porsche_sprite} />
      <BuyCard src={porsche_sprite} />
    </CardColumns>
  );
};
