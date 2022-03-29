import Component from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Component',
  component: Component
} as Meta

const Template: Story = (args) => <Component {...args} />

export const Default = Template.bind({})
