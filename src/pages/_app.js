import AdminLayout from '@/components/layouts/AdminLayout/adminLayout';
import MainLayout from '@/components/layouts/mainLayout/mainLayout'
import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  // here I can change the layout conditionally 
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith('/dashboard');

  const Layout = isAdminRoute ? AdminLayout : MainLayout;

  return (<>
    {/* <Layout> */}
    <Component {...pageProps} />
    {/* </Layout> */}
  </>)
}
