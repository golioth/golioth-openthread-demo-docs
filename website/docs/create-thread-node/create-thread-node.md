---
sidebar_position: 1
---

# Create a node on your Thread Network

Now that we have set up an OTBR in the previous step, we want to build a Node that will begin communicating to the wider internet using the OTBR. The node will be built using Zephyr and will have the OpenThread stack compiled into it. Golioth has a starter project on GitHub that will be used throughout this section of the tutorial. This has all of the Golioth required elements to get a Node connected to the Golioth Cloud and transmitting data back and forth. This code also includes a shell to interact directly with your device and program in credentials for both connecting to your OTBR and validating onto the Golioth netwwork. 

## Step 1: Obtain supplies

* **Option 1**
  * nRF52840-DK
* **Option 2**
  * BT510 from Laird
  * A separate programmer/debugger board

### Comparing options

In **Option 1**, the programmer and debugger are built into the nRF52840-DK, so no external one is required (lower cost, lower complexity). However, the nRF52840-DK does not have any sensors onboard, so we will only be able to send data like the core temperature of the silicon chip. Adding external sensors is outside the scope of this tutorial, but is definitely possible later. 

For **Option 2**, we chose a board that is already in a case and could easily be deployed in the field. It is IP67, which means it will stand up to the elements. It also has sensors onboard:
* Temperature
* Accelerometer
* Magnetic detection

There are also interactive elements on this board, including:

* A push button that can be accessed from outside the package
* A bi-color user LED

The downside to the BT510 is that the board only has the chip on-board, so it requires an additional programmer in order to interact with the chip. There is a serial port interface built into this programmer as well. 

## Step 2: Program your device

If you have not yet done so, go through the [Golioth Getting Started Guide](https://docs.golioth.io/getting-started), in order to get credentials on the Golioth Cloud.