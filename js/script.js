'use strict';
const contactFormEl = document.querySelector('.contact-form')

const validName = document.querySelector('.validname')
const validEName = document.querySelector('.validename')

const validNName = document.querySelector('.validnname')

const firstNameEL = document.querySelector('.name-first')

const lastNameEL = document.querySelector('.name-last')

const validLNameEL = document.querySelector('.validlname')

const validFNameEL = document.querySelector('.validfname')

const emailEl = document.querySelector('.email--input')

const validEmailEl = document.querySelector('.valid-email')

const querySideEl = document.querySelector('.query-side')

const querySideSecond = document.querySelector('.query-side-second')

const firstEnqiryEl = document.querySelector('.enquiry-first')

const secondEnquiryEl = document.querySelector('.enquiry-second')

const validQueryEl = document.querySelector('.valid-query')

const messageField = document.querySelector('.message-field')

const validMessageEl = document.querySelector('.valid-message')

const consentEl = document.querySelector('.consent')

const validConsentEl = document.querySelector('.valid-consent')

const successMessageEl = document.querySelector('.success-message')

const btnSubmit = document.querySelector('.submit')


btnSubmit.addEventListener('click', function (event) {
    event.preventDefault() // prevent the form from submitting immediately
   
    const firstname = firstNameEL.value; 
    const firstnameRegEx = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    // const firstnameIsValid = firstnameRegEx.text('firstname')
    if(!firstname) {
        validFNameEL.classList.remove('hidden')
        validFNameEL.classList.add('error')
        firstNameEL.classList.add('border-error')
        validEName.classList.add('error')
        validEName.classList.remove('hidden')
      
    } else if(firstnameRegEx.test(firstname)) {
        validFNameEL.classList.add('hidden')
    } else {
        validFNameEL.classList.remove('hidden')
        validFNameEL.classList.add('error')
         firstNameEL.classList.add('border-error')
           
    }

    const lastname = lastNameEL.value; 
    const lastnameRegEx = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    if(!lastname) {
        validLNameEL.classList.remove('hidden')
          validLNameEL.classList.add('error')
          lastNameEL.classList.add('border-error')
         validNName.classList.add('error')
            validNName.classList.remove('hidden')
               
    } else if(firstnameRegEx.test(lastname)) {
        validLNameEL.classList.add('hidden')
    } else {
        validLNameEL.classList.remove('hidden')
        validLNameEL.classList.add('error')
         lastNameEL.classList.add('border-error')
         
    }

    const email = emailEl.value;
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!email) {
        validEmailEl.classList.remove('hidden')
         validEmailEl.classList.add('error')
         emailEl.classList.add('border-error')
        
    } else if(emailRegEx.test(email)) {
        validEmailEl.classList.add('hidden')
    } else {
        validEmailEl.classList.remove('hidden')
        validEmailEl.classList.add('error')
           emailEl.classList.add('border-error')
              
    }

    const query = querySideEl.checked;
    const querySecond = querySideSecond.checked;
    if(!query && !querySecond) {
        validQueryEl.classList.remove('hidden')
          validQueryEl.classList.add('error')
          querySideEl.classList.add('border-error')
           
    } else {
        validQueryEl.classList.add('hidden')
         validQueryEl.classList.add('error')
            querySideEl.classList.add('border-error')
             
    }

    const message = messageField.value;
    if(!message) {
        validMessageEl.classList.remove('hidden')
          validMessageEl.classList.add('error')
          messageField.classList.add('border-error')
            
    } else {
        validMessageEl.classList.add('hidden')
       
    }

    const consent = consentEl.checked;
    if(!consent) {
        validConsentEl.classList.remove('hidden')
          validConsentEl.classList.add('error')
           
    } else {
        validConsentEl.classList.add('hidden')
           
    }

    if(!firstname && !lastname && !email && !query && !message && !consent) {
        successMessageEl.classList.replace('hidden')
    } else {
        successMessageEl.classList.remove('hidden')
    }

    if(firstname && lastname && email && query && message && consent ) {
        successMessageEl.classList.remove('hidden')
    } else {
        //  successMessageEl.classList.add('hidden')
     }
    })