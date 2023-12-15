let canvas = document.getElementById('canvas');

        // create application
        let app = new pc.Application(canvas, {
            mouse: new pc.Mouse(canvas),
            touch: new pc.TouchDevice(canvas)
        });

        // set resizing rules
        app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
        app.setCanvasResolution(pc.RESOLUTION_AUTO);
        // handle window resize
        window.addEventListener("resize", function () {
            app.resizeCanvas(canvas.width, canvas.height);
        });

        // use device pixel ratio
        app.graphicsDevice.maxPixelRatio = window.devicePixelRatio;

        // start an application
        app.start();


        // create camera
        let cameraEntity = new pc.Entity();
        cameraEntity.addComponent("camera", {
            clearColor: new pc.Color(0.3, 0.3, 0.3)
        });
        app.root.addChild(cameraEntity);

        // create light
        let light = new pc.Entity();
        light.addComponent("light", {
            type: "spot",
            range: 30
        });
        light.translate(0,10,0);
        app.root.addChild(light);

        let SIZE = 8;

        // create floor plane
        let plane = new pc.Entity();
        plane.addComponent("model", {
            type: "plane"
        });
        plane.setLocalScale(SIZE * 2, 1, SIZE * 2);
        app.root.addChild(plane);

        // create a grid of cubes
        for (let x = 0; x < SIZE; x++) {
            for (let z = 0; z < SIZE; z++) {
                let cube = new pc.Entity();
                cube.addComponent("model", {
                    type: "box"
                });
                cube.setPosition(2 * x - SIZE + 1, 0.5, 2 * z - SIZE + 1);
                app.root.addChild(cube);
            }
        }


        // if XR is supported
        if (app.xr.supported) {
            // handle mouse / touch events
            let onTap = function (evt) {
                // if immersive VR supported
                if (app.xr.isAvailable(pc.XRTYPE_VR)) {
                    // start immersive VR session
                    cameraEntity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);
                }
                evt.event.preventDefault();
                evt.event.stopPropagation();
            };
            // attach mouse / touch events
            app.mouse.on("mousedown", onTap);
            app.touch.on("touchend", onTap);
        }