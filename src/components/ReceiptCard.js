import React from 'react';

const ReceiptCard = (props) => {
    
    return (
        <div className="receipt-card" key={props.id}>
            <span>Receiptly</span>
            <span>{props.purchase_date}</span>
            <span>{props.category}</span>
            <span>{props.date}</span>
            <span>{props.amount}</span>
        </div>
    );
}

export default ReceiptCard;