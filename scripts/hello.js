console.log("Hello from VTT Journal!")

Hooks.on("init", function() {
  console.log("VTT Journal: Initialized workflow")
});

Hooks.on("ready", function() {
  console.log("VTT Journal: Ready workflow")
});