const path = require('path');

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { permalink, layout, description, title } = node.frontmatter;
    const { relativePath } = getNode(node.parent);

    let slug = permalink;

    if (!slug) {
      slug = `/${relativePath.replace('.md', '')}/`;
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug || '',
    });

    createNodeField({
      node,
      name: 'layout',
      value: layout || '',
    });

    createNodeField({
      node,
      name: 'description',
      value: description || '',
    });

    createNodeField({
      node,
      name: 'title',
      value: title || '',
    });
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const allMarkdown = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    // eslint-disable-next-line no-console
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields;

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        slug,
      },
    });
  });
};
