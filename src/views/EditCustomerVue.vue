<script setup>
import { reactive } from "vue";
import CustomerService from "../services/CustomerService";
import { useRouter, useRoute } from "vue-router";
import RouterLink from "../components/ui/RouterLink.vue";
import { FormKit } from "@formkit/vue";
import Heading from "../components/ui/Heading.vue";
import { onMounted } from "vue";

const router = useRouter();
const route = useRoute();
const { id } = route.params;

defineProps({
    title: String,
});

const formData = reactive({});

onMounted(() => {
    CustomerService.getCustomer(id)
        .then(({ data }) => {
            Object.assign(formData, data);
            // formData.name = data.name;
            // formData.lastname = data.lastname;
            // formData.company = data.company;
            // formData.email = data.email;
            // formData.phone = data.phone;
            // formData.job = data.job;
        })
        .catch((error) => {
            console.log(error);
        });
});

const handleSubmit = (data) => {
    data.id = id;
    data.state = 1;
    CustomerService.updateCustomer(data)
        .then(response => {
            console.log(response);
            if(response.status === 200){
                //redireccionar
                router.push({name: 'inicio'});
            }
        })
        .catch(error => {
            console.log(error);
        });
};
</script>

<template>
    <div>
        <div class="float-right mr-2">
        <RouterLink to="inicio">Inicio</RouterLink>
        </div>
        <Heading>{{ title }}</Heading>
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit
                type="form"
                :actions="false"
                @submit="handleSubmit"
                >
                <!-- :value="formData" -->
                <FormKit
                    type="text"
                    name="name"
                    label="Nombre"
                    placeholder="Nombre del cliente"
                    validation="required"
                    :validation-messages="{ required: 'El nombre es requerido' }"
                    validation-visibility="blur"
                    v-model="formData.name"
                />

                <FormKit
                    type="text"
                    name="lastname"
                    label="Apellidos"
                    placeholder="Apellidos del cliente"
                    validation="required"
                    :validation-messages="{ required: 'Los apellidos son requeridos' }"
                    validation-visibility="blur"
                    v-model="formData.lastname"
                />
                <FormKit
                    type="email"
                    name="email"
                    label="Correo electronico"
                    placeholder="Correo electronico del cliente"
                    validation="required|email"
                    :validation-messages="{
                    required: 'El correo es requerido',
                    email: 'El correo no es valido',
                    }"
                    validation-visibility="blur"
                    v-model="formData.email"
                />
                <FormKit
                    type="text"
                    name="phone"
                    label="Telefono de contacto"
                    placeholder="Teléfono: XXX-XXX-XXXX"
                    validation="required|*matches: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{
                    required: 'El telefono es requerido',
                    matches: 'El formato del teléfono no es valido',
                    }"
                    validation-visibility="blur"
                    v-model="formData.phone"
                />

                <FormKit
                    type="text"
                    label="Empresa"
                    name="company"
                    placeholder="Empresa del cliente"
                    v-model="formData.company"
                />

                <FormKit
                    type="text"
                    label="Puesto"
                    name="job"
                    placeholder="Puesto del cliente"
                    v-model="formData.job"
                />

                <FormKit type="submit" label="Actualizar Cliente" />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
