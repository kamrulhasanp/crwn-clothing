import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import {ShpoppingIcon, CartIconeContainer, ItemCount} from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconeContainer onClick={toggleIsCartOpen}>
            <ShpoppingIcon className="shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconeContainer>
    );
};

export default CartIcon;
