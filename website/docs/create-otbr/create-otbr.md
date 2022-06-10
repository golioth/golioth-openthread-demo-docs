---
sidebar_position: 1
---

# Create an OpenThread Border Router

The OpenThread Border Router (OTBR) is a solution to get your packets from your Thread device out to the wider internet. It handles processing all of the incoming 802.15.4 traffic by utilizing the Radio Co-processor (RCP) as a modem and then forwarding packets along. It does the same in the other direction when an inbound packet is being directed towards an IPv6 based Thread device. The OTBR should be completely invisible to Thread Devices, much like a WiFi router is in a home or corporate network. 

## Step 1: Gather supplies

* Raspberry Pi
  * You will need a Raspberry Pi to be able to utilize the RCP via a USB port and then process all packets. 
  * We have tested this on the Raspberry Pi 3 and 4. See the additional directions below for the smaller RPi Zero 2W.
* MicroSD Card 
  * 8 GB Minimum
* RCP 
  * [See the previous page](create-rcp) for creating an RCP on an nRF52840 Dongle
* Network connection
  * We have tested the internet connection for the Raspberry Pi through WiFi and Ethernet, both should be a seamless connection. 

## Step 2: Raspberry Pi Initial Setup

The directions below were derived from [the Codelabs OpenThread directions for the Raspberry Pi](https://openthread.io/guides/border-router/raspberry-pi). We are replicating them here to reduce the directions down to the absolutely necessary steps to replicate our setup. 

We recommend using [the "Raspberry Pi OS with desktop" downloaded from the official repo page](https://www.raspberrypi.com/software/operating-systems/), as it allows you to showcase the OTBR web interface directly from your Raspberry Pi. We do this on [the Golioth Red Demo at conferences](https://blog.golioth.io/golioth-showcase-at-zds/) with a built-in screen. It is very useful to be able to directly navigate to the web browser on a monitor and commission the network. 

Burn the downloaded image to an SD card on your computer: 

* [Linux](https://www.raspberrypi.org/documentation/installation/installing-images/linux.md)
* [Mac OS](https://www.raspberrypi.org/documentation/installation/installing-images/mac.md)
* [Windows](https://www.raspberrypi.org/documentation/installation/installing-images/windows.md)

We recommend plugging an HDMI cable and USB Keyboard/mouse into your computer during first boot. 

## Step 3: Installing Daemon

From a terminal on your Raspberry Pi, clone the OTBR repository and run the install script:

```
git clone https://github.com/openthread/ot-br-posix
cd ot-br-posix
./script/bootstrap
```

This will download dependencies in Linux.

Next, choose if you want to install the `otbr-agent` using Ethernet or Wi-Fi (only choose one).

```
INFRA_IF_NAME=eth0 ./script/setup       # Ethernet
INFRA_IF_NAME=wlan0 ./script/setup      # Wi-Fi
```

The script will install all of the elements to the RPi.

## Step 4: Plug in the RCP

Check the settings on the `otbr-agent`

```
cat /etc/default/otbr-agent
```

We expect your RCP dongle to be at `/dev/ttyACM0`. If the output from the above command doesn't show that address, [follow the directions on the OpenThread page](https://openthread.io/guides/border-router/build#attach-and-configure-rcp-device)

## Step 5: Configure IPv6 to IPv4 translation

A critical step for most OTBR setups is to translate between IPv6 addresses and IPv4 addresses. Unless your RPi is commissioned with an IPv6 address on your home or work network (not common), you will need to complete this step. 

The service that does the NAT64 translation is called `tayga`. Try installing this on your machine, if you already have it installed, running this command will not be a problem:

```
sudo apt install tayga
```

Once you have tayga avilable on your computer, you need to ensure it is configured to properly route packets. 

Change tayga config file `/etc/tayga.conf`

```
tun-device nat64
ipv4-addr 192.168.255.1
ipv6-addr fdaa:bb:1::1
prefix 64:ff9b::/96
dynamic-pool 192.168.255.0/24
data-dir /var/spool/tayga
```

Finally, we want to add a route to `tayga` so that it knows how to route packets out to the internet. 

```
sudo ot-ctl route add 64:ff9b::/96 s med
sudo ot-ctl netdata register
```

## Step 6: Testing OTBR