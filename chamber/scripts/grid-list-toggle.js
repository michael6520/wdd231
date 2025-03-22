document.getElementById('gridViewBtn').addEventListener('click', function () {
    let items = document.querySelectorAll('.directoryItem');
    items.forEach(function(item) {
        item.classList.remove('row');
        item.classList.add('card');
    });

    let container = document.getElementById('directoryContainer');
    container.classList.remove('directory-row-container');
    container.classList.add('directory-card-container')

    document.getElementById('gridViewBtn').classList.add('active');
    document.getElementById('listViewBtn').classList.remove('active'); 
});

document.getElementById('listViewBtn').addEventListener('click', function () {
    let items = document.querySelectorAll('.directoryItem');
    items.forEach(function(item) {
        item.classList.remove('card');
        item.classList.add('row');
    });

    let container = document.getElementById('directoryContainer');
    container.classList.remove('directory-card-container');
    container.classList.add('directory-row-container')

    document.getElementById('gridViewBtn').classList.remove('active');
    document.getElementById('listViewBtn').classList.add('active'); 
});