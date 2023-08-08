import { Prop, Style } from "@/@types/data";

export const props: Prop[] = [
    {
        name: 'fluid',
        description: 'Fluid styled container',
        types: 'boolean',
        required: '-',
        default: 'false'
    }
]

export const variables: Style[] = [
    {
        name: '$container-gutter-x',
        description: 'Horizontal gutter for containers',
        default: '$gutter-x'
      },
      {
        name: '$container-gutter-y',
        description: 'Vertical gutter for containers',
        default: '$gutter-y'
      },
      {
        name: '$container-sm-width',
        description: 'Width of small container',
        default: '540px'
      },
      {
        name: '$container-md-width',
        description: 'Width of medium container',
        default: '720px'
      },
      {
        name: '$container-lg-width',
        description: 'Width of large container',
        default: '960px'
      },
      {
        name: '$container-xl-width',
        description: 'Width of extra-large container',
        default: '1140px'
      },
      {
        name: '$container-xxl-width',
        description: 'Width of double extra-large container',
        default: '1320px'
      }
]