export function Logo({alt}) {
  return (
    <div>
      <img 
        src="/assets/logo-dark.png" 
        className='hidden h-10 pt-1 dark:block'
        alt={alt} 
      />
      <img 
        src="/assets/logo-light.png" 
        className='block h-10 pt-1 dark:hidden'
        alt={alt} 
      />
      <div className='text-xs opacity-50' align="right"><i>Documentation</i></div>
    </div>
  )
}