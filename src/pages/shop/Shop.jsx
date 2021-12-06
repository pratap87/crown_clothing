import React from 'react'
import PreviewCollection from '../../components/previewCollection/previewComponent';
import { connect } from 'react-redux';
 
const Shop = ({data}) => {

    return (
        <div className='shop-page'>
           {
               data.map((item) => (
                   <PreviewCollection key={item.id} title={item.title} items={item.items} />
               ))
           }
        </div>
    )
}

const mapStateToProps=({collection:{SHOP_DATA}})=>({
    data:SHOP_DATA

})
export default connect(mapStateToProps)( Shop);
