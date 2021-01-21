
const enum IrRemoteKeystudioButton {
    //% block="any"
    //% block.loc.fr="Tous"
    Any = -1,
    //% block="▲"
    Up = 0x62,
    //% block=" "
    Unused_2 = -2,
    //% block="◀"
    Left = 0x22,
    //% block="OK"
    Ok = 0x02,
    //% block="▶"
    Right = 0xc2,
    //% block=" "
    Unused_3 = -3,
    //% block="▼"
    Down = 0xa8,
    //% block=" "
    Unused_4 = -4,
    //% block="1"
    Number_1 = 0x68,
    //% block="2"
    Number_2 = 0x98,
    //% block="3"
    Number_3 = 0xb0,
    //% block="4"
    Number_4 = 0x30,
    //% block="5"
    Number_5 = 0x18,
    //% block="6"
    Number_6 = 0x7a,
    //% block="7"
    Number_7 = 0x10,
    //% block="8"
    Number_8 = 0x38,
    //% block="9"
    Number_9 = 0x5a,
    //% block="*"
    Star = 0x42,
    //% block="0"
    Number_0 = 0x4a,
    //% block="#"
    Hash = 0x52,
  }
  
  const enum IrRemoteCarMP3Button {
    //% block="CH-"
    CH_MINUS = 0xA2,
    //% block="CH"
    CH = 0x62,
    //% block="CH+"
    CH_PLUS = 0xE2,
  
    //% block="◀◀"
    PREV = 0x22,
    //% block="▶▶"
    NEXT = 0x2,
    //% block="▶||"
    PlayPause = 0xC2,
  
    //% block="Vol-"
    VOL_MINUS = 0xE0,
    //% block="Vol+"
    VOL_PLUS = 0xA8,
    //% block="EQ"
    EQ = 0x90,
  
    //% block="0"
    Number_0 = 0x68,
    //% block="100+"
    Number_100_PLUS = 0x98,
    //% block="200+"
    Number_200_PLUS = 0xB0,
  
    //% block="1"
    Number_1 = 0x30,
    //% block="2"
    Number_2 = 0x18,
    //% block="3"
    Number_3 = 0x7A,
  
    //% block="4"
    Number_4 = 0x10,
    //% block="5"
    Number_5 = 0x38,
    //% block="6"
    Number_6 = 0x5A,
  
    //% block="7"
    Number_7 = 0x42,
    //% block="8"
    Number_8 = 0x4A,
    //% block="9"
    Number_9 = 0x52,
  
    //% block="Any"
    //% block.loc.fr="Tous"
    Any = -1
  }
  
  //% color=#D919FF icon="\u23E9" block="IrRemote"
  //% category="IrRemote"
  namespace irremote {
  
    /**
     * Connects to the IR receiver module at the specified pin for Car MP3 remote.
     * @param pin IR receiver pin, eg: DigitalPin.P1
     */
    //% subcategory="Remote (Keystudio)"
    //% blockId="irremote_keystudio_connect_receiver"
    //% block="connect IR receiver at pin %pin for Keystudio remote"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.tooltips="false"
    //% weight=90
    export function keystudio_connectIrReceiver(
      pin: DigitalPin
    ): void {
        infrared.connectIrReceiver(pin, IrProtocol.Keyestudio);
    }
  
    /**
     * Do something when a specific button is pressed or released on the remote control.
     * @param button the button to be checked
     * @param action the trigger action
     * @param handler body code to run when the event is raised
     */
    //% subcategory="Remote (Keystudio)"
    //% blockId=irremote_keystudio_on_ir_button
    //% block="on IR button | %button | %action"
    //% button.fieldEditor="gridpicker"
    //% button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    //% weight=50
    export function keystudio_onIrButton(
      button: IrRemoteCarMP3Button,
      action: IrButtonAction,
      handler: () => void
    ) {
      infrared.onIrButton(button, action, handler);
    }
  
    /**
     * Connects to the IR receiver module at the specified pin for Car MP3 remote.
     * @param pin IR receiver pin, eg: DigitalPin.P1
     */
    //% subcategory="Remote (Car MP3)"
    //% blockId="irremote_mp3car_connect_receiver"
    //% block="connect IR receiver at pin %pin for Car MP3 remote"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.tooltips="false"
    //% weight=90
    export function carmp3_connectIrReceiver(
      pin: DigitalPin
    ): void {
        infrared.connectIrReceiver(pin, IrProtocol.NEC);
    }
  
    /**
     * Do something when a specific button is pressed or released on the remote control.
     * @param button the button to be checked
     * @param action the trigger action
     * @param handler body code to run when the event is raised
     */
    //% subcategory="Remote (Car MP3)"
    //% blockId=irremote_mp3car_on_ir_button
    //% block="on IR button | %button | %action"
    //% button.fieldEditor="gridpicker"
    //% button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    //% weight=50
    export function carmp3_onIrButton(
      button: IrRemoteCarMP3Button,
      action: IrButtonAction,
      handler: () => void
    ) {
      infrared.onIrButton(button, action, handler);
    }
  }