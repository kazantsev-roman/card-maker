import type { Triangle } from './Triangle/triangle'
import type { Rectangle } from './Rectangle/rectangle'
import type { Circle } from './Circle/circle'
import type { Card } from '../../../Card/card'
import { updateSelectElement } from '../element'

export function setColorFigure(newColor: string, card: Card): Card {
    const oldElement = card.canvas.elements.find(element => card.canvas.selectElement?.id == element.id)
    const newCard = {
        ...card,
        canvas: {
            ...card.canvas,
            elements: card.canvas.elements.map(element => {
                if (element == oldElement) {
                    return {
                        ...element,
                        object: {
                            ...element.object,
                            color: newColor
                        }
                    }
                }
                return element
            })
        }
    }
    return {
        ...newCard,
        canvas: {
            ...newCard.canvas,
            selectElement: updateSelectElement(oldElement?.id, card)
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isFigure(element: any): element is Figure {
    return element.object.color !== undefined && element.object.object !== undefined
}

export type Figure = {
    color: string,
    object: Triangle | Rectangle | Circle
}