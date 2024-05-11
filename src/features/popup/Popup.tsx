import { FC, ReactNode } from "react";
import './style.css';

interface Props {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Popup: FC<Props> = ({ title, children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>{title}</h2>
                {children}
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
