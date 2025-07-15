<script lang='ts' setup>
import NEPopup from "../NEPopup";
import { useNEDatePickerEvent } from "./hooks/useNEDatePickerEvent";

const props = defineProps()
const { register } = useNEDatePickerEvent()
</script>

<template>
  <div class="NEDatePicker">
    <NEPopup @register="register">
      <!-- <t-date-time-picker
        :value="modelValue"
        :mode="['date']"
        :title="popupTitle"
        :start="startDate"
        :format="format"
        @change="onChange"
        @pick="onPick"
        @confirm="onConfirm"
        @cancel="onCancel"
      /> -->
    </NEPopup>
  </div>
</template>

<style lang="scss" scoped>
.NEDatePicker{
   width:100%;
//    height:100%
}
</style>
