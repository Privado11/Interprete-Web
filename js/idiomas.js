let items = document.querySelectorAll('.items');

document.addEventListener('DOMContentLoaded', function() {
    items = document.querySelectorAll('.items');
    selection(items);
});

loadTranslation('es');
 
function loadTranslation(lang) {
    fetch(`idiomas/${lang}.txt`)
      .then(response => response.text())
      .then(data => {
        const translations = data.split('\n');
        translations.forEach(translation => {
        const [key, value] = translation.trim().split(/\s*=\s*/);
        const element = document.getElementById(key);
        const elements = [element];
          elements.forEach(element => {
            element.textContent = value;
          });
        }); 
    })
}

function selection(items){
    items.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            loadTranslation(lang);
        });
    });
}

  

