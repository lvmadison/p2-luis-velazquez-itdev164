import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const contentfulConfig = {
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN,
	host: process.env.CONTENTFUL_HOST,
	spaceId: process.env.CONTENTFUL_SPACE_ID
};

if (process.env.CONTENTFUL_HOST) {
	contentfulConfig.host = process.env.CONTENTFUL_HOST;
	contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
	throw new Error('Contentful spaceId and the access token need to be provided.');
}

export default {
	siteMetadata: {
		title: 'Gatsby Contentful Starter',
		description: 'Official Contentful Gatsby Starter'
	},
	pathPrefix: '/gatsby-contentful-starter',
	plugins: [
		'gatsby-transformer-remark',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-plugin-image',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig
		}
	]
};