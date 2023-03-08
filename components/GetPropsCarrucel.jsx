import imageData from './dataCarrucel'

export async function getStaticProps () {
  return {
    props: {
      data: imageData
    }
  }
}
