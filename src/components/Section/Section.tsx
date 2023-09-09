const Section = ({children, extraClasses}: {children: React.ReactNode, extraClasses?: string}) => {
  return (
    <section className={`w-full min-h-[100dvh] pt-32 ${extraClasses? extraClasses : ''}`}>
        {children}
    </section>
  )
}

export default Section