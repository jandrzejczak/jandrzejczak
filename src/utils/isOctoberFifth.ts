import { ref, computed } from "vue";

export function isOctober5th() {
  const currentDate = ref(new Date());

  const isTodayOctober5th = computed(() => {
    const month = currentDate.value.getMonth(); // 0-based index, so October is 9
    const day = currentDate.value.getDate();

    return month === 9 && day === 5;
  });

  return isTodayOctober5th;
}
