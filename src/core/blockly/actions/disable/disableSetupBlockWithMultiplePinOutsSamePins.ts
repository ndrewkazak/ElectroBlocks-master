import type { BlockEvent } from "../../dto/event.type";
import { DisableBlock, ActionType } from "../actions";
import _ from "lodash";

/**
 * Disables blocks where both the same pins where selected in the block.
 */
export const disableSetupBlockWithMultiplePinOutsSamePins = (
  event: BlockEvent
): DisableBlock[] => {
  const { blocks } = event;

  return blocks
    .filter((b) => _.uniq(b.pins).length !== b.pins.length)
    .map((b) => {
      return {
        type: ActionType.DISABLE_BLOCK,
        warningText: "Блок 1 пинді 2 рет пайдалануда",
        blockId: b.id,
        stopCompiling: true,
      };
    });
};
