export interface Prop {
    name: string,
    description: string,
    types: string,
    required: '*' | '-',
    default: string
}

export interface Style {
    name: string,
    description: string,
    default: string,
}