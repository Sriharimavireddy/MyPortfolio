// 

import { LightningElement, track, api } from 'lwc';
import createContact from '@salesforce/apex/PortfolioDisbursal.createContact';
import ContactImage from '@salesforce/resourceUrl/images';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PortfolioContactSection extends LightningElement {
    @track name = '';
    @track email = '';
    @track message = '';
    @track PhoneNumber ='';
     thankYouMsg='';
    result='';

    @api themeClass;
    codeImageUrl = ContactImage + '/contact2.png';

    // Capture the name input
    getName(event) {
        this.name = event.target.value;
        console.log(this.name);
    }

    getNumber(event) {
        this.PhoneNumber = event.target.value;
        console.log(this.PhoneNumber);
    }

    // Capture the email input
    getEmail(event) {
        this.email = event.target.value;
        console.log(this.email);
    }

    // Capture the message input
    getMessage(event) {
        this.message = event.target.value;
        console.log(this.message);
    }

    createContactRecord(event) {
        event.preventDefault();
        createContact({ 
            lastName: this.name, 

            email: this.email, 
            description: this.message,
            PhoneNumber: this.PhoneNumber
        })
         .then(result => {  
       
            if(result === 'Success'){
                this.thankYouMsg='THANK YOU';
                this.name ='';
                this.email='';
                this.message='';

            }


        //     if (result != 'Success') {
        //         this.dispatchEvent(new ShowToastEvent({
        //             title: 'Error',
        //             message: 'Something went wrong while creating the contact!',
        //             variant: 'error'
        //         }));
        //     } else {
        //         console.log('Contact created:', result);
        //         const event1 = new ShowToastEvent({
        //             title: 'Get Help',
        //             message:
        //                 'Salesforce documentation is available in the app. Click ? in the upper-right corner.',
        //         });
        //         this.dispatchEvent(event1);
        //         // this.dispatchEvent(new ShowToastEvent({
        //         //     title: 'Success',
        //         //     message: 'Contact created successfully and email sent. Thank You for Connecting!',
        //         //     variant: 'success'  // Updated message for clarity
        //         // }));
        //     }
        //    // console.log('Contact created:', result);
        // })
        // .catch(error => {
        //     console.error('Error creating contact:', error);
        //     this.dispatchEvent(new ShowToastEvent({
        //         title: 'Error',
        //         message: 'Something went wrong while creating the contact!',
        //         variant: 'error'
        //     }));
        });
    }
}
