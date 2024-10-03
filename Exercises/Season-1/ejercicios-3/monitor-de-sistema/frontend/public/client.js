const socket = io()

socket.on('systemData', (data) => {
    document.getElementById('platform').textContent     = `Platform: ${data.platform}`;
    document.getElementById('type-os').textContent      = `Type: ${data.type ? 'undifined' : 'No especifica'}`;
    document.getElementById('uptime').textContent       = `Uptime: ${data.uptime}`;
    document.getElementById('arquitecture').textContent = `Arquitecture: ${data.arch}`
    document.getElementById('cpu-model').textContent    = `CPU Model: ${data.cpumodel}`
    document.getElementById('cpuLoad').textContent      = `CPU Load: ${data.cpuLoad}`;
    document.getElementById('freeMemory').textContent   = `Free Memory: ${data.freeMemory / (1024 * 1024)} MB`;
    document.getElementById('totalMemory').textContent  = `Total Memory: ${data.totalMemory / (1024 * 1024)} MB`;
    document.getElementById('diskUsage').textContent    = `Disk Usage: ${data.diskUsage}%`;
    document.getElementById('ip-data').textContent      = `IP: ${data.ip}`;
})