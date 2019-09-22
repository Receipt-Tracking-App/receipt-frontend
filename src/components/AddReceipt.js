import React from 'react'
import { connect } from 'react-redux'

import { postReceipt } from '../utils/actions'

function AddReceipt({ postReceipt }) {
    return (
        <div>add receipt test</div>
    )
}

const mapStateToProps = state => {
    return {
      receipts: state.receipts,
      isFetching: state.isFetching,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, { postReceipt })(AddReceipt)