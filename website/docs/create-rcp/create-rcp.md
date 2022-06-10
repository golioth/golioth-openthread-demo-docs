---
sidebar_position: 1
---

# Create an RCP USB dongle

The RCP dongle uses a [$10 nRF52 Dongle from Nordic Semiconductor](https://www.digikey.com/en/products/detail/nordic-semiconductor-asa/NRF52840-DONGLE/9491124). Programming this image to the nRF52840 on board turns the mainchipset into a passthrough "modem" for Thread networks, using the 802.15.4 stack from Nordic Semiconductor and the OpenThread project. 

## Step 1: Obtaining the RCP Joiner binary

### Binary download (Preferred)

We recommend you download the binary below and use that to program the nRF52 dongle. There isn't much value in compiling your own binary image for the RCP dongle. 

[Download `ot-rcp.hex`](binaries/ot-rcp.hex) (updated 28APR2022)

*NOTE: you may need to rename this file `ot-rcp.hex` after download.*

### Build your own

If you would still like to compile your own version of the RCP firmware to load onto the nRF52 dongle, we recommend you follow the directions on the OpenThread site. 

["Set up the RCP Joiner" on OpenThread.io](https://openthread.io/codelabs/openthread-hardware#3)

That tutorial site shows how to create a Thread network without a Border Router, which is out of scope for this demo. We recommend you follow the RCP creation directions and then come back here.

*NOTE: You will need the ARM GNU toolchain as explained in ["Step 2: Getting Started" guide](https://openthread.io/codelabs/openthread-hardware#0) on that page.* 

## Step 2: Programming to the dongle


### Using the built-in bootloader (Preferred)

Directions borrowed from [Zephyr site explaining how to program the dongle](https://docs.zephyrproject.org/3.0.0/boards/arm/nrf52840dongle_nrf52840/doc/index.html)

You will need:
* `nrfutil` installed on your machine
  * To install using PyPi, use the command `pip install nrfutil`

```
nrfutil pkg generate --hw-version 52 --sd-req=0x00 --application ot-rcp.hex --application-version 1 rcp-dongle.zip
nrfutil dfu usb-serial -pkg rcp-dongle.zip -p /dev/ttyACM0
```

Notes

* The USB port address might be different on your machine
* 

### Using a JLink

You will need:
* JLink programmer (nRF52840 can act as programmer)
* 10 pin tag connect cable

## Step 3: Testing the RCP