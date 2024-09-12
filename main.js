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

   await getScriptPromisify('https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js')

   const { data, metadata } = dataBinding
   const { dimensions, measures } = parseMetadata(metadata)

   // dimensions
   const categoryData = []

   // measures
   const series = measures.map(measure => {
    return {
     id: measure.label,
     data: [],
     key: measure.key,
     type: 'line',
     smooth: true
    }
   }
    )
   
   this._root.textContent = JSON.stringify(dataBinding)
  }
 }
 customElements.define('com-sap-sac-exercise-gw-main', Main)
 })()
