import { useSelector } from "react-redux";
import { formatCurrency } from "../filtres/intl";
import Icon from "./Button/Icon";
import { useMemo } from "react";

export default function Cart() {
    const { cart } = useSelector( state => state.cart )

    const total = useMemo( () => cart.reduce( (acc, product) => {return acc + product.price}, 0), [cart]);
    
    return (
        <div className="fs-5">
            <Icon iconName="cart" /> &nbsp;
            <span>{cart.length} Produits</span> -&nbsp;
            <span>{formatCurrency(total)}</span>
        </div>
    )
}