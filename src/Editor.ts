import Element from "./Element.ts"

export default class Editor implements Element {
  private children: Element[] = [];
  private parent: Element | null = null;

  render(): HTMLElement {
    let editor = document.createElement("div");
    editor.classList.add("editor");
    editor.id = "editor";
    let children = this.getChildren();
    children.forEach((child: Element) => editor.appendChild(child.render()));
    return editor;
  }

  getChildren(): Element[] {
    return this.children;
  }

  getParent(): (Element | null) {
    return this.parent;
  }

  appendChild(child: Element): void {
    this.children.push(child);
  }

  deleteChild(index: number): void {
    this.children.splice(index, 1);
  }
}
