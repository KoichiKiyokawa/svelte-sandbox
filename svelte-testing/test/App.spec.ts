import { render, fireEvent } from "@testing-library/svelte"
import { CartRepository } from "@/models/cart"
import App from "@/App.svelte"

const CartRepositorySpy = jest
  .spyOn(CartRepository.prototype, "all")
  .mockResolvedValue([
    { amount: 1, price: 1, productName: "test1" },
    { amount: 1, price: 2, productName: "test2" },
    { amount: 1, price: 3, productName: "test3" },
  ])

test("カート内の商品の個数を増やせる", () => {
  const { getByTestId } = render(App)
  const cartCart = getByTestId("cart-card")
  expect(cartCart).toBeDefined()
  expect(cartCart).toHaveTextContent("test1")
})
