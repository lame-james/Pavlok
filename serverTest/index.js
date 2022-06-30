// add express and pavlok
const express = require("express");
const app = express();
const pavlok = require("pavlok");

// pavlok.init(
//   "d7806120537fc191a030044af834a8a853df53fff408a7cf73072e0db987d1b4",
//   "2630d7fc4dca3e765151b7371a47b3e4b32a66713d568aefb523c32035ae403d"
// );
// pavlok.login(function (result, code) {
//   if (result) {
//     console.log("Code is " + code);
//     pavlok.vibrate(); // or you can call other methods like beep() or zap()
//   }
// });

pavlok.init(
  "d7806120537fc191a030044af834a8a853df53fff408a7cf73072e0db987d1b4",
  "2630d7fc4dca3e765151b7371a47b3e4b32a66713d568aefb523c32035ae403d",
  {
    verbose: true,
    app: app, //Express server
    message: "Hello from the server example!", //Default message for all stimuli
    callbackUrl: "http://localhost:3000/auth/pavlok/result",
    callbackUrlPath: "/auth/pavlok/result",
    successUrl: "/api/v1/auth/success", //Where to redirect when the token has been saved to session
    errorUrl: "/api/v1/auth/success", //Where to redirect when the token couldn't be gotten/saved
  }
);

// declare auth route
app.get("/api/v1/auth/login", (req, res) => {
  pavlok.auth(req, res);
});

// declare root and zap route
app.get("/", (req, res) => {
  res.status(200).send("logged in");
});

app.get("/api/v1/device/zap", function (req, res) {
  pavlok.zap({
    request: req,
  });
  console.log("Zapped!");
  res.json({ status: "zapped" });
});

app.get("/api/v1/device/beep", function (req, res) {
  pavlok.beep({
    request: req,
  });
  console.log("Beep!");
  res.json({ status: "beeped" });
});

app.get("/api/v1/device/vibrate", function (req, res) {
  pavlok.vibrate({
    request: req,
  });
  console.log("Vibrate!");
  res.json({ status: "vibrated" });
});

// Start listening
app.listen(3000, (err) => {
  if (err) {
    console.log("Failed to start the server.");
    console.log(err);
  } else {
    console.log("Server running on port 3000");
  }
});
