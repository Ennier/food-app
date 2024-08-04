import ReactDOM from 'react-dom';
import Button from './UI/Button';
import { Children, useEffect, useRef } from 'react';

export default function Modal({ children, open, className = '' }) {
    const dialogRef = useRef();

    useEffect(() => {
        if (open) {
            dialogRef.current.showModal();
        }
    }, [open]);

    return ReactDOM.createPortal(
        <dialog ref={dialogRef} className={`modal ${className}`}>
            {children}
        </dialog>,
        document.getElementById("modal")
    )
}