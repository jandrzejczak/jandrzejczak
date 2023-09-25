<template>
  <div class="detachable__window" ref="detachableWindow">
    <slot />
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount, defineComponent, watch } from "vue";
export default defineComponent({
  name: "WindowPortal",
  components: {},
  props: {
    open: Boolean,
    showIcon: {
      type: Boolean,
      default: false,
    },
    windowTitle: {
      type: String,
      default: "Popup window",
    },
  },
  emits: ["update:open"],
  setup(props, ctx) {
    const windowRef = ref<Window | null>(null);
    const parentElement = ref<HTMLElement | null>(null);
    const detachableWindow = ref<HTMLElement | null>(null);

    const copyStyles = (sourceDoc: Document, targetDoc: Document) => {
      Array.from(sourceDoc.styleSheets).forEach((styleSheet: CSSStyleSheet) => {
        if (styleSheet instanceof CSSStyleSheet) {
          // for <style> elements
          const newStyleEl = sourceDoc.createElement("style");

          Array.from(styleSheet.cssRules).forEach((cssRule) => {
            // write the text of each rule into the body of the style element
            newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
          });

          targetDoc.head.appendChild(newStyleEl);
        } else if ("href" in styleSheet && (styleSheet as CSSStyleSheet).href) {
          // for <link> elements loading CSS from a URL
          const newLinkEl = sourceDoc.createElement("link");

          newLinkEl.rel = "stylesheet";
          newLinkEl.href = (styleSheet as CSSStyleSheet).href as string;
          targetDoc.head.appendChild(newLinkEl);
        }
      });
    };

    const getDimensions = () => {
      if (detachableWindow.value) {
        const rect =
          detachableWindow.value.children[0].getBoundingClientRect();
        console.log(rect);
        if (rect)
          return { h: rect.height, w: rect.width, t: rect.top, l: rect.left };
      }
      return { h: 400, w: 500, t: 200, l: 200 };
    };

    const openPortal = () => {
      const windowDimensions = getDimensions();
      windowRef.value = window.open(
        "",
        "",
        `popup,width=${windowDimensions.w},height=${windowDimensions.h},left=${windowDimensions.l},top=${windowDimensions.t}`,
      );
      if (windowRef.value && detachableWindow.value) {
        if (ctx.slots && ctx.slots.default) {
          console.log(ctx.slots.default()[0]);
        }
        parentElement.value = detachableWindow.value.parentElement;
        windowRef.value.document.title = props.windowTitle;
        windowRef.value.document.body.append(detachableWindow.value);
        copyStyles(document, windowRef.value.document);
        windowRef.value.addEventListener("beforeunload", closePortal);
      }
    };

    const closePortal = () => {
      if (windowRef.value) {
        parentElement.value?.append(
          ...Array.from(windowRef.value.document.body.childNodes),
        );
        windowRef.value.close();
        windowRef.value = null;
        ctx.emit("update:open", false);
      }
    };

    const togglePortal = () => {
      if (props.open) {
        ctx.emit("update:open", false);
      } else {
        ctx.emit("update:open", true);
        openPortal();
      }
    };

    watch(
      () => props.open,
      (open) => {
        if (open) {
          openPortal();
        }
      },
    );

    onBeforeUnmount(() => {
      if (windowRef.value) {
        closePortal();
      }
    });

    return {
      togglePortal,
      detachableWindow,
    };
  },
});
</script>

<style lang="scss" scoped>
.detachable__window {
  position: relative;
  display: contents;
  height: 100%;

  &-icon {
    width: 18px;
    height: 18px;

    &__wrapper {
      position: absolute;
      top: 6px;
      right: 6px;
      padding: 6px;
      border-radius: 100%;
      transition: 0.3s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 50;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
