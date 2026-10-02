import { cn } from '../../utils/cn.js'

// Portrait du Hero : version fond noir en thème sombre, fond blanc en thème clair.
export default function Portrait({ className, eager = false, sizes = '(min-width: 1024px) 40vw, 100vw' }) {
  const shared = {
    alt: '',
    sizes,
    decoding: 'async',
    loading: eager ? 'eager' : 'lazy',
    fetchPriority: eager ? 'high' : undefined,
  }
  return (
    <>
      <img
        {...shared}
        src="/images/opt/hero-dark-1024.webp"
        srcSet="/images/opt/hero-dark-640.webp 640w, /images/opt/hero-dark-1024.webp 1024w"
        width="1024"
        height="1536"
        className={cn('light:hidden', className)}
      />
      <img
        {...shared}
        loading="lazy"
        fetchPriority={undefined}
        src="/images/opt/hero-light-941.webp"
        srcSet="/images/opt/hero-light-640.webp 640w, /images/opt/hero-light-941.webp 941w"
        width="941"
        height="1672"
        className={cn('hidden light:block', className)}
      />
    </>
  )
}
