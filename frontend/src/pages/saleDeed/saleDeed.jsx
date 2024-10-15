/**
 * @fileoverview A React component that displays a sale deed drafting interface.
 * This component renders an iframe that loads an external HTML document for drafting 
 * sale deeds. The iframe is styled to take up the full width of its container and has 
 * a fixed height.
 * 
 * @module saleDeed
 */
import React from 'react'

/**
 * A functional component that renders an iframe for sale deed drafting.
 * 
 * This component embeds a separate HTML document containing the sale deed drafting 
 * interface within an iframe. It ensures a smooth user experience by providing a 
 * dedicated space for the drafting tool.
 * 
 * @function saleDeed
 * @returns {JSX.Element} The rendered component containing the iframe for sale deed drafting.
 * 
 * @example
 * // Usage example
 * <saleDeed />
 */
function saleDeed() {
  return (
    <div>
        <iframe 
          src="/Sale_Deed_Drafting_main.html"   // The source URL of the HTML document to be embedded
          style={{ width: '100%', height: '500px', border: 'none' }}  // Styles to control iframe appearance
          title="Sale Deed Drafting"     // Accessible title for the iframe content
        />
      
    </div>
  )
}

export default saleDeed
