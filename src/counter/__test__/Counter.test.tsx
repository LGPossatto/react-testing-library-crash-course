import {render, fireEvent, Matcher, MatcherOptions} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Counter from '../Counter.component';

let getByTestId: (text: Matcher, options?: MatcherOptions | undefined, waitForElementOptions?: unknown) => HTMLElement

beforeEach(() => {
    const component = render(<Counter></Counter>)
    getByTestId = component.getByTestId
})

test('header render with expected text', () => {
    const headerEl: HTMLTitleElement = getByTestId('header') as HTMLTitleElement

    expect(headerEl.textContent).toBe('My Counter')
})

test('counter iniatially start with text of 0', () => {
    const counterEl: HTMLTitleElement = getByTestId('counter') as HTMLTitleElement

    expect(counterEl.textContent).toBe('0')
})

test('input iniatially start with value 1', () => {
    const inputEl: HTMLInputElement = getByTestId('input') as HTMLInputElement

    expect(inputEl.value).toBe('1')
})

test('add button renders with +', () => {
    const addBtnEl: HTMLButtonElement = getByTestId('add-btn') as HTMLButtonElement

    expect(addBtnEl.textContent).toBe('+')
})

test('subtract button renders with -', () => {
    const subBtn: HTMLButtonElement = getByTestId('sub-btn') as HTMLButtonElement

    expect(subBtn.textContent).toBe('-')
})

test('change value of input', () => {
    const inputEl: HTMLInputElement = getByTestId('input') as HTMLInputElement

    fireEvent.change(inputEl, {
        target: {
            value: '5'
        }
    })


    expect(inputEl.value).toBe('5')
})

test('click on plus btn adds 1 to counter', () => {
    const counterEl: HTMLTitleElement = getByTestId('counter') as HTMLTitleElement
    const addBtnEl: HTMLButtonElement = getByTestId('add-btn') as HTMLButtonElement

    expect(counterEl.textContent).toBe('0')

    fireEvent.click(addBtnEl)

    expect(counterEl.textContent).toBe('1')
})

test('click on minus btn subtracts 1 to counter', () => {
    const counterEl: HTMLTitleElement = getByTestId('counter') as HTMLTitleElement
    const subBtnEl: HTMLButtonElement = getByTestId('sub-btn') as HTMLButtonElement

    expect(counterEl.textContent).toBe('0')

    fireEvent.click(subBtnEl)

    expect(counterEl.textContent).toBe('-1')
})

test('changing input value and clicking on add btn works correctly', () => {
    const counterEl: HTMLTitleElement = getByTestId('counter') as HTMLTitleElement
    const inputEl: HTMLInputElement = getByTestId('input') as HTMLInputElement
    const addBtnEl: HTMLButtonElement = getByTestId('add-btn') as HTMLButtonElement

    fireEvent.change(inputEl, {
        target: {
            value: '5'
        }
    })

    fireEvent.click(addBtnEl)

    expect(counterEl.textContent).toBe('5')
})

test('changing input value and clicking on sub btn works correctly', () => {
    const counterEl: HTMLTitleElement = getByTestId('counter') as HTMLTitleElement
    const inputEl: HTMLInputElement = getByTestId('input') as HTMLInputElement
    const subBtnEl: HTMLButtonElement = getByTestId('sub-btn') as HTMLButtonElement

    fireEvent.change(inputEl, {
        target: {
            value: '5'
        }
    })

    fireEvent.click(subBtnEl)

    expect(counterEl.textContent).toBe('-5')
})

test('counter contains correct className', () => {
    const counterEl: HTMLTitleElement = getByTestId('counter') as HTMLTitleElement
    const inputEl: HTMLInputElement = getByTestId('input') as HTMLInputElement
    const addBtnEl: HTMLButtonElement = getByTestId('add-btn') as HTMLButtonElement
    const subBtnEl: HTMLButtonElement = getByTestId('sub-btn') as HTMLButtonElement

    expect(counterEl.className).toBe('')

    fireEvent.change(inputEl, {
        target: {
            value: '50'
        }
    })

    fireEvent.click(addBtnEl)

    expect(counterEl.className).toBe('')

    fireEvent.click(addBtnEl)

    expect(counterEl.className).toBe('green')

    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)

    expect(counterEl.className).toBe('')

    fireEvent.click(subBtnEl)

    expect(counterEl.className).toBe('')

    fireEvent.click(subBtnEl)

    expect(counterEl.className).toBe('red')

    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)

    expect(counterEl.className).toBe('')
})