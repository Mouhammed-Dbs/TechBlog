import '../styles/globals.css'
import 'swiper/css';
import { register } from 'swiper/element/bundle';
register();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
