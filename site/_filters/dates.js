const dayjs = require("dayjs");

dayjs
  .extend(require("dayjs/plugin/localizedFormat"))
  .extend(require("dayjs/plugin/relativeTime"))
  .extend(require("dayjs/plugin/utc"))
  .extend(require("dayjs/plugin/timezone"));

const dayjsLocales = {
  // dayjs sometimes don't use the right format!
  "zh-TW": "zh-tw",
  "en-GB": "en-gb",
  // 'en-US': 'en',
};
const tz = "Asia/Taipei";

Object.values(dayjsLocales).forEach((locale) =>
  require(`dayjs/locale/${locale}`)
);

module.exports = {
  dateFormat: function (date, format = "LLL", locale = this.ctx.site.locale) {
    return dayjs(date).locale(dayjsLocales[locale]).tz(tz).format(format);
  },

  dateRelative: function (date, locale = this.ctx.site.locale) {
    return dayjs(date).locale(dayjsLocales[locale]).tz(tz).fromNow();
  },

  dateISO: (date) => dayjs(date).tz(tz).toISOString(),
  dateRSS: (date) => dayjs(date).tz(tz).format("ddd, D MMM YYYY HH:mm:ss ZZ"),
};
