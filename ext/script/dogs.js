const dogs = ['stout', 'kiko', 'sushi'];

const dogsContainer = document.createElement('div');
dogsContainer.className = 'dogs-container';

const dogsList = document.createElement('ul');

dogsContainer.appendChild(dogsList);

for (const dog of dogs) {
  const li = document.createElement('li');
  const text = document.createTextNode(`${dog}`);
  li.appendChild(text);
  dogsList.appendChild(li);
}

document.body.appendChild(dogsContainer);
