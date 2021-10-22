import axios from 'axios';

export function getPresenceChartData(val, values) {
    const url = 'https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/'
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

