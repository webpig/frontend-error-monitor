function handleError(
  message: string | Event,
  source?: string,
  lineno?: number,
  colno?: number,
  error?: Error) {
  console.table({
    message,
    source,
    lineno,
    colno,
    error
  })
}

// 监听js运行错误
window.onerror = handleError

// 监听js运行错误，资源加载错误
window.addEventListener('error', (e) => {
  console.log('e', e)
})

// 监听异步错误
window.addEventListener('unhandledrejection', (e) => {
  e.preventDefault()
  console.log('unhandledrejection', e.reason)
})