import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
import { siteDetails, theme, products } from '../../data'
import ProductCard from '../../component/ProductCard/ProductCard'
import Footer from '../../component/Footer/Footer'

function Home() {
    return (
        <>
            <Navbar name={siteDetails.title} />
            <div className='details-container'>
                <p style={{ color: theme.subText }}>{siteDetails.description}</p>
                <div className='product-card-container'>
                    {
                        products.map((product, i) => {
                            const { name, img, description} = product

                            return (
                                <ProductCard
                                    key={i}
                                    name={name}
                                    img={img}
                                    description={description}
                                />
                            )
                        })
                    }
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home