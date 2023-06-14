// import { Component } from "../../components/base-component";

import { Component, CustomComponent } from "../../decorators/component";


const templateHTML = `HELLO WORLD FROM DETAIL`;

@CustomComponent('#main', templateHTML)
export class Detail implements Component{
    
    constructor(

    ) {
  
    }

    render(): void {
        console.log("Rending Detailpage component");
    }


}
