import React from 'react';
import { connect } from 'react-redux';
import { catToPro } from '../store/index.js';

const Status = props => {
    return (
        <section className="proSec">

            {props.categories.map(cat => {
                // console.log('proppsspppps in catttttttttttt', props);
                //   console.log('catttttttttttttttttttttttttttt : ', cat.name);
                return <button onClick={() => props.catToPro(cat.name)} key={cat.name}>
                    <p> {cat.name} </p>
                    <p>  Display Name :  {cat.displayName} </p>
                    <p> Description :  {cat.desp} </p>
                </button>;
            })}
            {/* <p id="but">
        <button onClick={props.reset}> Reset</button>
      </p> */}
        </section>
    );
};

const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = { catToPro };

export default connect(mapStateToProps, mapDispatchToProps)(Status);