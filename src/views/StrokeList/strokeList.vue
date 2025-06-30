<script lang="ts" setup>
import StrokeForm from "./components/StrokeForm.vue";
const MAX_DATA_LEN = 60;

function loadData(data: any, isRefresh?: boolean) {
  const ONCE_LOAD_NUM = 20;

  return new Promise((resolve) => {
    setTimeout(() => {
      const temp = [];
      for (let i = 0; i < ONCE_LOAD_NUM; i++) {
        if (isRefresh) {
          temp.push(`${i + 1}`);
        } else {
          temp.push(`${data.value.length + 1 + i}`);
        }
      }

      if (isRefresh) {
        data.value = temp;
      } else {
        data.value.push(...temp);
      }

      resolve(data);
    }, 1000);
  });
}

const listPull = ref([] as Array<any>);
const loading = ref("");
const refreshing = ref(false);
const popupVisible = ref(false);
function onLoadPull(isRefresh?: boolean) {
  if ((listPull.value.length >= MAX_DATA_LEN && !isRefresh) || loading.value) {
    return;
  }
  loading.value = "loading";
  loadData(listPull, isRefresh).then(() => {
    loading.value = "";
    refreshing.value = false;
  });
}

function onScroll(scrollBottom: number) {
  if (scrollBottom < 50) {
    onLoadPull();
  }
}

function onRefresh() {
  refreshing.value = true;
  onLoadPull(true);
}
function handleOpenPopup(type: "add" | "edit", data: any = null) {
  popupVisible.value = true;
  if (type === "edit") {
    console.log(data);
  }
}
onMounted(() => {
  onLoadPull();
});
</script>

<template>
  <div class="strokeList">
    <div class="strokeList-header">
      <div class="strokeList-header-title">
        <t-button
          theme="primary"
          type="button"
          size="small"
          @click="handleOpenPopup('add')"
        >
          添加行程
        </t-button>
      </div>
    </div>
    <t-popup v-model="popupVisible" placement="bottom" destroy-on-close>
      <StrokeForm />
    </t-popup>

    <t-pull-down-refresh v-model="refreshing" @refresh="onRefresh">
      <t-list :async-loading="loading" @scroll="onScroll">
        <t-cell v-for="item in listPull" :key="item" align="middle">
          <span class="cell">{{ item }}</span>
        </t-cell>
      </t-list>
    </t-pull-down-refresh>
  </div>
</template>

<style lang="scss" scoped>
$header-height: 100px;
.strokeList {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .strokeList-content {
    width: 100%;
    height: calc(100% - $header-height);
    overflow-y: scroll;
    max-height: calc(100% - $header-height - 50px);
  }
  .strokeList-header {
    width: 100%;
    height: $header-height;
    background-color: #fff;
  }
}
</style>
