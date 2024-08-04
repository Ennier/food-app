import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '', // 'cart', 'checkout'
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
});

export function UserProgressContextProvider ({children}) {
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart(params) {
        setUserProgress('');
    }

    function showCheckout(params) {
        setUserProgress('checkout');
    }

    function hideCheckout(params) {
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    };

    return (
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    )
}

export default UserProgressContext;