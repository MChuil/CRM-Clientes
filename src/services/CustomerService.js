import api from '../lib/axios';

const getCustomers = () => {
    return api.get('/clientes');
}

const getCustomer = (id) => {
    return api.get(`/clientes/${id}`);
}

const saveCustomer = (customer) => {
    return api.post('/clientes', customer);
}

const updateCustomer = (customer) => {
    console.log(customer.id);
    return api.put(`/clientes/${customer.id}`, customer);
}

const changeStatus = (id, state) => {
    return api.patch(`/clientes/${id}`, state);
}

const deleteCustomer = (id) => {
    return api.delete(`/clientes/${id}`);
}

export default {
    getCustomers,
    getCustomer,
    saveCustomer,
    updateCustomer,
    changeStatus,
    deleteCustomer
}
