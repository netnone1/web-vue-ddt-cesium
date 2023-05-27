<template>
    <div class="m-3">
        <div class='grid grid-cols-4 grid-rows-8 gap-3'>
            <div class='bg-white rounded-md row-span-6 p-3'>
                <p class='text-center pb-3'>การใช้ไฟฟ้ารายชั้น</p>
            </div>
            <div class='bg-white rounded-md col-span-2 row-span-2 p-3'>
                <div class='flex justify-center cursor-pointer'>
                    <p class='pr-2'>อาคาร</p>
                </div>
            </div>
            <div class='bg-white rounded-md row-span-4 p-3'>
                <BarChart label='1,2,3' dataenergy='1,2,3' datasolar='1,1,1' />
            </div>
            <div class='col-span-2 row-span-6'>
                <div id="cesiumContainer" class="h-screen"></div>
            </div>
            <div class='bg-white rounded-md row-span-4 p-3'>
                <p class='text-center'>ลักษณะการใช้งานพื้นที่รวม</p>
                    <DoughnutChart label='Outlet,Light,Aircon' data='1,2,3,4' />
            </div>
            <div class='bg-white rounded-md row-span-2 p-3'>
                <div class='pb-3'>
                    <div class="flex justify-between mx-auto">
                        <p class="p-2 text-sm">อุณหภูมิ</p>
                        <p class="text-sm">30 °C</p>
                    </div>
                </div>
                <div class=''>
                    <div class="flex justify-between mx-auto">
                        <p class="p-2 text-sm">PM</p>
                        <p class="text-sm">0 µg./m3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import BarChart from '../components/charts/bar.vue'
import DoughnutChart from '../components/charts/donghnut.vue'

onMounted(() => {
    window.viewer = new Cesium.Viewer("cesiumContainer");
})
</script>