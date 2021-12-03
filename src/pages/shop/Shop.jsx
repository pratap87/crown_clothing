import React,{useState} from 'react'
import PreviewCollection from '../../components/previewCollection/previewComponent';
 
import SHOP_DATA from '../../shopData'
const Shop = () => {

    const [data,setdata]=useState(SHOP_DATA);
    
 
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

export default Shop
