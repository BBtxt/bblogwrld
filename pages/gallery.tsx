import siteMetadata from '@/data/siteMetadata'
import Backdrop from '@/components/gallery/galleryBackdrop'
import { PageSEO } from '@/components/SEO'
import { motion } from 'framer-motion'
import { useState } from 'react'

const galleryId = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
]

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

export default function Gallery({ handleClose }) {
  // handle state of selected image
  const [selectedImg, setSelectedImg] = useState(null)
  const openImage = (id: number) => {
    setSelectedImg(id)
  }
  console.log(selectedImg)

  return (
    <>
      <Backdrop onClick={handleClose}>
        <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

        <div className="p-20 ">
          <h1>Gallery</h1>
          <motion.div className="relative flex flex-wrap gap-2">
            {galleryId.map((i) => {
              return (
                <motion.div
                  className="h-36 w-36 overflow-hidden object-cover"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={i}
                >
                  <motion.img
                    //whileHover={{ scale: 1.1 }}
                    layoutId={`img-${i}`}
                    src={`/gallery/bblogwrld_id_${i}.jpg`}
                    onClick={() => openImage(i)}
                  />
                </motion.div>
              )
            })}
            {selectedImg ? (
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.img
                  layoutId={`img-${selectedImg}`}
                  src={`/gallery/bblogwrld_id_${selectedImg}.jpg`}
                  className="animate-open-image"
                  onClick={() => setSelectedImg(null)}
                />
              </motion.div>
            ) : null}
          </motion.div>
        </div>
      </Backdrop>
    </>
  )
}
