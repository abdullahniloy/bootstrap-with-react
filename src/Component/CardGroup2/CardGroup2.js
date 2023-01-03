import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from './../Card2/Card2';

const CardGroup2 = () => {
    const products = [

        { id: 123, name: 'phone', price: 112324 },
        { id: 124, name: 'tv', price: 112324 },
        { id: 125, name: 'laptop', price: 112324 }
    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Card2
                        key={product.id}
                        product={product}></Card2>)
                }

            </CardGroup>
        </div>
    );
};

export default CardGroup2;