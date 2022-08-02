import { useSelector, useDispatch } from 'react-redux';
import {
    selectCartCount,
    selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { ReactComponent as ShpoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconeContainer, ItemCount} from './cart-icon.styles';

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconeContainer onClick={toggleIsCartOpen}>
            <ShpoppingIcon className="shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconeContainer>
    );
};

export default CartIcon;
