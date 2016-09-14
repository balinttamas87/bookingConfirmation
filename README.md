# bookingConfirmation

This single page website was created to automate filling out the booking confirmation email for incoming deliveries.
It updates all the details except the time slot, creates a QR code and copies the 2D barcode and the text with the 
updated details to the clipboard to be pasted in MS Outlook.

The general booking reference format consists of:

1. The first number indicates a specific warehouse
2. The next 3 digits after the first dash symbol indicate the delivery number for a particular day
3. The last 6 digits are the date of the delivery backwards

Example for booking reference: 5-001-160913.
