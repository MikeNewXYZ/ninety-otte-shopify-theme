document.addEventListener("alpine:init", () => {
  Alpine.store("cart", {
    data: {},
    init() {
      this.getData()
    },
    async getData() {
      const response = await fetch(window.Shopify.routes.root + "cart.js")
      const data = await response.json()

      this.data = data
    }
  })
})