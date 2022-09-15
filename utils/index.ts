export const getHostname = (link: string) => {
  const hostname = new URL(link).hostname
    .replace('www.', '')
    .replace('.com', '')
    .replace('.com.br', '')
    .replace('.net', '')
    .replace('.br', '')
    .replace('.me', '')

  if (hostname.match('vercel')) {
    return 'vercel'
  } else if (hostname.length > 6) {
    return hostname.slice(0, 5) + '...'
  } else {
    return hostname
  }
}
