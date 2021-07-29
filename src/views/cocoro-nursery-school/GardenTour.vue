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
        name: "GardenTour",
        data() {
            return {
                date: '',
                showRegType: false,
                gardenChecked: false,
                reservationPre: false,
                activeTab: 3
            }
        },
        components: {
            Main
        }
    };
</script>

<style scoped>

</style>