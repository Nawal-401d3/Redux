import React from 'react';
import { connect } from 'react-redux';
import { catToPro, reset } from '../store/index.js';

const Status = props => {
  return (
    <section className="proSec">
        {props.categories.map(pro => {
          console.log('cat : ', pro.name);
          return <button onClick={() => props.catToPro(pro.name)} key={pro.name}>
            <p>  Category Name : {pro.name} </p>
            <p>  Display Name :  {pro.displayName} </p>
            <p> Description :  {pro.desp} </p>
          </button>;
        })}
     {/* <p id="but">
        <button onClick={props.reset}> Reset</button>
      </p> */}
    </section>
  );
};

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = { catToPro, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Status);