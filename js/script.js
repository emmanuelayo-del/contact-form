'use strict';
const contactFormEl = document.querySelector('.contact-form')
console.log(contactFormEl);
const validName = document.querySelector('.validname')
console.log(validName);
const validEName = document.querySelector('.validename')
console.log(validEName);
const validNName = document.querySelector('.validnname')
console.log(validNName);
const firstNameEL = document.querySelector('.name-first')
console.log(firstNameEL);
const lastNameEL = document.querySelector('.name-last')
console.log(lastNameEL);
const validLNameEL = document.querySelector('.validlname')
console.log(validLNameEL);
const validFNameEL = document.querySelector('.validfname')
console.log(validFNameEL);
const emailEl = document.querySelector('.email--input')
console.log(emailEl);
const validEmailEl = document.querySelector('.valid-email')
console.log(validEmailEl);
const querySideEl = document.querySelector('.query-side')
console.log(querySideEl);
const firstEnqiryEl = document.querySelector('.enquiry-first')
console.log(firstEnqiryEl);
const secondEnquiryEl = document.querySelector('.enquiry-second')
console.log(secondEnquiryEl);
const validQueryEl = document.querySelector('.valid-query')
console.log(validQueryEl);
const messageField = document.querySelector('.message-field')
console.log(messageField);
const validMessageEl = document.querySelector('.valid-message')
console.log(validMessageEl);
const consentEl = document.querySelector('.consent')
console.log(consentEl);
const validConsentEl = document.querySelector('.valid-consent')
console.log(validConsentEl);
const successMessageEl = document.querySelector('.success-message')
console.log(successMessageEl);
const btnSubmit = document.querySelector('.submit')
console.log(btnSubmit);

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
    if(!query) {
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

    if(firstname && lastname && email && query && message && consent ) {
        successMessageEl.classList.remove('hidden')
        contactFormEl.classList.add('hidden')
    } else {
        successMessageEl.classList.add('hidden')
        contactFormEl.classList.remove('hidden')
    }
})