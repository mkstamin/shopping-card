import React, { useContext } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { CardContext } from '../../context/context';

const CardBody = ({ item }) => {
    const { incCout, dicCout, removeItem } = useContext(CardContext);

    const { id, title, image, price, quantity } = item;
    // console.log(incCout);
    return (
        <div className="card__body" key={id}>
            <div className="item">
                <div className="item__details">
                    <img src={`./img/${image}`} alt="cpu" />
                    <div className="about-item">
                        <h3 className="about-item__name">{title}</h3>
                        <h4 className="about-item__price">price: ${price}</h4>
                        <button
                            type="button"
                            className="about-item__btn"
                            onClick={() => removeItem(id)}
                        >
                            remove
                        </button>
                    </div>
                </div>
                <div className="item__count">
                    <FaArrowUp onClick={() => incCout(id)} />
                    <span>{quantity}</span>
                    <FaArrowDown onClick={() => dicCout(id)} />
                </div>
            </div>
        </div>
    );
};

export default CardBody;
