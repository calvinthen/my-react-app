import React, { useState } from 'react'

const initalProducts = [{
    id: 0,
    name: 'Latte',
    count: 1,
},
{
    id: 1,
    name: 'Mocha',
    count: 5,
},
{
    id: 2,
    name: 'Matcha',
    count: 3,
},];

export default function UpdatinArrayInStateQuiz1(){
    const[products, setProducts] = useState(initalProducts);

    function handleDecreaseClick(productId){
        setProducts(products.map(products => {
            if(products.id === productId){
                return{
                    ...products,
                    count: products.count - 1
                }
            }
            else
            {
                return products;
            }
        }))
    }

    function handleIncreaseClick(productId){
        setProducts(products.map(products => {
            if(products.id === productId){
                return{
                    ...products,
                    count: products.count + 1
                }
            }
            else
            {
                return products;
            }
            
        }))
    }

    return(
        <ul>
            {products.map(products =>(
                <li key={products.id}>
                    {products.name}
                    {' '}
                    (<b>{products.count}</b>)
                    <button onClick={() => {
                        handleIncreaseClick(products.id);
                    }}>
                        + 
                    </button>

                    <button onClick={() => {
                        handleDecreaseClick(products.id);
                    }}>
                        –
                    </button>

                </li>
            ))}
        </ul>
    );
}
