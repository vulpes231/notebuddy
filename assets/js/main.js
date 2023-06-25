const title = document.getElementById("title");
const createNoteButton = document.getElementById("create-note-button");
const textContent = document.getElementById("textcontent");
const notes = document.querySelectorAll(".note");
const note = document.getElementById("note");
const form = document.getElementById("form");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

let counter = document.getElementById("counter");

// modal toggle function
createNoteButton.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
// counter function
let notecount = noteCounter();
counter.textContent = notecount;

function noteCounter() {
  notes.forEach((note) => {});

  return notes.length;
}
// create note function
function createNote() {
  let inputTitle = title.value;
  let inputContent = textContent.value;

  let newContent = document.createElement("div");
  newContent.classList.add("note");
  let newTitle = document.createElement("h3");
  newTitle.textContent = inputTitle;
  let newTextContent = document.createElement("p");
  newTextContent.textContent = inputContent;

  note.appendChild(newTitle);
  note.appendChild(newTextContent);
  note.appendChild(newContent);

  notecount++;
  counter.textContent = notecount;
  form.reset();
  modal.style.display = "none";
}
