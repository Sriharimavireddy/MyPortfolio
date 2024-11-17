import { LightningElement, track } from 'lwc';
import Hamicon from '@salesforce/resourceUrl/icons';
import { loadStyle } from 'lightning/platformResourceLoader';   
export default class MyPortfolioNavBar extends LightningElement {

    @track defaultThemeLight = true;


renderedCallback(){
    loadStyle(this, Hamicon +'/style.css');
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

 


