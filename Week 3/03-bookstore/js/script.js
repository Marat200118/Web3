const cols = document.querySelectorAll('.col');
const books = document.querySelectorAll('article[draggable="true"]');

let dragSrcEl;

const handleDragStart = (e) => {
  e.currentTarget.style.opacity = '0.4';

  dragSrcEl = e.currentTarget;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData("text/plain", event.currentTarget.id);
}

const handleDragEnd = (e) => {
  e.currentTarget.style.opacity = '1';

  cols.forEach((col) => {
    col.classList.remove('col--over');
  });
}

const handleDragEnter = e => {
  e.currentTarget.classList.add('col--over');
}

const handleDragLeave = e => {
  e.currentTarget.classList.remove('col--over');
}

const handleDragOver = e => {
  e.preventDefault();
  return false;
}

const handleDrop = e => {
  e.stopPropagation();
  if (dragSrcEl !== e.currentTarget) {
    const id = e.dataTransfer.getData('text/plain');
    e.currentTarget.appendChild(document.querySelector(`#${id}`));
  }
  return false;
}


books.forEach(book => {
  book.addEventListener('dragstart', handleDragStart);
  book.addEventListener('dragend', handleDragEnd);
});

cols.forEach(col => {
  col.addEventListener('drop', handleDrop);
  col.addEventListener('dragenter', handleDragEnter);
  col.addEventListener('dragleave', handleDragLeave);
  col.addEventListener('dragover', handleDragOver);
});
