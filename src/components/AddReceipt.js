import React from 'react'
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

  const [receipts, setReceipts] = useState([])
  useEffect(() => {
    if(status) {
      setReceipts([...receipts, status])
    }
    }, [status])

  const handleChange = e => {
    setReceipts(e.target.value)
    console.log(setReceipts)

  }

function AddReceipt({ postReceipt }) {
  // console.log(postReceipt)
  // const [receipts, setReceipts] = useState([])
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
        <Form onSubmit={handleChange}>
          <Title>Add Receipt</Title>
          <ImgBox>
            <Cloud src={ require('../assets/images/upload.png') } alt='upload icon' />
            <StyledBtn type='submit'>Scan Photo</StyledBtn>
          </ImgBox>
          
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
  width: 30vw;
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