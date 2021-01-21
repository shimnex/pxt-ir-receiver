/**
 * IR tests
 */

makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC);
makerbit.onIrButton(-1, IrButtonAction.Pressed, () => {});
makerbit.onIrButton(-1, IrButtonAction.Released, () => {});
makerbit.onIrDatagram(() => {});
const received: boolean = makerbit.wasIrDataReceived();
const button: number = makerbit.irButton();
const datagram: string = makerbit.irDatagram();
const buttonCode: number = makerbit.irButtonCode(IrRemoteKeystudioButton.Number_9);
