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
  