import * as presence from "@zag-js/presence";
import { useMachine, normalizeProps } from "@zag-js/react";

export function Presence(
  props: React.ComponentProps<"div"> & {
    present: boolean;
    unmountOnExit?: boolean;
    onExitComplete?: () => void;
  }
) {
  const { unmountOnExit, present, onExitComplete, ...rest } = props;

  const service = useMachine(presence.machine, {
    present,
    onExitComplete,
  });

  const api = presence.connect(service, normalizeProps);

  if (!api.present && unmountOnExit) return null;

  return (
    <div
      hidden={!api.present}
      data-scope="presence"
      data-state={api.skip ? undefined : present ? "open" : "closed"}
      ref={api.setNode}
      {...rest}
    />
  );
}
