import { createGlobalStyle } from 'styled-components';

const GlobalIconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1554001174155'); /* IE9 */
    src: url('./iconfont.eot?t=1554001174155#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAV8AAsAAAAAClQAAAUtAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqHRIZPATYCJAMYCw4ABCAFhG0HWxsICcgOpZDAwAAAoAZgPPx3n943M8lOG4YSyvkasOCytaClVreFqgVulQq0A5X+EW7ZxLh0g515Ds40FbVIxZAEPHRJxUkd6L9jL+L6P8dMl9Zg+dc2l4zEvdHeAMcDGljGdfoOrECOD0RvGJ7hQtRwAGcTQFeLfsRy3hIRWDSiDlh3Hgp4gI0s6AZyYPWWio3FQpwKDDalyWcAvOqfjz8QggVImAxk4e5srh9mfDo+P0ql/k/BBokA6eZc6G0DGaiAAuK+0nOJspkKBU3+Am0R0Mci0Z+OzwY+G/fZsc+P/v8/kYIEgpWqYQXJ5v7xGBBNwJo+xK6yDfDp4HwS+BzgU8DnOD4ZfB7jE+DrqEUDGpr9CRMQC4B4A4KreAr75XfSMwfEO2lVGb+qhWWrOavVUT2qwZoURbM3f1mNohTMqzJVYupMAGNy1bkcxynZAldxWzmfuSJVLeVy2UJtwaxR5Ksy3VOu6JFy2drpV5v+vmzZZzkzpVszVxGMeTVny14J9PMVXo5AmxFwp1bSpiGC40CIuFipJGgRIVHLTqTFU2nziRxItooowq1dl29B59St8dzNZeueBj2AMs8RpqKYKDNFuuUKSF3JZR8mCN9rr8mvv668+qr0yiubmEo0onDIa6/tytTIefPqy/e+tFQ8s2pHPr+PoqHoCE212UMWDYfnxcxV5tXZK1NXrMnI63C9ZipD1+tZaUh+NSUKaWfZ+j7wgQP3369WVArHO86o0B57NF3vri898xKzlu5/HzVNmHMhsrzfz+ToZ54p1Y9uXfh9sd5Vn77ppjk3Vtw4J12X3nzG0SPCiPBof/811xRbrnjGLfy5eM6FlTeOufmm9ELDi3fenK6Dl+Ayp+S8icv0URo78FK81Y+7cKnjsp8u44SlS2hoSeeSkgomO7s6fXJp51K82JR0Jpd0Ll6cKbFWLg2US4mx1MkPo7MLHtDmv9g950XV/r939mvhacslcpY3NO11+u9pSePRCUMEM3NQ75FDto3c4hmTPtmkGE/XV//d0PFjRws8vztHPfYoJZS5rhAazvTFZ+7bTV58MQmVu7EIWsiLsBAdUM3HyHbsr19Lda7U8b9/lUc8fz7DHRPnvuj7JOztin8+bmCOdiojfBxdNT7xmbv5vg+qjncf7yp2FytOX7/atbxtz562Fa5Vt7lWty0fCUPfatdtFazl7tW3uZvXwcx3+vXXqYuoUIqEkoIu+iLae2Ev8i75gvwFkP7J/0H9f36AAlB/n9+ipgDU91MPUjPfwb8DL1/92rPZMeVXlqMB8PHYshodqu+nYTENvA21sLD0/eotbnhp5VM5sTbLuIVrp1qyEL1pJfsnEtCFgHdpYOC9TenGC2t8IXTVHpIyzZCx2pEF2w8NnDHQxJoOXX3mb++phFGIMgrA3BEABKfrgWR3P1CcnkXS2HeBUeNbsHAGBYgclUfkdEYIzcaqx1D9vHcXH/LpcY3ZDWTqV6mBbVEPDuWaIqs4GYrzI4PDaX6+GlfxJpYktwcEw9B4Desxfh44nxqN6nwC62HVZwwGDSMxaWhIq3qlQZ8eA2Q2TOVhUPnxvHbhhfjo4jTZ24Cy719FFbBNlAduaDsRlKmwpNDgvBGDhhdAztfEF2p7KMOTtgsQGAwanqbBdDG8edClitKMjpeoHhem8jEMCq6QSphkCHXTFtUM7l4Xu5f7oIu8QDNIgiJogiEsRBkwVzhkqFZPIjHg13fEo7rHT5/VYZak6sG+IIp7tv/bqIwrZQYAAAAA') format('woff2'),
    url('./iconfont.woff?t=1554001174155') format('woff'),
    url('./iconfont.ttf?t=1554001174155') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1554001174155#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .ic-write:before {
    content: "\e687";
  }

  .ic-app-download:before {
    content: "\e60f";
  }

  .ic-font:before {
    content: "\e636";
  }

  .ic-search:before {
    content: "\e62d";
  }

  .ic-navigation:before {
    content: "\e786";
  }
`

export default GlobalIconFont;
