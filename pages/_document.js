import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </Head>{" "}
      <body className="antialiased">
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                const savedLanguage = localStorage.getItem('language') || 'tr';
                document.documentElement.lang = savedLanguage;
                
                window.addEventListener('storage', function(e) {
                  if (e.key === 'language') {
                    document.documentElement.lang = e.newValue;
                  }
                });
              } catch (e) {
                console.error('Language detection script error:', e);
              }
            })();
          `,
          }}
        />
      </body>
    </Html>
  );
}
