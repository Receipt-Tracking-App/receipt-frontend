import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Field, Formik } from 'formik';
import styled from 'styled-components';
import { postReceipt } from '../utils/actions'

const initialReceipt = {
  merchant: '',
  categoryId: '',
  purchaseDate: '',
  amount: ''
}
function AddReceipt({ postReceipt }) {

  const [newReceipt, setNewReceipts] = useState(initialReceipt)
  const [imageData, setImageData] = useState(null)

  const handleChanges = e => {
    setNewReceipts({ ...newReceipt, [e.target.name]: e.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    postReceipt(newReceipt, imageData)
  }

  const onFileChange = (e) => {
    let files = e.target.files;
    setImageData(files[0])
}

  return (
    <ReceiptContainer>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <Title>Add Receipt</Title>
          <ImgBox>
            <Cloud src={ require('../assets/images/upload.png') } alt='upload icon' />
            {/* <StyledBtn type='submit'>Upload Receipt</StyledBtn> */}
            <div>
                <input type='file' name='imageFile' onChange={onFileChange} />
            </div>
          </ImgBox>
          
          <h3>Enter Details</h3>
          <DetailsBox>
            <Field 
              type='text' 
              name='merchant' 
              placeholder='Retailer' 
              onChange={handleChanges}
            />
            <Field 
              component='select' 
              className='receipt-category' 
              name='categoryId'  
              onChange={handleChanges}>
                <option>Category</option>
                <option value='1'>Work</option>
                <option value='2'>Dining</option>
                <option value='3'>Shopping</option>
                <option value='4'>Travel</option>
            </Field>
            <Field 
              type='date' 
              name='purchaseDate' 
              placeholder='Date' 
              onChange={handleChanges} 
              />
            <Field 
              type='text' 
              name='amount' 
              placeholder='Amount' 
              onChange={handleChanges} />
          </DetailsBox>
          
          <StyledBtn type='submit'>Add Receipt</StyledBtn>          
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


  const ReceiptContainer = styled.div`
  width: 60vw;
  border: 1px solid grey;
  background: #FAFAFA;
  margin: 0 auto;
  padding: 30px;
  
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const DetailsBox= styled.div`
  background: #fff;
  border: 1px solid #fff;
  border-radius: 15px;
  box-shadow: 2px 4px 3px 3px #C0C0C0;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 20px;
`;

const StyledBtn = styled.button`
  background: black; 
  border-radius: 15px;
  color: #FAFAFA;
  padding: 5px;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 10px;
`;
const Title = styled.h1`
  border-bottom: 2px solid #5F336C;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;
const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin: 10px auto;
`;
const Cloud = styled.img`
  width: 60%;
  height: 50%;
  margin: 0 auto;
  border: 1px solid #FAFAFA;
  border-radius: 15px;
  padding: 5px;
  box-shadow: 2px 3px 2px 3px #C0C0C0;
`;