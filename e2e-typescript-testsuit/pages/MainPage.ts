import { by, element, browser } from 'protractor';

export class MainPage {

    pressButton(button: string){
        if(button=='Get Started' || button=='Features' || button=='Docs' || button=='Events'){
            element(by.xpath("//nav//a[text()='" +  button + "']")).click();
        }
        else{
            throw new SyntaxError(button + " - unsupported button"); 
        }
    }
}