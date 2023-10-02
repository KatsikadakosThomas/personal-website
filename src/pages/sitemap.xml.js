import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {



    const baseUrl = {
        development: "http://localhost:3600",
        production: "https://tomkatsi.com",
      }[process.env.NODE_ENV];
    
      const staticPages = fs
        .readdirSync("./src/pages")
        .filter((staticPage) => {
          return ![
            "_app.js",
            "_document.js",
            "_error.js",
            "sitemap.xml.js",
            "api",
            "index.js"
          ].includes(staticPage);
        })
        .map((staticPagePath) => {
            
            staticPagePath=staticPagePath.replace(/\.[^/.]+$/,"")
            console.log(staticPagePath);
          return `${baseUrl}/${staticPagePath}`;
        });


        console.log()


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
    ${staticPages
      .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
       
                .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;