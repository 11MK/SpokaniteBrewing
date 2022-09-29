import Image from "next/Image";
import Insta from "../public/instagram-svgrepo-com.svg";
import MobileMenu from "./MobileMenu";
import Faceboob from "../public/facebook-svgrepo-com.svg";
import { motion, useCycle } from "framer-motion";
import React, { useState, useEffect } from "react";
import { header, headerVisible, headerHidden } from "./header.module.css";
import MenuToggle from "./MenuToggle";
import { Menu } from "@headlessui/react";
import Link from "next/link";

function create_cookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toLocaleDateString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function get_cookie(name) {
  var name_equals = name + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(name_equals) === 0) {
      return c.substring(name_equals.length, c.length);
    }
  }
  return null;
}

var botPattern =
  "(googlebot/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
var regex = new RegExp(botPattern, "i");

function test() {

  if (!regex.test(navigator.userAgent)) {
    //Test to see if Human

    //Redirect to age gate if user not submitted check
    if (get_cookie("form_submitted") == null) {
      <div className="bg-nord-dark-grey h-[100vh] w-[100vw] z-40">
        <div>
          <button
            className={`bg-transparent hover:bg-nord-dark-foot text-nord-dark-foot font-semibold hover:text-white py-2 px-4 font-aldrich border border-nord-dark-foot bg-nord-white rounded shadow transition ease-in-out duration-200 `}
            type="button"
            onClick={create_cookie("form_submitted", "true", 1)}
          >
            YES
          </button>
          <button
            className={`bg-transparent hover:bg-nord-dark-foot text-nord-dark-foot font-semibold hover:text-white py-2 px-4 font-aldrich border border-nord-dark-foot bg-nord-white rounded shadow transition ease-in-out duration-200 `}
            type="button"
            onClick={
              <Link
                href={"https://giphy.com/gifs/emote-catjam-jpbnoe3UIa8TU8LM13"}
              />
            }
          >
            NO
          </button>
        </div>
      </div>;
    }
  }
}

export default function Verify() {
  test;
}
