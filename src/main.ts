import Editor from "./Editor.ts"
import Entry from "./Entry.ts";

let editor = new Editor();
let entry = new Entry();
editor.appendChild(entry);
let container = document.getElementById("container")!;
container.appendChild(editor.render());
