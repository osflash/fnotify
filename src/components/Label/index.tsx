import clsx from 'clsx'

interface LabelProps {
  children: React.ReactNode
  animateRerendering?: boolean
  color?: 'default' | 'red' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange'
}

export const Label: React.FC<LabelProps> = ({
  children,
  animateRerendering,
  color
}) => {
  return (
    <div
      className={clsx('rounded-full px-1.5 shadow-[0_0_1px_3px_black]', {
        'bg-gray-800 text-gray-300': color === 'default',
        'bg-fnotify-red text-white': color === 'red',
        'bg-fnotify-pink text-white': color === 'pink',
        'bg-fnotify-blue text-white': color === 'blue',
        'bg-fnotify-cyan text-white': color === 'cyan',
        'bg-fnotify-violet text-violet-100': color === 'violet',
        'bg-fnotify-orange text-white': color === 'orange',
        'animate-[highlight_1s_ease-in-out_1]': animateRerendering
      })}
    >
      {children}
    </div>
  )
}
