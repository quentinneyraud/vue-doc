export const qs = (parent, selector) => {
  return parent.querySelector(selector)
}

export const qsa = (parent, selector) => {
  return Array.from(parent.querySelectorAll(selector))
}

export const gebc = (parent, className, all = false) => {
  let domCollection = Array.from(parent.getElementsByClassName(className))

  return (all) ? domCollection : domCollection[0]
}

export const gebi = (id) => {
  return document.getElementById(id)
}

export const logElement = (el) => {
  let name = el.tagName.toLowerCase()

  if (el.id) {
    name += `#${el.id}`
  }

  el.classList.forEach(className => {
    name += `.${className}`
  })

  console.log(name)
}

export const addListener = (el, eventName, cb) => {
  if (Array.isArray(el)) {
    el.forEach(e => e.addEventListener(eventName, cb))
  } else {
    el.addEventListener(eventName, cb)
  }
}

export const removeListener = (el, eventName, cb) => {
  if (Array.isArray(el)) {
    el.forEach(e => e.removeEventListener(eventName, cb))
  } else {
    el.removeEventListener(eventName, cb)
  }
}

export const addClass = (el, className) => {
  if (Array.isArray(el)) {
    el.forEach(e => e.classList.add(className))
  } else {
    el.classList.add(className)
  }
}

export const removeClass = (el, className = null) => {
  const rm = (currentElement) => (className) ? currentElement.classList.remove(className) : currentElement.className = ''

  if (Array.isArray(el)) {
    el.forEach(rm)
  } else {
    rm(el)
  }
}

export const serializeForm = (form) => {
  return Object.values(form.elements).reduce((obj, field) => {
    if (field.type === 'submit') return obj

    if (field instanceof window.HTMLSelectElement) {
      if (field.multiple) {
        obj[field.name] = Array.from(field.selectedOptions).reduce((acc, option) => acc.concat(option.value), [])
      } else {
        obj[field.name] = field.selectedOptions[0].value
      }

      return obj
    }

    obj[field.name] = field.value

    return obj
  }, {})
}

export const debounce = (fn, time) => {
  let timeout

  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(fn, time)
  }
}

export const lerp = (min, max, t) => {
  return min * (1 - t) + max * t
}

export const map = (n, start1, stop1, start2, stop2, clamped = false) => {
  let mapped = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2
  return (clamped) ? Math.min(Math.max(mapped, start2), stop2) : mapped
}

export const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    let img = new window.Image()

    img.onload = resolve.bind(null, img)
    img.onerror = reject

    img.src = src
  })
}
