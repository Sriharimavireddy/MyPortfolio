import { LightningElement } from 'lwc';
import githubimage from "@salesforce/resourceUrl/images";
import portfolioimage from "@salesforce/resourceUrl/images";
import bmiprojectimg from "@salesforce/resourceUrl/images";
import currencyprojectimg from "@salesforce/resourceUrl/images";

export default class PortfolioProjectSection extends LightningElement {
    githubIcon = githubimage + '/githubimg.png';
    portfolioicon = portfolioimage + '/portfolio.png';
    bmiicon = bmiprojectimg +'/bmiimage.png';
    currencyimg = currencyprojectimg + '/currencyimage.png';

    project1 = 'https://github.com/Sriharimavireddy';
    project1ui = 'https://github.com/Sriharimavireddy';
    project2 = 'https://github.com/aarjav22/Handwritten_Digits_Recorgnizer';
    project2ui ='https://sriharimavireddyportfolio-dev-ed.develop.my.site.com/sriharimavireddy/bmi-calculator';
    project3 = 'https://github.com/aarjav22/Gideon-Final-Project';
    project3ui = 'https://sriharimavireddyportfolio-dev-ed.develop.my.site.com/sriharimavireddy/currency-converter';
    
}