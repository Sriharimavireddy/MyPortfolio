import { LightningElement, track } from 'lwc';
import Hamicon from '@salesforce/resourceUrl/icons';
import { loadStyle } from 'lightning/platformResourceLoader';   
export default class MyPortfolioNavBar extends LightningElement {

    @track defaultThemeLight = true;
//    @track showHomePage = true;
//    @track showSkillsPage = false;
//    showContactMePage = false;

renderedCallback(){
    loadStyle(this, Hamicon +'/style.css');
}

  
get themeClass(){
     let darkTheme = 'dark slds-p-left_xx-large slds-grid slds-align_absolute-center';
     let lightTheme = 'light slds-p-left_xx-large slds-grid slds-align_absolute-center';
     if(this.defaultThemeLight){
         return lightTheme;
     // eslint-disable-next-line no-else-return
     }else{
         return darkTheme;
     }
    }
     
 

  handleHamburgerClick(){
   const navMenu = this.template.querySelector('.topnav');
    navMenu.classList.toggle('responsive');
  }
}
//  changeTheme(){
//      console.log('clicked');
//      if(this.defaultThemeLight){
//          this.defaultThemeLight = false;
//      }else{
//          this.defaultThemeLight = true;
//      }
//  }

//  handleHomeClick(){
//        console.log('handleHomeClick');
//      this.showSkillsPage = false;
//      this.showContactMePage = false;
//      this.showHomePage = true;
//       console.log('this.showHomePage'+this.showHomePage);
//      console.log('this.showSkillsPage'+this.showSkillsPage);
//  }

//  handleSkillsClick(){
//      console.log('handleSkillsClick');
//      this.showHomePage = false;
//      this.showContactMePage = false;
//      this.showSkillsPage = true;
//      console.log('this.showHomePage'+this.showHomePage);
//      console.log('this.showSkillsPage'+this.showSkillsPage);
//  }

//  handleContactMeClick(){
//        this.showHomePage = false;
//      this.showSkillsPage = false;
//      this.showContactMePage = true;
//  }

 


