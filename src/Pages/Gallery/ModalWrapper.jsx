import React, { useState, useEffect } from 'react';
import './ModalWrapper.css';
import PropTypes from 'prop-types';




/**
 * A reusable modal wrapper component with support for animations, click-to-close functionality,
 * and customizable styles. The modal includes overlay and content sections.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.isOpen - Indicates whether the modal is open.
 * @param {boolean} props.isClosing - Indicates whether the modal is in the process of closing.
 * @param {React.ReactNode} props.children - The content to render inside the modal.
 * @param {string} [props.className] - Additional custom classes for the modal content.
 * @param {Object} [props.invokeOutSideProp] - Custom props for modal behavior.
 * @param {boolean} [props.invokeOutSideProp.close=false] - If true, clicking outside the modal closes it.
 * @param {Function} props.onClose - Callback function to handle modal close actions.
 * @returns {React.ReactElement|null} The modal component or `null` if not visible.
 */
const ModalWrapper = ({ isOpen, isClosing, children, className = ``, invokeOutSideProp = { close: false }, onClose }) => {
    // State to manage the modal's visibility    
    const [isModalOpen, setIsModalOpen] = useState(false);
    /**
     * Effect to handle modal opening and closing animations.
     * If `isOpen` becomes true, the modal is displayed.
     * If `isOpen` is false but the modal was open, it delays closing to allow animations.
     */
    useEffect(() => {
        if (isOpen) {
            setIsModalOpen(true);
        } else if (!isOpen && isModalOpen) {
            setIsModalOpen(false); // Delay closing to allow the closing animation
        }
    }, [isOpen, isModalOpen]);

    /**
     * Handles clicks outside the modal content to close the modal.
     *
     * @param {MouseEvent} e - The click event.
     */
    const handleOutsideClick = (e) => {
        // Check if the user clicked outside of the modal content
        if (invokeOutSideProp.close && e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    };
    // If the modal is not open and not in transition, do not render
    if (!isOpen && !isModalOpen) return null;

    return (
        <div className={`modal-overlay fixed inset-0 flex items-center justify-center overlay-backdrop  bg-opacity-50 z-50 ${isClosing ? 'closing' : ''} px-4 md:px-0 lg:px-0 2xl:px-0 `}  onClick={handleOutsideClick} >
            <div className={`bg-[#ffffe3] rounded-2xl shadow-lg max-w-[1400px] max-h-[900px] min-w-[28%] w-full p-6 modal-content ${isClosing ? 'closing' : ''}`}  onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>

    );
};

// Define prop types for the component
ModalWrapper.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isClosing: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    invokeOutSideProp: PropTypes.shape({
        close: PropTypes.bool,
    }),
    onClose: PropTypes.func,
};




export default ModalWrapper;
