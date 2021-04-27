module.exports={
    env:{
        NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID:process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
          require('./scripts/generate-sitemap');
        }
    
        return config;
      }
}