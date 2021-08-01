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
        name: "CocoroNurserySchool",
        data() {
            return {
                date: '',
                showRegType: false,
                gardenChecked: false,
                reservationPre: false,
                activeTab: 1
            }
        },
        components: {
            Main
        }
    };
</script>