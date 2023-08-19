import { Prop, Style } from "@/@types/data"
import { Tooltip } from "@nile-ui/nile-ui"
import { NileSize, NileUI } from "./types"

export const props: Prop[] = [
    {
        name: 'children',
        description: 'Child elements for the button',
        types: 'ReactNode',
        required: 'Yes',
        default: '-'
    },
    {
        name: 'color',
        description: 'Color of the button',
        types: <NileUI />,
        required: 'No',
        default: 'undefined'
    },
    {
        name: 'size',
        description: 'Size of the button',
        types: <NileSize />,
        required: 'No',
        default: 'md'
    },
    {
        name: 'flat',
        description: 'Flat style for the button',
        types: 'boolean',
        required: 'No',
        default: 'false'
    },
    {
        name: 'bordered',
        description: 'Bordered style for the button',
        types: 'boolean',
        required: 'No',
        default: 'false'
    },
    {
        name: 'square',
        description: 'Square style for the button',
        types: 'boolean',
        required: 'No',
        default: 'false'
    },
    {
        name: 'pill',
        description: 'Pill style for the button',
        types: 'boolean',
        required: 'No',
        default: 'false'
    },
    {
        name: 'circle',
        description: 'Circle style for the button',
        types: 'boolean',
        required: 'No',
        default: 'false'
    },
    {
        name: 'icon',
        description: 'Icon style for the button',
        types: 'boolean',
        required: 'No',
        default: 'false'
    },
    {
        name: 'block',
        description: 'Block style for the button',
        types: 'boolean',
        required: 'No',
        default: 'false'
    },
    {
        name: 'link',
        description: 'Link style for the button',
        types: 'boolean',
        required: 'No',
        default: 'false'
    },
    {
        name: 'floating',
        description: 'Floating style for the button',
        types: 'boolean',
        required: 'No',
        default: 'false'
    },
    {
        name: 'noFloat',
        description: 'Disable floating animation for the button',
        types: 'boolean',
        required: 'No',
        default: 'false'
    },
    {
        name: 'loading',
        description: 'Loading animation for the button',
        types: 'boolean',
        required: 'No',
        default: 'false'
    },
    {
        name: 'disabled',
        description: 'Disable button',
        types: 'boolean',
        required: 'No',
        default: 'false'
    },
]



export const variables: Style[] = [
    {
        name: '$button-color',
        description: 'Default font color for the button when no color provided',
        default: '$darkestGray'
    },
    {
        name: '$button-background-color',
        description: 'Default background color for the button when no color provided',
        default: '$white'
    },
    {
        name: '$button-border-width',
        description: 'Default border width for the button',
        default: '2px'
    },
    {
        name: '$button-padding',
        description: 'Default padding for the button',
        default: '6px 10px'
    },
    {
        name: '$button-font-size',
        description: 'Default font size for the button',
        default: '0.8rem'
    },
    {
        name: '$button-border-radius',
        description: 'Default border radius for the button',
        default: '12px'
    },
    {
        name: '$disabled-button-opacity',
        description: 'Border opacity when disabled prop is set true',
        default: '0.5'
    },
    {
        name: '$xl-button-padding',
        description: 'Padding for the XL Sized button',
        default: '15px 20px'
    },
    {
        name: '$xl-button-font-size',
        description: 'Font size for the XL Sized button',
        default: '1.1rem'
    },
    {
        name: '$xl-button-border-radius',
        description: 'Border radius for the XL Sized button',
        default: '20px'
    },
    {
        name: '$lg-button-padding',
        description: 'Padding for the Lg Sized button',
        default: '10px 15px'
    },
    {
        name: '$lg-button-font-size',
        description: 'Font size for the Lg Sized button',
        default: '1rem'
    },
    {
        name: '$lg-button-border-radius',
        description: 'Border radius for the Lg Sized button',
        default: '15px'
    },
    {
        name: '$sm-button-padding',
        description: 'Padding for the Sm Sized button',
        default: '5px 10px'
    },
    {
        name: '$sm-button-font-size',
        description: 'Font size for the Sm Sized button',
        default: '0.75rem'
    },
    {
        name: '$sm-button-border-radius',
        description: 'Border radius for the Sm Sized button',
        default: '9px'
    },
    {
        name: '$mini-button-padding',
        description: 'Padding for the Mini Sized button',
        default: '3px 8px'
    },
    {
        name: '$mini-button-font-size',
        description: 'Font size for the Mini Sized button',
        default: '0.6rem'
    },
    {
        name: '$mini-button-border-radius',
        description: 'Border radius for the Mini Sized button',
        default: '7px'
    },
    {
        name: '$bordered-button-border-color',
        description: 'Border color for the bordered button when no color provided',
        default: '$darkestGray'
    },
    {
        name: '$bordered-button-active-font-color',
        description: 'Font color for the bordered buttons active status when no color provided',
        default: '$white'
    },
    {
        name: '$bordered-button-hovered-border-color-alpha',
        description: 'Alpha value of the border color when the bordered button hovered when no color provided',
        default: '0.5'
    },
    {
        name: '$floating-button-translate-size',
        description: 'TranslateY value of the floating button',
        default: '-3px'
    },
    {
        name: '$flat-button-background-alpha',
        description: 'Alpha value of the background color for the flat button',
        default: '$flat-color-alpha'
      },
      {
        name: '$flat-button-background-color',
        description: 'Background color of the flat button',
        default: 'tint($button-background-color, percentage(1 - $flat-button-background-alpha))'
      },
      {
        name: '$flat-button-color',
        description: 'Text color of the flat button',
        default: 'rgba($darkestGray, 0.65)'
      },
      {
        name: '$flat-button-hovered-background-alpha',
        description: 'Alpha value of the background color when the flat button is hovered',
        default: '0.25'
      },
      {
        name: '$link-button-background-color',
        description: 'Background color of the link button',
        default: '$button-background-color'
      },
      {
        name: '$icon-button-padding',
        description: 'Padding of the icon button',
        default: '6px'
      },
      {
        name: '$icon-button-font-size',
        description: 'Font size of the icon button',
        default: '16px'
      },
      {
        name: '$link-button-color',
        description: 'Text color of the link button',
        default: '$button-color'
      },
      {
        name: '$link-button-background-alpha',
        description: 'Alpha value of the background color when the link button is hovered',
        default: '0.1'
      },
      {
        name: '$loading-button-spinner-diameter',
        description: 'Diameter of the loading spinner in the loading button',
        default: '16px'
      },
      {
        name: '$loading-button-spinner-width',
        description: 'Width of the loading spinner in the loading button',
        default: '3px'
      },
      {
        name: '$loading-button-spinner-color',
        description: 'Color of the loading spinner in the loading button when no color provided',
        default: '$button-color'
      },
]