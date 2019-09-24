import React, { useState } from 'react'
import { connect } from 'react-redux'

import { postReceipt } from '../utils/actions'

const AddReceipt = (props) => {

  
    
  return (
    <div key={props.id}>
      {/* <h2>Enter Details</h2>
      <p>{props.retailer}</p>
      <p>{props.category}</p>
      <p>{props.date}</p>
      <p>{props.amount}</p> */}
    </div>
  )
};

export default AddReceipt;
// function AddReceipt({ postReceipt }) {
//   const [receipt, setReceipt] = useState([
//     {
//     retailer: "",
//     category: "",
//     date: "",
//     amount: ""
//     }
//   ]);

//   const handleChange = event => {
//     setReceipt({ ...receipt, [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     setReceipt({ retailer: '', category: '', date: '', amount: '' })
//   };

//   function addReceipt(event) {
//     event.preventDefault();
//     setReceipt({setReceipt});
//     completed: false;
//   }
   
//   function updateNewReceipt(event) {
//     setReceipt({
//       receipt: event.target.value
//     });
//   }
  
  
//   return (
//         <div>
//             <form onSubmit={event => handleSubmit(event)}>
//             <input
//               type="text"
//               name="retailer"
//               value={receipt.retailer}
//               placeholder="Retailer"
//               onChange={event => handleChange(event)}
//               />
//             <input
//               type="text"
//               name="category"
//               value={receipt.category}
//               placeholder="Category"
//               onChange={event => handleChange(event)}
//               />
//               <input
//               type="number"
//               name="date"
//               value={receipt.date}
//               placeholder="Date"
//               onChange={event => handleChange(event)}
//               />
//               <input
//               type="number"
//               name="amount"
//               value={receipt.amount}
//               placeholder="Amount"
//               onChange={event => handleChange(event)}
//               />
//               <button>Add Receipt</button>
//            </form>
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//       receipts: state.receipts,
//       isFetching: state.isFetching,
//       error: state.error
//     }
//   }
  
// export default connect(mapStateToProps, { postReceipt })(AddReceipt)


