import { LightningElement, api } from 'lwc';
import codeImage from '@salesforce/resourceUrl/portifolioimages';
//import codeImage from '@salesforce/resourceUrl/images';
import FontAwesome from '@salesforce/resourceUrl/fontawesome';
import Resumepdf from '@salesforce/resourceUrl/images';
import { loadStyle } from 'lightning/platformResourceLoader';


export default class MyPortfolioHome extends LightningElement {
@api themeClass;
//codeImageUrl = codeImage +'/coder.jpg';
codeImageUrl = codeImage +'/profilep.png';
ResumepdfUrl = Resumepdf + '/sriharimavireddy_dev1.pdf';

renderedCallback() {
        Promise.all([
            loadStyle(this, FontAwesome + '/fontawesome/css/font-awesome.css')
        ]).catch(error => {
             // eslint-disable-next-line no-console
             console.log(error);
             
        });
    }

 get myName(){
     return 'Sri Hari Mavireddy';
 }
 get myProfessionField(){
     return 'Salesforce';
 }
 get myProfession(){
     return 'Developer';
 }
 get myBio(){
     let bio = 'I am specialized in creating and delivering  responsive web applications that prioritize user experience and performance.';
     return bio;
 }


 connectedCallback() {
    const resumeButton = this.template.querySelector('.resume_button');
    if (resumeButton) {
        resumeButton.addEventListener('click', this.handleResumeClick.bind(this));
    } else {
        console.error('Resume button not found in the DOM');
    }
}

downloadResume () {
    window.location.href = this.ResumepdfUrl;
}




 
}