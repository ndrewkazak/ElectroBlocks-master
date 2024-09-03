import { findFieldValue } from "../../core/blockly/helpers/block-data.helper";
import { ArduinoComponentType } from "../../core/frames/arduino.frame";
import type { BlockToFrameTransformer } from "../../core/frames/transformer/block-to-frame.transformer";
import { getInputValue } from "../../core/frames/transformer/block-to-value.factories";
import {
  arduinoFrameByComponent,
  findComponent,
  getDefaultIndexValue,
} from "../../core/frames/transformer/frame-transformer.helpers";
import type { FastLEDState } from "./state";
import _ from "lodash";
import { hexToRgb } from "../../core/blockly/helpers/color.helper";

export const fastLEDSetup: BlockToFrameTransformer = (
  blocks,
  block,
  variables,
  timeline,
  previousState
) => {
  const numberOfLeds = +findFieldValue(block, "NUMBER_LEDS");

  const ledStripState: FastLEDState = {
    pins: block.pins,
    type: ArduinoComponentType.FASTLED_STRIP,
    numberOfLeds,
    preShowLEDs: _.range(0, numberOfLeds).map((i) => {
      return {
        position: i,
        color: {
          red: 0,
          green: 0,
          blue: 0,
        },
      };
    }),
    fastLEDs: _.range(0, numberOfLeds).map((i) => {
      return {
        position: i,
        color: {
          red: 0,
          green: 0,
          blue: 0,
        },
      };
    }),
  };
  return [
    arduinoFrameByComponent(
      block.id,
      block.blockName,
      timeline,
      ledStripState,
      "Жарықдиодты жарық жолағын орнату.",
      previousState
    ),
  ];
};

export const showAllColors: BlockToFrameTransformer = (
  blocks,
  block,
  variables,
  timeline,
  previousState
) => {
  const fastLED = findComponent<FastLEDState>(
    previousState,
    ArduinoComponentType.FASTLED_STRIP
  );
  const newFastLeds = fastLED.preShowLEDs;
  fastLED.fastLEDs = newFastLeds;
  const newComponent = _.cloneDeep(fastLED);

  return [
    arduinoFrameByComponent(
      block.id,
      block.blockName,
      timeline,
      newComponent,
      `Жарық жолағындағы барлық rgb жарық диодтарын көрсету.`,
      previousState
    ),
  ];
};

export const setAllColors: BlockToFrameTransformer = (
  blocks,
  block,
  variables,
  timeline,
  previousState
) => {
  const fastLED = findComponent<FastLEDState>(
    previousState,
    ArduinoComponentType.FASTLED_STRIP
  );

  const leds = [];
  for (let position = 1; position <= fastLED.numberOfLeds; position += 1) {
    const hexValue = findFieldValue(block, getRowColId(position));
    const color = hexToRgb(hexValue);
    leds.push({ position: position - 1, color });
  }
  fastLED.preShowLEDs = leds;
  const newComponent = _.cloneDeep(fastLED);

  return [
    arduinoFrameByComponent(
      block.id,
      block.blockName,
      timeline,
      newComponent,
      `Rgb жарықдиодты жолағындағы барлық түстерді орнату.`,
      previousState
    ),
  ];
};

const getRowColId = (position: number): string => {
  const row = Math.ceil(position / 12);

  return `${row}-${position - (row - 1) * 12}`;
};

export const setFastLEDColor: BlockToFrameTransformer = (
  blocks,
  block,
  variables,
  timeline,
  previousState
) => {
  const fastLED = findComponent<FastLEDState>(
    previousState,
    ArduinoComponentType.FASTLED_STRIP
  );
  const color = getInputValue(
    blocks,
    block,
    variables,
    timeline,
    "COLOR",
    { red: 0, green: 0, blue: 0 },
    previousState
  );
  const position = getDefaultIndexValue(
    1,
    Infinity,
    getInputValue(
      blocks,
      block,
      variables,
      timeline,
      "POSITION",
      1,
      previousState
    )
  );
  fastLED.preShowLEDs[position - 1] = { position: position - 1, color };
  const newComponent = _.cloneDeep(fastLED);

  return [
    arduinoFrameByComponent(
      block.id,
      block.blockName,
      timeline,
      newComponent,
      `Жарық жолағындағы жарық диодты ${position} түсті етіп орнату (қызыл=${color.red}, жасыл=${color.green}, көк=${color.blue})`,
      previousState
    ),
  ];
};
