export const scrollToSection = (id: string) => {
  const event = new CustomEvent("imschool:navigate", {
    cancelable: true,
    detail: { id },
  });

  const wasHandledByCustomScroll = !window.dispatchEvent(event);

  if (!wasHandledByCustomScroll) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
