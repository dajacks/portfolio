import clsx from 'clsx'

export function Prose({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        'prose prose-h2:my-4 prose-h3:my-2 dark:prose-invert'
      )}
    >
      {children}
    </div>
  )
}
