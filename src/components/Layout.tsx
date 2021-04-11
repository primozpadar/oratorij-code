import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

interface QueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
      siteUrl: string;
    };
  };
}

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({ title, children }) => {
  const data = useStaticQuery<QueryProps>(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const generatedTitle = title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title;

  return (
    <>
      <Helmet
        title={generatedTitle}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
          { property: 'og:title', content: generatedTitle, key: 'ogtitle' },
          { property: 'og:description', content: data.site.siteMetadata.description },
          { property: 'og:url', content: data.site.siteMetadata.siteUrl },
        ]}
        link={[
          { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
          { rel: 'icon', type: 'image/png', href: '/favicon.png' },
          { rel: 'icon', type: 'image/webp', href: '/favicon.webp' },
          { rel: 'alternate icon', href: '/favicon.ico' },
        ]}
      />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Nav />
          <div>{children}</div>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: var(--nav-height) auto;
  gap: 1rem;
  min-height: 100vh;
  width: 100vw;
`;

export default Layout;
