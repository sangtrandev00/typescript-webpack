
type Constructor<T> = new (...args: any[]) => T;

export interface Component {
  render(): void;
}

export function CustomComponent(selector: string, template: string) {
  return function <T extends Constructor<Component>>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);

        // Create a new element with the specified selector
        // const element = document.createElement('div');
        // if(selector.startsWith('#')) {
        //   element.id = selector.substring(1);
        // }else if(selector.startsWith('.')) {
        //   element.className = selector.substring(1);
        // }
        // // Set the innerHTML of the element to the provided template
        // element.innerHTML = template;

        // console.log(element);

        // Render the component when it's instantiated
        this.render = function () {
          const targetElement = document.querySelector(selector);

          console.log("targetElement: ", targetElement);
          if (targetElement) {
            targetElement.innerHTML = template;
          }
        };

        this.render();
      }
    };
  };
}
