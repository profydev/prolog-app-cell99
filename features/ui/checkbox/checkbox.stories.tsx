/* eslint-disable @next/next/no-img-element */
import { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "./checkbox";

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
  args: { children: "Label" },
};
