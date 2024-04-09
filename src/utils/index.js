import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
    baseURL: productionUrl, 
})

export const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat("es-Us", {
        style: "currency",
        currency: "USD"
    }).format((price/100).toFixed(2))
    return dollarsAmount
}