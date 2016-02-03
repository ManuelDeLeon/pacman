ViewModel.signal({
  keyboard: {
    keydown: {
      target: document,
      event: 'keydown'
    }
  },
  mouse: {
    mousePosition: {
      target: document,
      event: 'mousemove'
    }
  }
});