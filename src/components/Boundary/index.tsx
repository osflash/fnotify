import clsx from 'clsx'

import { Label } from '~/components/Label'

interface BoundaryProps {
  children: React.ReactNode
  labels?: string[]
  size?: 'small' | 'default'
  color?: 'default' | 'red' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange'
  animateRerendering?: boolean
}

export const Boundary: React.FC<BoundaryProps> = ({
  children,
  labels,
  size = 'default',
  color = 'default',
  animateRerendering = true
}) => {
  return (
    <div
      className={clsx('relative rounded-lg border border-dashed', {
        'p-3': size === 'small',
        'p-4': size === 'default',
        'border-gray-700': color === 'default',
        'border-fnotify-red': color === 'red',
        'border-fnotify-pink': color === 'pink',
        'border-fnotify-blue': color === 'blue',
        'border-fnotify-cyan': color === 'cyan',
        'border-fnotify-violet': color === 'violet',
        'border-fnotify-orange': color === 'orange',
        'animate-[rerender_1s_ease-in-out_1]': animateRerendering
      })}
    >
      <div
        className={clsx(
          'absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest',
          {
            'left-3 lg:left-5': size === 'small',
            'left-4 lg:left-9': size === 'default'
          }
        )}
      >
        {labels?.map(label => {
          return (
            <Label
              key={label}
              color={color}
              animateRerendering={animateRerendering}
            >
              {label}
            </Label>
          )
        })}
      </div>

      {children}
    </div>
  )
}
