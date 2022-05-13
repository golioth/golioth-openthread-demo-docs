---
sidebar_position: 2
---

# Training Requirements

## Hardware requirements

This is a hardware centric training, so you will need to pre-purchase some hardware to properly follow along. 

### Border Router

This training is based around the Raspberry Pi as a Border Router. It will have an RCP plugged into it via a USB port. It also may be advantageous to have a monitor keyboard set up for this training for direct RPi access.

### RCP

We use [the Nordic Semiconductor nRF52840 Dongle](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dongle) as the RCP

### Thread Node

We use the [Laird BT510 multisensor](https://www.lairdconnect.com/iot-devices/iot-sensors/bt510-bluetooth-5-long-range-ip67-multi-sensor) as the node running OpenThread. We like it because of the onboard sensors, button, LED, and the ready-made case. We build the firmware using Zephyr, detailed in the "Zephyr" section. You will also need [a Laird programmer](https://www.lairdconnect.com/wireless-modules/programming-kits/usb-swd-programming-kit) if you'd like to use the BT510.

It is also possible to use the [nRF52840-DK](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dk) as a node, but you will need external sensors.

## Software requirements

