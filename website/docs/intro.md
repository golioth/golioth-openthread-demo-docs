---
sidebar_position: 1
---

# Golioth Thread Demo Overview

## What is this Demo all about?

This is a place where you're going to learn about Golioth features and how to create a network of Thread devices by playing with hardware. 

### System diagram

![Thread_System_Diagram](Thread_system_Diagram.png)

## What is Thread?

Thread (and the OpenThread implementation we are using here) is a networking protocol built on top of 802.15.4. It handles the network setup and meshing of small devices using 2.4 GHz radios. Once the network is set up, each device on the mesh network will have it's own IPv6 address and be speaking using CoAP (a transport layer) over UDP. 

Because Golioth has CoAP-based API endpoints on the web, and we can now talk directly to the IPv6 addressed devices, it's possible to use the Golioth console as a management platform for Thread based devices!

### High Level Video overview

[Smart Home Protocols](https://www.youtube.com/channel/UCrVLgIniVg6jW38uVqDRIiQ) made this video showcasing how Thread works, especially in a consumer setting

<iframe width="560" height="315" src="https://www.youtube.com/embed/0JC4tNe0OS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How can you use this material after training is over?

Developers who successfully complete this training should feel confident that they will be able to program and deploy a simple Threaad based IoT system to the field in their application.

## What is Zephyr RTOS? Why are we learning it?

[Zephyr](https://zephyrproject.org/) is an open source Real Time Operating System (RTOS) with wide support among industry leading chip vendors. At Golioth, we build [the Golioth Zephyr SDK](https://github.com/golioth/golioth-zephyr-sdk) on top of the Zephyr SDK in order to take advantage of the wide hardware support. What's amazing about the project is that you can switch between different hardware platforms with a command line switch and a file that tells the application which pins are assigned to which function.

Golioth lives at the top of the Zephyr stack, meaning that we take advantage of all of the networking capabilities built into Zephyr. When Golioth needs to talk to the internet, it simply communicates with the networking layer's APIs. From this perspective, we can switch between Cellular, WiFi, Thread, and Ethernet implementations easily. In the future, we hope to also tap into more "hub and spoke" model devices such as LoRa and Bluetooth as well. The main thing for you to know, as the Developer, is that you have maximum flexibility when trying out or deploying new systems.
