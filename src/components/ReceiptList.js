import React, {useState, useEffect} from 'react'
import { Field, Formik } from 'formik';
import { connect } from 'react-redux'
import index from '../index.css'

import ReceiptCard from './ReceiptCard'
import { getReceipts } from '../utils/actions'
import AddReceipt from './AddReceipt';

function ReceiptList({userId, getReceipts}) {
    
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        getReceipts(userId)
  
    }, [query, userId]);
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
          <form>
            <div className="receipt">
              {users.map(receipt => {
                return (
                  <div className="receipt-list " key={receipt.userId}>
                    <ReceiptCard 
                        key={receipt.id}
                        retailer={receipt.retailer}
                        category={receipt.category}
                        date={receipt.date}
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
  

  


