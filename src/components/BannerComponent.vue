<template>
  <div class="container-fluid banner">
    <div
      class="
        row
        d-flex
        justify-content-center
        align-items-center
        flex-column flex-nowrap
      "
    >
      <div class="col col-6">
        <h2>植迷不悟</h2>
        <p>搜羅全台最齊全開運植物！趨吉避凶，廣結善緣，招財進廣都在這裡</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { name: "風水" },
        { name: "擋煞" },
        { name: "招財" },
        { name: "桃花" },
        { name: "健康" },
      ],
    };
  },
};
</script>