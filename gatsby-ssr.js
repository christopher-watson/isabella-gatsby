/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script type="application/ld+json">
      {`
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
        ]`
      }
    </script>
  ]);
}