import ReactDOM from 'react-dom';

export default function Modal({ show, onClose, children, actionText}) {

    if(!show){
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal">
            {children}
            <div className="modal-actions">
                <button className="text-button" onClick={onClose}>Close</button>
                <button className="button" >{actionText}</button>
            </div>
        </div>,
        document.getElementById("modal")
    )
}