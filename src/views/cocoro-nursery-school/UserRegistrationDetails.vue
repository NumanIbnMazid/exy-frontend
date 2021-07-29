<template>
    <div>
        <!-- Main -->
        <Main 
        :showRegType="showRegType" 
        :gardenChecked="gardenChecked"
        :reservationPre="reservationPre"
        :activeTab="activeTab"
        >
        </Main>
        <!-- /Main -->
    </div>
</template>


<script>
    // imports
    import Main from "./Main.vue"

    export default {
        name: "UserRegistrationDetails",
        data() {
            return {
                showRegType: true,
                gardenChecked: false,
                reservationPre: true,
                activeTab: 1
            }
        },
        components: {
            Main
        }
    };
</script>

<style scoped>

</style>