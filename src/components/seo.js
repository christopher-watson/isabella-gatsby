/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const jsonLD = {
      "@context": "schema.org",
      "@type": "LocalBusiness",
      "name": "Isabella Fitness",
      "image": "https://isabellafitness.com/wp-content/uploads/2016/10/Isbella-Logo-fit-green-up.png",
      "@id": "",
      "url": "isabellafitness.com",
      "telephone": "732-532-3337",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "242 Main Street #B-D",
        "addressLocality": "Sayreville",
        "addressRegion": "NJ",
        "postalCode": "08872",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.4684293,
        "longitude": -74.36053379999998
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "opens": "05:30",
        "closes": "21:00"
      },{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "05:30",
        "closes": "19:00"
      },{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:30",
        "closes": "12:00"
      },{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "08:00",
        "closes": "12:00"
      }],
      "sameAs": [
        "https://www.facebook.com/isabellafitness/",
        "https://www.instagram.com/isabella_fitness_/",
        "https://www.youtube.com/user/Bennyboi37",
        "https://twitter.com/IsabellaFitness"
      ]
    }
    

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type='application/ld+json'>
        {JSON.stringify(jsonLD)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
