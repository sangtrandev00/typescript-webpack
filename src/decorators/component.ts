export function Component(config: { selector: string }) {
    return function (target: any) {
      // Perform component registration or setup logic
      registerComponent(target, config.selector);
    };
}

function registerComponent(componentClass: any, selector: string) {
    // Perform component registration logic here
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const componentInstance = new componentClass();
      // You can perform additional setup or initialization here
      element.appendChild(componentInstance.render());
    });
}