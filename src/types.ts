import { Elements, Pen } from './penexutils'

export type ContentList = {
    [key: string]: Content[]
}

export type Content =
    | {
          type: 'iframe'
          id: string
          src: string
          controls: boolean
      }
    | {
          type: 'module'
          name: string
          description: string
          handler: string // what it says down there
      }
    | {
          type: 'seperator'
      }
    | {
          type: 'block'
          handler: string // reference to a file in the attatchments folder
      }
    | {
          type: 'input'
          id: string
          handler: string // what it says up there
          placeholder?: string
      }

export type HandlerOutput = void | Pen<Elements>[]

export type HandlerDefinition =
    | {
          type: 'block'
          id: string
          handler: (content: Pen<Elements>[]) => HandlerOutput
      }
    | {
          type: 'module'
          id: string
          onEnable?: () => HandlerOutput
          onDisable?: () => HandlerOutput
          autoReset?: boolean
      }
    | {
          type: 'button'
          id: string
          handler: () => HandlerOutput
      }
    | {
          type: 'input'
          id: string
          handler: (input: string, input_element: HTMLInputElement) => HandlerOutput
      }
    | {
          type: 'dropdown'
          id: string
          handler: (input: string, input_element: Pen<Elements>) => HandlerOutput
      }

// database types
export type Script = {
    name: string
    desc: string
    author: { name: string; link: string }
    url: string
    patch?: string // eval(patch) before the script is run
}

export type Game = {
    name: string
    url: string
}

export type Proxies = {
    wild: string[]
    normal: string[]
}

export type DropdownOptions = {
    [key: string]: string[]
}
