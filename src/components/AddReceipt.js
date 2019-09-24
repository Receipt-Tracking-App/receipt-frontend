import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Field, Formik } from 'formik';
import styled from 'styled-components';
import { postReceipt } from '../utils/actions'

const ReceiptContainer = styled.div`
  width: 66vw;
  height: 80vh;
 
  margin: 0 auto;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const DetailsBox= styled.div`
  background: #fff;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 2px 4px #C0C0C0;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 20px;

`;



function AddReceipt({ postReceipt }) {
  // console.log(postReceipt)
  const [receipts, setReceipts] = useState([])
  // const handleChanges = e => {
  //   setReceipts({ ...receipts, [e.target.name]: e.target.value })
  // }
  // const submitForm = e => {
  //   e.preventDefault();
  //   postReceipt.addNewReceipt(receipts)
  // }

  return (
    <ReceiptContainer>
      <Formik>
        <Form>
          <img src='../assets/images/upload.svg' alt='upload icon' />

          <button>Scan Photo</button>
          <h3>Enter Details</h3>
          <DetailsBox>
            <Field type='text' name='retailer' placeholder='Retailer' />
            <Field component='select' className='receipt-category' name='category'>
              <option>Category</option>
              <option value='work'>Work</option>
              <option value='food'>Dining</option>
              <option value='shopping'>Shopping</option>
              <option value='travel'>Travel</option>
            </Field>
            <Field type='date' name='date' placeholder='Date' />
            <Field type='text' name='amount' placeholder='Amount' />
          </DetailsBox>
          
          <button type='submit'>Add Receipt</button>
        </Form>
      </Formik>
      
    </ReceiptContainer>
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

