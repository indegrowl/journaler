export default interface Element {
  render(): HTMLElement;
  getChildren(): Element[];
  getParent(): (Element | null);
  appendChild(child: Element): void;
  deleteChild(index: number): void;
}
