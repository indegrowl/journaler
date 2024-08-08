import Element from "./Element.ts"
import moment from "moment";

export default class EntryDate implements Element {
  private children: Element[] = [];
  private parent: Element | null = null;
  private date: Date;

  constructor(date: string) {
    this.date = new Date(date)
  }

  render(): HTMLElement {
    let entryDateDiv = document.createElement("h2");
    entryDateDiv.classList.add("entryDate");
    entryDateDiv.innerText = moment(this.date).format("MMM Do, YYYY");
    let children = this.getChildren();
    children.forEach((child: Element) => entryDateDiv.appendChild(child.render()));
    return entryDateDiv;
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
