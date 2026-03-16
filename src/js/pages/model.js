export class Model {
    constructor () {
        this.data = [];
    }

    async loadingData (){
        return new Promise((resolve,reject) => {
            fetch('/src/js/pages/data.json')
                .then(res => res.json())
                .then((data)=>{
                    this.data = data;

                    resolve();
                }).catch((err)=>{
                    console.error('Error fetching data', err);
                    reject(err);
            })
        })
    }

    sortingProducts(sortingValue) {
        const {sortCategory, sortOrder, searchQuery} = sortingValue;

        let filterData = [...this.data];

        if (searchQuery && searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase().trim();
            filterData = filterData.filter(product => {
                return product.description.toLowerCase().includes(query) ||
                    product.category.toLowerCase().includes(query) ||
                    product.month.toLowerCase().includes(query);
            });
        }

        if(sortCategory !== 'all'){
            filterData = filterData.filter((product) => {
                return product.category === sortCategory;
            });
        }

        return filterData.sort((a, b) => {
            const getDate = (event) => {
                const monthMap = {
                    'January': 0, 'February': 1, 'March': 2, 'April': 3,
                    'May': 4, 'June': 5, 'July': 6, 'August': 7,
                    'September': 8, 'October': 9, 'November': 10, 'December': 11
                };

                const year = 2024;
                const month = monthMap[event.month];
                const day = parseInt(event.date);
                const [hours, minutes] = event.time.split(' - ')[0].split(':').map(Number);

                return new Date(year, month, day, hours, minutes);
            };

            const dateA = getDate(a);
            const dateB = getDate(b);

            if (sortOrder === 'newest' || sortOrder === 'asc') {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });
    }
}