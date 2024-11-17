import { LightningElement } from 'lwc';
import githubimage from "@salesforce/resourceUrl/images";
import portfolioimage from "@salesforce/resourceUrl/images";
import whatsppimage from "@salesforce/resourceUrl/images";
import currencyprojectimg from "@salesforce/resourceUrl/images";

export default class PortfolioProjectSection extends LightningElement {
    githubIcon = githubimage + '/githubimg.png';
    portfolioicon = portfolioimage + '/portfolio.png';
    whatsapproject = whatsppimage +'/salesforcewhatsapp.png';
    currencyimg = currencyprojectimg + '/currencyimage.png';

    project1 = 'https://github.com/Sriharimavireddy';
    project1ui = 'https://github.com/Sriharimavireddy';
    project2 = 'https://github.com/Sriharimavireddy';
    project2ui ='https://sriharimavireddyportfolio-dev-ed.develop.my.site.com/sriharimavireddy/bmi-calculator';
    project3 = 'https://github.com/Sriharimavireddy';
    project3ui = 'https://sriharimavireddyportfolio-dev-ed.develop.my.site.com/sriharimavireddy/currency-converter';
    
}