import { createGlobalStyle } from 'styled-components';

const globalFontIcon = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1554044641236'); /* IE9 */
    src: url('./iconfont.eot?t=1554044641236#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWwAAsAAAAACugAAAViAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqINIcvATYCJAMcCxAABCAFhG0HYhuJCSMRdntwcpD9xYENrqdpjsVQDLHYthyqeGCOLcR84a2Pd4ax+qxiE9v3fo+HpzXa+zOzcqYNtUY0q6ZZvYonSI0QCYlmEpfDoqYd/j3tpRiSGQgmINmcHFSdOPIgtF8n/JEB0IKm1PW25hyRERGmKGvbbR79Q77l/OUz+vsxl2fXd13szdt6+W/mhkmCJSJH0pAIScyS9hGilEYolcdwiq/CVfRvJzBovrVix644FLQKNAX0nD9Tmg9ak1vxYYbWVrucWqp4ptKmJ+km4Kn8+/GDS7QkVYZ32nMyvAhs6RTn9rLJnnQik26nF8T1LDLWohAPXcO3s1peKxt8/83iAEa1krob69Z1Ht3w24fv9v7vmafj4jDK2skqpVb/eImoUfMwMI6Y6pbU8Aoynb2Cis5DQaEbVhB8HTICz1wyuCWgNXuPYgFxmPhIGGs3L5JRRVb6y0wRWcrKShyjNH2slIyMOiInp6guqyPXiKKUDf+oBkEIqAlaDSV3ALIDT53HQxCCESAuL8X59BipjvF4jEBTQGkQ+ARt5TdmjfEYzcBJquimjXq9HWQreuoR6CEKoRgkkRCUGMeNLeSjZOK0+PEaoFaOnoC41CQiz4wDDjlWgEBwLgwQTI4lXwJDCAIE5FWSEQM3CiwmXENZ9dH4X0sRxuVQuBJJz+AbwLu10vJPIIzXk+CzMH0bogiCgmk/bGkMkOMIcwGCCsViPPOmR4+whw9zyoMKGrcQi9tpDZxPTR6rXrNIuEOtlc+vBD6wCZyaTK3wsTUfpSeoSWacHEuj8SSCYoqAoITBvsFHJJoQYXOlk/vCvb1nzhSrqLqMmG9XKbl8aVTbVFt08z43nWP3FNbzCjsASz214/I4N2+KtF0No98LtU20RxcWwuZV5sNGtUZztw8Nuji7XLKzm5oSGozdNHX5GVsdUJ13W1wYDXVF4friqBb4fTI9/bFjYzBreGlpmBXUi98KOsX584dzKjP0wG9M8//TEeA+UAlTWuC18mV0zRviG+qLGiwbROZHP4m4xMexZJxFnEhKNFpYWuiFeIv4hlilyaIxziI21mZokA3xBkM8OkQW/GBYWIKzJZH3rMLuFSv816W4IiARY4UUlAdIOL8DGpsueTlC3GCHWmu8XD4biQ3yeZVDNN3QVv+tY/7R3ADc6eCxL19iCwbehYB9h964o7uDdegQCwwdJwQ36+CJ0AHSeAnLD/9apGVCjvwez/J/kmDNO/xe4auKAsuatx72YSVbuC4vq1I8696Y6p9+pjZiNWIptBKqbMtMNUk07uw0TjJJWTFJNU58EmM01WTFRZxomrpiOjwDBB/kSCTsg4yIKBjYEOQcBC56RA78lHwhfUH6n/73//PZjP59/pA30J/J5/LWhX83V16FGuUq+v1ukf1h2bvLf5/LY3qygHybJdgitGZRzxRT1u8+0NMUt1l4yxJZHVLQ2Gu0mDDIFrCAxyd9Sc86E9psa7LO6JA05kHWWkopjLVQGbIeaq3NMGiN3WcPmXJVFmUAqz0gEMY9h2TUC8jGvaQUxmeozPoFtfHIMOhQqF5yyPJ7oj2UjErQgv5Da2hynE8OSu8N6/eg2KiTuS/k0OYgi1Nr7YoTchpHhE+dizhwTCNcyN1wGAg8U4dG4kbEF0ni3N4pNjTODkpGJWiB/oPW0OTEpeVg+/kb1u9Bsc+sb+UXcmg3DjKxNATlap5CzVqWkeFT54QWHXDXbhrBhQZxYGUC3n2nDo3EmhhFX0hoPxfWHOdvHYfzOhiEb9dEihwlqqijidb6FreCq+Db6aS8jyx9p4GUXbXtVpuAik1zmNTn38oo/eWazQAAAA==') format('woff2'),
    url('./iconfont.woff?t=1554044641236') format('woff'),
    url('./iconfont.ttf?t=1554044641236') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1554044641236#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default globalFontIcon;
