import type { Post } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'

export default function Hero(props: Pick<Post, 'heading' | 'tagline' | 'image'>)
{
  const { heading, tagline, image: source } = props
  return (
    <div>
      This is an page Hero Component. The fields to render are {heading}, {tagline}
      <Image
        src={urlForImage(source).height(1000).width(2000).url()}
        width={2000}
        height={1000}
        alt="Picture of the author"
      />  
    </div>
  )
}