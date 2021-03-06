import Main from '.'
import { Story, Meta } from '@storybook/react'
import { ComponentProps } from 'styled-components/node_modules/@types/react'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Nextjs Boilerplate',
    description: 'TypeScript, ReactJS, NextJS and Styled Components'
  }
} as Meta

const Template: Story<ComponentProps<typeof Main>> = (args) => (
  <Main {...args} />
)

export const Basic = Template.bind({})

export const Default = Template.bind({})
