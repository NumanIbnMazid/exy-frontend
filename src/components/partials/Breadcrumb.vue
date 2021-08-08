<template>
    <nav aria-label="breadcrumb" class="custom-breadcrumb-parent">
        <ol class="breadcrumb ms-5 custom-breadcrumb">
            
            <li class="breadcrumb-item">
                <router-link :to="{name: 'Home' }">
                    <span>TOP</span>
                </router-link>
            </li>
            
            <li>
                <span class="ms-4 me-4 text-muted fw-lighter text-5xl">&gt;</span>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                <span v-if="pageName != null">{{ pageName }}</span>
                <span v-else>MyPage</span>
            </li>
            <li>
                <span class="ms-4 me-4 text-muted fw-lighter text-5xl">&gt;</span>
            </li>
        </ol>
        <hr>
    </nav>
</template>

<script>
    export default {
        name: "Breadcrumb",
        props: {
            pageName: String
        }
    };
</script>