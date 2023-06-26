const title = document.getElementById("title");
const createNoteButton = document.getElementById("create-note-button");
const textContent = document.getElementById("textcontent");
const notesContainer = document.getElementById("notes");
const note = document.getElementById("note");
const form = document.getElementById("form");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
let notes = document.querySelectorAll(".note");
let deleteButtons = document.querySelectorAll(".delete");
let div = document.getElementById("empty-image");

let counter = document.getElementById("counter");

function displayEmpty() {
  let noteLenght = counter.textContent;
  console.log(noteLenght);
  if (noteLenght < 1) {
    // console.log("yes");
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}

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
// ...

// create note function
function createNote() {
  let inputTitle = title.value;
  let inputContent = textContent.value;

  let newContent = document.createElement("div");
  newContent.classList.add("note");
  let newTextbox = document.createElement("div");
  newTextbox.classList.add("text");
  let newTitle = document.createElement("h3");
  newTitle.textContent = inputTitle;
  let newTextContent = document.createElement("p");
  let shortInput = inputContent.slice(0, 20) + "...";
  newTextContent.textContent = shortInput;
  let newDate = document.createElement("span");
  newDate.textContent = new Date().toLocaleString();
  let newButtons = document.createElement("div");
  newButtons.classList.add("mods");
  let editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.textContent = "edit";
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "delete";

  newTextbox.appendChild(newTitle); // Append the title to the newContent element
  newTextbox.appendChild(newTextContent); // Append the text content to the newContent element
  newTextbox.appendChild(newDate);
  newButtons.appendChild(editButton);
  newButtons.appendChild(deleteButton);
  newContent.appendChild(newTextbox);
  newContent.appendChild(newButtons);

  notesContainer.appendChild(newContent); // Append the newContent element to the container

  notecount += 1;
  counter.textContent = notecount;
  form.reset();
  modal.style.display = "none";
  div.style.display = "none";
}

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let itemToDelete = e.target.parentNode.parentNode;
    itemToDelete.remove();
    counter.textContent = notecount -= 1;
    displayEmpty();
  });
});
