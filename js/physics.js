//matter
let deviceScale = window.innerWidth / 500;
deviceScale *= 100;
deviceScale = Math.round(deviceScale);
deviceScale /= 100;

var canvas = document.getElementById("matter");

let engine = Matter.Engine.create(),
  world = engine.world;

let render = Matter.Render.create({
  element: document.body,
  engine: engine,
  canvas: canvas,
  options: {
    background: "./images/bg.png",
    width: window.innerWidth,
    height: window.innerHeight,
    showAngleIndicator: false,
    showCollisions: false,
    showVelocity: false,
    wireframes: false,
  },
});

let ground = Matter.Bodies.rectangle(
  window.innerWidth / 2,
  window.innerHeight + 25,
  window.innerWidth,
  50,
  {
    isStatic: true,
  }
);

let left_wall = Matter.Bodies.rectangle(
  -50,
  window.innerHeight / 2,
  100,
  window.innerHeight * 2,
  {
    isStatic: true,
  }
);

let rigth_wall = Matter.Bodies.rectangle(
  window.innerWidth + 50,
  window.innerHeight / 2,
  100,
  window.innerHeight * 2,
  {
    isStatic: true,
  }
);

let lid = Matter.Bodies.rectangle(
  window.innerWidth / 2,
  -window.innerHeight,
  window.innerWidth,
  50,
  {
    isStatic: true,
  }
);

let marker = Matter.Bodies.circle(
  window.innerWidth - window.innerWidth * 0.24 + 40,
  window.innerHeight / 2 - window.innerHeight * 0.1 + 22,
  1,
  {
    isStatic: true,
    render: {
      sprite: {
        texture: "./images/pin.png",
        xScale: 1,
        yScale: 1,
      },
    },
  }
);

marker.collisionFilter = {
  group: -1,
  category: 2,
  mask: 0,
};

let andrz = Matter.Bodies.rectangle(
  window.innerWidth * 0.12 + 85 * deviceScale,
  window.innerHeight / 2,
  223 * deviceScale,
  29 * deviceScale,
  {
    isStatic: true,
    chamfer: { radius: 20 },
    render: {
      sprite: {
        texture: "./images/andrz.png",
        xScale: 0.18 * deviceScale,
        yScale: 0.18 * deviceScale,
      },
    },
  }
);

let cz = Matter.Bodies.rectangle(
  window.innerWidth - window.innerWidth * 0.35,
  -50,
  73 * deviceScale,
  40 * deviceScale,
  {
    chamfer: { radius: 20 },
    restitution: 0.7,
    density: 0.02,
    render: {
      sprite: {
        texture: "./images/cz.png",
        xScale: 0.18 * deviceScale,
        yScale: 0.18 * deviceScale,
      },
    },
  }
);

Matter.Body.rotate(cz, -0.9);

let letterK = Matter.Bodies.rectangle(
  window.innerWidth - window.innerWidth * 0.12,
  window.innerHeight / 2,
  37 * deviceScale,
  55 * deviceScale,
  {
    isStatic: true,
    chamfer: { radius: 20 },
    render: {
      sprite: {
        texture: "./images/k_leter.png",
        xScale: 0.18 * deviceScale,
        yScale: 0.18 * deviceScale,
      },
    },
  }
);

var group = Matter.Body.nextGroup(true);

var letterA = Matter.Composites.stack(
  window.innerWidth - window.innerWidth * 0.24,
  window.innerHeight / 2 - window.innerHeight * 0.1,
  1,
  1,
  18 * deviceScale,
  18 * deviceScale,
  function (x, y) {
    return Matter.Bodies.circle(x - 20 * deviceScale, y, 20 * deviceScale, {
      render: {
        sprite: {
          texture: "./images/a_leter.png",
          xScale: 0.18 * deviceScale,
          yScale: 0.18 * deviceScale,
        },
      },
      chamfer: 5,
    });
  }
);

Matter.Composites.chain(letterA, 0.3, 0, -0.3, 0, {
  stiffness: 1,
  length: 0,
});

Matter.Composite.add(
  letterA,
  Matter.Constraint.create({
    bodyB: letterA.bodies[0],
    pointB: { x: 12 * deviceScale, y: -8 * deviceScale },
    pointA: {
      x: letterA.bodies[0].position.x,
      y: letterA.bodies[0].position.y,
    },
    stiffness: 1,
    length: 0,
    render: {
      visible: true,
      lineWidth: 6,
      strokeStyle: "#E8212F",
    },
  })
);
let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: { visible: false },
  },
});

mouseConstraint.mouse.element.removeEventListener(
  "mousewheel",
  mouseConstraint.mouse.mousewheel
);
mouseConstraint.mouse.element.removeEventListener(
  "DOMMouseScroll",
  mouseConstraint.mouse.mousewheel
);
render.mouse = mouse;

let firing = false;
//   Matter.Events.on(mouseConstraint, "enddrag", function (e) {
//     if (e.body === ball) firing = true;
//   });
Matter.Events.on(engine, "afterUpdate", function () {
  if (
    firing &&
    Math.abs(ball.position.x - 300) < 20 &&
    Math.abs(ball.position.y - 600) < 20
  ) {
    ball = Matter.Bodies.circle(300, 600, 20);
    Matter.World.add(engine.world, ball);
    sling.bodyB = ball;
    firing = false;
  }
});

let spacer = Matter.Bodies.circle(
  window.innerWidth - window.innerWidth * 0.2,
  -50,
  20,
  {
    isStatic: true,
  }
);

let spacer2 = Matter.Bodies.circle(window.innerWidth * 0.1, -50, 20, {
  isStatic: true,
});

let stack = Matter.Composites.stack(
  window.innerWidth - window.innerWidth * 0.2,
  -200,
  5,
  5,
  0,
  0,
  function (x, y) {
    return Matter.Bodies.circle(x, y, 3 * deviceScale, {
      friction: 0.1,
      restitution: 0.8,
      render: {
        fillStyle: "#E8212F",
        lineWidth: 0,
      },
    });
  }
);

let stack2 = Matter.Composites.stack(
  window.innerWidth * 0.1,
  -500,
  5,
  5,
  0,
  0,
  function (x, y) {
    return Matter.Bodies.circle(x, y, 3 * deviceScale, {
      friction: 0.1,
      restitution: 0.8,
      render: {
        fillStyle: "white",
        lineWidth: 0,
      },
    });
  }
);

Matter.World.add(engine.world, [
  letterA,
  stack,
  ground,
  mouseConstraint,
  // ropeC,
  andrz,
  left_wall,
  rigth_wall,
  lid,
  cz,
  letterK,
  stack2,
  // marker,
  spacer,
  spacer2,
]);
Matter.Engine.run(engine);
Matter.Render.run(render);
