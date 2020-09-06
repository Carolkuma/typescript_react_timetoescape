import React from "react";

const createMarkup = () => {
  return {
    __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-173979954-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-173979954-1');
</script>
`,
  };
};

const GoogleAnalytics = () => <div dangerouslySetInnerHTML={createMarkup()} />;

export default GoogleAnalytics;


