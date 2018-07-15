export default function (trackingId) {
    /* eslint-disable */

    // Standard Google Universal Analytics code
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://ssl.google-analytics.com/analytics.js','ga');

    window.ga('create', trackingId, 'auto');
    window.ga('set', 'checkProtocolTask', function(){});
    window.ga('require', 'displayfeatures');
}