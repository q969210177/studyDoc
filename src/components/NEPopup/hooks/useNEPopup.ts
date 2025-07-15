import type { INEPopupEvent } from "../types/NEPopupTypes";

export function useNEPopup(): [
  (instance: INEPopupEvent) => void,
  INEPopupEvent
] {
  const popupInstance = ref<INEPopupEvent | null>(null);
  function register(instance: INEPopupEvent) {
    if (!instance) return console.error("instance is required");
    if (instance) {
      popupInstance.value = instance;
    }
  }

  function getShow(): boolean {
    if (popupInstance.value && popupInstance.value.getShow) {
      return popupInstance.value.getShow();
    }
    return false;
  }
  function togglePopup() {
    if (popupInstance.value && popupInstance.value.togglePopup) {
      popupInstance.value.togglePopup();
    }
  }
  function closePopup() {
    if (popupInstance.value && popupInstance.value.closePopup) {
      popupInstance.value.closePopup();
    }
  }
  function openPopup() {
    if (popupInstance.value && popupInstance.value.openPopup) {
      popupInstance.value.openPopup();
    }
  }
  return [register, { getShow, togglePopup, closePopup, openPopup }];
}
