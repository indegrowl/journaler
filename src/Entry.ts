import Element from "./Element.ts"
import EntryDate from "./EntryDate.ts";
import EntryText from "./EntryText.ts";

export default class Entry implements Element {
  private children: Element[] = [];
  private parent: Element | null = null;

  constructor() {
    let entryDate = new EntryDate("2024-08-08");
    let entryText = new EntryText();

    this.appendChild(entryDate);
    this.appendChild(entryText);
  }

  render(): HTMLElement {
    let entry = document.createElement("div");
    entry.classList.add("entry");
    let children = this.getChildren();
    children.forEach((child: Element) => entry.appendChild(child.render()));
    return entry;
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
