import React, { useEffect } from 'react';

const facebookAppId = "112481290497040"


export interface CustomWindow extends Window {
    fbAsyncInit: any
    FB: any
}

declare let window: CustomWindow;

const createMarkup = () => {
  return {
    __html: `
    <!-- Load Facebook SDK for JavaScript -->
      <div id="fb-root"></div>
      <script>
        debugger
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v8.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/sk_SK/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>

      <!-- Your Chat Plugin code -->
      <div class="fb-customerchat"
        attribution=setup_tool
        page_id="112481290497040"
  logged_in_greeting=" Ako vám môžeme pomôcť?"
  logged_out_greeting=" Ako vám môžeme pomôcť?">
      </div>`,
  };
};


const CustomerChat = () => <><div dangerouslySetInnerHTML={createMarkup()} /></>


export default CustomerChat;