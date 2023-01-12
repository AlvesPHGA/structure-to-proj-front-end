const button = document.querySelector('.btn');

function handleClick() {
   console.log('hello');
}

button?.addEventListener('click', () => handleClick());
