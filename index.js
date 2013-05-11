function ComponentFactory(options) {
  this.id = 'rotation';
}

ComponentFactory.prototype.createComponent = function (options) {
  return {
    "angle": options.angle || 0
  };
};

module.exports = ComponentFactory;
