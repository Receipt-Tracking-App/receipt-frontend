import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddReceipt from './AddReceipt'
import { getReceipts } from '../utils/actions'

// }

class ReceiptList extends Component {
    getReceipts() {
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