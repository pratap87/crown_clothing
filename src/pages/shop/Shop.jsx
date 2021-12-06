import React from 'react'
 
import { Route,Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import Category from '../category/category';
 
const Shop = () => {
  

    return (
        <div className='shop-page'>
            <Routes>
        <Route exact path ={`/`} element={ <CollectionOverview/>}/>
        <Route path={`/:categoryId`} element={<Category/>}   />
        </Routes>
        </div>
    )
}

const mapStateToProps=({shop:{collections}})=>({
    data:collections

})
export default connect(mapStateToProps)( Shop);
