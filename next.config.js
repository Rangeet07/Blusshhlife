/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        // domains:['scontent.cdninstagram.com','images.unsplash.com']
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.cdninstagram.com',
              port: '',
              pathname: '**',
            },
          
          ],
    }
}
module.exports = nextConfig
