export default ({title, id, children}) => (
    <section id={id}>
        <h2>{title}</h2>
        {children}
    </section>
)