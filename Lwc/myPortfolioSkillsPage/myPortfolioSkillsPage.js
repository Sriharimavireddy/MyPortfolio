import { LightningElement, api } from 'lwc';
import SkillImage from '@salesforce/resourceUrl/images';
export default class MyPortfolioSkillsPage extends LightningElement {
    @api themeClass;
    //codeImageUrl = coderSkillImage;

    codeImageUrl = SkillImage +'/skillCoder.jpg';
}