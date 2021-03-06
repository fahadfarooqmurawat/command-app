import { Dispatch, ForwardedRef, forwardRef, SetStateAction } from "react";
import { Command } from "../../@types/command.type";
import { NewCommand } from "../../@types/new-command.type";
import { TextBox } from "../text-box/text-box";
import { VerticalSpacer } from "../vertical-spacer/vertical-spacer";

type Props = {
  command: Command | NewCommand;
  setCommand:
    | Dispatch<SetStateAction<Command>>
    | Dispatch<SetStateAction<NewCommand>>;
};

export const CommandFormElements = forwardRef(
  ({ command, setCommand }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <form>
        <label htmlFor={"command"}>Command:</label>
        <br />
        <TextBox
          ref={ref}
          id={"command"}
          type={"text"}
          value={command.command}
          onChange={(e) =>
            setCommand((command: any) => ({
              ...command,
              command: e.target.value,
            }))
          }
        />
        <br />
        <VerticalSpacer space={"20px"} />
        <label htmlFor={"description"}>Description:</label>
        <br />
        <TextBox
          id={"description"}
          type={"text"}
          value={command.description}
          onChange={(e) =>
            setCommand((command: any) => ({
              ...command,
              description: e.target.value,
            }))
          }
        />
      </form>
    );
  }
);
