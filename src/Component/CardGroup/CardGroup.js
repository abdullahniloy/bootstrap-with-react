import React from 'react';
import Card from '../Card/Card';


const CardGroup = () => {
    const products = [

        { id: 123, name: 'phone', price: 112324 },
        { id: 124, name: 'tv', price: 112324 },
        { id: 125, name: 'laptop', price: 112324 }
    ]
    return (
        <div>
            <div class="card-group">
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}></Card>)
                }

            </div>

        </div>
    );
};

export default CardGroup;