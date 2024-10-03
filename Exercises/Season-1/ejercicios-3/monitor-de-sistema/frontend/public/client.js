const socket = io()

socket.on('systemData', (data) => {
    document.getElementById('platform').textContent     = `Platform: ${data.platform}`
    document.getElementById('cpuLoad').textContent      = `CPU Load: ${data.cpuLoad}`;
    document.getElementById('freeMemory').textContent   = `Free Memory: ${data.freeMemory / (1024 * 1024)} MB`;
    document.getElementById('totalMemory').textContent  = `Total Memory: ${data.totalMemory / (1024 * 1024)} MB`;
    document.getElementById('diskUsage').textContent    = `Disk Usage: ${data.diskUsage}%`;
})