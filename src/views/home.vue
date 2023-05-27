<template>
  <div class="m-3">
    <div class="h-screen grid grid-cols-3">

      <!-- Map -->
      <div class="col-span-2">
        <div class="h-screen mr-3 rounded-lg">
          <div id='cesiumContainer' class='h-full'></div>
          <div id="bubble">
            <table id="tab"></table>
          </div>
        </div>
      </div>

      <!-- Side -->
      <div class="bg-white rounded p-3">
        <swiper class="h-full" :pagination="pagination" :autoplay="autoplay" :modules="modules">
          <!-- API Energy -->
          <swiper-slide>
            <p className="text-center">การใช้พลังงานไฟฟ้า</p>
            <div v-for="(item, site_id) in uniqueData" :key="site_id" class="flex justify-between mx-auto">
              <p class="p-2 text-sm">{{ item.location }}</p>
              <p class="text-sm">{{ item.kW }} kW</p>
            </div>
          </swiper-slide>

          <!-- Firebase -->
          <swiper-slide>
            <p className="text-center">ความชื้น</p>
            <div v-for="item in snapshot" :key="site_id" class="flex justify-between mx-auto">
              <p className="p-2 text-sm">{{ item.Name }}</p>
              <p className="text-sm">{{ item.Humidity }} g/m3</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <p className="text-center">PM2.5</p>
            <div v-for="item in snapshot" :key="site_id" class="flex justify-between mx-auto">
              <p className="p-2 text-sm">{{ item.Name }}</p>
              <p className="text-sm">{{ item.PM25 }} µg./m3</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <p className="text-center">อุณหภูมิ</p>
            <div v-for="item in snapshot" :key="site_id" class="flex justify-between mx-auto">
              <p className="p-2 text-sm">{{ item.Name }}</p>
              <p className="text-sm">{{ item.Temp }} °C</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

// Firebase
import { ref, get, child } from "firebase/database";
import firebase from '../firebase'

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue"
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const dbRef = ref(firebase);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      modules: [Pagination, Autoplay],
    };
  },

  data() {
    return {
      uniqueData: {},
      snapshot: {}
    };
  },
  mounted() {
    this.fetchData();

    // SuperMap
    window.viewer = new Cesium.Viewer("cesiumContainer");
    const scene = viewer.scene
    const promise = scene.open('http://localhost:8090/iserver/services/3D-CMU/rest/realspace')
  },
  methods: {
    fetchData() {
      // API Energy
      axios.get('https://api.erdi.cmu.ac.th/cmu/eng?fbclid=IwAR3b0t5t_jI_y-CwD_4Wy1YBnyxSxTzK5W0xQ1O3sIbgdBihTX70bOn6hzo')
        .then(response => response.data)
        .then(data => {
          data.data.sort((itemOne, itemTwo) => itemTwo.timeIn.localeCompare(itemOne.timeIn));
          data.data.forEach(item => {
            if (!this.uniqueData[item.site_id]) { this.uniqueData[item.site_id] = { location: item.location, kW: item.kW, timeIn: item.timeIn } }
          });
        })
        .catch(error => {
          console.error(error);
        });


      // Firebase
      get(child(dbRef, `SensorsOutdoor/`)).then((snapshot) => {
        if (snapshot.exists()) {
          this.snapshot = snapshot.val()
          console.log(snapshot)
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }

  }
};
</script>
