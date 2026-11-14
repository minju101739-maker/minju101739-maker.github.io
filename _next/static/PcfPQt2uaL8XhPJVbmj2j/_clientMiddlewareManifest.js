self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/|fonts\\/|favicon|.*\\.(?:png|jpg|jpeg|svg|webp|ico|woff2?|json|css|js)$).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!_next/|fonts/|favicon|.*\\.(?:png|jpg|jpeg|svg|webp|ico|woff2?|json|css|js)$).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()