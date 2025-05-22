import React, { useEffect } from 'react';

export default function CartDrawer({ isOpen, onClose }) {
    // 按鍵關閉視窗
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    // 點擊視窗外關閉
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
        }
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className="cart-drawer-overlay" onClick={onClose}></div>
            {/* 顯示購物車 */}
            {isOpen && (
                <div className="cart-drawer">
                    <div className="cart-drawer-overlay" onClick={onClose}></div>
                    {/* 阻止點擊內部時觸發關閉 */}
                    <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()} >
                        <button className="close-btn" onClick={onClose}>×</button>
                        <h2>購物車商品</h2>
                        <div class="showProgress-stoke">
                            <div class="showProgress-solid"></div>
                        </div>
                        <p>這裡顯示購物車內容</p>
                    </div>
                </div>
            )}
        </div>
    );
}