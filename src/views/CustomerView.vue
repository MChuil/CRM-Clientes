<script setup>
    import { onMounted, ref, computed } from 'vue';
    // import  axios  from '../lib/axios';
    import CustomerService from '../services/CustomerService'
    import RouterLink from '../components/ui/RouterLink.vue';
    import Heading from '../components/ui/Heading.vue';
    import Customer from '../components/Customer.vue';

    
    const customers = ref([]);  

    onMounted(() => {
        CustomerService.getCustomers()
            .then(({data}) => {
                customers.value = data;
                // console.log(customers.value);
            })
            .catch(error => {
                console.log(error);
            });
    });

    const existCustomers = computed(() => customers.value.length > 0);

    defineProps({
        title: String
    })

    const updateState = ({id, state})=>{
        CustomerService.changeStatus(id, {state: !state})
            .then(({data}) => {
                const index = customers.value.findIndex(customer => customer.id === data.id);
                customers.value[index].state = data.state;
            })
            .catch(error => {
                console.log(error);
            });
    }

    const deleteCustomer = (id)=>{
        CustomerService.deleteCustomer(id)
            .then(({data}) => {
                customers.value = customers.value.filter(customer => customer.id !== data.id);
            })
            .catch(error => {
                console.log(error);
            });
    }

</script>
<template>
    <div>
        <div class="float-right mr-2">
            <RouterLink to="agregar-cliente">Agregar cliente</RouterLink>
        </div>
        <Heading>{{ title }}</Heading>
        <div v-if="existCustomers"  class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Empresa</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <Customer 
                                v-for="customer in customers"
                                :customer="customer"
                                :key="customer.id"
                                @update-state="updateState"
                                @delete-customer="deleteCustomer"
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <p v-else class="mt-10 text-center text-3xl">No existen clientes</p>
    </div>
</template>

