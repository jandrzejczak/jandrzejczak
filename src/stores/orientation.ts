import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useOrientationStore = defineStore("orientation", 
{
  state: () => ({
    orientation: {
      a: null,
      b: null,
      g: null,
    },
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    setOrientation(a: any, b: any, g: any) {
      this.orientation.a = a;
      this.orientation.b = b;
      this.orientation.g = g;
    }
  },
});
