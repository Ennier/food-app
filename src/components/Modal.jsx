import ReactDOM from 'react-dom';

export default function Modal({ show, onClose, content, actionText, openForm}) {

    if(!show){
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal">
            {content}
            <div className="modal-actions">
                <button className="text-button" onClick={onClose}>Close</button>
                <button className="button" onClick={openForm} >{actionText}</button>
            </div>
        </div>,
        document.getElementById("modal")
    )
}