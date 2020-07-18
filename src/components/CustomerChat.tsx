import React, { useEffect } from 'react';

const facebookAppId = "112481290497040"


export interface CustomWindow extends Window {
    fbAsyncInit: any
    FB: any
}

declare let window: CustomWindow;

const CustomerChat = () => {
    useEffect(() => {

        window['fbAsyncInit'] = function () {
            window.FB.init({
                xfbml: true,
                version: 'v5.0'
            });
        };
        (function (d, s, id) {
            var js: any, fjs:any = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/sk_SK/sdk/xfbml.customerchat.js';
            js.defer = true
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    })



    return (<>
            <div id="fb-root" />
            <div
                className="fb-customerchat"
                attribution="setup_tool"
                page_id={facebookAppId}
                logged_in_greeting="Ako vám môžeme pomôcť?"
                logged_out_greeting="Ako vám môžeme pomôcť?"
            />
        </>
    )
  
}

export default CustomerChat;