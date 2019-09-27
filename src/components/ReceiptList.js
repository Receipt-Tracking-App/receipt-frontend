import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth.js'
import { connect } from 'react-redux'

import ReceiptCard from './ReceiptCard'
import { getReceipts } from '../utils/actions'
import AddReceipt from './AddReceipt';

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
      <div className="receipts">
          <div className="search-box">
              <form className="search">
                  <input
                      type="text"
                      onChange={handleInputChange}
                      value={query}
                      name="name"
                      tabIndex="0"
                      className="prompt search-name"
                      placeholder="search by name"
                      autoComplete="off"
                    />
              </form>       
              <form className="search">
                    <div className="receipt">
                        {receipts.map(receipt => {
                            return (
                                <div className="receipt-list " key={receipt.userId}>
                                    <ReceiptCard 
                                        key={receipt.id}
                                        merchant={receipt.merchant}
                                        purchase_date={receipt.purchase_date}
                                        amount={receipt.amount}
                                    /> 
                                  </div>
                                );
                              })}
                      </div>
                </form> 
          </div>
              <div className='add-receipt'>
                    <AddReceipt />
              </div>
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
  

  


