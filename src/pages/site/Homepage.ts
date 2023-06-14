import { CustomComponent } from "../../decorators/component";

const templateHTML = `HELLO WORLD FROM HOME PAGE`

@CustomComponent('#main', templateHTML)
export class Homepage {
    
    constructor(

    ) {
        
    }

    render(): void {
        console.log("Rending Homepage component");
    }
    

}