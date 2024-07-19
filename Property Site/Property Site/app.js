document.addEventListener('DOMContentLoaded', () => {
    const propertyForm = document.getElementById('propertyForm');
    const propertyList = document.getElementById('propertyList');
    const searchButton = document.getElementById('searchButton');

    let properties = [];

    propertyForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const propertyName = document.getElementById('propertyName').value;
        const propertyType = document.getElementById('propertyType').value;
        const propertyPrice = document.getElementById('propertyPrice').value;

        const property = {
            name: propertyName,
            type: propertyType,
            price: parseInt(propertyPrice)
        };

        properties.push(property);
        displayProperties(properties);

        propertyForm.reset();
    });

    searchButton.addEventListener('click', () => {
        const searchName = document.getElementById('searchName').value.toLowerCase();
        const searchType = document.getElementById('searchType').value.toLowerCase();
        const searchMinPrice = document.getElementById('searchMinPrice').value;
        const searchMaxPrice = document.getElementById('searchMaxPrice').value;

        const filteredProperties = properties.filter(property => {
            const matchesName = property.name.toLowerCase().includes(searchName);
            const matchesType = property.type.toLowerCase().includes(searchType);
            const matchesMinPrice = searchMinPrice ? property.price >= parseInt(searchMinPrice) : true;
            const matchesMaxPrice = searchMaxPrice ? property.price <= parseInt(searchMaxPrice) : true;

            return matchesName && matchesType && matchesMinPrice && matchesMaxPrice;
        });

        displayProperties(filteredProperties);
    });

    function displayProperties(properties) {
        propertyList.innerHTML = '';

        properties.forEach(property => {
            const propertyItem = document.createElement('li');
            propertyItem.textContent = `نام: ${property.name}, نوع: ${property.type}, قیمت: ${property.price} تومان`;
            propertyList.appendChild(propertyItem);
        });
    }
});
