const root = document.documentElement;
const addEvent = (eventType) => {
  return root.addEventListener(eventType, (event) => {
    window.requestAnimationFrame(() => {
      if (event.cancelable) {
        event.preventDefault();
      }

      if (event.targetTouches) {
        root.style.setProperty('--x', `${event.targetTouches[0].clientX - 125}px`);
        root.style.setProperty('--y', `${event.targetTouches[0].clientY - 135}px`);
      } else {
        root.style.setProperty('--x', `${event.clientX - 125}px`);
        root.style.setProperty('--y', `${event.clientY - 135}px`);
      }
    })
  })
}

addEvent('mousemove');
addEvent('touchmove');