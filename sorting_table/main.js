const countries = [
    { id: 11, country: "BFinland", capital: "ATallinn" },
    { id: 6, country: "AEstonia", capital: "CHelsinki" },
    { id: 3, country: "CSweden", capital: "BStockholm" },

];

function createTable() {

    const tableBody = document.querySelector('tbody');
    countries.forEach(country => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        const countryCell = document.createElement('td');
        const capitalCell = document.createElement('td');

        idCell.textContent = country.id;
        countryCell.textContent = country.country;
        capitalCell.textContent = country.capital;

        row.appendChild(idCell);
        row.appendChild(countryCell);
        row.appendChild(capitalCell);

        tableBody.appendChild(row);


    });
}

createTable();


function sortTableBy(prop) {

    if (typeof countries[0][prop] === 'string') {

        countries.sort((a, b) => {
            const aln = a[prop].toLowerCase();
            const bln = b[prop].toLowerCase();

            if (aln < bln) {
                return -1;
            }

            if (aln > bln) {
                return 1;
            }

            return 0;
        });
    } else {
        countries.sort((a, b) => {
            return a[prop] - b[prop];
        })
    }
    document.querySelector('tbody').innerHTML = '';
    createTable();


}