import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import './details.css';
import Footer from  '../../components/footer';
import Header from  '../../components/header';
import {  Link } from "react-router-dom";
import {getProduct, deleteProduct, getComments, deleteComment, saveComment, editComment} from '../../store/actions/productActions'
import { useHistory } from 'react-router-dom';

const onMount = (props, id) => () => {
  props.getProduct(id)
  props.getComments(id)
}

function Details(props) {
  const history = useHistory();
  const d = props.location.id
  console.log(d.id)
  const {currentUserId} = props.authReducer
  const [formData, setFormData] = useState({
    author: currentUserId,
    body: ``,
    product: d.id
      })
      const [editing, setStatus]=useState(false)
      console.log(editing)
      const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
        }
      const handleOk = (e) => {
        if(editing){
          e.preventDefault();
          props.editComment(formData)
          history.push("/");
          setStatus({editing:false})
        }else{
          e.preventDefault();
          props.saveComment(formData)
          history.push("/");
      }};
        const handleEdit = (item) => {
          setStatus({editing: true})
          setFormData({
            body: item.body,
            id: item.id})
          }
  useEffect(onMount(props, d.id), [])
  const {product, comments} = props.productReducer
  console.log(currentUserId)
  const commentList = comments.map(item => (
    <div className="row divi">
            <div className="col-md-2"><img class="cardPhoto" src="https://picsum.photos/200/150" /></div>
            <div  className="col-md-8 ta" >
            <p><b> {item.author.username} </b></p> <i>{ item.created_on }</i>
            <p> {item.body }</p></div> 
            <div className="col-md-2"> 
                <span><a onClick={()=>props.deleteComment(item.id) } className="btn btn-warning">Delete</a></span>
                <br />
                <span><a onClick={()=>handleEdit(item)} className="btn btn-warning">Edit</a></span>
            </div>
        </div>
))
  const onDelete = (e) => {
    e.preventDefault();
      props.deleteProduct(d.id)
      history.push("/");
    };
    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
      };
  return (
    <div className="Details">
    <Header />
      <main className='main'>
       <div className='container'>
        <div className='row'>
            <div className='col-4'>
              <div className='bg'><img className='big_photo' src={product.image}/></div>
              <img className='small' src={product.image}/>
              <img className='small' src={product.image}/>
              <img className='small' src={product.image}/>
            </div>
            <div className='col-6'>
              <h5 className='name'>{product.title}</h5>
              <h5 className='price'>{product.price} KZT</h5>
              <p className='price'>Sale: {product.sale} % KZT</p>
              <p className='des'>Description</p><hr />
              <p className='des_text'>{product.description}</p>
              <button type='submit'><Link className='link' to={{ pathname:"/edit", product:{product} }} >Edit</Link></button>
              <form onSubmit={onDelete}>
              <button type='submit'>Delete</button>
              </form>
            </div>
        </div><br />
       
         <h5  className="titleh5">Comments: </h5>

      {commentList}
        
        <form onSubmit={handleOk} validateMessages={validateMessages}>
        <div class="row col-md-7 form-group">
            <label for="comment" >Text comment your here: </label>
            <textarea class="form-control"  name="body" rows="3" name="body" value={formData.body} onChange={handleChange}></textarea><br />
            <button type='submit'>Share </button><br />
        </div>
      </form>
       </div>
      </main>
    <Footer />
    </div>
  );
}

const mapStateToProps = state =>({
  productReducer: state.productReducer,
  authReducer: state.authReducer
})
const mapDispatchToProps = {
 getProduct, deleteProduct, getComments, deleteComment, saveComment, editComment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)




