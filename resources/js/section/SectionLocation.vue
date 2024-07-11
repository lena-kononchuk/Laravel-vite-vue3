<template>
    <div class="section" style="background-color: #F6F5EC;">
        <div class="wrapper">
            <div class="row">
                <div class="col-xs-12  col-sm-12 col-md-7">
                    <div class="h3 purple box">FIND THE IDEAL LOCATION TO CALL HOME</div>
                    <div class="text box">Tap on any city to learn more about it</div>
                    <GoogleMap :api-key="apiKey" style="width: 100%; height: 450px" :center="center" :zoom="9">
                        <MarkerCluster>
                            <Marker v-for="(location, index) in locations" :options="{ position: location.coords }"
                                :key="index" @click="selectCity(location)" />
                        </MarkerCluster>
                    </GoogleMap>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-5" v-if="selectedCity">
                    <div class="card  dark-blue center-xs">
                        <div v-if="selectedCity.images && selectedCity.images.length" class="box--small flex center-xs">
                            <img v-for="(image, index) in selectedCity.images" :src="image" :alt="selectedCity.name"
                                class="image image--small box--small" :key="index" />
                        </div>
                        <div class="h3 box--small">{{ selectedCity.name }}</div>
                        <div v-html="formattedInfo" class="text"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { GoogleMap, Marker, MarkerCluster } from "vue3-google-map";

const apiKey = "AIzaSyCY92VDM03aLG9Z3riE8IsV4wF0gemzv_M";

export default {
    name: "App",
    components: { GoogleMap, Marker, MarkerCluster },
    setup() {

        const center = ref({ lat: 35.05400, lng: 33.21773 });
        const locations = [
            {
                name: "Limassol",
                coords: { lat: 34.67887, lng: 33.04063 },
                info: "The sunny city of Limassol is the second largest city of the island, and it is among the most desirable travel and business destinations both for families and for entrepreneurs looking to expand their business horizons. The combination of elegant accommodation and ancient architectural views is bound to capture the interest of people of any age. <br> <br>The Limassol Marina is the first marina to harbor yachts in Cyprus and it is surrounded by renowned bars and restaurants.The residents of Limassol pride themselves on their cultural values and festivities as hundreds of theatrical performances take place each  year at the Rialto theater, and the city holds an annual Wine Festival and Carnival Parade.",
                images: [
                    "/img/map/larnaka_images_1.png",
                    "/img/map/larnaka_images_2.png",
                    "/img/map/larnaka_images_3.png"
                ]
            },
            {
                name: "Paphos",
                coords: { lat: 34.77613, lng: 32.42313 },
                info: "Paphos is located on the southwest coast of Cyprus, and it is one of the most popular cities for expat communities.The crystal- clear, family - friendly beaches are a frequent holiday retreat for millions of tourists all year round.Its exceptional infrastructure includes a huge shopping mall, hospitals, the second largest airport of the island, and many schools. <br> <br>These are oly a few reasons why people choose to move to Paphos, as there are many more reasons it is considered one of the most excellent places to live in Europe.",
                images: [
                    "/img/map/limassol_images_1.png",
                    "/img/map/limassol_images_2.png",
                    "/img/map/limassol_images_3.png"
                ]
            },
            {
                name: "Nicosia",
                coords: { lat: 35.184529, lng: 33.37251 },
                info: "Also known as Lefkosia, Nicosia is the capital city of Cyprus and the only divided capital city in the world.The unique urban scenery is built upon a rich historical past and its mixture with modern lifestyle.<br> <br> It is in close proximity to every other city in Cyprus, giving residents the flexibility of choosing to enjoy the breathtaking views from the mountain tops and soothing beaches of the coastal cities within minutes. <br> <br> Nicosia has become an attractive cosmopolitan city made of diverse cultural communities, excellent healthcare facilities and every aspect one requires to build the lifestyle of your dreams.",
                images: [
                    "/img/map/nicosia_images_1.png",
                    "/img/map/larnaka_images_2.png",
                    "/img/map/larnaka_images_3.png"
                ]
            },
            {
                name: "Larnaca",
                coords: { lat: 34.92220, lng: 33.62177 },
                info: "Being the third largest city in Cyprus and home to the island’s most busy airport, it offers visitors a variety of activities and experiences that will remain unforgettable to any individual. <br> <br> It is known for its Salt Lake that hosts thousands of Flamingos each year as well as for its sandy beaches and historical sites. <br> <br> The rapidly increasing corporate ecosystem and comfortable lifestyle create an exceptional living environment for anyone who is looking to enjoy a relaxed life by the sea.",
                images: [
                    "/img/map/larnaka_images_1.png",
                    "/img/map/larnaka_images_2.png",
                    "/img/map/larnaka_images_3.png"
                ]
            }
        ];

        const selectedCity = ref(locations[0]); // Default to Limassol

        const selectCity = (location) => {
            selectedCity.value = location;
        };

        const formattedInfo = computed(() => {
            return selectedCity.value.info.replace(/\n/g, '<br>');
        });

        return { center, locations, selectedCity, selectCity, formattedInfo, apiKey };
    }
};
</script>
