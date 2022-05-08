import React, { useState } from "react";
import Layout from "../../component/Layout/Layout";
import { dataForm } from "./dataForm";
import Input from "../../component/ui/Input/Input";
import "./NewServiceProvider.css"


const NewServiceProvider= (props)=>{

    const [data, setdata] = useState(dataForm);

    const validateor = (value,rules)=>{
   
        let valid  = true;
        if(!rules){
            return true;
        }
        if(rules.required){
            valid = value.trim() !== '' && valid;
        }
        if(rules.max){
            valid = value.length <= rules.max && valid;
        }
        if(rules.min){
            valid = value.length >= rules.min && valid;
        }

     if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            valid = pattern.test(value) && valid
    } 

    
    if (rules.isPhoneNumber) {
        const pattern = new RegExp('^(\\0|0)?9\\d{9}$');
        
        valid = pattern.test(value) && valid;
    }
    
    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        valid = pattern.test(value) && valid
    }
       return valid;
       }
    

    const inputChangedHandler = (e, controlName) => {
        const chg= {...data,
            [controlName]:{
                ...data[controlName],
                value:e,
                touch:true,
                valid: validateor(e,data[controlName].validation)
            }
            }
            setdata(chg);
      };
    

    
  const formElementsArray = [];
  for (let key in data) {
    formElementsArray.push({
      id: key,
      config: data[key]
    });
  }

  let form = formElementsArray.map(formElement => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={event => inputChangedHandler(event.target.value, formElement.id)}
    />
  ));


    return(
        <Layout>
            <div className="nsp-target">
                   <div className="nsp-head">
                       <h2 className="nsp-head-h2"> 
                       INITIAL APPROACH SERVICE PROVIDERS 
                       <img src="" className="nsp-head-img" /></h2>

                            <span className="nsp-head-span">
                                Welcome!
                            </span>
                       </div> 
                    
                    <form>
                        {form}
                        <input type="submit" value="submit"  className="submit"/>
                    </form>
            </div>

        </Layout>

    )
}

export default NewServiceProvider;