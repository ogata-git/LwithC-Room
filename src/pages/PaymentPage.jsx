import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  // 支払い処理関数
  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    // StripeのCardElementを使って、支払い情報を処理
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // サーバーサイドに送る支払い方法情報を作成
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
    });

    const paymentIntent = await response.json();

    const { error: confirmError } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
      payment_method: paymentMethod.id,
    });

    if (confirmError) {
      setError(confirmError.message);
    } else {
      alert('決済が完了しました！');
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>決済ページ</h1>
      <form onSubmit={handlePayment}>
        <CardElement />
        {error && <div>{error}</div>}
        <button disabled={loading || !stripe} type="submit">
          {loading ? '処理中...' : '支払う'}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
