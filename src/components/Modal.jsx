import ReactDOM from 'react-dom';
import Button from './Button';

export default function Modal({ show, onClose, content, actionText, onOpen}) {

    if(!show){
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal">
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
        </div>,
        document.getElementById("modal")
    )
}