import styles from '../styles/Curso.module.css';

const Curso = ({ cursos }) => {
  const { titulo, contenido, imagen } = cursos;
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className='heading'>{titulo}</h2>
          <p className={styles.texto}>{contenido}</p>
          <a className={styles.enlace} href='#'>Más Información</a>
        </div>
      </div>
      <style jxs>{`
      section {
          padding:10rem 0;
          margin-top: 10rem;
          background-image: linear-gradient(45deg, black, transparent), url(${imagen.url});
          background-size: cover;
          background-position: 50%;
      }
      `}</style>
    </section>
  );
};

export default Curso;
