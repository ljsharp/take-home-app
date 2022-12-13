<script setup>
import { ref } from "vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

defineProps({
  data: Object,
});

const options = {
  responsive: true,
  maintainAspectRatio: true,
};
</script>

<template>
  <Line :data="data" :options="options" :height="300" :width="1100" />
</template>
