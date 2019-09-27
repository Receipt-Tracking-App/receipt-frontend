import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth.js'
import { connect } from 'react-redux'

import ReceiptCard from './ReceiptCard'
import { getReceipts } from '../utils/actions'
import AddReceipt from './AddReceipt';

import styled from 'styled-components';
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'



function ReceiptList({userId, getReceipts, receipts }) {
  // NOTE: The value given to setState() must be of the same type as your value is expected to be
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (userId) {
      getReceipts(userId)
    }

  }, [query, userId, getReceipts]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  
    return (
      <div className="search-box">
        <SearchForm>
          <Input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by name"
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </SearchForm>
        <DivsBox>
          <div className='add-receipt'>
            <AddReceipt />
          </div>
          <ReceiptDiv>
            <Title>My Receipts</Title>
            {receipts.map(receipt => {
              return (
                <div key={receipt.userId}>
                  <ReceiptCard 
                    key={receipt.id}
                    merchant={receipt.merchant}
                    category={receipt.category}
                    date={receipt.purchase_date}
                    amount={receipt.amount}
                  /> 
                </div>
              );
            })}
          </ReceiptDiv>
        </DivsBox>
        
      </div>
    );
  }

  const mapStateToProps = state => {
    return {
      userId: state.userId,
      receipts: state.receipts,
      isFetching: state.isFetching,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, { getReceipts })(ReceiptList)
  

  
//styled Components
const DivsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;
const Title = styled.h2`
  border-bottom: 2px solid #2C2C2C;
  padding-bottom: 20px;
`;
const ReceiptDiv = styled.div`
  width: 45%;
  border: 1px solid grey;
  background: #FAFAFA;
  margin: 60px auto;
  padding: 30px 20px;
  
`;

const Input = styled(TextField)`
  width: 40vw;
  background: #FAFAFA;
  margin-bottom: 20px;
  float: right;
`;
const SearchForm = styled.form`
  border-top: 2px solid #2C2C2C;
  margin-top: 20px;
  padding-top: 30px;   
`;
