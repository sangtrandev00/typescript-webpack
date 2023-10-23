export default class DecorBackground {
  constructor(private _img: string, private _alt?: string) {}

  render() {
    return `
        <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img src="${this._img}"
                class="w-full bg-tertiary-color" alt="${this._alt}" />
        </div>
        `;
  }
}
