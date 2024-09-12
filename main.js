 (function () {
 const template = document.createElement('template')
 template.innerHTML = `
 <style>
 </style>
 <div id="root" style="width: 100%; height: 100%;">
 Hello WebComponent
 </div>
 `
 class Main extends HTMLElement {
 constructor () {
 super()
 this._shadowRoot = this.attachShadow({ mode: 'open' })
 this._shadowRoot.appendChild(template.content.cloneNode(true))
 this._root = this._shadowRoot.getElementById('root')
 }

  async render () {
   const dataBinding = this.dataBinding
   if (!dataBinding || dataBinding.state !== 'success') {
    return
   }
   this._root.textContent = JSON.stringify(dataBinding)
  }
 }
 customElements.define('com-sap-sac-exercise-gw-main', Main)
 })()
