export const socialShare = () => {
  (function (e, t) {
    if (typeof exports === 'object' && typeof module === 'object') {
      module.exports = t();
    } else if (typeof define === 'function' && define.amd) {
      define([], t);
    } else if (typeof exports === 'object') {
      exports.WebflowTools = t();
    } else {
      e.WebflowTools = t();
    }
  })(self, function () {
    'use strict';

    interface URLS {
      tw: string;
      fb: string;
      in: string;
    }

    const URLS: URLS = {
      tw: 'https://twitter.com/share?',
      fb: 'https://www.facebook.com/sharer/sharer.php?',
      in: 'https://www.linkedin.com/shareArticle?mini=true&',
    };

    const SHARE_FACEBOOK_ATTR = 'r-share-facebook';
    const SHARE_TWITTER_ATTR = 'r-share-twitter';
    const SHARE_LINKEDIN_ATTR = 'r-share-linkedin';
    const SHARE_URL_ATTR = 'r-share-url';
    const TITLE_ATTR = 'title';
    const SUMMARY_ATTR = 'summary';

    function getAttributes(element: Element) {
      return {
        title: element.getAttribute(TITLE_ATTR) || '',
        summary: element.getAttribute(SUMMARY_ATTR) || '',
      };
    }

    function buildShareUrl(platform: keyof URLS, data: { title: string; summary: string }) {
      const params: { [key: string]: string } =
        platform === 'fb'
          ? { u: window.location.href, title: data.title || document.title }
          : {
              url: window.location.href,
              title: data.title || document.title,
              summary: data.summary || '',
            };

      return URLS[platform] + new URLSearchParams(params).toString();
    }

    document.querySelectorAll(`[${SHARE_TWITTER_ATTR}]`).forEach((element) => {
      const data = getAttributes(element);
      (element as HTMLAnchorElement).href = buildShareUrl('tw', data);
    });

    document.querySelectorAll(`[${SHARE_FACEBOOK_ATTR}]`).forEach((element) => {
      const data = getAttributes(element);
      (element as HTMLAnchorElement).href = buildShareUrl('fb', data);
    });

    document.querySelectorAll(`[${SHARE_LINKEDIN_ATTR}]`).forEach((element) => {
      const data = getAttributes(element);
      (element as HTMLAnchorElement).href = buildShareUrl('in', data);
    });

    document.querySelectorAll(`[${SHARE_URL_ATTR}]`).forEach((element) => {
      const url = window.location.href;
      element.addEventListener('click', () => {
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.value = url;
        input.select();
        input.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(input.value);
        document.body.removeChild(input);
      });
    });

    return {};
  });
};
