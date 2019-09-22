import React from 'react'
import { connect } from 'react-redux'

import AddReceipt from './AddReceipt'
import { getReceipts } from '../utils/actions'

function ReceiptList({ getReceipts }) {
    return (
        <div>
            <p>receipt list test</p>
            <AddReceipt />
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