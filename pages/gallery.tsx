import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { motion } from 'framer-motion'
import { useState } from 'react'

const galleryId = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
]

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null)
  const openImage = (id: number) => {
    setSelectedImg(id)
  }

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <h1>Gallery</h1>
      </div>
      <div className="p-20">
        <motion.div className="image-container relative flex flex-wrap gap-1" layout>
          {galleryId.map((i) => {
            return (
              <motion.div className="h-24 w-24" key={i}>
                <motion.img
                  layoutId={`img-${i}`}
                  src={`/gallery/bblogwrld_id_${i}.jpg`}
                  onClick={() => openImage(i)}
                />
              </motion.div>
            )
          })}
          {selectedImg ? (
            <motion.img
              layoutId={`img-${selectedImg}`}
              src={`/gallery/bblogwrld_id_${selectedImg}.jpg`}
              className="animate-open-image"
              onClick={() => setSelectedImg(null)}
            />
          ) : null}
        </motion.div>
      </div>
      );
      <div>
        <img
          src="https://lightroom.adobe.com/v2c/spaces/44c219376b2a47d9ad6658cd1459ab60/assets/4c2c0f7810f94ddba20f591caf54b481/revisions/6151038e343c4a7a904fccca4d447269/renditions/ec5323cbbd3d1c2c2f8f63feed28ab14"
          alt="test"
        />
      </div>
    </>
  )
}
