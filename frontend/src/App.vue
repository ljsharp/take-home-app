<script setup>
import { ref, onMounted } from "vue";
import ConstantGraphic from "./components/ConstantGraphic.vue";
import axios from "axios";

const statuses = ref(null);
const loaded = ref(false);
const statusData = ref(null);
const onSelectedStatus = (status) => (statusData.value = status);

const getData = async () => {
  try {
    loaded.value = false;
    const response = await axios.get("http://localhost:8000/get-data");
    statuses.value = response.data;
    loaded.value = true;
  } catch (error) {
    console.log(
      "Error occurred while attempting to retrieve data from the server"
    );
  }
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="">
    <div v-if="loaded">
      <div class="flex flex-col items-center justify-center space-x-2">
        <label for="status" class="text-black">Select status</label>
        <select
          class="p-2 bg-white text-black border border-slate-400"
          v-model="statusData"
        >
          <option :value="status" v-for="status in statuses" :key="status">
            {{ status.name }}
          </option>
        </select>
      </div>
      <ConstantGraphic :data="statusData" v-if="statusData" />
    </div>
    <span v-else>Loading...</span>
  </div>
</template>
