import React from 'react';
import './Input.css';


const input = ( props ) => {
    let inputElement = null;
    let  inputClasses = "InputElement";

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses = "Invalid"
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
               
                 <div className='category'>
                    {props.elementConfig.options.map(option => (
                        <div className='category-one'>
                            <input type="checkbox" name='category' value={option.value} />
                            <label for="category" className='category-label'>{option.value} </label>
                        </div>
                    ))}
                       
                 </div>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className="Input">
            <label className="Label"><span className='star'>*</span> 
            {props.elementConfig.label?props.elementConfig.label:"Category"}</label>
            {inputElement}
        </div>
    );

};

export default input;