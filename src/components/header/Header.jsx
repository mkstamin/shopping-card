import React, { useContext } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { CardContext } from '../../context/context';

const Header = () => {
    const { totalQuantity } = useContext(CardContext);
    return (
        <div className="header">
            <div className="logo">
                <h2>Mks Tamin/Shopping Card</h2>
            </div>
            <div className="shopping-bag">
                <FaShoppingBag />
                <span className="total-items">{totalQuantity}</span>
            </div>
        </div>
    );
};

export default Header;
