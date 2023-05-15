import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'

export default function gallery() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <h1>Gallery</h1>
      </div>
      <div>
        <img
          src="https://lightroom.adobe.com/v2c/spaces/44c219376b2a47d9ad6658cd1459ab60/assets/4c2c0f7810f94ddba20f591caf54b481/revisions/6151038e343c4a7a904fccca4d447269/renditions/ec5323cbbd3d1c2c2f8f63feed28ab14"
          alt="test"
        />
      </div>
    </>
  )
}
