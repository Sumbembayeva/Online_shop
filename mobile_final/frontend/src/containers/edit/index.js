import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import './new.css';
import Footer from  '../../components/footer';
import Header from  '../../components/header';
import '../../style/style2.css';
import {Link} from "react-router-dom";
import { Form, Input, Select, Upload, message } from 'antd';
import {getCategories, editProduct} from '../../store/actions/productActions'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

const onMount = props => () => {
	props.getCategories()
  }

function Edit(props) {
  const p = props.location.product
  console.log(p.product.title)
  const history = useHistory();
	useEffect(onMount(props), [])
	const [imageUrl, setImageUrl] = useState(``)
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState({
    id: p.product.id,
		title: p.product.title,
		description: p.product.description,
		category: 1,
		price: p.product.price,
		sale: p.product.sale,
		image: null
	  })

	const {categories} = props.productReducer

  const handleOk = (e) => {
	e.preventDefault();
    props.editProduct(formData)
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
  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const categoryChange = value => {
    setFormData({...formData, category: value})
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const fileChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
          setLoading(false);
          setImageUrl(imageUrl)
      });

      setFormData({...formData, image: info.file.originFileObj})
    }
  }

  return (
    <div className="New">
    <Header />
		<div className='row'>
			<img className='logo' src='/images/login.png'/>
			<div className='col-5 form2'>
				<h3>Add a new product:</h3>
				<form onSubmit={handleOk} validateMessages={validateMessages}>
				<input type='text' required className='big' placeholder='Title..' name="title" value={formData.title} onChange={handleChange} /><br />
				<textarea placeholder='Description..' name="description" value={formData.description} onChange={handleChange}/><br />
				< select className='big' onChange={categoryChange} name="category" >
					{categories.map(item => (<option value={item.id}>{item.name}</option>))}
				</ select><br />
				<input type='text'className='input' placeholder='Price..'  name="price" value={formData.price} onChange={handleChange} />
				<input type='text' className='input' placeholder='Sale..'  name="sale"  value={formData.sale} onChange={handleChange}/><br />
				<Upload
                name="image"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={fileChange}>
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '200px' }} /> : uploadButton}
            </Upload><br />
				<button className='button'  type='submit'>Save</button><br />
			</form>
			</div>
		</div>
    <Footer />
    </div>
  );
}

const mapStateToProps = state =>({
	productReducer: state.productReducer
  })
  
  const mapDispatchToProps = {
	getCategories,
	editProduct
  }
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Edit)
  
