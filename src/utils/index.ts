import router from "@/router";
import { useRoute } from "vue-router";
import { nextTick } from "vue";

export function viewTransitionHelper({
  skipTransition = false,
  updateDOM,
  cleanup,
}: {
  skipTransition?: boolean;
  classNames?: string[];
  updateDOM: () => Promise<void>;
  cleanup?: () => void;
}) {
  if (skipTransition || !document.startViewTransition) {
    const updateCallbackDone = Promise.resolve(updateDOM()).then(() => {});

    return {
      ready: Promise.reject(Error("View transitions unsupported")),
      updateCallbackDone,
      finished: updateCallbackDone,
      skipTransition: () => {},
    };
  }

  const transition = document.startViewTransition(updateDOM);

  transition.finished.finally(() => {
    cleanup?.();
  });

  return transition;
}

export function navTo(route: string) {
  viewTransitionHelper({
    async updateDOM() {
      router.push(route);
      await nextTick();
    },
    cleanup() {},
  });
}

export function isCurrentRoute(path: string) {
  const route = useRoute();
  return route.path === path;
}
