import cn from 'classnames'
import { PortableText } from '@portabletext/react'
import styles from './PostBody.module.css'
import type { Post } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'

export default function Hero(props: Pick<Post, 'heading' | 'tagline' | 'image'>)
{
  const { heading, tagline, image: source } = props
  return (
    <div>
      <Image
        className="h-auto w-full mb-8 sm:mx-0 md:mb-0"
        src={urlForImage(source).height(1000).width(2000).url()}
        width={2000}
        height={1000}
        alt="Picture of the author"
      />  
      <div className={`md:mb-16 h-auto w-full mb-8  mx-auto max-w-2xl ${styles.portableText}`} >
        {heading}, {tagline}
      </div>
    </div>
  )
}