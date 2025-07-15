<script setup lang='ts'>
import type { INEPopupEmits, INEPopupProps } from './types/NEPopupTypes';
import { useNEPopupEvent } from './hooks/useNEPopupEvent';
import defauleProps from './types/NEPopupTypes';

defineOptions({
  name: "NEPopup",
})
const props = defineProps(defauleProps)
const emit = defineEmits<INEPopupEmits>()
const attrs = useAttrs()
const { PopupRef, togglePopup, closePopup, openPopup, getShow, visible } = useNEPopupEvent(props)

onMounted(() => {
  emit('register', {
    getShow,
    togglePopup,
    closePopup,
    openPopup,
  })
})
</script>

<template>
  {{ visible }}
  <t-popup ref="PopupRef" v-model="visible" :placement="props.placement">
    1111 {{ visible }}
    <!-- <view class="NEPopup pos-relative h-80vh">
      <view v-if="props.showClose" class="close" @click="closePopup">
        <slot name="close">
          <view class="close_content h-100rpx w-100rpx flex items-center justify-center b-rd-50% bg-transparent">
            <i class="iconfont icon-guanbi text-64rpx color-#fff" />
          </view>
        </slot>
      </view>

      <slot />
    </view> -->
  </t-popup>
</template>

<style lang="scss" scoped>
.NEPopup{
   width:100%;
   background-color: transparent;
   .close{
    position: absolute;
    top:20rpx;
    right:20rpx;
    z-index: 1;
   }
}
</style>
