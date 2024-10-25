import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/images";
import companyAssest from "@salesforce/resourceUrl/images";

export default class PortfolioExperienceSection extends LightningElement {
    company1 = PortfolioAssets + '/ctslogo.jpg';
    company2 = companyAssest + '/hplogo.png';
}