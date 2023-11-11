import { useEffect,lazy } from 'react';
import { useRouter } from 'next/router';
const Home = process.browser ? lazy(()=> import('xApp/xApp')) : ()=>null;
const Page = props => {
  const router = useRouter();
  useEffect(() => {
    if (props.needsPush) {
      router.push(router.route);
    }
  }, []);
  if (props.needsPush) {
    return null;
  }
  return <Home {...props} />;
};
Page.getInitialProps = async ctx => {
  if (process.browser) {
    const page = (await import('xApp/xApp')).default;
    if (page.getInitialProps) {
      return page.getInitialProps(ctx);
    }
  }
  return {
    needsPush: true,
  };
};
export default Page;
