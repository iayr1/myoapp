import { Helmet, HelmetProvider } from "react-helmet-async";
const Seo = ({ pageTitle }) => (
  <HelmetProvider>
    <Helmet>
      <title>
        {pageTitle &&
          `${pageTitle} || Jano - Creative Multipurpose ReactJs Template}`}
      </title>
    </Helmet>
  </HelmetProvider>
);

export default Seo;
