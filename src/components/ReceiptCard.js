import React from 'react';
import styled from 'styled-components';

const ReceiptCard = (props) => {
    
    return (
            <StyledList key={props.id}>
                <h4>{props.merchant}</h4>
                <p>{props.category}</p>
                <p>{props.date}</p>
                <p>${props.amount}</p>
            </StyledList>
    );
}

export default ReceiptCard;

const StyledList = styled.li`
    list-style-type: none;
    border-bottom: 2px solid #2C2C2C;
`;