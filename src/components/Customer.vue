<script setup>
import { computed} from 'vue';
import { RouterLink } from 'vue-router';
    const props = defineProps({
        customer: Object
    });

    defineEmits(['update-state', 'delete-customer']);

    const nameCustomer = computed(()=>{
        return `${props.customer.name} ${props.customer.lastname}`;
    })

    const stateCustomer = computed(()=>{
        return props.customer.state == 1 ? true : false;
    })

    
</script>
<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">
                {{ nameCustomer }}
            </p>
            <p class="text-gray-500"> {{ props.customer.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">
                {{ props.customer.company }}
            </p>
            <p class="text-gray-600">
                {{ props.customer.job }}
            </p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            <button
                class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                :class = "[ stateCustomer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
                @click="$emit('update-state', { id: props.customer.id, state:props.customer.state } )"
            >
                {{ stateCustomer ? 'Activo' : 'Inactivo'}}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <RouterLink 
                :to="{name: 'editar-cliente', params: {id: props.customer.id}}"
                class="text-indigo-600 hover:text-indigo-900 cursor-pointer"
            >Editar</RouterLink>

            <button
                @click="$emit('delete-customer', props.customer.id)"
                class="text-red-600 ml-2 hover:text-red-900 cursor-pointer"
            >Eliminar</button>
        </td>
    </tr>
</template>

