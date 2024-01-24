/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        esmExternals: "loose",
        serverComponentsExternalPackages: ["mongoose"],
    },
    images:{
        // domains:['scontent.cdninstagram.com','images.unsplash.com']
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.cdninstagram.com',
              port: '',
              pathname: '**',
            },
            {
              protocol: 'https',
              hostname: 'instagram.flba2-1.fna.fbcdn.net',
              port: '',
              pathname: '**',
            },
          
          ],
    }
}
module.exports = nextConfig
