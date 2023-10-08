import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
  <main>
      <div>Hello, world!</div>
      <Link href="/posts" className='btn btn-primary'>Posts</Link>
      <ProductCard></ProductCard>
  </main> 
  )
}
