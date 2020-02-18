import React from 'react';
import './shoppage.scss';
import SHOP_DATA from '../../shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component {
    
    state = {
        collections: SHOP_DATA
    }

    render(){
        const {collections} = this.state;
        return (
            <div>
                {collections.map( ({id, ...otherCollectionProps }) => {
                    return <CollectionPreview key={id} {...otherCollectionProps} />
                })}
            </div>
        );
    }
}

export default ShopPage;