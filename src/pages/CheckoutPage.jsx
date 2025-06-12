// src/pages/CheckoutPage.jsx
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Step1Cart from "../component/checkout/Step1Cart";
import Step2Shipping from "../component/checkout/Step2Shipping";
import Step3Review from "../component/checkout/Step3Review";
import Step4Remittance from "../component/checkout/Step4Remittance";
import { useState } from "react";

export default function CheckoutPage() {
    const location = useLocation();
    const items = location.state?.items || [];


    const { cartItems } = useCart();
    const [step, setStep] = useState(1);
    const [shippingInfo, setShippingInfo] = useState({
        name: "", phone: "", lineId: "", email: "", shippingtype: "", payMethod: ""
    });

    const goNext = () => setStep((prev) => Math.min(prev + 1, 4));
    const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

    // 總金額
    const [amount, setAmount] = useState(0);
    const handleNext = (total) => {
        setAmount(total);
        setStep((prev) => prev + 1);
    };


    return (
        <div>
            <div className="checkout-page">
                {step === 1 && (
                    <Step1Cart cartItems={cartItems} onNext={goNext} />
                )}
                {step === 2 && (
                    <Step2Shipping
                        shippingInfo={shippingInfo}
                        setShippingInfo={setShippingInfo}
                        onNext={goNext}
                        onBack={goBack}
                    />
                )}
                {step === 3 && (
                    <Step3Review
                        cartItems={cartItems}
                        info={shippingInfo}
                        onNext={handleNext}  // 改成這裡
                        onBack={goBack}
                    />
                )}
                {step === 4 && (
                    <Step4Remittance
                        info={shippingInfo}
                        cartItems={cartItems}
                        amount={amount}  // 傳入金額
                    />
                )}
            </div>
        </div>
    );
}
