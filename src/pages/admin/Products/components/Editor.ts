import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class Editor {
    editorEl: HTMLDivElement;
    currentEditor: any;
    constructor(selector: string) {
        this.editorEl = document.querySelector(selector) ! as HTMLDivElement;
        this.create();
    }

    create() {
        ClassicEditor.create(this.editorEl)
        .then((newEditor) => {
          // console.log(editor);
          this.currentEditor = newEditor;
        })
        .catch((error) => {
          console.error(error);
        });
    }

    reset() {

    }

    get getData(): string {
        return this.currentEditor.getData();
    }

    set setData(data: string) {
        this.currentEditor.setData(data);
    }
}