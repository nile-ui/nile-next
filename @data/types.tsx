import { Text, Tooltip } from '@nile-ui/nile-ui'

export const NileUI = () => {
  return (
    <Tooltip content='primary, secondary, success, warning, info, error, dark'>
      <Text underline>NileColor</Text>
    </Tooltip>
  )
}

export const NileSize = () => {
  return (
    <Tooltip content='mini, sm, md, lg, xl, xxl'>
      <Text underline>NileSize</Text>
    </Tooltip>
  )
}
