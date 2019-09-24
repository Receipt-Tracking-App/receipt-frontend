import React from 'react'
import { connect } from 'react-redux'

import AddReceipt from './AddReceipt'
import { getReceipts } from '../utils/actions'
0
function ReceiptList({ getReceipts }) {

    const [receipts, setReceipts ] = useState([]);

    return (
        <div>
            {receipts.map(receipt => {
                return (
                    <AddReceipt 
                        key={receipt.id}
                        retailer={receipt.retailer}
                        category={receipt.category}
                        date={receipt.date}
                        amount={receipt.amount}
                    /> 
                )
            })} 
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
      receipts: state.receipts,
      isFetching: state.isFetching,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, { getReceipts })(ReceiptList)



  