import CardBanner from "./CardBanner"
import arrayBanner from "./arrayBanner"
const View = () => {
    return (
        <section className='flex flex-col gap-4'>
            {arrayBanner.map((banner, index) => (
                <CardBanner 
                    key={index}
                    title={banner.title}
                    endpoint={banner.endpoint}
                    description={banner.description}
                    banners={banner.banners}
                />
            ))}
        </section>
    )
}

export default View