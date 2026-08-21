import ReactDOM from 'react-dom';
import Button from './UI/Button';

export default function Modal({ show, onClose, content, actionText, onOpen}) {

    if(!show){
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {content}
                <div className="modal-actions">
                    <Button
                        classes="text-button"
                        action={onClose}
                        text="Close"
                    />
                    <Button
                        classes="button"
                        action={onOpen}
                        text={actionText}
                    />
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    )
}