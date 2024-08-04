import ReactDOM from 'react-dom';
import Button from './UI/Button';
import { Children, useEffect, useRef } from 'react';

export default function Modal({ children, open, className = '' }) {
    const dialogRef = useRef();

    useEffect(() => {
        const modal = dialogRef.current;
        if (open) {
            modal.showModal();
        }

        return () => modal.close();
    }, [open]);

    return ReactDOM.createPortal(
        <dialog ref={dialogRef} className={`modal ${className}`}>
            {children}
        </dialog>,
        document.getElementById("modal")
    )
}