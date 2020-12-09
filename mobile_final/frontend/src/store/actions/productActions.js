
import { GET_PRODUCTS, GET_CATEGORIES, ADD_PRODUCT, GET_PRODUCT, DELETE_PRODUCT, GET_COMMENTS, EDIT_COMMENT, DELETE_COMMENT, ADD_COMMENT, EDIT_PRODUCT} from './types'
import axios from 'axios'


export const getProducts = () => dispatch =>{
    axios.get('/api/products')
     .then(res => {
         dispatch({
             type: GET_PRODUCTS,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };

 export const getCategories = () => dispatch =>{
    axios.get('/api/categories')
     .then(res => {
         dispatch({
             type: GET_CATEGORIES,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };
  
 export const saveProduct = data => dispatch =>{
    const fm = new FormData()
    Object.keys(data).map(key => {
         fm.append([key], data[key])
    })
    axios.post('/api/products', fm)
     .then(res => {
         dispatch({
             type: ADD_PRODUCT,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };
 export const editProduct = data => dispatch =>{
    const fm = new FormData()
    Object.keys(data).map(key => {
         fm.append([key], data[key])
    })
    axios.put('/api/products', fm)
     .then(res => {
         dispatch({
             type: EDIT_PRODUCT,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };
 export const getProduct = id => dispatch =>{
    axios.get('/api/products/'+id)
     .then(res => {
         dispatch({
             type: GET_PRODUCT,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };
 export const getComments = id => dispatch =>{
    axios.get('/api/comments/'+id)
     .then(res => {
         dispatch({
             type: GET_COMMENTS,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };
 export const deleteProduct = id => dispatch =>{
    axios.delete('/api/products/'+id)
     .then(res => {
         dispatch({
             type: DELETE_PRODUCT,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };
 export const saveComment = (data) => dispatch =>{
    const fm = new FormData()
    Object.keys(data).map(key => {
         fm.append([key], data[key])
    })
    axios.post('/api/comments', fm, {
        headers: {
            "Content-Type": undefined
        }
    })
     .then(res => {
         dispatch({
             type: ADD_COMMENT,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };

 export const editComment = (data) => dispatch =>{
    const fm = new FormData()
    Object.keys(data).map(key => {
         fm.append([key], data[key])
    })
    axios.put('/api/comments', fm, {
        headers: {
            "Content-Type": undefined
        }
    })
     .then(res => {
         dispatch({
             type: EDIT_COMMENT,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };
 export const deleteComment = id => dispatch =>{
    axios.delete('/api/comments/'+id)
     .then(res => {
         dispatch({
             type: DELETE_COMMENT,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };