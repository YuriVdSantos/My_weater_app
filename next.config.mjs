/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    images: {
      domains: ['openweathermap.org'], // Adiciona o domínio permitido para carregar imagens
    },
  };
  
  export default nextConfig;
  