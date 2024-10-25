/*import { LightningElement } from 'lwc';
import createContact from '@salesforce/apex/PortfolioDisbursal.createContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PortfolioContactSection extends LightningElement {
    name = '';
    email = '';
    message = '';

    getName(event){
        this.name = event.target.value;
    }

    getEmail(event){
        this.email = event.target.value;
    }

    getMessage(event){
        this.message = event.target.value;
    }

    createContactRecord(event) {
        event.preventDefault();
        createContact({ 
            lastName: this.name, 
            email: this.email, 
            description: this.description 
        })
        .then(result => {   
            if(result !== 'Success'){
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message : 'Something went Wrong!',
                    varient :'error'
                }));
            }else{
                this.dispatchEvent(new ShowToastEvent({
                    ttitle: 'Success',
                    message : 'Thank You for Connecting..',
                    varient :'success'
                }));
            }
            console.log('Contact created:', result);
        })
        .catch(error => {
            console.error('Error creating contact:', error);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error',
                message : 'Something went Wrong!',
                varient :'error'
            }));
        });
    }
}*/
import { LightningElement, track ,api} from 'lwc';
import createContact from '@salesforce/apex/PortfolioDisbursal.createContact';
import ContactImage from '@salesforce/resourceUrl/images';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PortfolioContactSection extends LightningElement {
    @track name = '';
    @track email = '';
    @track message = '';


    @api themeClass;
    codeImageUrl = ContactImage +'/contact2.png';

    // Capture the name input
    getName(event) {
        this.name = event.target.value;
        console.log(this.name);
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

    // Handle form submission
    // createContactRecord(event) {
    //     event.preventDefault(); // Prevent default form submission behavior

    //     // Call the Apex method to create a contact
    //     createContact({ 
    //         lastName: this.name, 
    //         email: this.email, 
    //         description: this.message 
    //     // })
    //     // .then(result => {
    //     //     console.log('Contact created:', result);
    //     })
    //     .then(result => {
    //         if(result !== 'Success') {
    //             this.dispatchEvent(new ShowToastEvent({
    //                 title: 'Error',
    //                 message: 'Something went wrong!',
    //                 variant: 'error'
    //             }));
    //         } else {
    //             this.dispatchEvent(new ShowToastEvent({
    //                 title: 'Success',
    //                 message: 'Thank you for connecting!',
    //                 variant: 'success'
    //             }));

    //             // Optionally clear input fields
    //             this.name = '';
    //             this.email = '';
    //             this.message = '';
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error creating contact:', error);
    //         this.dispatchEvent(new ShowToastEvent({
    //             title: 'Error',
    //             message: 'Something went wrong!',
    //             variant: 'error'
    //         }));
    //     });
    // }
    createContactRecord(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Temporary toast to check if this part of the code is reached
        this.dispatchEvent(new ShowToastEvent({
            title: 'Debug',
            message: 'Create contact triggered',
            variant: 'info'
        }));
    
        createContact({ 
            lastName: this.name, 
            email: this.email, 
            description: this.message 
        })
        .then(result => {
            if(result === 'Success') {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                    message: 'Thank you for connecting!',
                    variant: 'success'
                
                }));
    
                // Optionally clear input fields
                this.name = '';
                this.email = '';
                this.message = '';
            } else {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message: 'Something went wrong!',
                    variant: 'error'
                }));
            }
        })
        .catch(error => {
            console.error('Error creating contact:', error);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error',
                message: 'Something went wrong!',
                variant: 'error'
            }));
        });
    }
    
}
