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
    },
    async add(items) {
      await fetch(window.Shopify.routes.root + "cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ items })
      })
    
      this.getData()
    },
    async update(updates) {
      await fetch(window.Shopify.routes.root + "cart/update.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ updates })
      })
    
      this.getData()
    },
    async removeItem(id) {
      await this.update({[id]: 0})

      this.getData()
    },
    async updateItemQuantity(id, quantity) {
      await this.update({[id]: quantity})

      this.getData()
    }
  })
})