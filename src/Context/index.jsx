import { createContext } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // const [items, setItems] = useState([]);
    // const [total, setTotal] = useState(0);

    // const addToCart = (item) => {
    //     const newItems = [...items, item];
    //     setItems(newItems);
    //     setTotal(total + item.price);
    // }

    // const removeFromCart = (id) => {
    //     const newItems = items.filter(item => item.id!== id);
    //     setItems(newItems);
    //     setTotal(total - items.find(item => item.id === id).price);
    // }

    return (
        <ShoppingCartContext.Provider /*value={{ items, setItems, addToCart, removeFromCart, total, setTotal }} */ >
            {children}
        </ShoppingCartContext.Provider>
    )
}