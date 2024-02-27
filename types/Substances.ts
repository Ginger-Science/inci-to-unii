import { ExtraName } from "./ExtraName"

export type Substance = {
    DISPLAY_NAME: string
    UNII: string
    extra_names: ExtraName[]
}