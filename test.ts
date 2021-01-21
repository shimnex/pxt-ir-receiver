/**
 * IR tests
 */

infrared.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC);
infrared.onIrButton(-1, IrButtonAction.Pressed, () => {});
infrared.onIrButton(-1, IrButtonAction.Released, () => {});
infrared.onIrDatagram(() => {});
const received: boolean = infrared.wasIrDataReceived();
const button: number = infrared.irButton();
const datagram: string = infrared.irDatagram();
