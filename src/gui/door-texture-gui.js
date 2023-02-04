import * as THREE from "three";

export const createDoorGUI = (gui, doorColorTexture) => {
  const folderDoor = gui.addFolder("Transform Door texture");

  folderDoor
    .add(doorColorTexture.repeat, "x")
    .min(0)
    .max(5)
    .step(1)
    .name("repeat texture x");
  folderDoor
    .add(doorColorTexture.repeat, "y")
    .min(0)
    .max(5)
    .step(1)
    .name("repeat texture y");
  folderDoor
    .add(doorColorTexture.offset, "x")
    .min(0)
    .max(1)
    .step(0.01)
    .name("offset texture x");
  folderDoor
    .add(doorColorTexture.offset, "y")
    .min(0)
    .max(1)
    .step(0.01)
    .name("offset texture y");
  folderDoor
    .add(doorColorTexture.center, "x")
    .min(0)
    .max(1)
    .step(0.01)
    .name("center texture x");
  folderDoor
    .add(doorColorTexture.center, "y")
    .min(0)
    .max(1)
    .step(0.01)
    .name("center texture y");
  folderDoor
    .add(doorColorTexture, "rotation")
    .min(0)
    .max(Math.PI * 2)
    .step(0.01)
    .name("rotation texture");

  const wraps = {
    default: THREE.ClampToEdgeWrapping,
    repeat: THREE.RepeatWrapping,
    "mirror repeat": THREE.MirroredRepeatWrapping,
  };

  const params = {
    wrap: THREE.ClampToEdgeWrapping,
  };

  folderDoor
    .add(params, "wrap", wraps)
    .name("wrapping texture")
    .onChange((wrap) => {
      doorColorTexture.wrapS = wrap;
      doorColorTexture.wrapT = wrap;
      // https://threejs.org/docs/#manual/en/introduction/How-to-update-things
      doorColorTexture.needsUpdate = true;
    });
};
