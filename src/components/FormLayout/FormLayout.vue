<script lang='ts' setup>
import type { ActionProp, FormLayoutEmits, } from "./type/FormLayoutType";
import { EmitsEnum, formLayoutProps } from "./type/FormLayoutType";

const props = defineProps(formLayoutProps)

const emit = defineEmits<FormLayoutEmits>()
const loading = ref(false)
async function handleAction(action: ActionProp, type: EmitsEnum.CANCEL | EmitsEnum.SUBMIT) {
  if (typeof action !== "function") {
    if (type === EmitsEnum.CANCEL) {
      emit(EmitsEnum.CANCEL)
    }
    if (type === EmitsEnum.SUBMIT) {
      emit(EmitsEnum.SUBMIT)
    }
    return
  }
  try {
    loading.value = true
    const result = await action()
    if (type === EmitsEnum.CANCEL) {
      emit(EmitsEnum.CANCEL_COMPLETE, result)
    } else {
      emit(EmitsEnum.SUBMIT_COMPLETE, result)
    }
  } catch (error) {
    console.error(`${type} error:`, error)
    if (type === EmitsEnum.CANCEL) {
      emit(EmitsEnum.CANCEL_COMPLETE,)
    } else {
      emit(EmitsEnum.SUBMIT_COMPLETE,)
    }
  } finally {
    loading.value = false
  }
}

function handleCancel() {
  handleAction(props.cancelAction, EmitsEnum.CANCEL)
}

function handleSubmit() {
  handleAction(props.submitAction, EmitsEnum.SUBMIT)
}
</script>

<template>
  <div class="FormLayout flex flex-col">
    <div class="body flex-1">
      <slot />
    </div>
    <div v-if="showFooter" class="footer flex p-x-8px">
      <slot name="footer">
        <t-button :loading="loading" :block="true" @click="handleCancel">
          {{ cancelText }}
        </t-button>
        <t-button theme="primary" :block="true" :loading="loading" @click="handleSubmit">
          {{ submitText }}
        </t-button>
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.FormLayout {
  width: 100%;
  height: 100%;

  .body {
    max-height: 700px;
    overflow-y: auto;
  }

  .footer {
    .t-button+.t-button {
      margin-left: 16px;
    }
  }
}
</style>
