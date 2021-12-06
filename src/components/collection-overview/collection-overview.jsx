import React from 'react'
import PreviewCollection from '../previewCollection/previewComponent';
import { connect } from 'react-redux';
 
const CollectionOverview = ({data}) => {
    console.log(data)
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

const mapStateToProps=({shop:{collections}})=>({
    data:Object.keys(collections).map(key=>collections[key])

})

export default connect(mapStateToProps)(CollectionOverview)
