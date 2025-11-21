import AddIcon from "@/assets/icons/AddIcon";
import TrashIcon from "@/assets/icons/TrashIcon";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./input-group";

const Counter = () => {
  return (
    <InputGroup>
      <InputGroupInput value={0} className="text-center" />
      <InputGroupAddon align="inline-start">
        <InputGroupButton variant={"secondary"} title="Copy" size="icon-sm">
          <TrashIcon />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant={"secondary"} title="Copy" size="icon-sm">
          <AddIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Counter;
