import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  :root{
    --nav-height: 5rem;
    --site-margin: 10rem;

    @media (max-width: 1250px){
      --site-margin: 6rem;
    }

    @media (max-width: 800px){
      --site-margin: 1rem;
    }
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;

    color: ${theme.white};
    font-family: "Poppins";
  }

  body {
    background: ${theme.blueDark};
    overflow-x:hidden;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar-track {
    background: ${theme.blueDark};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.green} ;
    border-radius: 10px;
    border: 3px solid ${theme.blueDark};
  }
  ::-webkit-scrollbar {
    width: 14px;
  }

  /* Code theme (prismjs) */
  pre * {
  	font-family: Inconsolata;
  }

  .gatsby-highlight-code-line {
    background-color: #1A3A65;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #0FD990;
  }

  code[class*="language-"],
  pre[class*="language-"] {
  	color: #c5c8c6;
  	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  	font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace !important;
  	direction: ltr;
  	text-align: left;
  	white-space: pre;
  	word-spacing: normal;
  	word-break: normal;
  	line-height: 1.5;

  	-moz-tab-size: 4;
  	-o-tab-size: 4;
  	tab-size: 4;

  	-webkit-hyphens: none;
  	-moz-hyphens: none;
  	-ms-hyphens: none;
  	hyphens: none;
  }

  /* Code blocks */
  pre[class*="language-"] {
  	padding: 1em;
  	margin: .5em 0;
  	overflow: auto;
  	border-radius: 0.3em;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
  	background: ${theme.blue};
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
  	padding: .1em;
  	border-radius: .3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
  	color: #7C7C7C;
  }

  .token.punctuation {
  	color: #c5c8c6;
  }

  .namespace {
  	opacity: .7;
  }

  .token.property,
  .token.keyword,
  .token.tag {
  	color: #5bcade;
  }

  .token.class-name {
  	color: #FFFFB6;
  	/* text-decoration: underline; */
  }

  .token.boolean,
  .token.constant {
  	color: #99CC99;
  }

  .token.symbol,
  .token.deleted {
  	color: #f92672;
  }

  .token.number {
  	color: #FF73FD;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
  	color: ${theme.green};
  }

  .token.variable {
  	color: #C6C5FE;
  }

  .token.operator {
  	color: #EDEDED;
  }

  .token.entity {
  	color: #FFFFB6;
  	cursor: help;
  }

  .token.url {
  	color: #5bcade;
  }

  .language-css .token.string,
  .style .token.string {
  	color: #87C38A;
  }

  .token.atrule,
  .token.attr-value {
  	color: #F9EE98;
  }

  .token.function {
  	/* color: #DAD085; */
  	color: #e6a825;
  }

  .token.regex {
  	color: #E9C062;
  }

  .token.important {
  	color: #fd971f;
  }

  .token.important,
  .token.bold {
  	font-weight: bold;
  }

  .token.italic {
  	font-style: italic;
  }
`;
