/**
 * Temporary layout for the index page.
 * DELETE THIS ONCE IT'S BEEN CONSOLIDATED INTO THE MASTER LAYOUT.
 */

import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

const IndexLayout = ({ children }) => {
  return (
  <div>
    <p style={{padding: 20 + 'px', marginTop: 0, background: '#f9f7cd', textAlign: 'center'}}><em>Under construction, although I'll create posts simultaneously to enhancing the design.</em></p>
    <main>
    <Global
      styles={css`
        html {
          box-sizing: border-box;
          font-family: sans-serif;
          overflow-y: scroll;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        main,
        menu,
        nav,
        section,
        summary {
          display: block;
        }
        audio,
        canvas,
        progress,
        video {
          display: inline-block;
        }
        audio:not([controls]) {
          display: none;
          height: 0;
        }
        progress {
          vertical-align: baseline;
        }
        [hidden],
        template {
          display: none;
        }
        a {
          background-color: transparent;
          -webkit-text-decoration-skip: objects;
        }
        a:active,
        a:hover {
          outline-width: 0;
        }
        abbr[title] {
          border-bottom: none;
          text-decoration: underline;
          text-decoration: underline dotted;
        }
        b,
        strong {
          font-weight: inherit;
          font-weight: bolder;
        }
        dfn {
          font-style: italic;
        }
        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }
        mark {
          background-color: #ff0;
          color: #000;
        }
        small {
          font-size: 80%;
        }
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        sub {
          bottom: -0.25em;
        }
        sup {
          top: -0.5em;
        }
        img {
          border-style: none;
        }
        svg:not(:root) {
          overflow: hidden;
        }
        code,
        kbd,
        pre,
        samp {
          font-family: monospace, monospace;
          font-size: 1em;
        }
        figure {
          margin: 1em 40px;
        }
        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          font: inherit;
          margin: 0;
        }
        optgroup {
          font-weight: 700;
        }
        button,
        input {
          overflow: visible;
        }
        button,
        select {
          text-transform: none;
        }
        [type="reset"],
        [type="submit"],
        button,
        html [type="button"] {
          -webkit-appearance: button;
        }
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner,
        button::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }
        [type="button"]:-moz-focusring,
        [type="reset"]:-moz-focusring,
        [type="submit"]:-moz-focusring,
        button:-moz-focusring {
          outline: 1px dotted ButtonText;
        }
        fieldset {
          border: 1px solid silver;
          margin: 0 2px;
          padding: 0.35em 0.625em 0.75em;
        }
        legend {
          box-sizing: border-box;
          color: inherit;
          display: table;
          max-width: 100%;
          padding: 0;
          white-space: normal;
        }
        textarea {
          overflow: auto;
        }
        [type="checkbox"],
        [type="radio"] {
          box-sizing: border-box;
          padding: 0;
        }
        [type="number"]::-webkit-inner-spin-button,
        [type="number"]::-webkit-outer-spin-button {
          height: auto;
        }
        [type="search"] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }
        [type="search"]::-webkit-search-cancel-button,
        [type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
        }
        ::-webkit-input-placeholder {
          color: inherit;
          opacity: 0.54;
        }
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }
        * {
          box-sizing: inherit;
        }
        *:before {
          box-sizing: inherit;
        }
        *:after {
          box-sizing: inherit;
        }

        /* Custom styles */
        main {
          margin: 0 auto;
          maxWidth: 960;
          padding: 1.45rem 1.0875rem;
          paddingTop: 0;
        }
      `}
    />
    {children}
  </main>
  </div>
)}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexLayout