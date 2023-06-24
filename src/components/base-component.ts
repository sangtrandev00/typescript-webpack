
export default abstract class Component <T extends HTMLElement > {
    hostEl: T;
    constructor(hostElId: string) {
        this.hostEl = document.getElementById(hostElId)! as T;
        
    }

}

