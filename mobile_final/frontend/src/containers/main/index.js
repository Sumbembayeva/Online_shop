import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import './main.css';
import Footer from  '../../components/footer';
import Header from  '../../components/header';
import Category from  '../../components/category';
import {getCategories, getProducts} from '../../store/actions/productActions'


const onMount = props => () => {
  props.getCategories()
  props.getProducts()
}

function Main(props) {

  useEffect(onMount(props), [])
  const {categories, products} = props.productReducer
  const categoryList = categories.map(item => (
    <Category category={item} products={products.filter(product=> product.category.id===item.id)}/>
))
  return (
    <div className="Main">
    <Header />
      <main>
        <div className='logox' >
            <img className='logox' src='images/logo.png'/>
        </div>
        {categoryList}
      </main>
    <Footer />
    </div>
  );
}


const mapStateToProps = state =>({
  productReducer: state.productReducer
})

const mapDispatchToProps = {
  getCategories, getProducts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

