<script setup>
    // import { reactive } from 'vue';
    import CustomerService from '../services/CustomerService';
    import { useRouter } from 'vue-router';
    import RouterLink from '../components/ui/RouterLink.vue';
    import { FormKit } from '@formkit/vue';
    import Heading from '../components/ui/Heading.vue'; 

    defineProps({
        title: String
    })

    const router = useRouter();

    // const defaultData = reactive({
    //     name: 'Mike',
    //     lastname: 'Martinez',
    //     email: '',
    //     phone: '',
    //     company: '',
    //     job: 'Desarrrollador'
    // });

    const handleSubmit = (data) => {
        data.state = 1;
        CustomerService.saveCustomer(data)
            .then(response => {
                console.log(response);
                if(response.status === 201){
                    //redireccionar
                    router.push({name: 'inicio'});
                }
            })
            .catch(error => {
                console.log(error);
            });
    }   
</script>
<template>
    <div>
        <div class="float-right mr-2">
            <RouterLink to="inicio">Inicio</RouterLink>
        </div>
        <Heading>{{  title  }} </Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit
                    type="form"
                    :actions = "false"
                    @submit="handleSubmit"
                    >
                    <!-- :value="defaultData" -->
                <FormKit
                    type="text"
                    name="name"
                    label="Nombre"
                    placeholder="Nombre del cliente"
                    validation="required"
                    :validation-messages="{ required: 'El nombre es requerido' }"
                    validation-visibility="blur"
                    />
                
                <FormKit
                    type="text"
                    name="lastname"
                    label="Apellidos"
                    placeholder="Apellidos del cliente"
                    validation="required"
                    :validation-messages="{ required: 'Los apellidos son requeridos' }"
                    validation-visibility="blur"
                    />
                <FormKit
                    type="email"
                    name="email"
                    label="Correo electronico"
                    placeholder="Correo electronico del cliente"
                    validation="required|email"
                    :validation-messages="{ required: 'El correo es requerido', email: 'El correo no es valido' }"
                    validation-visibility="blur"
                    />
                <FormKit
                    type="text"
                    name="phone"
                    label="Telefono de contacto"
                    placeholder="Teléfono: XXX-XXX-XXXX"
                    validation="required|*matches: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{ required: 'El telefono es requerido' , matches: 'El formato del teléfono no es valido' }"
                    validation-visibility="blur"
                    />

                <FormKit 
                    type="text"
                    label="Empresa"
                    name="company"
                    placeholder="Empresa del cliente"
                />
                
                <FormKit 
                    type="text"
                    label="Puesto"
                    name="job"
                    placeholder="Puesto del cliente"
                />
                
                <FormKit 
                    type="submit"
                    label="Agregar Cliente"
                />
                
                </FormKit>
            </div>

        </div>
    </div>
</template>
<style>
    .formkit-wrapper{
        max-width: 100%;
    }
</style>