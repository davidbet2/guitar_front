import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css';


const Nosotros = () => {
  return (
    <Layout pagina='Nosotros'>
        <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>
            <div className={styles.contenido}>
                <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt="Nosotros" />
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque repudiandae libero laborum harum dolores aliquid, quod est quis fuga sapiente fugit quaerat ullam dolor officia quasi veniam blanditiis ducimus voluptatum!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque repudiandae libero laborum harum dolores aliquid, quod est quis fuga sapiente fugit quaerat ullam dolor officia quasi veniam blanditiis ducimus voluptatum!</p>
                </div>
            </div>
        </main>
    </Layout>
  )
}

export default Nosotros