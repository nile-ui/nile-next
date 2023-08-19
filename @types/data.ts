import React from 'react'

export interface Prop {
    name: string,
    description: string,
    types: React.ReactNode,
    required: 'Yes' | 'No',
    default: string
}

export interface Style {
    name: string,
    description: string,
    default: string,
}