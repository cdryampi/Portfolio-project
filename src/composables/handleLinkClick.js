export const useHandleLinkClick = () => {
  const handleLinkClick = (href) => {
    console.log(href);
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return { handleLinkClick };
};
