function handleError(
  message: string | Event,
  source?: string,
  lineno?: number,
  colno?: number,
  error?: Error) {
  console.log('message: ', message, 'source: ', source, 'lineno: ', lineno, 'colno: ', colno, 'error', error)
}

window.onerror = handleError
