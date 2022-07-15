customElements.define("window-box", class extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.titleBarText = this.getAttribute("heading") || "window"

    setTimeout(() => {
      this.innerHTML = `
        <div
          class="window"
          style="width: inherit; height: inherit; display: flex; flex-direction: column;"
        >
          <div class="title-bar">
            <div class="title-bar-text">
              ${this.titleBarText}
            </div>
            <div class="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>

          <div
            class="window-body"
            style="flex: 1; overflow: hidden;"
          >
            ${this.innerHTML}
          </div>
        </div>
      ` 
    })
  }
})

