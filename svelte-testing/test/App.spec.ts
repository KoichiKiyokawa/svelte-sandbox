import { fireEvent, render } from "@testing-library/svelte"
import { CartRepository } from "@/models/cart"
import App from "@/App.svelte"
import Cart from "@/components/Cart.svelte"

const CartRepositorySpy = jest
  .spyOn(CartRepository.prototype, "all")
  .mockResolvedValue([
    { amount: 1, price: 1, productName: "test1" },
    { amount: 1, price: 2, productName: "test2" },
    { amount: 1, price: 3, productName: "test3" },
  ])

test("cart repositoryが呼ばれる", () => {
  render(App)
  expect(CartRepositorySpy.mock.results[0]).toBeDefined()
})

let cartCards: HTMLElement[]

test("カートが描画される", async () => {
  const { getAllByTestId } = render(App)
  await new Promise((res) => setTimeout(res, 10))
  cartCards = getAllByTestId("cart-card")
  expect(cartCards).toBeDefined()
  expect(cartCards[0]).toHaveTextContent("test1")
  expect(cartCards[1]).toHaveTextContent("test2")
  expect(cartCards[2]).toHaveTextContent("test3")
})

test("カートの商品が増やせる", async () => {
  const { getByText, container } = render(Cart, {
    amount: 0,
    productName: "test",
    price: 100,
  })
  await new Promise((res) => setTimeout(res, 10))
  const incrementButton = getByText("+")

  await fireEvent.click(incrementButton)
  expect(container).toHaveTextContent("1個")
  expect(container).toHaveTextContent("合計100円")
  await fireEvent.click(incrementButton)
  expect(container).toHaveTextContent("2個")
  expect(container).toHaveTextContent("合計200円")
})

test("カートの商品は0個以下にならない", async () => {
  const { getByText, container } = render(Cart, {
    amount: 0,
    productName: "test",
    price: 100,
  })
  await new Promise((res) => setTimeout(res, 10))
  const decrementButton = getByText("-")

  await fireEvent.click(decrementButton)
  expect(container).toHaveTextContent("0個")
  expect(container).toHaveTextContent("合計0円")
})
