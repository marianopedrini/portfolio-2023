const Section = ({children, extraClasses, id}: {children: React.ReactNode, extraClasses?: string, id?: string}) => {
  return (
    <section className={`w-full min-h-[100dvh] pt-32 ${extraClasses? extraClasses : ''}`} id={id}>
        {children}
    </section>
  )
}

export default Section