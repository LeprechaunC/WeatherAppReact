document.addEventListener('click', e=> 
{
    console.log("RE");
    const isDropdownButton = e.target.matches("[data-dropdown-butoton]");
    if (!isDropdownButton && e.target.closest('[data-dropdown') != null) return

    let currentDropdown
    if(isDropdownButton) 
    {
        currentDropdown = e.target.closest('[data-dropdown')
        currentDropdown.classlList.toggle('active')
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => 
    {
      
            if (dropdown === currentDropdown) return
            dropdown.classList.remove('active')
        })
    
})