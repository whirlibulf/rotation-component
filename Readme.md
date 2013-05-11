
# rotation-component

A component for storing the rotation angle of an object in the whirlibulf game engine.


## Installation

    $ component install whirlibulf/rotation-component

## Usage

The component ID is `rotation`.

Register the component:

    var component = require('rotation-component');
    game.addComponent(new component());

The options object for this component:

    {
      angle: 0
    }

The angle must be in radians.
   

## License

  MIT
