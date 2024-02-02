import { useEffect, useState } from "react"
import { formatCurrency } from "../filtres/intl";
import { useDispatch } from "react-redux";
import { add } from "../slices/cartSlice";


export default function Products() {

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const response = await fetch('https://dummyjson.com/products?limit=12');
        const data = await response.json();

        // setProducts(data.products);
        return data.products;
    }

    useEffect(() => {
        fetchProducts().then( products => {
            setProducts(products);
        });

    }, []);

    return (
        <>
            <h1>Liste des produits</h1>

            <div className="row">
                { products.map( product => (
                    <div className="col-3 gy-3" key={product.id}>
                        <div className="card">
                            <img src={product.thumbnail} alt={product.title} className="card-img-top" />
                            <div className="card-body">
                                <h2 className="card-title">{product.title}</h2>
                                <p className="card-text">{product.description}</p>
                                <div className="mb-2">
                                    <span className="badge text-bg-primary">{ product.category }</span> &nbsp;
                                    <span className="badge text-bg-primary">{ product.brand }</span>
                                </div>
                                <div className="text-end mb-2">
                                    {formatCurrency(product.price)}
                                </div>
                                <div className="text-end">
                                    <button className="btn btn-outline-primary" onClick={() => dispatch( add({ product }) )}>
                                        Ajouter au panier</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </>
    )
}