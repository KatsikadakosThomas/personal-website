import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {


     const structuredData= 
      {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Thomas Katsikadakos",
        "url": "https://www.tomkatsi.com",
        "image": "https://www.tomkatsi.com/Katsikadakos_thomas.jpeg",
        "jobTitle": "Software Developer",
        "description": "I am a motivated software developer with 2 years of full stack experience in making web applications mainly with the MERN stack",
        "email": "tkatsika@gmail.com",
        "telephone": "+30 6987886384",
        "sameAs": [
          "https://www.linkedin.com/in/tkatsika/",
          "https://github.com/KatsikadakosThomas",
          "https://www.facebook.com/cowardly.intrepid"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Technature",
          "url": "https://www.technature.gr"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Peoplecert",
          "sameAs": "https://www.peoplecert.org/browse-certifications/software-development-and-testing/Software-Development-Skills-46"
        }
      }
		

  return (
    <Html lang="en">
      <Head > 
      <title>Thomas Katsikadakos</title>
				<meta name="description" content="A portfolio website for Thomas katsikadakos"></meta>
				<meta property="og:title" content={"Thomas Katsikadakos"} key="title" />
				<meta property="og:image" content={"https://www.tomkatsi.com/Katsikadakos_thomas.jpeg"} />
				<meta property="og:type" content="website " />
				<meta property="og:url" content={"https://tomkatsi.com"} />


				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="tomkatsi.com" />
				<meta property="twitter:url" content={"https://tomkatsi.com"} />
				<meta name="twitter:title" content={"Thomas Katsikadakos"} />
				<meta name="twitter:description" content={"A portfolio website for Thomas katsikadakos"} />
				<meta name="twitter:image" content={"https://www.tomkatsi.com/Katsikadakos_thomas.jpeg"}></meta>
        

        <script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
