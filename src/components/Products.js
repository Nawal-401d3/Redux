import React from 'react';
import { connect } from 'react-redux';
import { catToPro, reset } from '../store/index.js';

const Status = props => {
  return (
    <section className="proSec">
        {props.products.map(pro => {
        console.log('proooooooooooooooo', props.status.activeCat);

            if(pro.catName === props.status.activeCat){
          console.log('prooooooooooooooooooooooooooooooo : ', props.activeCat);
          return <li key={pro.name}>
            <p> {pro.name} </p>
            <p> {pro.desc} </p>
            <p> {pro.price} </p>
            <p> {pro.invCount} </p>
          </li>;
            }
        })
        }
    </section>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  status : state.activeCat
});

const mapDispatchToProps = { catToPro, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Status);