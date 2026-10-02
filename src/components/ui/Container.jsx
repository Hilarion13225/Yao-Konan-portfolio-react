import { cn } from '../../utils/cn.js'

export default function Container({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag className={cn('container-page', className)} {...props}>
      {children}
    </Tag>
  )
}
