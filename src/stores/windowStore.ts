import { defineStore } from "pinia";

interface WindowPosition {
  top: number,
  left: number,
  right: number,
  bottom: number,
}

interface WindowDimensions {
  width: number,
  height: number,
}

interface Window {
  id: string;
  name: string,
  position: WindowPosition,
  dimensions: WindowDimensions,
  minimized: boolean,
}

// class FloatingWindow {

// }

export const useDeviceStore = defineStore("window", {
  state: () => ({
    bottomNav: false,
    currentColor: "",
    isMobile:
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1,
    isSafari:
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1,
  }),
  getters: {
    isBottomNav: (state) => state.bottomNav,
    getCurrentColor: (state) => state.currentColor,
  },
  actions: {
    toggleBottomNav() {
      this.bottomNav = !this.bottomNav;
    },
    setCurrentColor(newColor: string) {
      this.currentColor = newColor;
    },
  },
  persist: true,
});
