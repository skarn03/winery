import React, { useState, useEffect } from 'react';
import './FullPageModalWrapper.css';



/**
 * FullPageModalWrapper Component
 * 
 * This component renders a full-page modal overlay. It uses a combination of React state and props
 * to manage visibility and animations for opening and closing the modal. The modal's visibility
 * is controlled by the `isOpen` and `isClosing` props, allowing for smooth transitions.
 *
 * @module FullPageModalWrapper
 * @param {Object} props - Component properties.
 * @param {boolean} props.isOpen - Determines if the modal is open and should be visible.
 * @param {boolean} props.isClosing - Indicates if the modal is in the process of closing.
 * @param {React.ReactNode} props.children - Content to be rendered inside the modal.
 * @param {string} [props.className] - Additional custom class names for the modal.
 * @returns {JSX.Element|null} - The modal's JSX structure or `null` if it is not visible.
 */

const FullPageModalWrapper = ({ isOpen, isClosing, children, className = '' }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    /**
     * useEffect Hook
     * This hook manages the visibility state of the modal based on the `isOpen` prop.
     * When `isOpen` is true, the modal becomes visible. When `isOpen` is false,
     * the modal delays its visibility change to allow for a closing animation.
     */
    useEffect(() => {
        if (isOpen) {
            setIsModalVisible(true);
        } else if (!isOpen && isModalVisible) {
            // setTimeout(() => setIsModalVisible(false), 300); // Allow closing animation to finish
            setIsModalVisible(false); // Delay closing to allow the closing animation
        }
    }, [isOpen, isModalVisible]);

    
    /**
     * Return null if the modal is neither open nor in the process of being visible.
     * This prevents unnecessary rendering and improves performance.
     */
    if (!isOpen && !isModalVisible) return null;

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 transition-opacity ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`fullpage-modal ${className} ${isClosing ? 'modal-closing' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default FullPageModalWrapper;
