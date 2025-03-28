const searchData = [
  // HTML Tutorials
  { title: "HTML HOME", url: "htmlhome.html", section: "HTML" },
  { title: "HTML Introduction", url: "#", section: "HTML" },
  { title: "HTML Editor", url: "#", section: "HTML" },
  { title: "HTML Basic", url: "#", section: "HTML" },
  { title: "HTML Elements", url: "#", section: "HTML" },
  { title: "HTML Attributes", url: "#", section: "HTML" },
  { title: "HTML Headings", url: "#", section: "HTML" },
  { title: "HTML Paragraphs", url: "#", section: "HTML" },
  { title: "HTML Styles", url: "#", section: "HTML" },
  { title: "HTML Formatting", url: "#", section: "HTML" },
  { title: "HTML Quotations", url: "#", section: "HTML" },
  { title: "HTML Comments", url: "#", section: "HTML" },
  { title: "HTML Colors", url: "#", section: "HTML" },
  { title: "HTML CSS", url: "#", section: "HTML" },
  { title: "HTML Links", url: "#", section: "HTML" },
  { title: "HTML Images", url: "#", section: "HTML" },
  { title: "HTML Favicon", url: "#", section: "HTML" },
  { title: "HTML Page Title", url: "#", section: "HTML" },
  { title: "HTML Tables", url: "#", section: "HTML" },
  { title: "HTML Lists", url: "#", section: "HTML" },
  { title: "HTML Blocks & Inline", url: "#", section: "HTML" },
  { title: "HTML Div", url: "#", section: "HTML" },
  { title: "HTML Classes", url: "#", section: "HTML" },
  { title: "HTML Id", url: "#", section: "HTML" },
  { title: "HTML Iframes", url: "#", section: "HTML" },
  { title: "HTML JavaScript", url: "#", section: "HTML" },
  { title: "HTML File Paths", url: "#", section: "HTML" },
  { title: "HTML Head", url: "#", section: "HTML" },
  { title: "HTML Layout", url: "#", section: "HTML" },
  { title: "HTML Responsive", url: "#", section: "HTML" },
  { title: "HTML Computercode", url: "#", section: "HTML" },
  { title: "HTML Semantics", url: "#", section: "HTML" },
  { title: "HTML Style Guide", url: "#", section: "HTML" },
  { title: "HTML Entities", url: "#", section: "HTML" },
  { title: "HTML Symbols", url: "#", section: "HTML" },
  { title: "HTML Emojis", url: "#", section: "HTML" },
  { title: "HTML Charsets", url: "#", section: "HTML" },
  { title: "HTML URL Encode", url: "#", section: "HTML" },
  { title: "HTML vs. XHTML", url: "#", section: "HTML" },

  // HTML Forms
  { title: "HTML Forms", url: "#", section: "HTML" },
  { title: "HTML Forms Attributes", url: "#", section: "HTML" },
  { title: "HTML Input Types", url: "#", section: "HTML" },
  { title: "HTML Input Attributes", url: "#", section: "HTML" },
  { title: "HTML Form Attributes", url: "#", section: "HTML" },

  // HTML Graphics
  { title: "HTML Canvas", url: "#", section: "HTML" },
  { title: "HTML SVG", url: "#", section: "HTML" },

  // HTML Media
  { title: "HTML Media", url: "#", section: "HTML" },
  { title: "HTML Video", url: "#", section: "HTML" },
  { title: "HTML Audio", url: "#", section: "HTML" },
  { title: "HTML Plug-ins", url: "#", section: "HTML" },
  { title: "HTML Youtube", url: "#", section: "HTML" },

  // HTML APIs
  { title: "HTML Geolocation", url: "#", section: "HTML" },
  { title: "HTML Drag/Drop", url: "#", section: "HTML" },
  { title: "HTML Web Storage", url: "#", section: "HTML" },
  { title: "HTML Web Workers", url: "#", section: "HTML" },
  { title: "HTML SSE", url: "#", section: "HTML" },

  // CSS Tutorials
  { title: "CSS HOME", url: "csshome.html", section: "CSS" },
  { title: "CSS Introduction", url: "#", section: "CSS" },
  { title: "CSS Syntax", url: "#", section: "CSS" },
  { title: "CSS Selectors", url: "#", section: "CSS" },
  { title: "CSS How To", url: "#", section: "CSS" },
  { title: "CSS Comments", url: "#", section: "CSS" },
  { title: "CSS Colors", url: "#", section: "CSS" },
  { title: "CSS Backgrounds", url: "#", section: "CSS" },
  { title: "CSS Borders", url: "#", section: "CSS" },
  { title: "CSS Margins", url: "#", section: "CSS" },
  { title: "CSS Padding", url: "#", section: "CSS" },
  { title: "CSS Height/Width", url: "#", section: "CSS" },
  { title: "CSS Box Model", url: "#", section: "CSS" },
  { title: "CSS Outline", url: "#", section: "CSS" },
  { title: "CSS Text", url: "#", section: "CSS" },
  { title: "CSS Fonts", url: "#", section: "CSS" },
  { title: "CSS Icons", url: "#", section: "CSS" },
  { title: "CSS Links", url: "#", section: "CSS" },
  { title: "CSS Lists", url: "#", section: "CSS" },
  { title: "CSS Tables", url: "#", section: "CSS" },
  { title: "CSS Display", url: "#", section: "CSS" },
  { title: "CSS Max-Width", url: "#", section: "CSS" },
  { title: "CSS Position", url: "#", section: "CSS" },
  { title: "CSS Z-Index", url: "#", section: "CSS" },
  { title: "CSS Overflow", url: "#", section: "CSS" },
  { title: "CSS Floats", url: "#", section: "CSS" },
  { title: "CSS Inline-block", url: "#", section: "CSS" },
  { title: "CSS Align", url: "#", section: "CSS" },
  { title: "CSS Combinators", url: "#", section: "CSS" },
  { title: "CSS Pseudo-classes", url: "#", section: "CSS" },
  { title: "CSS Pseudo-elements", url: "#", section: "CSS" },
  { title: "CSS Opacity", url: "#", section: "CSS" },
  { title: "CSS Navigation Bar", url: "#", section: "CSS" },

  // JS Tutorials
  { title: "JS HOME", url: "jshome.html", section: "JS" },
  { title: "JS Introduction", url: "#", section: "JS" },
  { title: "JS Where To", url: "#", section: "JS" },
  { title: "JS Output", url: "#", section: "JS" },
  { title: "JS Statements", url: "#", section: "JS" },
  { title: "JS Syntax", url: "#", section: "JS" },
  { title: "JS Comments", url: "#", section: "JS" },
  { title: "JS Variables", url: "#", section: "JS" },
  { title: "JS Let", url: "#", section: "JS" },
  { title: "JS Const", url: "#", section: "JS" },
  { title: "JS Operators", url: "#", section: "JS" },
  { title: "JS Arithmetic", url: "#", section: "JS" },
  { title: "JS Assignment", url: "#", section: "JS" },
  { title: "JS Data Type", url: "#", section: "JS" },
  { title: "JS Functions", url: "#", section: "JS" },
  { title: "JS Objects", url: "#", section: "JS" },
  { title: "JS Object Properties", url: "#", section: "JS" },
  { title: "JS Object Methods", url: "#", section: "JS" },
  { title: "JS Object Display", url: "#", section: "JS" },
  { title: "JS Object Constructors", url: "#", section: "JS" },
  { title: "JS Events", url: "#", section: "JS" },
  { title: "JS Strings", url: "#", section: "JS" },
  { title: "JS String Methods", url: "#", section: "JS" },
  { title: "JS String Templates", url: "#", section: "JS" },
  { title: "JS Numbers", url: "#", section: "JS" },
  { title: "JS BigInt", url: "#", section: "JS" },
  { title: "JS Number Methods", url: "#", section: "JS" },
  { title: "JS Number Properties", url: "#", section: "JS" },
  { title: "JS Arrays", url: "#", section: "JS" },
  { title: "JS Arrays Methods", url: "#", section: "JS" },
  { title: "JS Array Search", url: "#", section: "JS" },
  { title: "JS Array Sort", url: "#", section: "JS" },
  { title: "JS Array Iteration", url: "#", section: "JS" },
  { title: "JS Array Const", url: "#", section: "JS" },
  { title: "JS Dates", url: "#", section: "JS" },
  { title: "JS Dates Formats", url: "#", section: "JS" },
  { title: "JS Dates Get Methods", url: "#", section: "JS" },
  { title: "JS Dates Set Methods", url: "#", section: "JS" },
  { title: "JS Math", url: "#", section: "JS" },
  { title: "JS Random", url: "#", section: "JS" },
  { title: "JS Booleans", url: "#", section: "JS" },
  { title: "JS Comparisons", url: "#", section: "JS" },
  { title: "JS If Else", url: "#", section: "JS" },
  { title: "JS Switch", url: "#", section: "JS" },
  { title: "JS Loop For", url: "#", section: "JS" },
  { title: "JS Loop For In", url: "#", section: "JS" },
  { title: "JS Loop For Of", url: "#", section: "JS" },
  { title: "JS Loop While", url: "#", section: "JS" },
  { title: "JS Break", url: "#", section: "JS" },
  { title: "JS Iterables", url: "#", section: "JS" },
  { title: "JS Sets", url: "#", section: "JS" },
  { title: "JS Set Methods", url: "#", section: "JS" },
  { title: "JS Maps", url: "#", section: "JS" },
  { title: "JS Map Methods", url: "#", section: "JS" },
  { title: "JS Typeof", url: "#", section: "JS" },
  { title: "JS Type Conversion", url: "#", section: "JS" },
  { title: "JS Destructing", url: "#", section: "JS" },
  { title: "JS Bitwise", url: "#", section: "JS" },
  { title: "JS RegExp", url: "#", section: "JS" },
  { title: "JS Precedence", url: "#", section: "JS" },
  { title: "JS Errors", url: "#", section: "JS" },
  { title: "JS Scope", url: "#", section: "JS" },
  { title: "JS Hoisting", url: "#", section: "JS" },
  { title: "JS Strict Mode", url: "#", section: "JS" },
  { title: "JS this Keyword", url: "#", section: "JS" },
  { title: "JS Arrow Function", url: "#", section: "JS" },
  { title: "JS Classes", url: "#", section: "JS" },
  { title: "JS Modules", url: "#", section: "JS" },
  { title: "JS JSON", url: "#", section: "JS" },
  { title: "JS Debugging", url: "#", section: "JS" },
  { title: "JS Style Guide", url: "#", section: "JS" },
  { title: "JS Best Practice", url: "#", section: "JS" },
  { title: "JS Mistakes", url: "#", section: "JS" },
  { title: "JS Performance", url: "#", section: "JS" },
  { title: "JS Reserved Words", url: "#", section: "JS" },
]

function filterSearchResults(query) {
  if (!query) return []
  query = query.toLowerCase()
  return searchData.filter(
    (item) => item.title.toLowerCase().includes(query) || item.section.toLowerCase().includes(query),
  )
}

function displaySearchSuggestions(results) {
  const existingSuggestions = document.getElementById("search-suggestions")
  if (existingSuggestions) {
    existingSuggestions.remove()
  }
  if (results.length === 0) return
  const suggestionsContainer = document.createElement("div")
  suggestionsContainer.id = "search-suggestions"
  suggestionsContainer.className = "search-suggestions"
  const groupedResults = {}
  results.forEach((item) => {
    if (!groupedResults[item.section]) {
      groupedResults[item.section] = []
    }
    groupedResults[item.section].push(item)
  })
  Object.keys(groupedResults).forEach((section) => {
    const sectionHeader = document.createElement("div")
    sectionHeader.className = "suggestion-section-header"
    sectionHeader.textContent = section
    suggestionsContainer.appendChild(sectionHeader)
    groupedResults[section].forEach((item) => {
      const suggestionItem = document.createElement("a")
      suggestionItem.className = "suggestion-item"
      suggestionItem.href = item.url
      suggestionItem.textContent = item.title
      suggestionItem.addEventListener("click", (e) => {
        if (item.url === "#") {
          e.preventDefault()
          alert("This page is not yet implemented.")
        }
      })
      suggestionsContainer.appendChild(suggestionItem)
    })
  })
  const searchBar = document.querySelector(".searchbar")
  searchBar.appendChild(suggestionsContainer)
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search")
  const searchButton = document.querySelector(".searchbar button")
  searchInput.addEventListener("input", function () {
    const query = this.value.trim()
    const results = filterSearchResults(query)
    if (query.length > 0) {
      displaySearchSuggestions(results)
    } else {
      const existingSuggestions = document.getElementById("search-suggestions")
      if (existingSuggestions) {
        existingSuggestions.remove()
      }
    }
  })
  searchButton.addEventListener("click", (e) => {
    e.preventDefault()
    const query = searchInput.value.trim()
    if (query.length > 0) {
      const results = filterSearchResults(query)
      if (results.length > 0) {
        window.location.href = results[0].url !== "#" ? results[0].url : "#"
      }
    }
  })
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault()
      const query = this.value.trim()
      if (query.length > 0) {
        const results = filterSearchResults(query)
        if (results.length > 0) {
          window.location.href = results[0].url !== "#" ? results[0].url : "#"
        }
      }
    }
  })
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".searchbar")) {
      const existingSuggestions = document.getElementById("search-suggestions")
      if (existingSuggestions) {
        existingSuggestions.remove()
      }
    }
  })
})  