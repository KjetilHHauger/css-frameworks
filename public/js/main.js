import '../css/main.css';

// Toggle dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.toggle('hidden');
}

// Event listeners for dropdown and accordion
document.addEventListener('DOMContentLoaded', () => {
    // Dropdown toggle
    const button = document.getElementById('menu-button');
    if (button) {
        button.addEventListener('click', toggleDropdown);
    }

    // Dropdown menu items
    const comicsMenuItem = document.getElementById('menu-item-0');
    if (comicsMenuItem) comicsMenuItem.addEventListener('click', () => loadForm('comics'));

    const actionFiguresMenuItem = document.getElementById('menu-item-1');
    if (actionFiguresMenuItem) actionFiguresMenuItem.addEventListener('click', () => loadForm('action-figures'));

    const ccgMenuItem = document.getElementById('menu-item-2');
    if (ccgMenuItem) ccgMenuItem.addEventListener('click', () => loadForm('ccg'));

    const tcgMenuItem = document.getElementById('menu-item-3');
    if (tcgMenuItem) tcgMenuItem.addEventListener('click', () => loadForm('tcg'));

    // Accordion buttons
    const accordionButtons = document.querySelectorAll('[data-accordion-button]');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.getAttribute('data-target');
            toggleAccordion(contentId);
        });
    });
});

// Load different forms
async function loadForm(type) {
    const contentSection = document.getElementById('content-section');
    if (!contentSection) return;

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

// Toggling accordion
function toggleAccordion(contentId) {
    if (!contentId) {
        console.error('Content ID is not provided to toggleAccordion function.');
        return;
    }

    const content = document.getElementById(contentId);
    const icon = document.getElementById(`icon-${contentId}`);
    
    if (!content) {
        console.error(`Element with ID ${contentId} not found.`);
        return;
    }
    
    const isOpen = content.classList.toggle('hidden');
    
    if (icon) {
        icon.classList.toggle('rotate-180');
    }
}
