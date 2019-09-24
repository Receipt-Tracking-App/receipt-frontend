import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddReceipt from './AddReceipt'
import { getReceipts } from '../utils/actions'
// import Receipt from './ReceiptCard';

// function ReceiptList({ getReceipts }) {
   
//     return (
//         <div>
//             {/* {getReceipts.receipts.map((receipt, index) => (
//                 <Receipt key={index} />
//             ))} */}
//             <AddReceipt />
//         </div>
//     )
// }

class ReceiptList extends Component {
    getReceipts() {
        // return this.props.receipts.map( receipt => {
        //         <ReceiptCard 
        //             date={receipt.date}
        //             retailer={receipt.retailer}
        //             amount={receipt.amount}
        //             category={receipt.category}
        //         />
        // })
    }
    render() {
        return (
            <ul>
                {this.getReceipts()}
            </ul>

        )
    }
}

const mapStateToProps = state => {
    return {
      receipts: state.receipts,
      isFetching: state.isFetching,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, { getReceipts })(ReceiptList)