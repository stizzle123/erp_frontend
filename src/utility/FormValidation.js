import React, { Component } from 'react';

class FormValidation extends React {
   
     IsString(input) {
        if(typeof input === 'string'){
            return true
        }
    }

    IsNumber(input){
        if(typeof input === 'number'){
            return true
        }
    }
    IsPhoneNumber(input) {
        if(typeof input === 'number'&& (input.toString().length > 8 && input.toString().length < 12 )){
            return true
        }
    }
    IsEmail(input) {
        var re = /\S+@\S+\.\S+/;
        return re.test(input); 
    }

    };

    export default FormValidation;

  
   
   MyComponent.customMethod('bar')


