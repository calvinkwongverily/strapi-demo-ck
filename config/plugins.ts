export default () => ({
    'content-source-map': {
        enabled: true,
        config: {
            contentTypes: ['api::hero.hero'],
            origin: 'verily-strapi-vercel-demo.vercel.app',
            baseHref: 'https://meaningful-nest-ba40904bc9.strapiapp.com',
        },
    },
});
