const noteMain = document.getElementById('app');
const noteContainer = document.querySelector('.container');
const templateNote = document.querySelector('.note');
const addNoteBtn = document.querySelector('.add-note');

getNotes().forEach(note => {
  const noteEl = createNoteElement(note.id, note.content);
  noteContainer.insertBefore(noteEl, addNoteBtn);
});

addNoteBtn.addEventListener('click', addNote);

function getNotes() {
  const notes = localStorage.getItem('stickynotes-notes');
  return JSON.parse(notes) || [];
}

console.log(getNotes());

function saveNotes(notes) {
  localStorage.setItem('stickynotes-notes', JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const noteEl = templateNote.cloneNode(true);
  noteEl.hidden = false;
  noteEl.value = content;
  noteEl.placeholder = 'Empty Sticky Note';
  
  noteEl.addEventListener('change', () => {
    updateNote(id, noteEl.value);
  });
  noteEl.addEventListener('dblclick', () => {
    if (confirm('Are you sure you want to delete this note?')) {
      deleteNote(id, noteEl);
    }
  });
  return noteEl;
}

function addNote() {
  const notes = getNotes();
  console.log(notes);
  
  const noteObj = {
    id: Math.floor(Math.random() * 1000000),
    content: '',
  };
  const noteEl = createNoteElement(noteObj.id, noteObj.content);
  noteContainer.insertBefore(noteEl, addNoteBtn);
  notes.push(noteObj);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const target = notes.find(note => note.id === id);
  target.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, content) {
  let notes = getNotes();
  notes = notes.filter(note => note.id !== id);
  saveNotes(notes);
  noteContainer.removeChild(content);
}
