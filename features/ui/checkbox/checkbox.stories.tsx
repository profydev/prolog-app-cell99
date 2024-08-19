/* eslint-disable @next/next/no-img-element */
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { CheckBox, CheckBoxSize } from "./checkbox";

export default {
  title: "UI/CheckBox",
  component: CheckBox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof CheckBox>;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    children: "Label",
    checked: false,
    indeterminate: false,
    size: CheckBoxSize.Medium,
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(e) => updateArgs({ checked: e.target.checked })}
      />
    );
  },
};

export const Uncontrolled: Story = {
  args: { children: "Label", indeterminate: false },
};
