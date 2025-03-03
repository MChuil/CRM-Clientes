<script setup>
    import RouterLink from '../components/ui/RouterLink.vue';
    import { FormKit } from '@formkit/vue';
    import Heading from '../components/ui/Heading.vue'; 
    defineProps({
        title: String
    })
</script>
<template>
    <div>
        <div>
            <RouterLink to="inicio">Inicio</RouterLink>
        </div>
        <Heading>{{  title  }} </Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit
                    type="form"
                    :actions = "false"    
                >
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
                    name="Teléfono"
                    label="Telefono de contacto"
                    placeholder="Teléfono: XXX-XXX-XXXX"
                    validation="required|*matches: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{ required: 'El telefono es requerido' , matches: 'El formato del teléfono no es valido' }"
                    validation-visibility="blur"
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