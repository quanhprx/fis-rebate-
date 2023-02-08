document.querySelector('#menu-toggle').onclick = e => {
    var sidebar = document.querySelector('#sidebar');
    if (sidebar.style.display !== 'none')
        sidebar.style.display = 'none';
    else
        sidebar.style.display = 'block';
}

