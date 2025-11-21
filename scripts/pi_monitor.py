#!/usr/bin/env python3
"""
Raspberry Pi System Monitor
Collects system stats and writes to JSON file for web display
"""

import json
import subprocess
import psutil
import os
from datetime import datetime

def get_cpu_temp():
    """Get CPU temperature"""
    try:
        temp = subprocess.check_output(['vcgencmd', 'measure_temp']).decode()
        return temp.replace('temp=', '').replace("'C\n", '°C')
    except:
        # Fallback for systems without vcgencmd
        try:
            with open('/sys/class/thermal/thermal_zone0/temp', 'r') as f:
                temp = float(f.read()) / 1000.0
                return f"{temp:.1f}°C"
        except:
            return "N/A"

def get_cpu_usage():
    """Get CPU usage percentage"""
    return psutil.cpu_percent(interval=1)

def get_memory_info():
    """Get memory usage"""
    mem = psutil.virtual_memory()
    return {
        'total': f"{mem.total / (1024**3):.1f} GB",
        'used': f"{mem.used / (1024**3):.1f} GB",
        'percent': mem.percent
    }

def get_disk_usage():
    """Get disk usage for root partition"""
    disk = psutil.disk_usage('/')
    return {
        'total': f"{disk.total / (1024**3):.1f} GB",
        'used': f"{disk.used / (1024**3):.1f} GB",
        'free': f"{disk.free / (1024**3):.1f} GB",
        'percent': disk.percent
    }

def get_network_info():
    """Get network information"""
    try:
        # Get IP address
        hostname = subprocess.check_output(['hostname', '-I']).decode().strip()
        # Get network stats
        net_io = psutil.net_io_counters()
        return {
            'hostname': hostname.split()[0] if hostname else 'N/A',
            'bytes_sent': f"{net_io.bytes_sent / (1024**3):.2f} GB",
            'bytes_recv': f"{net_io.bytes_recv / (1024**3):.2f} GB"
        }
    except:
        return {
            'hostname': 'N/A',
            'bytes_sent': 'N/A',
            'bytes_recv': 'N/A'
        }

def get_uptime():
    """Get system uptime"""
    try:
        uptime_seconds = subprocess.check_output(['cat', '/proc/uptime']).decode().split()[0]
        uptime_seconds = int(float(uptime_seconds))
        days = uptime_seconds // 86400
        hours = (uptime_seconds % 86400) // 3600
        minutes = (uptime_seconds % 3600) // 60
        return f"{days}d {hours}h {minutes}m"
    except:
        return "N/A"

def collect_stats():
    """Collect all system stats"""
    return {
        'timestamp': datetime.now().isoformat(),
        'cpu': {
            'usage': get_cpu_usage(),
            'temp': get_cpu_temp()
        },
        'memory': get_memory_info(),
        'disk': get_disk_usage(),
        'network': get_network_info(),
        'uptime': get_uptime()
    }

def main():
    """Main function"""
    # Get the script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_file = os.path.join(script_dir, 'pi_stats.json')
    
    # Collect and save stats
    stats = collect_stats()
    
    with open(output_file, 'w') as f:
        json.dump(stats, f, indent=2)
    
    print(f"Stats updated at {stats['timestamp']}")
    print(f"CPU: {stats['cpu']['usage']}% | Temp: {stats['cpu']['temp']}")
    print(f"Memory: {stats['memory']['used']} / {stats['memory']['total']} ({stats['memory']['percent']}%)")
    print(f"Disk: {stats['disk']['used']} / {stats['disk']['total']} ({stats['disk']['percent']}%)")

if __name__ == '__main__':
    main()
