document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button');
    console.log(`ACAAA -> ${e.target.matches('[data-dropdown-button')} - ${e.target.closest('[data-dropdown]')}`);

    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown;

    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    })
})

