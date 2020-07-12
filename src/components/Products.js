import React from 'react';
import { connect } from 'react-redux';
import { catToPro, reset } from '../store/index.js';

const Status = props => {
    return (
        <section className="proSec">
            <h1> The Products </h1>

            {props.products.map(pro => {
                console.log('proooooooooooooooo', props.activeCat);

                if (pro.catName === props.activeCat) {
                    console.log('prooooooooooooooooooooooooooooooo : ', props.activeCat);
                    return <div key={pro.name}>
                        <p> Product Name : {pro.name} </p>
                        <p> Description : {pro.desc} </p>
                        <p> Price : {pro.price} </p>
                        <p> Number In Stock : {pro.invCount} </p>
                    </div>;
                }
            })
            }
            <div>
                <p id="name"> The Active Category Name : {props.activeCat}</p>
            </div>
        </section>

    );
};

const mapStateToProps = state => ({
    products: state.products,
    activeCat: state.activeCat
});

const mapDispatchToProps = { catToPro, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Status);