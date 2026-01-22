const express = require("express");
const path = require("path");
const app = express();

// Serve other files normally
app.use(express.static("public"));

const PORT = 5500;

// Serve all files in the folder
app.use(express.static(path.join(__dirname)));

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log("To access from your local network:");
    console.log(`http://${getLocalIp()}:${PORT}`);
});

// 404 handler (this MUST be last)
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/404.html");
});


// Helper: Finds your LAN IP
function getLocalIp() {
    const os = require("os");
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === "IPv4" && !iface.internal) {
                return iface.address;
            }
        }
    }
}
