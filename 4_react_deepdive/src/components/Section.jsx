export default ({title, children, ...props}) => (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
)