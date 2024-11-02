import '../css/style.css';

function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('menu-button');
    button.addEventListener('click', toggleDropdown);
    
    // Event listeners for dropdown menu items
    const comicsMenuItem = document.getElementById('menu-item-0');
    comicsMenuItem.addEventListener('click', () => loadForm('comics'));
    
    const actionFiguresMenuItem = document.getElementById('menu-item-1');
    actionFiguresMenuItem.addEventListener('click', () => loadForm('action-figures'));

    const ccgMenuItem = document.getElementById('menu-item-2');
    ccgMenuItem.addEventListener('click', () => loadForm('ccg'));

    const tcgMenuItem = document.getElementById('menu-item-3');
    tcgMenuItem.addEventListener('click', () => loadForm('tcg'));

});

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown-menu');
    const button = document.getElementById('menu-button');
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});

async function loadForm(type) {
    const contentSection = document.getElementById('content-section');

    contentSection.innerHTML = '';

    try {
        if (type === 'comics') {
            const { loadComicsForm } = await import('./list-comic.js');
            loadComicsForm(contentSection);
        } else if (type === 'action-figures') {
            const { loadActionFiguresForm } = await import('./list-action-figures.js');
            loadActionFiguresForm(contentSection);
        } else if (type === 'ccg') {
            const { loadCCGForm } = await import('./list-ccg.js');
            loadCCGForm(contentSection);
        } else if (type === 'tcg') {
            const { loadTCGForm } = await import('./list-tcg.js');
            loadTCGForm(contentSection);
        } else {
            contentSection.innerHTML = `
                <h2 class="text-xl font-semibold text-primary mb-4">${type} collection form will be available soon!</h2>
            `;
        }
    } catch (err) {
        console.error(`Error loading the ${type} form module:`, err);
    }
}
