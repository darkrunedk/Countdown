# Countdown
 A native javascript countdown component

 ## How do I use it?
 You can use the component by using the the following HTML tag
 `<date-countdown></date-countdown>`

 ## How do I customize it?
 You can currently customize it a little bit using attributes.

 The following attributes can be used:
 
 | Attribute name | Description | Example |
 | ----------- | ----------- | ----------- |
 | date | The target date for the countdown | "2021-12-05" or "2021-12-05T00:40:00" |
 | countdownHeader | Used to set a header for the countdown | Released in |
 | spacing | Used to make spacing between the days, hours, minutes and seconds elements | any integer in pixels (default 5) |
 | completionText | The text being displayed when the target date is being hit | "Released!" |

 You can look in index.html if you want an example.

 You can also style different things with css variables:

 | variable name | Description | Default |
 | ----------- | ----------- | ----------- |
 | --countdown-font-size | Sets the font size of the countdown text (days, hours, minutes and seconds text) | 1.25em |
 | --countdown-header-size | Sets the font size of the header for the countdown | 1.4em |

 ### Stuff I want to do:

 - [ ] Move the spacing into a css variable (to streamline the styling of the component)
 - [ ] Bug: Fix the 1 second offset (it's 1 second behind the device clock at the moment)