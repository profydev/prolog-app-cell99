/* eslint-disable @next/next/no-img-element */
import { Meta, StoryObj } from "@storybook/react";
import { CustomSelect, SelectChild } from "./select";

const meta: Meta<typeof CustomSelect> = {
  title: "UI/CustomSelect",
  component: CustomSelect,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isMulti: {
      control: "boolean",
      description: "Enable multi-select functionality",
    },
  },
} as Meta<typeof CustomSelect>;

export default meta;

type Story = StoryObj<typeof CustomSelect>;

export const Default: Story = {
  args: {
    isMulti: false,
  },
  render: (args) => (
    <CustomSelect {...args}>
      <SelectChild value="option1" hint="This is option 1">
        Option 1
      </SelectChild>
      <SelectChild value="option2" hint="This is option 2">
        Option 2
      </SelectChild>
      <SelectChild value="option3" hint="This is option 3">
        Option 4
      </SelectChild>
    </CustomSelect>
  ),
};

export const MultiSelect: Story = {
  args: {
    isMulti: true,
  },
  render: (args) => (
    <CustomSelect {...args}>
      <SelectChild value="option1" hint="Hint for Option 1">
        Option 1
      </SelectChild>
      <SelectChild value="option2" hint="Hint for Option 2">
        Option 2
      </SelectChild>
      <SelectChild value="option3" hint="Hint for Option 3">
        Option 3
      </SelectChild>
      <SelectChild value="option4" hint="Hint for Option 4">
        Option 4
      </SelectChild>
      <SelectChild value="option5" hint="Hint for Option 5">
        Option 5
      </SelectChild>
    </CustomSelect>
  ),
};
