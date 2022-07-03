---
sidebar_position: 1
---

# Thread Node Code review

So what is actually happening on the node? You have this code that is running Zephyr, Golioth, OpenThread, but what is it actally doing?

Below we will be referring to the BT510, as that is the board that has built-in sensors. 

## Setup code

Most of the exciting code is happening in RTOS workers. This allows the Zephyr scheduler to prioritize and take over running the code. From our perspective it mostly looks like a function but uses Zephyr primatives to work within the RTOS. 

In the main part of the loop we are doing hardware setup first:

### Hardware configuration

* Setting up the button
* Setting up LEDs
* Setting up sensors
  * Temperature
  * IMU
  * Magnetic

### OpenThread configuration

Then we are configuring "Workers" which are taking action on connecting or disconnecting from the Thread network. 

There are also callbacks for when the state of the network changes. This will actuate LEDs.

### Timer

Finally, we kick off a timer with a configurable interval (default 60 seconds) so that the node will report its sensor status without any user input. 

## Activating Readings

We can get readings from the sensors in two ways:

### Button Press

If a user actuates the button on the BT510 (underneath the vinyl), it will initiate a reading. This happens in the `on_button_changed` function. At the end of this function, it kicks off the `my_sensor_work` function, where all the readings happen. 

### Timeout

If the configurable timer length gets to the end of its period, it does two things:
* Updates the LightDB state variable that keeps track of how many updates there have been by the timer (this acts like a counter of the number of intervals passed)
* Calls the `my_sensor_work` function.

## Taking a reading and transmitting

Once the `my_sensor_work` function is called, it sets an LED and kicks off the `my_sensorstream_work` function. Inside of that function we:
* Take a reading from each sensor
  * Temperature
  * IMU
  * Magnetic
* Convert each of these to a string
* Concatenate them together in JSON format
* Transmit the entire string to LightDB Stream