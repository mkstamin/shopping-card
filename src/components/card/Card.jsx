import React, { useContext } from 'react';
import { CardContext } from '../../context/context';
import CardBody from './CardBody';

const Card = () => {
    const { items, totalPrice } = useContext(CardContext);
    console.log(items);
    return (
        <div className="card">
            {items.map((item) => (
                <CardBody key={item.id} item={item} />
            ))}
            <hr />
            <div className="card__footer">
                <h3>Total amount:</h3>
                <h3>${totalPrice}</h3>
            </div>
        </div>
    );
};

export default Card;
