/**
 * @file Defines the base template
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#function JavaScript functions as templates in 11ty}
 */

/**
 * Base JavaScript Template module
 * @module _includes/layouts/base
 * @param {Object} data 11ty’s data object
 * @return {string} The rendered template
 * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
 * @see {@link https://www.11ty.dev/docs/shortcodes/ 11ty shortcodes}
 */
module.exports = function (data) {
  var l10n = data.site[data.locale]
  return `<!DOCTYPE html>
  <html lang="${data.locale ? l10n.locale : data.site.defaultLocale}">
    ${this.headTag(data)}
    <body class="grid gap ${data.page.fileSlug ? data.page.fileSlug : 'home'}">
      ${this.siteHeader(data)}
      ${this.nav(data.collections.nav, data.page, ['flex', 'gap', 'wrap'])}
      <main id="main">
        ${data.content}
      </main>
      ${this.siteFooter(data)}
    </body>
  </html>`
}
