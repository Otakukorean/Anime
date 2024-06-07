/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                hostname : "media.themoviedb.org"
            },
            {
                hostname : "media.kitsu.io"
            },
        ]
    } ,
    env: {
        TMDB_API_KEY: process.env.TMDB_API_KEY,
      } ,
      typescript : {
        ignoreBuildErrors : true
      }
};

export default nextConfig;
