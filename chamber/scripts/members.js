fetch('data/members.json')
    .then(response => response.json())
    .then(data => {        
        const companies = data;

        populateGrid(companies);
    })

function createGridItem(company) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('card', 'directoryItem');
    
    const name = document.createElement('h3');
    name.textContent = company.name;
    gridItem.appendChild(name);

    const lowerContent = document.createElement('div');
    lowerContent.classList.add('lower-content')
    
    const img = document.createElement('img');
    img.src = company.image;
    img.classList.add('hide-in-list');
    lowerContent.appendChild(img);

    const rightContent = document.createElement('div');
    rightContent.classList.add('right-content');
    
    const address = document.createElement('p');
    address.textContent = `Address: ${company.address}`;
    address.classList.add('hide-in-list');
    rightContent.appendChild(address);
    
    const phone = document.createElement('p');
    phone.textContent = `Phone: ${company['phone number']}`;
    phone.classList.add('left');
    rightContent.appendChild(phone);
    
    const membershipLevel = document.createElement('p');
    membershipLevel.textContent = `Membership Level: ${company['membership level']}`;
    membershipLevel.classList.add('right');
    rightContent.appendChild(membershipLevel);
    
    const url = document.createElement('a');
    url.href = company.url;
    url.textContent = company.url;
    url.classList.add('hide-in-list');
    rightContent.appendChild(url);

    lowerContent.appendChild(rightContent)
    gridItem.appendChild(lowerContent)
    
    return gridItem;
}

function populateGrid(companies) {
    const gridContainer = document.getElementById('directoryContainer');
    companies.forEach(company => {
        const gridItem = createGridItem(company);
        gridContainer.appendChild(gridItem);
    });
}