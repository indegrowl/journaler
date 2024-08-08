import Element from "./Element.ts"

export default class EntryText implements Element {
  private children: Element[] = [];
  private parent: Element | null = null;
  private text: string;

  constructor() {
    this.text = "This is a sample text for a journal entry, it is very much editable."
  }

  render(): HTMLElement {
    let entryTextDiv = document.createElement("div");
    entryTextDiv.classList.add("entryText");
    entryTextDiv.contentEditable = "true";
    entryTextDiv.innerText = this.text;
    let children = this.getChildren();
    children.forEach((child: Element) => entryTextDiv.appendChild(child.render()));
    return entryTextDiv;
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
