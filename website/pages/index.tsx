import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import twemoji from "twemoji";

import { GlobalMockStyles } from "src/components/mock/vscode";
import { Header } from "src/components/header";
import { GettingStartedSection } from "src/components/sections/getting-started";
import { StepthroughSection } from "src/components/sections/stepthrough";
import { PrioritiesSection } from "src/components/sections/priorities";
import { SkipIssuesSection } from "src/components/sections/skip-issues";
import { FaqsSection } from "src/components/sections/faqs";
import { Footer } from "src/components/footer";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary-300-background: #9da8fb;
    --color-primary-300-foreground: #222;
    --color-primary-400-background: #6b77fd;
    --color-primary-400-foreground: #fff;
    --color-primary-500-background: #4949e4;
    --color-primary-500-foreground: #fff;
    --color-primary-600-background: #4044d8;
    --color-primary-600-foreground: #fff;
    --color-primary-700-background: #292c89;
    --color-primary-700-foreground: #fff;
    --color-primary-800-background: #1f1f6b;
    --color-primary-800-foreground: #fff;
    --color-primary-900-background:#11133e;
    --color-primary-900-foreground: #fff;

    --color-main-background: #ffffff;
    --color-main-background-alt: #f3f3f3;
    --color-main-foreground: #222;
    --color-footer-background: #eee;
    --color-footer-foreground: #888;
    --color-link-foreground: var(--color-primary-500-background);
    --color-hover-foreground: var(--color-primary-700-background);
    --color-outline-button-foreground: var(--color-primary-400-background);
    --color-outline-button-hover-foreground: var(--color-primary-600-background);
    --color-hero-dark-background: var(--color-primary-500-background);
    --color-hero-light-background: var(--color-primary-400-background);
    --color-message-background: var(--color-primary-700-background);
    --color-message-foreground: var(--color-primary-700-foreground);

    @media (prefers-color-scheme: dark) {
      --color-main-background: #1c1c1c;
      --color-main-background-alt: #161616;
      --color-main-foreground: #e8e8e8;
      --color-background-foreground: #fff;
      --color-footer-background: #111;
      --color-footer-foreground: #ccc;
      --color-link-foreground: var(--color-primary-400-background);
      --color-link-hover-foreground: var(--color-primary-300-background);
      --color-outline-button-foreground: var(--color-main-foreground);
      --color-outline-button-hover-foreground: var(--color-primary-300-background);
      --color-hero-dark-background: var(--color-primary-600-background);
      --color-hero-light-background: var(--color-primary-700-background);
      --color-message-background: var(--color-primary-800-background);
      --color-message-foreground: var(--color-primary-800-foreground);
    }
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html,body {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    line-height: 1.4;
  }

  body {
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background: var(--color-main-background);
    color: var(--color-main-foreground);
  }

  header, main, section, footer {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    font-family: Quicksand;
    font-weight: 500;
    line-height: 1.15;
  }

  h1 {
    font-size: 3em;
    margin: 0.8em 0 0.3em;
  }

  h2 {
    font-size: 2em;
    margin: .6em 0 .2em;
  }

  h3 {
    font-size: 1.4em;
    margin: 1.2em 0 0;
  }

  button, input, select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  img.emoji {
    height: 1.1em;
    vertical-align: middle;
    margin:-.2rem .2rem 0;
  }

  a {
    color: var(--color-link-foreground);
    text-decoration: none;
    transition: color .2s;

    &:hover,
    &:focus{
      color: var(--color-link-hover-foreground);
      text-decoration: underline;
    }
  }
`;

const Container = styled.div``;

const Main = styled.main``;

export default function Home() {
  useEffect(() => {
    // Because I like the flat style emojis better 😅
    twemoji.parse(window.document.body, {
      ext: ".svg",
      size: "svg",
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <GlobalMockStyles />

      <Container>
        <Header />

        <Main>
          <GettingStartedSection />
          <StepthroughSection />
          <PrioritiesSection />
          <SkipIssuesSection />
          <FaqsSection />
        </Main>

        <Footer />
      </Container>
    </>
  );
}
