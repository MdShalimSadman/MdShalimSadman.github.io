import Link from 'next/link'
import Certificate from './certificates'

const CertificateHolder = () => {
  return (
        <>
      <section className="text-white">
        <div className="container mx-auto px-4">
          <h2 className="md:text-6xl md:font-bold text-3xl font-semibold mb-9 text-center animate-slide-in-left">
            C<span className="text-blue-300">E</span>RTIFICATES
          </h2>
          <div className='flex mb-4 flex-col w-full justify-center items-center'>
          <p className='mt-2 text-lg font-medium text-gray-300 text-center max-w-5xl mb-4'>I have earned multiple industry-recognized certifications through leading online learning platforms. These achievements highlight my commitment to continuous learning, staying updated with modern technologies, and building real-world skills that strengthen my work as a developer.</p>
           
           <Link href={"/certificates"} className='text-blue-300 font-semibold text-xl hover:scale-105 hover:text-blue-500'>
            View All →
           </Link>
        </div>
        </div>
      </section>

      <div className="m-8 mt-12">
        <Certificate/>
        </div>

        </>
  )
}

export default CertificateHolder
