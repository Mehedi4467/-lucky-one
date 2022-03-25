import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Toy from '../Toy/Toy';
import './Store.css';
const Store = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(toys => setToys(toys));
    }, []);


    return (
        <div className='toy-body'>
            <div className='toy-product'>
                {
                    toys.map(toy => <Toy toy={toy} key={toy.id}></Toy>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Store;