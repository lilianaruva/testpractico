import axios from 'axios';

export function getProductTable(val, values) {
    const url = 'https://atlantia-dev-test.herokuapp.com/api/beer-products/'
    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then(res => res.data)
            .then(res => {
                resolve(res)
            })
            .catch(err => reject(err))
    })
}


