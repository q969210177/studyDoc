<script lang="ts" setup>
import type { IStrokeListItem } from "@/type/store/StrokeListType";
import { useRouter } from "vue-router";
import FormLayout from "@/components/FormLayout";
import NEDatePicker from "@/components/NEDatePicker"
import NEPopup, { useNEPopup } from "@/components/NEPopup"
import { useStrokeList } from "@/views/StrokeList/hooks/useStrokeList";

const { handleAddStrokeList } = useStrokeList()
const router = useRouter()
const FormRef = ref(null);
const [register, { openPopup }] = useNEPopup()
const formModel = reactive<IStrokeListItem>({
  name: "",
  startTime: "",
  endTime: "",
  timeDiff: 0
  // id: undefined
});
const rules = {
  name: [{ required: true, message: "请输入行程名称" }],
};

function handleConfig() {
  handleAddStrokeList(formModel);
}
</script>

<template>
  <div class="strokeForm">
    {{ formModel }}
    <t-button @click="openPopup">
      测试
    </t-button>
    <FormLayout :submit-action="handleConfig" @cancel="router.push('/strokelist')">
      <t-form ref="FormRef" :model="formModel" :rules="rules">
        <t-form-item label="行程名称" prop="name">
          <t-input v-model="formModel.name" :borderless="true" />
        </t-form-item>
        <t-form-item label="行程日期开始" prop="price">
          <!-- <NEDatePicker v-model="formModel.startTime" /> -->
          <!-- <t-input  :borderless="true" /> -->
        </t-form-item>
        <t-form-item label="行程日期结束" prop="price">
          <t-input v-model="formModel.endTime" :borderless="true" />
        </t-form-item>
      </t-form>
    </FormLayout>
    <NEPopup @register="register" />
  </div>
</template>

<style lang="scss" scoped>
.strokeForm {
  width: 100%;
  height: 100%;
}
</style>
