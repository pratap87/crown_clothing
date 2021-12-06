import React from 'react'
import './category.scss'
 
import { selectCollection} from '../../redux/collection/collection-selector'
 import { useParams } from 'react-router-dom'
 import { useSelector } from 'react-redux'
 
import ShopItem from '../../components/shop-item/ShopItem'
 

const Category = () => {
    let params = useParams()
    
    const collection = useSelector(selectCollection(params.categoryId))
    
    console.log(collection)
   
 
    return (
        <div className='collection'>
            <div className='title'>{collection.title}</div>
            <div className='category'>
            {collection.items.map(item=><ShopItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

 

export default Category ;
